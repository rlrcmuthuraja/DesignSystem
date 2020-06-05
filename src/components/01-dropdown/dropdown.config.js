module.exports = {
    title: 'Dropdown',
    status: 'prototype',
    default: 'dropdown-primary-single',
    context: {
        classes: false,
        text: false,
        skin: 'secondary',
        size: 'large',
        split: false,
        icon: false,
        iconAfter: false,
        hideText: false,
        caret: true,
        items: [
            {
                text: false,
                href: false,
                icon: false,
                divider: false
            }
        ],
        menuAlignment: 'left'
    },
    variants: [
        {
            name: 'dropdown-primary-single',
            label: 'Skin: Primary, Single',
            context: {
                text: 'Dropdown',
                skin: 'primary',
                size: 'large',
                items: [
                    {
                        text: 'Action',
                        href: '#'
                    },
                    {
                        text: 'Another Action',
                        href: '#'
                    },
                    {
                        divider: true
                    },
                    {
                        text: 'Action with subitems',
                        href: '#',
                        subitems: [
                            {
                                text: 'Sub action',
                                href: '#'
                            },
                            {
                                text: 'Another sub action',
                                href: '#'
                            }
                        ]
                    },
                    {
                        text: 'Action with subitems',
                        href: '#',
                        subitems: [
                            {
                                text: 'Sub action',
                                href: '#'
                            },
                            {
                                text: 'Another sub action',
                                href: '#'
                            }
                        ]
                    },
                    {
                        text: 'Action with icon',
                        href: '#',
                        icon: {
                            symbol: 'box',
                            size: 'base'
                        }
                    },
                    {
                        text: 'Action with icon and subitems',
                        href: '#',
                        icon: {
                            symbol: 'box',
                            size: 'base'
                        },
                        subitems: [
                            {
                                text: 'Sub action',
                                href: '#'
                            },
                            {
                                text: 'Another sub action',
                                href: '#'
                            }
                        ]
                    }
                ]
            }
        },
        {
            name: 'dropdown-secondary-single',
            label: 'Skin: Secondary, Single',
            context: {
                text: 'Dropdown',
                skin: 'secondary',
                size: 'large',
                items: [
                    {
                        text: 'Action',
                        href: '#'
                    },
                    {
                        text: 'Another Action',
                        href: '#'
                    },
                    {
                        divider: true
                    },
                    {
                        text: 'Action with subitems',
                        href: '#',
                        subitems: [
                            {
                                text: 'Sub action',
                                href: '#'
                            },
                            {
                                text: 'Another sub action',
                                href: '#'
                            }
                        ]
                    },
                    {
                        text: 'Action with subitems',
                        href: '#',
                        subitems: [
                            {
                                text: 'Sub action',
                                href: '#'
                            },
                            {
                                text: 'Another sub action',
                                href: '#'
                            }
                        ]
                    },
                    {
                        text: 'Action with icon',
                        href: '#',
                        icon: {
                            symbol: 'box',
                            size: 'base'
                        }
                    },
                    {
                        text: 'Action with icon and subitems',
                        href: '#',
                        icon: {
                            symbol: 'box',
                            size: 'base'
                        },
                        subitems: [
                            {
                                text: 'Sub action',
                                href: '#'
                            },
                            {
                                text: 'Another sub action',
                                href: '#'
                            }
                        ]
                    }
                ]
            }
        },
        {
            name: 'dropdown-primary-split',
            label: 'Skin: Primary, Split',
            context: {
                text: 'Save & Close',
                skin: 'primary',
                size: 'large',
                split: true,
                items: [
                    {
                        text: 'Action',
                        href: '#'
                    },
                    {
                        text: 'Another Action',
                        href: '#'
                    },
                    {
                        divider: true
                    },
                    {
                        text: 'Action with subitems',
                        href: '#',
                        subitems: [
                            {
                                text: 'Sub action',
                                href: '#'
                            },
                            {
                                text: 'Another sub action',
                                href: '#'
                            }
                        ]
                    },
                    {
                        text: 'Action with subitems',
                        href: '#',
                        subitems: [
                            {
                                text: 'Sub action',
                                href: '#'
                            },
                            {
                                text: 'Another sub action',
                                href: '#'
                            }
                        ]
                    },
                    {
                        text: 'Action with icon',
                        href: '#',
                        icon: {
                            symbol: 'box',
                            size: 'base'
                        }
                    },
                    {
                        text: 'Action with icon and subitems',
                        href: '#',
                        icon: {
                            symbol: 'box',
                            size: 'base'
                        },
                        subitems: [
                            {
                                text: 'Sub action',
                                href: '#'
                            },
                            {
                                text: 'Another sub action',
                                href: '#'
                            }
                        ]
                    }
                ]
            }
        },
        {
            name: 'dropdown-secondary-split',
            label: 'Skin: Secondary, Split',
            context: {
                text: 'Save & Close',
                skin: 'secondary',
                size: 'large',
                split: true,
                items: [
                    {
                        text: 'Action',
                        href: '#'
                    },
                    {
                        text: 'Another Action',
                        href: '#'
                    },
                    {
                        divider: true
                    },
                    {
                        text: 'Action with subitems',
                        href: '#',
                        subitems: [
                            {
                                text: 'Sub action',
                                href: '#'
                            },
                            {
                                text: 'Another sub action',
                                href: '#'
                            }
                        ]
                    },
                    {
                        text: 'Action with subitems',
                        href: '#',
                        subitems: [
                            {
                                text: 'Sub action',
                                href: '#'
                            },
                            {
                                text: 'Another sub action',
                                href: '#'
                            }
                        ]
                    },
                    {
                        text: 'Action with icon',
                        href: '#',
                        icon: {
                            symbol: 'box',
                            size: 'base'
                        }
                    },
                    {
                        text: 'Action with icon and subitems',
                        href: '#',
                        icon: {
                            symbol: 'box',
                            size: 'base'
                        },
                        subitems: [
                            {
                                text: 'Sub action',
                                href: '#'
                            },
                            {
                                text: 'Another sub action',
                                href: '#'
                            }
                        ]
                    }
                ]
            }
        }
    ]
};
