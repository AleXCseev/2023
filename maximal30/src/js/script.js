var landingFunctions = {
	init: function() {
		this.initLibraris()
		this.time()
		this.review()
	}, 

	initLibraris: function() {
		$('[href*="#"]').on('click', function (e) {
			var fixedOffset = 20;
			var cardHeight = $("#card").outerHeight(false)
			var windowHeight = $(window).height()

			$('html, body')
				.stop()
				.animate({ scrollTop: $(this.hash).offset().top + fixedOffset + (cardHeight - windowHeight)}, 1000);
				// .animate({ scrollTop: $(this.hash).offset().top + fixedOffset}, 1000);
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
	}
}

$(document).ready(function() {
	landingFunctions.init();
});

