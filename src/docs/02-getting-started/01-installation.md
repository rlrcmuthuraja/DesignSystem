---
title: Installation
status: 'ready'
context:
    ingress: "This guide will take you through the simple steps of consuming the
    Muthuraja Design System in your project."
---
<div class="Prose__ingress">
    {{ ingress }}
</div>

<!-- Content starts here -->

## Getting started
First, make sure you have [Node.js](https://nodejs.org/en/) installed, and
that node is available via terminal/cmd (command prompt).

1. Add an `.npmrc` file to your project (or update your existing one) with the following line:
   `registry=https://design.jfrog.io/kdi/api/npm/npm/`. This will point your product
   to KDI's internal NPM server where the latest version of Muthuraja Design System
   kan be retrieved.
2. Install latest version of Muthuraja Design System via NPM: `npm install Muthuraja-design-system --save`

## NPM tips
Here are some tips for working with npm. For more in depth information please go to
 [NPM documentation](https://docs.npmjs.com/cli/).

### Install and add as *dependency*
```javascript
npm install Muthuraja-design-system --save
```

### Install and add as *devdependency*
```javascript
npm install Muthuraja-design-system --save-dev
```

### What version am I currently using?
`npm list Muthuraja-design-system` prints the version number of Muthuraja Design System,
 currently installed in your project:

```javascript
npm list Muthuraja-design-system
test@0.0.1 C:\path\to\my\app
`-- Muthuraja-design-system@0.2.5
```

### How do I install a specifc version?
`npm install Muthuraja-design-system@0.2.5 --save` installs the exact version 0.2.5 of
Muthuraja Design System in your project:

### How do I update to a newer version?
`npm outdated Muthuraja-design-system` prints a list of current, wanted and latest version available

If your package json refers to the `"Muthuraja-design-system": "^0.2.5"`, this would
look something like this:

```javascript
npm outdated Muthuraja-design-system
Package                 Current  Wanted  Latest  Location
Muthuraja-design-system    0.2.5   0.2.6   0.3.0  test
```

- *Current* shows you the installed version. The same as the `npm list` command above.
- *Wanted* shows that there is a newer version available in the registry that fit your
version definition. The `^` says that you should be able to install version from 0.2.5 to
0.2.x (patch). But will never install 0.3.0 (minor) or 1.0.0 (major).
- *Latest* shows that there is a minor version 0.3.0 available

To get the latest version matching your range, use `npm update Muthuraja-design-system`.
In this case, it will install version 0.2.6.

If you like to update to a newer version, e.g. 0.3.0, change your applications
`package.json` to:

```javascript
    "Muthuraja-design-syste": "^0.3.0"
```

Save the file and run `npm update Muthuraja-design-system` from your terminal.
After install, check the version installed using `npm list Muthuraja-design-system`.

```javascript
npm list Muthuraja-design-system
test@0.0.1 C:\path\to\my\app
`-- Muthuraja-design-system@0.3.0
```


## Using CSS
The easiest way of consuming Muthuraja Design System is to link directly to its
precompiled CSS. Link to the stylesheets in this order in the `<head>` of the page:

```html
<link media="all" rel="stylesheet" href="/path/to/assets/styles/css/mrx-fonts.css">
<link media="all" rel="stylesheet" href="/path/to/assets/styles/css/mrx-styles.css">
<!-- Custom app stylesheets ->
```

If your build process automatically consumes the Muthuraja Design System relative
path to `mrx-styles.css`, the path would normally be:

- `node_modules/Muthuraja-design-system/www/assets/styles/css/mrx-fonts.css`
- `node_modules/Muthuraja-design-system/www/assets/styles/css/mrx-styles.css`

For faster loading of webfonts, please take a look at [typography](/docs/visual-style/typography)
for a description on how to preload font-files.

## Using Scss
Another way of consuming styles, is to consume the source files for styling directly
into you own css bundle. This way you will be able to use available tools like
scss variables, functions and mixins.

When including the scss-files from the design system into you own bundle, the order
of you `@import` statements are important.

```scss
// Import Vendor libraries
// ==========================================================================
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/00-vendor/sass-mq/mq';
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/00-vendor/susy/sass/susy';
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/00-vendor/susy/sass/plugins/svg-grid';
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/00-vendor/quantity-queries/stylesheets/quantity-queries';

// App Config - this is where most of your magic happen
// ==========================================================================
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/01-config/conf_colors';
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/01-config/conf_radius';
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/01-config/conf_duration';
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/01-config/conf_mq';
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/01-config/conf_susy';
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/01-config/conf_rhythm';
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/01-config/conf_fonts';
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/01-config/conf_spacing';
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/01-config/conf_type-scale';
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/01-config/conf_type-weight';
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/01-config/conf_icon-scale';
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/01-config/conf_debug';

// Import Tools (Functions and Mixins)
// ==========================================================================
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/02-tools/fun_map-fetch';
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/02-tools/fun_px-to-em';
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/02-tools/fun_px-to-rem';
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/02-tools/fun_rem-calc';
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/02-tools/fun_shade-color';
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/02-tools/fun_shadow';
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/02-tools/fun_str-replace';
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/02-tools/fun_strip-units';
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/02-tools/fun_tint-color';
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/02-tools/mix_absolute-center';
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/02-tools/mix_base-margin';
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/02-tools/mix_base-padding';
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/02-tools/mix_box';
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/02-tools/mix_center';
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/02-tools/mix_center-box';
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/02-tools/mix_cf';
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/02-tools/mix_cover';
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/02-tools/mix_family';
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/02-tools/mix_fixed';
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/02-tools/mix_font-face';
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/02-tools/mix_font-smoothing';
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/02-tools/mix_grid';
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/02-tools/mix_hidden';
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/02-tools/mix_highlighter';
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/02-tools/mix_hyphenate';
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/02-tools/mix_icon-scale';
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/02-tools/mix_invisible';
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/02-tools/mix_objectfit';
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/02-tools/mix_overflow-margin-fix';
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/02-tools/mix_placeholder';
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/02-tools/mix_range';
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/02-tools/mix_ratio';
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/02-tools/mix_reset-list';
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/02-tools/mix_shadow';
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/02-tools/mix_spacing';
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/02-tools/mix_tables';
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/02-tools/mix_text-align';
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/02-tools/mix_text-underline';
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/02-tools/mix_text-underline-border';
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/02-tools/mix_text-underline-crop';
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/02-tools/mix_triangle';
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/02-tools/mix_truncate';
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/02-tools/mix_type-family';
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/02-tools/mix_type-scale';
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/02-tools/mix_type-weight';
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/02-tools/mix_vishidden';

// Import Base (Reset, normalizing, global defaults)
// ==========================================================================
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/03-base/colors';
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/03-base/normalize';
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/03-base/typography';
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/03-base/animations';

// Import Layout
// ==========================================================================
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/04-layout/layout-grid';
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/04-layout/layout-flex';
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/04-layout/layout-container';
@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/04-layout/layout-regions';

// Import Components
// ==========================================================================
@import 'node_modules/Muthuraja-design-system/src/components/01-badge/badge';
@import 'node_modules/Muthuraja-design-system/src/components/01-breadcrumb/breadcrumb';
@import 'node_modules/Muthuraja-design-system/src/components/01-button/button';
@import 'node_modules/Muthuraja-design-system/src/components/01-button-group/button-group';
@import 'node_modules/Muthuraja-design-system/src/components/01-button-toolbar/button-toolbar';
@import 'node_modules/Muthuraja-design-system/src/components/01-card/card';
@import 'node_modules/Muthuraja-design-system/src/components/01-dropdown/dropdown';
@import 'node_modules/Muthuraja-design-system/src/components/01-footer/footer';
@import 'node_modules/Muthuraja-design-system/src/components/01-form/_field/field';
@import 'node_modules/Muthuraja-design-system/src/components/01-form/fieldset/fieldset';
@import 'node_modules/Muthuraja-design-system/src/components/01-form/form';
@import 'node_modules/Muthuraja-design-system/src/components/01-form/input-group/input-group';
@import 'node_modules/Muthuraja-design-system/src/components/01-form/label/label';
@import 'node_modules/Muthuraja-design-system/src/components/01-form/legend/legend';
@import 'node_modules/Muthuraja-design-system/src/components/01-form/switch/switch';
@import 'node_modules/Muthuraja-design-system/src/components/01-form/switch-group/switch-group';
@import 'node_modules/Muthuraja-design-system/src/components/01-hamburger/hamburger';
@import 'node_modules/Muthuraja-design-system/src/components/01-header/header';
@import 'node_modules/Muthuraja-design-system/src/components/01-hero/hero';
@import 'node_modules/Muthuraja-design-system/src/components/01-icon/icon';
@import 'node_modules/Muthuraja-design-system/src/components/01-listgroup/listgroup';
@import 'node_modules/Muthuraja-design-system/src/components/01-modal/modal';
@import 'node_modules/Muthuraja-design-system/src/components/01-nav/nav';
@import 'node_modules/Muthuraja-design-system/src/components/01-notification/notification';
@import 'node_modules/Muthuraja-design-system/src/components/01-pagination/pagination';
@import 'node_modules/Muthuraja-design-system/src/components/01-process/process';
@import 'node_modules/Muthuraja-design-system/src/components/01-table/table';
@import 'node_modules/Muthuraja-design-system/src/components/01-topictile/topictile';
@import 'node_modules/Muthuraja-design-system/src/components/01-tree/tree';

// Import Themes
// ==========================================================================
@import 'themes';

// Import Utility-classes - Trumps earlier css (specificity)
// ==========================================================================
@import '@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/07-utilities/align';
@import '@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/07-utilities/center';
@import '@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/07-utilities/ellipsis';
@import '@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/07-utilities/hidden';
@import '@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/07-utilities/hyphenate';
@import '@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/07-utilities/objectfit';
@import '@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/07-utilities/ratio';
@import '@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/07-utilities/release';
@import '@import 'node_modules/Muthuraja-design-system/src/assets/styles/sass/07-utilities/spacing';
```

### Overriding mrx-styles with SCSS
By controlling which SCSS files you `@import` into your product, you can control
when and how you override the styles Muthuraja Design System provides.

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
