---
title: Muthu doc
status: "ready"
context:
    ingress: "Elevation suggests a conceptual hierarchy that makes use of box
              shadows to indicate visual hierarchy. It is up to the developer to
              maintain the actual Z-index and correspond this to the correct
              shadows"
    links: {
               title: "Resources",
               list: [
                   {
                       txt: "Muthu",
                       url: "https://www.w3.org/TR/WCAG20/",
                       description: "WCAG 2.0 covers a wide range of recommendations for making Web content more accessible"
                   }
               ]
           }
---
<div class="Prose__ingress">
    {{ ingress }}
</div>

<!-- Content starts here -->

## How to use Muthubox
isdj føgsjdfglk sdøfgkj sdlfjkg jsdfl gjsdlfgj sødlfkg sdlfkjg sdfjg sødl fjg dsøl
d øædsfkg øsdlkfg ølsdkfg  sdølfkg sdføkg sødkfg kgfdøsæ gsædøfkg sdfkg sdæfg ksdfg
sd fæøgsdfgkl

{% render '@muthubox', { title: 'example title', content: 'example text', classes: ['mrx-ui'] } %}

```html
{% render '@muthubox', { title: 'example title', content: 'example text', classes: ['mrx-ui'] } %}
```

```scss
.mrx-muthu {
    font-weight: bold;
}

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
