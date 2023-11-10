$(document).ready(function(){

    /* scroll */
    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    /* timer */
    function update() {
        var Now = new Date(), Finish = new Date();
        Finish.setHours( 23);
        Finish.setMinutes( 59);
        Finish.setSeconds( 59);
        if( Now.getHours() === 23  &&  Now.getMinutes() === 59  &&  Now.getSeconds === 59) {
            Finish.setDate( Finish.getDate() + 1);
        }
        var sec = Math.floor( ( Finish.getTime() - Now.getTime()) / 1000);
        var hrs = Math.floor( sec / 3600);
        sec -= hrs * 3600;
        var min = Math.floor( sec / 60);
        sec -= min * 60;
        $(".timer .hours").text( pad(hrs));
        $(".timer .minutes").text( pad(min));
        $(".timer .seconds").text( pad(sec));
        setTimeout( update, 200);
    }
    function pad(s) { return ('00'+s).substr(-2) }
    update();


});

var swiper = new Swiper('.swiper-1', {
  pagination: {
    el: '.swiper-pagination',
    clickable: 'true',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  lazyLoading: true,
});

let lastScrollTop = 0;
document.addEventListener('scroll', function(e) {
    const st = window.scrollY;
    if(st > 160) {
        if (st > lastScrollTop) {
            document.querySelector('header').classList.remove('active');
        } else {
            document.querySelector('header').classList.add('active');
        }
        lastScrollTop = st;
    }
})


const menuItems = document.querySelectorAll('#menu a');

hamburger.addEventListener('click', function(e) {
    e.preventDefault();
    const _this = e.currentTarget;

    if(menu.classList.contains('show-menu')) {
        menu.classList.remove('show-menu');
    } else {
        menu.classList.add('show-menu');
    }
});


menuItems.forEach(function(item, idx) {
    item.addEventListener('click', function(e) {
        menu.classList.remove('show-menu');
    })
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