var boxes = document.querySelectorAll('.solution .box');
// for(var i = 0; i < boxes.length; i++) {
//   boxes[i].addEventListener('click', function() {
//     this.classList.toggle('on');
//   });
// }

boxes.forEach(function(box) {
  console.log(boxes);
  box.addEventListener('click', function() {
    box.classList.toggle('on');
  });
});

// boxes[0].addEventListener('click', function() {
//   this.classList.toggle('on');
// });
// boxes[1].addEventListener('click', function() {
//   this.classList.toggle('on');
// });
// boxes[2].addEventListener('click', function() {
//   this.classList.toggle('on');
// });
// boxes[3].addEventListener('click', function() {
//   this.classList.toggle('on');
// });
// boxes[4].addEventListener('click', function() {
//   this.classList.toggle('on');
// });
// boxes[5].addEventListener('click', function() {
//   this.classList.toggle('on');
// });
