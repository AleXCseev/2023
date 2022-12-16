var landingFunctions = {
	init: function() {
		this.initLibraris()
		this.time()
		this.review()
		this.bar()
	}, 

	initLibraris: function() {
		$('[href*="#"]').on('click', function (e) {
			var fixedOffset = -20;
			// var cardHeight = $("#card").outerHeight(false)
			// var windowHeight = $(window).height()

			$('html, body')
				.stop()
				// .animate({ scrollTop: $(this.hash).offset().top + fixedOffset + (cardHeight - windowHeight)}, 1000);
				.animate({ scrollTop: $(this.hash).offset().top + fixedOffset}, 1000);
			e.preventDefault();
		})
	},

	time: function() {
		var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

		$(".js-full-date").each(function () {
			var countDays = parseInt($(this).data("date"));
			var mark = $(this).hasClass("minus") ? "-" : "+";

			var finalDate = mark === "-" ? new Date(Date.now() - (86400000 * countDays)) : new Date(Date.now() + (86400000 * countDays))
			var countDays = finalDate.getDate() + " " + months[finalDate.getMonth()] + " " + finalDate.getFullYear();

			$(this).text(countDays)

			$(".current-month").text(months[finalDate.getMonth()])
		})

		function endDifDate(countDays) {

			if (countDays || countDays === 0) {
				countDays = parseInt(countDays);
		
				const date = new Date(Date.now() - (86400000 * countDays));
				return pad(date.getDate()) + "/" + pad(date.getMonth() + 1) + "/" + date.getFullYear();
			}
		}
		
		function pad(num) {
			return ("0" + num).substr(-2);
		}

		$(".js-actual-date").each(function (index, item) {
			$(item).html(endDifDate($(item).data("dateEnd")));
		});
	},

	review: function() {
		$.raty.path = $("body").data("path") +  '/img/raty';

		$('.review__control-raiting').raty({
			half: true,
			space: false,
			number: 5,
			starHalf : 'half.png',
			starOff  : 'off.png',
			starOn   : 'on.png'
		});

		$('.review__raiting').each(function() {
		
			$(this).raty({
				readOnly: true, 
				space: false,
				score: function() {
					return $(this).attr('data-score');
					}
			})
		})
		
		function addReview() {
			$(".review__control").submit(function(e) {
				e.preventDefault();
				var name = $(".review__input-name input").val()
				$(".review__input-name input").val("")
				var massage = $(".review__input-massage input").val()
				$(".review__input-massage input").val("");
				var raiting = $(".review__control-raiting input").val()
				var $review = $(".review__hidden").clone()
				$review.removeClass("review__hidden");

				$review.find(".review__name").text(name);
				$review.find(".review__massage").text(massage);
				
				$(".review__block").prepend($review);

				$(".review").eq(0).find(".review__raiting-hidden").raty({
					readOnly: true, 
					space: false,
					score: raiting,
				});
			})
		}

		addReview()
	},

	bar: function() {

		if (localStorage.getItem("lotteryRotated")) {
			$(".success-part").show();
			$(".lottery-box-wrapper").hide();
			start_timer()
			// $("a[href='#promo']").attr("href", "#order")
		}
	
		$(".lottery-btn").click(function() {
			var $that = $(this);
			var $lotteryRound = $that.closest(".lottery-box-wrapper").find(".lottery-round");
			$lotteryRound.css("animation", "rotate 5s forwards");
			$lotteryRound.css("animation-timing-function", "cubic-bezier(.46,.07,.19,1.06)");
	
			setTimeout(function() {
				$that.closest(".lottery-box-wrapper").find(".lottery-round").addClass("rotated");
	
				localStorage.setItem("lotteryRotated", true);
	
				// $that.find(".text-init").hide();
				// $that.find(".text-sale-count").show(200);
	
				$(".success-part").fadeIn();
				$(".lottery-box-wrapper").fadeOut();
				$(".result-popup-wrap").addClass("active");
				start_timer()
	
				$([document.documentElement, document.body]).animate({
					scrollTop: $(".success-part").offset().top
				}, 1200);
			}, 5000);
		});
	
		$(".result-popup-wrap").click(function () {
			$(this).fadeOut(500);
		})

		var time = 900;
		var intr;


		function start_timer() {
			intr = setInterval(tick, 1000);
		}

		function tick() {
		if (localStorage.vietnam43) {
			if (localStorage.vietnam43 <= 0) {
			time = 59;
			} else {
			time = localStorage.vietnam43;
			}

		} else {
			time = 900;
		}
		time = time - 1;
		localStorage.vietnam43 = time;

		var mins = Math.floor(time / 60);
		var secs = time - mins * 60;
		if (mins == 0 && secs == 0) {
			clearInterval(intr);
		}

		$(".form--timer").html(pad(mins) + ":" + pad(secs));

		localStorage.vietnam43 = time;
		}

		function pad(num) {
		return ("0" + num).substr(-2);
		}

	}
}

$(document).ready(function() {
	landingFunctions.init();
});

