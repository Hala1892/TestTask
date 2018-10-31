// GET STICKY NAVBAR WHEN SCROLL
window.onscroll = function() {myFunction()};
var navbar = document.getElementById("sticky-navbar");

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset - 60 >= sticky) {
    $(".navbar").addClass("navbar-fixed-top");
    $(".navbar").removeClass("navbar-static-top");
  } else {
    $(".navbar").addClass("navbar-static-top");
    $(".navbar").removeClass("navbar-fixed-top");
  }
}
// ADD ACTIVE CLASS TO CURRENT NAV-LINK
$(document).ready(function () {
  $(document).on("scroll", onScroll);
    $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      $(document).off("scroll");
      $('a').each(function () {
          $(this).removeClass('active');
      })
      $(this).addClass('active');
    
      var target = this.hash,
          menu = target;
      $target = $(target);
      $('html, body').stop().animate({
          'scrollTop': $target.offset().top - 100
      }, 900, 'swing', function () {
          window.location.hash = target - 100;
          $(document).on("scroll", onScroll);
      });
  });
});

function onScroll(event){
  var scrollPos = $(document).scrollTop();
  $('.navbar-nav li a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top -100 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
          $('.navbar-nav li a').removeClass("active");
          currLink.addClass("active");
      }
      else{
          currLink.removeClass("active");
      }
  });
}
// HIDE COLLAPSE MENU ON CLICK 
$('.navbar-nav li a').on('click', function(){
  $('.navbar-collapse').collapse('hide');
});
