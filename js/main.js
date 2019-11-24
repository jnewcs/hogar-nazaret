document.addEventListener('DOMContentLoaded', () => {
  /* Navbar Burger Clicker */
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {
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
      el.addEventListener('click', () => {
        el.classList.toggle('is-open');
      });
    });
  }

  /* Code for Carousel */
  var carouselContainer = document.getElementById('carousel-container');
  if (carouselContainer) {
    new Glide('#carousel-container', {
      type: 'carousel',
      startAt: 0,
      perView: 1,
      peek: -2,
      autoplay: 5000,
      swipeThreshold: 50
    }).mount();
  }

  /* Code for News Carousel */
  var newsCarouselContainer = document.getElementById('news-carousel-container');
  if (newsCarouselContainer) {
    var breakpoints = {
      '600': { perView: 1 },
      '1000': { perView: 2 }
    };
    new Glide('#news-carousel-container', {
      type: 'carousel',
      startAt: 0,
      autoplay: 5000,
      perView: 3,
      breakpoints: breakpoints,
      swipeThreshold: 50
    }).mount();
  }

  /* Code for Lazy Loading */
  var lazyImages = document.querySelectorAll('.lazy-load');
  if (lazyImages && lazyImages.length) {
    var observer = lozad(lazyImages);
    observer.observe();
  }

  /* Code for modal opening */
  var modalContainer = document.getElementById('donation-content-container');
  var loadingContainer = document.getElementById('loading-container');
  var successContainer = document.getElementById('success-container');
  var errorContainer = document.getElementById('error-container');
  var $modalOpeners = Array.prototype.slice.call(document.querySelectorAll('.modal-opener'), 0);
  if ($modalOpeners.length > 0) {
    $modalOpeners.forEach(el => {
      el.addEventListener('click', () => {
        var target = el.dataset.target;
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
      el.addEventListener('click', () => {
        var target = el.dataset.target;
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
      el.addEventListener('click', () => {
        var target = el.dataset.target;
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
});
