var style = {
  shape: 'rect',
  color: 'gold',
  layout: 'vertical',
  label: 'paypal'
};

var radios = document.querySelectorAll('input[type=radio][name="donation-tier-full-page"]');
var onApprove = function(_data, _actions) {
  window.trackEvent('Paypal checkout completed subscription [padrinos page]');

  // We hide all the Paypal buttons
  document.querySelectorAll('.paypal-button-container-full-page').forEach(function(el) {
    el.classList.add('is-hidden');
  });

  // We hide all cards, but the one with the selected radio button
  radios.forEach(function(radio) {
    if (radio.checked === false) {
      radio.parentElement.classList.add('is-hidden');
    }
  });

  const successContainer = document.getElementById('padrino-subscription-confirmation');
  successContainer.classList.remove('is-hidden');
};

radios.forEach(function(radio) {
  const planId = radio.value; // The ID for the subscription plan is stored in radio's value attribute
  paypal.Buttons({
    style: style,
    createSubscription: function(_data, actions) {
      return actions.subscription.create({
        plan_id: planId
      });
    },
    onApprove: onApprove,
    onError: function (_err) {
      window.trackEvent('Paypal checkout error [padrinos page]');
    }
  }).render(`#paypal-button-full-page-${planId}`);

  radio.addEventListener('change', function(e) {
    const newPlanId = e.target.value;
    document.querySelectorAll('.paypal-button-container-full-page').forEach(function(el) {
      el.classList.add('is-hidden');
    });
    const newButtonContainer = document.getElementById(`paypal-button-container-full-page-${newPlanId}`);
    newButtonContainer.classList.remove('is-hidden');
  })
});
