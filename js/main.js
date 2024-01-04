// active navbar
let nav = document.querySelector('.navigation-wrap');
window.onscroll =  function (){
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("scroll-on");
  }else{
    nav.classList.remove("scroll-on");
  }
}
 

// nav hide 
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
  a.addEventListener("click", function(){
    navCollapse.classList.remove("show");
  })
})

/*
// adding fadeInUp animation to child of div with class .way-col
var $child = $('.way-fade-up').children();
$child.each(function(){
  var self= $(this);
  $(this).waypoint(function(){
    self.addClass('animated fadeInUp');
  },{offset: '90%'});
});

var $child = $('.way-fade-left').children();
$child.each(function(){
  var self= $(this);
  $(this).waypoint(function(){
    self.addClass('animated fadeInLeft');
  },{offset: '90%'});
});

var $child = $('.way-fade-right').children();
$child.each(function(){
  var self= $(this);
  $(this).waypoint(function(){
    self.addClass('animated fadeInRight');
  },{offset: '90%'});
});*/

$('.owl-carousel').owlCarousel({
    loop:true,
    // margin:10,   // since one item ou can remove it
    nav:false,
    // dots:true,
    autoplay:true,
    autoplayTimeout:4000,
    items:1,
    // animateOut : "fadeOut",
    animateIn : "fadeInRight"

});

/*Filter animation
var filterizd = $('.filter-container').filterizr({
   animationDuration: .5,

});*/
$(document).ready(function () {
  var $list = $(".card-product-box .card").hide(),
    $curr;

  $(".button").on("click", function (e) {
    e.preventDefault(); // Prevent the default action

    var $this = $(this);
    $this.addClass("active").siblings().removeClass("active");

    if ($curr) {
      $curr.stop().fadeOut(300);
    }

    $curr = $list.filter("." + this.id);
    $curr.slice(0, 4).stop().fadeIn(400);
    $list.not($curr).stop().fadeOut(300);
  }).filter(".active").click();

  $("#LoadMore").on("click", function (e) {
    e.preventDefault(); // Prevent the default action

    if ($curr) {
      $curr.filter(":hidden").stop().slice(0, 4).slideDown("slow");
    }
  });
});



