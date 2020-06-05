module.exports = {
    title: 'Divider',
    status: 'prototype',
    default: 'divider-spacing-none',
    context: {
        size: false,
        element: false,
        dividerText: false,
        classes: null
    },
    variants: [
        {
            name: 'divider-spacing-none',
            label: 'Spacing None'
        },
        {
            name: 'divider-spacing-nano',
            label: 'Spacing Nano',
            context: {
                size: 'nano'
            }
        },
        {
            name: 'divider-spacing-tiny',
            label: 'Spacing Tiny',
            context: {
                size: 'tiny'
            }
        },
        {
            name: 'divider-spacing-small',
            label: 'Spacing Small',
            context: {
                size: 'small'
            }
        },
        {
            name: 'divider-spacing-base',
            label: 'Spacing Base',
            context: {
                size: 'base'
            }
        },
        {
            name: 'divider-spacing-moderate',
            label: 'Spacing Moderate',
            context: {
                size: 'moderate'
            }
        },
        {
            name: 'divider-spacing-medium',
            label: 'Spacing Medium',
            context: {
                size: 'medium'
            }
        },
        {
            name: 'divider-spacing-large',
            label: 'Spacing Large',
            context: {
                size: 'large'
            }
        },
        {
            name: 'divider-with-text',
            label: 'With Text',
            context: {
                size: 'large',
                dividerText: 'Divider Text',
                classes: ['mrx-typeweight--extrabold']
            }
        }
    ]
};