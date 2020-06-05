module.exports = {
    title: 'Pagination',
    status: 'prototype',
    default: 'default',
    context: {
        ariaLabel: null,
        pages: null
    },
    variants: [
        {
            name: 'default',
            label: 'Default',
            context: {
                ariaLabel: 'Aria label example',
                pages: [
                    {
                        item: {
                            text: 'Previous',
                            skin: 'secondary',
                            href: '#',
                            icon: {
                                symbol: 'angle-left',
                                size: 'base'
                            },
                            classes: [
                                'mrx-pagination__link'
                            ]
                        }
                    },
                    {
                        item: {
                            text: '1',
                            skin: 'secondary',
                            href: '#',
                            classes: [
                                'mrx-pagination__link'
                            ]
                        }
                    },
                    {
                        item: {
                            text: '2',
                            skin: 'secondary',
                            href: '#',
                            classes: [
                                'mrx-pagination__link'
                            ]
                        }
                    },
                    {
                        item: {
                            text: '3',
                            skin: 'secondary',
                            href: '#',
                            classes: [
                                'mrx-pagination__link'
                            ]
                        }
                    },
                    {
                        item: {
                            text: '4',
                            skin: 'secondary',
                            href: '#',
                            classes: [
                                'mrx-pagination__link'
                            ]
                        }
                    },
                    {
                        item: {
                            text: '5',
                            skin: 'secondary',
                            href: '#',
                            classes: [
                                'mrx-pagination__link'
                            ]
                        }
                    },
                    {
                        item: {
                            text: 'Next',
                            skin: 'secondary',
                            href: '#',
                            icon: {
                                symbol: 'angle-right',
                                size: 'base'
                            },
                            iconAfter: true,
                            classes: [
                                'mrx-pagination__link'
                            ]
                        }
                    }
                ]
            }
        },
        {
            name: 'pagination-icons-only',
            label: 'Icons only',
            context: {
                ariaLabel: 'Aria label example',
                pages: [
                    {
                        item: {
                            text: 'Previous',
                            skin: 'secondary',
                            href: '#',
                            icon: {
                                symbol: 'angle-left',
                                size: 'base'
                            },
                            hideText: true,
                            classes: [
                                'mrx-pagination__link'
                            ]
                        }
                    },
                    {
                        item: {
                            text: '1',
                            skin: 'secondary',
                            href: '#',
                            classes: [
                                'mrx-pagination__link'
                            ]
                        }
                    },
                    {
                        item: {
                            text: '2',
                            skin: 'secondary',
                            href: '#',
                            classes: [
                                'mrx-pagination__link'
                            ]
                        }
                    },
                    {
                        item: {
                            text: '3',
                            skin: 'secondary',
                            href: '#',
                            classes: [
                                'mrx-pagination__link'
                            ]
                        }
                    },
                    {
                        item: {
                            text: '4',
                            skin: 'secondary',
                            href: '#',
                            classes: [
                                'mrx-pagination__link'
                            ]
                        }
                    },
                    {
                        item: {
                            text: '5',
                            skin: 'secondary',
                            href: '#',
                            classes: [
                                'mrx-pagination__link'
                            ]
                        }
                    },
                    {
                        item: {
                            text: 'Next',
                            skin: 'secondary',
                            href: '#',
                            icon: {
                                symbol: 'angle-right',
                                size: 'base'
                            },
                            iconAfter: true,
                            hideText: true,
                            classes: [
                                'mrx-pagination__link'
                            ]
                        }
                    }
                ]
            }
        },
        {
            name: 'pagination-disabled-active',
            label: 'Disabled and active',
            context: {
                ariaLabel: 'Aria label example',
                pages: [
                    {
                        item: {
                            text: 'Previous',
                            skin: 'secondary',
                            disabled: true,
                            href: '#',
                            icon: {
                                symbol: 'angle-left',
                                size: 'base'
                            },
                            classes: [
                                'mrx-pagination__link'
                            ]
                        }
                    },
                    {
                        active: true,
                        item: {
                            text: '1',
                            skin: 'secondary',
                            href: '#',
                            classes: [
                                'mrx-pagination__link'
                            ]
                        }
                    },
                    {
                        item: {
                            text: '2',
                            skin: 'secondary',
                            href: '#',
                            classes: [
                                'mrx-pagination__link'
                            ]
                        }
                    },
                    {
                        item: {
                            text: '3',
                            skin: 'secondary',
                            href: '#',
                            classes: [
                                'mrx-pagination__link'
                            ]
                        }
                    },
                    {
                        item: {
                            text: '4',
                            skin: 'secondary',
                            href: '#',
                            classes: [
                                'mrx-pagination__link'
                            ]
                        }
                    },
                    {
                        item: {
                            text: '5',
                            skin: 'secondary',
                            href: '#',
                            classes: [
                                'mrx-pagination__link'
                            ]
                        }
                    },
                    {
                        item: {
                            text: 'Next',
                            skin: 'secondary',
                            href: '#',
                            icon: {
                                symbol: 'angle-right',
                                size: 'base'
                            },
                            iconAfter: true,
                            classes: [
                                'mrx-pagination__link'
                            ]
                        }
                    }
                ]
            }
        },
        {
            name: 'pagination-align-center',
            label: 'Align Center',
            context: {
                ariaLabel: 'Aria label example',
                align: 'center',
                pages: [
                    {
                        item: {
                            text: 'Previous',
                            skin: 'secondary',
                            href: '#',
                            icon: {
                                symbol: 'angle-left',
                                size: 'base'
                            },
                            classes: [
                                'mrx-pagination__link'
                            ]
                        }
                    },
                    {
                        item: {
                            text: '1',
                            skin: 'secondary',
                            href: '#',
                            classes: [
                                'mrx-pagination__link'
                            ]
                        }
                    },
                    {
                        item: {
                            text: '2',
                            skin: 'secondary',
                            href: '#',
                            classes: [
                                'mrx-pagination__link'
                            ]
                        }
                    },
                    {
                        item: {
                            text: '3',
                            skin: 'secondary',
                            href: '#',
                            classes: [
                                'mrx-pagination__link'
                            ]
                        }
                    },
                    {
                        item: {
                            text: '4',
                            skin: 'secondary',
                            href: '#',
                            classes: [
                                'mrx-pagination__link'
                            ]
                        }
                    },
                    {
                        item: {
                            text: '5',
                            skin: 'secondary',
                            href: '#',
                            classes: [
                                'mrx-pagination__link'
                            ]
                        }
                    },
                    {
                        item: {
                            text: 'Next',
                            skin: 'secondary',
                            href: '#',
                            icon: {
                                symbol: 'angle-right',
                                size: 'base'
                            },
                            iconAfter: true,
                            classes: [
                                'mrx-pagination__link'
                            ]
                        }
                    }
                ]
            }
        },
        {
            name: 'pagination-align-right',
            label: 'Align End',
            context: {
                ariaLabel: 'Aria label example',
                align: 'end',
                pages: [
                    {
                        item: {
                            text: 'Previous',
                            skin: 'secondary',
                            href: '#',
                            icon: {
                                symbol: 'angle-left',
                                size: 'base'
                            },
                            classes: [
                                'mrx-pagination__link'
                            ]
                        }
                    },
                    {
                        item: {
                            text: '1',
                            skin: 'secondary',
                            href: '#',
                            classes: [
                                'mrx-pagination__link'
                            ]
                        }
                    },
                    {
                        item: {
                            text: '2',
                            skin: 'secondary',
                            href: '#',
                            classes: [
                                'mrx-pagination__link'
                            ]
                        }
                    },
                    {
                        item: {
                            text: '3',
                            skin: 'secondary',
                            href: '#',
                            classes: [
                                'mrx-pagination__link'
                            ]
                        }
                    },
                    {
                        item: {
                            text: '4',
                            skin: 'secondary',
                            href: '#',
                            classes: [
                                'mrx-pagination__link'
                            ]
                        }
                    },
                    {
                        item: {
                            text: '5',
                            skin: 'secondary',
                            href: '#',
                            classes: [
                                'mrx-pagination__link'
                            ]
                        }
                    },
                    {
                        item: {
                            text: 'Next',
                            skin: 'secondary',
                            href: '#',
                            icon: {
                                symbol: 'angle-right',
                                size: 'base'
                            },
                            iconAfter: true,
                            classes: [
                                'mrx-pagination__link'
                            ]
                        }
                    }
                ]
            }
        }
    ]
};
