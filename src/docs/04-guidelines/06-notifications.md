---
title: Notifications
status: 'ready'
context:
    ingress: "Whether something goes wrong or just the way you wanted it to,
              your users will want to know. It’s really bad to show an uninformative
              message, but if you don't show a message at all, you can be sure
              that users will stop using your application."
---

<div class="Prose__ingress">
    {{ ingress }}
</div>

<!-- Content starts here -->

## Tone of voice
We provide "tones" for four common situations:

{% render '@notification', {tone: 'success', content: 'Success messages make it obvious to users that their interaction with your application was successful.', classes: ['mrx-ui']} %}
{% render '@notification', {tone: 'warning', content: 'Warning should appear when users are about to do something that is destructive or when the result of an action is unexpected, but isn\'t an error.', classes: ['mrx-ui']} %}
{% render '@notification', {tone: 'danger', content: 'Danger or error messages are used to inform users that something went wrong, and help them out.', classes: ['mrx-ui']} %}
{% render '@notification', {tone: 'info', content: 'Info messages let users know that something happened in the system that wasn\'t out of the ordinary or unexpected and usually isn\'t tied to user interaction like, \"Verify your e-mail to unlock all features\"', classes: ['mrx-ui']} %}

Available modifiers for tone are:

- `mrx-notification--success`
- `mrx-notification--warning`
- `mrx-notification--danger`
- `mrx-notification--info`

In addition we provide a neutral tone if no modifier for tone is applied:

{% render '@notification', {tone: 'neutral', content: 'Neutral text', classes: ['mrx-ui']} %}

The type-modifier is a class applied on the parent element:

```html
{% render '@notification', {tone: 'success', content: 'Well done! You deserve a raise!'} %}
```

## Types of notifications
### Block
By default, all notifications appear as *block* messages, as shown above. These are
great for giving the user contextual feedback regarding their interactions
with the application. E.g. *A message appears after the user has saved recent changes*.

### Banner
An alternative type of notifications is the *banner*. It should *always* be placed
above the header. The text in a banner is centered. Notifications used as banners
also appear more saturated in color.

{% render '@notification', {tone: 'success', type: 'banner',  content: 'We\'re completely operational, and all our systems are functioning perfectly.', classes: ['mrx-ui']} %}
{% render '@notification', {tone: 'warning', type: 'banner',  content: 'Our systems are experiencing connectivity problems. Slow responses may occur.', classes: ['mrx-ui']} %}
{% render '@notification', {tone: 'danger', type: 'banner',  content: 'Oh no! It seems we lost connection with the server.', classes: ['mrx-ui']} %}
{% render '@notification', {tone: 'info', type: 'banner',  content: 'New VR-experience has arrived. Try it out!', classes: ['mrx-ui']} %}

To make a notification a banner, add the class `mrx-notification--banner`
to the parent block:

```html
{% render '@notification', {tone: 'warning', type: 'banner', content: 'Our systems are experiencing connectivity problems. Slow responses may occur'} %}
```

#### Guidelines using banners
- Use a notification banner when a message has service-wide implications.
- Never use a banner for messages specific to one page. Instead, use a
default block notification below the page title.
- Never stack two or more notification banners adjacent to one another.
- Display an “x” button to dismiss notification banners, such as
notification of uptime/downtime in the service.
- Avoid using an “x” button for messages that are promoting important
changes in design or experience.

#### Editorial Tips for banners
- Limit banner messages to no more than 100 characters.
- Use friendly conversational language.
- Avoid using language that sounds like a robot or computer speaking.
- Avoid content such as lists or long form text that wraps a banner message
in wide viewports.

### Inline
The last type of notification is very similar to the *block*-type. It uses slightly
less padding and smaller text. This type is perfect for micro-copy and contextual
feedback in for example a form-context.

{% render '@notification', {tone: 'success', type: 'inline',  content: 'Email is valid', classes: ['mrx-ui']} %}
{% render '@notification', {tone: 'warning', type: 'inline',  content: 'You have unsaved changes', classes: ['mrx-ui']} %}
{% render '@notification', {tone: 'danger', type: 'inline',  content: 'Password is too short', classes: ['mrx-ui']} %}
{% render '@notification', {tone: 'info', type: 'inline',  content: 'Save, and come back later?', classes: ['mrx-ui']} %}

## Notifications with icon
Icons help convey the message faster. A check mark (tick) usually means that
something was done successfully. Combining colors and icons can even help users
that don't speak the language, or users with disabilities, comprehend what your app is
trying to tell them.

{% render '@notification', {tone: 'info', title: false, content: 'Notification block with icon', icon: { symbol: 'info' }, classes: ['mrx-ui']}, true %}
{% render '@notification', {tone: 'warning', title: false, content: 'Notification block with icon', icon: { symbol: 'warning' }, classes: ['mrx-ui']}, true %}
{% render '@notification', {tone: 'danger', title: false, content: 'Notification block with icon', icon: { symbol: 'danger' }, classes: ['mrx-ui']}, true %}
{% render '@notification', {tone: 'success', title: false, content: 'Notification block with icon', icon: { symbol: 'success' }, classes: ['mrx-ui']}, true %}

## Notifications with title
{% render '@notification', {tone: 'info', title: 'Notification Block Title', content: 'Notification text', classes: ['mrx-ui']}, true %}
{% render '@notification', {tone: 'info', type: 'banner', title: 'Notification Banner Title', content: 'Notification text', classes: ['mrx-ui']}, true %}

## Notifications with title & icon
{% render '@notification', {tone: 'warning', title: 'Notification Block Title', content: 'Notification with icon', icon: { symbol: 'warning' }, classes: ['mrx-ui']}, true %}
{% render '@notification', {tone: 'warning', type: 'banner', title: 'Notification Banner Title', content: 'Notification with icon', icon: { symbol: 'warning' }, classes: ['mrx-ui']}, true %}

## Dismissable
{% render '@notification', {tone: 'success', title: 'Dismissable Notfication', content: 'I can be dismissed', icon: { symbol: 'info' }, dismissable: true, classes: ['mrx-ui']}, true %}

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
