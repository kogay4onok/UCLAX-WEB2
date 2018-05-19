var switches = document.querySelectorAll('#stage .switch');
var smiles = document.querySelectorAll('#stage .emoji');
var text = document.querySelector('.text');
var showHideText = document.querySelector('.text span');
var quote = document.querySelector('.quote h2');

// for(var i = 0; i < switches.length; i++) {
//   switches[i].addEventListener('click', function() {
//     this.classList.toggle('on');
//   });
// }

// switches.forEach(function(item) {
//   item.addEventListener('mouseover', function() {
//     var newImgSrc = this.dataset.on;
//     this.src = newImgSrc;
//     smiles[i].classList.toggle('on');
//   });
//
//   switches[i].addEventListener('mouseout', function() {
//     var newImgSrc = this.dataset.off;
//     this.src = newImgSrc;
//     smiles[i].classList.toggle('on');
//   });
// });

switches[0].addEventListener('mouseover', function() {
  var newImgSrc = this.dataset.on;
  this.src = newImgSrc;
  smiles[0].classList.toggle('on');
  showHideText.innerHTML = 'Hello!';
  quote.style.display = 'block';
});

switches[0].addEventListener('mouseout', function() {
  var newImgSrc = this.dataset.off;
  this.src = newImgSrc;
  smiles[0].classList.toggle('on');
  showHideText.innerHTML = 'Good Bye!';
  quote.style.display = 'none';
});

switches[1].addEventListener('mouseover', function() {
  var newImgSrc = this.dataset.on;
  this.src = newImgSrc;
  smiles[1].classList.toggle('on');
  showHideText.innerHTML = 'Hello!';
  quote.style.display = 'block';
});

switches[1].addEventListener('mouseout', function() {
  var newImgSrc = this.dataset.off;
  this.src = newImgSrc;
  smiles[1].classList.toggle('on');
  showHideText.innerHTML = 'Good Bye!';
  quote.style.display = 'none';
});

switches[2].addEventListener('mouseover', function() {
  var newImgSrc = this.dataset.on;
  this.src = newImgSrc;
  smiles[2].classList.toggle('on');
  showHideText.innerHTML = 'Hello!';
  quote.style.display = 'block';
});

switches[2].addEventListener('mouseout', function() {
  var newImgSrc = this.dataset.off;
  this.src = newImgSrc;
  smiles[2].classList.toggle('on');
  showHideText.innerHTML = 'Good Bye!';
  quote.style.display = 'none';
});
