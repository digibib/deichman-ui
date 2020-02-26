### Usage

```jsx
import { Radio } from 'deichman-ui';

<Radio name={name} onChange={onChange} label={Click me}>;
```

#### Without React:

```html
<label class="checkbox" htmlFor="{name}">
  <input
    class="checkbox__input"
    type="checkbox"
    name="{name}"
    onChange="{onChange}"
    checked="{checked}"
  />
  <span class="checkbox__box">
    <span class="checkbox__dot" />
  </span>
  <span class="checkbox__label">{label}</span>
</label>
```

<!-- PROPS -->
