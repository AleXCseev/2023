$(document).ready(function() {
  

    $('[href*="#"]').on('click', function (e) {
        var fixedOffset = 60;
        var cardHeight = $("#order").outerHeight(false)
        var windowHeight = $(window).height()

        $('html, body')
            .stop()
            .animate({ scrollTop: $(this.hash).offset().top + fixedOffset + (cardHeight - windowHeight)}, 1000);
            // .animate({ scrollTop: $(this.hash).offset().top + fixedOffset}, 1000);
        e.preventDefault();
    })

    $(".toggle").click(function() {
        $(this).find(".toggle__text").toggleClass("active");
    })

    
})