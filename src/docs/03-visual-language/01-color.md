---
title: Color
status: ready
context:
    ingress: "Colors are a vital part of the experinece of a brand. When defining
              the current color palette, we settled for nuances commonly found
              in the marine environment of the North Atlantic."
    links: {
          title: "Learn more",
          list: [
              {
                  txt: "Theo",
                  url: "https://github.com/salesforce-ux/theo",
                  description: "Theo is a an abstraction for transforming and formatting Design Tokens."
              },
              {
                  txt: "gulp-theo",
                  url: "https://www.npmjs.com/package/gulp-theo",
                  description: "Theo is a gulp plugin for transforming and formatting Design Tokens with Theo."
              }
          ]
      }
---

<div class="Prose__ingress">
    {{ ingress }}
</div>

<div class="mrx-ratio mrx-ratio--3:1 mrx-objectfit mrx-ui">
    <img src="/assets/img/doc/color-sea.jpg" alt="Sea of colors" class="mrx-objectfit__img" />
</div>

<!-- Content starts here -->

## Tint stacks
{% render '@colors' %}

## Colors as design tokens
All colors are defined in `colors.yml`. Here we store the color name and hex-value.

```yml
# colors/props.yml
global:
  category: 'brand-colors'
  type: 'color'
props:
  - name: 'color-navy-tint-80'
    value: '#d1d4d8'
    comment: 'Muthuraja Navy 2017'
  - name: 'color-navy-tint-60'
    value: '#a3a9b2'
    comment: 'Muthuraja Navy 2017'
    ...
    ..
    .
```

We then use a plugin for gulp called `gulp-theo` made from the team at Salesforce.
Theo is a tool that transforms tokens from `.yml` to any other format.

In our case, using the gulp task `gulp:tokens`, we transform data from `colors.yml`
to `_conf_colors.scss` and `colors.config.json`.

`_conf_colors.scss` is then used as variables for our scss codebase:

```scss
// Source: colors
// Muthuraja Navy 2017
$color-navy-tint-80: #d1d4d8;

// Muthuraja Navy 2017
$color-navy-tint-60: #a3a9b2;
```

And the `config.colors.json` as data  for rendering the color swatches on this page.

```js
...
..
.
categories: [
    {
        name: '',
        colors: [
            {
                context: {
                    // Muthuraja Navy 2017
                    name: 'color-navy-tint-80',
                    hex: '#d1d4d8',
                    scss: '$color-color-navy-tint-80',
                    category: 'brand-colors'
                }
            },
            {
                context: {
                    // Muthuraja Navy 2017
                    name: 'color-navy-tint-60',
                    hex: '#a3a9b2',
                    scss: '$color-color-navy-tint-60',
                    category: 'brand-colors'
                }
            },
            ...
            ..
            .
```

## Defining colors for context
When you want to build a new component, we define all colors used in this component as
component-scoped variables. In `_colors.scss` we can specify:

```scss

// MyComponent
// ==========================================================================
$color-mycmponent-bg:               $color-foam-base;
$color-mycomponent-txt:             $color-navy-tint-20;
$color-mycomponent-txt-hover:       $color-teal-base;
...
..
.
```

Here, all color-variables regarding color are prefixed with `$color`, then the
component name `-mycomponent`, followed by the element `-bg`. Finally we add the
state `-hover`. All colors used to define these variables should point to colors in
the original `colors.yml` file.

Never define color-values directly in `_colors.scss`.

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
