$(document).ready(function() {
    $(".slider").owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        dotsEach: false,
        items: 2,
        center: true,
        margin: 20,
        autoHeight: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
    });

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
            var s = String(60 - d.getSeconds()).padStart(2, "0");
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
})

