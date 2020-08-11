### Usage

First, add the global svg code to your document (See SVG ref code below).

```jsx
import { Icon } from 'deichman-ui';

<Icon type="book" />;
```

Note: You also have to include the IconLoader once per site. Place this in your global app-wrapper or similar, preferably right after the opening `<body>` tag.

```jsx
import { IconLoader } from 'deichman-ui';

<IconLoader />;
```

#### Without React:

```html
<div class="icon">
  <svg><use xlink:href="#book" /></svg>
</div>
```

Tip: The color of the icon is set to `currentColor`, which means you can control it by just setting `color` to whatever you want in the parent container. It will revert to the body color.

#### SVG ref code

To make the SVG icons avaiable on all pages: 

1: Open the [latest icon map](https://cdn.jsdelivr.net/npm/@digibib/deichman-ui@latest/dist/icons.svg)
2: Copy the while svg code (View source)
2: Add this code just after the opening `<body>` tag, wrapped in a hidden div. Example:

```html
<div style="display: none">
  {svg contents}
</div>
```

<!-- PROPS -->
