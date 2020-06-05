---
title: Icons
status: ready
context:
    ingress: "Choose the icon you need from this page, then follow the
             implementation instructions below."
    links: {
        title: "Learn more",
        list: [
            {
                txt: "SVG 4 Everybody",
                url: "https://github.com/jonathantneal/svg4everybody",
                description: "adds external spritemaps support to otherwise SVG-capable browsers."
            }
        ]
    }
---

<div class="Prose__ingress">
    {{ ingress }}
</div>

<!-- Content starts here -->

{% render '@icons' %}

If you need the original svg-files, you can download them here:

{% render '@button', {
    skin: 'primary',
    size: 'large',
    text: 'Download Icon package (.zip)',
    href: '/downloads/mrx-icons.zip'
} %}

## Usage
All system icons are available via an SVG sprite, automated via our build
process that aggregates individual SVG files into a single file you can use.

To generate the sprite, we use [gulp-svg-store](https://github.com/w0rm/gulp-svgstore)
to combine all svg-icons in our icons-folder into one file. Each individual
filename creates a separate `<symbol>`-tag in the sprite. This symbol gets
an `id`-attribute equal to the corresponding file.

This `id` is then used to reference the correct svg, through the `<use>`-tag.

1. We have the files: `twitter.svg` and `facebook.svg` in `/icons`.
2. We then combine them using *gulp-svg-store*.
3. The combined `icons.svg` now contains two symbols:
```html
    <?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
    <svg xmlns="http://www.w3.org/2000/svg">
        <symbol id="twitter" viewBox="0 0 512 512"><title>twitter</title><path ....>
        <symbol id="facebook" viewBox="0 0 512 512"><title>facebook</title><path ....>
    </svg>
```
4. We then reference the icon we want (e.g. *twitter*) with the following code:
```html
    <svg aria-hidden="true" focusable="false">
        <use xlink:href="/assets/img/icons/sprites/icons.svg#twitter"></use>
    </svg>
```

### Browser support
IE browsers lower than Edge 13 do not have native SVG sprite support.
To support these browsers, please add the [svg4everybody](https://github.com/jonathantneal/svg4everybody)
library to your project.

For fastest possible load, we recommend putting the reference to the library
in the `<head>` of your HTML document. This will minimize FONS (Flash Of No Svg).

```html
<html>
    <head>
        <script src="path/to/js/svg4everybody.js"></script>
        <script>
            svg4everybody();
        </script>
    </head>
</html>
```

The library will asyncronosly load and inject the SVG-sprite into the top of your page.
Don't worry, it will not be visible. But once it's loaded and available, individual
symbols in the sprite can be referenced using the `<use>`-tag as shown above.

## Icon Sizes
We provide sizing of icons using a set of utility-classes on the icon-wrapper.
The icon wrapper consists of a single `<i>`-tag with the class `.mrx-icon`.

To apply a size, add the modifier for size, e.g: `.mrx-icon--size-small`.

<p>{% render '@icon', { symbol: 'warning', size: 'tiny' } %} `.mrx-icon--size-tiny` 12x12 px</p>
<p>{% render '@icon', { symbol: 'warning', size: 'small' } %} `.mrx-icon--size-small` (14x14 px)</p>
<p>{% render '@icon', { symbol: 'warning', size: 'base' } %} `.mrx-icon--size-base` 18x18 px</p>
<p>{% render '@icon', { symbol: 'warning', size: 'moderate' } %} `.mrx-icon--size-moderate` 24x24 px</p>
<p>{% render '@icon', { symbol: 'warning', size: 'medium' } %} `.mrx-icon--size-medium` 32x32 px</p>
<p>{% render '@icon', { symbol: 'warning', size: 'large' } %} `.mrx-icon--size-large` 44x44 px</p>
<p>{% render '@icon', { symbol: 'warning', size: 'xlarge' } %} `.mrx-icon--size-xlarge` 56x56 px</p>
<p>{% render '@icon', { symbol: 'warning', size: 'xxlarge' } %} `.mrx-icon--size-xxlarge` 64x64 px</p>
<p>{% render '@icon', { symbol: 'warning', size: 'xxxlarge' } %} `.mrx-icon--size-xxxlarge` 88x88 px</p>

## Accessibility
If the icon's context *does not* provide a relevant text (just an icon),

{% render '@icon', { symbol: 'user', size: 'base', title: 'A user icon', classes: ['mrx-ui'] } %}

include a `<title>`-element inside the `<use>`-tag:

```html
{% render '@icon', { symbol: 'user', size: 'base', title: 'A user icon' } %}
```

If the icon's context *does* provide a relevant text, e.g in a button

{% render '@button', { text: 'User profile', skin: 'primary', size: 'large', classes: ['mrx-ui'], icon: { symbol: 'user', size: 'base', ariaHidden: true } } %}

add ARIA `aria-hidden="true"` attribute and/or leave out `<title>`:

```html
{% render '@button', { text: 'User profile', icon: { symbol: 'user', size: 'base', ariaHidden: true } } %}
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
