/*!
* Start Bootstrap - Stylish Portfolio v5.1.0 (https://startbootstrap.com/theme/stylish-portfolio)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-stylish-portfolio/blob/master/LICENSE)
*/
(function ($) {
    "use strict"; // Start of use strict

    // Closes the sidebar menu
    $(".menu-toggle").click(function (e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
        $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
        $(this).toggleClass("active");
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").on('click', function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('#sidebar-wrapper .js-scroll-trigger').click(function () {
        $("#sidebar-wrapper").removeClass("active");
        $(".menu-toggle").removeClass("active");
        $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
    });

    // Scroll to top button appear
    $(document).scroll(function () {
        var scrollDistance = $(this).scrollTop();
        if (scrollDistance > 100) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });

    $(document).ready(function() {
        var url = $("#break-bank-video").attr('src');
        $("#break-bank-modal").on('hide.bs.modal', function() {
            $("#break-bank-video").attr('src', '');
        });
        $("#break-bank-modal").on('show.bs.modal', function() {
            $("#break-bank-video").attr('src', url);
        });
    });

})(jQuery); // End of use strict

// navbar change animation
const nav = document.querySelector('nav');

window.addEventListener('scroll', function(){ 
    const offset = window.pageYOffset;

    if(offset > 75){ 
        nav.classList.add('scroll');
    }else{ 
        nav.classList.remove('scroll');
    }
});

//typing animation
var typed = $(".typed");

$(function() {
  var strings = $('.typed-items').text();
  strings = $('.typed-items').data('typed-person') + ',' + strings;
  strings = strings.split(',');

  typed.typed({
    strings: strings,
    typeSpeed: 100,
    loop: true,
  });
});

AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


