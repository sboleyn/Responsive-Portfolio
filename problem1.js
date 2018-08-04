// Hold a global reference to the div#main element.
var main = document.getElementById("main");

/**
 * setup()
 *
 * The setup function gets called from your primary event handler for when the page
 * has finished loading. This function sets up the arrows, and initializes anything
 * else you might need later.
 */
var setup = function() {
  // Obtain a reference to the div#main element, and hold on to it in our global var 'main'
  main = document.getElementById("main");
  // Place your initial number of arrows
  var numArrows = 50;
  placeArrow(numArrows);
}
  
/**
 * placeArrow()
 *
 * This function is called from your setup function, as well as when someone clicks on an
 * empty part of the page. 
 *
 * This function should do the following:
 *    - Create a new arrow element
 *    - Append it to the #main element in the DOM
 *    - Randomly position it on the page
 *    - Attach any CSS classes you want to the new arrow element
 *    - Attach an event handler to the new element so it can respond to a click
 */
var placeArrow = function(amountarrow){
  for (var i=0; i<amountarrow; i++){
      // Create a new element to hold your arrow. There are a few different elements you could create.
      var newArrow = document.createElement("img");
      newArrow.src = 'arrow.png';
      newArrow.style.width = '40px';
      newArrow.style.height = '40px';
      // randomly position the arrow
      // figure out how wide the window is, how tall it is, and figure out a way to
      // randomly create a number between 0 and the width/height of the window
      // then assign the style properties of that element accordingly
      var max_x = window.innerWidth - 40; //both x and y are 40px
      var max_y = window.innerHeight - 40; //both x and y are 40px
      var newX = Math.random() * max_x;
      var newY = Math.random() * max_y;
      newX = Math.floor(newX);
      newY = Math.floor(newY);
      newArrow.style.position = "absolute";
      newArrow.style.top = newY.toString() + "px";
      newArrow.style.left = newX.toString() + "px";
      // Add any styles to the arrow element you need
      
      // Add an event listener to the new arrow element so when it gets clicked it calls the
      // removeArrow function.
      newArrow.addEventListener("click", removeArrow);
      // Finally, append the newly created arrow element to the DOM as a child of the #main div.
      main.appendChild(newArrow);
}}

/**
 * removeArrow
 *
 * This function is called whenever an arrow element is clicked.  It should remove the clicked
 * on element from the DOM.
 */
var removeArrow = function(event) {
  // Get a reference to this element, and this element's parent.
  // Remove this element from the DOM
  this.parentNode.removeChild(this);
  // Prevent this click event from bubbling up to the window object. Otherwise we would remove 
  // this arrow, but create a new one.
  event.stopPropagation();
}


// Look at all the arrow elements, and point them all at the mouse cursor.
var checkMove = function(event) {
  // Get a list of all the arrow elements on the page.
  var arrows = document.getElementsByTagName('img');
  // Figure out where the mouse is right now
  var mouseX = event.clientX;
  var mouseY = event.clientY;
  

  // Loop over each arrow, and point it in the right direction
  for (var i = 0; i < arrows.length; ++i) {
    // Grab a reference to the current arrow in the loop
    var targarr = arrows[i];
    // Figure out the X and Y location of the center of the arrow    
    var aX = targarr.offsetLeft - targarr.scrollLeft + targarr.clientLeft;
    var aY = targarr.offsetTop - targarr.scrollTop + targarr.clientTop;

    //Calculate the difference between the center of the arrow and the mouse
    var dx = aX - mouseX;
    var dy = aY - mouseY;
    
    // Calculate the Angle
    var angle = Math.atan(dy/dx);
    angle = angle * 180/Math.PI;
    
    // Modify the angle depending on which side of the arrow the cursor is on
    if (dx < 0) {
      angle += 90;
    } 
    else {
      angle -= 90;
    }
    
    // Round off our angle
    angle = Math.round(angle);
    
    // Apply the final angle as a rotation on the arrow.
    targarr.style.transform = 'rotate(' + angle.toString() + "deg)";
  }
}


window.addEventListener('load', function() {
  // Call the setup function
  setup();
  // Attach an event listener to the window to detect mouse movements
  window.addEventListener("mousemove", checkMove);
  // Attach an event listener to the window to detect mouse clicks
  window.addEventListener("click", function(){placeArrow(1)});
});

