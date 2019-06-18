document.addEventListener('DOMContentLoaded', () => {
  /* Code for Image Modal */
  class ImageGallery {
    constructor(containerId) {
      this.initData(containerId);
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
      document.getElementById('masonry-image-modal').classList.add('is-active');
    }

    setImage() {
      var modalBlurBackground = document.getElementById('masonry-image-modal-blur-background');
      modalBlurBackground.style.backgroundImage = `url(${this.activeImage.src})`;

      var modalHighlight = document.getElementById('masonry-image-modal-highlight');
      modalHighlight.src = this.activeImage.src;
    }

    setCount() {
      var count = document.getElementById('masonry-image-count');
      var position = this.activeIndex + 1;
      var total = this.images.length;

      count.innerHTML = `${position}/${total}`;
    }

    closeImage() {
      document.getElementById('masonry-image-modal').classList.remove('is-active');
      this.activeImage = null;
      this.activeIndex = null;
    }

    switchImage(type) {
      if (!this.activeImage) return;

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

    initData(imageClassName) {
      this.activeImage = null;
      this.activeIndex = null;
      var images = document.getElementsByClassName(imageClassName);

      var imageData = [];
      for (var image of images) {
        imageData.push({ src: image.dataset.src });
        image.onclick = function (clickedImage) {
          this.showImage(clickedImage.src);
        }.bind(this, image);
      }
      this.images = imageData;
    }
  }
  /* Masonry Image Modal */
  var gallery = new ImageGallery('masonry-image');

  // Helpful Key Codes: Left: 37, Right: 39, Escape: 27
  document.addEventListener('keydown', function (event) {
    if (event.keyCode === 37) {
      gallery.switchImage('left-arrow');
    } else if (event.keyCode === 39) {
      gallery.switchImage('right-arrow');
    } else if (event.keyCode === 27) {
      gallery.closeImage();
    }
  });

  document.getElementById('masonry-image-close').addEventListener('click', function() {
    gallery.closeImage();
  })
});
