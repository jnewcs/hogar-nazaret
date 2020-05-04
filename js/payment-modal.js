document.addEventListener('DOMContentLoaded', () => {
  var formContainer = document.getElementById('payment-form-inner-container');
  if (formContainer) {
    var modalContainer = document.getElementById('donation-content-container');
    var loadingContainer = document.getElementById('loading-container');
    var successContainer = document.getElementById('success-container');
    var errorContainer = document.getElementById('error-container');
    var closeBtn = document.getElementById('donation-modal-close-btn');
    var oneTimeAmountField = document.getElementById('one-time-donation-amount');

    var stripeKey = formContainer.dataset.key;
    var lang = formContainer.dataset.lang;
    var label = formContainer.dataset.label;
    var env = formContainer.dataset.env;
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
      closeBtn.classList.add('is-hidden');

      loadingContainer.classList.remove('is-hidden');

      // Send the token to your server to charge it!
      var finalAmount = parseInt(oneTimeAmountField.value) * 100;
      var requestBody = {
        amount: finalAmount,
        stripe_token: ev.token.id,
        email: ev.payerEmail,
        lang: lang,
        env: env
      };
      const failureHandler = function() {
        // Report to the browser that the payment failed, prompting it to
        // re-show the payment interface, or show an error message and close
        // the payment interface.
        modalContainer.classList.add('is-hidden');
        loadingContainer.classList.add('is-hidden');
        successContainer.classList.add('is-hidden');

        errorContainer.classList.remove('is-hidden');
        closeBtn.classList.remove('is-hidden');

        ev.complete('fail');
      };

      fetch('https://boiling-earth-96925.herokuapp.com/payments', {
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

          successContainer.classList.remove('is-hidden');
          closeBtn.classList.remove('is-hidden');

          // Track successful PaymentRequest
          window.trackEvent('payment_request_sucess', {
            url: window.location.pathname,
            title: document.title
          });

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
          type: 'donate',
          // One of 'default', 'book', 'buy', or 'donate'
        }
      }
    });

    paymentRequest.canMakePayment().then(function(result) {
      if (result) {
        paymentRequestElement.mount('#payment-request-button');
        oneTimeAmountField.addEventListener('change', function(e) {
          var newAmount = parseInt(e.target.value) * 100;
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
  }
});
