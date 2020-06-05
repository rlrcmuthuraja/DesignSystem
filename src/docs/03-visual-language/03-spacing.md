---
title: Spacing
status: ready
context:
    ingress: "The design system uses multiples of 4px for all spacing values:
             dimensions, padding, and margins. The goal behind this is to achieve
             a consistent vertical rhythm and to reduce the cognitive load
             of fiddling with different spacing options."
    links: {
        title: "Learn more",
        list: [
            {
                txt: "A framework for creating a predictable & harmonious spacing system for faster design-dev handoff",
                url: "https://blog.prototypr.io/a-framework-for-creating-a-predictable-and-harmonious-spacing-system-8eee8aaf773c"
            },
            {
                txt: "8-Point Grid: Borders And Layouts",
                url: "https://builttoadapt.io/8-point-grid-borders-and-layouts-e91eb97f5091"
            },
            {
                txt: "Space in Design Systems",
                url: "https://medium.com/eightshapes-llc/space-in-design-systems-188bcbae0d62"
            }
        ]
    }
---
<div class="Prose__ingress">
    {{ ingress }}
</div>

<!-- Content starts here -->

Spacing is considered a tool for distributing content and components
on a webpage. Muthuraja Design System provides an easy-to-use concept, mixins and utility
classes to apply and maintain spacing within and between components.

**Note:** These utilities are helpers, not rules. Based on context, you always
have to ensure that the things you're building look good. If that requires you
to manually add unique values for `margin` or `padding` to get it "just right",
please do so. Still, try to keep custom overrides to a minimum.

We use a set of sizes to help control the use of spacing in Muthuraja Design System.
All sizes are defined in the file `_conf_spacing.scss`.

## Sizes
<ol class="mrx-spaceboxes mrx-ui">
    <li class="mrx-spaceboxes__item">
        <div class="box mrx-p--none@all mrx-mr--small@all"></div>
        <div class="mrx-spaceboxes__desc">
            <div>`none`</div>
            <div><strong>0px</strong></div>
        </div>
    </li>
    <li class="mrx-spaceboxes__item">
        <div class="box mrx-p--nano@all mrx-mr--small@all"></div>
        <div class="mrx-spaceboxes__desc">
            <div>`nano`</div>
            <div><strong>2px</strong></div>
        </div>
    </li>
    <li class="mrx-spaceboxes__item">
        <div class="box mrx-p--tiny@all mrx-mr--small@all"></div>
        <div class="mrx-spaceboxes__desc">
            <div>`tiny`</div>
            <div><strong>4px</strong></div>
        </div>
    </li>
    <li class="mrx-spaceboxes__item">
        <div class="box mrx-p--mini@all mrx-mr--small@all"></div>
        <div class="mrx-spaceboxes__desc">
            <div>`mini`</div>
            <div><strong>8px</strong></div>
        </div>
    </li>
    <li class="mrx-spaceboxes__item">
        <div class="box mrx-p--small@all mrx-mr--small@all"></div>
        <div class="mrx-spaceboxes__desc">
            <div>`small`</div>
            <div><strong>12px</strong></div>
        </div>
    </li>
    <li class="mrx-spaceboxes__item">
        <div class="box mrx-p--base@all mrx-mr--small@all"></div>
        <div class="mrx-spaceboxes__desc">
            <div>`base`</div>
            <div><strong>16px</strong></div>
        </div>
    </li>
    <li class="mrx-spaceboxes__item">
        <div class="box mrx-p--moderate@all mrx-mr--small@all"></div>
        <div class="mrx-spaceboxes__desc">
            <div>`moderate`</div>
            <div><strong>20px</strong></div>
        </div>
    </li>
    <li class="mrx-spaceboxes__item">
        <div class="box mrx-p--medium@all mrx-mr--small@all"></div>
        <div class="mrx-spaceboxes__desc">
            <div>`medium`</div>
            <div><strong>24px</strong></div>
        </div>
    </li>
    <li class="mrx-spaceboxes__item">
        <div class="box mrx-p--large@all mrx-mr--small@all"></div>
        <div class="mrx-spaceboxes__desc">
            <div>`large`</div>
            <div><strong>32px</strong></div>
        </div>
    </li>
    <li class="mrx-spaceboxes__item">
        <div class="box mrx-p--xlarge@all mrx-mr--small@all"></div>
        <div class="mrx-spaceboxes__desc">
            <div>`xlarge`</div>
            <div><strong>48px</strong></div>
        </div>
    </li>
    <li class="mrx-spaceboxes__item">
        <div class="box mrx-p--xxlarge@all mrx-mr--small@all"></div>
        <div class="mrx-spaceboxes__desc">
            <div>`xxlarge`</div>
            <div><strong>64px</strong></div>
        </div>
    </li>
    <li class="mrx-spaceboxes__item">
        <div class="box mrx-p--xxxlarge@all mrx-mr--small@all"></div>
        <div class="mrx-spaceboxes__desc">
            <div>`xxxlarge`</div>
            <div><strong>128px</strong></div>
        </div>
    </li>
</ol>

## Use spacing in HTML
As with grid-classes, you can apply classes for spacing into your HTML.
Spacing-classes use a similar syntax when it comes to responsive design
as [grids](/docs/guidelines/grid), namely using the `@`-symbol for scoping *when* a spacing-class
should have effect. As with grids, the scoping conditions for spacing follow
the same global [breakpoints definition](/docs/guidelines/responsive).

Here is an example snippet. Notice the classes used on the `mrx-col`-element.

```html
<link rel="stylesheet" href="path-to-designsystem-css"/>

<div class="mrx-p--base@all mrx-p--xlarge@tab-m mrx-p--xxxlarge@ltp-m">
    <h2>Responsive padding!</h2>
    <p>Try resizing your browsers</p>
</div>
```

Here is how it looks. Try resizing your browser to se the padding change.

<div class="mrx-p--base@all mrx-p--xlarge@tab-m mrx-p--xxxlarge@ltp-m mrx-ui" style="background: rgba(82,216,225,.25);">
    <h2>Responsive padding!</h2>
    <p>Try resizing your browsers</p>
</div>

- Where `mrx-m` or `mrx-p` is margin or padding.
- Where `x`, `y`, `l`, `r`, `t` or `b` is the direction in which the margin
or padding is applied. Like this: `mrx-py`, `mrx-mx`, `mrx-pb` etc.
- Where `none`, `nano`, `tiny`, `mini`, `small`, `base`, `moderate`, `medium`
 `large`, `large`, `xlarge`, `xxlarge`, `xxxlarge`, or `auto` is the `$size`
 of the margin or padding applied.
- Where `@` is the breakpoint from which the margin or padding is applied.

## Use spacing in Scss
If you use Scss, we provide simple mixins that can be used directly in your
stylesheet. Let's use the same example from above:

```scss
@import 'path-to/conf_mq'; // Definition for media queries
@import 'path-to/conf_spacing'; // Definition for spacing
@import 'path-to/mq'; // Mixins for Media Queries
@import 'path-to/mix_spacing'; // Mixins for Media Queries

.foo {
    @include p(base);

    @include mq($from: tab-m) {
        @include p(xlarge);
    }
}
```

The example above compiles to the following css:

```css
.foo {
    padding: 1rem; /* = 16px*/
}

@media all and (min-width: 48.0625rem) {
    .foo {
        padding: 3rem; /* = 48px*/
    }
}
```

This snippet sets a default value for `padding` on a component
called `.foo`. If viewport size is larger than "a medium tablet"
(`tab-m` = `769px` = `48.0625rem`), the `padding` increases from `16px` to `48px` in
all directions. Quite simple!

<div class="mrx-row mrx-row--gutters mrx-ui">
    <div class="mrx-col mrx-col--12@all mrx-col--4@tab-m">
        <h2>Margin</h2>
        <ul>
            <li>`m($size)`</li>
            <li>`m($y, $x)`</li>
            <li>`m($t, $x, $b)`</li>
            <li>`m($t, $r, $b, $l)`</li>
            <li>`mx($size)`</li>
            <li>`mx($r, $l)`</li>
            <li>`my($size)`</li>
            <li>`my($t, $b)`</li>
            <li>`mt($size)`</li>
            <li>`mr($size)`</li>
            <li>`mb($size)`</li>
            <li>`ml($size)`</li>
        </ul>
    </div>
    <div class="mrx-col mrx-col--12@all mrx-col--4@tab-m">
        <h2>Padding</h2>
        <ul>
            <li>`p($size)`</li>
            <li>`p($y, $x)`</li>
            <li>`p($t, $x, $b)`</li>
            <li>`p($t, $r, $b, $l)`</li>
            <li>`px($size)`</li>
            <li>`px($r, $l)`</li>
            <li>`py($size)`</li>
            <li>`py($t, $b)`</li>
            <li>`pt($size)`</li>
            <li>`pr($size)`</li>
            <li>`pb($size)`</li>
            <li>`pl($size)`</li>
        </ul>
    </div>
    <div class="mrx-col mrx-col--12@all mrx-col--4@tab-m">
        <h2>Directions</h2>
        <ul>
            <li>none - margin/padding on all sides</li>
            <li>`x` - margin/padding on the left and right</li>
            <li>`y` - margin/padding on the top and bottom</li>
            <li>`l` - margin/padding on the left</li>
            <li>`r` - margin/padding on the right</li>
            <li>`t` - margin/padding on the tom</li>
            <li>`b` - margin/padding on the bottom</li>
        </ul>
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

