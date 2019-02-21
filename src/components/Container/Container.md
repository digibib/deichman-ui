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

### Props/modifiers:

| prop name       | type   | without react               | description                           |
| --------------- | ------ | --------------------------- | ------------------------------------- |
| color           | string | container--{gray/dark}      | Controls background color             |
| width           | string | container--{narrow/wide}    |                                       |
| preventCollapse | bool   | container--prevent-collapse | Prevents margin collapse for children |
| noGutters       | bool   | container--no-gutters       | Removes side-gutters on mobile        |
