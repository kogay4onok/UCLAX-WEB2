var drawers = document.querySelectorAll('#case .drawer');

// drawers[0].addEventListener('click', function() {
//   this.classList.toggle('on');
// });
// drawers[1].addEventListener('click', function() {
//   this.classList.toggle('on');
// });
// drawers[2].addEventListener('click', function() {
//   this.classList.toggle('on');
// });
// drawers[3].addEventListener('click', function() {
//   this.classList.toggle('on');
// });

// for(var i = 0; i < drawers.length; i++) {
//   drawers[i].addEventListener('click', function() {
//     this.classList.toggle('on');
//   });
// }

drawers.forEach(function(drawer) {
  console.log(drawers);
  drawer.addEventListener('click', function() {
    drawer.classList.toggle('on');
  });
});
