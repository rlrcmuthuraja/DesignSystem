---
title: Aspect Ratio
status: 'ready'
context:
    ingress: "This technique allows browsers to determine an element's
              height based on the width of their containing block using
              aspect ratio"
    links: {
            title: "Resources",
            list: [
                {
                    txt: "Aspect Ratio Calculator",
                    url: "https://andrew.hedges.name/experiments/aspect_ratio/",
                    description: "WCAG 2.0 covers a wide range of recommendations for making Web content more accessible"
                },
                {
                    txt: "Aspect Ratio for images",
                    url: "https://en.wikipedia.org/wiki/Aspect_ratio_(image)",
                    description: "Description of aspect ratio of still images, films, and digital imagery"
                }
            ]
        }
---

<div class="Prose__ingress">
    {{ ingress }}
</div>

<!-- Content starts here -->

A common problem is to make a video responsive. Ecpecially if it's served through
an `<iframe>`. That is because an iframe needs defined attributes for width
and height. Controlling the width can easily be done in CSS (`iframe { width: 100%; }`),
but controlling the height is worse.

<div class="mrx-container mrx-container--tab-m mrx-ui">
    <ul class="mrx-dodont">
        <li class="mrx-dodont__item">
            ![alt text](/assets/img/doc/do-donts/do-ratio.png "Aspect Ratio - DO")
            <p class="mrx-dodont__copy">
                Let the video respect viewport and maintain aspect ratio
            </p>
        </li>
        <li class="mrx-dodont__item mrx-dodont__item--dont">
            ![alt text](/assets/img/doc/do-donts/dont-ratio.png "Aspect Ratio - DON't")
            <p class="mrx-dodont__copy">
                Let the video overflow the viewport on small screens
            </p>
        </li>
    </ul>
</div>

Ideally we don't want the height to remain static if the width is dynamically
changed by the viewport size. For video, commonly displayed in
a 16:9 aspect ratio, we want the height to be exactly 56.25% of the width.

This can be calculated using the formula:

- **((height / width) * 100)**

For a 16:9 video, this results in (9/16) x 100 = **56.25%**.

- A video that is 1024px wide, should have a height of: 1024px x 56.25% = 576px.
- A video that is 675px wide, should have a height of: 675px x 56.25% = 380px.

By using the helper for `mrx-ratio`, we can adjust this automatically without
cumbersome calculations.

```html
<div class="mrx-ratio mrx-ratio--16:9">
    <iframe src="http://url-to-video" width="some-width" height="some-height"></iframe>
</div>
```

Try resizing your browser to see the height of the video change dynamically,
while maintaining an aspect ratio of 16:9:

<div class="mrx-ratio mrx-ratio--16:9 mrx-ui">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/OFTL8KcAZOA?rel=0&amp;showinfo=0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
</div>

## Available ratios
By default we provide a set of common ratios. These are applied as modifiers
to the base class `mrx-ratio`:

<div class="mrx-container mrx-ui">
    <div class="mrx-row mrx-row--gutters mrx-row--reverse@all">
        <div class="mrx-col mrx-col--12@all mrx-col--8@tab-m">
            <h3>3:1</h3>
            <p>
                `mrx-ratio--3:1` Aka "Panorama". Perfect for panorama
                photography due to its very wide format.
            </p>
        </div>
        <div class="mrx-col mrx-col--12@all mrx-col--4@tab-m">
            <div class="mrx-ratio mrx-ratio--3:1">
                <div class="box">
                    <span class="mrx-abcenter-xy">3:1</span>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="mrx-container mrx-ui">
    <div class="mrx-row mrx-row--gutters mrx-row--reverse@all">
        <div class="mrx-col mrx-col--12@all mrx-col--8@tab-m">
            <h3>2:1</h3>
            <p>
                `mrx-ratio--2:1` Aka "Univisium" or "18:9". It is designed to be a
                compromise between the cinema 2.39:1 aspect ratio and the
                HD-TV broadcast 16:9 ratio.
            </p>
        </div>
        <div class="mrx-col mrx-col--12@all mrx-col--4@tab-m">
            <div class="mrx-ratio mrx-ratio--2:1">
                <div class="box">
                    <span class="mrx-abcenter-xy">2:1</span>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="mrx-container mrx-ui">
    <div class="mrx-row mrx-row--gutters mrx-row--reverse@all">
        <div class="mrx-col mrx-col--12@all mrx-col--8@tab-m">
            <h3>16:9</h3>
            <p>
                `mrx-ratio--16:9` the 16:9 format is the standard image
                aspect ratio for HDTV. 16:9 is gaining popularity as a
                format in all classes of consumer still cameras which
                also shoot High Definition (HD) video.
            </p>
        </div>
        <div class="mrx-col mrx-col--12@all mrx-col--4@tab-m">
            <div class="mrx-ratio mrx-ratio--16:9">
                <div class="box">
                    <span class="mrx-abcenter-xy">16:9</span>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="mrx-container mrx-ui">
    <div class="mrx-row mrx-row--gutters mrx-row--reverse@all">
        <div class="mrx-col mrx-col--12@all mrx-col--8@tab-m">
            <h3>16:10</h3>
            <p>
                `mrx-ratio--16:10` Widescreen computer monitor ratio (for
                instance 1920×1200 resolution).
            </p>
        </div>
        <div class="mrx-col mrx-col--12@all mrx-col--4@tab-m">
            <div class="mrx-ratio mrx-ratio--16:10">
                <div class="box">
                    <span class="mrx-abcenter-xy">16:10</span>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="mrx-container mrx-ui">
    <div class="mrx-row mrx-row--gutters mrx-row--reverse@all">
        <div class="mrx-col mrx-col--12@all mrx-col--8@tab-m">
            <h3>3:2</h3>
            <p>
                `mrx-ratio--3:2` is used by classic 35 mm film cameras.
            </p>
        </div>
        <div class="mrx-col mrx-col--12@all mrx-col--4@tab-m">
            <div class="mrx-ratio mrx-ratio--3:2">
                <div class="box">
                    <span class="mrx-abcenter-xy">3:2</span>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="mrx-container mrx-ui">
    <div class="mrx-row mrx-row--gutters mrx-row--reverse@all">
        <div class="mrx-col mrx-col--12@all mrx-col--8@tab-m">
            <h3>4:3</h3>
            <p>
                `mrx-ratio--4:3` for standard television has been in use
                since the invention of moving picture cameras and many
                computer monitors used to employ the same aspect ratio.
            </p>
        </div>
        <div class="mrx-col mrx-col--12@all mrx-col--4@tab-m">
            <div class="mrx-ratio mrx-ratio--4:3">
                <div class="box">
                    <span class="mrx-abcenter-xy">4:3</span>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="mrx-container mrx-ui">
    <div class="mrx-row mrx-row--gutters mrx-row--reverse@all">
        <div class="mrx-col mrx-col--12@all mrx-col--8@tab-m">
            <h3>1:1</h3>
            <p>
                `mrx-ratio--1:1` Classic square image. Originally the
                6cm x 6cm image size format. Many Polaroid instant films
                were designed as square formats. Also made popular by
                Instagram.
            </p>
        </div>
        <div class="mrx-col mrx-col--12@all mrx-col--4@tab-m">
            <div class="mrx-ratio mrx-ratio--1:1">
                <div class="box">
                    <span class="mrx-abcenter-xy">1:1</span>
                </div>
            </div>
        </div>
    </div>
</div>

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
