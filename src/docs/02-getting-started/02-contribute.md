---
title: Contribute
status: 'ready'
context:
    ingress: "Want to contribute to the design system? Setting it up for local development
    is quite easy. Just follow the instructions below."
---
<div class="Prose__ingress">
    {{ ingress }}
</div>

<!-- Content starts here -->

## Getting started
First, make sure you have [Node.js](https://nodejs.org/en/) installed, and
that node is available via terminal/cmd (command prompt).

1. Clone or download this repository to your machine.
2. Add a `.npmrc` file to the **root** of the repository. This file should contain
details about authentication towards the jFrog Artifactory (used for publishing).
2. Open a terminal/cmd, and navigate to the **root** of this project.
3. Run `npm install`. NPM will then download and install all dependencies
into `node_modules`. This may take a while, so grab a coffee ☺
4. After installing, type `gulp dev` to start the dev-server and open
[http://localhost:3000](http://localhost:3000) in your browser.

## Gulp tasks overview
The most important tasks are:

- `gulp compile` compiles source files.
- `gulp start` compiles source files and starts the local server on port 3000.
- `gulp build` compiles source files and builds a static version of the app to the folder `/www`.
- `gulp dev` compiles source files, starts the local server on port 3000,
and watches for changes in the sourcecode. Changes are reloaded live in the
browser.
- `gulp publish` bumps version number and publishes package to registry defined
 by `"publishConfig":` in `package.json`.

For other available tasks, please have a look at the `gulpfile.js`.

## Fractal config
In `fractal.js`, you'll find the configuration for the fractal instance.
This is used by gulp when it runs fractal-based tasks.

## Git Flow
We use Git Flow as our branching strategy. This gives us exellent command line help and output.
In addition we can recommend [Sourcetree](https://www.sourcetreeapp.com/),
an exellent gui client for git, with full Git Flow support.

Git Flow gives you great control over branches for master, develop, features, release,
hotfixes and more. Please read the [git flow cheatcheet](https://danielkummer.github.io/git-flow-cheatsheet/)
for more details.

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
