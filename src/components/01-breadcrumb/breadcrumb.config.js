module.exports = {
    title: 'Breadcrumb',
    default: 'breadcrumb-theme-transparent',
    context: {
        theme: null,
        classes: false,
        items: [
            {
                txt: false,
                href: false
            }
        ]
    },
    variants: [
        {
            name: 'breadcrumb-theme-transparent',
            label: 'Transparent',
            status: 'ready',
            context: {
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
            name: 'breadcrumb-theme-white',
            label: 'Theme White',
            status: 'ready',
            context: {
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
            name: 'breadcrumb-theme-foam',
            label: 'Theme Foam',
            status: 'ready',
            context: {
                theme: 'foam',
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
            name: 'breadcrumb-with-dropdown',
            label: 'With Dropdown',
            status: 'prototype',
            context: {
                items: [
                    {
                        txt: 'Link 1',
                        href: '#',
                        dropdownContext: {
                            iconContext: {
                                size: 'tiny',
                                symbol: 'angle-down'
                            },
                            items: [
                                {
                                    txt: 'Link 1A',
                                    href: '#',
                                },
                                {
                                    txt: 'Link 1B',
                                    href: '#',
                                },
                                {
                                    txt: 'Link 1C',
                                    href: '#',
                                }
                            ]
                        }
                    },
                    {
                        txt: 'Link 1',
                        href: '#'
                    },
                    {
                        txt: 'Link 3',
                        href: '#',
                        dropdownContext: {
                            toggleTxt: false,
                            toggleClasses: [
                                'mrx-btn',
                                'mrx-btn--skin-link',
                                'mrx-btn--size-cozy'
                            ],
                            iconContext: {
                                size: 'tiny',
                                symbol: 'angle-down'
                            },
                            items: [
                                {
                                    txt: 'Link 3A',
                                    href: '#',
                                },
                                {
                                    txt: 'Link 3B',
                                    href: '#',
                                }
                            ]
                        }
                    },
                    {
                        txt: 'Link 4',
                        href: '#'
                    }
                ]
            }
        }
    ]
};
