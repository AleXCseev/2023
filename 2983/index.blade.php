<!DOCTYPE html>
<html lang="ru">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover" name="viewport">
        <link rel="stylesheet" href="{{ $path }}/css/style.css">
        <title>Galaxy S22 Ultra</title>
        {{ $insert_head }}
    </head>
    <body>
        {{ $insert_body_top }}
        <div class="overflow">
            <img class="background" src="{{ $path }}/img/background.jpg" alt="">
            <div class="main">
                <div class="container main__container">
                    <span class="main__hello">Selamat!</span>
                    <div class="main__title">Menangkan diskon 70% untuk perangkat apa pun! Aturan: Kumpulkan tiga diskon yang sama</div>
                    <div class="main-phone">
                        <img class="main-phone__black" src="{{ $path }}/img/black.png" alt=""><img class="main-phone__red" src="{{ $path }}/img/red.png" alt=""><img class="main-phone__gold" src="{{ $path }}/img/gold.png" alt="">
                    </div>
                    <!-- /.main-phone -->
                    <span class="timer main__timer">Promosi berakhir pada: <span class="timer timer--font-weight"><span class="hours">00</span>:<span class="minutes">00</span>:<span class="seconds">00</span>:<span class="miliseconds">000</span></span></span>
                    <div class="main-count">
                        <span class="main-count__text" data-countclick="3">Anda dapat mencoba sebanyak <span class="main-count__text main-count__text--font-weight">3 kali</span></span>
                        <span class="main-count__text" data-countclick="3">Klik Luncurkan</span>
                        <span class="main-count__text display-none" data-countclick="2">Sayang Anda belum beruntung</span>
                        <span class="main-count__text display-none" data-countclick="2">Anda memiliki <span class="main-count__text main-count__text--font-weight" data-countclick="2">(2) percobaan lagi</span></span>
                        <span class="main-count__text display-none" data-countclick="1">Sayang Anda belum beruntung</span>
                        <span class="main-count__text display-none" data-countclick="1">Anda masih memiliki <span class="main-count__text main-count__text--font-weight" data-countclick="1">(1) kesempatan mencoba</span></span>
                        <span class="main-count__text display-none" data-countclick="0">Selamat!</span>
                        <span class="main-count__text main-count__text--font-size display-none" data-countclick="0">Anda telah memenangkan diskon <span class="main-count__text main-count__text--bold" data-countclick="0">70%</span> untuk <span class="main-count__text main-count__text--bold" data-countclick="0">Samsung S22 Ultra!</span></span>
                    </div>
                    <!-- /.main-count -->

                    <div class="main-fortune">
                        <div class="main-fortune__gradient"></div>
                        <div class="main-fortune__line-1"></div>
                        <div class="main-fortune__line-2"></div>
                        <img class="main-fortune__background" src="{{ $path }}/img/main/fortune.png" alt=""><img class="main-fortune__line" src="{{ $path }}/img/main/line.png" alt="">
                        <div class="main-fortune__wrapper-1">
                            <span class="main-fortune__percent main-fortune__percent--next-next" data-active="false">30%</span>
                            <span class="main-fortune__percent main-fortune__percent--next" data-active="true">70%</span>
                            <span class="main-fortune__percent main-fortune__percent--active" data-active="false">50%</span>
                            <span class="main-fortune__percent main-fortune__percent--prev" data-active="false">30%</span>
                            <span class="main-fortune__percent main-fortune__percent--prev-prev" data-active="false">40%</span>
                        </div>
                        <!-- /.main-fortune__wrapper-1 -->
                        <div class="main-fortune__wrapper-2">
                            <span class="main-fortune__percent main-fortune__percent--next-next" data-active="false">40%</span>
                            <span class="main-fortune__percent main-fortune__percent--next" data-active="false">50%</span>
                            <span class="main-fortune__percent main-fortune__percent--active" data-active="false">30%</span>
                            <span class="main-fortune__percent main-fortune__percent--prev" data-active="false">50%</span>
                            <span class="main-fortune__percent main-fortune__percent--prev-prev" data-active="true">70%</span>
                        </div>
                        <!-- /.main-fortune__wrapper-2 -->
                        <div class="main-fortune__wrapper-3">
                            <span class="main-fortune__percent main-fortune__percent--next-next" data-active="false">50%</span>
                            <span class="main-fortune__percent main-fortune__percent--next" data-active="false">30%</span>
                            <span class="main-fortune__percent main-fortune__percent--active" data-active="true">70%</span>
                            <span class="main-fortune__percent main-fortune__percent--prev" data-active="false">50%</span>
                            <span class="main-fortune__percent main-fortune__percent--prev-prev" data-active="false">40%</span>
                        </div>
                        <!-- /.main-fortune__wrapper-3 -->
                    </div>
                    <!-- /.main-fortune -->
                    <button class="main__button">Luncurkan</button>
                </div>
                <!-- /.container main__container -->
            </div>
            <!-- /.main -->
            <div class="win display-none">
                <div class="container win__container">
                    <span class="win-percent win-percent--1">-70%</span>
                    <span class="win-percent win-percent--2">-70%</span>
                    <span class="win-percent win-percent--3">-70%</span>
                    <span class="win-percent win-percent--4">-70%</span>
                    <span class="win-percent win-percent--5">-70%</span>
                    <span class="win-percent win-percent--6">-70%</span>
                    <span class="win-percent win-percent--7">-70%</span>
                    <span class="win-percent win-percent--8">-70%</span>
                    <span class="win-percent win-percent--9">-70%</span>
                    <span class="win-percent win-percent--10">-70%</span>
                    <span class="win__hello">Selamat!</span>
                    <h2 class="win__title">Anda telah memenangkan diskon <span class="win__title font-weight-bold">70%  untuk</span><span class="win__title font-weight-bold">Samsung S22 Ultra!</span></h2>
                    <div class="win-phone">
                        <img class="win-phone__black" src="{{ $path }}/img/black.png" alt=""><img class="win-phone__red" src="{{ $path }}/img/red.png" alt=""><img class="win-phone__gold" src="{{ $path }}/img/gold.png" alt="">
                    </div>
                    <!-- /.win-phone -->
                    <h3 class="win__text">Klik aktifkan diskon</h3>
                    <a class="win__button" href="{{ $link }}">Aktifkan Diskon</a>
                </div>
                <!-- /.container win__container -->
            </div>
            <!-- /.win -->
        </div>
        <!-- /.overflow -->
        <script src="{{ $assets }}/js/libs/jquery.min.js"></script>
        <script src="{{ $assets }}/js/libs/jquery.validate.min.js"></script>
        <script src="{{ $assets }}/js/libs/validate-script.js"></script>
        <script defer src="{{ $path }}/js/main.js"></script>
        {!! $metrics !!} {{ $insert_body_bottom }}
    </body>
</html>