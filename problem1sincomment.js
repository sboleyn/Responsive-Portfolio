var main = document.getElementById("main");

var setup = function() {
  main = document.getElementById("main");
  var numArrows = 50;
  placeArrow(numArrows);
}
  

var placeArrow = function(amountarrow){
  for (i=0; i<amountarrow; i++){

      var newArrow = document.createElement("div");

      newArrow.style.backgroundImage= "url('arrow.png')";

      var max_x = window.innerWidth - 110;
      var max_y = window.innerHeight - 60;
      var newX = Math.random() * max_x;
      var newY = Math.random() * max_y;
      newX = Math.floor(newX);
      newY = Math.floor(newY);
      newArrow.style.top = newY.tostring + "px";
      newArrow.style.left = newX.tostring + "px";

      newArrow.addEventListener("click", removeArrow);
      this.appendChild(newArrow);
}}

var removeArrow = function(event) {
  event.stopPropagation();
}

var checkMove = function() {
  for (var i = 0; i < arrows.length; ++i) {
  }
}


window.addEventListener('load', function() {
  setup();
});

