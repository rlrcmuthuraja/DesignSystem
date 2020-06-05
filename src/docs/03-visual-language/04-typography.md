---
title: Typography
status: 'ready'
context:
    ingress: "Users digest most web content through text. Therefore, it is
              important to use good typographic principles to establish
              a clear visual hierarchy, as well as maximize readability."
    links: {
        title: "Learn more",
        list: [
            {
                txt: "Open Sans",
                url: "https://fonts.google.com/specimen/Open+Sans",
                description: "Open Sans can be downloaded from Google Fonts."
            },
            {
                txt: "A framework to create an accessible & harmonious typography system for faster design-dev handoff",
                url: "https://blog.prototypr.io/10-practical-steps-to-create-a-predictable-accessible-and-harmonious-typography-system-a-case-6c85d901bedd"
            }
        ]
    }
---
<div class="Prose__ingress">
    {{ ingress }}
</div>

<!-- Content starts here -->

## Open Sans
<p class="mrx-typescale--large mrx-typeweight--light">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z ‘ ? ’ “ ! ” ( % ) [ # ] { @ } / & * 1 2 3 4 5 6 7 8 9 0</p>

<blockquote>
    <p>Open Sans is a humanist sans serif typeface designed by Steve Matteson,
       Type Director of Ascender Corp. Open Sans was designed with an upright stress,
       open forms and a neutral, yet friendly appearance. It was optimized for print,
       web, and mobile interfaces, and has excellent legibility characteristics in its
       letterforms.
    </p>
    <footer>
        — <cite>**Google Fonts** (Open Sans specimen)
    </footer>
</blockquote>

### Usage
Font files can be heavy to download. Even if we use a standard `serif`
font as fallback, we'd like to load the primary font as fast as possible.

Always remember that FOUT (Flash of Unstyled Text) is considered better than FOIT
(Flash of Invisible Text). FOUT enables the user to start reading content earlier,
even is the text is displayed in the fallback font. When the primary font is loaded,
the displayed font will swap instantly (the visible "flash").

Read more about FOUT and FOIT in
[A Historical Look At FOUT and FOIT](https://www.zachleat.com/web/fout-foit-history/).

#### Preload font files
Modern browsers now support preloading of resources.
When it comes to font files, we know that these will be used in the entire page,
so why not load them as fast as possible?

Add the following to the `<head>` of your page.

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>App title</title>
    <link rel="preload" href="/path-to-fonts/opensans-regular-webfont.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="/path-to-fonts/opensans-bold-webfont.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="/path-to-fonts/opensans-semibold-webfont.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="/path-to-fonts/opensans-light-webfont.woff2" as="font" type="font/woff2" crossorigin>
    <!-- The rest of head-content -->
</head>
```

It's vital to add the `<link>`-tags as early as possible in the `<head>`. Just after
the `<title>`-tag is perfect.

Read more about [Preloading Content](https://developer.mozilla.org/en-US/docs/Web/HTML/Preloading_content).

#### Link to CSS with font-declaration.
For faster display of the primary font, we provide a tiny css-file only containing the `@font-face` declarations.
Once this is loaded, the font can be shown on screen. Even if the rest of the page is loading.

This way we don't need to load the entire main css file just to see the correct font.

Link to the stylesheets in this order in the `<head>` of the page:

```html
<link media="all" rel="stylesheet" href="/path/to/assets/styles/css/mrx-fonts.css">
<link media="all" rel="stylesheet" href="/path/to/assets/styles/css/mrx-styles.css">
<!-- Other custom stylesheets-->
```

#### Formats

We provide Open Sans in three different formats. Together they cover a broad set of browsers:

- `.woff2` - supported in super modern browser. Provides better compression than WOFF 1.0.
Is now a W3C Candidate Recommendation.
- `.woff` - supported in modern browsers. Developed in 2009, and is now a W3C Recommendation.
- `.ttf` - supported in older Safar, Android an iOS. TrueType is the most common
format for Mac and Windows operating systems.

## Sizes
We offer different text sizes to convey visual hierarchy in text.
The sizes are all carefully adjusted to fit our basline grid of `4px`. This way
we can be sure that text blocks and their `line-heights`, always is a factor of 4.
This assures vertical rhythm in our designs.

### Utility classes for font-size
| Size                                            | Class (HTML)             | Mixin (Scss)                     | Font-size | Line-Height |
| ----------------------------------------------- | ------------------------ | -------------------------------- | ---------:| -----------:|
| <p class="mrx-typescale--super">Typescale</p>    | `mrx-typescale--super`    | `@include type-scale(super);`    | 64px      | 80px        |
| <p class="mrx-typescale--jumbo">Typescale</p>    | `mrx-typescale--jumbo`    | `@include type-scale(jumbo);`    | 50px      | 64px        |
| <p class="mrx-typescale--xxxlarge">Typescale</p> | `mrx-typescale--xxxlarge` | `@include type-scale(xxxlarge);` | 42px      | 52px        |
| <p class="mrx-typescale--xxlarge">Typescale</p>  | `mrx-typescale--xxlarge`  | `@include type-scale(xxlarge);`  | 34px      | 44px        |
| <p class="mrx-typescale--xlarge">Typescale</p>   | `mrx-typescale--xlarge`   | `@include type-scale(xlarge);`   | 27px      | 32px        |
| <p class="mrx-typescale--large">Typescale</p>    | `mrx-typescale--large`    | `@include type-scale(large);`    | 22px      | 28px        |
| <p class="mrx-typescale--medium">Typescale</p>   | `mrx-typescale--medium`   | `@include type-scale(medium);`   | 19px      | 28px        |
| <p class="mrx-typescale--base">Typescale</p>     | `mrx-typescale--base`     | `@include type-scale(base);`     | 16px      | 24px        |
| <p class="mrx-typescale--small">Typescale</p>    | `mrx-typescale--small`    | `@include type-scale(small);`    | 13px      | 20px        |
| <p class="mrx-typescale--tiny">Typescale</p>     | `mrx-typescale--tiny`     | `@include type-scale(tiny);`     | 11px      | 20px        |

## Weights
<p>
    <span class="mrx-typescale--xxlarge mrx-typeweight--light">Aa</span>
     - 300 (light)
</p>
<p>
    <span class="mrx-typescale--xxlarge mrx-typeweight--regular">Aa</span>
     - 400 (regular)
</p>
<p>
    <span class="mrx-typescale--xxlarge mrx-typeweight--bold">Aa</span>
     - 600 (semibold)
</p>
<p>
    <span class="mrx-typescale--xxlarge mrx-typeweight--extrabold">Aa</span>
     - 700 (extra-bold)
</p>

## Header Styles
Headers ranging from `h1-h6` have a default styling combining both *scale*
and *weight*. The `h1` corresponds to the `mrx-typescale--xxxlarge`, the
`h2` to the `mrx-typescale--xxlarge` and so on.

The larger scales `mrx-typescale--super` and `mrx-typescale--jumbo` can be
applied to the `h1`-tag if you'd like to go even larger, e.g. in a large
campaign element, [hero](/components/detail/hero--100-image) or similar.

| Style name | Attributes | Level | Usage |
| ---------- | ---------- | ----- | ----- |
| <h1>Header 1</h1>   | Descript.. | `h1`  | Describe.. |
| <h2>Header 2</h2>   | Descript.. | `h2`  | Describe.. |
| <h3>Header 3</h3>   | Descript.. | `h3`  | Describe.. |
| <h4>Header 4</h4>   | Descript.. | `h4`  | Describe.. |
| <h5>Header 5</h5>   | Descript.. | `h5`  | Describe.. |
| <h6>Header 6</h6>   | Descript.. | `h6`  | Describe.. |


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
