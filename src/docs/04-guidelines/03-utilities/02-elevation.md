---
title: Elevation
status: "ready"
context:
    ingress: "Elevation suggests a conceptual hierarchy that makes use of box
              shadows to indicate visual hierarchy. It is up to the developer to
              maintain the actual Z-index and correspond this to the correct
              shadows"
---
<div class="Prose__ingress">
    {{ ingress }}
</div>

<!-- Content starts here -->

The elevation of an object in the atmosphere is visually rendered as box shadows.
The amount of elevation is not the same as the Z-index, rather its relative
elevation which aids in rendering the shadow.

## Levels
<ol class="mrx-spaceboxes mrx-ui">
    <li class="mrx-spaceboxes__item">
        <div class="box mrx-p--large@all mrx-mr--small@all mrx-shadow-2"></div>
        <div class="mrx-spaceboxes__desc">
            <div>`mrx-shadow-2`</div>
            <div><strong>12px</strong></div>
        </div>
    </li>
    <li class="mrx-spaceboxes__item">
        <div class="box mrx-p--large@all mrx-mr--small@all mrx-shadow-3"></div>
        <div class="mrx-spaceboxes__desc">
            <div>`mrx-shadow-3`</div>
            <div><strong>12px</strong></div>
        </div>
    </li>
    <li class="mrx-spaceboxes__item">
        <div class="box mrx-p--large@all mrx-mr--small@all mrx-shadow-4"></div>
        <div class="mrx-spaceboxes__desc">
            <div>`mrx-shadow-4`</div>
            <div><strong>12px</strong></div>
        </div>
    </li>
    <li class="mrx-spaceboxes__item">
        <div class="box mrx-p--large@all mrx-mr--small@all mrx-shadow-5"></div>
        <div class="mrx-spaceboxes__desc">
            <div>`mrx-shadow-5`</div>
            <div><strong>12px</strong></div>
        </div>
    </li>
    <li class="mrx-spaceboxes__item">
        <div class="box mrx-p--large@all mrx-mr--small@all mrx-shadow-6"></div>
        <div class="mrx-spaceboxes__desc">
            <div>`mrx-shadow-6`</div>
            <div><strong>12px</strong></div>
        </div>
    </li>
</ol>

## Use elevation in HTML
Here is an example snippet. Notice the classes used on the `mrx-col`-element.

```html
<link rel="stylesheet" href="path-to-designsystem-css"/>

<div class="mrx-p--base@all mrx-p--xlarge@tab-m mrx-p--xxxlarge@ltp-m mrx-shadow-3">
    <h2>Responsive padding!</h2>
    <p>Try resizing your browsers</p>
</div>
```

Here is how it looks. The level of elevation is often seen in `mrx-card`s using
the default skin.

<div class="mrx-p--base@all mrx-p--xlarge@tab-m mrx-p--xxxlarge@ltp-m mrx-shadow-2 mrx-ui box">
    <h2>Elevated box</h2>
    <p>This box uses a subtle box-shadow</p>
</div>

## Use elevation in Scss
If you use Scss, we provide simple mixins that can be used directly in your
stylesheet. Let's use the same example from above:

```scss
@import 'path-to/fun_shadow'; // Functions for shadow
@import 'path-to/mix_shadow'; // Mixins for shadow

.foo {
    @include shadow(3);
}
```

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

