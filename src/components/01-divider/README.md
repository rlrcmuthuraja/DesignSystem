## Dividers
Dividers can be used to separate groups of related content.

Dividers does not add any semantic value to you HTML. They funtion only as
visual dividers. To use semantic sectioning of content, use the `<hr>`-element
(horizontal rule):

```html
<p>Content foo</p>
<hr>
<p>Content bar</p>
```

The `<hr>` actually means "end of one section, start of another", which semantically
is kind of the same as using `<section></section>`-elements for structuring content.
`<hr>` is a bit more for thematic breaks, such as separating different topics within
a section of prose. You can use it anywhere you can use a `<p>`.

*Note: The `<hr>`-element is visually styled as the `<div class="mrx-divider mrx-divider--size-large"></div>`*.

**horizontal rule:**
<hr>

**divider:**
<div class="mrx-divider mrx-divider--size-large"></div>

### Modifiers
If you choose to use the visual `mrx-divider` component, you can also add modifers
for different amounts of spacing above and below (margins):

- `.mrx-divider--size-none`: **0px**
- `.mrx-divider--size-nano`: **2px**
- `.mrx-divider--size-tiny`: **4px**
- `.mrx-divider--size-mini`: **8px**
- `.mrx-divider--size-small`: **12px**
- `.mrx-divider--size-base`: **16px**
- `.mrx-divider--size-moderate`: **20px**
- `.mrx-divider--size-medium`: **24px**
- `.mrx-divider--size-large`: **32px**

### Dividers with text
Since the `mrx-divider` component actually is a `<div></div>`, it can contain content.
By adding text to it, you get a nice centered text on the divider-line:

{% render '@divider', { dividerText: 'Divider text', size: 'large' } %}

The code looks like this:

```html
{% render '@divider', { dividerText: 'Divider text', size: 'large' } %}
```

#### Example
<div class="mrx-row mrx-ui">
    <div class="mrx-col mrx-col--12@all mrx-col--3@tab-m">
        <div class="mrx-card mrx-card--skin-default mrx-p--large@all">
            <div class="mrx-row mrx-row--gutters">
                <div class="mrx-col mrx-col--12@all">
                    {% render '@field', { label: 'Username', element: 'input', type: 'text', placeholder: 'Email', size: 'large'} %}
                </div>
                <div class="mrx-col mrx-col--12@all">
                    {% render '@field', { label: 'Password', element: 'input', type: 'password', placeholder: 'Minimum 6 characters', size: 'large'} %}
                </div>
                <div class="mrx-col mrx-col--12@all">
                    {% render '@button', { text: 'Sign In', skin: 'primary', fluid: true,  size: 'large' } %}
                </div>
                <div class="mrx-col mrx-col--12@all">
                    {% render '@divider', { dividerText: 'OR', size: 'none' } %}
                </div>
                <div class="mrx-col mrx-col--12@all">
                    {% render '@button', { text: 'Creat New Account', skin: 'secondary', fluid: true,  size: 'large' } %}
                </div>
            </div>
        </div>
    </div>
</div>

Above is a simple example of how a divider is used to separate two section of a form.
The first section is fow users with an existing account, the last for new customers.
