module.exports = {
    title: 'Card',
    default: 'card-default',
    status: 'prototype',
    collated: false,
    context: {
        title: false,
        skin: false,
        content: false,
        img: false,
        cta: {
            text: false,
            href: false,
            size: 'base',
            skin: 'flat',
            classes: ['mrx-card__cta']
        },
        tags: false
    },
    variants: [
        {
            name: 'card-default',
            label: 'Default',
            context: {
                title: 'Card title',
                skin: 'default',
                cta: {
                    text: 'Learn More',
                    href: '#',
                },
                content: 'A card is container for a few short, related pieces of information. It roughly resembles a playing card in size and shape, and is intended as a linked, short representation of a conceptual unit.'
            }
        },
        {
            name: 'card-tags',
            label: 'With Tags',
            context: {
                title: 'Card title',
                skin: 'default',
                cta: {
                    text: 'Learn More',
                    href: '#',
                },
                tags: [
                    'Tag',
                    'Category',
                    'Whatever'
                ],
                content: 'A card chunks several different (but related) pieces of information into one digestible unit — be it an article on a news website, a product on an ecommerce site, or a post on a social app.'
            }
        },
        {
            name: 'card-img',
            label: 'With Image',
            context: {
                title: 'Card title',
                skin: 'default',
                cta: {
                    text: 'Learn More',
                    href: '#',
                },
                tags: [
                    'Tag',
                    'Category',
                    'Whatever'
                ],
                img: {
                    url: '/assets/img/content/480x640(3_2)-cargo.jpg',
                    alt: 'Alternative text'
                },
                content: 'A single card will typically include a few different types of media, such as an image, a title, a synopsis, sharing icons, or a call-to-action button — all associated with the same concept.'
            }
        }
    ]
};