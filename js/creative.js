/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

var viewport = 'M';

function fixRTL() {

    var newViewport = null;
    if ($('.device-xs').is(':visible')) { newViewport = 'XS'; }
    if ($('.device-sm').is(':visible')) { newViewport = 'S'; }
    if ($('.device-md').is(':visible')) { newViewport = 'M'; }
    if ($('.device-lg').is(':visible')) { newViewport = 'L'; }

    if (viewport == null || newViewport == null || viewport == newViewport) {
        return;
    }

    // Navbar in the collapsed version is top-to-bottom, so should be reversed
    var navbar = $('.navbar-right');

    if (newViewport == 'XS') {
        // Inverse the order
        navbar.children('li').sort(function(left,right) {
            return $(left).order < $(right).order;
        }).each(function() {
            navbar.prepend(this)
        });
    }

    if (newViewport != 'XS' && viewport == 'XS') {
        // Normal order
        navbar.children('li').sort(function(left,right) {
            return $(left).order > $(right).order;
        }).each(function() {
            navbar.prepend(this)
        });
    }

    viewport = newViewport;
};

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    $(window).resize( function () {
        fixRTL();
    });

    $(window).load(function() {
        fixRTL();
    });

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict
