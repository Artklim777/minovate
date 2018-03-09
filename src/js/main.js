//=require slick-carousel/slick/slick.min.js

/*-------------------Navbar-toggler---------------*/

    $('.navbar-toggler').on('click', function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $(target).toggleClass('collapse');
    });
    /*-----------------Scroll-to-top-----------------*/

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#scrollup').fadeIn();
        } else {
            $('#scrollup').fadeOut();
        }
    });

    $('#scrollup').click(function() {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

/*--------- main-slider-------*/


$(document).ready(function(){
  $('#main-corusel').slick({
  	arrows: true,
    
  });
});

/*--------- Card-slider-------*/


$(document).ready(function(){
  $('#slider').slick({
  	prevArrow: '<div class="prev"></div>',
  	arrows: true,
  	infinite: true,
  	slidesToShow: 4,
  	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 4,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
			}
		}
	]
    
  });
});




// -------------------logos-corusel--------------//

$(document).ready(function(){
      $('.logos').slick({
      	dots: false,
       autoplay: true,
       autoplaySpeed: 1000,
       slidesToShow: 5,
       slidesToScroll: 1,
       arrows: false,
	   infinite: true,
	   responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
       });
    });



   
  

   


   