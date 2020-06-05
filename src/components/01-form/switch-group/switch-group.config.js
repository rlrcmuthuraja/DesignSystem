module.exports = {
    title: 'Switch Group',
    default: 'checkbox-group',
    status: 'prototype',
    context: {
        classes: false,
        inline: true
    },
    variants: [
        {
            name: 'checkbox-group',
            label: 'Type: Checkbox Group',
            context: {
                switches: [
                    {
                        context: {
                            label: 'foo',
                            type: 'checkbox'
                        }
                    },
                    {
                        context: {
                            label: 'bar',
                            type: 'checkbox'
                        }
                    },
                    {
                        context: {
                            label: 'baz',
                            type: 'checkbox'
                        }
                    }
                ]
            }
        },
        {
            name: 'radio-group',
            label: 'Type: Radio Group',
            context: {
                switches: [
                    {
                        context: {
                            label: 'foo',
                            type: 'radio',
                            name: 'example-radio-group-name'
                        }
                    },
                    {
                        context: {
                            label: 'bar',
                            type: 'radio',
                            name: 'example-radio-group-name'
                        }
                    },
                    {
                        context: {
                            label: 'baz',
                            type: 'radio',
                            name: 'example-radio-group-name'
                        }
                    }
                ]
            }
        },
        {
            name: 'toggle-group',
            label: 'Type: Toggle Group',
            context: {
                switches: [
                    {
                        context: {
                            toggle: true,
                            label: 'foo'
                        }
                    },
                    {
                        context: {
                            toggle: true,
                            label: 'bar'
                        }
                    },
                    {
                        context: {
                            toggle: true,
                            label: 'baz'
                        }
                    }
                ]
            }
        },
        {
            name: 'force-vertical',
            label: 'Vertical',
            context: {
                inline: false,
                switches: [
                    {
                        context: {
                            label: 'foo',
                            type: 'checkbox'
                        }
                    },
                    {
                        context: {
                            label: 'bar',
                            type: 'checkbox'
                        }
                    }
                ]
            }
        },
        {
            name: 'auto-vertical',
            label: 'Auto Vertical',
            context: {
                switches: [
                    {
                        context: {
                            label: 'Perfect',
                            type: 'radio',
                            name: 'example-radio-group-name'
                        }
                    },
                    {
                        context: {
                            label: 'Very Good',
                            type: 'radio',
                            name: 'example-radio-group-name'
                        }
                    },
                    {
                        context: {
                            label: 'Good',
                            type: 'radio',
                            name: 'example-radio-group-name'
                        }
                    },
                    {
                        context: {
                            label: 'Ok',
                            type: 'radio',
                            name: 'example-radio-group-name'
                        }
                    },
                    {
                        context: {
                            label: 'Poor',
                            type: 'radio',
                            name: 'example-radio-group-name'
                        }
                    },
                    {
                        context: {
                            label: 'Very poor',
                            type: 'radio',
                            name: 'example-radio-group-name'
                        }
                    },
                    {
                        context: {
                            label: 'Catastrophic',
                            type: 'radio',
                            name: 'example-radio-group-name'
                        }
                    }
                ]
            }
        }
    ]
};