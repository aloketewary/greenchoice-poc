<template>
<div>
     <section class="c-jumbotron-basic c-jumbotron-basic--with-tariff">
            <div class="c-jumbotron-basic__background" style="background-color: #D3EEFB;">
                <div class="row">
                    <h1 class="c-jumbotron-basic__title">
                        <span class="c-jumbotron-basic__title-line">
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">Make the </font>
                            </font>
                        </span>
                        <span class="c-jumbotron-basic__title-line">
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">earth </font>
                            </font>
                   </span>
                        <span class="c-jumbotron-basic__title-line">
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">greener</font>
                            </font>
                        </span>
                    </h1>
                    <figure class="c-jumbotron-basic__image">
                        <img src="https://www.greenchoice.nl/media/3097/webpnet-resizeimage-1.png" alt="">
                    </figure>
                </div>
            </div>

            <div class="landing-text">
                <div class="row" style="height: 658px;">




                    <div class="popup-landing">
                        <h2>
                            <span>
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">Also switch to green energy from Greenchoice</font>
                                </font>
                                <span>
                                    <br>
                                </span>
                            </span>
                        </h2>
                        <ul class="list-tick">
                            <li>
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">Elected as the most customer-friendly energy supplier</font>
                                </font>
                            </li>
                            <li>
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">Organize things yourself and save smartly in the app</font>
                                </font>
                            </li>
                            <li>
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">Always competitive rates for energy from around the corner</font>
                                </font>
                            </li>
                        </ul>
                        <div class="small-button line-top">

                            <h3>
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">How many people live in the house?</font>
                                </font>
                            </h3>

                            <ul class="checked-default">
                                <li class="">
                                    <label class="icon-people-1">
                                        <input value="1" type="radio" name="product_people" style="opacity: 0;">
                                        <font style="vertical-align: inherit;">
                                            <font style="vertical-align: inherit;">1</font>
                                        </font>
                                    </label>
                                </li>
                                <li class="">
                                    <label class="icon-people-2">
                                        <input value="2" type="radio" name="product_people" style="opacity: 0;">
                                        <font style="vertical-align: inherit;">
                                            <font style="vertical-align: inherit;">2</font>
                                        </font>
                                    </label>
                                </li>
                                <li class="">
                                    <label class="icon-people-3">
                                        <input value="3" type="radio" name="product_people" style="opacity: 0;">
                                        <font style="vertical-align: inherit;">
                                            <font style="vertical-align: inherit;">3</font>
                                        </font>
                                    </label>
                                </li>
                                <li class="">
                                    <label class="icon-people-4">
                                        <input value="4" type="radio" name="product_people" style="opacity: 0;">
                                        <font style="vertical-align: inherit;">
                                            <font style="vertical-align: inherit;">4</font>
                                        </font>
                                    </label>
                                </li>
                                <li class="active">
                                    <label class="icon-people-5">
                                        <input value="5" type="radio" name="product_people" style="opacity: 0;">
                                        <font style="vertical-align: inherit;">
                                            <font style="vertical-align: inherit;">5+</font>
                                        </font>
                                    </label>
                                </li>
                            </ul>
                            <p class="">
                                <a class="btn-default arrow" href="https://www.greenchoice.nl/tarieven/">
                                    <span>
                                        <font style="vertical-align: inherit;">
                                            <font style="vertical-align: inherit;">Calculate your green energy tariff</font>
                                        </font>
                                    </span>
                                </a>
                            </p>
                        </div>
                        <img class="popup-landing__arrow" src="https://www.greenchoice.nl/images/wide-arrow.svg">
                    </div>
                    <div class="read-landing read-landing--review">
                        <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">
                                Our customers rate us with a 8.4!
                            </font>
                        </font>
                        <span class="c-rating u-inline">
                            <span class="c-rating__stars">
                                <i class="c-rating__star"></i>
                                <i class="c-rating__star"></i>
                                <i class="c-rating__star"></i>
                                <i class="c-rating__star"></i>
                                <i class="c-rating__star"></i>
                                <span class="c-rating__result" style="width: 84%">
                                    <i class="c-rating__star"></i>
                                    <i class="c-rating__star"></i>
                                    <i class="c-rating__star"></i>
                                    <i class="c-rating__star"></i>
                                    <i class="c-rating__star"></i>
                                </span>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </section>


        <section class="c-section wrapper-default ">

            <div class="row">
                <header class="blink-three-header">
                    <h2>
                        <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">Easy to arrange yourself</font>
                        </font>
                    </h2>
                </header>
            </div>
            <div class="row">
                <ul class="block-blink-three up" id="meter">

                    <li class="eq-height" style="height: 70px;">
                        <a href="https://dossier.greenchoice.nl/Mijn-Dossier/Meterstanden-selectie.aspx">
                            <figure>
                                <!-- <img src="https://www.greenchoice.nl/media/2932/meterstanden-doorgeven.png" alt="Pass meter readings" width="102" height="64"
                                    title="Meter readings smart meter"> -->
                                    <meter-reading :meter="meterdata"></meter-reading>
                                        <!-- </div> <vue-odometer :obj="get_odometer_obj"
                                    animation="smooth"></vue-odometer> -->
                            </figure>

                            <p class="more">
                                <span>
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">Pass meter readings</font>
                                    </font>
                                </span>
                            </p>
                        </a>
                    </li>



                    <li class="eq-height" style="height: 71px;">
                        <a href="https://dossier.greenchoice.nl/Mijn-Dossier/Mijn-voorschotbedrag.aspx">
                            <figure>
                                    <span class="c-rating__count" style="font-size: 48px;">
                                            <font style="vertical-align: inherit;">
                                                    <time-now :currenttime="datenow"></time-now>
                                            </font>
                                        </span>
                                   
                            </figure>

                            <p class="more">
                                <span>
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">Adjust the installment amount</font>
                                    </font>
                                </span>
                            </p>
                        </a>
                    </li>



                    <li class="eq-height" style="height: 71px;">
                        <a href="javascript:void(0)">
                            <figure>
                                <img src="https://www.greenchoice.nl/media/2934/wijzigingen-doorgeven.png" alt="Report changes" width="62" height="64" title="Pencil green energy">
                            </figure>

                            <p class="more" v-on:click="reset">
                                <span>
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">Reset Meter Count</font>
                                    </font>
                                </span>
                            </p>
                        </a>
                    </li>
                </ul>
            </div>

        </section>

        <section class="c-section">
            <div class="row">
                <div class="block-intro">
                    <h2>
                        <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">Our customers give us a 8.4</font>
                        </font>
                    </h2>
                    <p class="u-margin-bottom-huge">
                        <span class="c-rating  c-rating--large">
                            <span class="c-rating__stars">
                                <i class="c-rating__star"></i>
                                <i class="c-rating__star"></i>
                                <i class="c-rating__star"></i>
                                <i class="c-rating__star"></i>
                                <i class="c-rating__star"></i>
                                <span class="c-rating__result" style="width: 84%">
                                    <i class="c-rating__star  c-rating__star--light-green"></i>
                                    <i class="c-rating__star  c-rating__star--light-green"></i>
                                    <i class="c-rating__star  c-rating__star--light-green"></i>
                                    <i class="c-rating__star  c-rating__star--light-green"></i>
                                    <i class="c-rating__star  c-rating__star--light-green"></i>
                                </span>
                            </span>
                            <span class="c-rating__count">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">8.4 / 10 </font>
                                </font>
                            </span>
                            <a class="c-rating__link" href="https://www.feedbackcompany.com/nl-nl/reviews/greenchoice/" target="_blank">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">570 ratings </font>
                                </font>
                            </a>
                            <span class="c-rating__text">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">Verified from the</font>
                                </font>
                            </span>
                            <img class="u-padding-left-tiny@phablet" src="https://www.greenchoice.nl/images/business/partnerlogos/feedback-company.png"
                                alt="Logo Feedback Company" height="32" width="109">
                        </span>
                    </p>
                </div>
            </div>
            <div class="row">

                <article class="c-review col-50">
                    <figure class="c-review__icon">
                        <i class="fontello-icons  icon-thumbs-up"></i>
                    </figure>
                    <div class="c-review__text">
                        <h4 class="c-review__title">
                            <span class="c-review__title-name">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">Ye Wai</font>
                                </font>
                            </span>
                            <span class="u-inline-block">
                                <span class="c-rating  c-rating--simple  c-review__rating">
                                    <span class="c-rating__stars">
                                        <i class="c-rating__star"></i>
                                        <i class="c-rating__star"></i>
                                        <i class="c-rating__star"></i>
                                        <i class="c-rating__star"></i>
                                        <i class="c-rating__star"></i>
                                        <span class="c-rating__result" style="width: 100%">
                                            <i class="c-rating__star"></i>
                                            <i class="c-rating__star"></i>
                                            <i class="c-rating__star"></i>
                                            <i class="c-rating__star"></i>
                                            <i class="c-rating__star"></i>
                                        </span>
                                    </span>
                                </span>
                                <span class="c-review__rating-count">
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">5/5</font>
                                    </font>
                                </span>
                            </span>
                        </h4>
                        <p>
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">Everything is good.</font>
                            </font>
                        </p>
                        <p class="c-review__date">
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">07-06-2018 08:27:50</font>
                            </font>
                        </p>
                    </div>
                </article>
                <article class="c-review col-50">
                    <figure class="c-review__icon">
                        <i class="fontello-icons  icon-thumbs-up"></i>
                    </figure>
                    <div class="c-review__text">
                        <h4 class="c-review__title">
                            <span class="c-review__title-name">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">Camiel.rosbergen@gmail.com</font>
                                </font>
                            </span>
                            <span class="u-inline-block">
                                <span class="c-rating  c-rating--simple  c-review__rating">
                                    <span class="c-rating__stars">
                                        <i class="c-rating__star"></i>
                                        <i class="c-rating__star"></i>
                                        <i class="c-rating__star"></i>
                                        <i class="c-rating__star"></i>
                                        <i class="c-rating__star"></i>
                                        <span class="c-rating__result" style="width: 100%">
                                            <i class="c-rating__star"></i>
                                            <i class="c-rating__star"></i>
                                            <i class="c-rating__star"></i>
                                            <i class="c-rating__star"></i>
                                            <i class="c-rating__star"></i>
                                        </span>
                                    </span>
                                </span>
                                <span class="c-review__rating-count">
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">5/5</font>
                                    </font>
                                </span>
                            </span>
                        </h4>
                        <p>
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">Good app, excellent service, innovative initiatives &amp; developments.</font>
                            </font>
                        </p>
                        <p class="c-review__date">
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">06-06-2018 21:48:44</font>
                            </font>
                        </p>
                    </div>
                </article>
            </div>
        </section>
        <section class="c-section wrapper-default wrapper-green " id="AK">

            <div class="row">
                <div class="block-intro home">
                    <h2>
                        <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">Sustainably close</font>
                        </font>
                    </h2>
                    <p>
                        <span>
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">Green choices, we make them every day. </font>
                                <font style="vertical-align: inherit;">Because green is good. </font>
                                <font style="vertical-align: inherit;">And really green energy already. </font>
                                <font style="vertical-align: inherit;">Sustainably close to generated from sun, wind, water and biomass. </font>
                                <font style="vertical-align: inherit;">Together with our customers we work on a cleaner world with 100% green energy.</font>
                            </font>
                        </span>
                    </p>
                    <p class="more">
                        <a class="" href="https://www.greenchoice.nl/groene-energie/">
                            <span>
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">More about real green energy</font>
                                </font>
                            </span>
                        </a>
                    </p>
                </div>
            </div>

            <div class="row wide">
                <div class="block-slide-list slide-list-2">

                    <div class="slide-list-viewport" style="overflow: hidden; position: relative;">
                        <ul style="width: 1200%; transition-duration: 0s; transform: translate3d(0px, 0px, 0px);">


                            <li class="col-50" style="width: 321.5px; float: left; display: block;">
                                <article class="block-slide">
                                    <figure style="height: 181px;">
                                        <img src="https://www.greenchoice.nl/media/3322/duurzaam-dichtbij.jpg" alt="" width="500" height="312" draggable="false">
                                    </figure>
                                    <div class="text">
                                        <h3>
                                            <font style="vertical-align: inherit;">
                                                <font style="vertical-align: inherit;">
                                                    Generate for everyone </font>
                                            </font>
                                            <span></span>
                                        </h3>
                                        <p>
                                            <font style="vertical-align: inherit;">
                                                <font style="vertical-align: inherit;">Even less than 600 days. </font>
                                                <font style="vertical-align: inherit;">That is the time that the Netherlands still has to achieve its climate goal.
                                                </font>
                                                <font style="vertical-align: inherit;">In fact, in 2020, 14% of our total energy consumption must be generated sustainably.
                                                </font>
                                                <font style="vertical-align: inherit;">Unfortunately, we are still far behind this greening.&nbsp;</font>
                                            </font>
                                        </p>
                                        <p class="more">
                                            <a class="" href="https://www.greenchoice.nl/wekop">
                                                <span>
                                                    <font style="vertical-align: inherit;">
                                                        <font style="vertical-align: inherit;">Awaken</font>
                                                    </font>
                                                </span>
                                            </a>
                                        </p>
                                    </div>
                                </article>

                            </li>

                            <li class="col-50" style="width: 321.5px; float: left; display: block;">
                                <article class="block-slide">
                                    <figure style="height: 181px;">
                                        <img src="https://www.greenchoice.nl/media/3194/icoon_wereldbol_resized.jpg" alt="Globe with trees and energy sources" width="500"
                                            height="312" title="Globe trees energy sources" draggable="false">
                                    </figure>
                                    <div class="text">
                                        <h3>
                                            <font style="vertical-align: inherit;">
                                                <font style="vertical-align: inherit;">
                                                    Energy close by: choose your own source </font>
                                            </font>
                                            <span></span>
                                        </h3>
                                        <p>
                                            <span>
                                                <font style="vertical-align: inherit;">
                                                    <font style="vertical-align: inherit;">Greenchoice only supplies truly green electricity generated from natural
                                                        sources. </font>
                                                    <font style="vertical-align: inherit;">Greenchoice works together with energy producers throughout the Netherlands.
                                                    </font>
                                                    <font style="vertical-align: inherit;">View the sources in your area!</font>
                                                </font>
                                            </span>
                                        </p>
                                        <p class="more">
                                            <a class="" href="https://www.greenchoice.nl/groene-energie/energiebron-kiezen/">
                                                <span>
                                                    <font style="vertical-align: inherit;">
                                                        <font style="vertical-align: inherit;">Choose your source</font>
                                                    </font>
                                                </span>
                                            </a>
                                        </p>
                                    </div>
                                </article>

                            </li>

                            <li class="col-50" style="width: 321.5px; float: left; display: block;">
                                <article class="block-slide">
                                    <figure style="height: 181px;">
                                        <img src="https://www.greenchoice.nl/media/3090/emissierechten.png" alt="Trade in CO2" width="500" height="312" title="Emission rights "
                                            draggable="false">
                                    </figure>
                                    <div class="text">
                                        <h3>
                                            <font style="vertical-align: inherit;">
                                                <font style="vertical-align: inherit;">
                                                    Engage in trading in CO2 </font>
                                            </font>
                                            <span></span>
                                        </h3>
                                        <p>
                                            <span>
                                                <font style="vertical-align: inherit;">
                                                    <font style="vertical-align: inherit;">Get yourself a ton of CO2 from the market! </font>
                                                    <font style="vertical-align: inherit;">Together with environmental organization WISE we keep a close eye on
                                                        politics and ask for attention to the tightening of the emission
                                                        trading system.</font>
                                                </font>
                                            </span>
                                        </p>
                                        <p class="more">
                                            <a class="" href="https://www.greenchoice.nl/stoken/">
                                                <span>
                                                    <font style="vertical-align: inherit;">
                                                        <font style="vertical-align: inherit;">Stoke with it</font>
                                                    </font>
                                                </span>
                                            </a>
                                        </p>
                                    </div>
                                </article>

                            </li>

                            <li class="col-50" style="width: 321.5px; float: left; display: block;">
                                <article class="block-slide">
                                    <figure style="height: 181px;">
                                        <img src="https://www.greenchoice.nl/media/3065/bosprojecten_480x300-min.jpg" alt="Forest projects Africa " width="500" height="312"
                                            title="Green energy Africa" draggable="false">
                                    </figure>
                                    <div class="text">
                                        <h3>
                                            <font style="vertical-align: inherit;">
                                                <font style="vertical-align: inherit;">
                                                    Our global forest projects </font>
                                            </font>
                                            <span></span>
                                        </h3>
                                        <p>
                                            <font style="vertical-align: inherit;">
                                                <font style="vertical-align: inherit;">As the only major supplier, we compensate all your gas consumption through
                                                    forest planting and protection. </font>
                                                <font style="vertical-align: inherit;">That is important for climate, flora and fauna and people's well-being.</font>
                                            </font>
                                        </p>
                                        <p class="more">
                                            <a class="" href="https://www.greenchoice.nl/bosprojecten/">
                                                <span>
                                                    <font style="vertical-align: inherit;">
                                                        <font style="vertical-align: inherit;">View our forest projects here</font>
                                                    </font>
                                                </span>
                                            </a>
                                        </p>
                                    </div>
                                </article>

                            </li>

                            <li class="col-50" style="width: 321.5px; float: left; display: block;">
                                <article class="block-slide">
                                    <figure style="height: 181px;">
                                        <img src="https://www.greenchoice.nl/media/3062/detail_home_bokslive_480x300-min.jpg" alt="Energy consuming washing machine"
                                            width="500" height="312" title="Washing machine smart meter" draggable="false">
                                    </figure>
                                    <div class="text">
                                        <h3>
                                            <font style="vertical-align: inherit;">
                                                <font style="vertical-align: inherit;">
                                                    Choose BOKS Live </font>
                                                <span>
                                                    <font style="vertical-align: inherit;">Grab your energy</font>
                                                </span>
                                                <font style="vertical-align: inherit;"> drinkers </font>
                                            </font>
                                            <span>
                                                <font style="vertical-align: inherit;">
                                                    <font style="vertical-align: inherit;">and save through live insight into your energy consumption!</font>
                                                </font>
                                            </span>
                                        </h3>

                                        <p class="more">
                                            <a class="" href="https://www.greenchoice.nl/boks/">
                                                <span>
                                                    <font style="vertical-align: inherit;">
                                                        <font style="vertical-align: inherit;">More information about BOKS Live</font>
                                                    </font>
                                                </span>
                                            </a>
                                        </p>
                                    </div>
                                </article>

                            </li>

                            <li class="col-50" style="width: 321.5px; float: left; display: block;">
                                <article class="block-slide">
                                    <figure style="height: 181px;">
                                        <img src="https://www.greenchoice.nl/media/3064/caroussel_home_hubirene480x300-min.jpg" alt="Hub and Irene Littmann" width="500"
                                            height="312" title="Sustainable energy man woman " draggable="false">
                                    </figure>
                                    <div class="text">
                                        <h3>
                                            <font style="vertical-align: inherit;">
                                                <font style="vertical-align: inherit;">
                                                    Hub and Irene Littmann </font>
                                            </font>
                                            <span>
                                                <font style="vertical-align: inherit;">
                                                    <font style="vertical-align: inherit;">At Greenchoice since 2005</font>
                                                </font>
                                            </span>
                                        </h3>
                                        <p>
                                            <span>
                                                <font style="vertical-align: inherit;">
                                                    <font style="vertical-align: inherit;">'We make sustainable choices wherever possible. </font>
                                                    <font style="vertical-align: inherit;">Even though these are often small things. </font>
                                                    <font style="vertical-align: inherit;">We want to give something back to nature. </font>
                                                    <font style="vertical-align: inherit;">And we are now looking for the best way to generate collective energy
                                                        '
                                                    </font>
                                                </font>
                                            </span>
                                        </p>

                                    </div>
                                </article>

                            </li>
                        </ul>
                    </div>
                    <ul class="slide-list-nav">
                        <li>
                            <a class="slide-list-prev" href="#">
                                <span>
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">Previous</font>
                                    </font>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a class="slide-list-next" href="#">
                                <span>
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">Next</font>
                                    </font>
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>


        </section>
        <section class="wrapper-default" id="">
            <div class="row ">
                <div class="block-intro home">



                    <h2>
                        <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">
                                Generate green energy yourself
                            </font>
                        </font>
                        <span></span>
                    </h2>
                    <p>
                        <span>
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">Tens of thousands of customers are already choosing to generate green electricity themselves.
                                </font>
                                <font style="vertical-align: inherit;">That is good for nature and makes a difference in your energy bill. </font>
                                <font style="vertical-align: inherit;">Generating yourself is simple. </font>
                                <font style="vertical-align: inherit;">And we are happy to help you.</font>
                            </font>
                        </span>
                    </p>
                    <p class="more">
                        <a class="" href="https://www.greenchoice.nl/zelf-opwekken/">
                            <span>
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">More about generating your own energy</font>
                                </font>
                            </span>
                        </a>
                    </p>


                </div>
            </div>
            <div class="row ">


                <article class="intro-col">
                    <figure>
                        <img src="https://www.greenchoice.nl/media/3326/content-img-01.png" alt="" width="121" height="121">
                    </figure>
                    <div class="text">
                        <h3>
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">Own solar energy</font>
                            </font>
                        </h3>
                        <p>
                            <span>
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">Take solar panels through Greenchoice and easily generate your own solar power.</font>
                                </font>
                            </span>
                        </p>
                        <p class="more">
                            <a class="" href="https://www.greenchoice.nl/zelf-opwekken/zon/">
                                <span>
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">More about your own solar energy</font>
                                    </font>
                                </span>
                            </a>
                        </p>
                    </div>
                </article>


                <article class="intro-col">
                    <figure>
                        <img src="https://www.greenchoice.nl/media/2930/eigen-windenergie.png" alt="Windmill " width="100" height="121" title="Windmill wind energy">
                    </figure>
                    <div class="text">
                        <h3>
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">Own wind energy</font>
                            </font>
                        </h3>
                        <p>
                            <span>
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">Part in the production of&nbsp; </font>
                                </font>
                            </span>
                            <span>
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">a windmill </font>
                                </font>
                            </span>
                            <span>
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">&nbsp;and experience what it is like to generate energy yourself.</font>
                                </font>
                            </span>
                        </p>
                        <p class="more">
                            <a class="" href="https://www.greenchoice.nl/zelf-opwekken/wind/">
                                <span>
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">More about your own wind energy</font>
                                    </font>
                                </span>
                            </a>
                        </p>
                    </div>
                </article>
            </div>
        </section>

        <section class="c-section wrapper-default section-product-selection " id="">


            <div class="row">
                <div class="block-intro home">
                    <h2>
                        <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">Also switch to Greenchoice</font>
                        </font>
                    </h2>
                    <p>
                        <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">Calculate your rate for green energy</font>
                        </font>
                    </p>
                </div>


                <div class="field-product-change">
                    <div class="item postcode">
                        <p>
                            <label class="icon-location" for="frm_product_postcode"></label>
                            <input class="postcode-input" name="frm_product_postcode" id="frm_product_postcode" type="text" value="1000AA" data-dummy-value="1000AA">
                        </p>
                    </div>
                    <div class="item people">
                        <p>
                            <label for="frm_product_users"></label>
                            <div class="btn-group bootstrap-select">
                                <button type="button" class="btn dropdown-toggle btn-default" data-toggle="dropdown" data-id="frm_product_users" title="2 residents"
                                    aria-expanded="false">
                                    <span class="filter-option pull-left">
                                        <i class="glyphicon icon-people-2"></i>
                                        <font style="vertical-align: inherit;">
                                            <font style="vertical-align: inherit;"> 2 residents</font>
                                        </font>
                                    </span>&nbsp;
                                    <span class="bs-caret">
                                        <span class="caret"></span>
                                    </span>
                                </button>
                                <div class="dropdown-menu open" style="max-height: 1222.47px; overflow: hidden; min-height: 100px;">
                                    <ul class="dropdown-menu inner" role="menu" style="max-height: 1214.47px; overflow-y: auto; min-height: 92px;">
                                        <li data-original-index="0">
                                            <a tabindex="0" class="" style="" data-tokens="null">
                                                <span class="glyphicon icon-people-1"></span>
                                                <span class="text">
                                                    <font style="vertical-align: inherit;">
                                                        <font style="vertical-align: inherit;">1 residents</font>
                                                    </font>
                                                </span>
                                                <span class="glyphicon glyphicon-ok check-mark"></span>
                                            </a>
                                        </li>
                                        <li data-original-index="1" class="selected">
                                            <a tabindex="0" class="" style="" data-tokens="null">
                                                <span class="glyphicon icon-people-2"></span>
                                                <span class="text">
                                                    <font style="vertical-align: inherit;">
                                                        <font style="vertical-align: inherit;">2 residents</font>
                                                    </font>
                                                </span>
                                                <span class="glyphicon glyphicon-ok check-mark"></span>
                                            </a>
                                        </li>
                                        <li data-original-index="2">
                                            <a tabindex="0" class="" style="" data-tokens="null">
                                                <span class="glyphicon icon-people-3"></span>
                                                <span class="text">
                                                    <font style="vertical-align: inherit;">
                                                        <font style="vertical-align: inherit;">3 residents</font>
                                                    </font>
                                                </span>
                                                <span class="glyphicon glyphicon-ok check-mark"></span>
                                            </a>
                                        </li>
                                        <li data-original-index="3">
                                            <a tabindex="0" class="" style="" data-tokens="null">
                                                <span class="glyphicon icon-people-4"></span>
                                                <span class="text">
                                                    <font style="vertical-align: inherit;">
                                                        <font style="vertical-align: inherit;">4 residents</font>
                                                    </font>
                                                </span>
                                                <span class="glyphicon glyphicon-ok check-mark"></span>
                                            </a>
                                        </li>
                                        <li data-original-index="4">
                                            <a tabindex="0" class="" style="" data-tokens="null">
                                                <span class="glyphicon icon-people-5"></span>
                                                <span class="text">
                                                    <font style="vertical-align: inherit;">
                                                        <font style="vertical-align: inherit;">5 residents</font>
                                                    </font>
                                                </span>
                                                <span class="glyphicon glyphicon-ok check-mark"></span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <select name="frm_product_users" id="frm_product_users" tabindex="-98">
                                    <option data-icon="icon-people-1" value="1">
                                        <font style="vertical-align: inherit;">
                                            <font style="vertical-align: inherit;">1 residents</font>
                                        </font>
                                    </option>
                                    <option data-icon="icon-people-2" value="2">
                                        <font style="vertical-align: inherit;">
                                            <font style="vertical-align: inherit;">2 residents</font>
                                        </font>
                                    </option>
                                    <option data-icon="icon-people-3" value="3">
                                        <font style="vertical-align: inherit;">
                                            <font style="vertical-align: inherit;">3 residents</font>
                                        </font>
                                    </option>
                                    <option data-icon="icon-people-4" value="4">
                                        <font style="vertical-align: inherit;">
                                            <font style="vertical-align: inherit;">4 residents</font>
                                        </font>
                                    </option>
                                    <option data-icon="icon-people-5" value="5">
                                        <font style="vertical-align: inherit;">
                                            <font style="vertical-align: inherit;">5 residents</font>
                                        </font>
                                    </option>
                                </select>
                            </div>
                        </p>
                        <p class="link link-double">
                            <a href="#" title="Double counter flow" metertype-toggle="" data-powertype-toggle="double">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">Double counter flow</font>
                                </font>
                            </a>
                        </p>
                        <p class="link link-single">
                            <a href="#" title="Only counter flow" metertype-toggle="" data-powertype-toggle="single">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">Only counter flow</font>
                                </font>
                            </a>
                        </p>
                    </div>
                    <div class="item energy single-energy">
                        <p>
                            <label class="icon-energy" for="frm_product_energy"></label>
                            <input usage-power="" class="power-usage-input" name="frm_product_energy" id="frm_product_energy" type="text">
                            <span class="measure">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">kWh</font>
                                </font>
                            </span>
                        </p>
                        <p class="link">
                            <a href="#" data-powertype-toggle="power" data-disabled="frm_product_energy" title="Flow">
                                <strong>
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">No</font>
                                    </font>
                                </strong>
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;"> power</font>
                                </font>
                            </a>
                        </p>
                        <p class="link-double-mobile">
                            <a href="#" title="Double counter" metertype-toggle="" data-powertype-toggle="double">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">Double counter</font>
                                </font>
                            </a>
                        </p>
                    </div>
                    <div class="double-energy">
                        <div class="item energy">
                            <p>
                                <label class="icon-energy" for="frm_product_energy_normaal"></label>
                                <input usage-power-high="" class="power-high-usage-input" name="frm_product_energy_normaal" id="frm_product_energy_normaal"
                                    type="text">
                                <span class="measure">
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">kWh</font>
                                    </font>
                                </span>
                            </p>
                            <p class="time">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">Normal</font>
                                </font>
                            </p>
                        </div>
                        <div class="item energy">
                            <p>
                                <label class="icon-energy" for="frm_product_energy_dal"></label>
                                <input usage-power-low="" class="power-low-usage-input" name="frm_product_energy_dal" id="frm_product_energy_dal" type="text">
                                <span class="measure">
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">kWh</font>
                                    </font>
                                </span>
                            </p>
                            <p class="time">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">
                                        Dal </font>
                                </font>
                                <span class="link-single">
                                    <a href="#" title="Only counter" metertype-toggle="" data-powertype-toggle="single">
                                        <font style="vertical-align: inherit;">
                                            <font style="vertical-align: inherit;">Only counters</font>
                                        </font>
                                    </a>
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class="item gas">
                        <p>
                            <label class="icon-gas" for="frm_product_gas"></label>
                            <input usage-gas="" name="frm_product_gas" id="frm_product_gas" type="text">
                            <span class="measure">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">m </font>
                                </font>
                                <sup>
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">3</font>
                                    </font>
                                </sup>
                            </span>
                        </p>
                        <p class="link">
                            <a href="#" data-powertype-toggle="gas" data-disabled="frm_product_gas" title="Gas">
                                <strong>
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">No</font>
                                    </font>
                                </strong>
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;"> gas</font>
                                </font>
                            </a>
                        </p>
                    </div>



                    <div class="item submit">
                        <p>
                            <button data-scroll-to="#product_list" type="submit">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">
                                        Calculate your rate
                                    </font>
                                </font>
                            </button>
                        </p>
                    </div>
                </div>
            </div>
            <div class="row">



                <article class="block-product-selection tall  gc-product-source  " data-sourcelinkid="15901">
                    <span class="best-choice">
                    </span>
                    <header style="height: auto;">
                        <h3 class="icon-wind">
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">
                                    Wind from the Netherlands WindVangers
                                </font>
                            </font>
                        </h3>
                        <p>
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">
                                    Get free WindVangers now
                                </font>
                            </font>
                        </p>
                    </header>


                    <p class="link-compare close">
                        <a href="#">
                            <span class="close">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">View product label</font>
                                </font>
                            </span>
                            <span class="open">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">Hide product label</font>
                                </font>
                            </span>
                        </a>
                    </p>
                    <div class="accord-compare hide">
                        <div>
                            <div>
                                <h4>
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">Green power</font>
                                    </font>
                                </h4>



                                <div class="chart-figure" data-graph="NL Wind, 100, #7AC1E7" style="height: 254px;">
                                    <div style="position: relative;">
                                        <div dir="ltr" style="position: relative; width: 242px; height: 242px;">
                                            <div style="position: absolute; left: 0px; top: 0px; width: 100%; height: 100%;" aria-label="A chart.">
                                                <svg width="242" height="242" aria-label="A chart." style="overflow: hidden;">
                                                    <defs id="defs"></defs>
                                                    <g>
                                                        <ellipse cx="121" cy="121" rx="109" ry="109" stroke="#ffffff" stroke-width="1" fill="#7ac1e7"></ellipse>
                                                        <text text-anchor="start" x="99" y="127.3" font-family="ff-dax-web" font-size="18" stroke="none" stroke-width="0" fill="#ffffff">100%</text>
                                                    </g>
                                                    <g></g>
                                                </svg>
                                                <div aria-label="A tabular representation of the data in the chart." style="position: absolute; left: -10000px; top: auto; width: 1px; height: 1px; overflow: hidden;">
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                                <th>Type</th>
                                                                <th>Slices</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>NL Wind</td>
                                                                <td>100</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div aria-hidden="true" style="display: none; position: absolute; top: 252px; left: 252px; white-space: nowrap; font-family: ff-dax-web; font-size: 18px;">100%</div>
                                        <div></div>
                                    </div>
                                </div>
                                <table class="chart-legend">
                                    <tbody>
                                        <tr>
                                            <td class="icon icon-wind" style="background: #7AC1E7;"></td>
                                            <td>
                                                <font style="vertical-align: inherit;">
                                                    <font style="vertical-align: inherit;">NL Wind</font>
                                                </font>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <h4>
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">Green gas</font>
                                    </font>
                                </h4>



                                <div class="chart-figure" data-graph="Bosgecompenseerd, 100, #A4CF27" style="height: 254px;">
                                    <div style="position: relative;">
                                        <div dir="ltr" style="position: relative; width: 242px; height: 242px;">
                                            <div style="position: absolute; left: 0px; top: 0px; width: 100%; height: 100%;" aria-label="A chart.">
                                                <svg width="242" height="242" aria-label="A chart." style="overflow: hidden;">
                                                    <defs id="defs"></defs>
                                                    <g>
                                                        <ellipse cx="121" cy="121" rx="109" ry="109" stroke="#ffffff" stroke-width="1" fill="#a4cf27"></ellipse>
                                                        <text text-anchor="start" x="99" y="127.3" font-family="ff-dax-web" font-size="18" stroke="none" stroke-width="0" fill="#ffffff">100%</text>
                                                    </g>
                                                    <g></g>
                                                </svg>
                                                <div aria-label="A tabular representation of the data in the chart." style="position: absolute; left: -10000px; top: auto; width: 1px; height: 1px; overflow: hidden;">
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                                <th>Type</th>
                                                                <th>Slices</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>Bosgecompenseerd</td>
                                                                <td>100</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div aria-hidden="true" style="display: none; position: absolute; top: 252px; left: 252px; white-space: nowrap; font-family: ff-dax-web; font-size: 18px;">100%</div>
                                        <div></div>
                                    </div>
                                </div>
                                <table class="chart-legend">
                                    <tbody>
                                        <tr>
                                            <td class="icon icon-forest" style="background: #A4CF27;"></td>
                                            <td>
                                                <font style="vertical-align: inherit;">
                                                    <font style="vertical-align: inherit;">Forest compensated</font>
                                                </font>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>


                    <h4>
                        <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">Choose the term</font>
                        </font>
                    </h4>
                    <ul class="field-product-period field-product-period-term" data-productid="15901">
                        <li>
                            <label for="term_product_15901_3">
                                <input type="radio" name="term_product_15901" id="term_product_15901_3" data-term="3" data-clusterid="226" style="opacity: 0;">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">
                                        3 years
                                    </font>
                                </font>
                            </label>
                        </li>
                        <li class="active">
                            <label for="term_product_15901_5">
                                <input type="radio" name="term_product_15901" id="term_product_15901_5" data-term="5" data-clusterid="227" checked="checked"
                                    style="opacity: 0;">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">
                                        5 years
                                    </font>
                                </font>
                            </label>
                        </li>
                    </ul>
                    <div class="field-product-period-label gc-product-term
          
          
          
          gc-product-term--show-5" data-termlinkid="15901">
                        <div product-term-zero="">
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">Variable rate</font>
                            </font>
                        </div>
                        <div product-term-one="">
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">Fixed rate for 12 months </font>
                            </font>
                            <a rel="tooltip" data-tippy="" data-original-title="Start Greenchoice de levering niet per de eerste van de maand, dan is de looptijd die voor u van toepassing is afhankelijk van het moment waarop Greenchoice de levering start. De uiteindelijke looptijd kan maximaal 22 dagen korter of 9 dagen langer zijn.">
                                <i class="fontello-icons icon-info-circle"></i>
                            </a>
                        </div>
                        <div product-term-three="">
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">Fixed rate for 36 months </font>
                            </font>
                            <a rel="tooltip" data-tippy="" data-original-title="Start Greenchoice de levering niet per de eerste van de maand, dan is de looptijd die voor u van toepassing is afhankelijk van het moment waarop Greenchoice de levering start. De uiteindelijke looptijd kan maximaal 22 dagen korter of 9 dagen langer zijn.">
                                <i class="fontello-icons icon-info-circle"></i>
                            </a>
                        </div>
                        <div product-term-five="">
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">Fixed rate for 60 months </font>
                            </font>
                            <a rel="tooltip" data-tippy="" data-original-title="Start Greenchoice de levering niet per de eerste van de maand, dan is de looptijd die voor u van toepassing is afhankelijk van het moment waarop Greenchoice de levering start. De uiteindelijke looptijd kan maximaal 22 dagen korter of 9 dagen langer zijn.">
                                <i class="fontello-icons icon-info-circle"></i>
                            </a>
                        </div>

                    </div>
                    <p class="field-price-month js-apiprice-animation" apiprice="" data-clusterid="227" data-termlinkid="15901" data-sourcelinkid="15901"
                        data-pricelinkid="11989_15901">
                        <span apiprice-combined="">
                            <span class="sign">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">€ </font>
                                </font>
                            </span>
                            <span apiprice-int="">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">232</font>
                                </font>
                            </span>
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;"> , </font>
                            </font>
                            <sup apiprice-dec="">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">86 </font>
                                </font>
                            </sup>
                        </span>
                        <font style="vertical-align: inherit;">
                            <span apiprice-gas="">
                                <span class="sign">
                                    <font style="vertical-align: inherit;">€ </font>
                                </span>
                            </span>
                            <span apiprice-gas="">
                                <span apiprice-int="">
                                    <font style="vertical-align: inherit;">131</font>
                                </span>
                            </span>
                            <span apiprice-gas="">
                                <font style="vertical-align: inherit;"> , </font>
                            </span>
                            <span apiprice-gas="">
                                <sup apiprice-dec="">
                                    <font style="vertical-align: inherit;">79 </font>
                                </sup>
                            </span>
                            <span apiprice-power="">
                                <span class="sign">
                                    <font style="vertical-align: inherit;">€ </font>
                                </span>
                            </span>
                            <span apiprice-power="">
                                <span apiprice-int="">
                                    <font style="vertical-align: inherit;">101</font>
                                </span>
                            </span>
                            <span apiprice-power="">
                                <font style="vertical-align: inherit;"> , </font>
                            </span>
                            <span apiprice-power="">
                                <sup apiprice-dec="">
                                    <font style="vertical-align: inherit;">07</font>
                                </sup>
                            </span>
                            <span class="time">
                                <font style="vertical-align: inherit;"> / month</font>
                            </span>
                        </font>
                        <span apiprice-gas="">
                            <span class="sign">
                                <font style="vertical-align: inherit;"></font>
                            </span>
                            <span apiprice-int="">
                                <font style="vertical-align: inherit;"></font>
                            </span>
                            <font style="vertical-align: inherit;"></font>
                            <sup apiprice-dec="">
                                <font style="vertical-align: inherit;"></font>
                            </sup>
                        </span>
                        <span apiprice-power="">
                            <span class="sign">
                                <font style="vertical-align: inherit;"></font>
                            </span>
                            <span apiprice-int="">
                                <font style="vertical-align: inherit;"></font>
                            </span>
                            <font style="vertical-align: inherit;"></font>
                            <sup apiprice-dec="">
                                <font style="vertical-align: inherit;"></font>
                            </sup>
                        </span>
                        <span class="time">
                            <font style="vertical-align: inherit;"></font>
                        </span>
                    </p>
                    <p class="action u-margin-top">
                        <a href="https://www.greenchoice.nl/tarieven/windvanger/aanmelden/" class="btn" title="Sign Up">
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">
                                    Sign Up
                                </font>
                            </font>
                        </a>
                    </p>
                    <p>
                        <a class="lightbox" href="#tarieven_overlay_15901" title="Tariff specification">
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">
                                    Tariff specification
                                </font>
                            </font>
                        </a>
                    </p>
                    <p>
                        <a href="https://www.greenchoice.nl/tarieven/windvanger/" title="More information">
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">
                                    More information
                                </font>
                            </font>
                        </a>
                    </p>
                </article>
                <div class="cmn-modal-content" id="tarieven_overlay_15901">
                    <header>
                        <h2>
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">Tariff specification</font>
                            </font>
                        </h2>
                        <div class="gc-product-term
           
           
           " data-termlinkid="15901">
                            <div product-term-zero="">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">Variable rate</font>
                                </font>
                            </div>
                            <div product-term-one="">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">Fixed rate for 12 months </font>
                                </font>
                                <a rel="tooltip" title="Start Greenchoice de levering niet per de eerste van de maand, dan is de looptijd die voor u van toepassing is afhankelijk van het moment waarop Greenchoice de levering start. De uiteindelijke looptijd kan maximaal 22 dagen korter of 9 dagen langer zijn.">
                                    <i class="fontello-icons icon-info-circle"></i>
                                </a>
                            </div>
                            <div product-term-three="">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">Fixed rate for 36 months </font>
                                </font>
                                <a rel="tooltip" title="Start Greenchoice de levering niet per de eerste van de maand, dan is de looptijd die voor u van toepassing is afhankelijk van het moment waarop Greenchoice de levering start. De uiteindelijke looptijd kan maximaal 22 dagen korter of 9 dagen langer zijn.">
                                    <i class="fontello-icons icon-info-circle"></i>
                                </a>
                            </div>
                        </div>
                    </header>
                    <div class="choice">
                        <p>Onderstaand overzicht is gebaseerd op de volgende situatie:</p>
                        <div double-meter="">
                            <dl apiprice-combined="" apiprice-power="">
                                <dt>Stroomverbruik:</dt>
                                <dd>
                                    <span gc-usage-power-high="">2700</span> kWh (normaal) en
                                    <span gc-usage-power-low="">3300</span> kWh (dal) per jaar</dd>
                            </dl>
                        </div>
                        <div double-meter="">
                            <dl apiprice-combined="" apiprice-power="">
                                <dt>Stroomtelwerk:</dt>
                                <dd>Dubbel (normaal én dal)</dd>
                            </dl>
                        </div>
                        <div single-meter="">
                            <dl apiprice-combined="" apiprice-power="">
                                <dt>Stroomverbruik:</dt>
                                <dd>
                                    <span gc-usage-power="">6000</span> kWh</dd>
                            </dl>
                        </div>
                        <div single-meter="">
                            <dl apiprice-combined="" apiprice-power="">
                                <dt>Stroomtelwerk:</dt>
                                <dd>Enkel</dd>
                            </dl>
                        </div>
                        <dl apiprice-combined="" apiprice-gas="">
                            <dt>Gasverbruik:</dt>
                            <dd>
                                <span gc-usage-gas="">2000</span> m
                                <sup>3</sup> per jaar</dd>
                        </dl>
                        <dl>
                            <dt>Postcode:</dt>
                            <dd>
                                <span gc-location="">1000AA</span>
                            </dd>
                        </dl>
                    </div>
                    <div class="tarifs-table" data-termlinkid="15901" data-clusterid="227" data-type="consumer">
                        <div class="field-product-table" apiprice-combined="" apiprice-power="">
                            <table>
                                <thead>
                                    <tr>
                                        <th class="type icon-energy">Groene Stroom</th>
                                        <th>
                                            <span class="infoIncludeTax">Totaal tarief (incl. btw)</span>
                                            <span class="infoExcludeTax" style="display: none;">Totaal tarief (excl. btw)</span>
                                        </th>
                                        <th>Op basis van</th>
                                        <th>
                                            <span class="infoIncludeTax">Totaal (incl. btw)</span>
                                            <span class="infoExcludeTax" style="display: none;">Totaal (excl. btw)</span>
                                        </th>
                                        <th class="expand"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr single-meter="">
                                        <td>Tarief</td>
                                        <td class="sing">
                                            <span>€</span>0,2157 x</td>
                                        <td>6000 kWh =</td>
                                        <td class="sing">
                                            <span>€</span>
                                            <strong>1294,31</strong>
                                        </td>
                                        <td class="expand">
                                            <a href="#" title="More">More</a>
                                        </td>
                                    </tr>
                                    <tr single-meter="">
                                        <td colspan="5" class="accord">
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td class="type">
                                                            <span class="infoIncludeTax">Levering (excl. btw)</span>
                                                            <span class="infoExcludeTax" style="display: none;">Levering (incl. btw)</span>
                                                        </td>
                                                        <td class="sing">
                                                            <span>€</span>0,0605 x</td>
                                                        <td>6000 kWh =</td>
                                                        <td class="sing">
                                                            <span>€</span>
                                                            <strong>363,00</strong>
                                                        </td>
                                                        <td class="expand"></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="type">
                                                            <span class="infoIncludeTax">Opslag Duurzame Energie (excl. btw)</span>
                                                            <span class="infoExcludeTax" style="display: none;">Opslag Duurzame Energie (incl. btw)</span>
                                                        </td>
                                                        <td class="sing">
                                                            <span>€</span>0,0132 x</td>
                                                        <td>6000 kWh =</td>
                                                        <td class="sing">
                                                            <span>€</span>
                                                            <strong>79,20</strong>
                                                        </td>
                                                        <td class="expand"></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="type">
                                                            <span class="infoIncludeTax">Energiebelasting (excl. btw)</span>
                                                            <span class="infoExcludeTax" style="display: none;">Energiebelasting (incl. btw)</span>
                                                        </td>
                                                        <td class="sing">
                                                            <span>€</span>0,1046 x</td>
                                                        <td>6000 kWh =</td>
                                                        <td class="sing">
                                                            <span>€</span>
                                                            <strong>627,48</strong>
                                                        </td>
                                                        <td class="expand"></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="type">21% btw</td>
                                                        <td class="sing">
                                                            <span>€</span>0,0374 x</td>
                                                        <td>6000 kWh =</td>
                                                        <td class="sing">
                                                            <span>€</span>
                                                            <strong>224,63</strong>
                                                        </td>
                                                        <td class="expand"></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr double-meter="">
                                        <td>Normaaltarief</td>
                                        <td class="sing">
                                            <span>€</span>0,2223 x</td>
                                        <td>2700 kWh =</td>
                                        <td class="sing">
                                            <span>€</span>
                                            <strong>600,08</strong>
                                        </td>
                                        <td class="expand">
                                            <a href="#" title="More">More</a>
                                        </td>
                                    </tr>
                                    <tr double-meter="">
                                        <td colspan="5" class="accord">
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td class="type">
                                                            <span class="infoIncludeTax">Levering (excl. btw)</span>
                                                            <span class="infoExcludeTax" style="display: none;">Levering (incl. btw)</span>
                                                        </td>
                                                        <td class="sing">
                                                            <span>€</span>0,0659 x</td>
                                                        <td>2700 kWh =</td>
                                                        <td class="sing">
                                                            <span>€</span>
                                                            <strong>177,93</strong>
                                                        </td>
                                                        <td class="expand"></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="type">
                                                            <span class="infoIncludeTax">Opslag Duurzame Energie (excl. btw)</span>
                                                            <span class="infoExcludeTax" style="display: none;">Opslag Duurzame Energie (incl. btw)</span>
                                                        </td>
                                                        <td class="sing">
                                                            <span>€</span>0,0132 x</td>
                                                        <td>2700 kWh =</td>
                                                        <td class="sing">
                                                            <span>€</span>
                                                            <strong>35,64</strong>
                                                        </td>
                                                        <td class="expand"></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="type">
                                                            <span class="infoIncludeTax">Energiebelasting (excl. btw)</span>
                                                            <span class="infoExcludeTax" style="display: none;">Energiebelasting (incl. btw)</span>
                                                        </td>
                                                        <td class="sing">
                                                            <span>€</span>0,1046 x</td>
                                                        <td>2700 kWh =</td>
                                                        <td class="sing">
                                                            <span>€</span>
                                                            <strong>282,37</strong>
                                                        </td>
                                                        <td class="expand"></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="type">21% btw</td>
                                                        <td class="sing">
                                                            <span>€</span>0,0386 x</td>
                                                        <td>2700 kWh =</td>
                                                        <td class="sing">
                                                            <span>€</span>
                                                            <strong>104,15</strong>
                                                        </td>
                                                        <td class="expand"></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr double-meter="">
                                        <td>Daltarief</td>
                                        <td class="sing">
                                            <span>€</span>0,2076 x</td>
                                        <td>3300 kWh =</td>
                                        <td class="sing">
                                            <span>€</span>
                                            <strong>685,12</strong>
                                        </td>
                                        <td class="expand">
                                            <a href="#" title="More">More</a>
                                        </td>
                                    </tr>
                                    <tr double-meter="">
                                        <td colspan="5" class="accord">
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td class="type">
                                                            <span class="infoIncludeTax">Levering (excl. btw)</span>
                                                            <span class="infoExcludeTax" style="display: none;">Levering (incl. btw)</span>
                                                        </td>
                                                        <td class="sing">
                                                            <span>€</span>0,0538 x</td>
                                                        <td>3300 kWh =</td>
                                                        <td class="sing">
                                                            <span>€</span>
                                                            <strong>177,54</strong>
                                                        </td>
                                                        <td class="expand"></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="type">
                                                            <span class="infoIncludeTax">Opslag Duurzame Energie (excl. btw)</span>
                                                            <span class="infoExcludeTax" style="display: none;">Opslag Duurzame Energie (incl. btw)</span>
                                                        </td>
                                                        <td class="sing">
                                                            <span>€</span>0,0132 x</td>
                                                        <td>3300 kWh =</td>
                                                        <td class="sing">
                                                            <span>€</span>
                                                            <strong>43,56</strong>
                                                        </td>
                                                        <td class="expand"></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="type">
                                                            <span class="infoIncludeTax">Energiebelasting (excl. btw)</span>
                                                            <span class="infoExcludeTax" style="display: none;">Energiebelasting (incl. btw)</span>
                                                        </td>
                                                        <td class="sing">
                                                            <span>€</span>0,1046 x</td>
                                                        <td>3300 kWh =</td>
                                                        <td class="sing">
                                                            <span>€</span>
                                                            <strong>345,11</strong>
                                                        </td>
                                                        <td class="expand"></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="type">21% btw</td>
                                                        <td class="sing">
                                                            <span>€</span>0,0360 x</td>
                                                        <td>3300 kWh =</td>
                                                        <td class="sing">
                                                            <span>€</span>
                                                            <strong>118,90</strong>
                                                        </td>
                                                        <td class="expand"></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Vaste leveringskosten</td>
                                        <td class="sing">
                                            <span>€</span>3,3275 x</td>
                                        <td>12 mnd =</td>
                                        <td class="sing">
                                            <span>€</span>
                                            <strong>39,93</strong>
                                        </td>
                                        <td class="expand"></td>
                                    </tr>
                                    <tr>
                                        <td>Netbeheerkosten</td>
                                        <td class="sing">
                                            <span>€</span>20,9968 x</td>
                                        <td>12 mnd =</td>
                                        <td class="sing">
                                            <span>€</span>
                                            <strong>251,96</strong>
                                        </td>
                                        <td class="expand"></td>
                                    </tr>
                                    <tr>
                                        <td>Vermindering energiebelasting</td>
                                        <td class="sing">
                                            <span>€</span>-373,33 x</td>
                                        <td>1 jr =</td>
                                        <td class="sing">
                                            <span>€</span>
                                            <strong>-373,33</strong>
                                        </td>
                                        <td class="expand"></td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td class="sing">
                                            <span>€</span>
                                            <strong>1212,87</strong> per jaar</td>
                                        <td class="expand"></td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                        <div class="field-product-table" apiprice-combined="" apiprice-gas="">
                            <table>
                                <thead>
                                    <tr>
                                        <th class="type icon-gas">Groen gas</th>
                                        <th>
                                            <span class="infoIncludeTax">Totaal tarief (incl. btw)</span>
                                            <span class="infoExcludeTax" style="display: none;">Totaal tarief (excl. btw)</span>
                                        </th>
                                        <th>Op basis van</th>
                                        <th>
                                            <span class="infoIncludeTax">Totaal (incl. btw)</span>
                                            <span class="infoExcludeTax" style="display: none;">Totaal (excl. btw)</span>
                                        </th>
                                        <th class="expand"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Tarief</td>
                                        <td class="sing">
                                            <span>€</span>0,6743 x</td>
                                        <td>2000 m
                                            <sup>3</sup> =</td>
                                        <td class="sing">
                                            <span>€</span>
                                            <strong>1348,69</strong>
                                        </td>
                                        <td class="expand">
                                            <a href="#" title="More">More</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="5" class="accord">
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td class="type">
                                                            <span class="infoIncludeTax">Levering (excl. btw)</span>
                                                            <span class="infoExcludeTax" style="display: none;">Levering (incl. btw)</span>
                                                        </td>
                                                        <td class="sing">
                                                            <span>€</span>0,2688 x</td>
                                                        <td>2000 m
                                                            <sup>3</sup> =</td>
                                                        <td class="sing">
                                                            <span>€</span>
                                                            <strong>537,60</strong>
                                                        </td>
                                                        <td class="expand"></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="type">
                                                            <span class="infoIncludeTax">Opslag Duurzame Energie (excl. btw)</span>
                                                            <span class="infoExcludeTax" style="display: none;">Opslag Duurzame Energie (incl. btw)</span>
                                                        </td>
                                                        <td class="sing">
                                                            <span>€</span>0,0285 x</td>
                                                        <td>2000 m
                                                            <sup>3</sup> =</td>
                                                        <td class="sing">
                                                            <span>€</span>
                                                            <strong>57,00</strong>
                                                        </td>
                                                        <td class="expand"></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="type">
                                                            <span class="infoIncludeTax">Energiebelasting (excl. btw)</span>
                                                            <span class="infoExcludeTax" style="display: none;">Energiebelasting (incl. btw)</span>
                                                        </td>
                                                        <td class="sing">
                                                            <span>€</span>0,2600 x</td>
                                                        <td>2000 m
                                                            <sup>3</sup> =</td>
                                                        <td class="sing">
                                                            <span>€</span>
                                                            <strong>520,02</strong>
                                                        </td>
                                                        <td class="expand"></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="type">21% btw</td>
                                                        <td class="sing">
                                                            <span>€</span>0,1170 x</td>
                                                        <td>2000 m
                                                            <sup>3</sup> =</td>
                                                        <td class="sing">
                                                            <span>€</span>
                                                            <strong>234,07</strong>
                                                        </td>
                                                        <td class="expand"></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Vaste leveringskosten</td>
                                        <td class="sing">
                                            <span>€</span>3,3275 x</td>
                                        <td>12 mnd =</td>
                                        <td class="sing">
                                            <span>€</span>
                                            <strong>39,93</strong>
                                        </td>
                                        <td class="expand"></td>
                                    </tr>
                                    <tr>
                                        <td>Netbeheerkosten</td>
                                        <td class="sing">
                                            <span>€</span>16,0687 x</td>
                                        <td>12 mnd =</td>
                                        <td class="sing">
                                            <span>€</span>
                                            <strong>192,82</strong>
                                        </td>
                                        <td class="expand"></td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td class="sing">
                                            <span>€</span>
                                            <strong>1581,44</strong> per jaar</td>
                                        <td class="expand"></td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                    <p>
                        <sub>Het totaal tarief (incl. btw) is inclusief overheidsheffingen en btw. De overheidsheffingen en netbeheerkosten
                            gelden voor het kalenderjaar 2018. De overheidsheffingen gelden voor een maximaal jaarverbruik
                            van 10.000 kWh stroom en 170.000 m3 gas. Bij een hoger verbruik hoort een ander tarief van de
                            overheidsheffingen en varieert het totaal tarief. De netbeheerkosten kunnen wijzigen per kalenderjaar
                            of tussentijds als de aansluitwaarde van de aansluiting verandert. Deze berekening is gebaseerd
                            op een gemiddelde grootte van de aansluitingen (3x25A voor stroom en G6 voor gas). De kosten
                            kunnen afwijken van de kosten die o.b.v. het verbruik maandelijks in rekening worden gebracht.</sub>
                    </p>
                    <br>
                    <footer>
                        <div class="gc-product-term
           
           
           " data-termlinkid="15901">
                            <div product-term-zero="">Variabel tarief</div>
                            <div product-term-one="">Vast tarief voor 12 maanden
                                <a rel="tooltip" title="Start Greenchoice de levering niet per de eerste van de maand, dan is de looptijd die voor u van toepassing is afhankelijk van het moment waarop Greenchoice de levering start. De uiteindelijke looptijd kan maximaal 22 dagen korter of 9 dagen langer zijn.">
                                    <i class="fontello-icons icon-info-circle"></i>
                                </a>
                            </div>
                            <div product-term-three="">Vast tarief voor 36 maanden
                                <a rel="tooltip" title="Start Greenchoice de levering niet per de eerste van de maand, dan is de looptijd die voor u van toepassing is afhankelijk van het moment waarop Greenchoice de levering start. De uiteindelijke looptijd kan maximaal 22 dagen korter of 9 dagen langer zijn.">
                                    <i class="fontello-icons icon-info-circle"></i>
                                </a>
                            </div>
                        </div>
                        <p class="field-price-month" apiprice-linked="" data-pricelinkid="11989_15901">
                            <span apiprice-combined="">
                                <span class="sign">€</span>
                                <span apiprice-int="">232</span>,
                                <sup apiprice-dec="">86</sup>
                            </span>
                            <span apiprice-gas="">
                                <span class="sign">€</span>
                                <span apiprice-int="">131</span>,
                                <sup apiprice-dec="">79</sup>
                            </span>
                            <span apiprice-power="">
                                <span class="sign">€</span>
                                <span apiprice-int="">101</span>,
                                <sup apiprice-dec="">07</sup>
                            </span>
                            <span class="time">/maand</span>
                        </p>
                        <p class="field-price-year" apiprice-linked="" apiprice-year="" data-pricelinkid="11989_15901">
                            <span apiprice-combined="">
                                <span class="sign">€</span>
                                <span apiprice-int="">2.794</span>,
                                <sup apiprice-dec="">32</sup>
                            </span>
                            <span apiprice-gas="">
                                <span class="sign">€</span>
                                <span apiprice-int="">1.581</span>,
                                <sup apiprice-dec="">44</sup>
                            </span>
                            <span apiprice-power="">
                                <span class="sign">€</span>
                                <span apiprice-int="">1.212</span>,
                                <sup apiprice-dec="">87</sup>
                            </span>
                            <span class="time">/jaar</span>
                        </p>
                        <p>
                            <a href="https://www.greenchoice.nl/tarieven/windvanger/aanmelden/" class="btn-default arrow" title="Aanmelden">
                                <span>
                                    Aanmelden
                                </span>
                            </a>
                        </p>
                        <p class="details">
                            <a href="https://www.greenchoice.nl/tarieven/windvanger/" title="Meer informatie">
                                Meer informatie
                            </a>
                        </p>
                    </footer>
                </div>
                <article class="block-product-selection  first gc-product-source  " data-sourcelinkid="11951">
                    <header style="height: auto;">
                        <h3 class="icon-green">
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">
                                    Green from the Netherlands
                                </font>
                            </font>
                        </h3>
                        <p>
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">
                                    100% green and forest compensated gas
                                </font>
                            </font>
                        </p>
                    </header>


                    <p class="link-compare close">
                        <a href="#">
                            <span class="close">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">View product label</font>
                                </font>
                            </span>
                            <span class="open">Verberg productetiket</span>
                        </a>
                    </p>
                    <div class="accord-compare hide">
                        <div>
                            <div>
                                <h4>
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">Green power</font>
                                    </font>
                                </h4>



                                <div class="chart-figure" data-graph="NL Wind, 90, #7AC1E7| NL Biomassa, 10, #A4CF27" style="height: 254px;">
                                    <div style="position: relative;">
                                        <div dir="ltr" style="position: relative; width: 242px; height: 242px;">
                                            <div style="position: absolute; left: 0px; top: 0px; width: 100%; height: 100%;" aria-label="A chart.">
                                                <svg width="242" height="242" aria-label="A chart." style="overflow: hidden;">
                                                    <defs id="defs"></defs>
                                                    <g>
                                                        <path d="M121,121L56.931407500120415,32.81714761313074A109,109,0,0,1,121,12L121,121A0,0,0,0,0,121,121" stroke="#ffffff" stroke-width="1"
                                                            fill="#a4cf27"></path>
                                                        <text text-anchor="start" x="80.4537810613426" y="54.832189609770026" font-family="ff-dax-web" font-size="18" stroke="none"
                                                            stroke-width="0" fill="#ffffff">10%</text>
                                                    </g>
                                                    <g>
                                                        <path d="M121,121L121,12A109,109,0,1,1,56.931407500120415,32.81714761313074L121,121A0,0,0,1,0,121,121" stroke="#ffffff" stroke-width="1"
                                                            fill="#7ac1e7"></path>
                                                        <text text-anchor="start" x="127.54621893865738" y="199.76781039022998" font-family="ff-dax-web" font-size="18" stroke="none"
                                                            stroke-width="0" fill="#ffffff">90%</text>
                                                    </g>
                                                    <g></g>
                                                </svg>
                                                <div aria-label="A tabular representation of the data in the chart." style="position: absolute; left: -10000px; top: auto; width: 1px; height: 1px; overflow: hidden;">
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                                <th>Type</th>
                                                                <th>Slices</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>NL Wind</td>
                                                                <td>90</td>
                                                            </tr>
                                                            <tr>
                                                                <td>NL Biomassa</td>
                                                                <td>10</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div aria-hidden="true" style="display: none; position: absolute; top: 252px; left: 252px; white-space: nowrap; font-family: ff-dax-web; font-size: 18px;">10%</div>
                                        <div></div>
                                    </div>
                                </div>
                                <table class="chart-legend">
                                    <tbody>
                                        <tr>
                                            <td class="icon icon-wind" style="background: #7AC1E7;"></td>
                                            <td>
                                                <font style="vertical-align: inherit;">
                                                    <font style="vertical-align: inherit;">NL Wind</font>
                                                </font>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="icon icon-fermentation" style="background: #A4CF27;"></td>
                                            <td>
                                                <font style="vertical-align: inherit;">
                                                    <font style="vertical-align: inherit;">NL Biomass</font>
                                                </font>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <h4>
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">Green gas</font>
                                    </font>
                                </h4>



                                <div class="chart-figure" data-graph="Bosgecompenseerd, 100, #A4CF27" style="height: 254px;">
                                    <div style="position: relative;">
                                        <div dir="ltr" style="position: relative; width: 242px; height: 242px;">
                                            <div style="position: absolute; left: 0px; top: 0px; width: 100%; height: 100%;" aria-label="A chart.">
                                                <svg width="242" height="242" aria-label="A chart." style="overflow: hidden;">
                                                    <defs id="defs"></defs>
                                                    <g>
                                                        <ellipse cx="121" cy="121" rx="109" ry="109" stroke="#ffffff" stroke-width="1" fill="#a4cf27"></ellipse>
                                                        <text text-anchor="start" x="99" y="127.3" font-family="ff-dax-web" font-size="18" stroke="none" stroke-width="0" fill="#ffffff">100%</text>
                                                    </g>
                                                    <g></g>
                                                </svg>
                                                <div aria-label="A tabular representation of the data in the chart." style="position: absolute; left: -10000px; top: auto; width: 1px; height: 1px; overflow: hidden;">
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                                <th>Type</th>
                                                                <th>Slices</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>Bosgecompenseerd</td>
                                                                <td>100</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div aria-hidden="true" style="display: none; position: absolute; top: 252px; left: 252px; white-space: nowrap; font-family: ff-dax-web; font-size: 18px;">100%</div>
                                        <div></div>
                                    </div>
                                </div>
                                <table class="chart-legend">
                                    <tbody>
                                        <tr>
                                            <td class="icon icon-forest" style="background: #A4CF27;"></td>
                                            <td>
                                                <font style="vertical-align: inherit;">
                                                    <font style="vertical-align: inherit;">Forest compensated</font>
                                                </font>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>


                    <h4>
                        <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">Choose the term</font>
                        </font>
                    </h4>
                    <ul class="field-product-period field-product-period-term" data-productid="11951">
                        <li>
                            <label for="term_product_11951_1">
                                <input type="radio" name="term_product_11951" id="term_product_11951_1" data-term="1" data-clusterid="147" style="opacity: 0;">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">
                                        1 year
                                    </font>
                                </font>
                            </label>
                        </li>
                        <li class="active">
                            <label for="term_product_11951_3">
                                <input type="radio" name="term_product_11951" id="term_product_11951_3" data-term="3" data-clusterid="148" checked="checked"
                                    style="opacity: 0;">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">
                                        3 years
                                    </font>
                                </font>
                            </label>
                        </li>
                        <li>
                            <label for="term_product_11951_0">
                                <input type="radio" name="term_product_11951" id="term_product_11951_0" data-term="0" data-clusterid="137" style="opacity: 0;">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">
                                        variable
                                    </font>
                                </font>
                            </label>
                        </li>
                    </ul>
                    <div class="field-product-period-label gc-product-term
          
          
          gc-product-term--show-3
          " data-termlinkid="11951">
                        <div product-term-zero="">
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">Variable rate</font>
                            </font>
                        </div>
                        <div product-term-one="">
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">Fixed rate for 12 months </font>
                            </font>
                            <a rel="tooltip" data-tippy="" data-original-title="Start Greenchoice de levering niet per de eerste van de maand, dan is de looptijd die voor u van toepassing is afhankelijk van het moment waarop Greenchoice de levering start. De uiteindelijke looptijd kan maximaal 22 dagen korter of 9 dagen langer zijn.">
                                <i class="fontello-icons icon-info-circle"></i>
                            </a>
                        </div>
                        <div product-term-three="">
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">Fixed rate for 36 months </font>
                            </font>
                            <a rel="tooltip" data-tippy="" data-original-title="Start Greenchoice de levering niet per de eerste van de maand, dan is de looptijd die voor u van toepassing is afhankelijk van het moment waarop Greenchoice de levering start. De uiteindelijke looptijd kan maximaal 22 dagen korter of 9 dagen langer zijn.">
                                <i class="fontello-icons icon-info-circle"></i>
                            </a>
                        </div>
                        <div product-term-five="">
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">Fixed rate for 60 months </font>
                            </font>
                            <a rel="tooltip" data-tippy="" data-original-title="Start Greenchoice de levering niet per de eerste van de maand, dan is de looptijd die voor u van toepassing is afhankelijk van het moment waarop Greenchoice de levering start. De uiteindelijke looptijd kan maximaal 22 dagen korter of 9 dagen langer zijn.">
                                <i class="fontello-icons icon-info-circle"></i>
                            </a>
                        </div>

                    </div>
                    <p class="field-price-month js-apiprice-animation" apiprice="" data-clusterid="148" data-termlinkid="11951" data-sourcelinkid="11951"
                        data-pricelinkid="11989_11951">
                        <span apiprice-combined="">
                            <span class="sign">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">€ </font>
                                </font>
                            </span>
                            <span apiprice-int="">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">102</font>
                                </font>
                            </span>
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;"> , </font>
                            </font>
                            <sup apiprice-dec="">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">94 </font>
                                </font>
                            </sup>
                        </span>
                        <font style="vertical-align: inherit;">
                            <span apiprice-gas="">
                                <span class="sign">
                                    <font style="vertical-align: inherit;">€ </font>
                                </span>
                            </span>
                            <span apiprice-gas="">
                                <span apiprice-int="">
                                    <font style="vertical-align: inherit;">81</font>
                                </span>
                            </span>
                            <span apiprice-gas="">
                                <font style="vertical-align: inherit;"> , </font>
                            </span>
                            <span apiprice-gas="">
                                <sup apiprice-dec="">
                                    <font style="vertical-align: inherit;">90 </font>
                                </sup>
                            </span>
                            <span apiprice-power="">
                                <span class="sign">
                                    <font style="vertical-align: inherit;">€ </font>
                                </span>
                            </span>
                            <span apiprice-power="">
                                <span apiprice-int="">
                                    <font style="vertical-align: inherit;">21</font>
                                </span>
                            </span>
                            <span apiprice-power="">
                                <font style="vertical-align: inherit;"> , </font>
                            </span>
                            <span apiprice-power="">
                                <sup apiprice-dec="">
                                    <font style="vertical-align: inherit;">04</font>
                                </sup>
                            </span>
                            <span class="time">
                                <font style="vertical-align: inherit;"> / month</font>
                            </span>
                        </font>
                        <span apiprice-gas="">
                            <span class="sign">
                                <font style="vertical-align: inherit;"></font>
                            </span>
                            <span apiprice-int="">
                                <font style="vertical-align: inherit;"></font>
                            </span>
                            <font style="vertical-align: inherit;"></font>
                            <sup apiprice-dec="">
                                <font style="vertical-align: inherit;"></font>
                            </sup>
                        </span>
                        <span apiprice-power="">
                            <span class="sign">
                                <font style="vertical-align: inherit;"></font>
                            </span>
                            <span apiprice-int="">
                                <font style="vertical-align: inherit;"></font>
                            </span>
                            <font style="vertical-align: inherit;"></font>
                            <sup apiprice-dec="">
                                <font style="vertical-align: inherit;"></font>
                            </sup>
                        </span>
                        <span class="time">
                            <font style="vertical-align: inherit;"></font>
                        </span>
                    </p>
                    <p class="action u-margin-top">
                        <a href="https://www.greenchoice.nl/tarieven/groenuitnederland/aanmelden/" class="btn" title="Sign Up">
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">
                                    Sign Up
                                </font>
                            </font>
                        </a>
                    </p>
                    <p>
                        <a class="lightbox" href="#tarieven_overlay_11951" title="Tariff specification">
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">
                                    Tariff specification
                                </font>
                            </font>
                        </a>
                    </p>
                    <p>
                        <a href="https://www.greenchoice.nl/tarieven/groenuitnederland/" title="More information">
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">
                                    More information
                                </font>
                            </font>
                        </a>
                    </p>
                </article>
                <div class="cmn-modal-content" id="tarieven_overlay_11951">
                    <header>
                        <h2>Tarievenspecificatie</h2>
                        <div class="gc-product-term
           
           
           gc-product-term--show-3" data-termlinkid="11951">
                            <div product-term-zero="">Variabel tarief</div>
                            <div product-term-one="">Vast tarief voor 12 maanden
                                <a rel="tooltip" title="Start Greenchoice de levering niet per de eerste van de maand, dan is de looptijd die voor u van toepassing is afhankelijk van het moment waarop Greenchoice de levering start. De uiteindelijke looptijd kan maximaal 22 dagen korter of 9 dagen langer zijn.">
                                    <i class="fontello-icons icon-info-circle"></i>
                                </a>
                            </div>
                            <div product-term-three="">Vast tarief voor 36 maanden
                                <a rel="tooltip" title="Start Greenchoice de levering niet per de eerste van de maand, dan is de looptijd die voor u van toepassing is afhankelijk van het moment waarop Greenchoice de levering start. De uiteindelijke looptijd kan maximaal 22 dagen korter of 9 dagen langer zijn.">
                                    <i class="fontello-icons icon-info-circle"></i>
                                </a>
                            </div>
                        </div>
                    </header>
                    <div class="choice">
                        <p>Onderstaand overzicht is gebaseerd op de volgende situatie:</p>
                        <div double-meter="">
                            <dl apiprice-combined="" apiprice-power="">
                                <dt>Stroomverbruik:</dt>
                                <dd>
                                    <span gc-usage-power-high="">2700</span> kWh (normaal) en
                                    <span gc-usage-power-low="">3300</span> kWh (dal) per jaar</dd>
                            </dl>
                        </div>
                        <div double-meter="">
                            <dl apiprice-combined="" apiprice-power="">
                                <dt>Stroomtelwerk:</dt>
                                <dd>Dubbel (normaal én dal)</dd>
                            </dl>
                        </div>
                        <div single-meter="">
                            <dl apiprice-combined="" apiprice-power="">
                                <dt>Stroomverbruik:</dt>
                                <dd>
                                    <span gc-usage-power="">6000</span> kWh</dd>
                            </dl>
                        </div>
                        <div single-meter="">
                            <dl apiprice-combined="" apiprice-power="">
                                <dt>Stroomtelwerk:</dt>
                                <dd>Enkel</dd>
                            </dl>
                        </div>
                        <dl apiprice-combined="" apiprice-gas="">
                            <dt>Gasverbruik:</dt>
                            <dd>
                                <span gc-usage-gas="">2000</span> m
                                <sup>3</sup> per jaar</dd>
                        </dl>
                        <dl>
                            <dt>Postcode:</dt>
                            <dd>
                                <span gc-location="">1000AA</span>
                            </dd>
                        </dl>
                    </div>
                    <div class="tarifs-table" data-termlinkid="11951" data-clusterid="148" data-type="consumer">
                        <div class="field-product-table" apiprice-combined="" apiprice-power="">
                            <table>
                                <thead>
                                    <tr>
                                        <th class="type icon-energy">Groene Stroom</th>
                                        <th>
                                            <span class="infoIncludeTax">Totaal tarief (incl. btw)</span>
                                            <span class="infoExcludeTax" style="display: none;">Totaal tarief (excl. btw)</span>
                                        </th>
                                        <th>Op basis van</th>
                                        <th>
                                            <span class="infoIncludeTax">Totaal (incl. btw)</span>
                                            <span class="infoExcludeTax" style="display: none;">Totaal (excl. btw)</span>
                                        </th>
                                        <th class="expand"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr single-meter="">
                                        <td>Tarief</td>
                                        <td class="sing">
                                            <span>€</span>0,2226 x</td>
                                        <td>6000 kWh =</td>
                                        <td class="sing">
                                            <span>€</span>
                                            <strong>1335,69</strong>
                                        </td>
                                        <td class="expand">
                                            <a href="#" title="More">More</a>
                                        </td>
                                    </tr>
                                    <tr single-meter="">
                                        <td colspan="5" class="accord">
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td class="type">
                                                            <span class="infoIncludeTax">Levering (excl. btw)</span>
                                                            <span class="infoExcludeTax" style="display: none;">Levering (incl. btw)</span>
                                                        </td>
                                                        <td class="sing">
                                                            <span>€</span>0,0662 x</td>
                                                        <td>6000 kWh =</td>
                                                        <td class="sing">
                                                            <span>€</span>
                                                            <strong>397,20</strong>
                                                        </td>
                                                        <td class="expand"></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="type">
                                                            <span class="infoIncludeTax">Opslag Duurzame Energie (excl. btw)</span>
                                                            <span class="infoExcludeTax" style="display: none;">Opslag Duurzame Energie (incl. btw)</span>
                                                        </td>
                                                        <td class="sing">
                                                            <span>€</span>0,0132 x</td>
                                                        <td>6000 kWh =</td>
                                                        <td class="sing">
                                                            <span>€</span>
                                                            <strong>79,20</strong>
                                                        </td>
                                                        <td class="expand"></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="type">
                                                            <span class="infoIncludeTax">Energiebelasting (excl. btw)</span>
                                                            <span class="infoExcludeTax" style="display: none;">Energiebelasting (incl. btw)</span>
                                                        </td>
                                                        <td class="sing">
                                                            <span>€</span>0,1046 x</td>
                                                        <td>6000 kWh =</td>
                                                        <td class="sing">
                                                            <span>€</span>
                                                            <strong>627,48</strong>
                                                        </td>
                                                        <td class="expand"></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="type">21% btw</td>
                                                        <td class="sing">
                                                            <span>€</span>0,0386 x</td>
                                                        <td>6000 kWh =</td>
                                                        <td class="sing">
                                                            <span>€</span>
                                                            <strong>231,81</strong>
                                                        </td>
                                                        <td class="expand"></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr double-meter="">
                                        <td>Normaaltarief</td>
                                        <td class="sing">
                                            <span>€</span>0,2279 x</td>
                                        <td>2700 kWh =</td>
                                        <td class="sing">
                                            <span>€</span>
                                            <strong>615,44</strong>
                                        </td>
                                        <td class="expand">
                                            <a href="#" title="More">More</a>
                                        </td>
                                    </tr>
                                    <tr double-meter="">
                                        <td colspan="5" class="accord">
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td class="type">
                                                            <span class="infoIncludeTax">Levering (excl. btw)</span>
                                                            <span class="infoExcludeTax" style="display: none;">Levering (incl. btw)</span>
                                                        </td>
                                                        <td class="sing">
                                                            <span>€</span>0,0706 x</td>
                                                        <td>2700 kWh =</td>
                                                        <td class="sing">
                                                            <span>€</span>
                                                            <strong>190,62</strong>
                                                        </td>
                                                        <td class="expand"></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="type">
                                                            <span class="infoIncludeTax">Opslag Duurzame Energie (excl. btw)</span>
                                                            <span class="infoExcludeTax" style="display: none;">Opslag Duurzame Energie (incl. btw)</span>
                                                        </td>
                                                        <td class="sing">
                                                            <span>€</span>0,0132 x</td>
                                                        <td>2700 kWh =</td>
                                                        <td class="sing">
                                                            <span>€</span>
                                                            <strong>35,64</strong>
                                                        </td>
                                                        <td class="expand"></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="type">
                                                            <span class="infoIncludeTax">Energiebelasting (excl. btw)</span>
                                                            <span class="infoExcludeTax" style="display: none;">Energiebelasting (incl. btw)</span>
                                                        </td>
                                                        <td class="sing">
                                                            <span>€</span>0,1046 x</td>
                                                        <td>2700 kWh =</td>
                                                        <td class="sing">
                                                            <span>€</span>
                                                            <strong>282,37</strong>
                                                        </td>
                                                        <td class="expand"></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="type">21% btw</td>
                                                        <td class="sing">
                                                            <span>€</span>0,0396 x</td>
                                                        <td>2700 kWh =</td>
                                                        <td class="sing">
                                                            <span>€</span>
                                                            <strong>106,81</strong>
                                                        </td>
                                                        <td class="expand"></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr double-meter="">
                                        <td>Daltarief</td>
                                        <td class="sing">
                                            <span>€</span>0,2161 x</td>
                                        <td>3300 kWh =</td>
                                        <td class="sing">
                                            <span>€</span>
                                            <strong>713,07</strong>
                                        </td>
                                        <td class="expand">
                                            <a href="#" title="More">More</a>
                                        </td>
                                    </tr>
                                    <tr double-meter="">
                                        <td colspan="5" class="accord">
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td class="type">
                                                            <span class="infoIncludeTax">Levering (excl. btw)</span>
                                                            <span class="infoExcludeTax" style="display: none;">Levering (incl. btw)</span>
                                                        </td>
                                                        <td class="sing">
                                                            <span>€</span>0,0608 x</td>
                                                        <td>3300 kWh =</td>
                                                        <td class="sing">
                                                            <span>€</span>
                                                            <strong>200,64</strong>
                                                        </td>
                                                        <td class="expand"></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="type">
                                                            <span class="infoIncludeTax">Opslag Duurzame Energie (excl. btw)</span>
                                                            <span class="infoExcludeTax" style="display: none;">Opslag Duurzame Energie (incl. btw)</span>
                                                        </td>
                                                        <td class="sing">
                                                            <span>€</span>0,0132 x</td>
                                                        <td>3300 kWh =</td>
                                                        <td class="sing">
                                                            <span>€</span>
                                                            <strong>43,56</strong>
                                                        </td>
                                                        <td class="expand"></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="type">
                                                            <span class="infoIncludeTax">Energiebelasting (excl. btw)</span>
                                                            <span class="infoExcludeTax" style="display: none;">Energiebelasting (incl. btw)</span>
                                                        </td>
                                                        <td class="sing">
                                                            <span>€</span>0,1046 x</td>
                                                        <td>3300 kWh =</td>
                                                        <td class="sing">
                                                            <span>€</span>
                                                            <strong>345,11</strong>
                                                        </td>
                                                        <td class="expand"></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="type">21% btw</td>
                                                        <td class="sing">
                                                            <span>€</span>0,0375 x</td>
                                                        <td>3300 kWh =</td>
                                                        <td class="sing">
                                                            <span>€</span>
                                                            <strong>123,76</strong>
                                                        </td>
                                                        <td class="expand"></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Vaste leveringskosten</td>
                                        <td class="sing">
                                            <span>€</span>3,3275 x</td>
                                        <td>12 mnd =</td>
                                        <td class="sing">
                                            <span>€</span>
                                            <strong>39,93</strong>
                                        </td>
                                        <td class="expand"></td>
                                    </tr>
                                    <tr>
                                        <td>Netbeheerkosten</td>
                                        <td class="sing">
                                            <span>€</span>20,9968 x</td>
                                        <td>12 mnd =</td>
                                        <td class="sing">
                                            <span>€</span>
                                            <strong>251,96</strong>
                                        </td>
                                        <td class="expand"></td>
                                    </tr>
                                    <tr>
                                        <td>Vermindering energiebelasting</td>
                                        <td class="sing">
                                            <span>€</span>-373,33 x</td>
                                        <td>1 jr =</td>
                                        <td class="sing">
                                            <span>€</span>
                                            <strong>-373,33</strong>
                                        </td>
                                        <td class="expand"></td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td class="sing">
                                            <span>€</span>
                                            <strong>252,48</strong> per jaar</td>
                                        <td class="expand"></td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                        <div class="field-product-table" apiprice-combined="" apiprice-gas="">
                            <table>
                                <thead>
                                    <tr>
                                        <th class="type icon-gas">Groen gas</th>
                                        <th>
                                            <span class="infoIncludeTax">Totaal tarief (incl. btw)</span>
                                            <span class="infoExcludeTax" style="display: none;">Totaal tarief (excl. btw)</span>
                                        </th>
                                        <th>Op basis van</th>
                                        <th>
                                            <span class="infoIncludeTax">Totaal (incl. btw)</span>
                                            <span class="infoExcludeTax" style="display: none;">Totaal (excl. btw)</span>
                                        </th>
                                        <th class="expand"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Tarief</td>
                                        <td class="sing">
                                            <span>€</span>0,6818 x</td>
                                        <td>2000 m
                                            <sup>3</sup> =</td>
                                        <td class="sing">
                                            <span>€</span>
                                            <strong>1363,69</strong>
                                        </td>
                                        <td class="expand">
                                            <a href="#" title="More">More</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="5" class="accord">
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td class="type">
                                                            <span class="infoIncludeTax">Levering (excl. btw)</span>
                                                            <span class="infoExcludeTax" style="display: none;">Levering (incl. btw)</span>
                                                        </td>
                                                        <td class="sing">
                                                            <span>€</span>0,2750 x</td>
                                                        <td>2000 m
                                                            <sup>3</sup> =</td>
                                                        <td class="sing">
                                                            <span>€</span>
                                                            <strong>550,00</strong>
                                                        </td>
                                                        <td class="expand"></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="type">
                                                            <span class="infoIncludeTax">Opslag Duurzame Energie (excl. btw)</span>
                                                            <span class="infoExcludeTax" style="display: none;">Opslag Duurzame Energie (incl. btw)</span>
                                                        </td>
                                                        <td class="sing">
                                                            <span>€</span>0,0285 x</td>
                                                        <td>2000 m
                                                            <sup>3</sup> =</td>
                                                        <td class="sing">
                                                            <span>€</span>
                                                            <strong>57,00</strong>
                                                        </td>
                                                        <td class="expand"></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="type">
                                                            <span class="infoIncludeTax">Energiebelasting (excl. btw)</span>
                                                            <span class="infoExcludeTax" style="display: none;">Energiebelasting (incl. btw)</span>
                                                        </td>
                                                        <td class="sing">
                                                            <span>€</span>0,2600 x</td>
                                                        <td>2000 m
                                                            <sup>3</sup> =</td>
                                                        <td class="sing">
                                                            <span>€</span>
                                                            <strong>520,02</strong>
                                                        </td>
                                                        <td class="expand"></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="type">21% btw</td>
                                                        <td class="sing">
                                                            <span>€</span>0,1183 x</td>
                                                        <td>2000 m
                                                            <sup>3</sup> =</td>
                                                        <td class="sing">
                                                            <span>€</span>
                                                            <strong>236,67</strong>
                                                        </td>
                                                        <td class="expand"></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Vaste leveringskosten</td>
                                        <td class="sing">
                                            <span>€</span>3,3275 x</td>
                                        <td>12 mnd =</td>
                                        <td class="sing">
                                            <span>€</span>
                                            <strong>39,93</strong>
                                        </td>
                                        <td class="expand"></td>
                                    </tr>
                                    <tr>
                                        <td>Netbeheerkosten</td>
                                        <td class="sing">
                                            <span>€</span>16,0687 x</td>
                                        <td>12 mnd =</td>
                                        <td class="sing">
                                            <span>€</span>
                                            <strong>192,82</strong>
                                        </td>
                                        <td class="expand"></td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td class="sing">
                                            <span>€</span>
                                            <strong>982,79</strong> per jaar</td>
                                        <td class="expand"></td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                    <p>
                        <sub>Het totaal tarief (incl. btw) is inclusief overheidsheffingen en btw. De overheidsheffingen en netbeheerkosten
                            gelden voor het kalenderjaar 2018. De overheidsheffingen gelden voor een maximaal jaarverbruik
                            van 10.000 kWh stroom en 170.000 m3 gas. Bij een hoger verbruik hoort een ander tarief van de
                            overheidsheffingen en varieert het totaal tarief. De netbeheerkosten kunnen wijzigen per kalenderjaar
                            of tussentijds als de aansluitwaarde van de aansluiting verandert. Deze berekening is gebaseerd
                            op een gemiddelde grootte van de aansluitingen (3x25A voor stroom en G6 voor gas). De kosten
                            kunnen afwijken van de kosten die o.b.v. het verbruik maandelijks in rekening worden gebracht.</sub>
                    </p>
                    <br>
                    <footer>
                        <div class="gc-product-term
           
           
           gc-product-term--show-3" data-termlinkid="11951">
                            <div product-term-zero="">Variabel tarief</div>
                            <div product-term-one="">Vast tarief voor 12 maanden
                                <a rel="tooltip" title="Start Greenchoice de levering niet per de eerste van de maand, dan is de looptijd die voor u van toepassing is afhankelijk van het moment waarop Greenchoice de levering start. De uiteindelijke looptijd kan maximaal 22 dagen korter of 9 dagen langer zijn.">
                                    <i class="fontello-icons icon-info-circle"></i>
                                </a>
                            </div>
                            <div product-term-three="">Vast tarief voor 36 maanden
                                <a rel="tooltip" title="Start Greenchoice de levering niet per de eerste van de maand, dan is de looptijd die voor u van toepassing is afhankelijk van het moment waarop Greenchoice de levering start. De uiteindelijke looptijd kan maximaal 22 dagen korter of 9 dagen langer zijn.">
                                    <i class="fontello-icons icon-info-circle"></i>
                                </a>
                            </div>
                        </div>
                        <p class="field-price-month" apiprice-linked="" data-pricelinkid="11989_11951">
                            <span apiprice-combined="">
                                <span class="sign">€</span>
                                <span apiprice-int="">102</span>,
                                <sup apiprice-dec="">94</sup>
                            </span>
                            <span apiprice-gas="">
                                <span class="sign">€</span>
                                <span apiprice-int="">81</span>,
                                <sup apiprice-dec="">90</sup>
                            </span>
                            <span apiprice-power="">
                                <span class="sign">€</span>
                                <span apiprice-int="">21</span>,
                                <sup apiprice-dec="">04</sup>
                            </span>
                            <span class="time">/maand</span>
                        </p>
                        <p class="field-price-year" apiprice-linked="" apiprice-year="" data-pricelinkid="11989_11951">
                            <span apiprice-combined="">
                                <span class="sign">€</span>
                                <span apiprice-int="">1.235</span>,
                                <sup apiprice-dec="">27</sup>
                            </span>
                            <span apiprice-gas="">
                                <span class="sign">€</span>
                                <span apiprice-int="">982</span>,
                                <sup apiprice-dec="">79</sup>
                            </span>
                            <span apiprice-power="">
                                <span class="sign">€</span>
                                <span apiprice-int="">252</span>,
                                <sup apiprice-dec="">48</sup>
                            </span>
                            <span class="time">/jaar</span>
                        </p>
                        <p>
                            <a href="https://www.greenchoice.nl/tarieven/groenuitnederland/aanmelden/" class="btn-default arrow" title="Aanmelden">
                                <span>
                                    Aanmelden
                                </span>
                            </a>
                        </p>
                        <p class="details">
                            <a href="https://www.greenchoice.nl/tarieven/groenuitnederland/" title="Meer informatie">
                                Meer informatie
                            </a>
                        </p>
                    </footer>
                </div>
                <article class="block-product-selection   gc-product-source  " data-sourcelinkid="11950">
                    <header style="height: auto;">
                        <h3 class="icon-wind">
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">
                                    Wind from the Netherlands
                                </font>
                            </font>
                        </h3>
                        <p>
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">
                                    100% wind and forest compensated gas
                                </font>
                            </font>
                        </p>
                    </header>


                    <p class="link-compare close">
                        <a href="#">
                            <span class="close">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">View product label</font>
                                </font>
                            </span>
                            <span class="open">Verberg productetiket</span>
                        </a>
                    </p>
                    <div class="accord-compare hide">
                        <div>
                            <div>
                                <h4>
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">Green power</font>
                                    </font>
                                </h4>



                                <div class="chart-figure" data-graph="NL Wind, 100, #7AC1E7" style="height: 254px;">
                                    <div style="position: relative;">
                                        <div dir="ltr" style="position: relative; width: 242px; height: 242px;">
                                            <div style="position: absolute; left: 0px; top: 0px; width: 100%; height: 100%;" aria-label="A chart.">
                                                <svg width="242" height="242" aria-label="A chart." style="overflow: hidden;">
                                                    <defs id="defs"></defs>
                                                    <g>
                                                        <ellipse cx="121" cy="121" rx="109" ry="109" stroke="#ffffff" stroke-width="1" fill="#7ac1e7"></ellipse>
                                                        <text text-anchor="start" x="99" y="127.3" font-family="ff-dax-web" font-size="18" stroke="none" stroke-width="0" fill="#ffffff">100%</text>
                                                    </g>
                                                    <g></g>
                                                </svg>
                                                <div aria-label="A tabular representation of the data in the chart." style="position: absolute; left: -10000px; top: auto; width: 1px; height: 1px; overflow: hidden;">
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                                <th>Type</th>
                                                                <th>Slices</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>NL Wind</td>
                                                                <td>100</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div aria-hidden="true" style="display: none; position: absolute; top: 252px; left: 252px; white-space: nowrap; font-family: ff-dax-web; font-size: 18px;">100%</div>
                                        <div></div>
                                    </div>
                                </div>
                                <table class="chart-legend">
                                    <tbody>
                                        <tr>
                                            <td class="icon icon-wind" style="background: #7AC1E7;"></td>
                                            <td>
                                                <font style="vertical-align: inherit;">
                                                    <font style="vertical-align: inherit;">NL Wind</font>
                                                </font>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <h4>
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">Green gas</font>
                                    </font>
                                </h4>



                                <div class="chart-figure" data-graph="Bosgecompenseerd, 100, #A4CF27" style="height: 254px;">
                                    <div style="position: relative;">
                                        <div dir="ltr" style="position: relative; width: 242px; height: 242px;">
                                            <div style="position: absolute; left: 0px; top: 0px; width: 100%; height: 100%;" aria-label="A chart.">
                                                <svg width="242" height="242" aria-label="A chart." style="overflow: hidden;">
                                                    <defs id="defs"></defs>
                                                    <g>
                                                        <ellipse cx="121" cy="121" rx="109" ry="109" stroke="#ffffff" stroke-width="1" fill="#a4cf27"></ellipse>
                                                        <text text-anchor="start" x="99" y="127.3" font-family="ff-dax-web" font-size="18" stroke="none" stroke-width="0" fill="#ffffff">100%</text>
                                                    </g>
                                                    <g></g>
                                                </svg>
                                                <div aria-label="A tabular representation of the data in the chart." style="position: absolute; left: -10000px; top: auto; width: 1px; height: 1px; overflow: hidden;">
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                                <th>Type</th>
                                                                <th>Slices</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>Bosgecompenseerd</td>
                                                                <td>100</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div aria-hidden="true" style="display: none; position: absolute; top: 252px; left: 252px; white-space: nowrap; font-family: ff-dax-web; font-size: 18px;">100%</div>
                                        <div></div>
                                    </div>
                                </div>
                                <table class="chart-legend">
                                    <tbody>
                                        <tr>
                                            <td class="icon icon-forest" style="background: #A4CF27;"></td>
                                            <td>
                                                <font style="vertical-align: inherit;">
                                                    <font style="vertical-align: inherit;">Forest compensated</font>
                                                </font>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>


                    <h4>
                        <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">Choose the term</font>
                        </font>
                    </h4>
                    <ul class="field-product-period field-product-period-term" data-productid="11950">
                        <li>
                            <label for="term_product_11950_1">
                                <input type="radio" name="term_product_11950" id="term_product_11950_1" data-term="1" data-clusterid="144" style="opacity: 0;">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">
                                        1 year
                                    </font>
                                </font>
                            </label>
                        </li>
                        <li class="active">
                            <label for="term_product_11950_3">
                                <input type="radio" name="term_product_11950" id="term_product_11950_3" data-term="3" data-clusterid="145" checked="checked"
                                    style="opacity: 0;">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">
                                        3 years
                                    </font>
                                </font>
                            </label>
                        </li>
                        <li>
                            <label for="term_product_11950_0">
                                <input type="radio" name="term_product_11950" id="term_product_11950_0" data-term="0" data-clusterid="146" style="opacity: 0;">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">
                                        variable
                                    </font>
                                </font>
                            </label>
                        </li>
                    </ul>
                    <div class="field-product-period-label gc-product-term
          
          
          gc-product-term--show-3
          " data-termlinkid="11950">
                        <div product-term-zero="">
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">Variable rate</font>
                            </font>
                        </div>
                        <div product-term-one="">
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">Fixed rate for 12 months </font>
                            </font>
                            <a rel="tooltip" data-tippy="" data-original-title="Start Greenchoice de levering niet per de eerste van de maand, dan is de looptijd die voor u van toepassing is afhankelijk van het moment waarop Greenchoice de levering start. De uiteindelijke looptijd kan maximaal 22 dagen korter of 9 dagen langer zijn.">
                                <i class="fontello-icons icon-info-circle"></i>
                            </a>
                        </div>
                        <div product-term-three="">
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">Fixed rate for 36 months </font>
                            </font>
                            <a rel="tooltip" data-tippy="" data-original-title="Start Greenchoice de levering niet per de eerste van de maand, dan is de looptijd die voor u van toepassing is afhankelijk van het moment waarop Greenchoice de levering start. De uiteindelijke looptijd kan maximaal 22 dagen korter of 9 dagen langer zijn.">
                                <i class="fontello-icons icon-info-circle"></i>
                            </a>
                        </div>
                        <div product-term-five="">
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">Fixed rate for 60 months </font>
                            </font>
                            <a rel="tooltip" data-tippy="" data-original-title="Start Greenchoice de levering niet per de eerste van de maand, dan is de looptijd die voor u van toepassing is afhankelijk van het moment waarop Greenchoice de levering start. De uiteindelijke looptijd kan maximaal 22 dagen korter of 9 dagen langer zijn.">
                                <i class="fontello-icons icon-info-circle"></i>
                            </a>
                        </div>

                    </div>
                    <p class="field-price-month js-apiprice-animation" apiprice="" data-clusterid="145" data-termlinkid="11950" data-sourcelinkid="11950"
                        data-pricelinkid="11989_11950">
                        <span apiprice-combined="">
                            <span class="sign">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">€ </font>
                                </font>
                            </span>
                            <span apiprice-int="">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">102</font>
                                </font>
                            </span>
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;"> , </font>
                            </font>
                            <sup apiprice-dec="">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">94 </font>
                                </font>
                            </sup>
                        </span>
                        <font style="vertical-align: inherit;">
                            <span apiprice-gas="">
                                <span class="sign">
                                    <font style="vertical-align: inherit;">€ </font>
                                </span>
                            </span>
                            <span apiprice-gas="">
                                <span apiprice-int="">
                                    <font style="vertical-align: inherit;">81</font>
                                </span>
                            </span>
                            <span apiprice-gas="">
                                <font style="vertical-align: inherit;"> , </font>
                            </span>
                            <span apiprice-gas="">
                                <sup apiprice-dec="">
                                    <font style="vertical-align: inherit;">90 </font>
                                </sup>
                            </span>
                            <span apiprice-power="">
                                <span class="sign">
                                    <font style="vertical-align: inherit;">€ </font>
                                </span>
                            </span>
                            <span apiprice-power="">
                                <span apiprice-int="">
                                    <font style="vertical-align: inherit;">21</font>
                                </span>
                            </span>
                            <span apiprice-power="">
                                <font style="vertical-align: inherit;"> , </font>
                            </span>
                            <span apiprice-power="">
                                <sup apiprice-dec="">
                                    <font style="vertical-align: inherit;">04</font>
                                </sup>
                            </span>
                            <span class="time">
                                <font style="vertical-align: inherit;"> / month</font>
                            </span>
                        </font>
                        <span apiprice-gas="">
                            <span class="sign">
                                <font style="vertical-align: inherit;"></font>
                            </span>
                            <span apiprice-int="">
                                <font style="vertical-align: inherit;"></font>
                            </span>
                            <font style="vertical-align: inherit;"></font>
                            <sup apiprice-dec="">
                                <font style="vertical-align: inherit;"></font>
                            </sup>
                        </span>
                        <span apiprice-power="">
                            <span class="sign">
                                <font style="vertical-align: inherit;"></font>
                            </span>
                            <span apiprice-int="">
                                <font style="vertical-align: inherit;"></font>
                            </span>
                            <font style="vertical-align: inherit;"></font>
                            <sup apiprice-dec="">
                                <font style="vertical-align: inherit;"></font>
                            </sup>
                        </span>
                        <span class="time">
                            <font style="vertical-align: inherit;"></font>
                        </span>
                    </p>
                    <p class="action u-margin-top">
                        <a href="https://www.greenchoice.nl/tarieven/winduitnederland/aanmelden/" class="btn" title="Sign Up">
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">
                                    Sign Up
                                </font>
                            </font>
                        </a>
                    </p>
                    <p>
                        <a class="lightbox" href="#tarieven_overlay_11950" title="Tariff specification">
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">
                                    Tariff specification
                                </font>
                            </font>
                        </a>
                    </p>
                    <p>
                        <a href="https://www.greenchoice.nl/tarieven/winduitnederland/" title="More information">
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">
                                    More information
                                </font>
                            </font>
                        </a>
                    </p>
                </article>
                <div class="cmn-modal-content" id="tarieven_overlay_11950">
                    <header>
                        <h2>Tarievenspecificatie</h2>
                        <div class="gc-product-term
           
           
           gc-product-term--show-3" data-termlinkid="11950">
                            <div product-term-zero="">Variabel tarief</div>
                            <div product-term-one="">Vast tarief voor 12 maanden
                                <a rel="tooltip" title="Start Greenchoice de levering niet per de eerste van de maand, dan is de looptijd die voor u van toepassing is afhankelijk van het moment waarop Greenchoice de levering start. De uiteindelijke looptijd kan maximaal 22 dagen korter of 9 dagen langer zijn.">
                                    <i class="fontello-icons icon-info-circle"></i>
                                </a>
                            </div>
                            <div product-term-three="">Vast tarief voor 36 maanden
                                <a rel="tooltip" title="Start Greenchoice de levering niet per de eerste van de maand, dan is de looptijd die voor u van toepassing is afhankelijk van het moment waarop Greenchoice de levering start. De uiteindelijke looptijd kan maximaal 22 dagen korter of 9 dagen langer zijn.">
                                    <i class="fontello-icons icon-info-circle"></i>
                                </a>
                            </div>
                        </div>
                    </header>
                    <div class="choice">
                        <p>Onderstaand overzicht is gebaseerd op de volgende situatie:</p>
                        <div double-meter="">
                            <dl apiprice-combined="" apiprice-power="">
                                <dt>Stroomverbruik:</dt>
                                <dd>
                                    <span gc-usage-power-high="">2700</span> kWh (normaal) en
                                    <span gc-usage-power-low="">3300</span> kWh (dal) per jaar</dd>
                            </dl>
                        </div>
                        <div double-meter="">
                            <dl apiprice-combined="" apiprice-power="">
                                <dt>Stroomtelwerk:</dt>
                                <dd>Dubbel (normaal én dal)</dd>
                            </dl>
                        </div>
                        <div single-meter="">
                            <dl apiprice-combined="" apiprice-power="">
                                <dt>Stroomverbruik:</dt>
                                <dd>
                                    <span gc-usage-power="">6000</span> kWh</dd>
                            </dl>
                        </div>
                        <div single-meter="">
                            <dl apiprice-combined="" apiprice-power="">
                                <dt>Stroomtelwerk:</dt>
                                <dd>Enkel</dd>
                            </dl>
                        </div>
                        <dl apiprice-combined="" apiprice-gas="">
                            <dt>Gasverbruik:</dt>
                            <dd>
                                <span gc-usage-gas="">2000</span> m
                                <sup>3</sup> per jaar</dd>
                        </dl>
                        <dl>
                            <dt>Postcode:</dt>
                            <dd>
                                <span gc-location="">1000AA</span>
                            </dd>
                        </dl>
                    </div>
                    <div class="tarifs-table" data-termlinkid="11950" data-clusterid="145" data-type="consumer">
                        <div class="field-product-table" apiprice-combined="" apiprice-power="">
                            <table>
                                <thead>
                                    <tr>
                                        <th class="type icon-energy">Groene Stroom</th>
                                        <th>
                                            <span class="infoIncludeTax">Totaal tarief (incl. btw)</span>
                                            <span class="infoExcludeTax" style="display: none;">Totaal tarief (excl. btw)</span>
                                        </th>
                                        <th>Op basis van</th>
                                        <th>
                                            <span class="infoIncludeTax">Totaal (incl. btw)</span>
                                            <span class="infoExcludeTax" style="display: none;">Totaal (excl. btw)</span>
                                        </th>
                                        <th class="expand"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr single-meter="">
                                        <td>Tarief</td>
                                        <td class="sing">
                                            <span>€</span>0,2226 x</td>
                                        <td>6000 kWh =</td>
                                        <td class="sing">
                                            <span>€</span>
                                            <strong>1335,69</strong>
                                        </td>
                                        <td class="expand">
                                            <a href="#" title="More">More</a>
                                        </td>
                                    </tr>
                                    <tr single-meter="">
                                        <td colspan="5" class="accord">
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td class="type">
                                                            <span class="infoIncludeTax">Levering (excl. btw)</span>
                                                            <span class="infoExcludeTax" style="display: none;">Levering (incl. btw)</span>
                                                        </td>
                                                        <td class="sing">
                                                            <span>€</span>0,0662 x</td>
                                                        <td>6000 kWh =</td>
                                                        <td class="sing">
                                                            <span>€</span>
                                                            <strong>397,20</strong>
                                                        </td>
                                                        <td class="expand"></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="type">
                                                            <span class="infoIncludeTax">Opslag Duurzame Energie (excl. btw)</span>
                                                            <span class="infoExcludeTax" style="display: none;">Opslag Duurzame Energie (incl. btw)</span>
                                                        </td>
                                                        <td class="sing">
                                                            <span>€</span>0,0132 x</td>
                                                        <td>6000 kWh =</td>
                                                        <td class="sing">
                                                            <span>€</span>
                                                            <strong>79,20</strong>
                                                        </td>
                                                        <td class="expand"></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="type">
                                                            <span class="infoIncludeTax">Energiebelasting (excl. btw)</span>
                                                            <span class="infoExcludeTax" style="display: none;">Energiebelasting (incl. btw)</span>
                                                        </td>
                                                        <td class="sing">
                                                            <span>€</span>0,1046 x</td>
                                                        <td>6000 kWh =</td>
                                                        <td class="sing">
                                                            <span>€</span>
                                                            <strong>627,48</strong>
                                                        </td>
                                                        <td class="expand"></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="type">21% btw</td>
                                                        <td class="sing">
                                                            <span>€</span>0,0386 x</td>
                                                        <td>6000 kWh =</td>
                                                        <td class="sing">
                                                            <span>€</span>
                                                            <strong>231,81</strong>
                                                        </td>
                                                        <td class="expand"></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr double-meter="">
                                        <td>Normaaltarief</td>
                                        <td class="sing">
                                            <span>€</span>0,2279 x</td>
                                        <td>2700 kWh =</td>
                                        <td class="sing">
                                            <span>€</span>
                                            <strong>615,44</strong>
                                        </td>
                                        <td class="expand">
                                            <a href="#" title="More">More</a>
                                        </td>
                                    </tr>
                                    <tr double-meter="">
                                        <td colspan="5" class="accord">
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td class="type">
                                                            <span class="infoIncludeTax">Levering (excl. btw)</span>
                                                            <span class="infoExcludeTax" style="display: none;">Levering (incl. btw)</span>
                                                        </td>
                                                        <td class="sing">
                                                            <span>€</span>0,0706 x</td>
                                                        <td>2700 kWh =</td>
                                                        <td class="sing">
                                                            <span>€</span>
                                                            <strong>190,62</strong>
                                                        </td>
                                                        <td class="expand"></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="type">
                                                            <span class="infoIncludeTax">Opslag Duurzame Energie (excl. btw)</span>
                                                            <span class="infoExcludeTax" style="display: none;">Opslag Duurzame Energie (incl. btw)</span>
                                                        </td>
                                                        <td class="sing">
                                                            <span>€</span>0,0132 x</td>
                                                        <td>2700 kWh =</td>
                                                        <td class="sing">
                                                            <span>€</span>
                                                            <strong>35,64</strong>
                                                        </td>
                                                        <td class="expand"></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="type">
                                                            <span class="infoIncludeTax">Energiebelasting (excl. btw)</span>
                                                            <span class="infoExcludeTax" style="display: none;">Energiebelasting (incl. btw)</span>
                                                        </td>
                                                        <td class="sing">
                                                            <span>€</span>0,1046 x</td>
                                                        <td>2700 kWh =</td>
                                                        <td class="sing">
                                                            <span>€</span>
                                                            <strong>282,37</strong>
                                                        </td>
                                                        <td class="expand"></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="type">21% btw</td>
                                                        <td class="sing">
                                                            <span>€</span>0,0396 x</td>
                                                        <td>2700 kWh =</td>
                                                        <td class="sing">
                                                            <span>€</span>
                                                            <strong>106,81</strong>
                                                        </td>
                                                        <td class="expand"></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr double-meter="">
                                        <td>Daltarief</td>
                                        <td class="sing">
                                            <span>€</span>0,2161 x</td>
                                        <td>3300 kWh =</td>
                                        <td class="sing">
                                            <span>€</span>
                                            <strong>713,07</strong>
                                        </td>
                                        <td class="expand">
                                            <a href="#" title="More">More</a>
                                        </td>
                                    </tr>
                                    <tr double-meter="">
                                        <td colspan="5" class="accord">
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td class="type">
                                                            <span class="infoIncludeTax">Levering (excl. btw)</span>
                                                            <span class="infoExcludeTax" style="display: none;">Levering (incl. btw)</span>
                                                        </td>
                                                        <td class="sing">
                                                            <span>€</span>0,0608 x</td>
                                                        <td>3300 kWh =</td>
                                                        <td class="sing">
                                                            <span>€</span>
                                                            <strong>200,64</strong>
                                                        </td>
                                                        <td class="expand"></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="type">
                                                            <span class="infoIncludeTax">Opslag Duurzame Energie (excl. btw)</span>
                                                            <span class="infoExcludeTax" style="display: none;">Opslag Duurzame Energie (incl. btw)</span>
                                                        </td>
                                                        <td class="sing">
                                                            <span>€</span>0,0132 x</td>
                                                        <td>3300 kWh =</td>
                                                        <td class="sing">
                                                            <span>€</span>
                                                            <strong>43,56</strong>
                                                        </td>
                                                        <td class="expand"></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="type">
                                                            <span class="infoIncludeTax">Energiebelasting (excl. btw)</span>
                                                            <span class="infoExcludeTax" style="display: none;">Energiebelasting (incl. btw)</span>
                                                        </td>
                                                        <td class="sing">
                                                            <span>€</span>0,1046 x</td>
                                                        <td>3300 kWh =</td>
                                                        <td class="sing">
                                                            <span>€</span>
                                                            <strong>345,11</strong>
                                                        </td>
                                                        <td class="expand"></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="type">21% btw</td>
                                                        <td class="sing">
                                                            <span>€</span>0,0375 x</td>
                                                        <td>3300 kWh =</td>
                                                        <td class="sing">
                                                            <span>€</span>
                                                            <strong>123,76</strong>
                                                        </td>
                                                        <td class="expand"></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Vaste leveringskosten</td>
                                        <td class="sing">
                                            <span>€</span>3,3275 x</td>
                                        <td>12 mnd =</td>
                                        <td class="sing">
                                            <span>€</span>
                                            <strong>39,93</strong>
                                        </td>
                                        <td class="expand"></td>
                                    </tr>
                                    <tr>
                                        <td>Netbeheerkosten</td>
                                        <td class="sing">
                                            <span>€</span>20,9968 x</td>
                                        <td>12 mnd =</td>
                                        <td class="sing">
                                            <span>€</span>
                                            <strong>251,96</strong>
                                        </td>
                                        <td class="expand"></td>
                                    </tr>
                                    <tr>
                                        <td>Vermindering energiebelasting</td>
                                        <td class="sing">
                                            <span>€</span>-373,33 x</td>
                                        <td>1 jr =</td>
                                        <td class="sing">
                                            <span>€</span>
                                            <strong>-373,33</strong>
                                        </td>
                                        <td class="expand"></td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td class="sing">
                                            <span>€</span>
                                            <strong>252,48</strong> per jaar</td>
                                        <td class="expand"></td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                        <div class="field-product-table" apiprice-combined="" apiprice-gas="">
                            <table>
                                <thead>
                                    <tr>
                                        <th class="type icon-gas">Groen gas</th>
                                        <th>
                                            <span class="infoIncludeTax">Totaal tarief (incl. btw)</span>
                                            <span class="infoExcludeTax" style="display: none;">Totaal tarief (excl. btw)</span>
                                        </th>
                                        <th>Op basis van</th>
                                        <th>
                                            <span class="infoIncludeTax">Totaal (incl. btw)</span>
                                            <span class="infoExcludeTax" style="display: none;">Totaal (excl. btw)</span>
                                        </th>
                                        <th class="expand"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Tarief</td>
                                        <td class="sing">
                                            <span>€</span>0,6818 x</td>
                                        <td>2000 m
                                            <sup>3</sup> =</td>
                                        <td class="sing">
                                            <span>€</span>
                                            <strong>1363,69</strong>
                                        </td>
                                        <td class="expand">
                                            <a href="#" title="More">More</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="5" class="accord">
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td class="type">
                                                            <span class="infoIncludeTax">Levering (excl. btw)</span>
                                                            <span class="infoExcludeTax" style="display: none;">Levering (incl. btw)</span>
                                                        </td>
                                                        <td class="sing">
                                                            <span>€</span>0,2750 x</td>
                                                        <td>2000 m
                                                            <sup>3</sup> =</td>
                                                        <td class="sing">
                                                            <span>€</span>
                                                            <strong>550,00</strong>
                                                        </td>
                                                        <td class="expand"></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="type">
                                                            <span class="infoIncludeTax">Opslag Duurzame Energie (excl. btw)</span>
                                                            <span class="infoExcludeTax" style="display: none;">Opslag Duurzame Energie (incl. btw)</span>
                                                        </td>
                                                        <td class="sing">
                                                            <span>€</span>0,0285 x</td>
                                                        <td>2000 m
                                                            <sup>3</sup> =</td>
                                                        <td class="sing">
                                                            <span>€</span>
                                                            <strong>57,00</strong>
                                                        </td>
                                                        <td class="expand"></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="type">
                                                            <span class="infoIncludeTax">Energiebelasting (excl. btw)</span>
                                                            <span class="infoExcludeTax" style="display: none;">Energiebelasting (incl. btw)</span>
                                                        </td>
                                                        <td class="sing">
                                                            <span>€</span>0,2600 x</td>
                                                        <td>2000 m
                                                            <sup>3</sup> =</td>
                                                        <td class="sing">
                                                            <span>€</span>
                                                            <strong>520,02</strong>
                                                        </td>
                                                        <td class="expand"></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="type">21% btw</td>
                                                        <td class="sing">
                                                            <span>€</span>0,1183 x</td>
                                                        <td>2000 m
                                                            <sup>3</sup> =</td>
                                                        <td class="sing">
                                                            <span>€</span>
                                                            <strong>236,67</strong>
                                                        </td>
                                                        <td class="expand"></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Vaste leveringskosten</td>
                                        <td class="sing">
                                            <span>€</span>3,3275 x</td>
                                        <td>12 mnd =</td>
                                        <td class="sing">
                                            <span>€</span>
                                            <strong>39,93</strong>
                                        </td>
                                        <td class="expand"></td>
                                    </tr>
                                    <tr>
                                        <td>Netbeheerkosten</td>
                                        <td class="sing">
                                            <span>€</span>16,0687 x</td>
                                        <td>12 mnd =</td>
                                        <td class="sing">
                                            <span>€</span>
                                            <strong>192,82</strong>
                                        </td>
                                        <td class="expand"></td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td class="sing">
                                            <span>€</span>
                                            <strong>982,79</strong> per jaar</td>
                                        <td class="expand"></td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                    <p>
                        <sub>Het totaal tarief (incl. btw) is inclusief overheidsheffingen en btw. De overheidsheffingen en netbeheerkosten
                            gelden voor het kalenderjaar 2018. De overheidsheffingen gelden voor een maximaal jaarverbruik
                            van 10.000 kWh stroom en 170.000 m3 gas. Bij een hoger verbruik hoort een ander tarief van de
                            overheidsheffingen en varieert het totaal tarief. De netbeheerkosten kunnen wijzigen per kalenderjaar
                            of tussentijds als de aansluitwaarde van de aansluiting verandert. Deze berekening is gebaseerd
                            op een gemiddelde grootte van de aansluitingen (3x25A voor stroom en G6 voor gas). De kosten
                            kunnen afwijken van de kosten die o.b.v. het verbruik maandelijks in rekening worden gebracht.</sub>
                    </p>
                    <br>
                    <footer>
                        <div class="gc-product-term
           
           
           gc-product-term--show-3" data-termlinkid="11950">
                            <div product-term-zero="">Variabel tarief</div>
                            <div product-term-one="">Vast tarief voor 12 maanden
                                <a rel="tooltip" title="Start Greenchoice de levering niet per de eerste van de maand, dan is de looptijd die voor u van toepassing is afhankelijk van het moment waarop Greenchoice de levering start. De uiteindelijke looptijd kan maximaal 22 dagen korter of 9 dagen langer zijn.">
                                    <i class="fontello-icons icon-info-circle"></i>
                                </a>
                            </div>
                            <div product-term-three="">Vast tarief voor 36 maanden
                                <a rel="tooltip" title="Start Greenchoice de levering niet per de eerste van de maand, dan is de looptijd die voor u van toepassing is afhankelijk van het moment waarop Greenchoice de levering start. De uiteindelijke looptijd kan maximaal 22 dagen korter of 9 dagen langer zijn.">
                                    <i class="fontello-icons icon-info-circle"></i>
                                </a>
                            </div>
                        </div>
                        <p class="field-price-month" apiprice-linked="" data-pricelinkid="11989_11950">
                            <span apiprice-combined="">
                                <span class="sign">€</span>
                                <span apiprice-int="">102</span>,
                                <sup apiprice-dec="">94</sup>
                            </span>
                            <span apiprice-gas="">
                                <span class="sign">€</span>
                                <span apiprice-int="">81</span>,
                                <sup apiprice-dec="">90</sup>
                            </span>
                            <span apiprice-power="">
                                <span class="sign">€</span>
                                <span apiprice-int="">21</span>,
                                <sup apiprice-dec="">04</sup>
                            </span>
                            <span class="time">/maand</span>
                        </p>
                        <p class="field-price-year" apiprice-linked="" apiprice-year="" data-pricelinkid="11989_11950">
                            <span apiprice-combined="">
                                <span class="sign">€</span>
                                <span apiprice-int="">1.235</span>,
                                <sup apiprice-dec="">27</sup>
                            </span>
                            <span apiprice-gas="">
                                <span class="sign">€</span>
                                <span apiprice-int="">982</span>,
                                <sup apiprice-dec="">79</sup>
                            </span>
                            <span apiprice-power="">
                                <span class="sign">€</span>
                                <span apiprice-int="">252</span>,
                                <sup apiprice-dec="">48</sup>
                            </span>
                            <span class="time">/jaar</span>
                        </p>
                        <p>
                            <a href="https://www.greenchoice.nl/tarieven/winduitnederland/aanmelden/" class="btn-default arrow" title="Aanmelden">
                                <span>
                                    Aanmelden
                                </span>
                            </a>
                        </p>
                        <p class="details">
                            <a href="https://www.greenchoice.nl/tarieven/winduitnederland/" title="Meer informatie">
                                Meer informatie
                            </a>
                        </p>
                    </footer>
                </div>

            </div>
        </section>

        <section class="c-section" id="">
            <div class="row  separator">
                <div class="block-default eq-height col-50">


                    <h3>
                        <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">
                                Customer-friendly energy supplier
                            </font>
                        </font>
                        <span>
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">SAMR 2018</font>
                            </font>
                        </span>
                    </h3>
                    <figure class="rate-logo company-logo"></figure>
                    <div class="text">
                        <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">
                                In April 2018 we again won the audience award for the most customer-friendly energy supplier in the Netherlands.
                            </font>
                        </font>
                    </div>

                </div>
                <div class="block-default eq-height col-50">


                    <h3>
                        <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">
                                The most sustainable brand in the Netherlands
                            </font>
                        </font>
                        <span>
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">Sustainable Brand Index 2018</font>
                            </font>
                        </span>
                    </h3>
                    <figure class="rate-logo company-logo"></figure>
                    <div class="text">
                        <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">
                                Research among Dutch consumers and their perception on sustainability, branding and communication of well-known Dutch companies.
                            </font>
                        </font>
                    </div>

                </div>
            </div>

            <div class="row">
                <p class="more center">
                    <a class="" href="https://www.greenchoice.nl/klantenwaardering/">
                        <span>
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">Read more about how customers value us</font>
                            </font>
                        </span>
                    </a>
                </p>
            </div>
        </section>
        <!-- content off -->
        <!-- footer on -->
        <footer class="c-footer page-footer">
            <div class="row">


                <nav class="c-footer__nav">
                    <ul class="c-footer__list">
                        <li class="c-footer__list-header">
                            <a href="https://www.greenchoice.nl/besparen/" class="c-footer__header" title="Save">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">Save</font>
                                </font>
                            </a>
                        </li>
                        <li class="c-footer__list-item">
                            <a href="https://www.greenchoice.nl/besparen/warmtepomp/" class="c-footer__list-link" title="Heat pump">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">Heat pump</font>
                                </font>
                            </a>
                        </li>
                        <li class="c-footer__list-item">
                            <a href="https://www.greenchoice.nl/besparen/boks/" class="c-footer__list-link" title="BOKS">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">BOKS</font>
                                </font>
                            </a>
                        </li>

                    </ul>
                    <ul class="c-footer__list">
                        <li class="c-footer__list-header">
                            <a href="https://www.greenchoice.nl/zelf-opwekken/" class="c-footer__header" title="Generate yourself">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">Generate yourself</font>
                                </font>
                            </a>
                        </li>
                        <li class="c-footer__list-item">
                            <a href="https://www.greenchoice.nl/zelf-opwekken/wind/" class="c-footer__list-link" title="Own wind energy">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">Own wind energy</font>
                                </font>
                            </a>
                        </li>
                        <li class="c-footer__list-item">
                            <a href="https://www.greenchoice.nl/zelf-opwekken/zon/" class="c-footer__list-link" title="Own solar energy">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">Own solar energy</font>
                                </font>
                            </a>
                        </li>
                        <li class="c-footer__list-item">
                            <a href="https://www.greenchoice.nl/zelf-opwekken/cooperaties/" class="c-footer__list-link" title="Energy cooperatives">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">Energy cooperatives</font>
                                </font>
                            </a>
                        </li>
                        <li class="c-footer__list-item">
                            <a href="https://www.greenchoice.nl/zelf-opwekken/wek-op-advies/" class="c-footer__list-link" title="Wake up on advice">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">Wake up on advice</font>
                                </font>
                            </a>
                        </li>

                    </ul>
                    <ul class="c-footer__list">
                        <li class="c-footer__list-header">
                            <a href="https://www.greenchoice.nl/groene-energie/" class="c-footer__header" title="Green energy">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">Green energy</font>
                                </font>
                            </a>
                        </li>
                        <li class="c-footer__list-item">
                            <a href="https://www.greenchoice.nl/groene-energie/energiebron-kiezen/" class="c-footer__list-link" title="Choose energy source">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">Choose energy source</font>
                                </font>
                            </a>
                        </li>
                        <li class="c-footer__list-item">
                            <a href="https://www.greenchoice.nl/groene-energie/energie-vergelijken/" class="c-footer__list-link" title="Compare energy">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">Compare energy</font>
                                </font>
                            </a>
                        </li>
                        <li class="c-footer__list-item">
                            <a href="https://www.greenchoice.nl/groene-energie/stroom/" class="c-footer__list-link" title="Green power">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">Green power</font>
                                </font>
                            </a>
                        </li>
                        <li class="c-footer__list-item">
                            <a href="https://www.greenchoice.nl/groene-energie/gas/" class="c-footer__list-link" title="Green gas">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">Green gas</font>
                                </font>
                            </a>
                        </li>

                    </ul>
                    <ul class="c-footer__list">
                        <li class="c-footer__list-header">
                            <a href="https://www.greenchoice.nl/tarieven/" class="c-footer__header" title="Rates &amp; Registration">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">Rates &amp; Registration</font>
                                </font>
                            </a>
                        </li>
                        <li class="c-footer__list-item">
                            <a href="https://www.greenchoice.nl/tarieven/groenuitnederland/" class="c-footer__list-link" title="Green from the Netherlands">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">Green from the Netherlands</font>
                                </font>
                            </a>
                        </li>
                        <li class="c-footer__list-item">
                            <a href="https://www.greenchoice.nl/tarieven/winduitnederland/" class="c-footer__list-link" title="Wind from the Netherlands">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">Wind from the Netherlands</font>
                                </font>
                            </a>
                        </li>
                        <li class="c-footer__list-item">
                            <a href="https://www.greenchoice.nl/tarieven/windvanger/" class="c-footer__list-link" title="Wind from the Netherlands WindVangers">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">Wind from the Netherlands WindVangers</font>
                                </font>
                            </a>
                        </li>
                        <li class="c-footer__list-item">
                            <a href="https://www.greenchoice.nl/tarieven/wind-uit-nederland-boks-live/" class="c-footer__list-link" title="Wind from the Netherlands BOKS Live">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">Wind from the Netherlands BOKS Live</font>
                                </font>
                            </a>
                        </li>
                        <li class="c-footer__list-item">
                            <a href="https://www.greenchoice.nl/tarieven/overstapservice/" class="c-footer__list-link" title="Switching service">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">Switching service</font>
                                </font>
                            </a>
                        </li>

                    </ul>

                    <ul class="c-footer__list">
                        <li class="c-footer__list-header">
                            <a href="https://www.greenchoice.nl/zakelijk/zzp-mkb/" class="c-footer__header" title="ZZP &amp; SME">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">ZZP &amp; SME</font>
                                </font>
                            </a>
                        </li>

                    </ul>
                    <ul class="c-footer__list">
                        <li class="c-footer__list-header">
                            <a href="https://www.greenchoice.nl/zakelijk/grootzakelijk/" class="c-footer__header" title="Large">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">Large</font>
                                </font>
                            </a>
                        </li>

                    </ul>

                    <div class="footer-dossier">
                        <a href="https://dossier.greenchoice.nl/?utm_source=greenchoicenl&amp;utm_medium=button&amp;utm_campaign=mdbuttongreenchoicenl"
                            class="icon-user" title="My file">
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">My file</font>
                            </font>
                        </a>
                    </div>
                </nav>
                <div class="c-footer__aside">
                    <span class="c-footer__header">
                        <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">Sign up for our newsletter</font>
                        </font>
                    </span>
                    <form class="c-mailing-signup c-mailing-signup--sm  u-margin-top-sm  u-margin-bottom-xl" data-mailing-signup-error="Je hebt geen geldig e-mailadres ingevuld"
                        data-mailing-signup-success="Er is een bevestigingsmail naar je verzonden waarmee je je aanmelding definitief kunt maken."
                        method="post" action="" novalidate="true">
                        <div class="c-mailing-signup__item">
                            <input class="c-mailing-signup__input c-input" type="email" name="signup_email" placeholder="je e-mailadres">
                        </div>
                        <span class="c-mailing-signup__item  c-mailing-signup__item--error" style="display: none;">Je hebt geen geldig e-mailadres ingevuld</span>
                        <div class="c-mailing-signup__item  c-mailing-signup__item--raw">
                            <button type="submit" class="btn-default c-mailing-signup__btn">
                                <span>
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">Sign Up</font>
                                    </font>
                                </span>
                            </button>
                        </div>
                    </form>
                    <span class="c-footer__header">
                        <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">Follow us on social media</font>
                        </font>
                    </span>
                    <div class="footer-social">

                        <dd>
                            <a href="https://www.facebook.com/GreenchoiceNL" class="facebook" title="Facebook" target="_blank">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">Facebook</font>
                                </font>
                            </a>
                        </dd>
                        <dd>
                            <a href="https://www.twitter.com/Greenchoice" class="twitter" title="Twitter">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">Twitter</font>
                                </font>
                            </a>
                        </dd>
                        <dd>
                            <a href="https://www.linkedin.com/company/greenchoice" class="linkedin" title="LinkedIn">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">LinkedIn</font>
                                </font>
                            </a>
                        </dd>
                        <dd>
                            <a href="https://www.youtube.com/user/Greenchoicenl" class="youtube" title="YouTube">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">YouTube</font>
                                </font>
                            </a>
                        </dd>

                    </div>
                </div>
            </div>
            <div class="row">


                <nav class="footer-quick">
                    <ul>
                        <li>
                            <a href="https://www.greenchoice.nl/over-greenchoice/" title="About us">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">About us</font>
                                </font>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.greenchoice.nl/klantenservice/" title="Customer service">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">Customer service</font>
                                </font>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.greenchoice.nl/nieuws/" title="News">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">News</font>
                                </font>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.greenchoice.nl/klantenservice/contact/" title="Contact">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">Contact</font>
                                </font>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
        <footer class="page-footer-white">
            <div class="row">


                <ul class="footer-legal">
                    <li>
                        <a href="https://www.greenchoice.nl/privacy/" title="Privacy">
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">Privacy</font>
                            </font>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.greenchoice.nl/disclaimer/" title="Disclaimer">
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">Disclaimer</font>
                            </font>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.greenchoice.nl/cookies/" title="Cookies">
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">Cookies</font>
                            </font>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.greenchoice.nl/voorwaarden/" title="Conditions">
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">Conditions</font>
                            </font>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.greenchoice.nl/tarieven/modelcontract/" title="Model contract">
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">Model contract</font>
                            </font>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.greenchoice.nl/over-ons/werken-bij/" title="Work at">
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">Work at</font>
                            </font>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
        <!-- footer off -->
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
