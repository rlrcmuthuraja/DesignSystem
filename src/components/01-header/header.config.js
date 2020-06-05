module.exports = {
    title: 'Header',
    status: 'prototype',
    default: 'text',
    hidden: false,
    context: {
        logo: null,
        title: null,
        componentPath: '../../../components/raw/header/',
        menuBtn: {
            text: 'Menu',
            hideText: true,
            classes: [
                'mrx-header__nav-toggle',
                'mrx-js-header__nav-toggle'
            ]
        },
        tools: {
            ariaLabel: 'Tools and settings',
            fit: ['tight'],
            classes: [
                'mrx-ui'
            ],
            buttons: [
                {
                    context: {
                        text: 'User',
                        skin: 'link',
                        hideText: true,
                        icon: {
                            symbol: 'user',
                            size: 'base'
                        },
                        items: [
                            {
                                text: 'My profile',
                                href: '#'
                            },
                            {
                                text: 'Notification settings',
                                href: '#'
                            },
                            {
                                text: 'Security',
                                href: '#'
                            },
                            {
                                text: 'Usage',
                                href: '#'
                            },
                            {
                                divider: true
                            },
                            {
                                text: 'Logout',
                                href: '#'
                            }
                        ],
                        caret: false,
                        menuAlignment: 'right'
                    }
                },
                {
                    context: {
                        text: 'Settings',
                        skin: 'link',
                        hideText: true,
                        icon: {
                            symbol: 'cog',
                            size: 'base'
                        },
                        items: [
                            {
                                text: 'Menu Editor',
                                href: '#'
                            },
                            {
                                text: 'Unit of Measure',
                                href: '#'
                            }
                        ],
                        caret: false,
                        menuAlignment: 'right'
                    }
                },
                {
                    context: {
                        text: 'More',
                        skin: 'link',
                        hideText: true,
                        icon: {
                            symbol: 'dots-horizontal',
                            size: 'base'
                        },
                        items: [
                            {
                                text: 'Support',
                                href: '#'
                            },
                            {
                                text: 'Give feedback',
                                href: '#'
                            },
                            {
                                text: 'Community',
                                href: '#'
                            },
                            {
                                text: 'Privacy policy',
                                href: '#'
                            },
                            {
                                text: 'About Muthuraja',
                                href: '#'
                            }
                        ],
                        caret: false,
                        menuAlignment: 'right'
                    }
                }
            ]
        }
    },
    variants: [
        {
            name: 'text',
            label: 'Text as logo',
            context: {
                title: 'My Company'
            }
        },
        {
            name: 'Muthuraja-logotype',
            label: 'Muthuraja Logotype',
            context: {
                logo: {
                    mark: '',
                    type: 'logotype-Muthuraja-neg.svg',
                    alt: 'Muthuraja logo'
                }
            }
        },
        {
            name: 'custom-logotype',
            label: 'Custom Logotype',
            context: {
                logo: {
                    mark: '',
                    type: 'logotype-site-dv.png',
                    alt: 'site logo'
                }
            }
        },
        {
            name: 'Muthuraja-logomark',
            label: 'Muthuraja Logomark + text',
            context: {
                title: 'GSN Management',
                logo: {
                    mark: '',
                    type: 'logomark-Muthuraja-neg.svg',
                    alt: 'Muthuraja logo'
                }
            }
        },
        {
            name: 'custom-logomark',
            label: 'Custom Logomark + text',
            context: {
                title: 'site Viewer',
                logo: {
                    mark: 'logomark-site-dv.png',
                    type: '',
                    alt: 'site logo'
                }
            }
        }
    ]
};
