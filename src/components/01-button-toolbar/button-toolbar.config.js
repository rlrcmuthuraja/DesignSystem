module.exports = {
    title: 'Button Toolbar',
    default: 'btn-toolbar',
    status: 'prototype',
    collated: false,
    context: {
        ariaLabel: false,
        classes: false
    },
    variants: [
        {
            name: 'btn-toolbar',
            label: 'Button Toolbar',
            context: {
                ariaLabel: 'A toolbar with button groups',
                groups: [
                    {
                        context: {
                            ariaLabel: 'First group',
                            fit: ['tight'],
                            buttons: [
                                {
                                    context: {
                                        text: 'Pull Up',
                                        skin: 'secondary',
                                        size: 'large',
                                        icon: {
                                            symbol: 'pull-up',
                                            size: 'base'
                                        },
                                        hideText: true
                                    }
                                },
                                {
                                    context: {
                                        text: 'Pull Right',
                                        skin: 'secondary',
                                        size: 'large',
                                        icon: {
                                            symbol: 'pull-right',
                                            size: 'base'
                                        },
                                        hideText: true
                                    }
                                },
                                {
                                    context: {
                                        text: 'Pull Down',
                                        skin: 'secondary',
                                        size: 'large',
                                        icon: {
                                            symbol: 'pull-down',
                                            size: 'base'
                                        },
                                        hideText: true
                                    }
                                },
                                {
                                    context: {
                                        text: 'Pull Left',
                                        skin: 'secondary',
                                        size: 'large',
                                        icon: {
                                            symbol: 'pull-left',
                                            size: 'base'
                                        },
                                        hideText: true
                                    }
                                }
                            ]
                        }
                    },
                    {
                        context: {
                            ariaLabel: 'Second group',
                            fit: ['tight'],
                            align: ['end'],
                            buttons: [
                                {
                                    context: {
                                        text: 'Pin to dashboard',
                                        skin: 'secondary',
                                        size: 'large',
                                        icon: {
                                            symbol: 'pin',
                                            size: 'base'
                                        },
                                    }
                                },
                                {
                                    context: {
                                        text: 'Attach File',
                                        skin: 'secondary',
                                        size: 'large',
                                        icon: {
                                            symbol: 'attachment',
                                            size: 'base'
                                        },
                                    }
                                },
                                {
                                    context: {
                                        text: 'Search',
                                        skin: 'secondary',
                                        size: 'large',
                                        icon: {
                                            symbol: 'search',
                                            size: 'base'
                                        },
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        }
    ]
};