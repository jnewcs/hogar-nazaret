var style = {
  shape: 'rect',
  color: 'gold',
  layout: 'vertical',
  label: 'paypal'
};
var padrinosButtonContainer = document.getElementById('donation-content-container');
var padrinosLoadingContainer = document.getElementById('loading-container');
var padrinosErrorContainer = document.getElementById('error-container');
var padrinosSuccessContainer = document.getElementById('success-container');

var onApprove = function(_data, _actions) {
  window.trackEvent('Paypal checkout completed subscription [donation modal]');

  padrinosButtonContainer.classList.add('is-hidden');
  padrinosLoadingContainer.classList.add('is-hidden');
  padrinosErrorContainer.classList.add('is-hidden');
  padrinosSuccessContainer.classList.remove('is-hidden');
};

var radios = document.querySelectorAll('input[type=radio][name="donation-tier-modal"]');
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
  }).render(`#paypal-button-modal-${planId}`);

  radio.addEventListener('change', function(e) {
    const newPlanId = e.target.value;
    document.querySelectorAll('.paypal-button-container-modal').forEach(function(el) {
      el.classList.add('is-hidden');
    });
    const newButtonContainer = document.getElementById(`paypal-button-container-modal-${newPlanId}`);
    newButtonContainer.classList.remove('is-hidden');
  })
});
