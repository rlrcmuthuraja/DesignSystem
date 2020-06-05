---
title: Containers
status: 'ready'
context:
    ingress: "A container limits content to a maximum width. Containers are most
    often used to hold grid rows, columns and components."
---

<div class="Prose__ingress">
    {{ ingress }}
</div>

<!-- Content starts here -->

Containers are the most basic layout element in Muthuraja Design System. They
have fluid-width (meaning they strive to be 100% wide all the time). Using
modifiers for max-width, we can contain the containers :-)

While containers can be nested, most layouts do not require a nested container.
If you think about your page as a hierarchy of boxes, the container is usually
used outside your grid. A container is required when using our default
[grid system](/docs/guidelines/layout/grid-system).

A bit simplified, it can look like this in HTML:

```html
<div class="mrx-container">
    <div class="mrx-row">
        <div class="mrx-col">Content</div>
        <div class="mrx-col">Content</div>
        <div class="mrx-col">Content</div>
    </div>
</div>
<div class="mrx-container">
    <div class="mrx-row">
        <div class="mrx-col">Content</div>
        <div class="mrx-col">Content</div>
    </div>
    <div class="mrx-row">
        <div class="mrx-col">Content</div>
        <div class="mrx-col">Content</div>
        <div class="mrx-col">Content</div>
        <div class="mrx-col">Content</div>
    </div>
</div>
```

## Container Width
To understand the maximum width of containers, we need to be aware of the box sizing
it uses. In CSS we usually define box-sizing with eiter:

- `content-box`: It's the default box-sizing, and gives you the default CSS
  box-sizing behaviour. If you set an element's width to 100px, then the
  element's content box will be 100 px wide, and the width of any border or
  padding will be added to the final rendered width.
- `border-box`: It tells the browser to account for any borders and padding
  in the value your specify for width and height. If you set at element's
  width to 100 px, that 100 px will include any border or padding you added,
  and the content box will shrink to absorb that extra width. This typically
  makes it easier to size elements.

A `mrx-container` always uses `content-box` as it's box sizing. This way we
can easily adjust the outside padding of a container without affecting it's
maximum width.

To calculate the total width we can use this table:

| Modifier              | max-width    | padding-left | content  | padding-right | total       |
| --------------------- | ------------ | ------------ | -------- | ------------- | ----------: |
| `mrx-container--mob-s` | 62.5rem      | 12px         | 296px    | 12px          | **320px**   |
| `mrx-container--mob-m` | 21.9375rem   | 12px         | 351px    | 12px          | **375px**   |
| `mrx-container--mob-l` | 25.0625rem   | 12px         | 401px    | 12px          | **425px**   |
| `mrx-container--tab-s` | 36rem        | 12px         | 576px    | 12px          | **600px**   |
| `mrx-container--tab-m` | 46.5rem      | 12px         | 744px    | 12px          | **768px**   |
| `mrx-container--tab-l` | 62.5rem      | 12px         | 1000px   | 12px          | **1024px**  |
| `mrx-container--ltp-s` | 78.5rem      | 12px         | 1256px   | 12px          | **1280px**  |
| `mrx-container--ltp-m` | 88.5rem      | 12px         | 1416px   | 12px          | **1440px**  |
| `mrx-container--ltp-l` | 98.5rem      | 12px         | 1576px   | 12px          | **1600px**  |
| `mrx-container--dtp`   | 118.5rem     | 12px         | 1896px   | 12px          | **1920px**  |
| `mrx-container--wqhd`  | 158.5rem     | 12px         | 2536px   | 12px          | **2560px**  |

Classnames used to control max-width are *modifiers*, so they should
always be used together with the base-class `mrx-container`. Modifiers for
container widths corresponds to out [responsive breakpoints](/docs/guidelines/layout/responsive).

```html
<div class="mrx-container mrx-container--tab-l">
    <!-- Container will stretch but never become wider than tab-l -->
</div>
```

## Container Alignment
We also provide modifers for alignment.

- `mrx-container--left`
- `mrx-container--right`
- `mrx-container--center`

These should also be used together with the base class

```html
<div class="mrx-container mrx-container--tab-m mrx-container--left">
    <!-- Container will stretch but never become wider than tab-l -->
</div>
```

<div class="mrx-container mrx-container--tab-m mrx-container--left mrx-ui">
    <div class="mrx-row">
        <div class="mrx-col mrx-col--12@all">
            <div class="box mrx-p--small@all">Container tab-m + left alignment</div>
        </div>
    </div>
</div>

```html
<div class="mrx-container mrx-container--tab-m mrx-container--center">
    <!-- Container will stretch but never become wider than tab-l -->
</div>
```

<div class="mrx-container mrx-container--tab-m mrx-container--center mrx-ui">
    <div class="mrx-row">
        <div class="mrx-col mrx-col--12@all">
            <div class="box mrx-p--small@all">Container tab-m + center alignment</div>
        </div>
    </div>
</div>

```html
<div class="mrx-container mrx-container--tab-m mrx-container--right">
    <!-- Container will stretch but never become wider than tab-l -->
</div>
```

<div class="mrx-container mrx-container--tab-m mrx-container--right mrx-ui">
    <div class="mrx-row">
        <div class="mrx-col mrx-col--12@all">
            <div class="box mrx-p--small@all">Container tab-m + right alignment</div>
        </div>
    </div>
</div>

To test how containers look in a page, please have a look at the template
[layout](/components/detail/layout). Try also to open
it as a [standalone page](/components/preview/layout) and resize your browser.

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
