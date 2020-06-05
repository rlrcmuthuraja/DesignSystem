module.exports = {
    title: 'Hamburger',
    status: 'prototype',
    default: 'spinning-burger',
    context: {
        text: false,
        hideText: false,
        classes: false
    },
    variants: [
        {
            name: 'spinning-burger',
            label: 'Spin and close',
            context: {
                text: 'Menu Button',
                hideText: true,
                classes: [
                    'mrx-header__nav-toggle',
                    'mrx-js-header__menu-toggle'
                ]
            }
        }
    ]
};