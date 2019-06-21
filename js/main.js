document.addEventListener('DOMContentLoaded', () => {

  /* Navbar Burger Clicker */
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the 'is-active' class on both the 'navbar-burger' and the 'navbar-menu'
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
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
      autoplay: 5000
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
      breakpoints: breakpoints
    }).mount();
  }

  /* Code for Lazy Loading */
  const lazyImages = document.querySelectorAll('.lazy-load');
  if (lazyImages && lazyImages.length) {
    const observer = lozad(lazyImages);
    observer.observe();
  }

  /* Code for modal opening */
  const $modalOpeners = Array.prototype.slice.call(document.querySelectorAll('.modal-opener'), 0);
  if ($modalOpeners.length > 0) {
    $modalOpeners.forEach(el => {
      el.addEventListener('click', () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        document.documentElement.classList.add('is-clipped');
        $target.classList.add('is-active');
      });
    });
  }

  /* Code for modal closing */
  const $modalClosers = Array.prototype.slice.call(document.querySelectorAll('.modal-closer'), 0);
  if ($modalClosers.length > 0) {
    $modalClosers.forEach(el => {
      el.addEventListener('click', () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        document.documentElement.classList.remove('is-clipped');
        $target.classList.remove('is-active');
      });
    });
  }

  /* Code for tab switching */
  const $tabs = Array.prototype.slice.call(document.querySelectorAll('.tab'), 0);
  const $tabContents = Array.prototype.slice.call(document.querySelectorAll('.tab-content'), 0);
  if ($tabs.length > 0) {
    $tabs.forEach(el => {
      el.addEventListener('click', () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);

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
