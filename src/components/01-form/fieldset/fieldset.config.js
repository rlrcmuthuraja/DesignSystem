module.exports = {
    title: 'Fieldset',
    status: 'prototype',
    default: 'fieldset-a',
    context: {
        classes: false,
        legendContext: {
            class: false,
            legendText: 'Fieldset Legend',
            renderAsLabel: false,
            hideLegend: false
        },
        fieldsetText: 'Some additional text'
    },
    variants: [
        {
            name: 'fieldset-a',
            label: 'Fieldset A',
            context: {
                legendContext: {
                    legendText: 'Legend text'
                }
            }
        },
        {
            name: 'fieldset-b',
            label: 'Fieldset B',
            context: {
                legendContext: {
                    legendText: 'Legend text with underline',
                    underline: true
                }
            }
        },
        {
            name: 'fieldset-c',
            label: 'Fieldset C',
            context: {
                legendContext: {
                    class: false,
                    legendText: 'Foo',
                    renderAsLabel: true
                }
            }
        }
    ]
};