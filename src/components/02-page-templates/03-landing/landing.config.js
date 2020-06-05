module.exports = {
    title: 'Landing page',
    status: 'prototype',
    hidden: false,
    context: {
        pageTitle: 'Dashboard Title',
        // breadcrumb: {
        //     theme: 'white',
        //     items: [
        //         {
        //             txt: 'Home'
        //         }
        //     ]
        // },
        navContext: {
            classes: [
                'mrx-nav--main'
            ],
            header: 'Main Navigation',
            hideHeader: true,
            search: true,
            items: [
                {
                    text: 'Home'
                }
            ]
        },
        hero: {
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
                    title: 'Developers',
                    lead: 'Develop. Distribute. Communicate',
                    cta: {
                        text: 'Get Started',
                        href: '#'
                    },
                    align: 'center'
                }
            }
        },
        cards: [
            {
                context: {
                    title: 'Application Framework',
                    skin: 'default',
                    cta: {
                        text: 'Learn More',
                        href: '#'
                    },
                    tags: [
                        'Utilities',
                        'Smart Grid',
                        'Smart Metering',
                        'Smart City',
                        'Power Grid'
                    ],
                    content: 'Application framework provides components and services that help developers quickly and easily build secure applications and widgets. Use the articles in this section to start building on the digital platform.'
                }
            },
            {
                context: {
                    title: 'Visualization',
                    skin: 'default',
                    tags: [
                        'Maritime',
                        'Subsea Performance'
                    ],
                    cta: {
                        text: 'Learn More',
                        href: '#'
                    },
                    content: 'Advanced 3D visualization capabilities such as Virtual Reality, Augmented Reality and Graphical Information System capabilities for apps and solutions developed on the Muthuraja platform.'
                }
            },
            {
                context: {
                    title: 'Developers.kognif.ai',
                    skin: 'default',
                    cta: {
                        text: 'Learn More',
                        href: '#'
                    },
                    content: 'An open ecosystem and community providing detailed insight, support and services for developers on the Muthuraja platform and on designcompany solutions.'
                }
            },
            {
                context: {
                    title: 'Advanced Analytics',
                    skin: 'default',
                    cta: {
                        text: 'Learn More',
                        href: '#'
                    },
                    tags: [
                        'Maritime',
                        'Subsea Performance'
                    ],
                    content: 'Advanced real time stream analytics, both on premise and in cloud provides powerful sensor data manipulation for transforming raw sensor values into high quality information.'
                }
            },
            {
                context: {
                    title: 'IoT Platform',
                    skin: 'default',
                    cta: {
                        text: 'Learn More',
                        href: '#'
                    },
                    tags: [
                        'Utilities',
                        'Smart Grid',
                        'Smart Metering',
                        'Smart City',
                        'Power Grid'
                    ],
                    content: 'A highly scalable and flexible IoT platform enable secure and reliable data collection, analytics and distribution for distributed industrial scale on premise or cloud based solutions.'
                }
            },
            {
                context: {
                    title: 'Global System Tools',
                    skin: 'default',
                    cta: {
                        text: 'Learn More',
                        href: '#'
                    },
                    content: 'Ready to go applications and tools enable solution providers to faster deliver value for their customers.'
                }
            },
            {
                context: {
                    title: 'Connectivity',
                    skin: 'default',
                    cta: {
                        text: 'Learn More',
                        href: '#'
                    },
                    content: 'The Global Secure Network ensures a reliable, secure and unified way of communication and data transfer between remote installations, public and private clouds, customers, industrial infrastructure and sensors.'
                }
            },
            {
                context: {
                    title: 'Self Service Portal',
                    skin: 'default',
                    cta: {
                        text: 'Learn More',
                        href: '#'
                    },
                    tags: [
                        'Maritime',
                        'Subsea Performance'
                    ],
                    content: 'Globally distributed, scalable, and industrial hardened, self-serviced cloud infrastructure provides the flexibility, effectiveness and security needed for digitalized industrial solutions.'
                }
            },
            {
                context: {
                    title: 'Cyber Security',
                    skin: 'default',
                    cta: {
                        text: 'Learn More',
                        href: '#'
                    },
                    tags: [
                        'Utilities',
                        'Smart Grid',
                        'Smart Metering',
                        'Smart City',
                        'Power Grid'
                    ],
                    content: 'Take advantage of our state of the art security infrastructure and cyber security management.'
                }
            }
        ],
        tiles: [
            {
                context: {
                    title: 'Creating Applications',
                    img: {
                        url: '/assets/img/icons/industries/maritime-offshore-white.svg',
                        alt: 'Alternative text'
                    },
                    href: '#'
                }
            },
            {
                context: {
                    title: 'IoT Platform',
                    img: {
                        url: '/assets/img/icons/industries/subsea-white.svg',
                        alt: 'Alternative text'
                    },
                    href: '#'
                }
            },
            {
                context: {
                    title: 'Secure Connectivity',
                    img: {
                        url: '/assets/img/icons/industries/fishery-white.svg',
                        alt: 'Alternative text'
                    },
                    href: '#'
                }
            }
        ]
    }
};
