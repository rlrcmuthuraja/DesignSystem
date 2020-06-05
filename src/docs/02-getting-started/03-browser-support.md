---
title: Browser Support
status: 'ready'
context:
    ingress: "It is not practical to test every combination of browser,
              version and OS, as there are so many. Instead, we follow
              standard industry practice of testing the latest range of
              browsers, plus typically those, which make up the majority
              of our traffic."
    links: {
        title: "Resources",
        list: [
            {
                txt: "Do websites need to look exactly the same in every browser?",
                url: "http://dowebsitesneedtolookexactlythesameineverybrowser.com/"
            },
            {
                txt: "BrowserStack",
                url: "https://www.browserstack.com/",
                description: "Live, Web-Based Browser Testing"
            }
        ]
    }
---

<div class="Prose__ingress">
    {{ ingress }}
</div>

<!-- Content starts here -->

## Modern browser testing

In modern web design, we have accepted that the user will access our
products using a plethora of devices and user-agents. In such a
perspective, we also accept that the user experience will be different
based on the user's context.

<blockquote>
    <p>While some designers strive for cross-browser pixel perfection,
    proponents of fluid design do not think that layouts have to look
    identical across all platforms and screen resolutions.
    </p>
    <footer>
        — <cite>**The Smashing Book** (Chapter on the Art & Science of CSS Layouts)</cite>
    </footer>
</blockquote>

## Supported Browsers
We divide browsers into three categories: A-grade, B-grade, and C-grade
browsers.

- **A-grade**: These browsers should be actively tested on. Minor visual
differences may occur, but that is ok. Reported bugs _will be considered
fixed_.
- **B-grade**: Though not actively tested on, these browsers should work fine,
and bugs _will be considered fixed_ when reported. Visual differences may
occur, but that is usually ok.
- **C-grade**: Core functional support only. However, any issues that
cause functional issues _may be considered fixed_, such as an issue that
hides or makes it impossible to click a call to action button. Visual
differences will most likely occur, but that is usually ok.

### "A"-grade browsers
| Browser               | Version    | Operation System  | Device    |
| ----------------------| ---------- | -----------------:| ---------:|
| Google Chrome         | Latest     | Win/ Mac OS       | Desktop   |
| Google Chrome         | Latest     | Android           | Mobile    |
| Mozilla Firefox       | Latest     | Win               | Desktop   |
| MS Edge               | Latest     | Win 10            | Desktop   |
| MS Internet Explorer  | 11         | Win 7, 8.1, 10    | Desktop   |

### "B"-grade browsers
| Browser               | Version    | Operation System  | Device    |
| ----------------------| ---------- | -----------------:| ---------:|
| Google Chrome         | Previous   | Win/ Mac OS       | Desktop   |
| Google Chrome         | Previous   | Android           | Mobile    |
| Mozilla Firefox       | Previous   | Win               | Desktop   |
| MS Edge               | Previous   | Win 10            | Desktop   |
| Opera (Blink engine)  | Latest     | Win               | Desktop   |
| Safari                | Latest     | Mac OS            | Desktop   |
| Safari                | Latest     | iOS/iPhone/iPad   | Mobile    |

### "C"-grade browsers
| Browser               | Version    | Operation System  | Device    |
| ----------------------| ---------- | -----------------:| ---------:|
| MS Internet Explorer  | 10         | Win 7, 8          | Desktop   |
| Safari                | Previous   | Mac OS            | Desktop   |
| Safari                | Previous   | iOS/iPhone/iPad   | Mobile    |

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
