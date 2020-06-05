module.exports = {
    title: 'Notification',
    default: 'notification-neutral',
    status: 'ready',
    collated: false,
    context: {
        title: false,
        content: false,
        tone: false,
        type: 'block',
        icon: {
            symbol: false,
            size: 'moderate'
        },
        dismissable: false,
        classes: false

    },
    variants: [
        {
            name: 'notification-neutral',
            label: 'Block Neutral',
            status: 'ready',
            context: {
                title: 'Neutral Notification Title',
                content: 'Users want to stay informed while using your web or mobile applications. Always use the opportunity to show your users well-formed and clear notifications.'
            }
        },
        {
            name: 'notification-success',
            label: 'Block Success',
            status: 'ready',
            context: {
                title: 'Success Notification Title',
                content: 'Your users will love knowing exactly what is going on and being able to get themselves out of a tight spot.',
                tone: 'success',
                icon: {
                    symbol: 'success'
                }
            }
        },
        {
            name: 'notification-warning',
            label: 'Block Warning',
            status: 'ready',
            context: {
                title: 'Warning Notification Title',
                content: 'If needed (e.g. error message notifications), add extra information about the specific nature of a problem and a way to solve it.',
                tone: 'warning',
                icon: {
                    symbol: 'warning'
                }
            }
        },
        {
            name: 'notification-danger',
            label: 'Block Danger',
            status: 'ready',
            context: {
                title: 'Danger Notification Title',
                content: 'If needed (e.g. error message notifications), add extra information about the specific nature of a problem and a way to solve it.',
                tone: 'danger',
                icon: {
                    symbol: 'danger'
                }
            }
        },
        {
            name: 'notification-info',
            label: 'Block Info',
            status: 'ready',
            context: {
                title: 'Info Notification Title',
                content: 'Try to keep your notifications simple and straight to the point.',
                tone: 'info',
                icon: {
                    symbol: 'info'
                }
            }
        },
        {
            name: 'notification-banner-neutral',
            label: 'Banner Neutral',
            status: 'ready',
            context: {
                title: 'Banner Title',
                content: 'Your users will love knowing exactly what is going on and being able to get themselves out of a tight spot.',
                type: 'banner'
            }
        },
        {
            name: 'notification-banner-success',
            label: 'Banner Success',
            status: 'ready',
            context: {
                content: 'We’re completely operational, and all our systems are functioning perfectly.',
                tone: 'success',
                type: 'banner'
            }
        },
        {
            name: 'notification-banner-warning',
            label: 'Banner Warning',
            status: 'ready',
            context: {
                content: 'Our systems are experiencing connectivity problems. Slow responses may occur.',
                tone: 'warning',
                type: 'banner'
            }
        },
        {
            name: 'notification-banner-danger',
            label: 'Banner Danger',
            status: 'ready',
            context: {
                content: 'Oh no! It seems we lost connection with the server.',
                tone: 'danger',
                type: 'banner'
            }
        },
        {
            name: 'notification-banner-info',
            label: 'Banner Info',
            status: 'ready',
            context: {
                content: 'New VR-experience has arrived. Try it out!',
                tone: 'info',
                type: 'banner',
                icon: {
                    symbol: 'success'
                }
            }
        },
        {
            name: 'notification-inline-neutral',
            label: 'Inline Neutral',
            context: {
                content: 'Inline text',
                type: 'inline'
            }
        },
        {
            name: 'notification-inline-success',
            label: 'Inline Success',
            context: {
                content: 'Inline text',
                tone: 'success',
                type: 'inline'
            }
        },
        {
            name: 'notification-inline-warning',
            label: 'Inline Warning',
            context: {
                content: 'Inline text',
                tone: 'warning',
                type: 'inline'
            }
        },
        {
            name: 'notification-inline-danger',
            label: 'Inline Danger',
            context: {
                content: 'Inline text',
                tone: 'danger',
                type: 'inline'
            }
        },
        {
            name: 'notification-inline-info',
            label: 'Inline Info',
            context: {
                content: 'Inline text',
                tone: 'info',
                type: 'inline'
            }
        },
        {
            name: 'notification-dismissable',
            label: 'Dismissable',
            status: 'wip',
            context: {
                title: 'Banner Title',
                content: 'Your users will love knowing exactly what is going on and being able to get themselves out of a tight spot.',
                tone: 'success',
                dismissable: true
            }
        }
    ]
};