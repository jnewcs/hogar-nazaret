var formContainer = document.getElementById('payment-form-inner-container');
if (formContainer) {
  var modalContainer = document.getElementById('donation-content-container');
  var loadingContainer = document.getElementById('loading-container');
  var successContainer = document.getElementById('success-container');
  var errorContainer = document.getElementById('error-container');
  var athCanceledContainer = document.getElementById('ath-canceled-container');
  var closeBtn = document.getElementById('donation-modal-close-btn');
  var oneTimeAmountField = document.getElementById('one-time-donation-amount');

  var stripeKey = formContainer.dataset.key;
  var lang = formContainer.dataset.lang;
  var label = formContainer.dataset.label;
  var formEnv = formContainer.dataset.env;
  var initialAmount = parseInt(oneTimeAmountField.value) * 100;

  var stripe = Stripe(stripeKey, { locale: lang });
  var elements = stripe.elements();
  var paymentRequest = stripe.paymentRequest({
    country: 'US',
    currency: 'usd',
    total: {
      amount: initialAmount,
      label: label
    },
    requestPayerName: true,
    requestPayerEmail: true
  });

  paymentRequest.on('token', function(ev) {
    modalContainer.classList.add('is-hidden');
    successContainer.classList.add('is-hidden');
    errorContainer.classList.add('is-hidden');
    athCanceledContainer.classList.add('is-hidden');
    closeBtn.classList.add('is-hidden');
    loadingContainer.classList.remove('is-hidden');

    // Send the token to your server to charge it!
    var finalAmount = parseInt(oneTimeAmountField.value) * 100;
    var requestBody = {
      amount: finalAmount,
      stripe_token: ev.token.id,
      email: ev.payerEmail,
      lang: lang,
      env: formEnv
    };
    const failureHandler = function() {
      // Report to the browser that the payment failed, prompting it to
      // re-show the payment interface, or show an error message and close
      // the payment interface.
      modalContainer.classList.add('is-hidden');
      loadingContainer.classList.add('is-hidden');
      successContainer.classList.add('is-hidden');
      athCanceledContainer.classList.add('is-hidden');

      errorContainer.classList.remove('is-hidden');
      closeBtn.classList.remove('is-hidden');

      ev.complete('fail');
    };

    fetch('https://web-production-9b27.up.railway.app/payments', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {'content-type': 'application/json'},
    })
    .then(function(response) {
      if (response.ok) {
        // Report to the browser that the payment was successful, prompting
        // it to close the browser payment interface.
        modalContainer.classList.add('is-hidden');
        loadingContainer.classList.add('is-hidden');
        errorContainer.classList.add('is-hidden');
        athCanceledContainer.classList.add('is-hidden');

        successContainer.classList.remove('is-hidden');
        closeBtn.classList.remove('is-hidden');

        // Track successful PaymentRequest
        window.trackEvent('stripe_payment_request_sucess');

        ev.complete('success');
      } else {
        failureHandler();
      }
    })
    .catch(function() {
      failureHandler();
    });
  });

  var paymentRequestElement = elements.create('paymentRequestButton', {
    paymentRequest: paymentRequest,
    style: {
      paymentRequestButton: {
        type: 'donate', // One of 'default', 'book', 'buy', or 'donate'
      }
    }
  });

  paymentRequest.canMakePayment().then(function(result) {
    if (result) {
      paymentRequestElement.mount('#payment-request-button');
      oneTimeAmountField.addEventListener('change', function(e) {
        var newAmount = parseInt(e.target.value) * 100; // Value is in cents
        paymentRequest.update({ total: {
          amount: newAmount,
          label: label
        }});
      });
    } else {
      formContainer.classList.add('is-hidden');
      document.getElementById('payment-divider-for-one-time-donation').classList.add('is-hidden');
    }
  });

  // ATH Movil Checkout handlers
  oneTimeAmountField.onchange = function() {
    if (!athMovilLoaded || !ATHM_Checkout || !ATHM_Checkout.publicToken) return;

    var newAmount = parseFloat(this.value).toFixed(2);
    if (!newAmount || isNaN(newAmount)) {
      newAmount = 1.00;
    }
    ATHM_Checkout.total = newAmount;
    ATHM_Checkout.subtotal = newAmount;
    ATHM_Checkout.items[0].price = newAmount;
  };

  oneTimeAmountField.onblur = function() {
    if (!athMovilLoaded || !ATHM_Checkout || !ATHM_Checkout.publicToken) return;

    var newAmount = parseFloat(this.value);
    if (!newAmount) {
      this.value = 1.00;
    } else {
      this.value = newAmount.toFixed(2);
    }
  };
}
