module.exports = {
    title: 'Input',
    default: 'color',
    status: 'prototype',
    collated: false,
    label: false,
    context: {
        element: 'input',
        type: 'text',
        id: false,
        classes: false,
        name: false,
        label: false,
        hideLabel: false,
        hideSpinBtn: false,
        required: false,
        readonly: false,
        optional: false,
        value: false,
        disabled: false,
        placeholder: false,
        hint: false,
        error: false,
        size: 'large'
    },
    variants: [
        {
            name: 'color',
            label: 'Type Color',
            context: {
                type: 'color',
                label: 'Label'
            }
        },
        {
            name: 'date',
            label: 'Type Date',
            context: {
                type: 'date',
                label: 'Label'
            }
        },
        {
            name: 'datetime-local',
            label: 'Type Datetime-Local',
            context: {
                type: 'datetime-local',
                label: 'Label'
            }
        },
        {
            name: 'email',
            label: 'Type Email',
            context: {
                type: 'email',
                label: 'Label'
            }
        },
        {
            name: 'file',
            label: 'Type File',
            context: {
                type: 'file',
                label: 'Label'
            }
        },
        {
            name: 'hidden',
            label: 'Type Hidden',
            context: {
                type: 'hidden',
                label: 'Label'
            }
        },
        {
            name: 'month',
            label: 'Type Month',
            context: {
                type: 'month',
                label: 'Label'
            }
        },
        {
            name: 'number',
            label: 'Type Number',
            context: {
                type: 'number',
                label: 'Label'
            }
        },
        {
            name: 'password',
            label: 'Type Password',
            context: {
                type: 'password',
                label: 'Label'
            }
        },
        {
            name: 'range',
            label: 'Type Range',
            context: {
                type: 'range',
                label: 'Label'
            }
        },
        {
            name: 'search',
            label: 'Type Search',
            context: {
                type: 'search',
                label: 'Label'
            }
        },
        {
            name: 'tel',
            label: 'Type Tel',
            context: {
                type: 'tel',
                label: 'Label'
            }
        },
        {
            name: 'text',
            label: 'Type Text',
            context: {
                type: 'text',
                label: 'Label'
            }
        },
        {
            name: 'time',
            label: 'Type Time',
            context: {
                type: 'time',
                label: 'Label'
            }
        },
        {
            name: 'url',
            label: 'Type Url',
            context: {
                type: 'url',
                label: 'Label'
            }
        },
        {
            name: 'week',
            label: 'Type Week',
            context: {
                type: 'week',
                label: 'Label'
            }
        }
    ]
};