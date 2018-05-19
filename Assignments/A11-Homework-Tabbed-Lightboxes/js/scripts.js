var theGrizzlies = document.querySelectorAll('.grizzly');
var thePolars = document.querySelectorAll('.polar');
var thePandas = document.querySelectorAll('.panda');
var theLightBox = document.querySelector('.lightbox');
var theCloseButton = document.querySelector('.lightbox .close');

var lboxImage = document.querySelector('.lightbox img');
var lboxTitle = document.querySelector('.lightbox .title');
var lboxDesc = document.querySelector('.lightbox .description');

var buttons = document.querySelectorAll('.tabs button');
var grizzlyBlock = document.querySelector('#block1');
var polarBlock = document.querySelector('#block2');
var pandaBlock = document.querySelector('#block3');

buttons[0].addEventListener('click', function() {
  grizzlyBlock.style.display = 'block';
  polarBlock.style.display = 'none';
  pandaBlock.style.display = 'none';
});
buttons[1].addEventListener('click', function() {
  polarBlock.style.display = 'block';
  grizzlyBlock.style.display = 'none';
  pandaBlock.style.display = 'none';
});
buttons[2].addEventListener('click', function() {
  pandaBlock.style.display = 'block';
  grizzlyBlock.style.display = 'none';
  polarBlock.style.display = 'none';
});


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

theGrizzlies[0].addEventListener('click', light_on);
theGrizzlies[1].addEventListener('click', light_on);
theGrizzlies[2].addEventListener('click', light_on);
theGrizzlies[3].addEventListener('click', light_on);

thePolars[0].addEventListener('click', light_on);
thePolars[1].addEventListener('click', light_on);
thePolars[2].addEventListener('click', light_on);
thePolars[3].addEventListener('click', light_on);

thePandas[0].addEventListener('click', light_on);
thePandas[1].addEventListener('click', light_on);
thePandas[2].addEventListener('click', light_on);
thePandas[3].addEventListener('click', light_on);


theCloseButton.addEventListener('click', light_off);
