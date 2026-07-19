//recruiters-slider
$("#rank-slider").owlCarousel({
    autoplay: true,
    // autoplayTimeout: 1000,
    items: 3, //Set Testimonial items
    loop: false,
    margin: 20,
    singleItem: true,
    touchDrag: true,
    mouseDrag: true,
    pagination: true,
    nav: true,
    dots: true,
    navText: ["<i class='fal fa-long-arrow-left'></i>", "<i class='fal fa-long-arrow-right'></i>"],
    responsiveClass:true,
    responsive:{
    0:{
    items:1,
    },
    480:{
    items:1,
    },
    568:{
    items:2,
    },
    600:{
    items:2,
    },
    667:{
    items:2,
    },
    1000:{
    items:3,
    nav: false,
    }
    }
    });
	
	

    $("#rank1-slider").owlCarousel({
        autoplay: true,
        // autoplayTimeout: 1000,
        items: 3, //Set Testimonial items
        loop: false,
        margin: 20,
        singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        pagination: true,
        nav: true,
        dots: true,
        navText: ["<i class='fal fa-long-arrow-left'></i>", "<i class='fal fa-long-arrow-right'></i>"],
        responsiveClass:true,
        responsive:{
        0:{
        items:1,
        },
        480:{
        items:1,
        },
        568:{
        items:1,
        },
        600:{
        items:2,
        },
        667:{
        items:3,
        },
        1000:{
        items:3,
        nav: false,
        }
        }
        });


	
    $("#client-slider").owlCarousel({
        autoPlay: 2000, //Set AutoPlay to 5 seconds
        autoplay: true,
        smartSpeed: 2000,
        items: 1, //Set Testimonial items
        loop: false,
        margin: 20,
        singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        pagination: true,
        nav: true,
        dots: true,
        navText: ["<i class='fal fa-angle-left'></i>", "<i class='fal fa-angle-right'></i>"],
        responsiveClass:true,
        responsive:{
        0:{
        items:1,
        
        nav: false  ,
        },
        480:{
        items:1,
        
        nav: false  ,
        },
        568:{
        items:1,
        },
        600:{
        items:1,
        },
        667:{
        items:1,
        },
        1000:{
        items:1,
        nav: true  ,
        dots: false,
        }
        }
        });



 $("#process-slider").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 5 seconds
        autoplay: true,
        smartSpeed: 2000, // Default is 250
        items: 6, //Set Testimonial items
        margin: 20,
        singleItem: true,
        touchDrag: true,
        mouseDrag: false,
        pagination: true,
        loop: false,
        nav: true,
        dots: true,
        navText: ["<i class='fal fa-angle-left'></i>", "<i class='fal fa-angle-right'></i>"],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
           nav: false,
            dots: true,
        singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        autoplay: true,
        },
        480:{
            items:2,
            nav: false,
            dots: true,
            singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        autoplay: true,
        },
        568:{
            items:3,
             nav: false,
            dots: true,
            singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        autoplay: true,
        },
        600:{
            items:3,
            nav: false,
            dots: true,
            singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        autoplay: true,
        },
        667:{
            items:4,
          nav: false,
            dots: true,
            singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        autoplay: true,
        },
        1000:{
            items:6
        }
    }   
        
    });	
	

    //aktu-slider
$("#aktu-slider").owlCarousel({
    smartSpeed: 2000, 
    autoplay: true,
    autoplayTimeout: 2000,
    items: 5, //Set Testimonial items
    loop: false,
    margin: 15,
    singleItem: false,
    touchDrag: true,
    mouseDrag: true,
    pagination: false,
    nav: false,
    dots: true,
    navText: ["<i class='fal fa-long-arrow-left'></i>", "<i class='fal fa-long-arrow-right'></i>"],
    responsiveClass:true,
    responsive:{
    0:{
    items:1,
    },
    480:{
    items:2,
    },
    568:{
    items:2,
    },
    600:{
    items:3,
    },
    667:{
    items:4,
    },
    1000:{
    items:5,
    nav: false,
    }
    }
    });

//recruiters-slider
$("#awards-slider").owlCarousel({
autoplay: true,
autoplayTimeout: 1000,
items: 3, //Set Testimonial items
loop: false,
margin: 25,
singleItem: true,
touchDrag: true,
mouseDrag: true,
pagination: true,
nav: false,
dots: true,
navText: ["<i class='fal fa-angle-left'></i>", "<i class='fal fa-angle-right'></i>"],
responsiveClass:true,
responsive:{
0:{
items:1,
margin: 10,
},
480:{
items:1,
margin: 10,
},
568:{
items:3,
},
600:{
items:3,
},
667:{
items:3,
},
1000:{
items:3
}
}
});

 //student Carousel
 $("#placement-slider").owlCarousel({
    autoPlay: 5000, //Set AutoPlay to 5 seconds
    autoplay: true,
    smartSpeed: 2000, // Default is 250
    items: 2, //Set Testimonial items
    loop: false,
    margin: 10,
    singleItem: true,
    touchDrag: true,
    mouseDrag: true,
    pagination: false,
    nav: false,
    dots: true,
    navText: ["<i class='fal fa-arrow-left'></i>", "<i class='fal fa-arrow-right'></i>"],
    responsiveClass: true,
    responsive: {
        0: {
            items: 2,
        },
        480: {
            items: 2,
        },
        568: {
            items: 2,
        },
        600: {
            items: 1,
        },
        667: {
            items: 2,
        },
        1000: {
            items: 2
        }
    }

});


//gallery Carousel
$("#gallery-memeber").owlCarousel({
    autoplay: false,

    //smartSpeed: 2000, // Default is 250

    items: 4, //Set Testimonial items

    loop: false,

    margin: 0,

    singleItem: true,

    touchDrag: true,

    mouseDrag: true,

    pagination: true,

    nav: false,

    dots: true,

    navText: ["<i class='fal fa-arrow-left'></i>", "<i class='fal fa-arrow-right'></i>"],

    responsiveClass:true,

responsive:{

    0:{

        items:1,
         center: true,
         stagePadding: 50,
          loop: false,

    },

    568:{

        items:2,

         center: true,
         stagePadding: 50,
         loop: false,
    },

    600:{

        items:2,
         center: true,
         stagePadding: 50,

    },

    667:{

        items:3,

    },

    768:{

        items:3,

    },

    1000:{

        items:4,

    }

}

});

//alumni-slider
$("#testimonial-slider").owlCarousel({
    autoplay: true,
    autoplayTimeout: 2000,
    smartSpeed: 2000, // Default is 250
    items: 2, //Set Testimonial items
    loop: false,
    margin: 30,
    singleItem: true,
    touchDrag: true,
    mouseDrag: true,
    pagination: false,
    nav: false,
    dots: true,
    navText: ["<i class='fal fa-angle-left'></i>", "<i class='fal fa-angle-right'></i>"],
responsiveClass:true,
responsive:{
    0:{
        items:1,
    },
    480:{
        items:1,
    },
    568:{
        items:1,
    },
    600:{
        items:1,
    },
    667:{
        items:2,
    },
    1000:{
        items:2
    }
}   
    
});


$("#ranked-slider").owlCarousel({
    autoplay: true,
    autoplayTimeout: 2000,
    smartSpeed: 2000, // Default is 250
    items: 6, //Set Testimonial items
    loop: false,
    margin: 30,
    singleItem: true,
    touchDrag: true,
    mouseDrag: true,
    pagination: false,
    nav: false,
    dots: true,
    navText: ["<i class='fal fa-angle-left'></i>", "<i class='fal fa-angle-right'></i>"],
responsiveClass:true,
responsive:{
    0:{
        items:1,
    },
    480:{
        items:1,
    },
    568:{
        items:2,
    },
    600:{
        items:3,
    },
    667:{
        items:4,
    },
    1000:{
        items:6
    }
}   
    
});





$("#award-slider").owlCarousel({
    autoplay: false,
    autoplayTimeout: 2000,
    smartSpeed: 2000, // Default is 250
    items: 2, //Set Testimonial items
    loop: false,
    margin: 30,
    singleItem: true,
    touchDrag: true,
    mouseDrag: true,
    pagination: false,
    nav: false,
    dots: true,
    navText: ["<i class='fal fa-angle-left'></i>", "<i class='fal fa-angle-right'></i>"],
responsiveClass:true,
responsive:{
    0:{
        items:1,
    },
    480:{
        items:1,
    },
    568:{
        items:1,
    },
    600:{
        items:1,
    },
    667:{
        items:2,
    },
    1000:{
        items:2
    }
}   
    
});




$("#placement-slider1").owlCarousel({
    autoplay: true,
    autoplayTimeout: 1000,
    smartSpeed: 2000, // Default is 250
    items: 7, //Set Testimonial items
    loop: false,
    margin: 10,
    singleItem: true,
    touchDrag: true,
    mouseDrag: true,
    pagination: false,
    nav: false,
    dots: true,
    navText: ["<i class='fal fa-angle-left'></i>", "<i class='fal fa-angle-right'></i>"],
responsiveClass:true,
responsive:{
    0:{
        items:2,
    },
    480:{
        items:2,
    },
    568:{
        items:4,
    },
    600:{
        items:5,
    },
    667:{
        items:6,
    },
    1000:{
        items:7
    }
}   
    
});

$('.moreless-button').click(function(e) {
    e.preventDefault();
    $('.moretext').slideToggle();
    if ($('.moreless-button').text() == "Read more...") {
      $(this).text("Read less...")
    } else {
      $(this).text("Read more...")
    }
  });
/**
     * ======================================
     * 37. title animation
     * ======================================
     */
    function runTitleAnim() {
      if (window.innerWidth <= 980 || typeof gsap === "undefined" || typeof SplitText === "undefined" || $(".title-anim").length === 0) {
        return;
      }
      let char_come = gsap.utils.toArray(".title-anim");
      char_come.forEach((char_come) => {
        let split_char = new SplitText(char_come, {
          type: "chars, words",
          lineThreshold: 0.5,
        });
        const tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: char_come,
            start: "top 90%",
            end: "bottom 60%",
            scrub: false,
            markers: false,
            toggleActions: "play none none none",
          },
        });
        tl2.from(split_char.chars, {
          duration: 0.8,
          x: 70,
          autoAlpha: 0,
          stagger: 0.03,
        });
      });
    }

    if (window.innerWidth > 980 && $(".title-anim").length > 0) {
      if (typeof gsap !== "undefined" && typeof SplitText !== "undefined") {
        runTitleAnim();
      } else {
        var gsapScript = document.createElement("script");
        gsapScript.src = "js/gsap.min.js";
        gsapScript.onload = function () {
          var splitTextScript = document.createElement("script");
          splitTextScript.src = "js/SplitText.min.js";
          splitTextScript.onload = runTitleAnim;
          document.body.appendChild(splitTextScript);
        };
        document.body.appendChild(gsapScript);
      }
    }


    if (typeof $.fn.appear === "function" && $(".odometer").length) {
        var odo = $(".odometer");
        odo.each(function () {
          $(this).appear(function () {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
          });
        });
      }
/* -------------------------------  
         WOW ANIMATED JS START
/* ----------------------------- */
// Elements Animation
    if($('.wow').length){
        var wow = new WOW(
          {
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       0,          // distance to the element when triggering the animation (default is 0)
            mobile:       true,       // trigger animations on mobile devices (default is true)
            live:         true       // act on asynchronously loaded content (default is true)
          }
        );
        wow.init();
    }



/* -------------------------------	
		INPUT PLACEHOLDER
/* ----------------------------- */

$('input,textarea').focus(function(){

   $(this).data('placeholder',$(this).attr('placeholder'))

          .attr('placeholder','');

}).blur(function(){

   $(this).attr('placeholder',$(this).data('placeholder'));

});

/* ---------------------	
		back-top
/* --------------------- */

if ($('#back-top').length) {

    var scrollTrigger = 100, // px

        backToTop = function () {

            var scrollTop = $(window).scrollTop();

            if (scrollTop > scrollTrigger) {

                $('#back-top').addClass('show');

            } else {

                $('#back-top').removeClass('show');

            }

        };

    backToTop();

    $(window).on('scroll', function () {

        backToTop();

    });

    $('#back-top').on('click', function (e) {

        e.preventDefault();

        $('html,body').animate({

            scrollTop: 0

        }, 700);

    });

}

var stickyNavTop = $('#header').offset().top;
var stickyNav = function(){
var scrollTop = $(window).scrollTop();
if (scrollTop > stickyNavTop) { 

    $('#header').addClass('sticky');

} else {

    $('#header').removeClass('sticky'); 

}

};

stickyNav();

 

$(window).scroll(function() {

    stickyNav();

});

$('a[href^="#applyBox"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 300) {
        $('#sideNavi').fadeIn();
    } else {
        $('#sideNavi').fadeOut();
    }

});





document.addEventListener("DOMContentLoaded", function () {
    const ctaButtons = document.querySelectorAll(".bttn-primary");

    ctaButtons.forEach(button => {
        button.addEventListener("click", function (e) {
            e.preventDefault();
            smoothScrollToTop();
        });
    });

    function smoothScrollToTop() {
        const startPosition = window.scrollY;
        const duration = 600; // Duration in ms
        const startTime = performance.now();

        function animation(currentTime) {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1); // Ensure progress is between 0 and 1
            window.scrollTo(0, startPosition * (1 - easeOutQuad(progress)));

            if (progress < 1) {
                requestAnimationFrame(animation);
            }
        }

        function easeOutQuad(t) {
            return t * (2 - t);
        }

        requestAnimationFrame(animation);
    }
});
