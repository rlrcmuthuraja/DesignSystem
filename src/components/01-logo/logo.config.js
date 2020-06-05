module.exports = {
    title: 'Logo',
    status: 'prototype',
    default: 'positive',
    context: {
        color: false,
        classes: false
    },
    variants: [
        {
            name: 'positive',
            label: 'Positive',
            context: {
                color: 'positive'
            }
        },
        {
            name: 'negative',
            label: 'Negative',
            context: {
                color: 'negative'
            }
        }
    ]
};