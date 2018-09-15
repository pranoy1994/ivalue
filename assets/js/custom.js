(function($) {
	"use strict";

	/*=================== Search Form ===================*/
    $(".menu-search-open").on('click', function(e){
        $('.main-search-area').addClass('open');
        e.stopPropagation();
        e.preventDefault();
    });

    $(".search-close").on('click', function(e){
        $('.main-search-area').removeClass('open');
        e.stopPropagation();
        e.preventDefault();
    });

    /*=================== Counter ===================*/
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    /*=================== Countdown ===================*/
    $('[data-countdown]').each(function () {
        var $this = $(this),
        finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function (event) {
            $this.html(event.strftime('<div class="countdown-container"><div class="countdown-box day"><div class="box-r"><div class="countdown-content"><div class="number">%-D</div></div></div><span>Day%!d</span></div>' + '<div class="countdown-box hour"><div class="box-r"><div class="countdown-content"><div class="number">%H</div></div></div><span>Hours</span></div>' + '<div class="countdown-box min"><div class="box-r"><div class="countdown-content"><div class="number">%M</div></div></div><span>Minutes</span></div>' + '<div class="countdown-box sec"><div class="box-r"><div class="countdown-content"><div class="number">%S</div></div></div><span>Seconds</span></div>'));
        });
    });
    
    /*=================== Testimonial Slider ===================*/
    var swiper = new Swiper('.testimonial-slide.one-item', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop: true,
        autoplay: 3000,
    });

     var swiper = new Swiper('.testimonial-slide.two-item', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop: true,
        slidesPerView: 2,
        autoplay: 3000,
        spaceBetween: 30,
        nextButton: '.testimonial-slide-next',
        prevButton: '.testimonial-slide-prev',
        breakpoints: {
         768: {
                slidesPerView: 1,
            }
        }
    });

   /*=================== Client Logo Slider ===================*/
   var swiper = new Swiper('.clients-logo.slide', {
      loop: true,
      slidesPerView: 5,
      autoplay: 2000,
      breakpoints: {
         768: {
                slidesPerView: 4,
            },

         576: {
                slidesPerView: 3,
            },

         480: {
                slidesPerView: 2,
            }
      }
   });

    /*=================== Gallery Lightbox ===================*/
    $('a[data-rel^=popup]').lightcase({
        transition: 'elastic',
        fullScreenModeForMobile: true,
        speedIn : 500,
        swipe: true,
    });

    /*=================== Portfolio Single Post Slider ===================*/
    var galleryTop = new Swiper('.portfolio-single-slider.slider-top', {
        nextButton: '.button-next',
        prevButton: '.button-prev',
        spaceBetween: 10,
        loop: true,
        loopedSlides: 4,
    });
    var galleryThumbs = new Swiper('.portfolio-single-slider.slider-thumb', {
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true,
        loop: true,
    });
    galleryTop.params.control = galleryThumbs;
    galleryThumbs.params.control = galleryTop;

    /*=================== Masonry ===================*/
    var $masonryGrid = $('.masonry-grid');
    $masonryGrid.imagesLoaded( function() {
       $masonryGrid.masonry({
         itemSelector: '.masonry-item',
         columnWidth: '.masonry-grid-sizer',
         percentPosition: true
       });
    });

    /*=================== Price Filter Selector ===================*/
    $('.nstSlider').nstSlider({
      "crossable_handles": false,
      "left_grip_selector": ".leftGrip",
      "right_grip_selector": ".rightGrip",
      "value_bar_selector": ".bar",
      "value_changed_callback": function(cause, leftValue, rightValue) {
          var $container = $(this).parent();
          $container.find('.leftLabel').text(leftValue);
          $container.find('.rightLabel').text(rightValue);
      }
    });

    /*=================== Dropwon Menu ===================*/
    function dropdownResponive() {
      var getWindow = $(window).width();
      if( getWindow < 992 ){
        $("a.dropdown-toggle").off('click');
        $("a.dropdown-toggle").on('click', function (e) {
          event.preventDefault(); 
          event.stopPropagation(); 
          $(this).closest("li.dropdown").find(".dropdown-menu").first().stop().slideToggle().toggleClass("show");
          $(this).closest("li.dropdown").first().toggleClass("show");                        
          return false;
        });
      }
      else if( getWindow > 992 ){
        $("a.dropdown-toggle").off('click');
        $("a.dropdown-toggle").on('click', function (e) {
            event.stopPropagation();
        }); 
        $("li.dropdown").on("mouseenter", function(){
          $(this).closest("li.dropdown").find(".dropdown-menu").eq(0).stop().fadeIn(150);
        });
      }
      else{
        $("a.dropdown-toggle").off('click');
        $("a.dropdown-toggle").on('click', function (e) {
          event.stopPropagation();
        });
        $("li.dropdown").on("mouseenter", function(){
          $(this).closest("li.dropdown").find(".dropdown-menu").eq(0).stop().fadeIn(150);
        });
      }
    }

    $(document).ready(function(){
        dropdownResponive();
    });

    $(window).on("resize", function(){
      dropdownResponive();
    });

    /*=================== Portfolio Filter ===================*/
    var $portgGrid = $('.portfolio-filter-grid');
    var $portGrid = $('.portfolio-filter');
    var $portMasGrid = $('.portfolio-masonry-filter');
    $portGrid.imagesLoaded( function() {
      $portGrid.isotope({
          itemSelector: '.portfolio-filter-item',
          layoutMode: 'fitRows'
      });
    });

    $portMasGrid.imagesLoaded( function() {
      $portMasGrid.isotope({
          itemSelector: '.portfolio-filter-masonry-item',
          percentPosition: true,
          masonry: {
             columnWidth: '.portfolio-filter-cloumn-width',
           }
      });
    });

    // filter functions
    var filterFns = {
      // show if number is greater than 50
      numberGreaterThan50: function() {
      var number = $(this).find('.design').text();
      return parseInt( number, 10 ) > 50;
      },
      // show if name ends with -ium
      ium: function() {
      var name = $(this).find('.design').text();
      return name.match( /ium$/ );
      }
    };
    // bind filter button click
    $('.portfolio-filter-btn').on( 'click', 'button', function() {
      var filterValue = $( this ).attr('data-filter');
      // use filterFn if matches value
      filterValue = filterFns[ filterValue ] || filterValue;
      $portgGrid.isotope({ filter: filterValue });
    });
    // change is-checked class on buttons
    $('.portfolio-filter-btn').each( function( i, buttonGroup ) {
      var $buttonGroup = $( buttonGroup );
      $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.active').removeClass('active');
      $( this ).addClass('active');
      });
    });

	/*=================== Sticky Menu ===================*/
    if($('header.header').length > 0){
      var myNavBar = {

          flagAdd: true,

          elements: [],

          init: function(elements) {
              this.elements = elements;
          },

          add: function() {
              if (this.flagAdd) {
                  for (var i = 0; i < this.elements.length; i++) {
                      document.getElementById(this.elements[i]).className += " fixed-header-bottom";
                  }
                  this.flagAdd = false;
              }
          },

          remove: function() {
              for (var i = 0; i < this.elements.length; i++) {
                  document.getElementById(this.elements[i]).className =
                      document.getElementById(this.elements[i]).className.replace(/(?:^|\s)fixed-header-bottom(?!\S)/g, '');
              }
              this.flagAdd = true;
          }

      };
      /**
       * Init the object. Pass the object the array of elements
       * that we want to change when the scroll goes down
       */
      myNavBar.init([
          "nav-fixed-top"
      ]);

      /**
       * Function that manage the direction
       * of the scroll
       */
      function offSetManager() {

          var yOffset = 0;
          var currYOffSet = window.pageYOffset;

          if (yOffset < currYOffSet) {
              myNavBar.add();
          } else if (currYOffSet == yOffset) {
              myNavBar.remove();
          }
      }
      /**
       * bind to the document scroll detection
       */
      window.onscroll = function(e) {
          offSetManager();
      }

      /**
       * We have to do a first detectation of offset because the page
       * could be load with scroll down set.
       */
      offSetManager();
    }

    /*=================== preloader ===================*/
    setTimeout(function(){
        $("#preloder").fadeOut();
    }, 2500);

})($);