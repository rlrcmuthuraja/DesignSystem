module.exports = {
    title: 'Dashboard Example',
    status: 'prototype',
    hidden: false,
    context: {
        pageTitle: 'Dashboard Title',
        breadcrumbContext: {
            theme: 'white',
            items: [
                {
                    txt: 'Home',
                    href: '#'
                },
                {
                    txt: 'Applications',
                    href: '#'
                },
                {
                    txt: 'My App'
                }
            ]
        },
        navContext: {
            classes: [
                'mrx-nav--main'
            ],
            header: 'Main Navigation',
            hideHeader: true,
            search: true,
            items: [
                {
                    text: 'Home',
                    href: '#'
                },
                {
                    text: 'Application',
                    href: '#'
                },
                {
                    text: 'Item Link text',
                    href: '#'
                }
            ]
        },
        tabs: {
            items: [
                {
                    txt: 'Foo',
                    href: '#',
                    active: true
                },
                {
                    txt: 'Bar',
                    href: '#'
                },
                {
                    txt: 'Baz',
                    href: '#'
                }
            ]
        }
    }
};
