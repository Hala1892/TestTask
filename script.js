// GET STICKY NAVBAR WHEN SCROLL
window.onscroll = function() {myFunction()};
var navbar = document.getElementById("sticky-navbar");

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset - 120 >= sticky) {
    $(".navbar").addClass("navbar-fixed-top");
    $(".navbar").removeClass("navbar-static-top");
  } else {
    $(".navbar").addClass("navbar-static-top");
    $(".navbar").removeClass("navbar-fixed-top");
  }
}