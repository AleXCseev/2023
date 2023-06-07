$(document).ready(function () {
  $(".js-actual-date").each(function (index, item) {
    $(item).html(endDifDate($(item).data("days")));
  });

  $(".js-current-year").html(new Date().getFullYear());

  quantityProduct(maxProdInit, 1,1, 90000);

  $(".promo-mini").sticky({
    topSpacing: 70
  });

  $(".head-fixed").sticky({
    topSpacing: 0
  });
});

$('[href*="#"]').on('click', function (e) {
  var fixedOffset = 0;
  var cardHeight = $("#order").outerHeight(false)
  var windowHeight = $(window).height()

  $('html, body')
    .stop()
    .animate({ scrollTop: $(this.hash).offset().top + fixedOffset + (cardHeight - windowHeight)}, 1000);
    // .animate({ scrollTop: $(this.hash).offset().top + fixedOffset}, 1000);
  e.preventDefault();
})

function endDifDate(countDays) {
  if (countDays || countDays === 0) {

    countDays = parseInt(countDays);

    const date = new Date(Date.now() - (86400000 * countDays));
    return pad(date.getDate()) + "." + pad(date.getMonth() + 1) + "." + date.getFullYear();
  }
}

function pad(num) {
  return ("0" + num).substr(-2);
}

function quantityProduct (max, min, diff, delayMs) {

  if (localStorage.getItem("count-prod")) {
    max = localStorage.getItem("count-prod");
  } else {
    localStorage.setItem("count-prod", max);
  }

  $(".js-quantity-product").text(max);

  setInterval(function() {
    max = localStorage.getItem("count-prod");

    if (max > min) {
      localStorage.setItem("count-prod", (max - diff));
      max = localStorage.getItem("count-prod");
      $(".js-quantity-product").html(max)
    }
    // else {
    //     localStorage.setItem("count-prod", maxProdInit);
    //     max = localStorage.getItem("count-prod");
    //
    //     $(".js-quantity-product").html(max);
    // }

  }, delayMs)
}

var maxProdInit = 19;



function printDate(e) {
  var t = new Date();
  t.setDate(t.getDate() + e + 1);
  var a = "";
  t.getDate() < 10 && (a = "0"), (a += t.getDate());
  var n = "";
  return (
    t.getMonth() + 1 < 10 && (n = "0"),
    a + "." + (n += t.getMonth() + 1) + "." + t.getFullYear()
  );
}

var dateEls = document.querySelectorAll(".date");
for (const e of dateEls) {
  var dateAdjust = e.dataset.adjust;
  e.innerHTML = printDate(-1 * dateAdjust);
}



let prodLeft = [
  2, 3, 4, 6, 7, 8, 9, 9, 11, 11, 12, 14, 14, 15, 15, 16, 16, 16, 17, 17, 18,
  18,
];
function start_counting_timer(limitedSeconds) {
  let timeLeft = limitedSeconds;
  let secondsLeft, minutesLeft;
  let count = setInterval(function () {
    if (timeLeft <= 0) {
      clearTimeout(count);
    } else {
      timeLeft--;
      let min = parseInt(timeLeft / 60);
      minutesLeft = min.toString();
      if (minutesLeft.length === 1) {
        minutesLeft = "0" + minutesLeft;
      }
      let sec = timeLeft % 60;
      secondsLeft = sec.toString();
      if (secondsLeft.length === 1) {
        secondsLeft = "0" + secondsLeft;
      }
      if (sec === 0) {
        document.querySelector(".clockdiv").innerHTML = prodLeft[min];
      }
    }
  }, 1000);
}
document.addEventListener("DOMContentLoaded", function () {
  let tstamp = window.localStorage.getItem("tstamp-l2xyg239");
  let limitedSeconds = 1278;
  let prodElement = document.querySelector(".timelimit");

  if (tstamp !== null) {
    let now = Math.round(new Date().getTime() / 1000);
    let then = tstamp;
    limitedSeconds = limitedSeconds - (now - then);
    let prod = Math.floor(limitedSeconds / 60);
    if (prod < 0) prod = 0;
    // prodElement.innerHTML = prod;
  } else {
    tstamp = Math.round(new Date().getTime() / 1000);
    window.localStorage.setItem("tstamp-l2xyg239", tstamp);
    prodElement.innerHTML = 19;
  }

  start_counting_timer(limitedSeconds);
});