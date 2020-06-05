module.exports = {
    title: 'Navigation' ,
    status: 'prototype',
    default: 'default',
    context: {
        classes: false,
        header: false,
        hideHeader: true,
        id: false,
        items: false,
        stackedList: false,
        search: false
    },
    variants: [
        {
            name: 'default',
            label: 'Nav Default',
            context: {
                header: 'Navigation header',
                items: [
                    {
                        text: 'Link text',
                        href: '#'
                    },
                    {
                        text: 'Link text',
                        href: '#'
                    },
                    {
                        text: 'Link text',
                        href: '#leie-buss'
                    }
                ]
            }
        }
    ]
};