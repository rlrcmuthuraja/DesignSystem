module.exports = {
    title: 'Modal',
    status: 'wip',
    default: 'modal-skin-prominent',
    context: {
        id: false,
        title: false,
        classes: false,
        skin: false,
        size: false,
        cta: false,
        alert: false
    },
    variants: [
        {
            name: 'modal-skin-prominent',
            label: 'Skin Prominent',
            context: {
                title: 'Modal title',
                content: 'In user interface design for computer applications, a modal window is a graphical control element subordinate to an application\'s main window. It creates a mode that disables the main window, but keeps it visible with the modal window as a child window in front of it.',
                skin: 'prominent',
                size: 'medium',
                cta: {
                    align: ['center'],
                    classes: ['mrx-modal__cta'],
                    buttons: [
                        { context: { text: 'Got it', skin: 'primary', size: 'large' } },
                        { context: { text: 'Didn\'t get it', skin: 'secondary', size: 'large', href: 'https://en.wikipedia.org/wiki/Modal_window' } },
                        { context: { text: 'Cancel', skin: 'link', size: 'large' } }
                    ]
                }
            }
        },
        {
            name: 'modal-skin-simple',
            label: 'Skin Discreet',
            context: {
                title: 'Modal title',
                content: 'Users must interact with the modal window before they can return to the parent application',
                skin: 'discreet',
                size: 'medium'
            }
        },
        {
            name: 'modal-size-small',
            label: 'Size Small',
            context: {
                title: 'Small Modal',
                content: 'Modal windows are sometimes called heavy windows or modal dialogs because they often display a dialog box.',
                skin: 'discreet',
                size: 'small',
                cta: {
                    align: ['center'],
                    buttons: [
                        { context: { text: 'OK', skin: 'primary', size: 'large' } },
                        { context: { text: 'Cancel', skin: 'secondary', size: 'large' } }
                    ]
                }
            }
        },
        {
            name: 'modal-size-medium',
            label: 'Size Medium',
            context: {
                title: 'Medium Modal',
                content: 'User interfaces typically use modal windows to command user awareness and to display emergency states, though interaction designers argue they are ineffective for that use.',
                skin: 'discreet',
                size: 'medium',
                cta: {
                    align: ['center'],
                    buttons: [
                        { context: { text: 'Fine, whatever', skin: 'primary', size: 'large' } },
                        { context: { text: 'Cancel', skin: 'secondary', size: 'large' } }
                    ]
                }
            }
        },
        {
            name: 'modal-size-large',
            label: 'Size Large',
            context: {
                title: 'Large Modal',
                content: 'User interfaces typically use modal windows to command user awareness and to display emergency states, though interaction designers argue they are ineffective for that use.',
                skin: 'discreet',
                size: 'large',
                cta: {
                    align: ['center'],
                    buttons: [
                        { context: { text: 'Fine, whatever', skin: 'primary', size: 'large' } },
                        { context: { text: 'Cancel', skin: 'secondary', size: 'large' } }
                    ]
                }
            }
        },
        {
            name: 'modal-warning',
            label: 'Warning',
            status: 'prototype',
            hidden: true,
            context: {
                skin: 'discreet',
                size: 'large',
                alert: 'warning',
                title: 'Warning warning!',
                content: 'A man\'s conscience, like a warning line on the highway, tells him what he shouldn\'t do - but it does not keep him from doing it.',
                cta: {
                    align: ['center'],
                    buttons: [
                        { context: { text: 'OK, I understand', skin: 'primary', size: 'large' } },
                        { context: { text: 'No, Get me otta here', skin: 'secondary', size: 'large' } }
                    ]
                }
            }
        },
        {
            name: 'modal-danger',
            label: 'Danger',
            status: 'prototype',
            hidden: true,
            context: {
                skin: 'discreet',
                size: 'large',
                alert: 'danger',
                title: 'Danger danger!',
                content: 'An error doesn\'t become a mistake until you refuse to correct it.',
                cta: {
                    align: ['center'],
                    buttons: [
                        { context: { text: 'Try again', skin: 'primary', size: 'large' } },
                        { context: { text: 'Forget it', skin: 'secondary', size: 'large' } }
                    ]
                }
            }
        },
        {
            name: 'modal-success',
            label: 'Success',
            status: 'prototype',
            hidden: true,
            context: {
                skin: 'discreet',
                size: 'large',
                alert: 'success',
                title: 'Success!',
                content: 'Coming together is a beginning; keeping together is progress; working together is success.',
                cta: {
                    align: ['center'],
                    buttons: [
                        { context: { text: 'Let\'s get to work!', skin: 'primary', size: 'large' } }
                    ]
                }
            }
        }
    ]
};
