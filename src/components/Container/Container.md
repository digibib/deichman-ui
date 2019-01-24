### About

Use as a wrapper for content pages.

The Container component does the following:

- Limits the width of the contents to `--page-width-max`
- Applies `margin: 0 auto`, to center the page container
- Ensures there's enough space on the sides for the floating Deichman logo

### Usage

```jsx
import { Container } from 'deichman-ui';

<Container>
  <p>Container contents</p>
</Container>;
```

#### Without React:

```html
<main class="container"><p>Container contents</p></main>
```
