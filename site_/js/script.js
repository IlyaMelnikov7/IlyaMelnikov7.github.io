
	$('.sixth__slider').slick({
	  dots: true,
	  infinite: false,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  responsive: [
   		 {
      breakpoint: 1050,
      settings: {
        slidesToShow: 2,
        arrows: false
      }
    },{
      breakpoint: 790,
      settings: {
        slidesToShow: 1,
        arrows: false
      }
    }

    ]
	});

	$('.nav-toggle').on('click', function(){
	  $('.nav').slideToggle();
	});