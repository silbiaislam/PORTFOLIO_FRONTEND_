$(document).ready(function () {
    
    let $btns = $('.gallery-area .button-group button');

    $btns.click(function (e) {

        $('.gallery-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.gallery-area .grid').isotope({
            filter: selector
        });

        return false;
    });

    $('.gallery-area .button-group #btn1').trigger('click');

    $('.gallery-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true },

        image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>Taken from Unsplash</small>';
			}
		}
    });

    // sticky navigation menu

    let nav_offset_top = $('.header_area').height() + 50;

    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area .main-menu').addClass('navbar_fixed');
                } else {
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarFixed();

});