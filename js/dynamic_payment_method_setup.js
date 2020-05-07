document.addEventListener('DOMContentLoaded', function() {
  // Setup Payment Request and dynamic handlers for donation amount
  if (!ATHM_Checkout || !window.stripeInstance) {
    window.trackEvent('failed_to_finish_setting_up_payment_methods');
    return;
  }

  var initialAmount = document.querySelector('input[name="give_a_hug_donation_amount"]:checked').value;
  var customAmountInput = document.getElementById('give-custom-gift-amount');

  var paymentRequest = window.stripeInstance.paymentRequest({
    country: 'US',
    currency: 'usd',
    total: {
      amount: parseFloat(initialAmount).toFixed(2) * 100,
      label: window.campaignDonationDescription
    },
    requestPayerName: true,
    requestPayerEmail: true
  });

  paymentRequest.on('token', function(result) {
    window.handleStripeTokenSubmission(result, 'payment_request');
  });
  paymentRequest.on('cancel', function() {
    window.trackEvent('stripe_elements_cancel', { type: 'payment_request' });
  });

  var paymentRequestElement = window.stripeElements.create('paymentRequestButton', {
    paymentRequest: paymentRequest,
    style: {
      paymentRequestButton: {
        type: 'donate', // One of 'default', 'book', 'buy', or 'donate'
      }
    }
  });

  paymentRequest.canMakePayment().then(function(result) {
    if (!result) return;
    if (!result.applePay) return;
    window.trackEvent('showing_apple_pay_donation');

    paymentRequestElement.mount('#payment-request-button-for-campaign');
    document.getElementById('payment-request-button-for-campaign-container').classList.remove('is-hidden');
  });

  var donationOptions = document.querySelectorAll('input[name="give_a_hug_donation_amount"]');
  var changePaymentButtonData = function(newAmount) {
    ATHM_Checkout.total = newAmount;
    ATHM_Checkout.subtotal = newAmount;
    ATHM_Checkout.items[0].price = newAmount;

    paymentRequest.update({ total: {
      amount: newAmount * 100,
      label: window.campaignDonationDescription
    }});
    return;
  }

  var customAmountContainer = document.getElementById('give-custom-gift-amount-container');
  customAmountInput.onchange = function() {
    var newAmount = parseFloat(this.value).toFixed(2);
    changePaymentButtonData(newAmount);
  };
  customAmountInput.onblur = function() {
    var newAmount = parseFloat(this.value);
    if (!newAmount) {
      this.value = '1';
    } else {
      this.value = newAmount.toFixed(2);
    }
  };

  for(var i = 0, max = donationOptions.length; i < max; i++) {
    donationOptions[i].onclick = function() {
      var newAmount;
      if (this.value !== 'custom') {
        customAmountContainer.classList.add('is-hidden');
        newAmount = parseFloat(this.value).toFixed(2);
        customAmountInput.value = '1';  // Always have a valid value here
      } else {
        customAmountContainer.classList.remove('is-hidden');
        newAmount = parseFloat(customAmountInput.value).toFixed(2);
      }

      changePaymentButtonData(newAmount);
    }
  }
});
