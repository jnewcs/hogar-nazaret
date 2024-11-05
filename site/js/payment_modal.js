var formContainer = document.getElementById('payment-form-inner-container');
if (formContainer) {
  var modalContainer = document.getElementById('donation-content-container');
  var loadingContainer = document.getElementById('loading-container');
  var successContainer = document.getElementById('success-container');
  var errorContainer = document.getElementById('error-container');
  var canceledContainer = document.getElementById('canceled-container');
  var canceledContainerMessage = document.getElementById('canceled-container-message');
  var closeBtn = document.getElementById('donation-modal-close-btn');
  var oneTimeAmountField = document.getElementById('one-time-donation-amount');

  var stripeKey = formContainer.dataset.key;
  var lang = formContainer.dataset.lang;
  var label = formContainer.dataset.label;
  var genericCancelMessage = formContainer.dataset.genericCancelMessage;
  var successPageUrl = formContainer.dataset.successPageUrl;
  var formEnv = formContainer.dataset.env;
  var initialAmount = parseInt(oneTimeAmountField.value) * 100;

  var stripe = Stripe(stripeKey);
  const elementsOptions = {
    mode: 'payment',
    amount: initialAmount,
    currency: 'usd',
    loader: 'always'
  };
  var elements = stripe.elements(elementsOptions);
  const expressCheckoutElement = elements.create('expressCheckout', {
    buttonType: {
      googlePay: 'donate',
      applePay: 'donate'
    },
    buttonTheme: {
      googlePay: 'black',
      applePay: 'black'
    },
    // For some reason, Stripe won't show applePay/googlePay buttons if we don't
    // explicitly set their settings to 'always'
    paymentMethods: {
      applePay: 'always',
      googlePay: 'always',
      link: 'never',
    }
  });
  expressCheckoutElement.mount('#express-checkout-element');
  expressCheckoutElement.on('click', (event) => {
    modalContainer.classList.add('is-hidden');
    successContainer.classList.add('is-hidden');
    errorContainer.classList.add('is-hidden');
    canceledContainer.classList.add('is-hidden');
    closeBtn.classList.add('is-hidden');
    loadingContainer.classList.remove('is-hidden');

    var finalAmount = parseInt(oneTimeAmountField.value) * 100;
    const options = {
      emailRequired: true,
      lineItems: [
        {
          name: label,
          amount: finalAmount,
        }
      ]
    };
    // Update stripe.elements with the updated amount
    elements.update({
      amount: finalAmount,
    });
    // Allow the browser to show the payment interface!
    event.resolve(options);
  });

  const stripeFailureHandler = function(trackingEventName = 'stripe_express_checkout_failure') {
    // Report to the browser that the payment failed, prompting it to
    // re-show the payment interface, or show an error message and close
    // the payment interface.
    modalContainer.classList.add('is-hidden');
    loadingContainer.classList.add('is-hidden');
    successContainer.classList.add('is-hidden');
    canceledContainer.classList.add('is-hidden');

    errorContainer.classList.remove('is-hidden');
    closeBtn.classList.remove('is-hidden');

    window.trackEvent(trackingEventName);
  };

  const stripeCancelHandler = function() {
    // Report to the browser that the payment was canceled, prompting them to
    // re-show the donation modal
    modalContainer.classList.add('is-hidden');
    loadingContainer.classList.add('is-hidden');
    successContainer.classList.add('is-hidden');
    errorContainer.classList.add('is-hidden');

    canceledContainerMessage.innerText = genericCancelMessage;
    canceledContainer.classList.remove('is-hidden');
    closeBtn.classList.remove('is-hidden');

    window.trackEvent('stripe_express_checkout_cancel');
  }

  expressCheckoutElement.on('cancel', (error) => {
    console.error('[expressCheckoutElement.cancel] Error', { error });
    stripeCancelHandler();
  });

  expressCheckoutElement.on('confirm', async (event) => {
    const { error: submitError } = await elements.submit();
    if (submitError) {
      console.error('[expressCheckoutElement.submit] Error', { error: submitError });
      stripeFailureHandler();
      return;
    }

    console.log('expressCheckoutElement.confirm:', event);
    // Create the PaymentIntent and obtain clientSecret
    var finalAmount = parseInt(oneTimeAmountField.value) * 100;
    let email;
    if (event.billingDetails && event.billingDetails.email) {
      email = event.billingDetails.email;
    }
    const requestBody = {
      amount: finalAmount,
      email: email,
      description: label,
      lang: lang,
      env: formEnv
    };
    const intentUrl = 'https://web-production-9b27.up.railway.app/payments/intent';
    const res = await fetch(intentUrl, {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: { 'content-type': 'application/json' },
    });
    const { secret } = await res.json();
    if (!secret) {
      stripeFailureHandler('stripe_express_checkout_failure_no_secret');
      return;
    }

    const { error } = await stripe.confirmPayment({
      // `Elements` instance that's used to create the Express Checkout Element.
      elements,
      // `clientSecret` from the created PaymentIntent
      clientSecret: secret,
      // Our payment methods (Apply Pay, Google Pay) don't need a return_url defined :)
      confirmParams: {
        return_url: successPageUrl
      },
      // Uncomment below if you only want redirect for redirect-based payments.
      redirect: 'if_required',
    });

    if (error) {
      // This point is reached only if there's an immediate error when confirming the payment. Show the error to your customer (for example, payment details incomplete).
      stripeFailureHandler('stripe_express_checkout_failure_confirm_payment');
    } else {
      // Your customer will be redirected to your `return_url`.
      // Report to the browser that the payment was successful, prompting
      // it to close the browser payment interface.
      modalContainer.classList.add('is-hidden');
      loadingContainer.classList.add('is-hidden');
      errorContainer.classList.add('is-hidden');
      canceledContainer.classList.add('is-hidden');

      successContainer.classList.remove('is-hidden');
      closeBtn.classList.remove('is-hidden');

      window.trackEvent('stripe_express_checkout_success');
    }
  });

  const expressCheckoutDiv = document.getElementById('express-checkout-element');
  expressCheckoutElement.on('ready', function(data) {
    if (!data || !data.availablePaymentMethods) {
      // No buttons will show
      formContainer.classList.add('is-hidden');
      document.getElementById('payment-divider-for-one-time-donation').classList.add('is-hidden');
    } else {
      // Optional: Animate in the Element
      expressCheckoutDiv.style.visibility = 'initial';
    }
  });

  // ATH Móvil Checkout handlers
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
