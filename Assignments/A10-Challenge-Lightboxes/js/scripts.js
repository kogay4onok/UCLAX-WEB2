var theImages = document.querySelectorAll('.myLightbox');
var theLightBox = document.querySelector('.lightbox');
var theCloseButton = document.querySelector('.lightbox .close');

var lboxImage = document.querySelector('.lightbox img');
var lboxTitle = document.querySelector('.lightbox .title');
var lboxDesc = document.querySelector('.lightbox .description');

// console.log(theImages);

//declaration
function light_on(){
  // console.log('ON');
  lboxImage.src = this.src;
  lboxTitle.innerHTML = this.dataset.title;
  lboxDesc.innerHTML = this.dataset.text;

  theLightBox.style.display = 'block';
}


//expression
var light_off = function(){
  console.log('OFF');
  theLightBox.style.display = 'none';
};

theImages[0].addEventListener('click', light_on);
theImages[1].addEventListener('click', light_on);
theImages[2].addEventListener('click', light_on);
theImages[3].addEventListener('click', light_on);
theImages[4].addEventListener('click', light_on);
theImages[5].addEventListener('click', light_on);

theCloseButton.addEventListener('click', light_off);
