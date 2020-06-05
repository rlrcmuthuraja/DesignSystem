---
title: Forms
context:
    ingress: "Forms represent a document section that contains interactive
              controls that enables the user to submit information to a
              web server."
---

<div class="Prose__ingress">
    {{ ingress }}
</div>

<!-- Content starts here -->

## Input fields
How an `<input>` works varies considerably depending on the value of its type
attribute. If this attributes is not specified, the default type adopted is text.

Be aware that the many different `types` available in the specification have
various support, even in modern browsers. The look and feel can vary a lot,
since the browsers themselves often style the [Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM)
that is part of such form-controls. The good thing is that if a browser
lacks support, the fallback is quite graceful. It often just renders as
a regular text-field.

Below is an example of how `<input>`-elements of different `type`-attributes are
rendered. You should test this page in different browsers to see how they are rendered.

<form action="#" class="mrx-form mrx-container mrx-container--tab-m mrx-ui">
    <div class="mrx-form__block">
        <div class="mrx-row mrx-row--gutters mrx-row--top@all">
            <div class="mrx-col mrx-col--12@all mrx-col--6@tab-s mrx-col--4@tab-m">
                {% render '@field', { label: 'Input type: color', element: 'input', type: 'color', placeholder: 'Placeholder', size: 'large'} %}
            </div>
            <div class="mrx-col mrx-col--12@all mrx-col--6@tab-s mrx-col--4@tab-m">
                {% render '@field', { label: 'Input type: date', element: 'input', type: 'date', placeholder: 'Placeholder', size: 'large'} %}
            </div>
            <div class="mrx-col mrx-col--12@all mrx-col--6@tab-s mrx-col--4@tab-m">
                {% render '@field', { label: 'Input type: datetime-local', element: 'input', type: 'datetime-local', placeholder: 'Placeholder', size: 'large'} %}
            </div>
            <div class="mrx-col mrx-col--12@all mrx-col--6@tab-s mrx-col--4@tab-m">
                {% render '@field', { label: 'Input type: email', element: 'input', type: 'email', placeholder: 'Placeholder', size: 'large'} %}
            </div>
            <div class="mrx-col mrx-col--12@all mrx-col--6@tab-s mrx-col--4@tab-m">
                {% render '@field', { label: 'Input type: file', element: 'input', type: 'file', placeholder: 'Placeholder', size: 'large'} %}
            </div>
            <div class="mrx-col mrx-col--12@all mrx-col--6@tab-s mrx-col--4@tab-m">
                {% render '@field', { label: 'Input type: month', element: 'input', type: 'month', placeholder: 'Placeholder', size: 'large'} %}
            </div>
            <div class="mrx-col mrx-col--12@all mrx-col--6@tab-s mrx-col--4@tab-m">
                {% render '@field', { label: 'Input type: number', element: 'input', type: 'number', placeholder: 'Placeholder', size: 'large'} %}
            </div>
            <div class="mrx-col mrx-col--12@all mrx-col--6@tab-s mrx-col--4@tab-m">
                {% render '@field', { label: 'Input type: password', element: 'input', type: 'password', placeholder: 'Placeholder', size: 'large'} %}
            </div>
            <div class="mrx-col mrx-col--12@all mrx-col--6@tab-s mrx-col--4@tab-m">
                {% render '@field', { label: 'Input type: range', element: 'input', type: 'range', placeholder: 'Placeholder', size: 'large'} %}
            </div>
            <div class="mrx-col mrx-col--12@all mrx-col--6@tab-s mrx-col--4@tab-m">
                {% render '@field', { label: 'Input type: search', element: 'input', type: 'search', placeholder: 'Placeholder', size: 'large'} %}
            </div>
            <div class="mrx-col mrx-col--12@all mrx-col--6@tab-s mrx-col--4@tab-m">
                {% render '@field', { label: 'Input type: tel', element: 'input', type: 'tel', placeholder: 'Placeholder', size: 'large'} %}
            </div>
            <div class="mrx-col mrx-col--12@all mrx-col--6@tab-s mrx-col--4@tab-m">
                {% render '@field', { label: 'Input type: time', element: 'input', type: 'time', placeholder: 'Placeholder', size: 'large'} %}
            </div>
            <div class="mrx-col mrx-col--12@all mrx-col--6@tab-s mrx-col--4@tab-m">
                {% render '@field', { label: 'Input type: text', element: 'input', type: 'text', placeholder: 'Placeholder', size: 'large'} %}
            </div>
            <div class="mrx-col mrx-col--12@all mrx-col--6@tab-s mrx-col--4@tab-m">
                {% render '@field', { label: 'Input type: url', element: 'input', type: 'url', placeholder: 'Placeholder', size: 'large'} %}
            </div>
            <div class="mrx-col mrx-col--12@all mrx-col--6@tab-s mrx-col--4@tab-m">
                {% render '@field', { label: 'Input type: week', element: 'input', type: 'week', placeholder: 'Placeholder', size: 'large'} %}
            </div>
        </div>
    </div>
</form>

### Sizes
As with [buttons](/docs/guidelines/buttons), we provide three different sizes
for input fields. They all impact the height, font-size and padding of the field:

* `mrx-field--size-tiny`
* `mrx-field--size-base`
* `mrx-field--size-large`

<form action="#" class="mrx-form mrx-container mrx-container--tab-m mrx-ui">
    <div class="mrx-form__block">
        <div class="mrx-row mrx-row--top@all">
            <div class="mrx-col mrx-col--12@all mrx-col--4@tab-s">
                {% render '@field', { label: 'Input Label', element: 'input', type: 'text', placeholder: 'Tiny', size: 'tiny'} %}
            </div>
            <div class="mrx-col mrx-col--12@all mrx-col--4@tab-s">
                {% render '@field', { label: 'Input Label', element: 'input', type: 'text', placeholder: 'Base', size: 'base'} %}
            </div>
            <div class="mrx-col mrx-col--12@all mrx-col--4@tab-s">
                {% render '@field', { label: 'Input Label', element: 'input', type: 'text', placeholder: 'Large', size: 'large'} %}
            </div>
        </div>
    </div>
</form>

Remember to use elements of the same size if you put them next to each other
on a row. Especially when you use element as part of an [input group](/components/detail/input-group)s.

<div class="mrx-container mrx-container--tab-m mrx-ui">
    <ul class="mrx-dodont">
        <li class="mrx-dodont__item">
            ![alt text](/assets/img/doc/do-donts/do-inputgroup.png "Inputgroup - DO")
            <p class="mrx-dodont__copy">
                Use elements with same modifier for size in input groups.
            </p>
        </li>
        <li class="mrx-dodont__item mrx-dodont__item--dont">
            ![alt text](/assets/img/doc/do-donts/dont-inputgroup.png "Inputgroup - DO")
            <p class="mrx-dodont__copy">
                Use elements with different modifier for size in input groups.
            </p>
        </li>
    </ul>
</div>

## Select
The HTML `<select>` element represents a control that provides a menu of options.
Users make a choice among a list of mutually exclusive values. Users can choose
one and only one option. The `<select>`-element is often referred to as a
**dropdown list**, but should not be confused with similar patterns like
[dropdown menu](/components/detail/dropdown) or
[datalist](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist)
(aka "combo box").

### Sizes
As input fields, the same modifiers for sizes apply to `<select>`:

* `mrx-field--size-tiny`
* `mrx-field--size-base`
* `mrx-field--size-large`

<form action="#" class="mrx-form mrx-container mrx-container--tab-m mrx-ui">
    <div class="mrx-form__block">
        <div class="mrx-row mrx-row--top@all">
            <div class="mrx-col mrx-col--12@all mrx-col--4@tab-s">
                {% render '@select', { label: 'Select Label', options: [ { label: 'Tiny', value: 1 }, { label: 'Foo', value: 2 }, { label: 'Bar', value: 3 } ], size: 'tiny'} %}
            </div>
            <div class="mrx-col mrx-col--12@all mrx-col--4@tab-s">
                {% render '@select', { label: 'Select Label', options: [ { label: 'Base', value: 1 }, { label: 'Foo', value: 2 }, { label: 'Bar', value: 3 } ], size: 'base'} %}
            </div>
            <div class="mrx-col mrx-col--12@all mrx-col--4@tab-s">
                {% render '@select', { label: 'Select Label', options: [ { label: 'Large', value: 1 }, { label: 'Foo', value: 2 }, { label: 'Bar', value: 3 } ], size: 'large'} %}
            </div>
        </div>
    </div>
</form>

## Textarea

### Sizes
Once again, the same modifiers for size apply. But in this case, `<textarea>`s
are taller elements by nature. Still, the sizes adjust padding and font-size
according to the other elements using these size classes.

* `mrx-field--size-tiny`
* `mrx-field--size-base`
* `mrx-field--size-large`

<form action="#" class="mrx-form mrx-container mrx-container--tab-m mrx-ui">
    <div class="mrx-form__block">
        <div class="mrx-row mrx-row--top@all">
            <div class="mrx-col mrx-col--12@all mrx-col--4@tab-s">
                {% render '@textarea', { label: 'Textarea Label', rows: '5', placeholder: 'Tiny', size: 'tiny'} %}
            </div>
            <div class="mrx-col mrx-col--12@all mrx-col--4@tab-s">
                {% render '@textarea', { label: 'Textarea Label', rows: '5', placeholder: 'Base', size: 'base'} %}
            </div>
            <div class="mrx-col mrx-col--12@all mrx-col--4@tab-s">
                {% render '@textarea', { label: 'Textarea Label', rows: '5', placeholder: 'Large', size: 'large'} %}
            </div>
        </div>
    </div>
</form>

### Cols and Rows
According to [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)
we kan specify atributes for `cols` and `rows` on `<textarea>`:

**`cols`**:
We don't use `cols` as a way to control width. This is instead done by the surrounding
layout container. By default, a textarea will span 100% of it's parent container.

**`rows`**:
The number of visible text lines for the control. If no `rows`-attribute
is provided, we give the textarea a default height equal to 5 text-rows in
the given font-size (controlled by `size`):

<form action="#" class="mrx-form mrx-container mrx-container--tab-m mrx-ui">
    <div class="mrx-form__block">
        <div class="mrx-row mrx-row--top@all">
            <div class="mrx-col mrx-col--12@all">
                {% render '@textarea', { label: 'Textarea', value: 'Test', size: 'large'} %}
            </div>
        </div>
    </div>
</form>

```html
{% render '@textarea', { label: 'Textarea', value: 'Test', size: 'large'} %}
```

If you provide the `rows`-attribute, e.g. `rows="2"` we respect the
initial height of 2 text-rows in the textarea:

<form action="#" class="mrx-form mrx-container mrx-container--tab-m mrx-ui">
    <div class="mrx-form__block">
        <div class="mrx-row mrx-row--top@all">
            <div class="mrx-col mrx-col--12@all">
                {% render '@textarea', { label: 'Textarea', value: 'Test', size: 'large', rows: '2'} %}
            </div>
        </div>
    </div>
</form>

```html
{% render '@textarea', { label: 'Textarea', value: 'Test', size: 'large', rows: '2'} %}
```

As resizing should be enabled, all textareas can be resized by the user if their
browser supports this feature.

## Switches
A "switch" is a common term for form controls that control boolean values;
*true/false*, *on/off*, *yes/no* and so forth.

### Checkbox
A checkbox controls only the `value` of itself. This means, multiple checkboxes
within a switchgroup can be checked at the same time. They are not mutually exclusive.

{% render '@switch-group', { switches: [
    { context: { type: 'checkbox', label: 'Foo', name: 'group-name-1', checked: true } },
    { context: { type: 'checkbox', label: 'Bar', name: 'group-name-1' } },
    { context: { type: 'checkbox', label: 'Baz', name: 'group-name-1' } }
], classes: ['mrx-ui'] } %}

```html
{% render '@switch-group', { switches: [
    { context: { type: 'checkbox', label: 'Foo', name: 'group-name-1', checked: true } },
    { context: { type: 'checkbox', label: 'Bar', name: 'group-name-1' } },
    { context: { type: 'checkbox', label: 'Baz', name: 'group-name-1' } }
] } %}
```

### Radio Button
A radio button controls the value of related radio buttons within the same
switch group. Only one can be selected at any time.

{% render '@switch-group', { switches: [
    { context: { type: 'radio', label: 'Foo', name: 'group-name-2', checked: true } },
    { context: { type: 'radio', label: 'Bar', name: 'group-name-2' } },
    { context: { type: 'radio', label: 'Baz', name: 'group-name-2' } }
], classes: ['mrx-ui'] } %}

```html
{% render '@switch-group', { switches: [
    { context: { type: 'radio', label: 'Foo', name: 'group-name-2', checked: true } },
    { context: { type: 'radio', label: 'Bar', name: 'group-name-2' } },
    { context: { type: 'radio', label: 'Baz', name: 'group-name-2' } }
] } %}
```

### Toggle
A toggle is a checkbox or radio button, but styled as a slide button.
Once again, if you use checkboxes, multiple can be selected within the same group.
If radio buttons are used, selecting one will deselect the others in the group.

This example uses radio buttons:

{% render '@switch-group', { switches: [
    { context: { type: 'radio', label: 'Foo', name: 'group-name-3', toggle: true, checked: true } },
    { context: { type: 'radio', label: 'Bar', name: 'group-name-3', toggle: true } },
    { context: { type: 'radio', label: 'Baz', name: 'group-name-3', toggle: true } }
], classes: ['mrx-ui'] } %}

```html
{% render '@switch-group', { switches: [
    { context: { type: 'radio', label: 'Foo', name: 'group-name-3', toggle: true, checked: true } },
    { context: { type: 'radio', label: 'Bar', name: 'group-name-3', toggle: true } },
    { context: { type: 'radio', label: 'Baz', name: 'group-name-3', toggle: true } }
] } %}
```

## Fieldset
The HTML `<fieldset>` element is used to group several controls and labels
within a web form. Fieldsets are named using the `<legend>`-element.

Here is an example:

<!-- FIELDSET Component -->
<fieldset class="mrx-fieldset mrx-ui">
    <!-- LEGEND Component -->
    <legend class="mrx-legend mrx-legend--underline">Sign in</legend>
    <div class="mrx-fieldset__content">
        <div class="mrx-row mrx-row--gutters mrx-row--bottom@all">
            <div class="mrx-col mrx-col--12@all mrx-col--5@tab-s">
                {% render '@field', { label: 'Username', element: 'input', type: 'email', placeholder: 'Email', size: 'large'} %}
            </div>
            <div class="mrx-col mrx-col--12@all mrx-col--5@tab-s">
                {% render '@field', { label: 'Password', element: 'input', type: 'password', size: 'large'} %}
            </div>
            <div class="mrx-col mrx-col--12@all mrx-col--2@tab-s">
                {% render '@button', { text: 'Sign in', skin: 'primary', size: 'large', fluid: true } %}
            </div>
        </div>
    </div>
</fieldset>


## Form layout
### Switch Groups
If you have few options in a switch group, you can add the modifier-class
`mrx-switchgroup--inline` to your group. This will give the switches a
horizontal layout.

{% render '@switch-group', { switches: [
    { context: { type: 'radio', label: 'Yes', name: 'group-name-4', checked: true } },
    { context: { type: 'radio', label: 'No', name: 'group-name-4' } },
    { context: { type: 'radio', label: 'Don\'t know', name: 'group-name-4' } }
], inline: true, classes: ['mrx-ui'] } %}

```html
<div class="mrx-switchgroup mrx-switchgroup--inline">
    <!-- List of buttons -->
</div>
```

To optimize the visual scanning of options in a list of switches, we force groups of
swiches with more than *three* options to stack vertically. Even if you
specify the group to be inline.

{% render '@switch-group', { switches: [
    { context: { type: 'radio', label: 'Yes', name: 'group-name-5', checked: true } },
    { context: { type: 'radio', label: 'No', name: 'group-name-5' } },
    { context: { type: 'radio', label: 'Don\'t know', name: 'group-name-5' } },
    { context: { type: 'radio', label: 'Remind me later', name: 'group-name-5' } }
], inline: true, classes: ['mrx-ui'] } %}

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
