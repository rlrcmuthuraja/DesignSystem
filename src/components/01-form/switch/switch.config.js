module.exports = {
    title: 'Switch',
    default: 'checkbox',
    status: 'prototype',
    collated: false,
    hidden: false,
    context: {
        classes: false,
        type: false,
        id: false,
        disabled: false,
        checked: false,
        value: false,
        name: false,
        label: false,
        hideLabel: false,
        toggle: false
    },
    variants: [
        {
            name: 'checkbox',
            label: 'Checkbox',
            context: {
                type: 'checkbox',
                label: 'Checkbox label text'
            }
        },
        {
            name: 'checkbox checked',
            label: 'Checkbox (Checked)',
            context: {
                type: 'checkbox',
                label: 'Checkbox label text',
                checked: true
            }
        },
        {
            name: 'checkbox disabled',
            label: 'Checkbox (Disabled)',
            context: {
                type: 'checkbox',
                label: 'Checkbox label text',
                disabled: true
            }
        },
        {
            name: 'checkbox checked disabled',
            label: 'Checkbox (Checked + Disabled)',
            context: {
                type: 'checkbox',
                label: 'Checkbox label text',
                checked: true,
                disabled: true
            }
        },
        {
            name: 'radio',
            label: 'Radio Button',
            context: {
                type: 'radio',
                label: 'Radio Button Label'
            }
        },
        {
            name: 'radio checked',
            label: 'Radio Button (Checked)',
            context: {
                type: 'radio',
                label: 'Radio Button Label',
                checked: true
            }
        },
        {
            name: 'radio disabled',
            label: 'Radio Button (Disabled)',
            context: {
                type: 'radio',
                label: 'Radio Button Label',
                disabled: true
            }
        },
        {
            name: 'radio checked disabled',
            label: 'Radio Button (Checked + Disabled)',
            context: {
                type: 'radio',
                label: 'Radio Button Label',
                checked: true,
                disabled: true
            }
        },
        {
            name: 'toggle',
            label: 'Toggle',
            context: {
                type: 'checkbox',
                label: 'Toggle label text',
                toggle: true
            }
        },
        {
            name: 'toggle checked',
            label: 'Toggle (Checked)',
            context: {
                type: 'checkbox',
                label: 'Toggle label text',
                toggle: true,
                checked: true
            }
        },
        {
            name: 'toggle disabled',
            label: 'Toggle (Disabled)',
            context: {
                type: 'checkbox',
                label: 'Toggle label text',
                toggle: true,
                disabled: true
            }
        },
        {
            name: 'toggle checked disabled',
            label: 'Toggle (Checked + Disabled)',
            context: {
                type: 'checkbox',
                label: 'Toggle label text',
                toggle: true,
                checked: true,
                disabled: true
            }
        },
    ]
};