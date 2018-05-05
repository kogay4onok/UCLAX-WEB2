var tabLinks = document.querySelectorAll('.tabbed .tabs a');
var theSections = document.querySelectorAll('.tabbed section');

// console.log(tabLinks);
// console.log(theSections);

function switchSection(whichSection) {

  whichSection = whichSection - 1;

  console.log(whichSection);

// hide them all
for(var i = 0; i < theSections.length; i++) {
  theSections[i].style.display = 'none';
}

  // show the chosen one
  theSections[whichSection].style.display = 'block';

  // Links
  tabLinks.forEach(function(theLink) {
    theLink.classList.remove('chosen');
  });

  tabLinks[whichSection].classList.add('chosen');
}

switchSection(1);


// manage event listseners on tabLinks
tabLinks.forEach(function(currentLink) {
  currentLink.addEventListener('click', function(event) {

      // stop jumping
      event.preventDefault();

      // we will do this instead
    var theSection = this.dataset.section;
    switchSection(theSection);
  });
});
