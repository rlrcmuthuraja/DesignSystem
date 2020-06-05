module.exports = {
    title: 'Select',
    default: 'select',
    status: 'prototype',
    hidden: false,
    collated: false,
    context: {
        id: false,
        classes: false,
        name: false,
        label: false,
        hideLabel: false,
        required: false,
        optional: false,
        value: false,
        disabled: false,
        hint: false,
        error: false,
        selected: false,
        size: 'large',
        options: [
            {
                label: 'Add more options',
                value: 1
            }
        ]
    },
    variants: [
        {
            // The 'default variant'
            name: 'select',
            label: 'Select',
            context: {
                label: 'Label',
                selected: 'foo',
                options: [
                    {
                        label: 'foo',
                        value: 1
                    },
                    {
                        label: 'bar',
                        value: 2
                    },
                    {
                        label: 'baz',
                        value: 3
                    }
                ]
            }
        }
    ]
};