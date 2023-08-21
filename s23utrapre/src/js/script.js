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
		
		var options = {
			count: 1,
			timeout: null,
			spin1: -1215,
			spin2: -2475,
			spin3: -3600,
			distance: 3000,
		}

		$(".spin").click(function() {

			$(this).find("img").hide()
			$(this).find("span").hide()
			$(".spiner__item").css({opacity: "1"})
			$(this).attr("disabled", true)
			$(this).find(".stop").fadeIn(300)

			if(options.count !== 4) {

				timeout = setTimeout(function() {
					$(".spin").find("span").hide()
					$(".spin").find(".start").fadeIn(300)
					$(".spin").attr("disabled", false)
				}, options.distance)


				if(options.count === 1) {
					$(".spiner__block").css({transform: `rotate(${options.spin1}deg)`})
					setTimeout(function() {
						$(".spiner__item").css({opacity: "0.5"})
						$(".spiner__item-4").css({opacity: "1"})
					}, options.distance)
				}
				if(options.count === 2) {
					$(".spiner__block").css({transform: `rotate(${options.spin2}deg)`})
					setTimeout(function() {
						$(".spiner__item").css({opacity: "0.5"})
						$(".spiner__item-8").css({opacity: "1"})
					}, options.distance)
				}
				if(options.count === 3) {
					$(".spiner__block").css({transform: `rotate(${options.spin3}deg)`})
					setTimeout(function() {
						$(".spiner__item").css({opacity: "0.5"})
						$(".spiner__item-1").css({opacity: "1"})
					}, options.distance)
				}
				options.count++

				$(".header__info span").text( 4 - options.count )
			}

			if(options.count === 4) {

				setTimeout(function() {
					$(".spiner__block").hide()
					$(".spin").hide()
					$(".spin__finish").addClass("visible");

				}, options.distance)


				setTimeout(function() {
					var link = $("body").data("link");
					window.location.href = link;
				}, options.distance + 4000)
			}
		})
	}
}

$(document).ready(function() {
	landingFunctions.init();
});

