$(document).ready((function(){$('a[href^="#"]').click((function(){var e=$(this).attr("href"),t=$(e).offset().top;return jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop:t},800),!1})),$(".reviews").slick({dots:!0,infinite:!0,speed:500,fade:!1,cssEase:"linear"})}));