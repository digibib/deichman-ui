### Usage

```jsx
import { Icon } from 'deichman-ui';

<Icon type="book" />;
```

#### Without React:

Make sure iconmap is included just after the opening `<body>` tag:
`<img src="{..}/iconmap.svg" />`

```html
<div class="icon">
  <svg><use xlink:href="iconmap.svg#book" /></svg>
</div>
```
