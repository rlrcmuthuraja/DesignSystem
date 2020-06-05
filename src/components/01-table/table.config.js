module.exports = {
    title: 'Table',
    status: 'prototype',
    default: 'table-simple',
    collated: false,
    context: {
        fit: 'tight',
        fluid: false,
        border: false,
        highlight: false,
        rowBorder: false,
        colBorder: false,
        zebra: false,
        theme: false,
        caption: null,
        thead: null,
        tbody: null,
        rows: null,
        classes: ['mrx-ui']
    },
    variants: [
        {
            name: 'table-simple',
            label: 'Simple',
            context: {
                fit: 'tight',
                thead: [
                    'Node ID',
                    'Logical Network',
                    'Host name',
                    'Type',
                    'Description',
                    'Created By',
                    'Created',
                    'Action'
                ],
                tbody: [
                    {
                        cells: [
                            '<a href="#">16385</a>',
                            'Floatel Test',
                            'n16386-nndf-001',
                            'Router',
                            'Cisco809-SupportRouter',
                            'Ola Normann',
                            '5 years ago',
                            'Edit'
                        ]
                    },
                    {
                        cells: [
                            '<a href="#">16385</a>',
                            'Noble Drilling',
                            'n16386-nndf-001',
                            'Router',
                            'Cisco809-Common',
                            'Ola Normann',
                            '1 year ago',
                            'Edit'
                        ]
                    },
                    {
                        cells: [
                            '<a href="#">16385</a>',
                            'Common',
                            'n16386-nndf-001',
                            'Router',
                            'Cisco881',
                            'Ola Normann',
                            '3 years ago',
                            'Edit'
                        ]
                    }
                ]
            }
        },
        {
            name: 'table-theme-foam',
            label: 'Theme Foam',
            context: {
                fit: 'tight',
                theme: 'foam',
                thead: [
                    'Node ID',
                    'Logical Network',
                    'Host name',
                    'Type',
                    'Description',
                    'Created By',
                    'Created',
                    'Action'
                ],
                tbody: [
                    {
                        cells: [
                            '<a href="#">16385</a>',
                            'Floatel Test',
                            'n16386-nndf-001',
                            'Router',
                            'Cisco809-SupportRouter',
                            'Ola Normann',
                            '5 years ago',
                            'Edit'
                        ]
                    },
                    {
                        cells: [
                            '<a href="#">16385</a>',
                            'Noble Drilling',
                            'n16386-nndf-001',
                            'Router',
                            'Cisco809-Common',
                            'Ola Normann',
                            '1 year ago',
                            'Edit'
                        ]
                    },
                    {
                        cells: [
                            '<a href="#">16385</a>',
                            'Common',
                            'n16386-nndf-001',
                            'Router',
                            'Cisco881',
                            'Ola Normann',
                            '3 years ago',
                            'Edit'
                        ]
                    }
                ]
            }
        },
        {
            name: 'table-theme-navy',
            label: 'Theme Navy',
            context: {
                fit: 'tight',
                theme: 'navy',
                thead: [
                    'Node ID',
                    'Logical Network',
                    'Host name',
                    'Type',
                    'Description',
                    'Created By',
                    'Created',
                    'Action'
                ],
                tbody: [
                    {
                        cells: [
                            '<a href="#">16385</a>',
                            'Floatel Test',
                            'n16386-nndf-001',
                            'Router',
                            'Cisco809-SupportRouter',
                            'Ola Normann',
                            '5 years ago',
                            'Edit'
                        ]
                    },
                    {
                        cells: [
                            '<a href="#">16385</a>',
                            'Noble Drilling',
                            'n16386-nndf-001',
                            'Router',
                            'Cisco809-Common',
                            'Ola Normann',
                            '1 year ago',
                            'Edit'
                        ]
                    },
                    {
                        cells: [
                            '<a href="#">16385</a>',
                            'Common',
                            'n16386-nndf-001',
                            'Router',
                            'Cisco881',
                            'Ola Normann',
                            '3 years ago',
                            'Edit'
                        ]
                    }
                ]
            }
        },
        {
            name: 'table-border',
            label: 'Border',
            context: {
                fit: 'tight',
                border: true,
                thead: [
                    'Node ID',
                    'Logical Network',
                    'Host name',
                    'Type',
                    'Description',
                    'Created By',
                    'Created',
                    'Action'
                ],
                tbody: [
                    {
                        cells: [
                            '<a href="#">16385</a>',
                            'Floatel Test',
                            'n16386-nndf-001',
                            'Router',
                            'Cisco809-SupportRouter',
                            'Ola Normann',
                            '5 years ago',
                            'Edit'
                        ]
                    },
                    {
                        cells: [
                            '<a href="#">16385</a>',
                            'Noble Drilling',
                            'n16386-nndf-001',
                            'Router',
                            'Cisco809-Common',
                            'Ola Normann',
                            '1 year ago',
                            'Edit'
                        ]
                    },
                    {
                        cells: [
                            '<a href="#">16385</a>',
                            'Common',
                            'n16386-nndf-001',
                            'Router',
                            'Cisco881',
                            'Ola Normann',
                            '3 years ago',
                            'Edit'
                        ]
                    }
                ]
            }
        },
        {
            name: 'table-rows',
            label: 'Row borders',
            context: {
                fit: 'tight',
                rowBorder: true,
                thead: [
                    'Node ID',
                    'Logical Network',
                    'Host name',
                    'Type',
                    'Description',
                    'Created By',
                    'Created',
                    'Action'
                ],
                tbody: [
                    {
                        cells: [
                            '<a href="#">16385</a>',
                            'Floatel Test',
                            'n16386-nndf-001',
                            'Router',
                            'Cisco809-SupportRouter',
                            'Ola Normann',
                            '5 years ago',
                            'Edit'
                        ]
                    },
                    {
                        cells: [
                            '<a href="#">16385</a>',
                            'Noble Drilling',
                            'n16386-nndf-001',
                            'Router',
                            'Cisco809-Common',
                            'Ola Normann',
                            '1 year ago',
                            'Edit'
                        ]
                    },
                    {
                        cells: [
                            '<a href="#">16385</a>',
                            'Common',
                            'n16386-nndf-001',
                            'Router',
                            'Cisco881',
                            'Ola Normann',
                            '3 years ago',
                            'Edit'
                        ]
                    }
                ]
            }
        },
        {
            name: 'table-cols',
            label: 'Column borders',
            context: {
                fit: 'tight',
                colBorder: true,
                thead: [
                    'Node ID',
                    'Logical Network',
                    'Host name',
                    'Type',
                    'Description',
                    'Created By',
                    'Created',
                    'Action'
                ],
                tbody: [
                    {
                        cells: [
                            '<a href="#">16385</a>',
                            'Floatel Test',
                            'n16386-nndf-001',
                            'Router',
                            'Cisco809-SupportRouter',
                            'Ola Normann',
                            '5 years ago',
                            'Edit'
                        ]
                    },
                    {
                        cells: [
                            '<a href="#">16385</a>',
                            'Noble Drilling',
                            'n16386-nndf-001',
                            'Router',
                            'Cisco809-Common',
                            'Ola Normann',
                            '1 year ago',
                            'Edit'
                        ]
                    },
                    {
                        cells: [
                            '<a href="#">16385</a>',
                            'Common',
                            'n16386-nndf-001',
                            'Router',
                            'Cisco881',
                            'Ola Normann',
                            '3 years ago',
                            'Edit'
                        ]
                    }
                ]
            }
        },
        {
            name: 'table-zebra',
            label: 'Zebra striped',
            context: {
                fit: 'tight',
                zebra: true,
                thead: [
                    'Node ID',
                    'Logical Network',
                    'Host name',
                    'Type',
                    'Description',
                    'Created By',
                    'Created',
                    'Action'
                ],
                tbody: [
                    {
                        cells: [
                            '<a href="#">16385</a>',
                            'Floatel Test',
                            'n16386-nndf-001',
                            'Router',
                            'Cisco809-SupportRouter',
                            'Ola Normann',
                            '5 years ago',
                            'Edit'
                        ]
                    },
                    {
                        cells: [
                            '<a href="#">16385</a>',
                            'Noble Drilling',
                            'n16386-nndf-001',
                            'Router',
                            'Cisco809-Common',
                            'Ola Normann',
                            '1 year ago',
                            'Edit'
                        ]
                    },
                    {
                        cells: [
                            '<a href="#">16385</a>',
                            'Common',
                            'n16386-nndf-001',
                            'Router',
                            'Cisco881',
                            'Ola Normann',
                            '3 years ago',
                            'Edit'
                        ]
                    }
                ]
            }
        },
        {
            name: 'table-highlight',
            label: 'Highlight on hover',
            context: {
                fit: 'tight',
                highlight: true,
                thead: [
                    'Node ID',
                    'Logical Network',
                    'Host name',
                    'Type',
                    'Description',
                    'Created By',
                    'Created',
                    'Action'
                ],
                tbody: [
                    {
                        cells: [
                            '<a href="#">16385</a>',
                            'Floatel Test',
                            'n16386-nndf-001',
                            'Router',
                            'Cisco809-SupportRouter',
                            'Ola Normann',
                            '5 years ago',
                            'Edit'
                        ]
                    },
                    {
                        cells: [
                            '<a href="#">16385</a>',
                            'Noble Drilling',
                            'n16386-nndf-001',
                            'Router',
                            'Cisco809-Common',
                            'Ola Normann',
                            '1 year ago',
                            'Edit'
                        ]
                    },
                    {
                        cells: [
                            '<a href="#">16385</a>',
                            'Common',
                            'n16386-nndf-001',
                            'Router',
                            'Cisco881',
                            'Ola Normann',
                            '3 years ago',
                            'Edit'
                        ]
                    }
                ]
            }
        },
        {
            name: 'table-fluid',
            label: 'Fluid 100%',
            context: {
                fit: 'tight',
                fluid: true,
                thead: [
                    'Node ID',
                    'Logical Network',
                    'Host name',
                    'Type',
                    'Description',
                    'Created By',
                    'Created',
                    'Action'
                ],
                tbody: [
                    {
                        cells: [
                            '<a href="#">16385</a>',
                            'Floatel Test',
                            'n16386-nndf-001',
                            'Router',
                            'Cisco809-SupportRouter',
                            'Ola Normann',
                            '5 years ago',
                            'Edit'
                        ]
                    },
                    {
                        cells: [
                            '<a href="#">16385</a>',
                            'Noble Drilling',
                            'n16386-nndf-001',
                            'Router',
                            'Cisco809-Common',
                            'Ola Normann',
                            '1 year ago',
                            'Edit'
                        ]
                    },
                    {
                        cells: [
                            '<a href="#">16385</a>',
                            'Common',
                            'n16386-nndf-001',
                            'Router',
                            'Cisco881',
                            'Ola Normann',
                            '3 years ago',
                            'Edit'
                        ]
                    }
                ]
            }
        },
        {
            name: 'table-loose',
            label: 'Fit Loose',
            context: {
                fit: 'loose',
                border: true,
                theme: 'foam',
                rowBorder: true,
                highlight: true,
                thead: [
                    'Node ID',
                    'Logical Network',
                    'Host name',
                    'Type',
                    'Description',
                    'Created By',
                    'Created',
                    'Action'
                ],
                tbody: [
                    {
                        cells: [
                            '<a href="#">16385</a>',
                            'Floatel Test',
                            'n16386-nndf-001',
                            'Router',
                            'Cisco809-SupportRouter',
                            'Ola Normann',
                            '5 years ago',
                            'Edit'
                        ]
                    },
                    {
                        cells: [
                            '<a href="#">16385</a>',
                            'Noble Drilling',
                            'n16386-nndf-001',
                            'Router',
                            'Cisco809-Common',
                            'Ola Normann',
                            '1 year ago',
                            'Edit'
                        ]
                    },
                    {
                        cells: [
                            '<a href="#">16385</a>',
                            'Common',
                            'n16386-nndf-001',
                            'Router',
                            'Cisco881',
                            'Ola Normann',
                            '3 years ago',
                            'Edit'
                        ]
                    }
                ]
            }
        },
    ]
};