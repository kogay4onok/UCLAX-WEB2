var imageDials = document.querySelectorAll('div.choices img'); // always retern an array
var linkTheme = document.querySelector('link.theme');

// console.log('All Colors', imageDials);
// console.log('Red', imageDials[0].dataset.theme);
// console.log('Green', imageDials[1].dataset.theme);
// console.log('Blue', imageDials[2].dataset.theme);

imageDials.forEach(function(item) {
  item.addEventListener('click', function() {
    console.log('Looped Version');

    imageDials[0].classList.remove('chosen');
    imageDials[1].classList.remove('chosen');
    imageDials[2].classList.remove('chosen');

    item.classList.add('chosen');

    var whichTheme = item.dataset.theme;
    linkTheme.href = whichTheme;
  });
});

// imageDials[0].addEventListener('click', function() {
//   console.log('You clicked me!!!');
//
//   imageDials[0].classList.remove('chosen');
//   imageDials[1].classList.remove('chosen');
//   imageDials[2].classList.remove('chosen');
//
//   imageDials[0].classList.add('chosen');
//
//   var whichTheme = imageDials[0].dataset.theme;
//   document.querySelector('link.theme').href = whichTheme;
// });
//
// imageDials[1].addEventListener('click', function() {
//   console.log('You clicked me!!!');
//
//   imageDials[2].classList.remove('chosen');
//   imageDials[0].classList.remove('chosen');
//   imageDials[1].classList.remove('chosen');
//
//   imageDials[1].classList.add('chosen');
//
//   var whichTheme = imageDials[1].dataset.theme;
//   document.querySelector('link.theme').href = whichTheme;
// });
//
// imageDials[2].addEventListener('click', function() {
//   console.log('You clicked me!!!');
//
//   imageDials[0].classList.remove('chosen');
//   imageDials[1].classList.remove('chosen');
//   imageDials[2].classList.remove('chosen');
//
//   imageDials[2].classList.add('chosen');
//
//   var whichTheme = imageDials[2].dataset.theme;
//   document.querySelector('link.theme').href = whichTheme;
// });
