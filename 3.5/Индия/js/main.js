jQuery(document).ready(function () {
    jQuery('a[href^="#"]').click(function () {
        var elementClick = jQuery(this).attr("href");
        var destination = jQuery(elementClick).offset().top;
        jQuery("html:not(:animated), body:not(:animated)").animate({ scrollTop: destination }, 800);
        return false;
    })
    jQuery('.reviews').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: false,
        cssEase: 'linear',
        adaptiveHeight: true
    });

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
            mm++
        }
        if (+dd < 0) {
            dd = String(currentDaysInMonth + +dd).padStart(2, '0');
        }
        return dd + "." + mm + "." + yyyy
    }

    $(".date__1").text(getDate(-5));
    $(".date__2").text(getDate(2));

});

let buttonSubmit = document.querySelector('.button-submit');
let textInput = document.querySelector('input[name="name"]');
let phoneInput = document.querySelector('input[name="phone"]');
const form = document.querySelector('form');
var count = 0;    // set initial count to 0

phoneInput.addEventListener('change', (event) => {
    console.log('change')
    console.log(event.target.value)
})

form.addEventListener('sumbit', (event) => {
    if (!textInput.length || phoneInput.value.length !== 10) {
        event.preventDefault();
    }
})