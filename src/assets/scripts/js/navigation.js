var navigation = (function() {
    function toggleNav() {

        // querySelector returns the first element it finds with the correct selector
        // addEventListener is roughly analogous to $.on()

        var pageBody,
            pageHeader,
            pageOverlay,
            toggleNavBtn,
            nav;

        pageBody        = document.querySelector('.mrx-page');
        pageHeader      = document.querySelector('.mrx-page__header');
        pageOverlay     = document.querySelector('.mrx-page__overlay');
        toggleNavBtn    = document.querySelector('.mrx-js-header__nav-toggle');
        nav             = document.querySelector('.mrx-page__nav');

        var navOpen = false;

        if(toggleNavBtn) {
            toggleNavBtn.onclick = function (e) {
                e.preventDefault();

                if ((navOpen === false) && (!pageBody.classList.contains('mrx-is-locked'))) {
                    toggleNavBtn.classList.add('mrx-is-active');
                    pageBody.classList.add('mrx-is-locked');
                    pageHeader.classList.add('mrx-has-nav-open');
                    pageOverlay.classList.add('mrx-is-active');
                    nav.classList.remove('mrx-is-hidden');

                    setTimeout(function () {
                        nav.classList.add('mrx-is-active');
                        pageOverlay.classList.add('mrx-is-animating');
                    }, 350);

                    navOpen = true;
                }

                else if ((navOpen === true) && (pageBody.classList.contains('mrx-is-locked'))) {
                    nav.classList.remove('mrx-is-active');
                    toggleNavBtn.classList.remove('mrx-is-active');
                    pageOverlay.classList.remove('mrx-is-animating');

                    setTimeout(function () {
                        pageBody.classList.remove('mrx-is-locked');
                        pageHeader.classList.remove('mrx-has-nav-open');
                        pageOverlay.classList.remove('mrx-is-active');
                        nav.classList.add('mrx-is-hidden');
                    }, 350);

                    navOpen = false;
                }
            };
        }

        if(pageOverlay) {
            pageOverlay.onclick = function (e) {
                e.preventDefault();

                if(((navOpen === true)) && (pageBody.classList.contains('mrx-is-locked'))) {
                    nav.classList.remove('mrx-is-active');
                    toggleNavBtn.classList.remove('mrx-is-active');
                    pageOverlay.classList.remove('mrx-is-animating');

                    setTimeout(function () {
                        pageBody.classList.remove('mrx-is-locked');
                        pageHeader.classList.remove('mrx-has-nav-open');
                        pageOverlay.classList.remove('mrx-is-active');
                        nav.classList.add('mrx-is-hidden');
                    }, 350);

                    navOpen = false;
                }
            };
        }
    }

    return {
        toggleNav: toggleNav
    };
})();

document.addEventListener('DOMContentLoaded', function(event) {
    navigation.toggleNav();
});

