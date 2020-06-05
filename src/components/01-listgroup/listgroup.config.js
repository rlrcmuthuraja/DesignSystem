module.exports = {
    title: 'List Group',
    default: 'listgroup-default',
    status: 'prototype',
    collated: false,
    context: {
        title: null,
        rows: null,
        href: null,
        selected: false,
        status: null,
        metadata: null,
    },
    variants: [
        {
            name: 'listgroup-default',
            label: 'Default',
            context: {
                rows: [
                    {
                        label: 'Pacific Drilling',
                        href: '#'
                    },
                    {
                        label: 'Floatel test',
                        href: '#'
                    },
                    {
                        label: 'Maersk',
                        href: '#'
                    },
                    {
                        label: 'BWO',
                        href: '#'
                    }
                ]
            }
        },
        {
            name: 'listgroup-selected',
            label: 'Selected',
            context: {
                rows: [
                    {
                        label: 'Pacific Drilling',
                        href: '#'
                    },
                    {
                        label: 'Floatel test',
                        href: '#'
                    },
                    {
                        label: 'Maersk',
                        href: '#',
                        selected: true
                    },
                    {
                        label: 'BWO',
                        href: '#'
                    }
                ]
            }
        },
        {
            name: 'listgroup-title',
            label: 'With Title',
            context: {
                title: 'Listgroup Title',
                rows: [
                    {
                        label: 'Pacific Drilling',
                        href: '#'
                    },
                    {
                        label: 'Floatel test',
                        href: '#'
                    },
                    {
                        label: 'Maersk',
                        href: '#'
                    },
                    {
                        label: 'BWO',
                        href: '#'
                    }
                ]
            }
        },
        {
            name: 'listgroup-row-actions',
            label: 'With Actions',
            context: {
                actions: {
                    ariaLabel: 'Actions',
                    fit: ['tight'],
                    classes: [
                        'mrx-listgroup__actions'
                    ],
                    buttons: [
                        {
                            context: {
                                text: 'Bookmark',
                                skin: 'flat',
                                size: 'base',
                                href: '#',
                                hideText: true,
                                icon: {
                                    symbol: 'bookmark',
                                    size: 'base'
                                }
                            }
                        },
                        {
                            context: {
                                text: 'Settings',
                                skin: 'flat',
                                size: 'base',
                                hideText: true,
                                icon: {
                                    symbol: 'cog',
                                    size: 'base'
                                }
                            }
                        },
                        {
                            context: {
                                text: 'Delete',
                                skin: 'flat',
                                size: 'base',
                                hideText: true,
                                icon: {
                                    symbol: 'close',
                                    size: 'base'
                                }
                            }
                        }
                    ]
                },
                rows: [
                    {
                        label: 'Pacific Drilling',
                        href: '#',
                    },
                    {
                        label: 'Floatel test',
                        href: '#'
                    },
                    {
                        label: 'Maersk',
                        href: '#'
                    },
                    {
                        label: 'BWO',
                        href: '#'
                    }
                ]
            }
        },
        {
            name: 'listgroup-badge',
            label: 'With Badge',
            context: {
                rows: [
                    {
                        label: 'Pacific Drilling',
                        href: '#',
                        badge: '2'
                    },
                    {
                        label: 'Floatel test',
                        href: '#',
                        badge: '18'
                    },
                    {
                        label: 'Maersk',
                        href: '#',
                        badge: '37'
                    },
                    {
                        label: 'BWO',
                        href: '#',
                        badge: '9'
                    }
                ]
            }
        },
        {
            name: 'listgroup-metadata',
            label: 'With Metadata',
            context: {
                rows: [
                    {
                        label: 'Pacific Drilling',
                        href: '#',
                        metaData: '25 minutes ago'
                    },
                    {
                        label: 'Floatel test',
                        href: '#',
                        metaData: '2 hours ago'
                    },
                    {
                        label: 'Maersk',
                        href: '#',
                        metaData: '5 weeks ago'
                    },
                    {
                        label: 'BWO',
                        href: '#',
                        metaData: 'a year ago'
                    }
                ]
            }
        },
    ]
};