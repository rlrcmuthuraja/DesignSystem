---
title: Accessibility
status: 'ready'
context:
    ingress: "The Muthuraja Design System strives to be inclusive and allow users
              with diverse abilities to access and use Muthuraja products to their
              fullest potensial."
    links: {
        title: "Resources",
        list: [
            {
                txt: "Web Content Accessibility Guidelines (WCAG) 2.0",
                url: "https://www.w3.org/TR/WCAG20/",
                description: "WCAG 2.0 covers a wide range of recommendations for making Web content more accessible"
            },
            {
                txt: "Contrast Grid from Eightshapes",
                url: "http://contrast-grid.eightshapes.com",
                description: "Test many foreground and background color combos for compliance with WCAG 2.0 minimum contrast"
            },
            {
                txt: "WebAIM Color Contrast Checker",
                url: "https://webaim.org/resources/contrastchecker/",
                description: "Test single values for foreground and background color for WCAG compliant contrast"
            },
            {
                txt: "WAVE Chrome/Firefox Extension",
                url: "https://wave.webaim.org/extension/",
                description: "The Web Accessibility Evaluation tool (WAVE) allows you to evaluate web content for accessibility issues directly within the browser."
            },
            {
                txt: "Using alt Text Properly",
                url: "https://a11yproject.com/posts/alt-text/"
            },
            {
                txt: "How-to: Skip Navigation links",
                url: "https://a11yproject.com/posts/skip-nav-links/"
            },
            {
                txt: "WW3C WCAG 2.0 - Name, Role, Value",
                url: "https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html"
            }
        ]
    }
---

<div class="Prose__ingress">
    {{ ingress }}
</div>

<!-- Content starts here   -->

## Necessary for some, good for everyone
From 1 July 2014, all new web sites and vending machines must comply with the
Universal Design of ICT Regulations. The requirements apply to both private and
public entities. The purpose is for everyone to have equal access to information
and services. The norwegian Agency for Public Management and eGovernment ([Difi](https://www.difi.no/fagomrader-og-tjenester/universell-utforming))
provides advice, guidance, and also supervises.

It's important to consider accessibility and universal design as a first class citizen
when making products.

<blockquote>
    <p>Accessibly is like a blueberry muffin—you can't push the berries in there afterward</p>
    <footer>
        — <cite>**Cordelia Dillon**</cite>
    </footer>
</blockquote>

To help understand the importance of accessibility, we recommend the following video:
<div class="mrx-ratio mrx-ratio--16:9 mrx-ui">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/NOVW356aYBw?rel=0&amp;showinfo=0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
</div>


## Web Accessibility beginner's guide
We aim to use components built with HTML and ARIA roles in accordance with the W3C
standards and best practices. By doing this, we can further ensure that assistive technologies
 can recognize and extract meaningful content to present this to users depending on such tools.

### Landmarks

- `<header role="banner"` - A region of the page that is site focused. Typically your global header
- `<nav role="navigation">` - Contains navigational links.
- `<main role="main">` - Focal content of document. Use only once "per page".
- `<article role="article">` - Represents an independent item of content. Use only once on outermost element of this type.
- `<aside role="complementary">` - Supporting section related to the main content even when separated.
- `<footer role="contentinfo">` - Contains information about the document (meta info, copyright, company info, etc).
- `<form role="search">` - Add a `search` role to your primary search ([how to implement](http://adrianroselli.com/2015/08/where-to-put-your-search-role.html)).

### Language Attribute
Declaring a language attribute on the html element enables a screen reader to
readout the text with correct pronunciation. Also add an attribute for reading
direction (either ltr = "left to right", or rtl = "right to left").

- `<html lang="en">` - Specify a language with the lang attribute on the <html> element.
- `<html dir="ltr">` - Specify a reading direction with the dir attribute on the <html> element

### Document Outline
Use semantic headings and structure.

### Links
- Ensure links have :focus state.
- Ensure links are recognizable (underlined).
- Provide a “Skip to main content” link.

### Images
- Use appropriate `alt` text.

### Javascript
- Try to provide alternatives for users who do not have Javascript enabled and
for environments where Javascript is unavailable.

### Forms
- Use logical layout. Tab order of the form follows a logical pattern.
- Associated label for all form controls (e.g. `input`, `select` etc.)
(e.g. `<label for="name">Name:</label><input id="name" type="text">`)
- Make sure `placeholder` attributes are **NOT** being used in place of label tags.
An exception to this rule would be smaller forms with one or two fields (eg. search or log in forms)
- Group related form elements with `fieldset` and describe the group with `legend`
Important for `<input type="radio"> and <input type="checkbox">`

### Media (Audio and Video)
Providing text alternatives makes the audio information accessible to people who
are deaf or hard of hearing. This also goes for search engines who are deaf and
hard of hearing as well.

- Provide text transcripts
- Synchronized subtitles for videos

### Color Contrast
- Test color contrast. Best done early in the process, by ensuring that the
foreground and background colors of your site have sufficient contrast you will
help make your site more readable for everyone.


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
