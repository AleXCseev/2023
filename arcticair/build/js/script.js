var landingFunctions = {
	init: function() {
		this.initLibraris()
		this.bar()
	}, 

	initLibraris: function() {
		
		// $('[href*="#"]').on('click', function (e) {
		// 	var fixedOffset = 0;
		// 	var cardHeight = $(".card").outerHeight(false)
		// 	var windowHeight = $(window).height()

		// 	$('html, body')
		// 		.stop()
		// 		.animate({ scrollTop: $(this.hash).offset().top + fixedOffset + (cardHeight - windowHeight)}, 1000);
		// 		// .animate({ scrollTop: $(this.hash).offset().top + fixedOffset}, 1000);
		// 	e.preventDefault();
		// })

		setTimeout(function() {
			$(".left__phone").addClass("active")
			$(".right__phone").addClass("active");
		}, 1000)

		// AOS.init({
		// 	disable : 'mobile',
		// 	once: true,
		// 	duration: 1000,
		// 	offset : 0,
		// });
	
		// $(window).resize(function() {
		// 	AOS.refresh();
		// })

		$('[data-fancybox]').fancybox({
			loop: true,
			infobar: false,
			animationEffect: false,
			backFocus: false,
			hash: false,
		});
	},

	
	bar: function() {
		function scrollBar(selector, center) {
			$(selector + " .bar__item").each(function(item) {
				if($(this).hasClass("bar__item-top-opacity")) {
					$(this).removeClass("bar__item-top-opacity")
					$(this).addClass("bar__item-top")
				} else if($(this).hasClass("bar__item-top")) {
					$(this).removeClass("bar__item-top")
					$(this).addClass("bar__item-center")
				} else if($(this).hasClass("bar__item-center")) {
					$(this).removeClass("bar__item-center")
					$(this).addClass("bar__item-bottom")
				} else if($(this).hasClass("bar__item-bottom")) {
					$(this).removeClass("bar__item-bottom")
					$(this).addClass("bar__item-bottom-opacity")
				} else if($(this).hasClass("bar__item-bottom-opacity")) {
					$(this).removeClass("bar__item-bottom-opacity")
					$(this).addClass("bar__item-top-opacity")
				}
			}) 
		}

		function scrollStop(selector) {
			setTimeout(function() {
				var el = $(".bar__column__1 .bar__item-active span").text()
				$(".bar__item-center span").text(el)
				$(".bar__item-center span").addClass("scale");
			}, 50)
		}
		
		var interval = 0
		var status = true
		var count = 1
		var timeout = null

		$(".order__btn-start").click(function() {
			if(count !== 4) {

				timeout = setTimeout(function() {
					$(".order__btn-start").click()
				}, 1500)

				$(".quantity").text(3 - count)

				if(status) {
					$(".divider__horizontal").fadeOut(300)
	
					interval = setInterval(function() {
						scrollBar(".bar__column")
					}, 150)
	
					$(".start").hide()
					$(".stop").fadeIn(200)
					status = !status
	
				} else if(!status) {
					clearInterval(interval);
					clearTimeout(timeout);
					$(".divider__horizontal").fadeIn(300)

					
	
					if (count == 1) {
						count = 2
					} else if (count == 2) {
						count = 3
					} else if (count == 3) {
						scrollStop()
						count = 4
					}
	
					$(".stop").hide()
					$(".start").fadeIn(200)
					status = !status
				}
			}
			if(count === 4) {
				setTimeout(function() {
		// 			$(".timer").hide()
		// 			$(".bar__info-holder").hide()
		// 			$(".bar-holder").hide();
        //   $(".info__section-wrapper").addClass("inactive")
		// 			$(".order__btn-start").hide()
		// 			$(".header__title-header").hide()
		// 			$(".header__hide").fadeIn(1000);

		// 			if($(window).width() > 1000 ) {
		// 				$(".site__wrapper").addClass("active")
		// 			}

		// 			$([document.documentElement, document.body]).animate(
		// 				{
		// 					scrollTop: $("body").offset().top,
		// 				},
		// 				1000
		// 			);

					var link = $("body").data("link");
					window.location.href = link;
				}, 4000)
			}
		})
	},
}

$(document).ready(function() {
	landingFunctions.init();
});

