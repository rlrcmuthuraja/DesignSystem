---
title: Grid System
status: 'ready'
context:
    ingress: "A grid provides a structure of rows and columns for aligning
              content. Grids are useful because they help create a familiar
              and easily navigable structure for content."
    links: {
          title: "Resources",
          list: [
              {
                  txt: "Susy: Web Layout Toolkit",
                  url: "http://oddbird.net/susy/",
                  description: "Susy is a lightweight grid-layout engine for Sass"
              }
          ]
    }
---

<div class="Prose__ingress">
    {{ ingress }}
</div>

<!-- Content starts here -->

## 12 Column Grid
We use a 12 column grid for page-layout. It is currently
based on flexbox which creates a flexible foundation for handling
 column-based layout. We use [Susy](http://oddbird.net/susy/) as our
 math engine for grid-calculations. The grid-definition can be found in
 `_conf_susy.scss`.

## Responsive
Modifier-classes for responsive behavior enables you to specify column
sizes at different viewport widths. Please note that these modifiers
correspond to the [breakpoints](/docs/guidelines/responsive) we have defined.

<div class="mrx-row mrx-row--gutters mrx-ui">
    <div class="mrx-col mrx-col--12@all mrx-col--6@tab-s">
        <div class="box mrx-p--small@all">Column</div>
    </div>
    <div class="mrx-col mrx-col--12@all mrx-col--6@tab-s">
        <div class="box mrx-p--small@all">Column</div>
    </div>
    <div class="mrx-col mrx-col--12@all mrx-col--4@tab-l">
        <div class="box mrx-p--small@all">Column</div>
    </div>
    <div class="mrx-col mrx-col--12@all mrx-col--6@tab-m mrx-col--4@tab-l">
        <div class="box mrx-p--small@all">Column</div>
    </div>
    <div class="mrx-col mrx-col--12@all mrx-col--6@tab-m mrx-col--4@tab-l">
        <div class="box mrx-p--small@all">Column</div>
    </div>
    <div class="mrx-col mrx-col--4@all">
        <div class="box mrx-p--small@all">Column</div>
    </div>
    <div class="mrx-col mrx-col--8@all">
        <div class="box mrx-p--small@all">Column</div>
    </div>
    <div class="mrx-col mrx-col--7@all">
        <div class="box mrx-p--small@all">Column</div>
    </div>
    <div class="mrx-col mrx-col--5@all">
        <div class="box mrx-p--small@all">Column</div>
    </div>
</div>

## Gutters
To handle gutters, we use the `mrx-row`-element. By adding modifiers to this,
we can create grids with/without gutters, or even gutters only in one direction.

In addition to the base class `mrx-row`, add modifiers for:

- `mrx-row--gutters`: standard gutters both horizontally an vertically.
- `mrx-row--gutters-v`: standard gutters vertically.
- `mrx-row--gutters-h`: standard gutters horizontally.

### Gutters: none
**`mrx-row`**
<div class="mrx-row mrx-ui">
    <div class="mrx-col mrx-col--12@all mrx-col--4@tab-l">
        <div class="box mrx-p--small@all">Column</div>
    </div>
    <div class="mrx-col mrx-col--12@all mrx-col--4@tab-l">
        <div class="box mrx-p--small@all">Column</div>
    </div>
    <div class="mrx-col mrx-col--12@all mrx-col--4@tab-l">
        <div class="box mrx-p--small@all">Column</div>
    </div>
    <div class="mrx-col mrx-col--12@all mrx-col--4@tab-l">
        <div class="box mrx-p--small@all">Column</div>
    </div>
    <div class="mrx-col mrx-col--12@all mrx-col--4@tab-l">
        <div class="box mrx-p--small@all">Column</div>
    </div>
    <div class="mrx-col mrx-col--12@all mrx-col--4@tab-l">
        <div class="box mrx-p--small@all">Column</div>
    </div>
</div>

```html
<div class="mrx-row">
    <div class="mrx-col mrx-col--12@all mrx-col--4@tab-l">
        <div class="box mrx-p--small@all">Column</div>
    </div>
    ...
    ..
</div>
```

### Gutters: horizontally + vertically
**`mrx-row--gutters`**
<div class="mrx-row mrx-row--gutters mrx-ui">
    <div class="mrx-col mrx-col--12@all mrx-col--4@tab-l">
        <div class="box mrx-p--small@all">Column</div>
    </div>
    <div class="mrx-col mrx-col--12@all mrx-col--4@tab-l">
        <div class="box mrx-p--small@all">Column</div>
    </div>
    <div class="mrx-col mrx-col--12@all mrx-col--4@tab-l">
        <div class="box mrx-p--small@all">Column</div>
    </div>
    <div class="mrx-col mrx-col--12@all mrx-col--4@tab-l">
        <div class="box mrx-p--small@all">Column</div>
    </div>
    <div class="mrx-col mrx-col--12@all mrx-col--4@tab-l">
        <div class="box mrx-p--small@all">Column</div>
    </div>
    <div class="mrx-col mrx-col--12@all mrx-col--4@tab-l">
        <div class="box mrx-p--small@all">Column</div>
    </div>
</div>

```html
<div class="mrx-row mrx-row--gutters">
    <div class="mrx-col mrx-col--12@all mrx-col--4@tab-l">
        <div class="box mrx-p--small@all">Column</div>
    </div>
    ...
    ..
</div>
```

### Gutters: horizontally
**`mrx-row--gutters-h`**
<div class="mrx-row mrx-row--gutters-h mrx-ui">
    <div class="mrx-col mrx-col--12@all mrx-col--4@tab-l">
        <div class="box mrx-p--small@all">Column</div>
    </div>
    <div class="mrx-col mrx-col--12@all mrx-col--4@tab-l">
        <div class="box mrx-p--small@all">Column</div>
    </div>
    <div class="mrx-col mrx-col--12@all mrx-col--4@tab-l">
        <div class="box mrx-p--small@all">Column</div>
    </div>
    <div class="mrx-col mrx-col--12@all mrx-col--4@tab-l">
        <div class="box mrx-p--small@all">Column</div>
    </div>
    <div class="mrx-col mrx-col--12@all mrx-col--4@tab-l">
        <div class="box mrx-p--small@all">Column</div>
    </div>
    <div class="mrx-col mrx-col--12@all mrx-col--4@tab-l">
        <div class="box mrx-p--small@all">Column</div>
    </div>
</div>

```html
<div class="mrx-row mrx-row--gutters-h">
    <div class="mrx-col mrx-col--12@all mrx-col--4@tab-l">
        <div class="box mrx-p--small@all">Column</div>
    </div>
    ...
    ..
</div>
```

### Gutters: vertically
**`mrx-row--gutters-v`**
<div class="mrx-row mrx-row--gutters-v mrx-ui">
    <div class="mrx-col mrx-col--12@all mrx-col--4@tab-l">
        <div class="box mrx-p--small@all">Column</div>
    </div>
    <div class="mrx-col mrx-col--12@all mrx-col--4@tab-l">
        <div class="box mrx-p--small@all">Column</div>
    </div>
    <div class="mrx-col mrx-col--12@all mrx-col--4@tab-l">
        <div class="box mrx-p--small@all">Column</div>
    </div>
    <div class="mrx-col mrx-col--12@all mrx-col--4@tab-l">
        <div class="box mrx-p--small@all">Column</div>
    </div>
    <div class="mrx-col mrx-col--12@all mrx-col--4@tab-l">
        <div class="box mrx-p--small@all">Column</div>
    </div>
    <div class="mrx-col mrx-col--12@all mrx-col--4@tab-l">
        <div class="box mrx-p--small@all">Column</div>
    </div>
</div>

```html
<div class="mrx-row mrx-row--gutters-v">
    <div class="mrx-col mrx-col--12@all mrx-col--4@tab-l">
        <div class="box mrx-p--small@all">Column</div>
    </div>
    ...
    ..
</div>
```

## Syntax
The convention for grid classes can be a bit overwhelming at first, but you'll
see that in includes some syntactical sugar that makes it quite logical.

The convention is: `[namespace]-col--[columns]@[scope]`.

Here is an example:

```html
<div class="mrx-row mrx-row--gutters">
    <div class="mrx-col mrx-col--12@all mrx-col--6@mob-m mrx-col--4@tab-m mrx-col--3@ltp-s">
        <div class="box mrx-p--small@all">Responsive</div>
    </div>
</div>
```

and it looks like this (try resizing your browser):

<div class="mrx-row mrx-row--gutters mrx-ui">
    <div class="mrx-col mrx-col--12@all mrx-col--6@mob-m mrx-col--4@tab-m mrx-col--3@ltp-s">
        <div class="box mrx-p--small@all">Responsive</div>
    </div>
</div>

The example above can be read like: "This column should be...":

- `mrx-col--12@all` ...*12 of 12* columns wide (100%) *at* all screen sizes, but...
- `mrx-col--6@mob-m` ...*6 of 12* columns wide (50%) *at* screens > medium mobile, but...
- `mrx-col--4@tab-m` ...*4 of 12* columns wide (33%) *at* screens > medium tablet, but...
- `mrx-col--3@ltp-s` ...*3 of 12* columns wide (25%) *at* screens > small laptop

## Fluid
Grids uses precentage-based values to make fluid widths. Gutters are handled
using static values for padding (gutters inside). This way we can mix fluid
columns with static gutters. Each column uses split-gutters. This means
the padding is equal to a half gutter.

<div class="mrx-row mrx-row--gutters mrx-ui">
    <div class="mrx-col mrx-col--1@all">
        <div class="box mrx-p--small@all">1</div>
    </div>
    <div class="mrx-col mrx-col--11@all">
        <div class="box mrx-p--small@all">11</div>
    </div>
    <div class="mrx-col mrx-col--2@all">
        <div class="box mrx-p--small@all">2</div>
    </div>
    <div class="mrx-col mrx-col--10@all">
        <div class="box mrx-p--small@all">10</div>
    </div>
    <div class="mrx-col mrx-col--3@all">
        <div class="box mrx-p--small@all">3</div>
    </div>
    <div class="mrx-col mrx-col--9@all">
        <div class="box mrx-p--small@all">9</div>
    </div>
    <div class="mrx-col mrx-col--4@all">
        <div class="box mrx-p--small@all">4</div>
    </div>
    <div class="mrx-col mrx-col--8@all">
        <div class="box mrx-p--small@all">8</div>
    </div>
    <div class="mrx-col mrx-col--5@all">
        <div class="box mrx-p--small@all">5</div>
    </div>
    <div class="mrx-col mrx-col--7@all">
        <div class="box mrx-p--small@all">7</div>
    </div>
    <div class="mrx-col mrx-col--6@all">
        <div class="box mrx-p--small@all">6</div>
    </div>
    <div class="mrx-col mrx-col--6@all">
        <div class="box mrx-p--small@all">6</div>
    </div>
</div>

## Simple Syntax
Grids are built of three things: *row*, *column*, and *content*. This way
the columns in a grid can be thought of as "buckets" for content, e.g.
a component, widget or module.
```html
<!-- ROW -->
<div class="mrx-row mrx-row--gutters">
    <!-- COLUMN -->
    <div class="mrx-col mrx-col--12@all">
        <!-- YOUR CONTENT -->
        <div class="box mrx-p--small@all">Content</div>
    </div>
</div>
```

## Auto Width
If you don't include modifiers for width (using the `--` notation), the
grid will auto-fit the width of the columns to fit a row. Here we just
have one column, but without modifiers for width. It default "grows" to
fill the available space.

<div class="mrx-row mrx-row--gutters mrx-ui">
    <div class="mrx-col">
        <div class="box mrx-p--small@all">I'm 100%</div>
    </div>
</div>

```html
<div class="mrx-row mrx-row--gutters">
    <div class="mrx-col">
        <div class="box mrx-p--small@all">I'm 100%</div>
    </div>
</div>
```

Here we have two columns, also without modifiers for width. They share
the available space, each becoming 50% wide.

<div class="mrx-row mrx-row--gutters mrx-ui">
    <div class="mrx-col">
        <div class="box mrx-p--small@all">I'm 50%</div>
    </div>
    <div class="mrx-col">
        <div class="box mrx-p--small@all">I'm 50%</div>
    </div>
</div>

```html
<div class="mrx-row mrx-row--gutters">
    <div class="mrx-col">
        <div class="box mrx-p--small@all">I'm 50%</div>
    </div>
    <div class="mrx-col">
        <div class="box mrx-p--small@all">I'm 50%</div>
    </div>
</div>
```

## Nested Grids
Yes! Grids *can* be nested. Just remember to use the modifier `mrx-row--gutters`
together with the base class `mrx--row` on the parent wrapping your inner columns `mrx-col`.
Double gutters are removed due to the the negative margins applied with `mrx-row--gutters`.
But really consider *if you need* nested grids. The HTML structure can quickly become cumbersome
and hard to manage.

<blockquote>
    <p>Your scientists were so preoccupied with whether or not they could,
       they didn’t stop to think if they should.
    </p>
    <footer>
        — <cite>**Ian Malcom** (Jurassic Park)</cite>
    </footer>
</blockquote>

<div class="mrx-row mrx-row--gutters mrx-ui">
    <div class="mrx-col">
        <div class="box mrx-py--small@all">Parent
            <div class="mrx-row mrx-row--gutters">
                <div class="mrx-col mrx-col--12@all mrx-col--6@tab-m">
                    <div class="box mrx-mrx-py--small@all">Child
                        <div class="mrx-row mrx-row--gutters">
                            <div class="mrx-col mrx-col--12@all mrx-col--4@mob-m">
                                <div class="box mrx-py--small@all">Grandchild</div>
                            </div>
                            <div class="mrx-col mrx-col--12@all mrx-col--4@mob-m">
                                <div class="box mrx-py--small@all">Grandchild</div>
                            </div>
                            <div class="mrx-col mrx-col--12@all mrx-col--4@mob-m">
                                <div class="box mrx-py--small@all">Grandchild</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mrx-col mrx-col--12@all mrx-col--6@tab-m">
                    <div class="box mrx-py--small@all">Child
                        <div class="mrx-row mrx-row--gutters">
                            <div class="mrx-col mrx-col--12@all">
                                <div class="box mrx-py--small@all">Grandchild
                                    <div class="mrx-row mrx-row--gutters">
                                        <div class="mrx-col mrx-col--12@all mrx-col--6@mob-m">
                                            <div class="box mrx-py--small@all">Great Grandchild</div>
                                        </div>
                                        <div class="mrx-col mrx-col--12@all mrx-col--6@mob-m">
                                            <div class="box mrx-py--small@all">Great Grandchild</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

## Alignment
Add classes to rows to align it's children to the start, center, end, top,
middle or bottom. These classes are also responsive, so the alignment can
change on different viewports.

### Horizontal alignment

**`--start`**

<div class="mrx-row mrx-ui">
    <div class="mrx-col">
        <div class="box mrx-p--small@all">
            <div class="mrx-row mrx-row--gutters-h mrx-row--start@all">
                <div class="mrx-col mrx-col--6@all">
                    <div class="box mrx-p--small@all">
                        Box
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

```html
<div class="mrx-row mrx-row--gutters-h mrx-row--start@all">
    <div class="mrx-col mrx-col--6@all">
        <div class="box mrx-p--small@all">
            Box
        </div>
    </div>
</div>
```

**`--center`**

<div class="mrx-row mrx-ui">
    <div class="mrx-col">
        <div class="box mrx-p--small@all">
            <div class="mrx-row mrx-row--gutters-h mrx-row--center@all">
                <div class="mrx-col mrx-col--6@all">
                    <div class="box mrx-p--small@all">
                        Box
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


```html
<div class="mrx-row mrx-row--gutters-h mrx-row--center@all">
    <div class="mrx-col mrx-col--6@all">
        <div class="box mrx-p--small@all">
            Box
        </div>
    </div>
</div>
```

**`--end`**

<div class="mrx-row mrx-ui">
    <div class="mrx-col">
        <div class="box mrx-p--small@all">
            <div class="mrx-row mrx-row--gutters-h mrx-row--end@all">
                <div class="mrx-col mrx-col--6@all">
                    <div class="box mrx-p--small@all">
                        Box
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

```html
<div class="mrx-row mrx-row--gutters-h mrx-row--end@all">
    <div class="mrx-col mrx-col--6@all">
        <div class="box mrx-p--small@all">
            Box
        </div>
    </div>
</div>
```

#### Example: responsive horizontal alignment
Here is an example of achieving different alignments on different viewport
sizes. All modifier classes corresponds to the defined breakpoints.

<div class="mrx-row mrx-ui">
    <div class="mrx-col">
        <div class="box mrx-p--small@all">
            <div class="mrx-row mrx-row--gutters-h mrx-row--left@all mrx-row--end@tab-s mrx-row--center@ltp-s">
                <div class="mrx-col mrx-col--4@all">
                    <div class="box mrx-p--small@all">
                        Responsive alignment
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

```html
<div class="mrx-row mrx-row--gutters-h mrx-row--gutters mrx-row--left@all mrx-row--end@tab-s mrx-row--center@ltp-s">
    <div class="mrx-col mrx-col--4@all">
        <div class="box mrx-p--small@all">
            Responsive alignment
        </div>
    </div>
</div>
```

### Vertical alignment

**`--top`**

<div class="mrx-row mrx-ui">
    <div class="mrx-col">
        <div class="box mrx-p--small@all">
            <div class="mrx-row mrx-row--gutters-h mrx-row--top@all">
                <div class="mrx-col mrx-col--6@all">
                    <div class="box mrx-p--small@all">
                        Long text Long text Long text Long text Long text
                        Long text Long text Long text Long text Long text
                        Long text Long text Long text Long text Long text
                        Long text Long text Long text Long text Long text
                        Long text Long text Long text Long text Long text
                        Long text Long text Long text Long text Long text
                        Long text Long text Long text Long text Long text
                        Long text Long text Long text Long text Long text
                        Long text Long text Long text Long text Long text
                    </div>
                </div>
                <div class="mrx-col mrx-col--6@all">
                    <div class="box mrx-p--small@all">
                        Short text
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

```html
<div class="mrx-row mrx-row--gutters-h mrx-row--top@all">
    <div class="mrx-col mrx-col--6@all">
        <div class="box mrx-p--small@all">
            Long text Long text...
        </div>
    </div>
    <div class="mrx-col mrx-col--6@all">
        <div class="box mrx-p--small@all">
            Short text
        </div>
    </div>
</div>
```

**`--middle`**

<div class="mrx-row mrx-ui">
    <div class="mrx-col">
        <div class="box mrx-p--small@all">
            <div class="mrx-row mrx-row--gutters-h mrx-row--middle@all">
                <div class="mrx-col mrx-col--6@all">
                    <div class="box mrx-p--small@all">
                        Long text Long text Long text Long text Long text
                        Long text Long text Long text Long text Long text
                        Long text Long text Long text Long text Long text
                        Long text Long text Long text Long text Long text
                        Long text Long text Long text Long text Long text
                        Long text Long text Long text Long text Long text
                        Long text Long text Long text Long text Long text
                        Long text Long text Long text Long text Long text
                        Long text Long text Long text Long text Long text
                    </div>
                </div>
                <div class="mrx-col mrx-col--6@all">
                    <div class="box mrx-p--small@all">
                        Short text
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

```html
<div class="mrx-row mrx-row--gutters-h mrx-row--middle@all">
    <div class="mrx-col mrx-col--6@all">
        <div class="box mrx-p--small@all">
            Long text Long text...
        </div>
    </div>
    <div class="mrx-col mrx-col--6@all">
        <div class="box mrx-p--small@all">
            Short text
        </div>
    </div>
</div>
```

**`--bottom`**

<div class="mrx-row mrx-ui">
    <div class="mrx-col">
        <div class="box mrx-p--small@all">
            <div class="mrx-row mrx-row--gutters-h mrx-row--bottom@all">
                <div class="mrx-col mrx-col--6@all">
                    <div class="box mrx-p--small@all">
                        Long text Long text Long text Long text Long text
                        Long text Long text Long text Long text Long text
                        Long text Long text Long text Long text Long text
                        Long text Long text Long text Long text Long text
                        Long text Long text Long text Long text Long text
                        Long text Long text Long text Long text Long text
                        Long text Long text Long text Long text Long text
                        Long text Long text Long text Long text Long text
                        Long text Long text Long text Long text Long text
                    </div>
                </div>
                <div class="mrx-col mrx-col--6@all">
                    <div class="box mrx-p--small@all">
                        Short text
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

```html
<div class="mrx-row mrx-row--gutters-h mrx-row--bottom@all">
    <div class="mrx-col mrx-col--6@all">
        <div class="box mrx-p--small@all">
            Long text Long text...
        </div>
    </div>
    <div class="mrx-col mrx-col--6@all">
        <div class="box mrx-p--small@all">
            Short text
        </div>
    </div>
</div>
```

#### Example: responsive vertical alignment
In this example, focus on the second box containing the short text. Try
resizing your browser. You'll notice that it changes position based on the
viewport size;

- Middle alignment on mobile-sized viewport.
- Bottom alignment on tablet-sized viewport.
- Top alignment on laptop-sized viewport.

<div class="mrx-row mrx-ui">
    <div class="mrx-col">
        <div class="box mrx-p--small@all">
            <div class="mrx-row mrx-row--gutters-h mrx-row--middle@mob-m mrx-row--bottom@tab-m mrx-row--top@ltp-m">
                <div class="mrx-col mrx-col--6@all">
                    <div class="box mrx-p--small@all">
                        Long text Long text Long text Long text Long text
                        Long text Long text Long text Long text Long text
                        Long text Long text Long text Long text Long text
                        Long text Long text Long text Long text Long text
                        Long text Long text Long text Long text Long text
                        Long text Long text Long text Long text Long text
                        Long text Long text Long text Long text Long text
                        Long text Long text Long text Long text Long text
                        Long text Long text Long text Long text Long text
                    </div>
                </div>
                <div class="mrx-col mrx-col--6@all">
                    <div class="box mrx-p--small@all">
                        Short text
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

## Distribution
Modifier classes for `mrx-row`, that distributes content across the available
space.

**`--around`**

<div class="mrx-row mrx-ui">
    <div class="mrx-col">
        <div class="box mrx-p--small@all">
            <div class="mrx-row mrx-row--gutters-h mrx-row--around@all">
                <div class="mrx-col mrx-col--2@all">
                    <div class="box mrx-p--small@all">
                        Box
                    </div>
                </div>
                <div class="mrx-col mrx-col--2@all">
                    <div class="box mrx-p--small@all">
                        Box
                    </div>
                </div>
                <div class="mrx-col mrx-col--2@all">
                    <div class="box mrx-p--small@all">
                        Box
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

```html
<div class="mrx-row mrx-row--gutters-h mrx-row--around@all">
    <div class="mrx-col mrx-col--2@all">
        <div class="box mrx-p--small@all">
            Box
        </div>
    </div>
    <div class="mrx-col mrx-col--2@all">
        <div class="box mrx-p--small@all">
            Box
        </div>
    </div>
    <div class="mrx-col mrx-col--2@all">
        <div class="box mrx-p--small@all">
            Box
        </div>
    </div>
</div>
```

**`--between`**

<div class="mrx-row mrx-ui">
    <div class="mrx-col">
        <div class="box mrx-p--small@all">
            <div class="mrx-row mrx-row--gutters-h mrx-row--between@all">
                <div class="mrx-col mrx-col--2@all">
                    <div class="box mrx-p--small@all">
                        Box
                    </div>
                </div>
                <div class="mrx-col mrx-col--2@all">
                    <div class="box mrx-p--small@all">
                        Box
                    </div>
                </div>
                <div class="mrx-col mrx-col--2@all">
                    <div class="box mrx-p--small@all">
                        Box
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

```html
<div class="mrx-row mrx-row--gutters-h mrx-row--between@all">
    <div class="mrx-col mrx-col--2@all">
        <div class="box mrx-p--small@all">
            Box
        </div>
    </div>
    <div class="mrx-col mrx-col--2@all">
        <div class="box mrx-p--small@all">
            Box
        </div>
    </div>
    <div class="mrx-col mrx-col--2@all">
        <div class="box mrx-p--small@all">
            Box
        </div>
    </div>
</div>
```

**`--pushleft`**

If you'd like to "push" a column to the left, you can use the modifier
`--pushleft`. This will add the declaration `margin-right: auto;` to the element,
effectively pushing it towards the left. In a flexbox context, this enables
you to separate a single column from its siblings. The `margin-right: auto;`
pushed siblings away from the separate column.

<div class="mrx-row mrx-ui">
    <div class="mrx-col">
        <div class="box mrx-p--small@all">
            <div class="mrx-row mrx-row--gutters-h">
                <div class="mrx-col mrx-col--2@all mrx-col--pushleft@all">
                    <div class="box mrx-p--small@all">
                        Push left
                    </div>
                </div>
                <div class="mrx-col mrx-col--2@all">
                    <div class="box mrx-p--small@all">
                        Box
                    </div>
                </div>
                <div class="mrx-col mrx-col--2@all">
                    <div class="box mrx-p--small@all">
                        Box
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

```html
<div class="mrx-row mrx-row--gutters-h">
    <div class="mrx-col mrx-col--2@all mrx-col--pushleft@all">
        <div class="box mrx-p--small@all">
            Push left
        </div>
    </div>
    <div class="mrx-col mrx-col--2@all">
        <div class="box mrx-p--small@all">
            Box
        </div>
    </div>
    <div class="mrx-col mrx-col--2@all">
        <div class="box mrx-p--small@all">
            Box
        </div>
    </div>
</div>
```

**`--pushright`**

Same as above, but opposite direction. If you'd like to "push" a column to the
right, you can use the modifier `--pushright`. This adds the declaration
`margin-left: auto;` to the element, effectively pushing it towards the right.
This also pushes siblings away from the separate column.

<div class="mrx-row mrx-ui">
    <div class="mrx-col">
        <div class="box mrx-p--small@all">
            <div class="mrx-row mrx-row--gutters-h">
                <div class="mrx-col mrx-col--2@all">
                    <div class="box mrx-p--small@all">
                        Box
                    </div>
                </div>
                <div class="mrx-col mrx-col--2@all">
                    <div class="box mrx-p--small@all">
                        Box
                    </div>
                </div>
                <div class="mrx-col mrx-col--2@all mrx-col--pushright@all">
                    <div class="box mrx-p--small@all">
                        Push right
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

```html
<div class="mrx-row mrx-row--gutters-h">
    <div class="mrx-col mrx-col--2@all">
        <div class="box mrx-p--small@all">
            Box
        </div>
    </div>
    <div class="mrx-col mrx-col--2@all">
        <div class="box mrx-p--small@all">
            Box
        </div>
    </div>
    <div class="mrx-col mrx-col--2@all mrx-col--pushright@all">
        <div class="box mrx-p--small@all">
            Push right
        </div>
    </div>
</div>
```

Here is a more advanced example, where we combine the use of `--pushleft` and
`--pushright`.

<div class="mrx-row mrx-ui">
    <div class="mrx-col">
        <div class="box mrx-p--small@all">
            <div class="mrx-row mrx-row--gutters-h">
                <div class="mrx-col mrx-col--2@all mrx-col--pushleft@all">
                    <div class="box mrx-p--small@all">
                        Push left
                    </div>
                </div>
                <div class="mrx-col mrx-col--2@all">
                    <div class="box mrx-p--small@all">
                        Box
                    </div>
                </div>
                <div class="mrx-col mrx-col--2@all">
                    <div class="box mrx-p--small@all">
                        Box
                    </div>
                </div>
                <div class="mrx-col mrx-col--2@all mrx-col--pushright@all">
                    <div class="box mrx-p--small@all">
                        Push right
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

```html
<div class="mrx-row mrx-row--gutters-h">
    <div class="mrx-col mrx-col--2@all mrx-col--pushleft@all">
        <div class="box mrx-p--small@all">
            Push left
        </div>
    </div>
    <div class="mrx-col mrx-col--2@all">
        <div class="box mrx-p--small@all">
            Box
        </div>
    </div>
    <div class="mrx-col mrx-col--2@all">
        <div class="box mrx-p--small@all">
            Box
        </div>
    </div>
    <div class="mrx-col mrx-col--2@all mrx-col--pushright@all">
        <div class="box mrx-p--small@all">
            Push right
        </div>
    </div>
</div>
```

## Offset
You can offset a column to either the left or right.

<div class="mrx-row mrx-ui">
    <div class="mrx-col">
        <div class="box mrx-p--small@all">
            <div class="mrx-row mrx-row--gutters-h">
                <div class="mrx-col mrx-col--1@all mrx-col--pushright-11@all">
                    <div class="box mrx-p--small@all">
                        Box
                    </div>
                </div>
                <div class="mrx-col mrx-col--2@all mrx-col--pushright-10@all">
                    <div class="box mrx-p--small@all">
                        Box
                    </div>
                </div>
                <div class="mrx-col mrx-col--3@all mrx-col--pushright-9@all">
                    <div class="box mrx-p--small@all">
                        Box
                    </div>
                </div>
                <div class="mrx-col mrx-col--4@all mrx-col--pushright-8@all">
                    <div class="box mrx-p--small@all">
                        Box
                    </div>
                </div>
                <div class="mrx-col mrx-col--5@all mrx-col--pushright-7@all">
                    <div class="box mrx-p--small@all">
                        Box
                    </div>
                </div>
                <div class="mrx-col mrx-col--6@all mrx-col--pushright-6@all">
                    <div class="box mrx-p--small@all">
                        Box
                    </div>
                </div>
                <div class="mrx-col mrx-col--7@all mrx-col--pushright-5@all">
                    <div class="box mrx-p--small@all">
                        Box
                    </div>
                </div>
                <div class="mrx-col mrx-col--8@all mrx-col--pushright-4@all">
                    <div class="box mrx-p--small@all">
                        Box
                    </div>
                </div>
                <div class="mrx-col mrx-col--9@all mrx-col--pushright-3@all">
                    <div class="box mrx-p--small@all">
                        Box
                    </div>
                </div>
                <div class="mrx-col mrx-col--10@all mrx-col--pushright-2@all">
                    <div class="box mrx-p--small@all">
                        Box
                    </div>
                </div>
                <div class="mrx-col mrx-col--11@all mrx-col--pushright-1@all">
                    <div class="box mrx-p--small@all">
                        Box
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

```html
<div class="mrx-row mrx-row--gutters-h">
    <div class="mrx-col mrx-col--1@all mrx-col--pushright-11@all">
        <div class="box mrx-p--small@all">
            Box
        </div>
    </div>
    <div class="mrx-col mrx-col--2@all mrx-col--pushright-10@all">
        <div class="box mrx-p--small@all">
            Box
        </div>
    </div>
    <div class="mrx-col mrx-col--3@all mrx-col--pushright-9@all">
        <div class="box mrx-p--small@all">
            Box
        </div>
    </div>
    ...
    ..
    .
</div>
```

Here is another example:

<div class="mrx-row mrx-ui">
    <div class="mrx-col">
        <div class="box mrx-p--small@all">
            <div class="mrx-row mrx-row--gutters-h">
                <div class="mrx-col mrx-col--2@all mrx-col--pushright-1@all">
                    <div class="box mrx-p--small@all">
                        Short text pushed right by 1 column
                    </div>
                </div>
                <div class="mrx-col mrx-col--6@all">
                    <div class="box mrx-p--small@all">
                        Long text Long text Long text Long text Long text
                        Long text Long text Long text Long text Long text
                        Long text Long text Long text Long text Long text
                        Long text Long text Long text Long text Long text
                        Long text Long text Long text Long text Long text
                        Long text Long text Long text Long text Long text
                        Long text Long text Long text Long text Long text
                        Long text Long text Long text Long text Long text
                        Long text Long text Long text Long text Long text
                    </div>
                </div>
                <div class="mrx-col mrx-col--2@all">
                    <div class="box mrx-p--small@all">
                        Short text
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


```html
<div class="mrx-row mrx-row--gutters-h">
    <div class="mrx-col mrx-col--2@all mrx-col--pushright-1@all">
        <div class="box mrx-p--small@all">
            Short text pushed right by 1 column
        </div>
    </div>
    <div class="mrx-col mrx-col--6@all">
        <div class="box mrx-p--small@all">
            Long text Long text Long text Long text Long text
            Long text Long text Long text Long text Long text
            Long text Long text Long text Long text Long text
            Long text Long text Long text Long text Long text
            Long text Long text Long text Long text Long text
            Long text Long text Long text Long text Long text
            Long text Long text Long text Long text Long text
            Long text Long text Long text Long text Long text
            Long text Long text Long text Long text Long text
        </div>
    </div>
    <div class="mrx-col mrx-col--2@all">
        <div class="box mrx-p--small@all">
            Short text
        </div>
    </div>
</div>
```

## Reversing
Add modifiers to reverse columns visually. Please note that columns are
automatically aligned to the *visual end* of the row (right). This is default
behavior with the `flex-direction: reverse;` declaration.

<div class="mrx-row mrx-ui">
    <div class="mrx-col">
        <div class="box mrx-p--small@all">
            <div class="mrx-row mrx-row--gutters-h mrx-row--reverse@all">
                <div class="mrx-col mrx-col--2@all">
                    <div class="box mrx-p--small@all">
                        1
                    </div>
                </div>
                <div class="mrx-col mrx-col--2@all">
                    <div class="box mrx-p--small@all">
                        2
                    </div>
                </div>
                <div class="mrx-col mrx-col--2@all">
                    <div class="box mrx-p--small@all">
                        3
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

```html
<div class="mrx-row mrx-row--gutters-h mrx-row--reverse@all">
    <div class="mrx-col mrx-col--2@all">
        <div class="box mrx-p--small@all">
            1
        </div>
    </div>
    <div class="mrx-col mrx-col--2@all">
        <div class="box mrx-p--small@all">
            2
        </div>
    </div>
    <div class="mrx-col mrx-col--2@all">
        <div class="box mrx-p--small@all">
            3
        </div>
    </div>
</div>
```

To re-align the reverse-ordered columns to the *visual start* of the row (left),
please add the modifier `--end` to the row element as well. Since the row is
reversed, the `--end` becomes the *visual start*.

<div class="mrx-row mrx-ui">
    <div class="mrx-col">
        <div class="box mrx-p--small@all">
            <div class="mrx-row mrx-row--gutters-h mrx-row--reverse@all  mrx-row--end@all">
                <div class="mrx-col mrx-col--2@all">
                    <div class="box mrx-p--small@all">
                        1
                    </div>
                </div>
                <div class="mrx-col mrx-col--2@all">
                    <div class="box mrx-p--small@all">
                        2
                    </div>
                </div>
                <div class="mrx-col mrx-col--2@all">
                    <div class="box mrx-p--small@all">
                        3
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

```html
<div class="mrx-row mrx-row--gutters-h mrx-row--reverse@all mrx-row--end@all">
    <div class="mrx-col mrx-col--2@all">
        <div class="box mrx-p--small@all">
            1
        </div>
    </div>
    <div class="mrx-col mrx-col--2@all">
        <div class="box mrx-p--small@all">
            2
        </div>
    </div>
    <div class="mrx-col mrx-col--2@all">
        <div class="box mrx-p--small@all">
            3
        </div>
    </div>
</div>
```

## Reordering
You can reorder columns with two utility classes: `--first` and `--last`. These
classes are responsive, so you can choose *when* (on which viewport-size) a column
shall be first or last.

<div class="mrx-row mrx-ui">
    <div class="mrx-col">
        <div class="box mrx-p--small@all">
            <div class="mrx-row mrx-row--gutters-h">
                <div class="mrx-col mrx-col--2@all mrx-col--last@all">
                    <div class="box mrx-p--small@all">
                        1
                    </div>
                </div>
                <div class="mrx-col mrx-col--2@all mrx-col--first@all">
                    <div class="box mrx-p--small@all">
                        2
                    </div>
                </div>
                <div class="mrx-col mrx-col--2@all">
                    <div class="box mrx-p--small@all">
                        3
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

```html
<div class="mrx-row mrx-row--gutters-h">
    <div class="mrx-col mrx-col--2@all mrx-col--last@all">
        <div class="box mrx-p--small@all">
            1
        </div>
    </div>
    <div class="mrx-col mrx-col--2@all mrx-col--first@all">
        <div class="box mrx-p--small@all">
            2
        </div>
    </div>
    <div class="mrx-col mrx-col--2@all">
        <div class="box mrx-p--small@all">
            3
        </div>
    </div>
</div>
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
