/*-------------------------------------
| Your Script Solution Goes here.
-------------------------------------*/
var images = document.querySelectorAll('.image');
var bubbles = document.querySelectorAll('.bubble');

window.onload = function() {

  images[0].addEventListener('mouseover', function() {
    bubbles[0].classList.toggle('on');
  });

  images[0].addEventListener('mouseout', function() {
    bubbles[0].classList.toggle('on');
  });

  images[1].addEventListener('mouseover', function() {
    bubbles[1].classList.toggle('on');
  });

  images[1].addEventListener('mouseout', function() {
    bubbles[1].classList.toggle('on');
  });

  images[2].addEventListener('mouseover', function() {
    bubbles[2].classList.toggle('on');
  });

  images[2].addEventListener('mouseout', function() {
    bubbles[2].classList.toggle('on');
  });

};
