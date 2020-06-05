module.exports = {
    title: 'Button Group',
    default: 'btn-group-align-start',
    status: 'prototype',
    collated: false,
    context: {
        fit: [],
        align: [],
        ariaLabel: false,
        buttons: false,
        classes: false
    },
    variants: [
        {
            name: 'btn-group-align-start',
            label: 'Align Start',
            context: {
                ariaLabel: 'Aria label example',
                align: ['start'],
                buttons: [
                    { context: { text: 'Second', skin: 'secondary', size: 'large' } },
                    { context: { text: 'First', skin: 'secondary', size: 'large', } },
                    { context: { text: 'Third', skin: 'secondary', size: 'large' } }
                ]
            }
        },
        {
            name: 'btn-group-align-center',
            label: 'Align Center',
            context: {
                ariaLabel: 'Aria label example',
                align: ['center'],
                buttons: [
                    { context: { text: 'First', skin: 'secondary', size: 'large' } },
                    { context: { text: 'Second', skin: 'secondary', size: 'large' } },
                    { context: { text: 'Third', skin: 'secondary', size: 'large' } }
                ]
            }
        },
        {
            name: 'btn-group-align-end',
            label: 'Align End',
            context: {
                ariaLabel: 'Aria label example',
                align: ['end'],
                buttons: [
                    { context: { text: 'First', skin: 'secondary', size: 'large' } },
                    { context: { text: 'Second', skin: 'secondary', size: 'large' } },
                    { context: { text: 'Third', skin: 'secondary', size: 'large' } }
                ]
            }
        },
        {
            name: 'btn-group-align-top',
            label: 'Align Top',
            context: {
                ariaLabel: 'Aria label example',
                align: ['top'],
                buttons: [
                    { context: { text: 'First', skin: 'secondary', size: 'tiny' } },
                    { context: { text: 'Second', skin: 'secondary', size: 'base' } },
                    { context: { text: 'Third', skin: 'secondary', size: 'large' } }
                ]
            }
        },
        {
            name: 'btn-group-align-middle',
            label: 'Align Middle',
            context: {
                ariaLabel: 'Aria label example',
                align: ['middle'],
                buttons: [
                    { context: { text: 'First', skin: 'secondary', size: 'tiny' } },
                    { context: { text: 'Second', skin: 'secondary', size: 'base' } },
                    { context: { text: 'Third', skin: 'secondary', size: 'large' } }
                ]
            }
        },
        {
            name: 'btn-group-align-bottom',
            label: 'Align Bottom',
            context: {
                ariaLabel: 'Aria label example',
                align: ['bottom'],
                buttons: [
                    { context: { text: 'First', skin: 'secondary', size: 'tiny' } },
                    { context: { text: 'Second', skin: 'secondary', size: 'base' } },
                    { context: { text: 'Third', skin: 'secondary', size: 'large' } }
                ]
            }
        },
        {
            name: 'btn-group-fit-stretch',
            label: 'Fit Stretch',
            context: {
                ariaLabel: 'Aria label example',
                fit: ['stretch'],
                buttons: [
                    { context: { text: 'First', skin: 'secondary', size: 'large' } },
                    { context: { text: 'Second', skin: 'secondary', size: 'large' } },
                    { context: { text: 'Third', skin: 'secondary', size: 'large' } }
                ]
            }
        },
        {
            name: 'btn-group-tight',
            label: 'Fit Tight',
            context: {
                ariaLabel: 'Aria label example',
                fit: ['tight'],
                buttons: [
                    { context: { text: 'First', skin: 'secondary', size: 'large' } },
                    { context: { text: 'Second', skin: 'secondary', size: 'large' } },
                    { context: { text: 'Third', skin: 'secondary', size: 'large' } }
                ]
            }
        },
        {
            name: 'btn-group-tight-stretch',
            label: 'Fit Tight + Stretch',
            context: {
                ariaLabel: 'Aria label example',
                fit: ['tight', 'stretch'],
                buttons: [
                    { context: { text: 'First', skin: 'secondary', size: 'large' } },
                    { context: { text: 'Second', skin: 'secondary', size: 'large' } },
                    { context: { text: 'Third', skin: 'secondary', size: 'large' } }
                ]
            }
        },
        {
            name: 'btn-group-mixed',
            label: 'Mixed buttons',
            context: {
                ariaLabel: 'Aria label example',
                fit: ['tight'],
                buttons: [
                    { context: { text: 'Primary', skin: 'primary', size: 'large' } },
                    { context: { text: 'Secondary', skin: 'secondary', size: 'large' } },
                    { context: { text: 'Link', skin: 'link', size: 'large' } },
                    { context: { text: 'Secondary', skin: 'secondary', size: 'large' } },
                    { context: { text: 'Link', skin: 'link', size: 'large' } },
                    { context: { text: 'Primary', skin: 'primary', size: 'large' } },
                    { context:
                        {
                            text: 'Dropdown',
                            skin: 'secondary',
                            size: 'large',
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
                            caret: true,
                        }
                    }
                ]
            }
        }
    ]
};