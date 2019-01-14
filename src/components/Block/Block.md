### Usage

```jsx
import { Block } from 'deichman-ui';

<Block top={1}>
  <p>I have top spacing</p>
</Block>;
```

#### Without React:

```html
<div class="block block--top-1"><p>I have top spacing</p></div>
```

#### In components (via CSS-variables):

```css
.your-component {
  margin-top: var(--spacing-1);
}
```
