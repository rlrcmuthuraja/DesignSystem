module.exports = {
    title: 'Button',
    status: 'ready',
    default: 'btn-as-link',
    collated: false,
    context: {
        href: false,
        text: false,
        classes: false,
        state: false,
        icon: false,
        iconAfter: false,
        hideText: false,
        disabled: false,
        skin: 'secondary',
        size: 'large',
        data: false,
        ariaLabelledBy: false
    },
    variants: [
        {
            name: 'btn-as-link',
            label: 'Element: Button as link',
            context: {
                text: 'I\'m actually a button',
                skin: 'link'
            }
        },
        {
            name: 'link-as-btn',
            label: 'Element: Link as button',
            context: {
                text: 'I\'m actually a link',
                skin: 'primary',
                href: 'http://www.example.com'
            }
        },
        {
            // The 'default variant'
            name: 'btn-primary',
            label: 'Skin: Primary',
            context: {
                text: 'Primary Button',
                skin: 'primary'
            }
        },
        {
            name: 'btn-secondary',
            label: 'Skin: Secondary',
            context: {
                text: 'Secondary Button',
                skin: 'secondary'
            }
        },
        {
            name: 'btn-flat',
            label: 'Skin: Flat',
            context: {
                text: 'Flat Button',
                skin: 'flat'
            }
        },
        {
            name: 'btn-link',
            label: 'Skin: Link',
            context: {
                text: 'Link Button',
                skin: 'link'
            }
        },
        {
            name: 'btn-tiny',
            label: 'Size: Tiny',
            context: {
                text: 'Primary Button',
                skin: 'primary',
                size: 'tiny'
            }
        },
        {
            name: 'btn-base',
            label: 'Size: Base',
            context: {
                text: 'Base Button',
                skin: 'primary',
                size: 'base'
            }
        },
        {
            name: 'btn-large',
            label: 'Size: Large',
            context: {
                text: 'Large Button',
                skin: 'primary',
                size: 'large'
            }
        },
        {
            name: 'btn-disabled-primary',
            label: 'Disabled: Primary',
            context: {
                text: 'Disabled Primary Button',
                skin: 'primary',
                size: 'large',
                disabled: true
            }
        },
        {
            name: 'btn-disabled-secondary',
            label: 'Disabled: Secondary',
            context: {
                text: 'Disabled Secondary Button',
                skin: 'secondary',
                size: 'large',
                disabled: true
            }
        },
        {
            name: 'btn-disabled-flat',
            label: 'Disabled: Flat',
            context: {
                text: 'Disabled Flat Button',
                skin: 'flat',
                size: 'large',
                disabled: true
            }
        },
        {
            name: 'btn-disabled-link',
            label: 'Disabled: Link',
            context: {
                text: 'Disabled Link Button',
                skin: 'link',
                size: 'large',
                disabled: true
            }
        },
        {
            name: 'btn-loading-primary',
            label: 'State: Processing Primary',
            context: {
                text: 'Saving',
                skin: 'primary',
                size: 'large',
                state: 'processing',
                process: {
                    size: 'base'
                }
            }
        },
        {
            name: 'btn-loading-secondary',
            label: 'State: Processing Secondary',
            context: {
                text: 'Loading',
                skin: 'secondary',
                size: 'large',
                state: 'processing',
                process: {
                    size: 'base'
                }
            }
        },
        {
            name: 'btn-loading-flat',
            label: 'State: Processing Flat',
            context: {
                text: 'Loading',
                skin: 'flat',
                size: 'large',
                state: 'processing',
                process: {
                    size: 'base'
                }
            }
        },
        {
            name: 'btn-loading-link',
            label: 'State: Processing Link',
            context: {
                text: 'Please wait',
                skin: 'link',
                size: 'large',
                state: 'processing',
                process: {
                    size: 'base'
                }
            }
        },
        {
            name: 'icon-before-text',
            label: 'Icon: Before text',
            context: {
                text: 'Pin to dashboard',
                icon: {
                    symbol: 'pin',
                    size: 'moderate'
                }
            }
        },
        {
            name: 'icon-after-text',
            label: 'Icon: After text',
            context: {
                text: 'Continue',
                skin: 'primary',
                icon: {
                    symbol: 'angle-right',
                    size: 'base'
                },
                iconAfter: true
            }
        },
        {
            name: 'icon-only',
            label: 'Icon: Hidden text',
            context: {
                text: 'This text is visually hidden, but still accessible through screen readers',
                icon: {
                    symbol: 'search',
                    size: 'base'
                },
                hideText: true
            }
        },
        {
            name: 'fluid',
            label: 'Fluid button spans 100%',
            context: {
                text: 'Fluid button',
                skin: 'primary',
                fluid: true
            }
        }
    ]
};