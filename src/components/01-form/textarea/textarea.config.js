module.exports = {
    title: 'Textarea',
    default: 'textarea',
    status: 'prototype',
    collated: false,
    label: false,
    context: {
        id: false,
        classes: false,
        name: false,
        label: false,
        hideLabel: false,
        required: false,
        optional: false,
        value: 'Test',
        disabled: false,
        placeholder: false,
        hint: false,
        error: false,
        rows: false,
        size: 'base'
    },
    variants: [
        {
            name: 'textarea',
            label: 'Textarea',
            context: {
                label: 'Label for textarea'
            }
        }
    ]
};