module.exports = {
    title: 'Tabs',
    default: 'tabs-theme-transparent',
    status: 'prototype',
    collated: false,
    context: {
        theme: null,
        classes: false,
        items: [
            {
                txt: false,
                href: false,
                active: false
            }
        ]
    },
    variants: [
        {
            name: 'tabs-theme-transparent',
            label: 'Transparent',
            status: 'prototype',
            context: {
                items: [
                    {
                        txt: 'Home',
                        href: '#',
                        active: true,
                        icon: {
                            size: 'base',
                            symbol: 'box'
                        }
                    },
                    {
                        txt: 'Applications',
                        href: '#'
                    },
                    {
                        txt: 'GSN Management',
                        href: '#'
                    },
                    {
                        txt: 'Node Offshore'
                    }
                ]
            }
        },
        {
            name: 'tabs-theme-white',
            label: 'Theme White',
            status: 'prototype',
            context: {
                theme: 'white',
                items: [
                    {
                        txt: 'Home',
                        href: '#',
                        active: true,
                        icon: {
                            size: 'base',
                            symbol: 'box'
                        }
                    },
                    {
                        txt: 'Applications',
                        href: '#'
                    },
                    {
                        txt: 'GSN Management',
                        href: '#'
                    },
                    {
                        txt: 'Node Offshore'
                    }
                ]
            }
        },
        {
            name: 'tabs-theme-foam',
            label: 'Theme Foam',
            status: 'prototype',
            context: {
                theme: 'foam',
                items: [
                    {
                        txt: 'Home',
                        href: '#',
                        active: true,
                        icon: {
                            size: 'base',
                            symbol: 'box'
                        }
                    },
                    {
                        txt: 'Applications',
                        href: '#'
                    },
                    {
                        txt: 'GSN Management',
                        href: '#'
                    },
                    {
                        txt: 'Node Offshore'
                    }
                ]
            }
        }
    ]
};