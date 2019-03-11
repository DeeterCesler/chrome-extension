'use strict';



document.addEventListener('DOMContentLoaded', function() {
  var link = document.getElementById('link');
  // onClick's logic below:
  link.addEventListener('click', function() {
      hideMe();
  });
  var clicker = document.getElementsByTagName("H1")[0]
    clicker.addEventListener('click', function() {
      clicker.setAttribute("style", "display: none");
  });
});


function showFirst () {
  // document.getElementById("second").innerHTML("HELO FREN")
  document.getElementById("first").style.hidden = "true";
}

console.log("hello fren")
function showSecond () {
  document.getElementsByTagName("main").setAttribute("style", "display: none;");
  // document.getElementById("second").setAttribute("visibility","visible")
}