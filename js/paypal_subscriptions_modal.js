var style={shape:"rect",color:"gold",layout:"vertical",label:"paypal"},padrinosSuccessContainer=document.getElementById("padrinos-success-container"),modalRadios=document.querySelectorAll('input[type=radio][name="donation-tier-modal"]'),onApprove=function(t,e){window.trackEvent("Paypal checkout completed subscription [donation modal]"),document.querySelectorAll(".paypal-button-container-modal").forEach(function(n){n.classList.add("is-hidden")}),modalRadios.forEach(function(n){n.checked===!1&&n.parentElement.classList.add("is-hidden")}),padrinosSuccessContainer.classList.remove("is-hidden")};modalRadios.forEach(function(t){const e=t.value;paypal.Buttons({style,createSubscription:function(n,o){return o.subscription.create({plan_id:e})},onApprove,onError:function(n){window.trackEvent("Paypal checkout error [donation modal]")},onRender:function(){document.getElementById(`spinner-modal-${e}`).classList.add("is-hidden")}}).render(`#paypal-button-modal-${e}`),t.addEventListener("change",function(n){const o=n.target.value;document.querySelectorAll(".paypal-button-container-modal").forEach(function(a){a.classList.add("is-hidden")}),document.getElementById(`paypal-button-container-modal-${o}`).classList.remove("is-hidden")})});
