var landingFunctions = {
	init: function() {
		this.initLibraris()
		this.time()
		// this.bar()
		this.modal()
	}, 

	initLibraris: function() {
		
		$('[href*="#"]').on('click', function (e) {
			var fixedOffset = 0;
			var cardHeight = $("#order").outerHeight(false)
			var windowHeight = $(window).height()

			$('html, body')
				.stop()
				.animate({ scrollTop: $(this.hash).offset().top + fixedOffset + (cardHeight - windowHeight)}, 1000);
				// .animate({ scrollTop: $(this.hash).offset().top + fixedOffset}, 1000);
			e.preventDefault();
		})

		// function copyTitle() {
		// 	if($(window).width() <= 1080) {
		// 		var title = $(".info__title").clone()
		// 		$(".info__title").hide()
		// 		title.addClass("info__title-clone")
		// 		if($(".info__title-clone").length) {
		// 			return false
		// 		} else {
		// 			$(".info__item-1").prepend(title)
		// 		}
		// 	} else {
		// 		$(".info__title").show()
		// 		$(".info__title-clone").remove()
		// 	}
		// }

		// copyTitle()

		// $(window).resize(function() {
		// 	copyTitle()
		// })

		function cardSlider (selector) {
			var owl = $(selector + " .card__main-foto").owlCarousel({
				items: 1,
				margin: 100,
				dots: false,
				nav: false,
				loop: true,
				mouseDrag: false,
				touchDrag: false,
				animateOut: 'fadeOut',
			});
	
			$(selector + " .card__foto").each(function() {
				$(this).click(function() {
					$(selector + " .card__foto").removeClass("active")
					var position = $(this).data("slide") - 1
					owl.trigger("to.owl.carousel", [position, 300])
					$(this).addClass("active")
				})
			})
		}
	
		cardSlider(".card__1")
		cardSlider(".card__2")
		

		var owl = $(".galary").owlCarousel({
			loop: true,
			nav: false,
			dots: false,
			dotsEach: true,
			items: 1,
			margin: 50,
			mouseDrag: false,
			touchDrag: false,
			responsive:{
				0: {
					dots: true,
					mouseDrag: true,
					touchDrag: true,
				},
				1080:{
					dots: false,
					mouseDrag: false,
					touchDrag: false,
				},
			}
		});

		$('.prev__btn').click(function() {
			owl.trigger('next.owl.carousel');
		})

		$('.next__btn').click(function() {
			owl.trigger('prev.owl.carousel');
		})


		var owlReview = $(".review__slider").owlCarousel({
			loop: true,
			nav: false,
			dots: false,
			dotsEach: true,
			items: 3,
			margin: 30,
			autoHeight: false,
			autoplay: true,
			autoplayTimeout: 5000,
			autoplayHoverPause: true,
			responsive:{
				0: {
					items: 1,
					dots: true,
					autoplay: false,
					autoHeight: true,
				},
				1081:{
					items: 3,
					dots: false,
					autoplay: true,
					autoHeight: false,
				},
			}
		});

		$('.review__prev-btn').click(function() {
			owlReview.trigger('next.owl.carousel');
		})

		$('.review__next-btn').click(function() {
			owlReview.trigger('prev.owl.carousel');
		})



		$.raty.path = $("body").data("path") +  '/img/raty';

		$('.modal__raiting').raty({
			half: true,
			space: false,
			number: 5,
		});
	
		AOS.init({
			disable : 'mobile',
			once: true,
			duration: 1000,
			offset : 0,
		});
	
		$(window).resize(function() {
			AOS.refresh();
		})

		$('[data-fancybox]').fancybox({
			loop: true,
			infobar: false,
			animationEffect: false,
			backFocus: false,
			hash: false,
		});
	},

	time: function() {
		var saleStart = 7;
		var saleEnd = 7;
		var localStartDate = parseInt(localStorage.getItem("saleStartDate") || (Date.now() - 86400000*saleStart));
		var localEndDate = parseInt(localStorage.getItem("saleEndDate") || (Date.now() + 86400000*saleEnd));

		function pad(num) {
			return ("0" + num).substr(-2);
		}		  

		function saleDates() {

			if (Date.now() >= new Date(localEndDate).getTime()) {
				localStartDate = Date.now() - 86400000*saleEnd;
				localEndDate = Date.now() + 86400000*saleEnd;
				// console.log(localStartDate, localEndDate, 2)
			}
			localStorage.setItem("saleStartDate", localStartDate);

			localStorage.setItem("saleEndDate", localEndDate);
			// console.log(localStartDate, localEndDate, 3)

			var ds = new Date(localStartDate)
			var de = new Date(localEndDate)

			// console.log(ds, de, 4)

			var dateStartResult = pad(ds.getDate()) + "." + pad(ds.getMonth() + 1) + "." + ds.getFullYear();
			var dateEndResult = pad(de.getDate()) + "." + pad(de.getMonth() + 1) + "." + de.getFullYear();
			$(".js-date-sale-start").text(dateStartResult);
			$(".date").text(dateEndResult);

		}

		saleDates()
	},

	bar: function() {
		if(localStorage.getItem("lotery")) {
			$(".discount__block").addClass("discount__opacity")
			$(".discount__center").removeClass("discount__opacity")
			$(".main__block").show()
			$(".bar__section").hide()
		}
		
		$(".start").click(function() {
			if(!localStorage.getItem("lotery")) {
				localStorage.setItem("lotery", true);
				$(".discount__line").addClass("active");
				$(this).find("span").text("Зачекайте...")

				setTimeout(function() {
					$(".discount__block").addClass("discount__opacity")
					$(".discount__center").removeClass("discount__opacity")
					$(".discount__center").addClass("discount__active")
				}, 10000)

				setTimeout(function() {
					$(".bar__section").slideUp(1000)
					$(".main__block").fadeIn()
					$([document.documentElement, document.body]).animate({
						scrollTop: $("#order").offset().top
					}, 1000)
					
				}, 12000)
			}
			
		})
	},

	modal: function() {
		function modal() {
			$(".add__review").click(function () {
				$(".modal__review").addClass("active")
			})
	
			function close() {
				$(".modal__review").removeClass("active")
			}
	
			$(".modal__review").click( function(e) {
				var target = e.target;
				if(target.classList.contains("modal__close")) {
					close()
				}
				if(target.classList.contains("modal")) {
					close()
				}
			})
	
			function readURL(input) {
				if (input.files && input.files[0]) {
					var reader = new FileReader();
					console.log(reader)
					reader.onload = function (e) {
						$('.file img').attr('src', e.target.result).css("display", "block");
					};
					reader.readAsDataURL(input.files[0]);
				}
			}
	
			$(".modal__review .input__file").on("change", function () {
				readURL(this);
			});
	
			$(".modal__review form").submit(function (e) {
				e.preventDefault()
				$(this).removeClass("active");
				$(".send__window").addClass("active");
				$(".modal__review .name__input").val("")
				$(".modal__review .modal__area").val("")
				$(".modal__review .file img").attr("src", "").css("display", "none")
				delayClose()
			})
			function delayClose() {
				setTimeout(function () {
					$(".modal__review form").addClass("active");
					$(".send__window").removeClass("active");
					close();
				}, 5000);
			}
		}
	
		modal()
	},
}

$(document).ready(function() {
	landingFunctions.init();
});

