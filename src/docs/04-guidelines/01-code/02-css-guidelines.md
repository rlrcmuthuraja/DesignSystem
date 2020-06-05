---
title: CSS/ Scss Guidelines
status: 'ready'
context:
    ingress: "An opinionated styleguide for writing sane, maintainable
    and scalable (S)CSS for Muthuraja apps."
---

<div class="Prose__ingress">
    {{ ingress }}
</div>

<!-- Content starts here -->

## Syntax & Formatting
In order to keep stylesheets neat, readable, maintainable and scalable, it's
important that development is done according to conventions and rules that
are agreed upon.

At a very high-level, we want:

- SCSS-syntax
- four (4) spaces indents, no tabs;
- write US English.
- ideally, 80-characters wide lines;
- properly written multi-line CSS rules;
- meaningful use of whitespace. Use space after selector and property colon.

The specifics are somewhat irrelevant - consistency is key

```scss
// Yep

//
// I am a long-form comment. I describe, in detail, the CSS that follows. I am
// such a long comment that I easily break the 80 character limit, so I am
// broken across several lines.
//

.foo {
    display: block;
    overflow: hidden;
    padding: 0 1em;
}

// Nope

//I am a long-form comment. I describe, in detail, the CSS that follows. I am more than 80 characters wide, and I don't break. This makes me hard to read.

.foo{
  display: block;overflow: hidden;

  padding: 0 1em;
}
```

### Strings
Believe it or not, strings play quite a large role in both CSS and Sass
ecosystems. Most CSS values are either lengths or strings (usually unquoted),
 so it actually is quite crucial to stick to some guidelines when dealing
 with strings in Sass.

#### Encoding
To avoid any potential issue with character encoding, it is highly
recommended to force UTF-8 encoding in the main stylesheet using the @charset
 directive. Make sure it is the very first element of the stylesheet and
 there is no character of any kind before it.

```scss
@charset 'utf-8';
```

#### Quotes
Sass does not require strings to be quoted(e.g. `'abc'` equals `abc`). But
for better concistency with other languages, it's recommended to to use
**single quotes** ('). Besides this, there are some other benefits:

- color names are treated as colors when unquoted, which can lead to serious
issues.
- most syntax highlighter choke on unquoted strings
- it helps general readability
- there is no valid reason not to quote strings

```scss
// Yep
$direction: 'left';

// Nope
$direction: left;
```

## Naming Conventions
We use the [**BEM**](http://getbem.com/naming/) naming convention as a foundation
 and to ensure strict and rational control of naming things. In addition to a strict BEM
convention, we use our own namespace as a class-prefix. As a last ingredient, we offer
a range of utility-classes that can be used and combined in directly in your HTML.

### Namespacing
Namespacing in Sass is very useful for scoping project-specific styles and
avoiding conflicts, e.g. with third party plugins og modules.

- Every selector, placeholder, mixin and function in the project should be
namespaced
- Namespace should be `mrx` followed by the dash suffix `-`, like this: `mrx-`

```scss
// Selector
.mrx-myclass {
    ...
}

// Placeholder
%mrx-myplaceholder {
    ...
}
```

### Block (Identifiers)
Each block has a CSS class that identifies it. Examples of such classes
include:

- `mrx-btn`
- `mrx-icon`

The convention for block is `.[namespace]-[block]`.

### Element (Children)
An element is a part of a block and have no standalone meaning. Any element is
semantically
tied to its block. This helps us keep the specificity low since we are less
dependent of using nested selectors. An elements relationship to its parent
block is described in the elements classname itself.

The convention for element is `.[namespace]-[block]__[element]`.

- `mrx-btn__text`
- `mrx-btn__icon`

### Modifiers (Variation)
Each block (or element) can have a few variations in terms of form/shape.
Modifier-classes are meant used in addition to the identifier, and several
modifier-classes can be added to the same block or element.

The convention for modifiers is `.[namespace]-[block]--[modifier]`.

- `mrx-btn--primary`
- `mrx-icon--user`

Try to write your identifiers and modifiers in a way that makes modifiers
"add" properties to the base identifier, instead of overriding or resetting
properties. Modifiers should be written below the base styles in your partials.

```scss
// Styling for button "base". All buttons shares padding
.mrx-btn {
    padding: 12px;
}

// Styling for button "primary". This modifier sets background to red
.mrx-btn--primary {
    background: red;
}

// Styling for button "secondary". This modifier sets background to blue
.mrx-btn--secondary {
    background: blue;
}

```

### States
An element can change "state". In reality, these states are also modifiers,
but are often applied to elements in combination with JS. A classic toggle
for an "active" state is a good example of a change of state.

The convention for states is `.[namespace]-[is|has]-[statename]`.

States are usually closely connected to its base element, but some states
contains properties that can be used on any element at a global level. This
is why states does not include the `[identifiername]` in the classname, just
the `namespace` and the `[statename]`, devided by `-is-` or `-has-`. Here are
some examples of global states:

- `.mrx-is-hidden`
- `.mrx-is-open`
- `.mrx-has-children`
- `.mrx-has-loaded`

These states are truly global. E.g `.mrx-is-hidden` hides whatever element
it's applied to. The styling of global states should always be at the bottom
of the final CSS-file, hence put global states as "helpers" or "utilities" at
the bottom of your main .scss-file. This way, they will override initial styles
for a base element.

In HTML, the DOM would look something like this:

```HTML
<span class="mrx-myelement mrx-is-hidden">I'm invisible</span>
```

In the partial for `_myelement.scss`, we just include the basic styling for
this
element.

```scss
// _myelement.scss

.mrx-myelement {
    display: block;
}
```

And in the partial for global helpers (imported last in the CSS), we have the
 global styling for
`.mrx-is-hidden`:

```scss
// _helpers.scss

.mrx-is-hidden {
    display: none;
    visibility: hidden;
}
```

This way, the `.mrx-is-hidden` overwrites the initial `display: block;` of `
.mrx-myelement`.

Other states can be more contextual and should be used in conjunction with
the base class for the actual element:

- `.mrx-is-closed`
- `.mrx-is-disabled`
- `.mrx-is-loading`

Since the actual look of these states can vary significantly between each
element they're applied to, these states should be placed at the bottom of
the partial in question (scoped):

```scss
.mrx-myelement {
    // Default styling of myelement
    ...

    &.mrx-is-loading {
        // Styling for the loading state of myelement
        ...
    }
}
```

In HTML, the DOM would look something like this:

```HTML
<span class="mrx-myelement mrx-is-loading">Loading...</span>
```

## Comments
Well commented code is extremely important. Take time to describe components,
 how they work, their limitations, and the way they are constructed. Don't
 leave others in the team guessing as to the purpose of uncommon or
 non-obvious code.

Please use Sass-comments instead of CSS-comments. Comments are meant to help
developers understand the codebase, and should not really be a part of the
compiled CSS. Using Sass-comments starting with `//` instead of `/*` will
make them invisible in the finished stylesheet.

```scss
// ==========================================================================
// Section comment block
// ==========================================================================

// Sub-section comment block
// ==========================================================================

//
// Short description using Doxygen-style comment format
//
// The first sentence of the long description starts here and continues on this
// line for a while finally concluding here at the end of this paragraph.
//
// The long description is ideal for more detailed explanations and
// documentation. It can include example HTML, URLs, or any other information
// that is deemed necessary or useful.
//
// @tag This is a tag named 'tag'
//
// TODO: This is a todo statement that describes an atomic task to be completed
//       at a later date. It wraps after 80 characters and following lines are
//       indented by 7 spaces.
//

// Basic comment
```

## Specificity

### IDs in Sass/ CSS
If we want to keep specificity low, which we do, we have one really
quick-win, simple, easy-to-follow rule that we can employ to help us: **avoid
 using IDs in CSS**.

Not only are IDs inherently non-reusable, they are also vastly more specific
than any other selector, and therefore become specificity anomalies. Where
the rest of your selectors are relatively low specificity, your ID-based
selectors are, comparatively, much, much higher.

**N.B.** It is still perfectly okay to use IDs in HTML and JavaScript (as
identifiers and hooks); it is only in CSS that they prove troublesome.

### Nesting
To keep specificity low, try to avoid nesting in your Sass-files. The concept
 of nesting in Sass is very clever, and it easy to try to map the HTML
 DOM-structure in your Sass - just because you can. But the output often
 result in compiled CSS with selectors that are long and over specific. Try
 keeping your nesting level as shallow as possible.

```scss
// YEP
.mrx-mydiv {}
.mrx-mydiv__child {}
.mrx-mydiv__grandchild {...}

// NOPE
.mrx-mydiv {
    .mrx-mydiv__child {
        .mrx-mydiv__grandchild {
            ...
        }
    }
}
```

Compiled CSS:

```css
// YEP output with specificity = 1:
.mrx-mydiv__grandchild {...}

// NOPE output with specificity = 3:
.mrx-mydiv .mrx-mydiv__child .mrx-mydiv__grandchild {...}

```

Test your selectors with the tool
[Specificity Calculator](http://specificity.keegan.st/) to check specificity.

### Avoid using `!important`
It's only ok on helpers and utility styles you absolutely know will trump previous styles.

### Avoid styling elements by tagname
It will come back to haunt you. It's better to create a class. In some cases of
course, e.g. for setting base typographic styles, it's hard to avoid it. But keep
it tro a minimum, and make comments.

### Classes as hooks for CSS
it's important to keep the coupling between the actual HTML DOM-structure and
 the CSS as loose as possible. We often see developers referencing the actual
  HTML-tags in their CSS. The reasons are mostly related to keeping the HTML
  as clean as possible:

> … I don't want clutter my clean and semantic HTML with presentational
classes. This goes against the separation of concern between HTML and CSS.
— Frustrated developer

But the drawback is that the coupling between HTML and CSS is very tight.

```css
body > header:first-of-type > nav > ul > li > a > span {
    ...
}
```

What happens if we need to swap one tag for another because it gives more
semantic value, e.g. replace the `<span>` with the new `<time>`-element? We
have to rewrite our CSS.

Using classes as styling hooks is better to keep the coupling looser. The
class `.time` can be applied to either `<span class="mrx-time">` or `<time
class="mrx-time"></time>` without touching the CSS.

**NB** Semantics in HTML is meant for machines. This makes computers able to
understand the meaning of the HTML document. Adding presentational classes in
 HTML does not add or subtract semantic value seen from a computers point of
 view. But from a human perspective (yes, developers are human too...), these
 classes can add semantic value in the context of how something is presented:
  `<button class="mrx-btn--large">Click me!</button>`.

### Classes as hooks for JS
We often need to select elements in the DOM with JS. Instead of referencing
classes used for styling, it's often better to use dedicated classes as hooks
 for this purpose.

The convention for JS-hooks `.[namespace]-js-[hookname]`.

```html
<div class="mrx-mydiv mrx--is-closed">
    <p>Hello!</p>
</div>
<button class="mrx-btn mrx-btn--large mrx-js-mydiv-toggle">Say hello!</button>
```

In short, this example shows a closed div and a button. Presentational
styling can be something like this:

```scss
.mrx-mydiv {
    display: block;

    &.mrx-is-closed {
        display: none;
    }
}

.mrx-btn--large {
    padding: 42px;
}
```

Instead of referencing the styled class `mrx-btn--large` in your JS, use the
class `mrx-js-mydiv-toggle` as your hook:

```js
$('.mrx-js-mydiv-toggle').on('click', function () {
    $('.mrx-mydiv').toggle('mrx-is-closed');
});
```

## Architecture

### Config
Try to keep configuration within the global `/01-config`-folder. This includes
design-tokens, variables, sass-maps and other sass-settings for the whole project.

### Shame file
There is an interesting concept that has been made popular by
[Harry Roberts](http://csswizardry.com/),
[Dave Rupert](http://daverupert.com/) and
[Chris Coyier](http://css-tricks.com/) that consists of putting all the CSS
declarations, hacks and things we are not proud of in a shame file. This
file, dramatically titled `_shame.scss`, would be imported after any other
file, at the very end of the stylesheet.

```scss
/**
 * Nav specificity fix.
 *
 * Someone used an ID in the header code (`#header a {}`) which trumps the
 * nav selectors (`.site-nav a {}`). Use !important to override it until I
 * have time to refactor the header stuff.
 */
.site-nav a {
    color: #BADA55 !important;
}
```

We all know that, no matter how hard we may try, sometimes we do need to use
quick fixes, hacks and questionable techniques in our code. It happens, whether
we like to admit it or not.

The real problem, though, is that we rarely go back and tidy these things up.
They slip through the cracks, get ignored, go unnoticed, and stay for good.
This we do not have to do.

The idea of shame.scss is that you have a totally new file reserved just for
your hacky code. The code you have to write to get the release out on time,
but the code that makes you ashamed.

1. If it’s a hack, it goes in shame.scss.
2. Document all hacks fully:
    1. What part of the codebase does it relate to?
    2. Why was this needed?
    3. How does this fix it?
    4. How might you fix it properly, given more time?
3. Do not blame the developer; if they explained why they had to do it then
   their reasons are probably (hopefully) valid.
4. Try and clean shame.scss up when you have some down time.
    1. Even better, get a tech-debt story in which you can dedicate actual
      sprint time to it.

For more info please visit: [shame.css](https://csswizardry.com/2013/04/shame-css/).

## Responsive Web Design and Breakpoints

### Naming Breakpoints
Media queries should not be tied to specific devices. For instance, it's
definitely a bad idea to try targeting iPads or Blackberry phones specifically.

For the same reasons, breakpoints should not be named after devices but
something more general. Especially since some phones are now bigger than
tablets, some tablets bigger than some tiny screen computers, and so on…

In this project, we use a Sass library called
[Sass MQ](https://sass-mq.github.io/sass-mq/) to handle our media queries. The
different breakpoints are defined in the main `_conf_mq.scss`-file.

Please see [this page](/docs/guidelines/responsive) for further documentation on
media queries.

### Media Queries Usage
Not so long ago, there was quite a hot debate about where media queries
should be written: do they belong within selectors (as Sass allows it) or
strictly dissociated from them? Keeping them within the selector plays well
with the ideas of "components" and modularity.

```scss
.foo {
    color: red;

    @include mq($from: tab-s) {
        color: blue;
    }
}
```

Leading to the following CSS output:

```css
.foo {
    color: red;
}

@media (min-width: 321px) {
    .foo {
        color: blue;
    }
}
```

You might hear that this convention results in duplicated media queries in
the CSS output. That is definitely true. Although, tests have shown it doesn’t
matter once Gzip (or any equivalent) has done its thing:

> … we hashed out whether there were performance implications of combining vs
 scattering Media Queries and came to the conclusion that the difference,
 while ugly, is minimal at worst, essentially non-existent at best.
— [Sam Richards](https://twitter.com/snugug)

## Variables

### Color variables
When using a color more than once, store it in a variable with a meaningful
name representing the color.

```scss
$color-sass-pink: #c69;
```

Now you are free to use this variable wherever you want. However, if your
usage is strongly tied to a theme, I would advise against using the variable
as is. Instead, store it in another variable with a name explaining how it
should be used.

```scss
$color-main-theme: $color-sass-pink;
```

Doing this would prevent a theme change leading to something like `$color-sass-pink: blue`.

## Extend
The @extend directive has to be one of the features that made Sass so popular
 a couple of years ago. As a reminder, it makes it possible to tell Sass to
 style an element A exactly as though it also matched selector B. Needless to
  say this can end up being a valuable ally when writing modular CSS.

**However** I feel like I must warn you against this feature. As clever as it
 is, @extend still is a tricky concept that might do more harm than good,
 especially when poorly used. The thing is, when extending a selector, you
 have little to no way to answer these questions without having an in-depth
 knowledge of the whole codebase:

- where is my current selector going to be appended?
- am I likely to be causing undesired side-effects?
- how large is the CSS generated by this single extend?

For all you know, the result could range from doing nothing to causing
disastrous side-effects. Because of this, it's adviced to avoid the @extend
directive altogether. It might sound brutal, but at the end of
the day it can save you some headaches and troubles.

There are scenarios where extending selectors might be helpful and worthwhile
. Yet, always keep in mind those rules so you don’t get yourself into trouble:

- Use extend from within a module, not across different modules.
- Use extend on placeholders exclusively, not on actual selectors.
- Make sure the placeholder you extend is present as little as possible in
the stylesheet.

If you are going to use extend, let me also remind you that it does not play
well with @media blocks. As you may know, Sass is unable to extend an outer
selector from within a media query. When doing so, the compiler simply
crashes, telling you that you cannot do such a thing. Not great. Especially
since media queries are almost all we do know.

To sum up, **It's strongly advised against using the @extend directive**.

## Mixins
Mixins are one of the most used features from the whole Sass language. They
are the key to reusability and DRY components. And for good reason: mixins
allow authors to define styles that can be reused throughout the stylesheet
without needing to resort to non-semantic classes such as `.float-left`.

Still, the keyword is *simplicity*. Don't over-engineer or over think your
mixins. If a mixin ends up being longer than 20 lines or so, then it should
be either split into smaller chunks or completely revised.

The main rule of thumb is to limit the use of mixins without arguments, but
in some cases, like the [micro-clearfix hackfrom Nicolas Gallagher](http://nicolasgallagher.com/micro-clearfix-hack/),
an argument mixin is your weapon of choice.































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
