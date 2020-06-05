---
title: EditorConfig
status: 'ready'
context:
    ingress: "EditorConfig helps developers define and maintain consistent
             coding styles between different editors and IDEs."
    links: {
        title: "Resources",
        list: [
            {
                txt: "EditorConfig Homepage",
                url: "http://editorconfig.org/"
            },
            {
                txt: "Plugins",
                url: "http://editorconfig.org/#download",
                description: "Plugins for a huge amount of editors"
            },
            {
                txt: "EditorConfig on Github",
                url: "https://github.com/editorconfig"
            }
        ]
    }
---

<div class="Prose__ingress">
    {{ ingress }}
</div>

## What is EditorConfig?
The EditorConfig project consists of a file format for defining coding
styles and a collection of text editor plugins that enable editors to read
the file format and adhere to defined styles. EditorConfig files are easily
readable and they work nicely with version control systems.

EditorConfig is great because:

- It’s a simple tool that does one thing well with a clear syntax and a
flat learning curve. You install the appropriate plugin for your editor,
added a brief `.editorconfig` file to your project, and is ready to go
in a couple minutes.
- It just works. “Set it and forget it” and your project’s coding
standards are documented alongside your project’s code.
- EditorConfig is a great option for large, diverse teams.
Since the project’s coding styles are specified in a file with the
project’s codebase in a format enforced by an editor or IDE, team members
can stop fretting over whether or not they’re using the “correct”
indentation and instead get down to the business of writing code and
solving problems.

When opening a file, EditorConfig plugins look for a file named `.editorconfig`
in the directory of the opened file and in every parent directory.
A search for `.editorconfig` files will stop if the root filepath is
reached or an EditorConfig file with `root=true` is found.

The common practice is to put `.editorconfig` at the root of your project.

### Example file
Below is an example `.editorconfig` for some common file formats. On github
you can find many [examples of `.editorconfig`](https://github.com/editorconfig/editorconfig/wiki/Projects-Using-EditorConfig) in use.
Please see the [Wiki](https://github.com/editorconfig/editorconfig/wiki/EditorConfig-Properties)
for a complete list of properties you can use.
<!-- Content starts here -->

```
# Rules for all filetypes
root = true

[*]
end_of_line = crlf
insert_final_newline = true
charset = utf-8

# Rules for javascript, jsx files
[*.{js,jsx,json}]
indent_size = 4
tab_width = 4
indent_style = space
insert_final_newline = false
trim_trailing_whitespace = true

# Rules for nunjucks files
[*.{nunjucks,njk,nunj}]
insert_final_newline = false

# Rules for java files
[*.java]
indent_size = 4
tab_width = 4
indent_style = space
trim_trailing_whitespace = true

# Rules for properties files
[*.properties]
trim_trailing_whitespace = true
insert_final_newline = false
charset = latin1

# Rules for xml files
[*.xml]
indent_size = 4
indent_style = space
trim_trailing_whitespace = true
insert_final_newline = false

# Rules for markdown files
[*.md]
trim_trailing_whitespace = false
max_line_length = 80

# Rules for stylesheet files
[*.{css,scss,sass}]
indent_size = 4
indent_style = space
insert_final_newline = true
trim_trailing_whitespace = true

[*.yml]
indent_size = 2
indent_style = space

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
