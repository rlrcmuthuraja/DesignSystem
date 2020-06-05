module.exports = {
    title: 'Hero',
    status: 'prototype',
    default: '50-image',
    collated: false,
    context: {
        img: {
            url: false,
            alt: false
        },
        video: {
            url: false,
            poster: false
        },
        size: false,
        content: {
            title: false,
            lead: false,
            cta: {
                text: false,
                skin: 'primary',
                size: 'large',
                classes: [
                    'mrx-hero__cta'
                ]
            },
            align: null
        },
        classes: null
    },
    variants: [
        {
            name: '50-image',
            label: 'Image 50',
            context: {
                img: {
                    rwd: [
                        {
                            srcset: '/assets/img/content/1920x960(2_1)-wave.jpg',
                            size: '(min-width: 1920px)'
                        },
                        {
                            srcset: '/assets/img/content/1600x800(2_1)-wave.jpg',
                            size: '(min-width: 1600px)'
                        },
                        {
                            srcset: '/assets/img/content/1280x853(3_2)-wave.jpg',
                            size: '(min-width: 1280px)'
                        },
                        {
                            srcset: '/assets/img/content/1024x683(3_2)-wave.jpg',
                            size: '(min-width: 1024px)'
                        },
                        {
                            srcset: '/assets/img/content/800x800(1_1)-wave.jpg',
                            size: '(min-width: 800px)'
                        },
                        {
                            srcset: '/assets/img/content/600x800(3_4)-wave.jpg',
                            size: '(min-width: 600px)'
                        },
                        {
                            srcset: '/assets/img/content/480x640(3_2)-wave.jpg',
                            size: '(min-width: 480px)'
                        }
                    ],
                    url: '/assets/img/content/320x427(3_2)-wave.jpg',
                    alt: 'Alternative text',
                    fallback: {
                        url: '/assets/img/content/1600x800(2_1)-wave.jpg'
                    }
                },
                size: '50',
                content: {
                    title: 'Hero size 50 (image)',
                    lead: 'This hero is at least 50% of viewport height',
                    align: 'center'
                }
            }
        },
        {
            name: '75-image',
            label: 'Image 75',
            context: {
                img: {
                    rwd: [
                        {
                            srcset: '/assets/img/content/1920x960(2_1)-rig.jpg',
                            size: '(min-width: 1920px)'
                        },
                        {
                            srcset: '/assets/img/content/1600x800(2_1)-rig.jpg',
                            size: '(min-width: 1600px)'
                        },
                        {
                            srcset: '/assets/img/content/1280x853(3_2)-rig.jpg',
                            size: '(min-width: 1280px)'
                        },
                        {
                            srcset: '/assets/img/content/1024x683(3_2)-rig.jpg',
                            size: '(min-width: 1024px)'
                        },
                        {
                            srcset: '/assets/img/content/800x800(1_1)-rig.jpg',
                            size: '(min-width: 800px)'
                        },
                        {
                            srcset: '/assets/img/content/600x800(3_4)-rig.jpg',
                            size: '(min-width: 600px)'
                        },
                        {
                            srcset: '/assets/img/content/480x640(3_2)-rig.jpg',
                            size: '(min-width: 480px)'
                        }
                    ],
                    url: '/assets/img/content/320x427(3_2)-rig.jpg',
                    alt: 'Alternative text',
                    fallback: {
                        url: '/assets/img/content/1600x800(2_1)-rig.jpg'
                    }
                },
                size: '75',
                content: {
                    title: 'Hero size 75 (image)',
                    lead: 'This hero is at least 75% of viewport height',
                    align: 'center'
                }
            }
        },
        {
            name: '100-image',
            label: 'Image 100',
            context: {
                img: {
                    rwd: [
                        {
                            srcset: '/assets/img/content/1920x960(2_1)-cargo.jpg',
                            size: '(min-width: 1920px)'
                        },
                        {
                            srcset: '/assets/img/content/1600x800(2_1)-cargo.jpg',
                            size: '(min-width: 1600px)'
                        },
                        {
                            srcset: '/assets/img/content/1280x853(3_2)-cargo.jpg',
                            size: '(min-width: 1280px)'
                        },
                        {
                            srcset: '/assets/img/content/1024x683(3_2)-cargo.jpg',
                            size: '(min-width: 1024px)'
                        },
                        {
                            srcset: '/assets/img/content/800x800(1_1)-cargo.jpg',
                            size: '(min-width: 800px)'
                        },
                        {
                            srcset: '/assets/img/content/600x800(3_4)-cargo.jpg',
                            size: '(min-width: 600px)'
                        },
                        {
                            srcset: '/assets/img/content/480x640(3_2)-cargo.jpg',
                            size: '(min-width: 480px)'
                        }
                    ],
                    url: '/assets/img/content/320x427(3_2)-cargo.jpg',
                    alt: 'Alternative text',
                    fallback: {
                        url: '/assets/img/content/1600x800(2_1)-cargo.jpg'
                    }
                },
                size: '100',
                content: {
                    title: 'Hero size 100 (image)',
                    lead: 'Some lead text that makes you convinced that this is the right choice',
                    cta: {
                        text: 'Take the tour',
                        href: '#'
                    },
                    align: 'center'
                }
            }
        },
        {
            name: '50-video',
            label: 'Video 50',
            hidden: true,
            context: {
                video: {
                    // url: 'https://www.html5rocks.com/en/tutorials/video/basics/devstories.mp4'
                },
                size: '50',
                content: {
                    title: 'Hero size 50 (video unavailable)',
                    align: 'center'
                }
            }
        },
        {
            name: '75-video',
            label: 'Video 75',
            hidden: true,
            context: {
                video: {
                    // url: 'https://www.html5rocks.com/en/tutorials/video/basics/devstories.mp4'
                },
                size: '75',
                content: {
                    title: 'Hero size 75 (video unavailable)',
                    align: 'center'
                }
            }
        },
        {
            name: '100-video',
            label: 'Video 100',
            hidden: true,
            context: {
                video: {
                    // url: 'https://www.html5rocks.com/en/tutorials/video/basics/devstories.mp4'
                },
                size: '100',
                content: {
                    title: 'Hero size 100 (video unavailable)',
                    align: 'center'
                }
            }
        }
    ]
};