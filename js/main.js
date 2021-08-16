document.addEventListener('DOMContentLoaded', function () {
  /* Navbar Burger Clicker */
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', function (){
        var target = el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the 'is-active' class on both the 'navbar-burger' and the 'navbar-menu'
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }

  /* Navbar dropdown clicking on mobile */
  var $navbarItemsWithDropdown = Array.prototype.slice.call(document.querySelectorAll('.navbar-item.has-dropdown'), 0);
  if ($navbarItemsWithDropdown.length > 0) {
    $navbarItemsWithDropdown.forEach(el => {
      el.addEventListener('click', function () {
        el.classList.toggle('is-open');
      });
    });
  }

  /*
   * Code for Main Highlight Carousel
   * We use Tiny Slider for our Carousels:
   * https://github.com/ganlanyuan/tiny-slider
   */
  //
  var carouselContainer = document.getElementById('carousel-container');
  if (carouselContainer) {
    var highlightCarousel = tns({
      container: '#carousel-container',
      items: 1,
      slideBy: 'page',
      preventScrollOnTouch: 'auto',
      speed: 400,
      edgePadding: 0,
      mouseDrag: true,
      autoHeight: true,
      nav: false,
      loop: false,
      controls: true,
      controlsContainer: document.getElementById('controls-container'),
      lazyload: true,
      arrowKeys: false,
      onInit: function() {
        var highlights = Array.prototype.slice.call(document.querySelectorAll('.carousel-highlight-container'), 0);
        highlights.forEach(highlight => {
          highlight.classList.remove('is-hidden');
        });
      }
    });

    // On mobile, we need to manually adjust the height
    var indexChangedHandler = function (_info, _eventName) {
      highlightCarousel.updateSliderHeight()
    }
    highlightCarousel.events.on('indexChanged', indexChangedHandler);

    var autoplayButton = document.getElementById('autoplay-button');
    if (highlightCarousel && autoplayButton) {
      // Manually setup autoplay for main highlight carousel
      var turnOffAutoPlay = function() {
        clearInterval(interval);
        autoplayButton.dataset.action = 'start';
      };

      var interval;
      var setAutoPlay = function() {
        interval = setInterval(function () {
          highlightCarousel.goTo('next');

          var info = highlightCarousel.getInfo();
          if (info.slideCount === info.displayIndex) {
            // This is the last slide, turn off autoplay
            turnOffAutoPlay();
          }
        }, 7500);
      };
      setAutoPlay();

      autoplayButton.addEventListener('click', function () {
        var currentAction = autoplayButton.dataset.action;
        if (currentAction === 'stop') {
          turnOffAutoPlay();
        } else {
          setAutoPlay();
          autoplayButton.dataset.action = 'stop';
        }
      });

      document.addEventListener('keydown', function (event) {
        if (event.keyCode === 37) {
          turnOffAutoPlay();
          highlightCarousel.goTo('prev');  // left-arrow
        } else if (event.keyCode === 39) {
          turnOffAutoPlay();
          highlightCarousel.goTo('next'); // right-arrow
        }
      });
    }
  }

  /* Code for News Carousel */
  var newsCarouselContainer = document.getElementById('news-carousel-container');
  if (newsCarouselContainer) {
    tns({
      container: '#news-carousel-container',
      items: 1,
      responsive: {
        900: {
          items: 2,
        },
        1200: {
          items: 3,
        }
      },
      edgePadding: 0,
      slideBy: 1,
      autoplay: false,
      arrowKeys: false,
      preventScrollOnTouch: 'auto',
      speed: 400,
      mouseDrag: true,
      nav: false,
      loop: true,
      controls: false,
      autoHeight: true,
      autoplay: true,
      autoplayTimeout: 15000,
      autoplayText: ['', ''],
      autoplayButtonOutput: false,
      lazyload: true
    });
  }

  /* Code for modal opening */
  var modalContainer = document.getElementById('donation-content-container');
  var loadingContainer = document.getElementById('loading-container');
  var successContainer = document.getElementById('success-container');
  var errorContainer = document.getElementById('error-container');
  var $modalOpeners = Array.prototype.slice.call(document.querySelectorAll('.modal-opener'), 0);
  var setStripeLoaded = function() {
    window.stripeLoaded = true;
  };
  var setPaypalModalScriptLodaded = function() {
    window.paypalModalCodeLoaded = true;
  }

  if ($modalOpeners.length > 0) {
    $modalOpeners.forEach(el => {
      el.addEventListener('click', function () {
        var target = el.dataset.target;
        if (target === 'donation-modal') {
          window.asyncLoadPaypalScript();
          if (window.paypalModalCodeLoaded === false) {
            const paypalModalScriptSrc = document.getElementById('sponsor-content').dataset.paypalScriptSrc;
            window.lazyLoadScript(paypalModalScriptSrc, setPaypalModalScriptLodaded, 'async_paypal_subscriptions_modal_js_load_fail');
          }

          if (window.stripeLoaded === false) {
            window.lazyLoadScript('https://js.stripe.com/v3', setStripeLoaded, 'async_stripe_load_fail');
            var paymentModalSrc = document.getElementById('payment-modal-src').dataset.src;
            window.lazyLoadScript(paymentModalSrc, undefined, 'async_payment_modal_fail');
          }

          // Track clicks to open the donation modal
          window.trackEvent('donation_model_open');
        }
        var $target = document.getElementById(target);
        modalContainer.classList.remove('is-hidden');
        loadingContainer.classList.add('is-hidden');
        successContainer.classList.add('is-hidden');
        errorContainer.classList.add('is-hidden');

        document.documentElement.classList.add('is-clipped');
        $target.classList.add('is-active');
      });
    });
  }

  /* Code for modal closing */
  var $modalClosers = Array.prototype.slice.call(document.querySelectorAll('.modal-closer'), 0);
  if ($modalClosers.length > 0) {
    $modalClosers.forEach(el => {
      el.addEventListener('click', function () {
        var target = el.dataset.target;
        if (target === 'donation-modal') {
          // Track clicks to close the donation modal
          window.trackEvent('donation_model_close');
        }
        var $target = document.getElementById(target);

        document.documentElement.classList.remove('is-clipped');
        $target.classList.remove('is-active');
      });
    });
  }

  /* Code for tab switching */
  var $tabs = Array.prototype.slice.call(document.querySelectorAll('.tab'), 0);
  var $tabContents = Array.prototype.slice.call(document.querySelectorAll('.tab-content'), 0);
  if ($tabs.length > 0) {
    $tabs.forEach(el => {
      el.addEventListener('click', function () {
        var target = el.dataset.target;
        if (['donate-now-content', 'sponsor-content'].indexOf(target) !== -1) {
          // Track views on the different tabs
          var donationType = (target === 'donate-now-content') ? 'one_time' : 'monthly_donation';
          window.trackEvent('donation_model_view', {
            donation_type: donationType
          });
        }
        var $target = document.getElementById(target);

        // Remove active from tabs and tab content
        $tabs.forEach(innerTab => {
          innerTab.classList.remove('is-active');
        });
        $tabContents.forEach(tabContent => {
          tabContent.classList.remove('is-active');
        });

        el.classList.add('is-active');
        $target.classList.add('is-active');
      });
    });
  }

  /* Code for lazy loading Youtube Videos */
  var youtubeContainers = document.querySelectorAll('.youtube-player-container');
  for (var i = 0; i < youtubeContainers.length; i++) {
    var image = new Image();
    image.alt = 'preview image';
    image.src = 'https://img.youtube.com/vi/' + youtubeContainers[i].dataset.embed + '/sddefault.jpg';
    image.addEventListener('load', function() {
      youtubeContainers[i].appendChild(image);
    }(i));

    youtubeContainers[i].addEventListener('click', function() {
      var iframe = document.createElement('iframe');
      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute('allowfullscreen', '');
      iframe.setAttribute('src', 'https://www.youtube.com/embed/' + this.dataset.embed + '?rel=0&showinfo=0&autoplay=1');
      this.innerHTML = '';
      this.appendChild(iframe);
    });
  }
});
