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

#### Responsive version

[WIP] - The responsive block will change it's top/bottom values between small/large screens based on a set of standard values. This only affects values > 5 as the smaller ones should remain the same. Use this for sections that require more vertical spacing on larger screens.

### Props/modifiers:

| prop name  | type   | without react        |
| ---------- | ------ | -------------------- |
| top        | number | block--top-{1-10}    |
| right      | number | block--right-{1-10}  |
| left       | number | block--left-{1-10}   |
| bottom     | number | block--bottom-{1-10} |
| responsive | bool   | block--responsive    |
