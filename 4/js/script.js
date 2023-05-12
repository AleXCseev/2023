$(document).ready(function() {
    $(".slider").owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        dotsEach: false,
        items: 3,
        margin: 0,
        autoHeight: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive:{
            0: {
                items: 1,
        	},
        	541: {
                items: 2,
        	},
        	1023: {
                items: 3,
        	}
        }
    });
})

