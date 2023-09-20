// Carousel Owl - Solutions swimlane

$('.solutions').owlCarousel({
    margin:50,
    nav:true,
    loop:true,
    responsive:{
        0:{
            items:1
            // loop:true
        },
        600:{
            // autoWidth:true,
            items:3
            // loop:false
        }
    }
});


// Carousel Owl - Moving Logos

// $('.movingLogoRtl').owlCarousel({
//     rtl: true,
//     loop: true,
//     margin: 50,
//     autoplay: true,
//     slideTransition: 'linear',
//     autoplayTimeout: 6000,
//     autoplaySpeed: 6000,
//     autoplayHoverPause: true,
//     responsive:{
//         0:{
//             items:3
//         },
//         768:{
//             items:3
//         },
//         1200:{
//             items:5
//         }
//     }
// });

$('.movingLogoRtl').slick({
	rtl: true,
	lazyLoad: "ondemand",
	dots: false,
	infinite: true,
	slidesToShow: 5,
	centerMode: false,
	variableWidth: true,
	pauseOnHover: true,
	arrows: false,
	swipeToSlide: true,
	autoplay: true,
	autoplaySpeed: 1,
	speed: 6000,
	cssEase: "linear",
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 5
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 3
			}
		}
	]
});

// $('.movingLogoLtr').owlCarousel({
//     loop: true,
//     margin: 50,
//     autoplay: true,
//     slideTransition: 'linear',
//     autoplayTimeout: 6000,
//     autoplaySpeed: 6000,
//     autoplayHoverPause: true,
//     responsive:{
//         0:{
//             items:4
//         },
//         768:{
//             items:5
//         },
//         1200:{
//             items:7
//         }
//     }
// });

$('.movingLogoLtr').slick({
	rtl: false,
	lazyLoad: "ondemand",
	dots: false,
	infinite: true,
	slidesToShow: 7,
	centerMode: false,
	variableWidth: true,
	pauseOnHover: true,
	arrows: false,
	swipeToSlide: true,
	autoplay: true,
	autoplaySpeed: 1,
	speed: 6000,
	cssEase: "linear",
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 5
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 3
			}
		}
	]
});

var topItem = 0,
  leftItem = 0,
  popupHeight = 530;

$(".movingLogoRtl .item, .movingLogoLtr .item").on("click", function(e) {
  var $this = $(this),
    $parent = $this.parents(".movingLogoWrap"),
    content = $this.html(),
    $popup = $parent.find(".popup");

  //topItem = $this.offset().top - $parent.offset().top + $this.height() / 2;
  leftItem = $this.offset().left - $parent.offset().left + $this.width() / 2;

  $popup.css({
    top: topItem,
    left: leftItem,
    width: 0,
    height: 0
  });

  $popup.html(content).stop().animate(
    {
      //top: -((popupHeight - $this.parent().outerHeight()) / 2),
      top: 0,
      left: 0,
      width: "100%",
      height: popupHeight,
      opacity: 1
    },
    400
  );
});

$(".popup").on("click", function(e) {
  $(this).stop().animate(
    {
      width: 0,
      height: 0,
      top: topItem,
      left: leftItem,
      opacity: 0
    },
    400
  );
});


// Carousel Owl - News & Insights

$('.owl-carousel.newsInsight').owlCarousel({
    margin:20,
    nav:true,
    loop:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        }
    }
});


// Carousel Owl - About - Clients

// $('.movingLogoSmall').owlCarousel({
//     loop: true,
//     margin: 35,
//     autoplay: true,
//     slideTransition: 'linear',
//     autoplayTimeout: 6000,
//     autoplaySpeed: 6000,
//     autoplayHoverPause: true,
//     responsive:{
//         0:{
//             items:3
//         },
//         768:{
//             items:3
//         },
//         1200:{
//             items:5
//         }
//     }
// });

// $('.movingLogoSmall').slick({
// 	rtl: false,
// 	lazyLoad: "ondemand",
// 	dots: false,
// 	infinite: true,
// 	slidesToShow: 5,
// 	centerMode: false,
// 	variableWidth: true,
// 	pauseOnHover: true,
// 	arrows: false,
// 	swipeToSlide: true,
// 	autoplay: true,
// 	autoplaySpeed: 1,
// 	speed: 6000,
// 	cssEase: "linear",
// 	responsive: [
// 		{
// 			breakpoint: 1200,
// 			settings: {
// 				slidesToShow: 5
// 			}
// 		},
// 		{
// 			breakpoint: 768,
// 			settings: {
// 				slidesToShow: 3
// 			}
// 		}
// 	]
// });


// Carousel Owl - Milestones

$('.carouselDecades').owlCarousel({
    animateOut: 'animate__slideOutUp',
    animateIn: 'animate__slideInUp',
    loop:false,
    nav:true,
    margin:0,
    items:1,
    URLhashListener:true,
    startPosition: 'URLHash'
});


//Carousel Own - New Solution details

$('.solutionDetailsBig').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    items:1
    // URLhashListener:true,
    // startPosition: 'URLHash'
});

// $('.solutionDetailsSmall .owl-carousel').owlCarousel({
//     stagePadding: 40,
//     nav:true,
//     dots: false,
//     margin:10,
//     items:2,
//     URLhashListener:true,
//     startPosition: 'URLHash',
//     navContainer: '.solutionDetailsSmall .custom-nav'
// });


// Carousel Owl - News Details Sidebar

var checkWidth = $(document).width();
  
if(checkWidth <=1200){
    $(".relatedNews_Items").owlCarousel({
        nav:true,
        items:1,
        loop:true
    });
}














