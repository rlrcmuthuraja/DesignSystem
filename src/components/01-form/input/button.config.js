module.exports = {
    title: 'Input',
    default: 'button',
    status: 'prototype',
    collated: false,
    label: false,
    context: {
        element: 'input',
        type: 'button',
        id: false,
        classes: false,
        state: false,
        disabled: false,
        skin: 'secondary',
        size: 'large',
        required: false,
        value: false,
        error: false
    },
    variants: [
        {
            name: 'button',
            label: 'Type Button',
            context: {
                type: 'button',
                value: 'Input button'
            }
        },
        {
            name: 'reset',
            label: 'Type Reset',
            context: {
                type: 'reset',
                value: 'Reset Button',
            }
        },
        {
            name: 'submit',
            label: 'Type Submit',
            context: {
                type: 'submit',
                value: 'Submit Button',
                skin: 'primary'
            }
        }
    ]
};