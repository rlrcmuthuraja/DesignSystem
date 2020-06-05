module.exports = {
    title: 'Topic Tile',
    default: 'topictile-link',
    status: 'prototype',
    collated: false,
    context: {
        title: false,
        img: {
            url: false,
            alt: false
        },
        href: false,
        classes: false
    },
    variants: [
        {
            name: 'topictile-link',
            label: 'With link',
            context: {
                title: 'Maritime Offshore',
                img: {
                    url: '/assets/img/icons/industries/maritime-offshore-white.svg',
                    alt: 'Maritime Offshore'
                },
                href: '#'
            }
        },
        {
            name: 'topictile-nolink',
            label: 'Without link',
            context: {
                title: 'Maritime Offshore',
                img: {
                    url: '/assets/img/icons/industries/subsea-white.svg',
                    alt: 'Subsea'
                }
            }
        }
    ]
};