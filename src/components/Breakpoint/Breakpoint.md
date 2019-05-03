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

| prop name | type | without react       | Description                 |
| --------- | ---- | ------------------- | --------------------------- |
| small     | bool | button--small       | Show on small screens       |
| medium    | bool | button--medium      | Show on medium screens      |
| large     | bool | button--large       | Show on large screens       |
| xlarge    | bool | button--xlarge      | Show on xlarge screens      |
| up        | bool | button--{size}-up   | Show on given size and up   |
| down      | bool | button--{size}-down | Show on given size and down |
