/**
 * @Script js for (Template/Project Name)
 *
 * @project     - Project Name
 * @author      - 
 * @created_by  - 
 * @created_at  - 
 * @modified_by -
 */


/**
 * ========================================================
 * this function execute when window properly loaded
 * ===========================================================
 */

$(window).on('load', function () {

    // code should be execute here


    // Sticky header
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 300) {
            $(".navbar").addClass("stickyHeader");
        } else {
            $(".navbar").removeClass("stickyHeader");
        }
    });
    



});



/**
 * ========================================================
 * this function execute when DOM element ready 
 * ===========================================================
 */

$(document).ready(function () {




    // portfolioSlider
    $(function () {
        if ($('.portfolioSlider').length) {
            $(".portfolioSlider").owlCarousel({
                items: 3,
                margin: 30,
                nav: true,
                loop: true,
                autoplay: true,
                autoplayTimeout: 2000,
                animateOut: 'fadeOut',
                smartSpeed: 2000,
                navText: ["<img src='assets/img/arrow-prev.svg' class='img-fluid' />", "<img src='assets/img/arrow-next.svg' class='img-fluid' />"],
                dots: true,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    575: {
                        items: 2
                    },
                    768: {
                        items: 2
                    },
                    991: {
                        items: 3
                    }
                }
            });
        }
    });




    // partner-slider
    $(function () {
        if ($('.partner-slider').length) {
            $(".partner-slider").owlCarousel({
                items: 3,
                margin: 20,
                nav: true,
                loop: true,
                autoplay: true,
                autoplayTimeout: 1500,
                smartSpeed: 1500,
                navText: ["<img src='assets/img/arrow-prev.svg' class='img-fluid' />", "<img src='assets/img/arrow-next.svg' class='img-fluid' />"],
                dots: true,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 2
                    },
                    480: {
                        items: 3
                    },
                    767: {
                        items: 3
                    },
                    1024: {
                        items: 5
                    },
                    1200: {
                        items: 6
                    }
                }
            });
        }

    });


    $(function () {
        if ($(window).width() < 480) {

            $(function () {
                var $pills = $('.tabBtn').click(function () {
                    $pills.removeClass('active');
                    $(this).addClass('active');
                });
            });

            $('#pills-tab').addClass('navTapSlider owl-carousel owl-theme');
            if ($('.navTapSlider').length) {
                $(".navTapSlider").owlCarousel({
                    items: 2,
                    margin: 10,
                    nav: false,
                    loop: true,
                    autoplay: false,
                    dots: true,
                    autoplayTimeout: 2500,
                    smartSpeed: 1500,
                    autoplayHoverPause: true,
                    navText: ["", ""],
                    responsive: {
                        0: {
                            items: 2
                        },
                        480: {
                            items: 2
                        }
                    }
                });
            }
        }
    })



    // Back to top
    var btn = $('#Back-to-Top');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });
    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });




    // magnific popup
    $('.test-popup-link').magnificPopup({
        type: 'iframe'
    });



    // parallax with jarallax
    $(function () {
        if ($('.jarallax').length) {
            jarallax(document.querySelectorAll('.jarallax'));
        }
    });



    // loadMore item
    $(function () {
        if (window.matchMedia("(max-width: 991px)").matches) {
            $('.loadMoreParent .loadMoreItem').slice(0, 4).show();
            $('.btn-loadMore').on('click', function (e) {
                e.preventDefault();
                $('.loadMoreParent .loadMoreItem:hidden').slice(0, 4).show();
                if ($('.loadMoreParent .loadMoreItem:hidden').length < 1) {
                    $(this).addClass('disabled').css('cursor', 'no-drop')
                } else {
                    $(this).removeClass('disabled').css('cursor', 'default')
                }
            })
        } else {
            $('.loadMoreParent .loadMoreItem').slice(0, 12).show();
            $('.btn-loadMore').on('click', function (e) {
                e.preventDefault();
                $('.loadMoreParent .loadMoreItem:hidden').slice(0, 6).show();
                console.log($('.loadMoreParent .loadMoreItem:hidden').length)
                if ($('.loadMoreParent .loadMoreItem:hidden').length < 1) {
                    $(this).addClass('disabled').css('cursor', 'no-drop')
                } else {
                    $(this).removeClass('disabled').css('cursor', 'default')
                }
            });
        }
    })





    // wow js init
    $(function () {
        var wow = new WOW({
            animateClass: 'animated',
            mobile: true
        });
        wow.init();
    });

});
