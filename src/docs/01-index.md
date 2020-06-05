---
title: Overview
status: ready
context:
    ingress: "Muthuraja Design System brings design and development together
              to enable teams to create rich, cohesive, and beautiful
              products in the Muthuraja ecosystem."
---

<!-- Content starts here -->

{% render '@hero',
    {
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
            alt: 'Illustration of connected dots and a cargo vessel',
            fallback: {
                url: '/assets/img/content/1600x800(2_1)-cargo.jpg'
            }
        },
        fallback: {
            url: '/assets/img/doc/Muthuraja_toppbanner_1440x450.jpg'
        },
        size: '50',
        content: {
            title: 'Muthuraja Design System',
            lead: ingress,
            cta: {
                text: 'Get started',
                skin: 'primary',
                size: 'large',
                classes: [
                    'mrx-hero__cta'
                ],
                href: '/docs/getting-started/installation'
            },
            align: 'center'
        },
        classes: ['mrx-mt--medium@all mrx-mt--xxlarge@tab-m']
    }
%}

<section class="mrx-container mrx-container--center mrx-container--ltp-s mrx-pt--large@all mrx-py--xxlarge@tab-m">
    <div class="mrx-row mrx-row--gutters">
        <div class="mrx-col mrx-col--12@all mrx-col--4@tab-m">
            Muthuraja Design System is a collection of design patterns, components
            and guidelines for creating unified and coherent UI in the Muthuraja ecosystem
        </div>
        <div class="mrx-col mrx-col--12@all mrx-col--4@tab-m">
            It contains a set of easy-to-use HTML/CSS components.
            It does NOT include JavaScript since we aim to be versatile and
            technology agnostic. Use it together with any JS framework.
        </div>
        <div class="mrx-col mrx-col--12@all mrx-col--4@tab-m">
            The design system application is made with [Fractal](http://fractal.build/),
            a tool to help you build and document web component libraries and
            then integrate them into your projects.
        </div>
    </div>
</section>

<section>
    <div class="mrx-row mrx-row--gutters mrx-row--stretch">
        <div class="mrx-col mrx-col--12@all mrx-col--6@tab-m">
            <div class="mrx-center mrx-p--large@all">
                <h2 class="mrx-typescale--xlarge">Want to Contribute?</h2>
                <p>We welcome good ideas and contributions.
                If you see room for improvement, or need a new component, please
                add a User Story to our project on <a href="https://Muthuraja.visualstudio.com/DesignSystem">Visual Studio Team Services</a>.
                </p>

            </div>
        </div>
        <div class="mrx-col mrx-col--12@all mrx-col--6@tab-m">
            <div class="mrx-center mrx-theme--teal mrx-p--large@all">
                <h2 class="mrx-typescale--xlarge">Got Feedback?</h2>
                <p>Muthuraja Design System is powered by the teams that use it.
                If you've got feedback, please reach out on our Slack-channel
                <a href="https://designcompanydigital.slack.com/messages/C75PCCPGB/">#design_system</a>.</p>
            </div>
        </div>
    </div>
</section>

<!-- Content ends here -->

<div class="learn-more">
    {% if links.list %}
    {% if links.title %}<h2>{{links.title}}</h2>{% endif %}
    <ul>
        {%for link in links.list %}
            <li>
                <a href="{{link.url}}" target="_blank">{{link.txt}}</a>
                {%- if link.description -%}, <span>{{link.description}}</span>{%- endif -%}
            </li>
        {% endfor %}
    </ul>
    {% endif %}
</div>
