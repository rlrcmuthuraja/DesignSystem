module.exports = {
    title: 'Legend',
    default: 'default',
    status: 'prototype',
    context: {
        classes: false,
        legendText: 'Legend',
        renderAsLabel: false,
        underline: false,
        hideLegend: false
    },
    variants: [
        {
            // The 'default variant'
            name: 'default',
            label: 'Default',
            context: {
                legendText: 'This is a Legend'
            }
        },
        {
            name: 'legend-underline',
            label: 'With underline',
            context: {
                legendText: 'This is a legend rendered as a label',
                underline: true
            }
        },
        {
            name: 'legend-as-label',
            label: 'As label',
            context: {
                legendText: 'This is a legend rendered as a label',
                renderAsLabel: true
            }
        },
        {
            name: 'legend-is-hidden',
            label: 'Is hidden',
            context: {
                legendText: 'This is a legend rendered as a label',
                hideLegend: true
            }
        }
    ]
};