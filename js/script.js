$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items:1,
    nav:true,
    navText: ["<img src='../images/left.png'/>","<img src='../images/right.png'/>"],
    loop:true,
    autoplay:true,
    autoplayTimeout: 4000  
  });
});