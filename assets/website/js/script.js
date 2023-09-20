// Sticky Nav
$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    $('.navigation').addClass('scrolled');
  } else {
    $('.navigation').removeClass('scrolled');
  }
});



// Burger Menu

$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#menuOverlay').toggleClass('open');
});


// Desktop show and hide
$('.menu1').click(function() {
   $('.menu2, .menu3, .menu4, .menu5').toggleClass('hide');
});

$('.menu2').click(function() {
   $('.menu1, .menu3, .menu4, .menu5').toggleClass('hide');
});

$('.menu3').click(function() {
   $('.menu1, .menu2, .menu4, .menu5').toggleClass('hide');
});

$('.menu4').click(function() {
   $('.menu1, .menu2, .menu3, .menu5').toggleClass('hide');
});

$('.menu5').click(function() {
   $('.menu1, .menu2, .menu3, .menu4').toggleClass('hide');
});

$('.menu6').click(function() {
   $('.menu7, .menuBigLink').toggleClass('hide');
});

$('.menu7').click(function() {
   $('.menu6, .menuBigLink').toggleClass('hide');
});

// Mobile show and hide
$('.menu1-m').click(function() {
   $('.menu2-m, .menu3-m, .menu4-m, .menu5-m, .menu6-m, .menu7-m, .menuBigLink').toggleClass('hide');
});

$('.menu2-m').click(function() {
   $('.menu1-m, .menu3-m, .menu4-m, .menu5-m, .menu6-m, .menu7-m, .menuBigLink').toggleClass('hide');
});

$('.menu3-m').click(function() {
   $('.menu1-m, .menu2-m, .menu4-m, .menu5-m, .menu6-m, .menu7-m, .menuBigLink').toggleClass('hide');
});

$('.menu4-m').click(function() {
   $('.menu1-m, .menu2-m, .menu3-m, .menu5-m, .menu6-m, .menu7-m, .menuBigLink').toggleClass('hide');
});

$('.menu5-m').click(function() {
   $('.menu1-m, .menu2-m, .menu3-m, .menu4-m, .menu6-m, .menu7-m, .menuBigLink').toggleClass('hide');
});

$('.menu6-m').click(function() {
   $('.menu1-m, .menu2-m, .menu3-m, .menu4-m, .menu5-m, .menu7-m, .menuBigLink').toggleClass('hide');
});

$('.menu7-m').click(function() {
   $('.menu1-m, .menu2-m, .menu3-m, .menu4-m, .menu5-m, .menu6-m, .menuBigLink').toggleClass('hide');
});

$('.redCorner .icon').click(function(){
	$(this).prev('form').toggleClass('open');
})

// Back to top //

var btn = $('.backtotop');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});



// Social Share on hover

$(".panel-heading").parent('.share').hover(
  function() {
    $(this).children('.collapse').collapse('show');
  }, function() {
    $(this).children('.collapse').collapse('hide');
  }
);




// Milestones

$('.accordionDecadesInner').on('shown.bs.collapse', function (e) {
    var offset = $(this).find('.collapse.show').prev('.accordion-header');
    if(offset) {
        $('html,body').animate({
            scrollTop: $(offset).offset().top -150
        }, 10); 
    }
}); 




















/**
 * add-on JS by Gary Tong
 *
 */
 
$(function() {
	$('body').click(function(e){
		
		// click anywhere to close the language options
		if(e.target.parentNode.hash!="#collapselanguages") {
			// not clicking to open the language options
			$('.collapselanguages.collapse.show').removeClass('show');
			$('a[href="#collapselanguages"]').removeClass('collapsed');
		}
	});
	
	$('.pretty-inputbox input, .pretty-inputbox textarea')
		.focus(function(){
			$(this).next('div').fadeOut();
		})
		.blur(function(){
			if($(this).val()=='') {
				$(this).next('div').fadeIn();
			} else {
				$(this).next('div').fadeOut();
			}
		})
		
	$('.pretty-inputbox input + div').click(function(){
		$(this).prev('input').trigger('focus');
	})
	
	$('.pretty-inputbox textarea + div').click(function(){
		$(this).prev('textarea').trigger('focus');
	})
		
	$('.pretty-selectbox select').change(function(){
		if($(this).val()=='') {
			$(this).next('div').fadeIn();
		} else {
			$(this).next('div').fadeOut();
		}
	})
	
	$('.pretty-selectbox select + div').click(function(){
		$(this).prev('select').trigger('click');
	})
	
	if($('.accordionServices').length > 0) {
		var adjustAccordionServicesContent = function() {
			
			$('.accordionServices').each(function(){
				var servicesBodyWrapTallestHeight = 0;
				
				var servicesBodyWrapElems = $(this).find('.servicesBodyWrap');
				
				for(var i=0;i<servicesBodyWrapElems.length;i++) {
					if(servicesBodyWrapElems[i].clientHeight > servicesBodyWrapTallestHeight) {
						servicesBodyWrapTallestHeight = servicesBodyWrapElems[i].clientHeight;
					}
				}
				
				if($(window).width() < 992) {
					$(this).height('auto');
				} else {
					$(this).height(servicesBodyWrapTallestHeight);
				}
			})
		}
		
		adjustAccordionServicesContent();
		var ww = $(window).width();
		$(window).resize(function(){
			if(ww!=$(window).width()) {
				adjustAccordionServicesContent();
			}
		})
	}
})