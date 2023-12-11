var landingFunctions = {
	init: function() {
		this.initLibraris()
		this.time()
		this.bar()
		this.modal()
	}, 

	initLibraris: function() {
		
		$('[href*="#"]').on('click', function (e) {
			var fixedOffset = 0;
			// var cardHeight = $("#card").outerHeight(false)
			// var windowHeight = $(window).height()

			$('html, body')
				.stop()
				// .animate({ scrollTop: $(this.hash).offset().top + fixedOffset + (cardHeight - windowHeight)}, 1000);
				.animate({ scrollTop: $(this.hash).offset().top + fixedOffset}, 1000);
			e.preventDefault();
		})

		$(".review__slider").owlCarousel({
			loop: true,
			nav: true,
			dots: true,
			dotsEach: true,
			items: 2,
			margin: 50,
			autoHeight: false,
			responsive:{
				0:{
					items:1,
					autoHeight: true,
				},
				1081:{
					items:2,
					autoHeight: false,
				}
			}
		});

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

		$(".date").text(getDate(2))
		// $(".card__date .date").text(getDate(2))
		
		// $(".year").text(new Date().getFullYear())
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
				$(".bar__item-center span").addClass("bar__item-logos").text(el)
				$(".bar__item-center").addClass("scale");
			}, 20)
		}
		
		var interval = 0
		var active = false

		if(localStorage.getItem("rotate")) {
			$(".bar__section-wrapper").hide()
			$(".site__block-2").show()
		}

		$(".order__btn-start").click(function() {
			if ( active ) {
				clearInterval(interval);
				scrollStop()
				openClose()
				localStorage.setItem("rotate", true)
			} else {
				interval = setInterval(function() {
					scrollBar(".bar__column")
				}, 100)

				$(this).find(".stop").show()
				$(this).find(".start").hide()

				active = true
				setTimeout(function() {
					clearInterval(interval);
					scrollStop()
					openClose()
					localStorage.setItem("rotate", true)
				}, 3000)
			}
			

		})

		function openClose() {
			setTimeout(function() {
				$(".bar__section-wrapper").hide(0)
				$(".site__block-2").fadeIn(1000)
				

				$([document.documentElement, document.body]).animate(
					{
						scrollTop: $(".card__section-wrapper").offset().top,
					},
					1000
				);

			}, 3000)
		}

		// function operBarModal() {
		// 	$(".bar__modal-wrapper").addClass("active")

		// 	$(".bar__modal-wrapper").click(function(e) {
		// 		console.log(e.target);
		// 		if(e.target.closest(".bar__modal")) {
		// 			return false;
		// 		} else if(e.target.closest(".bar__modal-close")) {
		// 			$(this).removeClass("active")
		// 		} else {
		// 			$(this).removeClass("active")
		// 		}
		// 	})
		// }
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

