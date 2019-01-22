### Usage

Make sure iconmap is included just after the opening `<body>` tag:
`<img class="icon-map" src="https://cdn.jsdelivr.net/npm/@digibib/deichman-ui@{version}/dist/icons.svg" />`

Tip: The color of the icon is set to `currentColor`, which means you can control it by just setting `color` to whatever you want in the parent container. It will revert to the body color.

```jsx
import { Icon } from 'deichman-ui';

<Icon type="book" />;
```

#### Without React:

```html
<div class="icon">
  <svg><use xlink:href="iconmap.svg#book" /></svg>
</div>
```
