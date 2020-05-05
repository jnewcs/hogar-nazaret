document.addEventListener('DOMContentLoaded', () => {
  var formContainer = document.getElementById('hosted-fields');
  if (formContainer) {
    var stripeKey = formContainer.dataset.key;
    var lang = formContainer.dataset.lang;
    var description = formContainer.dataset.description;
    var env = formContainer.dataset.env;
    var successMsg = formContainer.dataset.success;

    var stripe = Stripe(stripeKey, { locale: lang });
    var elements = stripe.elements();
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

    var cardNumber = elements.create('cardNumber', {
      style: elementStyles,
      classes: elementClasses,
    });
    cardNumber.mount('#hosted-fields-card-number');

    var cardExpiry = elements.create('cardExpiry', {
      style: elementStyles,
      classes: elementClasses,
    });
    cardExpiry.mount('#hosted-fields-card-expiry');

    var cardCvc = elements.create('cardCvc', {
      style: elementStyles,
      classes: elementClasses,
    });
    cardCvc.mount('#hosted-fields-card-cvc');

    function registerElements(elements) {
      var form = formContainer.querySelector('form');
      var error = formContainer.querySelector('.error');
      var errorMessage = error.querySelector('.notification');

      function enableInputs() {
        Array.prototype.forEach.call(
          document.querySelectorAll(
            "input[type='text'], input[type='email'], input[name='give_a_hug_donation_amount']"
          ), function(input) {
            input.removeAttribute('disabled');
          }
        );
      }

      function disableInputs() {
        Array.prototype.forEach.call(
          document.querySelectorAll(
            "input[type='text'], input[type='email'], input[name='give_a_hug_donation_amount']"
          ), function(input) {
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
      elements.forEach(function(element, idx) {
        element.on('change', function(event) {
          if (event.error) {
            error.classList.remove('is-hidden');
            savedErrors[idx] = event.error.message;
            errorMessage.innerText = event.error.message;
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
              errorMessage.innerText = nextError;
            } else {
              // The user fixed the last error; no more errors.
              error.classList.add('is-hidden');
            }
          }
        });
      });

      form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Trigger HTML5 validation UI on the form if any of the inputs fail validation
        var plainInputsValid = true;
        Array.prototype.forEach.call(form.querySelectorAll('input'), function(input) {
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
        var loadingContainer = document.getElementById('give-a-hug-donation-options-loading-container');
        var donationOptions = document.getElementById('give-a-hug-donation-options');
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
        stripe.createToken(elements[0], additionalData).then(function(result) {
          const resetToInitialState = function() {
            // Report to the browser that the payment failed, prompting it to
            // re-show the payment interface
            loadingContainer.classList.add('is-hidden');
            formContainer.classList.remove('submitting');
            donationOptions.classList.remove('is-hidden');
          };

          if (result.token) {
            // Send the token to our server to charge it :)
            var finalAmountinDollars = document.querySelector('input[name="give_a_hug_donation_amount"]:checked').value;
            var finalAmount = parseInt(finalAmountinDollars) * 100;
            var requestBody = {
              amount: finalAmount,
              stripe_token: result.token.id,
              email: result.token.email,
              description: description,
              lang: lang,
              env: env
            };
            fetch('https://boiling-earth-96925.herokuapp.com/payments', {
              method: 'POST',
              body: JSON.stringify(requestBody),
              headers: {'content-type': 'application/json'},
            })
            .then(function(response) {
              if (response.ok) {
                // Track successful Stripe Elements payment
                window.trackEvent('stripe_elements_payment_success', {
                  amount: finalAmount
                });

                // Show a payment notification and the share interface
                var paymentNotification = document.getElementById('give-a-hug-donation-options-notification');
                paymentNotification.innerHTML = successMsg;
                paymentNotification.classList.remove('is-hidden');
                var eventShareCard = document.getElementById('event-donation-engine-share');
                eventShareCard.classList.remove('is-hidden');

                // Reset the payment card and then hide it
                resetToInitialState();
                enableInputs();
                var paymentCard = document.getElementById('event-donation-engine-payment');
                paymentCard.classList.add('is-hidden');
              } else {
                resetToInitialState();
              }
            })
            .catch(function() {
              resetToInitialState();
            });
          } else {
            resetToInitialState();
            enableInputs();
          }
        });
      });
    }
    registerElements([cardNumber, cardExpiry, cardCvc]);
  }
});
