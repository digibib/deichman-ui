### Description

Media query component, use to show/hide contents on certain screen-widths.

PS: Use this sparingly, as this only visually hides the component. A better approach would be to prevent render, or using a media query in your component's css.

### Usage

```jsx
import { Breakpoint } from 'deichman-ui';

<Breakpoint large up>
  ...
</Breakpoint>;
```

#### Without React:

```html
<div class="breakpoint breakpoint--large-up">...</div>
```

### Props/modifiers:

| prop name | type | without react           | Description                 |
| --------- | ---- | ----------------------- | --------------------------- |
| small     | bool | breakpoint--small       | Show on small screens       |
| medium    | bool | breakpoint--medium      | Show on medium screens      |
| large     | bool | breakpoint--large       | Show on large screens       |
| xlarge    | bool | breakpoint--xlarge      | Show on xlarge screens      |
| up        | bool | breakpoint--{size}-up   | Show on given size and up   |
| down      | bool | breakpoint--{size}-down | Show on given size and down |
