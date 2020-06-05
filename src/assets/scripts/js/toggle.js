var KDS = KDS || {};

KDS.toggle = (function() {
    'use strict';

    var setEventListeners = function() {
        $('.mrx-js-toggle__handle').on('click', function(e){
            e.preventDefault();
            e.stopPropagation();
            toggleTarget(e);
            $(this).toggleClass('mrx-is-open');

            if ($(this).attr('aria-expanded','false')) {
                $(this).attr('aria-expanded','true');
            } else if ($(this).attr('aria-expanded','true')) {
                $(this).attr('aria-expanded','false');
            }

        });
    };

    var toggleTarget = function(e) {


        var $toggle = $(e.target).closest('.mrx-js-toggle');
        var $toggleTarget = $toggle.find('.mrx-js-toggle__target:first');

        if (!$toggle.hasClass('mrx-is-collapsed') && $toggle.hasClass('mrx-is-expanded')) {
            $toggle.addClass('mrx-is-collapsing');

            $toggleTarget.slideUp(300, function() {
                $toggle.addClass('mrx-is-collapsed');
                $toggle.removeClass('mrx-is-expanded');
                $toggle.removeClass('mrx-is-collapsing');
                $toggleTarget.attr('aria-hidden', 'true');
            });

        } else if (!$toggle.hasClass('mrx-is-expanded') && $toggle.hasClass('mrx-is-collapsed')) {
            $toggle.addClass('mrx-is-expanding');

            $toggleTarget.slideDown(300, function() {
                $toggle.removeClass('mrx-is-collapsed');
                $toggle.addClass('mrx-is-expanded');
                $toggle.removeClass('mrx-is-expanding');
                $toggleTarget.attr('aria-hidden', 'false');
            });
        }
    };

    var initialize = function initialize() {
        setEventListeners();
    };

    var publicVars = {
        'initialize': initialize
    };

    return publicVars;
}());

$(document).ready(function() {
    'use strict';

    KDS.toggle.initialize();
});