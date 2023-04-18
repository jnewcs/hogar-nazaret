document.addEventListener('DOMContentLoaded', function () {
  var formContainer = document.getElementById('hosted-fields');
  if (formContainer) {
    var stripeKey = formContainer.dataset.key;
    var lang = formContainer.dataset.lang;
    window.campaignDonationDescription = formContainer.dataset.description;
    var env = formContainer.dataset.env;
    var donationSuccessMsg = formContainer.dataset.success;
    var donationErrorMsg = formContainer.dataset.error;

    var form = document.getElementById('payment_interface_form');
    var errorContainer = formContainer.querySelector('.error');
    var errorMessageContainer = errorContainer.querySelector('.notification');
    var loadingContainer = document.getElementById('give-a-hug-donation-options-loading-container');
    var donationOptions = document.getElementById('give-a-hug-donation-options');

    window.stripeInstance = Stripe(stripeKey, { locale: lang });
    window.stripeElements = window.stripeInstance.elements();
    var elementStyles = {
      base: {
        color: '#4a4a4a',  // Dark Grey color
        fontWeight: 600,
        fontFamily: 'Quicksand, Open Sans, Segoe UI, sans-serif',
        fontSize: '16px',
        fontSmoothing: 'antialiased',

        '::placeholder': {
          color: '#bbb2d7', // Primary Light color
        },

        ':focus::placeholder': {
          color: '#bbb2d7', // Primary Light color
        },
      },
      invalid: {
        color: '#4a4a4a',  // Dark Grey color
      },
    };
    var elementClasses = { focus: 'focus', empty: 'empty', invalid: 'invalid' };

    var cardNumber = window.stripeElements.create('cardNumber', {
      style: elementStyles,
      classes: elementClasses,
    });
    cardNumber.mount('#hosted-fields-card-number');

    var cardExpiry = window.stripeElements.create('cardExpiry', {
      style: elementStyles,
      classes: elementClasses,
    });
    cardExpiry.mount('#hosted-fields-card-expiry');

    var cardCvc = window.stripeElements.create('cardCvc', {
      style: elementStyles,
      classes: elementClasses,
    });
    cardCvc.mount('#hosted-fields-card-cvc');

    window.handleStripeTokenSubmission = function(result, type = 'stripe_elements', enableInputs = null) {
      const resetToInitialState = function(showErrorMessage = false) {
        // Report to the browser that the payment failed, prompting it to
        // re-show the payment interface
        loadingContainer.classList.add('is-hidden');
        formContainer.classList.remove('submitting');
        donationOptions.classList.remove('is-hidden');
        if (enableInputs) {
          enableInputs();
        }
        if (showErrorMessage) {
          if (type === 'payment_request') {
            result.complete('fail');
          }
          showError(donationErrorMsg);
        }
      };

      if (result.token) {
        // Send the token to our server to charge it :)
        var finalAmountinDollars = document.querySelector('input[name="give_a_hug_donation_amount"]:checked').value;
        if (finalAmountinDollars === 'custom') {
          finalAmountinDollars = document.getElementById('give-custom-gift-amount').value;
        }
        var finalAmount = parseFloat(finalAmountinDollars).toFixed(2) * 100;
        var requestBody = {
          amount: finalAmount,
          stripe_token: result.token.id,
          email: result.payerEmail || result.token.email,
          description: window.campaignDonationDescription,
          lang: lang,
          env: env
        };
        fetch('https://web-production-9b27.up.railway.app/payments', {
          method: 'POST',
          body: JSON.stringify(requestBody),
          headers: {'content-type': 'application/json'},
        })
        .then(function(response) {
          if (response.ok) {
            // Track successful Stripe Elements payment
            window.trackEvent('stripe_elements_payment_success', {
              amount: finalAmount,
              type: type
            });

            if (type === 'payment_request') {
              result.complete('success');
            }

            // Show a payment success notification and the share interface
            var paymentNotification = document.getElementById('give-a-hug-donation-options-notification');
            paymentNotification.innerHTML = donationSuccessMsg;
            paymentNotification.classList.remove('is-hidden');
            var eventShareCard = document.getElementById('event-donation-engine-share');
            eventShareCard.classList.remove('is-hidden');

            // Reset the payment card and then hide it
            resetToInitialState();
            var paymentCard = document.getElementById('event-donation-engine-payment');
            paymentCard.classList.add('is-hidden');
          } else {
            window.trackEvent('stripe_elements_payment_error', { type: type });
            resetToInitialState(true);
          }
        })
        .catch(function() {
          window.trackEvent('stripe_elements_payment_error', { type: type });
          resetToInitialState(true);
        });
      } else {
        window.trackEvent('stripe_elements_token_creation_error', { type: type });
        resetToInitialState(true);
      }
    }

    function registerElements(elements) {
      var inputSelectors = "input[type='text'], input[type='email'], input[type='number'], input[name='give_a_hug_donation_amount']";

      function enableInputs() {
        Array.prototype.forEach.call(
          form.querySelectorAll(inputSelectors), function(input) {
            input.removeAttribute('disabled');
          }
        );
      }

      function disableInputs() {
        Array.prototype.forEach.call(
          form.querySelectorAll(inputSelectors), function(input) {
            input.setAttribute('disabled', 'true');
          }
        );
      }

      function triggerBrowserValidation() {
        // The only way to trigger HTML5 form validation UI is to fake a user submit event.
        var submit = document.createElement('input');
        submit.type = 'submit';
        submit.style.display = 'none';
        form.appendChild(submit);
        submit.click();
        submit.remove();
      }

      // Listen for errors from each Element, and show error messages in the UI.
      var savedErrors = {};
      var showError = function(errorMessage) {
        errorContainer.classList.remove('is-hidden');
        errorMessageContainer.innerText = errorMessage;
      };
      elements.forEach(function(element, idx) {
        element.on('change', function(event) {
          if (event.error) {
            savedErrors[idx] = event.error.message;
            showError(event.error.message);
          } else {
            savedErrors[idx] = null;

            // Loop over the saved errors and find the first one, if any.
            var nextError = Object.keys(savedErrors)
              .sort()
              .reduce(function(maybeFoundError, key) {
                return maybeFoundError || savedErrors[key];
              }, null);

            if (nextError) {
              // Now that they've fixed the current error, show another one.
              errorMessageContainer.innerText = nextError;
            } else {
              // The user fixed the last error; no more errors.
              errorContainer.classList.add('is-hidden');
            }
          }
        });
      });

      form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Trigger HTML5 validation UI on the form if any of the inputs fail validation
        var inputsToValidate = "input[type='text'], input[type='email'], input[type='number'], input.validate-field[name='give_a_hug_donation_amount']";
        var plainInputsValid = true;
        Array.prototype.forEach.call(form.querySelectorAll(inputsToValidate), function(input) {
          if (input.checkValidity && !input.checkValidity()) {
            plainInputsValid = false;
            return;
          }
        });
        if (!plainInputsValid) {
          triggerBrowserValidation();
          return;
        }

        // Show a loading screen and disable inputs
        loadingContainer.classList.remove('is-hidden');
        formContainer.classList.add('submitting');
        donationOptions.classList.add('is-hidden');
        disableInputs();

        // Gather additional customer data we may have collected in our form.
        var email = formContainer.querySelector('#hosted-fields-email');
        var zip = formContainer.querySelector('#hosted-fields-zip');
        var additionalData = {
          email: email ? email.value : undefined,
          address_zip: zip ? zip.value : undefined,
        };

        // Use Stripe.js to create a token
        window.stripeInstance.createToken(elements[0], additionalData).then(function(result) {
          window.handleStripeTokenSubmission(result, 'stripe_elements', enableInputs);
        });
      });
    };

    registerElements([cardNumber, cardExpiry, cardCvc]);
  }
});
