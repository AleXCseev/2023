var landingFunctions = {
	init: function() {
		this.initLibraris()
		this.time()
		// this.modal()
	}, 

	initLibraris: function() {
		
		$('[href*="#"]').on('click', function (e) {
			var fixedOffset = 0;
			// var cardHeight = $($(this).attr("href")).outerHeight(false)
			// var windowHeight = $(window).height()

			$('html, body')
				.stop()
				// .animate({ scrollTop: $(this.hash).offset().top + fixedOffset + (cardHeight - windowHeight)}, 1000);
				.animate({ scrollTop: $(this.hash).offset().top + fixedOffset}, 1000);
			e.preventDefault();
		})

		$(".owl-dots").off()

		function galarySlider (selector) {
			var owl = $(selector + " .galary__slider").owlCarousel({
				items: 1,
				margin: 20,
				dots: false,
				nav: false,
				loop: true,
				mouseDrag: false,
				touchDrag: false,
				animateOut: 'fadeOut',
				smartSpeed: 100,
				responsive:{
					0:{
						mouseDrag: true,
						touchDrag: true,
					},
					1081:{
						mouseDrag: false,
						touchDrag: false,
					}
				}
			});

			var owl2 = $(selector + " .galary__slider-decor").owlCarousel({
				items: 3,
				margin: 10,
				dots: false,
				nav: false,
				loop: true,
				mouseDrag: false,
				touchDrag: false,
				// animateOut: 'fadeOut',
			});
	
			$(selector + ' .prev__btn').click(function() {
				owl.trigger('prev.owl.carousel');
				owl2.trigger('prev.owl.carousel');
			})
	
			$(selector + ' .next__btn').click(function() {
				owl.trigger('next.owl.carousel');
				owl2.trigger('next.owl.carousel');
			})
		}
	
		galarySlider(".galary__section")

		$(".card__male-btn").click(function() {
			$(".card__male-btn").removeClass("active")
			$(this).addClass("active")

			var male = $(this).data("male")
			var price = $(this).data("price")
			var currency = $(this).data("currency")
			var id = $(this).data("id")

			$(".card__select").removeClass("active")

			if(male === "man") {
				$(".card__select.select-man").addClass("active")
			} else {
				$(".card__select.select-woman").addClass("active")
			}

			$(this).closest(".card").find(".new__price").text(price + " " + currency)
			$(this).closest(".card").find(".old__price").text(Number(price * 2) + " " + currency)
		})



		var owlReview = $(".review__slider").owlCarousel({
			loop: true,
			nav: false,
			dots: false,
			dotsEach: true,
			items: 3,
			margin: 20,
			autoHeight: true,
			// stagePadding: 10,
			// mouseDrag: false,
			// touchDrag: false,
			// responsive:{
			// 	0:{
			// 		mouseDrag: true,
			// 		touchDrag: true,
			// 	},
			// 	1081:{
			// 		mouseDrag: false,
			// 		touchDrag: false,
			// 	}
			// }
		});

		$('.review__btns .prev__btn').click(function() {
			owlReview.trigger('prev.owl.carousel');
		})

		$('.review__btns .next__btn').click(function() {
			owlReview.trigger('next.owl.carousel');
		})

		$.raty.path = $("body").data("path") +  '/img/raty';

		$('.modal__raiting').raty({
			half: true,
			space: false,
			number: 5,
		});
	
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

	time: function() {
		Date.prototype.daysInMonth = function () {
			return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
		};
		
		if (!String.prototype.padStart) {
			String.prototype.padStart = function padStart(targetLength, padString) {
				targetLength = targetLength >> 0; //truncate if number or convert non-number to 0;
				padString = String((typeof padString !== 'undefined' ? padString : ' '));
				if (this.length > targetLength) {
					return String(this);
				}
				else {
					targetLength = targetLength - this.length;
					if (targetLength > padString.length) {
						padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
					}
					return padString.slice(0, targetLength) + String(this);
				}
			};
		}

		function getDate(plusDays) {
			var today = new Date();
			var dd = String(today.getDate() + plusDays).padStart(2, '0');
			var mm = String(today.getMonth() + 1).padStart(2, '0');
			if (+dd < 0) {
				mm = String(today.getMonth()).padStart(2, '0');
			}
			
			var yyyy = String(today.getFullYear());
			yyyy = yyyy.substr(yyyy.length - 2);
			var currentDaysInMonth = new Date().daysInMonth()
			if (+dd > currentDaysInMonth) {
				dd = String(dd - currentDaysInMonth).padStart(2, '0');
				mm = String(+mm + 1).padStart(2, '0');
			}
			if (+dd < 0) {
				dd = String(currentDaysInMonth + +dd).padStart(2, '0');
			}
			if (+dd == 0) {
				dd = "01"
			}
			return dd + "." + mm + "." + yyyy
		}

		// $(".date__1").text(getDate(-5));
    	// $(".date__2").text(getDate(2));

		$(".date").text(getDate(7))
		$(".date__1").text(getDate(-1))
		$(".date__2").text(getDate(-1))
		$(".date__3").text(getDate(-2))
		$(".date__4").text(getDate(-3))
		$(".date__5").text(getDate(-4))
		
		// $(".year").text(new Date().getFullYear())
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

