# preparation notes

0. See beginning of [video tutorial](https://www.youtube.com/watch?v=gXLjWRteuWI&t=960s) for HTML/CSS syntax terminology.

HTML structure
```html
<!-- 
HTML Basic Structure
e.g., element: `<div class="hey"></div>`
-->
<html>
    <head> <!-- opening tag -->
        <!-- `<head>` contains configuration. e.g., tab title, meta tag keywords, link CSS file. -->
    </head> <!-- closing tag, some are self-closing -->
    <body>
        <!-- `<body>` contains webpage content. e.g., logo, descriptions, images. -->
        <div class="hey"> <!-- attribute: `class`, value: `hey` -->
            <!-- (attribute value is a reference for JS and CSS to style it) -->
            <!-- content here -->
        </div>
    </body>
</html>
```

CSS structure (ref: HTML above)
```css
/** a ruleset */
.hey { /** `.hey` is the 'selector' for class attribute. Could also use `div` */
    background: blue; /** a declaration: property: `background`, value: `blue` */
    font-size: 1em;
}
```

> I'm not taking notes like this again

1. VS Code: Install **Live Sass Compiler** and **Live Server** by Ritwick Dey.
2. Project folder: Create *index.html*, css folder, and *main.scss* (scss for **SASS**, CSS extension).
3. Click **"Watch Sass"** (bottom menu bar). Will compile scss down into css files.
4. VS Code: in HTML file, **! + Enter** will create boilerplate HTML starter outline.