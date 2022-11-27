(function($) {
    "use strict";
    //   all ------------------
    function initHomeRadar() {
        //   loader ------------------
        $(".loader-wrap").fadeOut(300, function() {
            $("#main-theme").animate({
                opacity: "1"
            }, 300);
        });
        if ($('#top-menu').length) {
            $('#top-menu li.menu-item-has-children > a').append(' <i class="fas fa-caret-down"></i>')
        }
        //   Background image ------------------
        var a = $(".bg");
        a.each(function(a) {
            if ($(this).attr("data-bg")) $(this).css("background-image", "url(" + $(this).data("bg") + ")");
        });
        //   scrollToFixed------------------
        var adminbarheight = 0;
        var hheight = parseFloat(_homeradar.hheight);
        if( isNaN(hheight) ) hheight = 80;
        if ($('#wpadminbar').length) adminbarheight = $('#wpadminbar').outerHeight()
        // if ($(".scroll-nav-wrapper").length) {
        //     $(".scroll-nav-wrapper").each(function() {
        //         var $lscn = $(this),
        //             mW = 769;
        //         if ($lscn.hasClass('lscroll-mobile-yes')) mW = 100
        //         $lscn.scrollToFixed({
        //             minWidth: mW,
        //             zIndex: 12,
        //             marginTop: hheight + adminbarheight,
        //             removeOffsets: true,
        //             limit: function() {
        //                 var a = $(".limit-box").offset().top - $(".scroll-nav-wrapper").outerHeight(true) - 50;
        //                 return a;
        //             },
        //             spacerClass: 'scroll-nav-fixed-spacer'
        //         });
        //     });
        // }
        // $(".fixed-listing-header").scrollToFixed({
        //     minWidth: 1064,
        //     marginTop: hheight + adminbarheight,
        //     removeOffsets: true,
        //     limit: function() {
        //         var a = $(".limit-box").offset().top - $(".fixed-listing-header").outerHeight();
        //         return a;
        //     }
        // });
        if ($(".single-carousel").length > 0) {
            $('.single-carousel').each(function(){
                let dfopts = {
                    // preloadImages: false,
                    // freeMode: true,
                    // slidesPerView: 'auto',
                    // spaceBetween: 10,
                    // loop: false,
                    // grabCursor: true,
                    // mousewheel: false,
                    // observer: true,
                    // observeParents: true,
                    // navigation: {
                    //     nextEl: $(this).closest('.single-carousel-wrap').children('.sc-next')[0],
                    //     prevEl: $(this).closest('.single-carousel-wrap').children('.sc-prev')[0],
                    // },
                    infinite: true,
                    slidesToShow: 3,
                    dots: true,
                    arrows: false,
                    centerMode: true,
                    variableWidth: false,
                    responsive: [
                        {
                            breakpoint: 1224,
                            settings: {
                                slidesToShow: 2,
                                centerMode: true,
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 1,
                                centerMode: true,
                            }
                        }
                    ]
                }
                let $slider = $(this),
                    ilopts = $slider.data('options');
                if( null != ilopts && typeof ilopts === 'object' ){
                    dfopts = Object.assign(dfopts, ilopts)
                }
                // new Swiper( $slider[0], dfopts);
                $slider.slick(dfopts)

                $slider.closest(".carousel-wrap").children('.crs-button-prev').on("click", function () {
                    $slider.slick('slickPrev');
                });
                $slider.closest(".carousel-wrap").children('.crs-button-next').on("click", function () {
                    $slider.slick('slickNext');
                });

            });
        }

        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: false,
            dots: true,
            adaptiveHeight: true,
            asNavFor: '.slider-nav'

        });
        $('.slider-nav').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: false,
            arrows: false,
            centerMode: false,
            focusOnSelect: true
        });

        $('.slfor-btn-prev').on("click", function () {
            $(this).closest(".carousel-wrap").find('.carousel').slick('slickPrev');
        });
        $('.slfor-btn-next').on("click", function () {
            $(this).closest(".carousel-wrap").find('.carousel').slick('slickNext');
        });


        var $slick = $('.slideshow-container');
        $slick.slick({
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: false,
            fade: true,
            cssEase: 'ease-in',
            infinite: true,
            speed: 1000,
            dots: true,
            pauseOnHover: false,
            pauseOnFocus: false
        });
        $(".slider-progress-bar").addClass("act-slider");
        $slick.on("beforeChange", function (event, slick) {
            $(".slider-progress-bar").removeClass("act-slider");
        });
        $slick.on("afterChange", function (event, slick) {
            $(".slider-progress-bar").addClass("act-slider");
        });
        if ($(".hero-slider").length > 0) {
            $('.hero-slider').each(function(){
                var $slider = $(this);
                $slider.slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                    dots: false,
                    arrows: false,
                });
                $slider.closest(".hero-slider-wrap").children('.hs-btn_prev').on("click", function () {
                    $slider.slick('slickPrev');
                });
                $slider.closest(".hero-slider-wrap").children('.hs-btn_next').on("click", function () {
                    $slider.slick('slickNext');
                });

            })
        }

        
        
        $(".fixed-scroll-column-item").scrollToFixed({
            minWidth: 1064,
            marginTop: 200,
            removeOffsets: true,
            limit: function() {
                var a = $(".limit-box").first().offset().top - $(".fixed-scroll-column-item").outerHeight() - 46;
                return a;
            }
        });
        if ( $(window).width() > 1064 ) {
            $(".fix-map").scrollToFixed({
                minWidth: 1064,
                zIndex: 0,
                marginTop: hheight,
                
                removeOffsets: true,
                
            });
        }
            
        
        // $(".back-tofilters").scrollToFixed({
        //     minWidth: 1064,
        //     zIndex: 12,
        //     marginTop: 90,
        //     removeOffsets: true,
        //     limit: function() {
        //         var a = $(".limit-box").offset().top - $(".back-tofilters").outerHeight(true);
        //         return a;
        //     },
        //     spacerClass: 'back-to-filter-fixed-spacer'
        // });
        // $(".help-bar").scrollToFixed({
        //     minWidth: 1064,
        //     zIndex: 12,
        //     marginTop: 100,
        //     removeOffsets: true,
        //     limit: function() {
        //         var a = $(".limit-box").offset().top - $(".help-bar").outerHeight(true) - 60;
        //         return a;
        //     }
        // });
        
        // new
        $(".fixed-column_menu-init").scrollToFixed({
            minWidth: 1064,
            marginTop: 120,
            removeOffsets: true,
            dontSetWidth: false,
            limit: function () {
                var a = $(".limit-box").first().offset().top - $(".fixed-column_menu-init").outerHeight() - 1;
                return a;
            }
        });
        $(".box-widget-fixed-init").scrollToFixed({
            minWidth: 1064,
            marginTop: 90,
            removeOffsets: true,
            dontSetWidth: false,
            limit: function () {
                var a = $(".limit-box").first().offset().top - $(".box-widget-fixed-init").outerHeight() - 1;
                return a;
            }
        });
        // $(".scroll-to-fixed-fixed").scrollToFixed({
        //     minWidth: 1064,
        //     marginTop: 90,
        //     removeOffsets: true,
        //     limit: function () {
        //         var a = $(".limit-box").offset().top - $(".scroll-to-fixed-fixed").outerHeight() - 1;
        //         return a;
        //     }
        // });
        if( $(".fixed-bar").outerHeight(true) < $(".post-container").outerHeight(true) - 100 ) {
            $(".fixed-bar").addClass("fixbar-action");
            $(".fixbar-action").scrollToFixed({
                minWidth: 1064,
                zIndex: 12,
                marginTop: function() {
                    var a = $(window).height() - $(".fixed-bar").outerHeight(true) - 100;
                    if (a >= 0) return 20;
                    return a;
                },
                removeOffsets: true,
                limit: function() {
                    var a = $(".limit-box").first().offset().top - $(".fixed-bar").outerHeight() - 60;
                    return a;
                },
                spacerClass: 'dashboard-fixed-spacer'
            });
        } else $(".fixed-bar").removeClass("fixbar-action");

        $(".show-hidden-filter").on('click', function () {
            $(".top-search-content").toggleClass("vis-hiddenfilter");
            $(this).toggleClass("vishf");
        });
        $(".close_sb-filter").on('click', function () {
            $(".top-search-content").removeClass("vis-hiddenfilter");
            $(".show-hidden-filter").removeClass("vishf");
        });
        $(".show-hidden-map").on('click', function () {
            $(".hid-mob-map").toggleClass("vis-hiddenmap");
        });
        $(".map-close").on('click', function () {
            $(".hid-mob-map").removeClass("vis-hiddenmap");
        });
        $(".show-hidden-filter2").on('click', function () {
            $(this).toggleClass("vis-hiddenfilter2");
            $(".list-searh-input-wrap").slideToggle(300);
        });
        // full map filter
        $(".show-list-wrap-search").on("click", function (e) {
            $(".lws_mobile").slideToggle(400);
            $(this).toggleClass("slsw_vis");
        });
        $(".dasbdord-submenu-open").on('click', function () {

            $(this).toggleClass("db_submenu_open-init_vis");
            $(".dashboard-submenu").toggleClass("db_submenu_open-init");
        });
        
        //   appear------------------
        $(".stats").appear(function() {
            $(".num").countTo();
        });
        // scroll animation ------------------
        var progressBar = $(".js-progress-bar");
        $(window).on("scroll", function () {
            var a = $(document).height();
            var b = $(window).height();
            var c = $(window).scrollTop();
            var d = c / (a - b) * 100;
            if( typeof progressBar != 'undefined' ) progressBar.css("stroke-dashoffset", 100 - (d));
            if ($(this).scrollTop() > 150) {
                $(".to-top").fadeIn(500);
                $(".secondary-nav").addClass("vis_secnav");
            } else {
                $(".to-top").fadeOut(500);
                $(".secondary-nav").removeClass("vis_secnav");
            }
        });
        //   scroll to------------------
        $(".custom-scroll-link").on("click", function() {
            var nbh = $(".scroll-nav-wrapper").length > 0 ? $(".scroll-nav-wrapper").height() : 0
            var a = 70 + nbh + adminbarheight;
            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname) {
                var b = $(this.hash);
                b = b.length ? b : $("[name=" + this.hash.slice(1) + "]");
                if (b.length) {
                    $("html,body").animate({
                        scrollTop: b.offset().top - a
                    }, {
                        queue: false,
                        duration: 1200,
                        easing: "easeInOutExpo"
                    });
                    return false;
                }
            }
        });
        $(".scroll-init  ul ").singlePageNav({
            filter: ":not(.external)",
            updateHash: false,
            offset: 160 + adminbarheight,
            threshold: 120,
            speed: 1200,
            currentClass: "act-scrlink"
        });
        $('.scroll-init a').each(function() {
            if (!$(this.hash).length) {
                $(this).parent().hide()
            }
        })
        $(".scroll-init2").singlePageNav({
            filter: ":not(.external)",
            updateHash: false,
            offset: 140,
            threshold: 100,
            speed: 1200,
            currentClass: "act-scrlink"
        });
        $(".to-top , .dash-to-top").on("click", function (a) {
            a.preventDefault();
            $("html, body").animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        // $(".cat-list li a").on("click", function (e) {
        //     e.preventDefault();
        //     $(this).toggleClass("act-category");
        // });
        // scroll animation ------------------
        // $(window).on("scroll", function(a) {
        //     if ($(this).scrollTop() > 150) {
        //         $(".to-top").fadeIn(500);
        //         $(".clbtg").fadeIn(500);
        //     } else {
        //         $(".to-top").fadeOut(500);
        //         $(".clbtg").fadeOut(500);
        //     }
        // });
        
        // Styles ------------------
        if ($("footer.main-footer").hasClass("fixed-footer")) {
            $('<div class="height-emulator fl-wrap"></div>').appendTo("#main-theme");
        }

        // listing column footer
        if( $(".small-ftcopyright").length && $(".ftcopyright").length ){
            $(".small-ftcopyright").html( $(".ftcopyright").html() )
        }
        

        function csselem() {
            $(".map-container.column-map").css({
                height: $(window).outerHeight(true) - 150 + "px"
            });
            $(".map-container.column-map.no-top_search").css({
                height: $(window).outerHeight(true) - 70 + "px"
            });
            $(".slideshow-container .slideshow-item").css({
                height: $(".slideshow-container").outerHeight(true)
            });
            $(".hero-slider-item").css({
                height: $(".hero-slider").outerHeight(true)
            });
            var ww2 = $(window).width();
            if (ww2 > 1084) {
                $(".lws_mobile , .list-searh-input-wrap").css({
                    display: "block"
                });
            } else {
                $(".lws_mobile , .list-searh-input-wrap").css({
                    display: "none"
                });
            }
        }
        csselem();
        // Mob Menu------------------
        function headerModalOpt() {
            $(".lang-item .header-opt-modal-list li a").on('click', function (e) {
                e.preventDefault();
                var thdatlantext = $(this).data("lantext");
                $(".lang-item li a").removeClass("current-lan");
                $(this).addClass("current-lan");
                $(".lang-item h4 span  ").text(thdatlantext);
            });
            // $(".currency-item .header-opt-modal-list li a").on('click', function (e) {
            //     e.preventDefault();
            //     var thdatlantext = $(this).data("lantext");
            //     $(".currency-item li a").removeClass("current-lan");
            //     $(this).addClass("current-lan");
            //     $(".currency-item h4 span  ").text(thdatlantext);
            // });
            $(".header-opt-modal-item h4").on("click", function () {
                $(this).toggleClass("lang-cur-act");
                $(this).parents(".header-opt-modal-item").find(".header-opt-modal-list").toggleClass("vis_homd");
            });
        }
        headerModalOpt();
        function showMobileMenu() {
            $(".main-menu").addClass("vismobmenu");
            $(".nav-button-wrap").addClass("vismobmenu_btn").removeClass("nvminit");
            hideWishlist();
            hideSearch();
        }
        function hideMobileMenu() {
            $(".main-menu").removeClass("vismobmenu");
            $(".nav-button-wrap").removeClass("vismobmenu_btn").addClass("nvminit");
        }
        $(".nav-button-wrap").on("click", function () {
            if ($(this).hasClass("nvminit")) {
                showMobileMenu();
            } else {
                hideMobileMenu();
            }
        });
        function mobMenuInit() {
            var ww = $(window).width();
            if (ww < 1054) {
                $(".menusb , .add-list_mob , .header-opt-modal-container_mob").remove();
                $(".main-menu").removeClass("nav-holder");
                $(".main-menu nav").clone().addClass("menusb").appendTo(".main-menu");
                $(".menusb").slidingMenu();
                $(".map-container.fw-map.big_map.hid-mob-map").css({
                    height: $(window).outerHeight(true) - 110 + "px"
                });
                $(".novis_header-mod").removeClass("header-opt-modal");
                $(".novis_header-mod .hopmc_init").clone().addClass("header-opt-modal-container_mob").appendTo(".main-menu");
                $(".add-list_wrap a").removeClass("add-list");
                $(".add-list_wrap a").clone().addClass("add-list_mob").appendTo(".main-menu");
                headerModalOpt();
                hideHeaderopt();
            } else {
                $(".menusb , .add-list_mob , .header-opt-modal-container_mob").remove();
                $(".main-menu").addClass("nav-holder");
                $(".add-list_wrap a").removeClass("add-list_mob").addClass("add-list");
                $(".hopmc_init").removeClass("header-opt-modal-container_mob");
                $(".novis_header-mod").addClass("header-opt-modal");
            }
        }
        mobMenuInit();
        //   css ------------------
        var $windowres = $(window);
        $windowres.on("resize", function () {
            csselem();
            mobMenuInit();

        });
        // $(document.body).bind('added_to_cart', function(event, fragments, cart_hash) {
        //     if (fragments && fragments['div.widget_shopping_cart_content']) {
        //         var cart_content = fragments['div.widget_shopping_cart_content'];
        //         if ($(cart_content).find('.mini_cart_item')) {
        //             var cart_quantity_total = 0;
        //             $(cart_content).find('.mini_cart_item').each(function() {
        //                 cart_quantity_total += parseInt($('span.quantity', this).text());
        //             });
        //             $('.attr-nav .cart-link .cart-count').text(cart_quantity_total);
        //         }
        //     }
        // });
        // new from homeradar
        $(".show-hidden-map").on("click", function(e) {
            e.preventDefault();
            var optext = $(this).data('optext'),
                cltext = $(this).data('cltext');
            $(".show-hidden-map").find("span").text( $(".show-hidden-map span").text() === cltext ? optext : cltext );
            $(".hidden-map-container").slideToggle(400);
        });

        function showColumnhiddenmap() {
            if ($(window).width() < 1064) {
                $(".hid-mob-map").animate({
                    right: 0
                }, 500, "easeInOutExpo").addClass("fixed-mobile");
            }
        }
        $(".schm").on("click", function(e) {
            e.preventDefault();
            showColumnhiddenmap();
        });
        if( $(".map-container").length ){
            $(document).on("click", ".map-item", function(e) {
                e.preventDefault();
                showColumnhiddenmap();
            });
        }
        $('.map-close').on("click", function(e) {
            $(".hid-mob-map").animate({
                right: "-100%"
            }, 500, "easeInOutExpo").removeClass("fixed-mobile");
        });
        

        function heroAnim() {
            function a(a) {
                var b = a.length,
                    c, d;
                while (b) {
                    d = Math.floor(Math.random() * b--);
                    c = a[b];
                    a[b] = a[d];
                    a[d] = c;
                }
                return a;
            }
            var b = $(".footer-bg-pin");
            $(a(b).slice(0, $(".footer-bg").data("ran"))).each(function(a) {
                var bc = $(this);
                b.removeClass("footer-bg-pin-vis")
                bc.addClass("footer-bg-pin-vis");
            });
        }
        setInterval(function() {
            heroAnim();
        }, 2000);
        // modal ------------------
        var wlwrp = $(".header-modal"),
            wllink = $(".show-header-modal"),
            hopbtn = $(".header-opt_btn"),
            hmodopt = $(".header-opt-modal");
        function showWishlist() {
            wlwrp.fadeIn(1).addClass("vis-wishlist").removeClass("novis_wishlist");
            wllink.addClass("scwllink");
            hideMobileMenu();
            hideSearch();
        }
        function hideWishlist() {
            wlwrp.fadeOut(1).removeClass("vis-wishlist").addClass("novis_wishlist");
            wllink.removeClass("scwllink");
        }
        wllink.on("click", function () {
            hideHeaderopt();
            if (wlwrp.hasClass("novis_wishlist")) showWishlist();
            else hideWishlist();
        });
        $(".close-header-modal").on("click", function () {
            hideWishlist();
        });
        function showHeaderopt() {
            if( typeof hmodopt !== 'undefined' && hmodopt.length ) hmodopt.fadeIn(1).addClass("vis-head-mod").removeClass("novis_header-mod");
            if( typeof hopbtn !== 'undefined' ) hopbtn.addClass("scwheader-opt-btn");
            hideWishlist();
        }
        function hideHeaderopt() {
            if( typeof hmodopt !== 'undefined' && hmodopt.length ) hmodopt.fadeOut(1).removeClass("vis-head-mod").addClass("novis_header-mod");
            if( typeof hopbtn !== 'undefined' ) hopbtn.removeClass("scwheader-opt-btn");
        }
        hopbtn.on("click", function () {
            if ( typeof hmodopt !== 'undefined' && hmodopt.length && hmodopt.hasClass("novis_header-mod") ) showHeaderopt();
            else hideHeaderopt();
        });
        var hsb = $(".header-search-button"),
            hsw = $(".header-search-wrapper");
            // hmsw = $(".filter_form_advanced");
        function showSearch() {
            hsw.fadeIn(1).addClass("vis-search").removeClass("novis_search");
            hsb.addClass("hsbclose");
            hideMobileMenu();
            hideWishlist();
        }
        function hideSearch() {
            hsw.fadeOut(1).removeClass("vis-search").addClass("novis_search");
            hsb.removeClass("hsbclose");
        }
        hsb.on("click", function () {
            if (hsw.hasClass("novis_search")) showSearch();
            else hideSearch();
        });
        $(".smact").on("click", function (e) {
            e.preventDefault();
            $(this).closest(".lhead-more-wrap").children(".show-more-snopt-tooltip").toggleClass("show-more-snopt-tooltip_vis");
        });
        // function showAdwSearch() {
        //     hmsw.addClass("vis-more-search").removeClass("more-hidden_wrap");
        // }
        // function hideAdwSearch() {
        //     hmsw.removeClass("vis-more-search").addClass("more-hidden_wrap");
        // }
        // $(".mor-opt-btn_act").on("click", function () {
        //     if (hmsw.hasClass("vis-more-search")) hideAdwSearch();
        //     else showAdwSearch();
        // });
        // $(".close_msotw").on("click", function () {
        //     hideAdwSearch();
        // });


        // woocart
        //   show hide------------------
        $(".show-cart").on("click", function() {
            $(".cart-overlay").fadeIn(400);
            $(".cart-modal").animate({
                right: 0
            }, 400);
            return false;
        });
        $(".cart-overlay , .close-cart").on("click", function() {
            $(".cart-overlay").fadeOut(400);
            $(".cart-modal").animate({
                right: "-350px"
            }, 400);
            return false;
        });

        $( document.body ).bind( 'added_to_cart', function( event, fragments, cart_hash ) {
            if( fragments && fragments['div.widget_shopping_cart_content'] ){
                var cart_content = fragments['div.widget_shopping_cart_content'];

                if($(cart_content).find('.mini_cart_item')){
                    var cart_quantity_total = 0;
                    $(cart_content).find('.mini_cart_item').each(function(){
                        cart_quantity_total += parseInt($('span.quantity', this).text());
                    });

                    $('.show-cart .cart-count').text(cart_quantity_total);
                }
            }
        });
        $( document.body ).bind( 'removed_from_cart', function( event, fragments, cart_hash ) {
            if( fragments && fragments['div.widget_shopping_cart_content'] ){
                var cart_content = fragments['div.widget_shopping_cart_content'];

                if($(cart_content).find('.mini_cart_item')){
                    var cart_quantity_total = 0;
                    $(cart_content).find('.mini_cart_item').each(function(){
                        cart_quantity_total += parseInt($('span.quantity', this).text());
                    });

                    $('.show-cart .cart-count').text(cart_quantity_total);
                }
            }
        });

        //   Calculator ------------------
        // var term;
        // var apr;
        // var amt;
        // var mPmt;
        // function getValues() {
        //     term = document.getElementById("trm").value;
        //     apr = document.getElementById("apr").value;
        //     amt = document.getElementById("amt").value;
        //     apr /= 1200;
        //     term *= 12;
        //     mPmt = calculatePayment();
        //     document.getElementById("pmt").value = mPmt.toFixed(2);
        // }
        // function calculatePayment() {
        //     var payment = amt * (apr * Math.pow((1 + apr), term)) / (Math.pow((1 + apr), term) - 1);
        //     return payment;
        // }
        // $(".monterage-title-item span").text($("#pmt").val());
        // $("#sbt").on("click", function () {
        //     getValues();
        //     $(".monterage-title-item span").text($("#pmt").val());
        // });
        $(".use-current-price").on("click", function () {
            var curproppr = $(this).data('price');
            if( curproppr ){
                $(this).closest('.loan-amount-wrap').children('input[name="amt"]').val(curproppr)
            }
            
        });

        $('.lmortgage-form').on('submit', function(e){
            e.preventDefault();
            var $form = $(this),
            cAmount = $form.find('input[name="amt"]').val(),
            cPercent = $form.find('input[name="apr"]').val(),
            cLTerm = $form.find('input[name="trm"]').val();
            cPercent /= 1200;
            cLTerm *= 12;

            var payment = cAmount * (cPercent * Math.pow((1 + cPercent), cLTerm)) / (Math.pow((1 + cPercent), cLTerm) - 1);
            $form.find('.monterage-title-item span').text(payment.toFixed(2))
        });
        $(".reset-btn").on("click", function (e) {
            e.preventDefault()
            var $form = $(this).closest('.lmortgage-form');
            $form.find("input[type=text]:not(input[name=amt]), textarea").val("");
            $form.find(".price-range").each(function (index, sliders_init) {
                var slider_instance = $(sliders_init).data("ionRangeSlider");
                slider_instance.reset();
            });
            
            
            $form.find('.monterage-title-item span').text("0");
        });
        // 404 effect
        if( $('.hero-text-big').length ){
            new Ztextify(".hero-text-big", {
                depth: "110px",
                layers: 33,
                fade: true,
                direction: "forwards",
                event: "pointer",
                eventRotation: "15deg"
            });
        }

        // facts bg
        if( $('.facts-svg').length  ){
            $('.facts-svg').append('<div class="svg-bg"> <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMax slice"> <defs> <lineargradient id="bg"> <stop offset="0%" style="stop-color:rgba(255, 255, 255, 0.6)"></stop> <stop offset="50%" style="stop-color:rgba(255, 255, 255, 0.1)"></stop> <stop offset="100%" style="stop-color:rgba(255, 255, 255, 0.6)"></stop> </lineargradient> <path id="wave" stroke="url(#bg)" fill="none" d="M-363.852,502.589c0,0,236.988-41.997,505.475,0 s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z" /> </defs> <g> <use xlink:href="#wave"> <animatetransform attributeName="transform" attributeType="XML" type="translate" dur="10s" calcMode="spline" values="270 230; -334 180; 270 230" keyTimes="0; .5; 1" keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0" repeatCount="indefinite" /> </use> <use xlink:href="#wave"> <animatetransform attributeName="transform" attributeType="XML" type="translate" dur="8s" calcMode="spline" values="-270 230;243 220;-270 230" keyTimes="0; .6; 1" keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0" repeatCount="indefinite" /> </use> <use xlink:href="#wave"> <animatetransform attributeName="transform" attributeType="XML" type="translate" dur="6s" calcMode="spline" values="0 230;-140 200;0 230" keyTimes="0; .4; 1" keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0" repeatCount="indefinite" /> </use> <use xlink:href="#wave"> <animatetransform attributeName="transform" attributeType="XML" type="translate" dur="12s" calcMode="spline" values="0 240;140 200;0 230" keyTimes="0; .4; 1" keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0" repeatCount="indefinite" /> </use> </g> </svg> </div>')
        }
        // contact modal
        $('.cf_btn').on("click", function (e) {
            e.preventDefault();
            $('.contact-form-wrap').fadeIn(400);
            $("html, body").addClass("hid-body");
            // $("#message").slideUp(100);
            $(".custom-form").find("input[type=text], textarea").val("");
        });
        $('.contact-form-overlay , .close-contact-form').on("click", function () {
            $('.contact-form-wrap').hide();
            $("html, body").removeClass("hid-body");
        });
        // faq
        $(".accordion-lite-header").on("click", function () {
            $(this).parent(".accordion-lite-container").find(".accordion-lite_content").slideToggle(400);
            $(this).toggleClass("acc_open");
        });

        $('.compare-container').each(function(){
            var $el = $(this),
                $hdr = $el.children('.compare-header');
            $el.css({minHeight: $hdr.length > 0 ? $hdr.height() + 185 : '500px'})
        })
    }
    //   Parallax ------------------
    function initparallax() {
        if ($('.shapes-decor').length) {
            $('.shapes-decor').each(function() {
                $(this).attr('data-scrollax-parent', true);
                $('<div class="gradient-bg-figure" style="right:-30px;top:10px;"></div>').appendTo($(this));
                $('<div class="gradient-bg-figure" style="left:-20px;bottom:30px;"></div>').appendTo($(this));
                $('<div class="circle-wrap" style="left:270px;top:120px;" data-scrollax="properties: { translateY: \'-200px\' }"><div class="circle_bg-bal circle_bg-bal_small"></div></div>').appendTo($(this));
                $('<div class="circle-wrap" style="right:420px;bottom:-70px;" data-scrollax="properties: { translateY: \'150px\' }"><div class="circle_bg-bal circle_bg-bal_big"></div></div>').appendTo($(this));
                $('<div class="circle-wrap" style="left:420px;top:-70px;" data-scrollax="properties: { translateY: \'100px\' }"><div class="circle_bg-bal circle_bg-bal_big"></div></div>').appendTo($(this));
                $('<div class="circle-wrap" style="left:40%;bottom:-70px;"><div class="circle_bg-bal circle_bg-bal_middle"></div></div>').appendTo($(this));
                $('<div class="circle-wrap" style="right:40%;top:-10px;"><div class="circle_bg-bal circle_bg-bal_versmall" data-scrollax="properties: { translateY: \'-350px\' }"></div></div>').appendTo($(this));
                $('<div class="circle-wrap" style="right:55%;top:90px;"  ><div class="circle_bg-bal circle_bg-bal_versmall" data-scrollax="properties: { translateY: \'-350px\' }"></div></div>').appendTo($(this));
            });
        }
        var a = {
            Android: function() {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function() {
                return a.Android() || a.BlackBerry() || a.iOS() || a.Opera() || a.Windows();
            }
        };
        var trueMobile = a.any();
        if (null == trueMobile) {
            var b = new Scrollax();
            b.reload();
            b.init();
        }
        if (trueMobile) $(".bgvid , .background-vimeo").remove();

        if( trueMobile ){
            resizeOSMMAp();
            $( window ).resize( function() {
                resizeOSMMAp();
            });
        }
    }
    function resizeOSMMAp(){
        if( $('#map-osm-main').length ){
            $('#map-osm-main').css('width', $( window ).width() ).css('height', $( window ).height() )
        }
    }
    //   Init All ------------------
    $(function() {
        initHomeRadar();
        initparallax();

        // // A sample code to change map style
        // // https://developers.google.com/maps/documentation/javascript/styling#style-example
        // window.addEventListener('listingsMapInit', function(e){
            
        //     window.listingsMap.setOptions({
        //         scrollwheel: true,
        //         styles: [
        //             {
        //                 featureType: 'poi.business',
        //                 stylers: [{visibility: 'off'}]
        //             },
        //             {
        //                 featureType: 'transit',
        //                 elementType: 'labels.icon',
        //                 stylers: [{visibility: 'off'}]
        //             }
        //         ]
        //     });


        // });
        
    });

    // new sticky nav
    // Variables and DOM Caching.
    var $body = $( 'body' ),
        $customHeader = $body.find( '.homeradar-header' ),
        $navigation = $body.find( '.nav-holder.main-menu' ),
        navigationFixedClass = 'site-header-fixed',
        isFrontPage = $body.hasClass( 'homeradar-front-page' ) || $body.hasClass( 'home blog' ),
        $menuToggle = $body.find( '.nav-button-wrap' ),
        headerOffset,
        navIsNotTooTall;

    // Set properties of navigation.
    function setNavProps() {
        // navigationHeight      = $navigation.height();
        // navigationOuterHeight = $navigation.outerHeight();
        // navPadding            = parseFloat( $navWrap.css( 'padding-top' ) ) * 2;
        // navMenuItemHeight     = $navMenuItem.outerHeight() * 2;
        // idealNavHeight        = navPadding + navMenuItemHeight;
        navIsNotTooTall       = true; // navigationHeight <= idealNavHeight;
    }

    // Make navigation 'stick'.
    function adjustScrollClass() {

        // Make sure we're not on a mobile screen.
        if ( 'none' === $menuToggle.css( 'display' ) ) {

            // Make sure the nav isn't taller than two rows.
            if ( navIsNotTooTall ) {

                // // When there's a custom header image or video, the header offset includes the height of the navigation.
                // if ( isFrontPage && ( $body.hasClass( 'has-header-image' ) || $body.hasClass( 'has-header-video' ) ) ) {
                //     headerOffset = $customHeader.innerHeight() - navigationOuterHeight;
                // } else {
                //     headerOffset = $customHeader.innerHeight();
                // }


                headerOffset = $customHeader.innerHeight();

                // If the scroll is more than the custom header, set the fixed class.
                if ( $( window ).scrollTop() >= headerOffset ) {
                    $customHeader.addClass( navigationFixedClass );
                } else {
                    $customHeader.removeClass( navigationFixedClass );
                }

            } else {

                // Remove 'fixed' class if nav is taller than two rows.
                $customHeader.removeClass( navigationFixedClass );
            }
        }
    }
    // Fire on document ready.
    $( document ).ready( function() {
        // If navigation menu is present on page, setNavProps and adjustScrollClass.
        if ( $customHeader.length ) {
            setNavProps();
            adjustScrollClass();
        }
    });
    // If navigation menu is present on page, adjust it on scroll and screen resize.
    if ( $customHeader.length ) {

        // On scroll, we want to stick/unstick the navigation.
        $( window ).on( 'scroll', function() {
            adjustScrollClass();
        });

        // Also want to make sure the navigation is where it should be on resize.
        $( window ).resize( function() {
            setNavProps();
            setTimeout( adjustScrollClass, 500 );
        });
    }
})(jQuery);
// open login modal when site loaded
// (function($) {
//     "use strict";
//     $(window).load(function(){

//         setTimeout(function(){
//             if( $('#ctb-logreg-modal').length ){
//                 let $modal = $('#ctb-logreg-modal'),
//                     message = (typeof $(this).data('message') != 'undefined'? $(this).data('message') : '');
//                 $modal.find('.prelog-message').text('')
//                 if(message!='') $modal.find('.prelog-message').text(message)
//                 $modal.fadeIn(200);
//                 $('.reg-overlay').fadeIn(200);
//                 $modal.find(".modal_main").addClass("vis_mr");
//                 $("html, body").addClass("hid-body");
//             }
//         }, 3000 );

//     })
// })(jQuery);
