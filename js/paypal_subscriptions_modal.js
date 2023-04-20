var style = {
  shape: 'rect',
  color: 'gold',
  layout: 'vertical',
  label: 'paypal'
};

var padrinosSuccessContainer = document.getElementById('padrinos-success-container');
var modalRadios = document.querySelectorAll('input[type=radio][name="donation-tier-modal"]');

var onApprove = function(_data, _actions) {
  window.trackEvent('Paypal checkout completed subscription [donation modal]');

  // We hide all the Paypal buttons
  document.querySelectorAll('.paypal-button-container-modal').forEach(function(el) {
    el.classList.add('is-hidden');
  });

  // We hide all cards, but the one with the selected radio button
  modalRadios.forEach(function(radio) {
    if (radio.checked === false) {
      radio.parentElement.classList.add('is-hidden');
    }
  });
  padrinosSuccessContainer.classList.remove('is-hidden');
};

modalRadios.forEach(function(radio) {
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
      window.trackEvent('Paypal checkout error [donation modal]');
    },
    onRender: function() {
      const spinner = document.getElementById(`spinner-modal-${planId}`);
      spinner.classList.add('is-hidden');
    }
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
