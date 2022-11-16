

// Any Sticky Header

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myheader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
 
//For Owlcarousel slider

$(document).ready(function(){
    $(".hole-slider").owlCarousel({
  
      items: 1,
      dots: true,
      loop:true,
      autoplay:true,
    });
    $(".project-slider").owlCarousel({
  
      items:3,
      dots:true,
      nav: true,
      loop:true,
      // autoplay:true,
    });
    $(".service-slider").owlCarousel({
  
      items: 3,
      loop:true,
      autoplay:true,
      dots: true,
    });

});

$(window).on('load', function() {

  $('#js-preloader').addClass('loaded');

});

//For Any tabs 

// Need to add these css

// ul.tabcontent {
//   position: relative;
// }
// li.tab-list {
//   visibility: hidden;
//   position: absolute;
// }
// li.tab-list.tab-list-active {
//   visibility: visible;
//   opacity: 1;
// }

let tabBtn = document.querySelectorAll(".tab-btn");
let tabList = document.querySelectorAll(".tab-list");

tabBtn.forEach((element, index) => {
  element.addEventListener("click", function () {
    element.classList.add("tab-btn-active");
    tabList[index].classList.add("tab-list-active");
    for (let i = 0; i < tabBtn.length; i++) {
      if (i !== index) {
        tabBtn[i].classList.remove("tab-btn-active");
        tabList[i].classList.remove("tab-list-active");
      }
    }
  });
});


let tabClick = document.querySelectorAll(".video-thumbnail");
let clickEffect = document.querySelectorAll('.click-effect');

for (let i = 0; i<clickEffect.length; i++){
  clickEffect[i].style.display = "none";
}

tabClick.forEach((element, index) => {
  element.addEventListener("click", function () {
   element.classList.add("tab-btn-active");
   for (let i = 0; i < tabClick.length; i++) {
      if (i !== index) {
        tabClick[i].classList.remove("tab-btn-active");
        tabClick[i].style.display="block";
        clickEffect[i].style.display = "none";
      }else{
        tabClick[i].style.display="none";
        clickEffect[i].style.display = "block";
      }
    }
  });
});





