document.addEventListener("DOMContentLoaded",function(){class n{constructor(e){this.containerId=e,this.container=document.getElementById(this.containerId),this.container&&(this.setupEventListeners(),this.initData())}setupEventListeners(){var e=document.getElementById(this.containerId+"-prev-button");e&&e.addEventListener("click",function(){this.switchImage("left-arrow")}.bind(this),!1);var s=document.getElementById(this.containerId+"-next-button");s&&s.addEventListener("click",function(){this.switchImage("right-arrow")}.bind(this),!1);var t=document.getElementById(this.containerId+"-close");t&&t.addEventListener("click",function(){this.closeImage()}.bind(this),!1),document.addEventListener("keydown",function(i){i.keyCode===37?this.switchImage("left-arrow"):i.keyCode===39?this.switchImage("right-arrow"):i.keyCode===27&&this.closeImage()}.bind(this),!1)}initData(){this.activeImage=null,this.activeIndex=null;var e=document.getElementsByClassName(this.containerId+"-image"),s=[],t=[];for(var i of e){var a=i.src||i.dataset.src;t.indexOf(a)===-1&&(s.push({src:a}),t.push(a)),i.onclick=function(c){this.showImage(c.src||i.dataset.src)}.bind(this,i)}this.images=s}setActiveImage(e){var s=this.images.entries();for(var[t,i]of s)if(i.src===e){this.activeImage=i,this.activeIndex=t;return}}showImage(e){this.setActiveImage(e),this.activeImage&&(this.setImage(),this.setCount(),this.container.classList.add("is-active"),document.documentElement.classList.add("is-clipped"))}setImage(){var e=document.getElementById(this.containerId+"-highlight");e.src=this.activeImage.src}setCount(){var e=document.getElementById(this.containerId+"-count");if(e){var s=this.activeIndex+1,t=this.images.length;e.innerHTML=s+"/"+t}}closeImage(){document.documentElement.classList.remove("is-clipped"),this.container.classList.remove("is-active"),this.activeImage=null,this.activeIndex=null}switchImage(e){if(!this.activeImage||this.container.classList.value.indexOf("is-active")===-1)return;var s=e==="left-arrow"?-1:1;let t=this.activeIndex;t+=s,t<0?t=this.images.length-1:t>=this.images.length&&(t=0),this.showImage(this.images[t].src)}}document.getElementById("post-image-modal")&&new n("post-image-modal"),document.getElementById("flyer-image-modal")&&new n("flyer-image-modal"),document.getElementById("needs-modal")&&new n("needs-modal")});
