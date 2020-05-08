document.addEventListener('DOMContentLoaded', function () {
  /* Code for Image Modal */
  class ImageGallery {
    constructor(containerId) {
      this.containerId = containerId;
      this.container = document.getElementById(this.containerId);
      if (!this.container) {
        return;
      }

      this.setupEventListeners();
      this.initData();
    }

    setupEventListeners() {
      var prevButton = document.getElementById(this.containerId + '-prev-button');
      if (prevButton) {
        prevButton.addEventListener('click', function() {
          this.switchImage('left-arrow');
        }.bind(this), false);
      }

      var nextButton = document.getElementById(this.containerId + '-next-button');
      if (nextButton) {
        nextButton.addEventListener('click', function() {
          this.switchImage('right-arrow');
        }.bind(this), false);
      }

      var closeButton = document.getElementById(this.containerId + '-close');
      if (closeButton) {
        closeButton.addEventListener('click', function() {
          this.closeImage();
        }.bind(this), false);
      }

      // Helpful Key Codes: Left: 37, Right: 39, Escape: 27
      document.addEventListener('keydown', function (event) {
        if (event.keyCode === 37) {
          this.switchImage('left-arrow');
        } else if (event.keyCode === 39) {
          this.switchImage('right-arrow');
        } else if (event.keyCode === 27) {
          this.closeImage();
        }
      }.bind(this), false);
    }

    initData() {
      this.activeImage = null;
      this.activeIndex = null;
      var images = document.getElementsByClassName(this.containerId + '-image');

      var imageData = [];
      var imagesAdded = [];
      for (var image of images) {
        var imageSrc = image.src || image.dataset.src;
        if (imagesAdded.indexOf(imageSrc) === -1) {
          // We don't want to double add photos
          imageData.push({ src: imageSrc });
          imagesAdded.push(imageSrc);
        }
        // But we do want to always add the click handler
        image.onclick = function (clickedImage) {
          this.showImage(clickedImage.src || image.dataset.src);
        }.bind(this, image);
      }
      this.images = imageData;
    }

    setActiveImage(imageSrc) {
      var entries = this.images.entries();

      for (var [index, image] of entries) {
        if (image.src === imageSrc) {
          this.activeImage = image;
          this.activeIndex = index;
          return;
        }
      }
    }

    showImage(imageSrc) {
      this.setActiveImage(imageSrc);
      if (!this.activeImage) {
        return;
      }

      this.setImage();
      this.setCount();
      this.container.classList.add('is-active');
      document.documentElement.classList.add('is-clipped');
    }

    setImage() {
      var modalHighlight = document.getElementById(this.containerId + '-highlight');
      modalHighlight.src = this.activeImage.src;
    }

    setCount() {
      var countElement = document.getElementById(this.containerId + '-count');
      if (!countElement) return;

      var position = this.activeIndex + 1;
      var total = this.images.length;
      countElement.innerHTML = position + '/' + total;
    }

    closeImage() {
      document.documentElement.classList.remove('is-clipped');
      this.container.classList.remove('is-active');
      this.activeImage = null;
      this.activeIndex = null;
    }

    switchImage(type) {
      if (!this.activeImage) return;
      if (this.container.classList.value.indexOf('is-active') === -1) {
        // CASE: this specific instance is not currently open
        return;
      }

      var direction = type === 'left-arrow' ? -1 : 1;
      let index = this.activeIndex;
      index += direction;
      if (index < 0) {
        // CASE: we were at the first image and we try to go left
        index = (this.images.length - 1)
      } else if (index >= this.images.length) {
        // CASE: we were at the last image and we try to go right
        index = 0;
      }

      this.showImage(this.images[index].src);
    }
  }

  /* Image Modal on a news article page */
  if (document.getElementById('post-image-modal')) {
    new ImageGallery('post-image-modal');
  }

  /* Image Modal on a page with a Flyer header */
  if (document.getElementById('flyer-image-modal')) {
    new ImageGallery('flyer-image-modal');
  }

  /* Image Modal on a page with a needs link */
  if (document.getElementById('needs-modal')) {
    new ImageGallery('needs-modal');
  }
});
