module.exports = {
    title: 'Badge',
    default: 'badge-default',
    status: 'prototype',
    collated: false,
    context: {
        icon: {
            symbol: false,
            size: 'base',
            classes: ['mrx-badge__icon']
        },
        skin: false
    },
    variants: [
        {
            name: 'badge-default',
            label: 'Text',
            context: {
                text: 'Badge'
            }
        },
        {
            name: 'badge-icon-only',
            label: 'Icon',
            context: {
                icon: {
                    symbol: 'arrow-down'
                },
                text: 'Badge',
                hideTxt: true
            }
        },
        {
            name: 'badge-icon-text',
            label: 'Text + Icon',
            context: {
                icon: {
                    symbol: 'arrow-up'
                },
                text: 'Badge'
            }
        },
        {
            name: 'badge-primary',
            label: 'Primary',
            context: {
                text: 'Primary',
                skin: 'primary'
            }
        },
        {
            name: 'badge-secondary',
            label: 'Secondary',
            context: {
                text: 'Secondary',
                skin: 'secondary'
            }
        },
        {
            name: 'badge-success',
            label: 'Success',
            context: {
                text: 'Success',
                skin: 'success'
            }
        },
        {
            name: 'badge-warning',
            label: 'Warning',
            context: {
                text: 'Warning',
                skin: 'warning'
            }
        },
        {
            name: 'badge-danger',
            label: 'Danger',
            context: {
                text: 'Danger',
                skin: 'danger'
            }
        },
        {
            name: 'badge-foam',
            label: 'Foam',
            context: {
                text: 'Foam',
                skin: 'foam'
            }
        },
        {
            name: 'badge-navy',
            label: 'Navy',
            context: {
                text: 'Navy',
                skin: 'navy'
            }
        }
    ]
};