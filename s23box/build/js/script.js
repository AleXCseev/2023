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
			$(".prod__decor-2").addClass("active")
			$(".prod__decor-4").addClass("active");
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
		
		let count = 0

		$(".box__item").hover(function(){
			$(this).addClass("animate__animated animate__headShake")
		}, function() {
			$(this).removeClass("animate__animated animate__headShake")
		})

		$(".box__btn-start").click(function() {
			$(".box__card-wrapper").fadeOut(300);

			$(".box__item").click(function() {

				if(count === 2) {
					$(this).find(".box__img").fadeOut(300)
					$(this).find(".prod__box").fadeIn(500)

					setTimeout(function() {
						$(".box__finally").show()
						$(".box__finally").addClass("slideExpandUp")
					}, 1500)

					count++
					return false
				}

				if(count < 3) {
					count++
					$(this).find(".box__img").fadeOut(300)
				}
			
			})
		})

		
		
		// var interval = 0
		// var status = true
		// var count = 1
		// var timeout = null

		// $(".order__btn-start").click(function() {
		// 	if(count !== 4) {

		// 		$(".quantity").text(3 - count)

		// 		if(status) {
		// 			$(".divider__horizontal").fadeOut(300)
	
		// 			interval = setInterval(function() {
		// 				scrollBar(".bar__column")
		// 			}, 150)

		// 			timeout = setTimeout(function() {
		// 				$(".order__btn-start").click()
		// 			}, 1500)
	
		// 			$(".start").hide()
		// 			$(".stop").fadeIn(200)
		// 			status = !status
	
		// 		} else if(!status) {
		// 			clearInterval(interval);
		// 			clearTimeout(timeout);
		// 			$(".divider__horizontal").fadeIn(300)

					
	
		// 			if (count == 1) {
		// 				$(".bar__info-text").hide()
		// 				$(".info__text-2").fadeIn(300)
		// 				count = 2
		// 			} else if (count == 2) {
		// 				$(".bar__info-text").hide()
		// 				$(".info__text-3").fadeIn(300)
		// 				count = 3
		// 			} else if (count == 3) {
		// 				$(".bar__info-text").hide()
		// 				$(".info__text-4").fadeIn(300)
		// 				scrollStop()
		// 				count = 4
		// 			}
	
		// 			$(".stop").hide()
		// 			$(".start").fadeIn(200)
		// 			status = !status
		// 		}
		// 	}
		// 	if(count === 4) {
		// 		setTimeout(function() {
		// 			var link = $("body").data("link");
		// 			window.location.href = link;
		// 		}, 4000)
		// 	}
		// })
	},
}

$(document).ready(function() {
	landingFunctions.init();
});

