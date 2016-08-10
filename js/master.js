(function($){

  var $doc = $(document);
  var $win = $(window);

  $win.on('load', function() {

    $(".preloader").delay(200).fadeOut(500).remove();

    // video background for video-1 section
    var videoContainer = document.getElementById("hero");
    var video = document.getElementById("video");

    // functions
    function adapt() {
      var vContainer_width = videoContainer.offsetWidth;
      var vContainer_height = videoContainer.offsetHeight;

      video.style.height = "auto";
      video.style.width = vContainer_width + "px";

      if ( video.offsetHeight < vContainer_height ) {
        video.style.height = vContainer_height + "px";
        video.style.width = "auto";
      }

      video.style.top = ((( video.offsetHeight - vContainer_height ) / 2 ) * -1) + "px";
      video.style.left = ((( video.offsetWidth - vContainer_width ) / 2 ) * -1) + "px";

    }

    adapt();

    // events
    window.addEventListener('resize', adapt);
  });


  $doc.on('ready', function() {

    // iphone drawing animation


    function setIphoneAnim() {
      var iphoneAnim = $('.iphone__path');

      iphoneAnim.css('animation-name', 'drawOutline');

    }

    setIphoneAnim();


    // mobile navigation
    function mobileNav() {
      // cache elements
      var burger = $('#burger');
      var navbarCollapse = $('#navigation');
      var navLink = $('.nav__link');

      function openNav () {
        burger.addClass("is-active");
        navbarCollapse.addClass("is-active");
      }

      function closeNav () {
        burger.removeClass("is-active");
        navbarCollapse.removeClass("is-active");
      }

      burger.on('click', function() {
        if ( $(this).hasClass("is-active") ) {
          closeNav();
        } else {
          openNav();
        }
      });

      navLink.on('click', function() {
        if ( burger.hasClass('is-active') ) {
          closeNav();
        }
      });
    }

    mobileNav();


    /*====================================
    Scroll to section animation
    ======================================*/

    function scrollAnimation() {
      $('a[data-scroll]').on('click', function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 900);
            return false;
          }
        }
      });
    }

    scrollAnimation();

      // if (self.pageYOffset) {
      //    return self.pageYOffset; // Firefox, Chrome, Opera, Safari.
      // }
      // if (document.documentElement && document.documentElement.scrollTop) {
      //   return document.documentElement.scrollTop; // Internet Explorer 6 (standards mode).
      // }
      // if (document.body.scrollTop) {
      //   return document.body.scrollTop; // Internet Explorer 6, 7 and 8.
      // }

      new WOW().init();

  });


})(jQuery)
