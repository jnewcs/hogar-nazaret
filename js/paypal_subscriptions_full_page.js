var style = {
  shape: 'rect',
  color: 'gold',
  layout: 'vertical',
  label: 'paypal'
};
var padrinosChoicesContainer = document.getElementById('padrinos-choices-section-full-page');
var onApprove = function(_data, _actions) {
  window.trackEvent('Paypal checkout completed subscription [padrinos page]');
  const successContainer = document.getElementById('padrino-subscription-confirmation');
  successContainer.classList.remove('is-hidden');
  padrinosChoicesContainer.classList.add('is-hidden');
};

var radios = document.querySelectorAll('input[type=radio][name="donation-tier-full-page"]');
radios.forEach(function(radio) {
  const planId = radio.value; // The ID for the subscription plan is stored in radio's value attribute
  paypal.Buttons({
    style: style,
    createSubscription: function(_data, actions) {
      return actions.subscription.create({
        plan_id: planId
      });
    },
    onApprove: onApprove
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
