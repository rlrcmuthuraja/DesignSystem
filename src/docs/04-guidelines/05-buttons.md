---
title: Buttons
status: 'ready'
context:
    ingress: "Buttons are arguably a design system’s most important
              component. They offer a simple label in a defined area
              you can press. They are prime representations of a design
              system's basic attributes— *color*, *typography*, and *iconography*.
              "
---

<div class="Prose__ingress">
    {{ ingress }}
</div>

<!-- Content starts here -->

## Element
You can create buttons by using either of these elements:

- `<button>`
- `<a>`
- `<input type="button|reset|submit">`

{% render '@button-group',
    {
        ariaLabel: 'A button group',
        classes: ['mrx-ui'],
        buttons: [
            {
                context: {
                    text: 'I\'m actually a button',
                    skin: 'link',
                    size: 'large'
                }
            }
        ]
    }
%}

This is a regular HTML `<button>`-tag styled to look like a link, using
the `mrx-btn--skin-link`-modifier.

```html
{% render '@button',
    {
        text: 'I\'m actually a button',
        skin: 'link',
        size: 'large'
    }
%}
```

Similarly, we can take a regular HTML-link, and style it like av button. In
this example, a *primary* button using the `mrx-btn--skin-primary`-modifier.

{% render '@button-group',
    {
        ariaLabel: 'A button group',
        classes: ['mrx-ui'],
        buttons: [
            {
                context: {
                    text: 'I\'m actually a link',
                    skin: 'primary',
                    size: 'large',
                    href: 'http://www.example.com'
                }
            }
        ]
    }
%}

```html
{% render '@button',
    {
        text: 'I\'m actually a link',
        skin: 'primary',
        size: 'large',
        href: 'http://www.example.com'
    }
%}
```

You might wonder why we have a button-skin named `link`? Why not use a normal
link (`<a href="...">...</a>`) instead of a button (`<button>...</button>`)?

No doubt a valid question. But sometimes you'd like an actual button element
to *look* like a link, but the behavior might be to trigger an action
instead of pointing to another URL. Let's imagine two scenarios:

### Scenario 1: `<button>` as a link
The user performs an action that triggers a modal window. The modal
contains some information along with two actionable elements:

{% render '@button-group',
    {
        ariaLabel: 'A button group',
        classes: ['mrx-ui'],
        buttons: [
            {
                context: {
                    text: 'Confirm',
                    skin: 'secondary',
                    size: 'large'
                }
            },
            {
                context: {
                    text: 'Cancel',
                    skin: 'link',
                    size: 'large'
                }
            }
        ]
    }
%}

If you'd like to aid the user to make the desirable option "Confirm",
this button can be styled as a `primary` or `secondary` button. The
"Cancel"-button is preferably toned down in comparison, using the
`link`-style.

OK - again, why not use a normal link here?

The reason is simple. The "Cancel" operation just triggers an event to
close the modal window, not redirecting the user to another URL. So in
this case, using an actual `<a>...</a>`-element would be semantically wrong,
and misleading to the user.

### Scenario 2: `<a>` as a button
In a promotional element, you'd like the user to start a flow by clicking
a prominent call-to-action, a primary button:

{% render '@button',
    {
        text: 'Sign up Today!',
        skin: 'primary',
        size: 'large',
        href: 'http://www.example.com'
    }
%}

The start of this flow might be a different URL, so using an `<a>...</a>`-tag
with a `href="..."`-attribute would be the best choice. To make the
element more prominent, we still style it visually as a primary *button*.

### Scenario 3: `<input>` as a button
In HTML, you can also use `input`-elements as buttons. You then need to
specify a `type`-attribute. Available input types for buttons, are:

- `input type=button`
- `input type=reset`
- `input type=submit`

These input types are closely related to forms, and are usually wrapped
inside a `<form>`-tag. The [`<input type="reset"/>`](/components/detail/button--reset) is used to clean a form,
the [`<input type="submit"/>`](/components/detail/button--submit) is used to submit the data, and a regular
[`<input type="button"/>`](/components/detail/button--button) can be hooked to a custom event.

Due to the self-closing syntax for `<input/>`, buttons made this way cannot
contain icons. You can still apply the regular classes and modifiers that
apply to [buttons](/components/detail/button).

In modern web applications, the regular `<button>`-element is usually
sufficient.

## Skin
Skin controls the look and feel of the button regardless of element type(
`<a>`, `<button>`, or `<input>`).
This includes background-color, text-color, borders, shadows etc.
Skins do not impact layout features like spacing and dimensions.

Buttons come in three skins:

- `primary`
- `secondary`
- `flat`
- `link`

{% render '@button-group',
    {
        ariaLabel: 'A button group',
        classes: ['mrx-ui'],
        buttons: [
            {
                context: {
                    text: 'Primary Button',
                    skin: 'primary',
                    size: 'large'
                }
            },
            {
                context: {
                    text: 'Secondary Button',
                    skin: 'secondary',
                    size: 'large'
                }
            },
            {
                context: {
                    text: 'Flat Button',
                    skin: 'flat',
                    size: 'large'
                }
            },
            {
                context: {
                    text: 'Link Button',
                    skin: 'link',
                    size: 'large'
                }
            }
        ]
    }
%}

```html
{% render '@button',
    {
        text: 'Primary Button',
        skin: 'primary',
        size: 'large'
    }
%}

{% render '@button',
    {
        text: 'Secondary Button',
        skin: 'secondary',
        size: 'large'
    }
%}

{% render '@button',
    {
        text: 'Flat Button',
        skin: 'flat',
        size: 'large'
    }
%}

{% render '@button',
    {
        text: 'Link Button',
        skin: 'link',
        size: 'large'
    }
%}
```

## Size

Buttons come in three sizes:

- `tiny`
- `base`
- `large`

{% render '@button-group',
    {
        ariaLabel: 'A button group',
        classes: ['mrx-ui'],
        buttons: [
            {
                context: {
                    text: 'Tiny Button',
                    skin: 'secondary',
                    size: 'tiny'
                }
            },
            {
                context: {
                    text: 'Base Button',
                    skin: 'secondary',
                    size: 'base'
                }
            },
            {
                context: {
                    text: 'Large Button',
                    skin: 'secondary',
                    size: 'large'
                }
            }
        ]
    }
%}


```html
{% render '@button',
    {
        text: 'Tiny Button',
        skin: 'secondary',
        size: 'tiny'
    }
%}

{% render '@button',
    {
        text: 'Base Button',
        skin: 'secondary',
        size: 'base'
    }
%}

{% render '@button',
    {
        text: 'Large Button',
        skin: 'secondary',
        size: 'large'
    }
%}
```

## Disabled
Even if we provide a disabled state for buttons, we should be aware that
this might not be the best UX-pattern for users. A disabled button is usually
harder to notice due to low contrast. It's often better to not show the
button at all, if it is not clickable.

When the conditions are met, e.g. the user checks a checkbox that enables
the button, it's often better to just show it.

{% render '@button-group',
    {
        ariaLabel: 'A button group',
        classes: ['mrx-ui'],
        buttons: [
            {
                context: {
                    text: 'Primary Button',
                    skin: 'primary',
                    size: 'large',
                    disabled: true
                }
            },
            {
                context: {
                    text: 'Secondary Button',
                    skin: 'secondary',
                    size: 'large',
                    disabled: true
                }
            },
            {
                context: {
                    text: 'Flat Button',
                    skin: 'flat',
                    size: 'large',
                    disabled: true
                }
            },
            {
                context: {
                    text: 'Link Button',
                    skin: 'link',
                    size: 'large',
                    disabled: true
                }
            }
        ]
    }
%}

## Icon Buttons
Buttons can contain icons as well as text. Icons can appear *before* the text,
*after* the text, or with *hidden* text. Due to accessibility reasons, one
shouldn't make buttons *without* text. A better option is to
hide the text visually if you would a button  to display only the icon.

### Icon before text

{% render '@button',
    {
        text: 'Pin to dashboard',
        skin: 'secondary',
        size: 'large',
        classes: ['mrx-ui'],
        icon: {
            symbol: 'pin',
            size: 'base'
        }
    }
%}

Note that the *icon*, represented by the `<i class="mrx-icon...">...</i>`-tag comes
before the text `<span class="mrx-btn__txt">...</span>`.

```html
{% render '@button',
    {
        text: 'Pin to dashboard',
        skin: 'secondary',
        size: 'large',
        icon: {
            symbol: 'pin',
            size: 'base'
        }
    }
%}
```

### Icon after text

{% render '@button',
    {
        text: 'Continue',
        skin: 'secondary',
        size: 'large',
        classes: ['mrx-ui'],
        icon: {
            symbol: 'angle-right',
            size: 'base'
        },
        iconAfter: true
    }
%}

Note that the *text*, represented by the `<span class="mrx-btn__txt">...</span>`-tag comes
before the icon `<i class="mrx-icon...">...</i>`.

```html
{% render '@button',
    {
        text: 'Continue',
        skin: 'secondary',
        size: 'large',
        icon: {
            symbol: 'angle-right',
            size: 'base'
        },
        iconAfter: true
    }
%}
```

### Icon only - hidden text
Buttons should always have a text that makes them accessible for screen
 readers. Visually, the buttons may show only the icon.

{% render '@button',
    {
        text: 'This text is visually hidden, but still accessible through screen readers',
        skin: 'secondary',
        size: 'large',
        classes: ['mrx-ui'],
        icon: {
            symbol: 'attachment',
            size: 'moderate'
        },
        hideText: true
    }
%}

In this case, use the utility-class `mrx-is-vishidden` on the text inside the button:

```html
{% render '@button',
    {
        text: 'This text is visually hidden, but still accessible through screen readers',
        skin: 'secondary',
        size: 'large',
        icon: {
            symbol: 'attachment',
            size: 'moderate'
        },
        hideText: true
    }
%}
```

Since icons can have many different shapes, we provide the flexibility to
render a button in a specific size with an icon in a different size.

## State
A variant of the icon button, is a button with a state.
A button can be *processing*. This means it goes into a processing state
after the user has clicked it.

This will provide a *[loader](/components/detail/process)* as icon.

{% render '@button-group',
    {
        ariaLabel: 'A button group',
        classes: ['mrx-ui'],
        buttons: [
            {
                context: {
                    text: 'Saving',
                    skin: 'primary',
                    size: 'large',
                    state: 'processing',
                    process: {
                        size: 'base'
                    }
                }
            },
            {
                context: {
                    text: 'Loading',
                    skin: 'secondary',
                    size: 'large',
                    state: 'processing',
                    process: {
                        size: 'base'
                    }
                }
            },
            {
                context: {
                    text: 'Fetching data from the server',
                    skin: 'secondary',
                    size: 'large',
                    state: 'processing',
                    process: {
                        size: 'base'
                    },
                    hideText: true
                }
            },
            {
                context: {
                    text: 'Connecting',
                    skin: 'flat',
                    size: 'large',
                    state: 'processing',
                    process: {
                        size: 'base'
                    }
                }
            },
            {
                context: {
                    text: 'Please wait',
                    skin: 'link',
                    size: 'large',
                    state: 'processing',
                    process: {
                      size: 'base'
                    }
                }
            }
        ]
    }, true
%}

If the button is not clickable during processing, it's recommended to *disable*
 the button as well. This helps communicate that the button is performing
 an operation:

{% render '@button',
    {
        text: 'Please wait',
        skin: 'primary',
        size: 'large',
        state: 'processing',
        classes: ['mrx-ui'],
        process: {
            size: 'base'
        },
        disabled: true
    }
%}

## Fluid
If you like the button to fill the available width of the containing element,
use the `mrx-btn--fluid` class.

{% render '@button',
    {
        text: 'Fluid button',
        skin: 'primary',
        size: 'large',
        classes: ['mrx-ui'],
        fluid: true
    }
%}

## Button Groups
By wrapping buttons inside a button group, they become related - both visually
and semantically. A button group uses the attribute `role="group"` to tie
the buttons together.

{% render '@button-group',
    {
        ariaLabel: 'A button group',
        classes: ['mrx-ui'],
        buttons: [
            { context: { text: 'First', skin: 'secondary' } },
            { context: { text: 'Second', skin: 'secondary' } },
            { context: { text: 'Third', skin: 'secondary' } }
        ]
    }
%}

```html
{% render '@button-group',
    {
        ariaLabel: 'A button group',
        buttons: [
            { context: { text: 'First', skin: 'secondary' } },
            { context: { text: 'Second', skin: 'secondary' } },
            { context: { text: 'Third', skin: 'secondary' } }
        ]
    }
%}
```

You can also apply a "tight" fit to the group, removing space between the
buttons: `mrx-btn-group--fit-tight`.

{% render '@button-group',
    {
        ariaLabel: 'A button group',
        classes: ['mrx-ui'],
        fit: ['tight'],
        buttons: [
            { context: { text: 'First', skin: 'secondary' } },
            { context: { text: 'Second', skin: 'secondary' } },
            { context: { text: 'Third', skin: 'secondary' } }
        ]
    }
%}

Or make the group stretch the width of the containing: `mrx-btn-group--fit-stretch`.

{% render '@button-group',
    {
        ariaLabel: 'A button group',
        classes: ['mrx-ui'],
        fit: ['stretch'],
        buttons: [
            { context: { text: 'First', skin: 'secondary' } },
            { context: { text: 'Second', skin: 'secondary' } },
            { context: { text: 'Third', skin: 'secondary' } }
        ]
    }
%}

Or maybe both `mrx-btn-group--fit-tight` and `mrx-btn-group--fit-stretch` together:

{% render '@button-group',
    {
        ariaLabel: 'A button group',
        classes: ['mrx-ui'],
        fit: ['tight', 'stretch'],
        buttons: [
            { context: { text: 'First', skin: 'secondary' } },
            { context: { text: 'Second', skin: 'secondary' } },
            { context: { text: 'Third', skin: 'secondary' } }
        ]
    }
%}

## Button Toolbars
By wrapping and combining several button groups, you can create a
button toolbar.

{% render '@button-toolbar',
    {
        ariaLabel: 'A toolbar with 3 button groups',
        classes: ['mrx-ui'],
        groups: [
            {
                context: {
                    ariaLabel: 'First group',
                    fit: ['tight'],
                    buttons: [
                        { context: { text: 'Button 1A', skin: 'secondary' } },
                        { context: { text: 'Button 1B', skin: 'secondary' } }
                    ]
                }
            },
            {
                context: {
                    ariaLabel: 'Second group',
                    fit: ['tight'],
                    buttons: [
                        { context: { text: 'Button 2A', skin: 'secondary' } },
                        { context: { text: 'Button 2B', skin: 'secondary' } }
                    ]
                }
            },
            {
                context: {
                    ariaLabel: 'Third group',
                    fit: ['tight'],
                    buttons: [
                        { context: { text: 'Button 3A', skin: 'secondary' } },
                        { context: { text: 'Button 3B', skin: 'secondary' } },
                        { context: { text: 'Button 3B', skin: 'secondary' } }
                    ]
                }
            }
        ]
    }
%}

```html
{% render '@button-toolbar',
    {
        ariaLabel: 'A toolbar with 3 button groups',
        groups: [
            {
                context: {
                    ariaLabel: 'First group',
                    fit: ['tight'],
                    buttons: [
                        { context: { text: 'Button 1A', skin: 'secondary' } },
                        { context: { text: 'Button 1B', skin: 'secondary' } }
                    ]
                }
            },
            {
                context: {
                    ariaLabel: 'Second group',
                    fit: ['tight'],
                    buttons: [
                        { context: { text: 'Button 2A', skin: 'secondary' } },
                        { context: { text: 'Button 2B', skin: 'secondary' } }
                    ]
                }
            },
            {
                context: {
                    ariaLabel: 'Third group',
                    fit: ['tight'],
                    buttons: [
                        { context: { text: 'Button 3A', skin: 'secondary' } },
                        { context: { text: 'Button 3B', skin: 'secondary' } },
                        { context: { text: 'Button 3B', skin: 'secondary' } }
                    ]
                }
            }
        ]
    }
%}
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
