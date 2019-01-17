### Usage

```jsx
import { Icon } from 'deichman-ui';

<Icon type="book" />;
```

#### Without React:

Make sure iconmap is included just after the opening `<body>` tag:
`<img class="icon-map" src="https://cdn.jsdelivr.net/npm/@digibib/deichman-ui@{version}/dist/icons.svg" />`

```html
<div class="icon">
  <svg><use xlink:href="iconmap.svg#book" /></svg>
</div>
```
