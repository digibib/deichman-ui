### About

Use as a wrapper for content pages.

The Page component does the following:

- Wraps contents in a `<main />` tag
- Limits the width of the contents to `--page-width-max`
- Applies `margin: 0 auto`, to center the page container
- Ensures there's enough space on the sides for the floating Deichman logo

### Usage

```jsx
import { Page } from 'deichman-ui';

<Page>
  <p>Page contents</p>
</Page>;
```

#### Without React:

```html
<main class="page"><p>Page contents</p></main>
```
