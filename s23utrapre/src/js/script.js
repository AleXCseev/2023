var landingFunctions = {
	init: function() {
		this.initLibraris()
		// this.time()
		this.modal()
		// this.video()
		// this.card()
		// this.quantity()
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

	

		// setTimeout(function() {
		// 	$(".header__phone").addClass("active")
		// }, 1000)



		// $(window).scroll(function() {
		// 	$('.footer__section').each(function(){
		// 	var imagePos = $(this).offset().top;
	
		// 	var topOfWindow = $(window).scrollTop();
		// 		if (imagePos < topOfWindow + 300) {
		// 			$(".footer__phone").addClass("active");
		// 		}
		// 	});
		// });
	
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

		// $(".date__1").text(getDate(-5));
    	// $(".date__2").text(getDate(2));

		// $(".date").text(getDate(2))
		// $(".card__date .date").text(getDate(2))
		
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

	bar: function() {
		function scrollBar(selector, center) {
			
		}

		
		
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
			$(this).find("span").text("")
			$(".spiner__item").css({opacity: "1"})
			$(this).attr("disabled", true)
			$(this).find("span").text("STOP")

			if(options.count !== 4) {

				timeout = setTimeout(function() {
					$(".spin").find("span").text("Повторить попытку")
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
					$(".spin__finish").css({display: "flex"});

				}, options.distance + 1000)


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

