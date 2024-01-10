var landingFunctions = {
	init: function() {
		this.initLibraris()
		this.time()
		// this.card()
		// this.modal()
	}, 

	initLibraris: function() {

		$('[href*="#"]').on('click', function (e) {
			var fixedOffset = 0;
			var cardHeight = $("#order").outerHeight(false)
			var windowHeight = $(window).height()

			$('html, body')
				.stop()
				.animate({ scrollTop: $(this.hash).offset().top + fixedOffset + (cardHeight - windowHeight)}, 2000);
				// .animate({ scrollTop: $(this.hash).offset().top + fixedOffset}, 1000);
			e.preventDefault();
		});

		function card(selector) {
			let owl = $(selector + " .card__slider").owlCarousel({
				loop: true,
				margin: 0,
				nav: false,
				items: 1,
				dots: false,
				dotsEach: true,
				autoHeight: true,
				autoHeight: false,
				mouseDrag: false,
				touchDrag: false,
			})
	
			$(selector + " .card__btn").click(function(){
				$(this).closest('.card__section').find(".card__btn").removeClass("active")
				var position = $(this).data("slide") - 1
				owl.trigger("to.owl.carousel", [position, 300])
				$(this).addClass("active")
			})
		}

		card(".card__section-1")
		card(".card__section-2")

		
		$(".review__slider").owlCarousel({
			loop: true,
			margin: 30,
			nav: false,
			items: 1,
			dots: true,
			dotsEach: true,
			autoHeight: true,
		})

		// $('[data-fancybox]').fancybox({
		// 	loop: true,
		// 	infobar: false,
		// 	animationEffect: false,
		// 	backFocus: false,
		// 	hash: false,
		// });
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

		function timer () {
			function runMultiple(hoursSelector, minutesSelector, secondsSelector, milisecondsSelector) {
				var d = new Date();
				var h = String(23 - d.getHours()).padStart(2, "0");
				var m = String(59 - d.getMinutes()).padStart(2, "0");
				var s = String(59 - d.getSeconds()).padStart(2, "0");
				// var ms = String(1000 - d.getMilliseconds()).padStart(3, "0");
				$(hoursSelector).text(h)
				$(minutesSelector).text(m)
				$(secondsSelector).text(s)
				// $(milisecondsSelector).text(ms)
			}
			setInterval(function () {
				runMultiple(".hours", ".minutes", ".seconds")
			}, 1000);
		}
	
		timer()

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

		$(".date").text(getDate(2))
	},

	card: function() {
		function cardImg(selector) {
			function toggleDataSrcAtribute(string) {
				$(selector + " .card__slide img").each(function() {
					$(this)
						// .hide()
						.attr("src",  $(this).attr("data-" + string))
						.parent().attr("href",  $(this).attr("data-" + string))
						// .fadeIn(1000)
				})
			}
	
			$(selector + " .card__color-btn").click(function () {
				var color = $(this).data("color")
				toggleDataSrcAtribute(color)
	
				$(selector + " .card__color-btn").removeClass("active")
				$(this).addClass("active")

				var price = $(this).data("price")
				var currency = $(this).data("currency")
				$(this).closest(".card").find(".new__price").hide().text(Number(price) + " " + currency).fadeIn(600)
				$(this).closest(".card").find(".old__price").hide().text((Number(price) * 2) + " " + currency).fadeIn(600)
			})
		}
		
		cardImg(".card__2")
		cardImg(".card__3")
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
