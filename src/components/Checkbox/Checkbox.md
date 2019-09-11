### Usage

```jsx
import { Checkbox } from 'deichman-ui';

<Checkbox name={name} onChange={onChange} label={Click me}>;
```

#### Without React:

```html
<label class="checkbox" onChange="{onChange}" htmlFor="{name}">
  <input
    class="checkbox__input"
    type="checkbox"
    name="{name}"
    id="{name}"
    checked="{checked}"
  />
  <span class="checkbox__box">
    <div class="icon">
      <svg width="24" height="24"><use xlink:href="iconmap.svg#check" /></svg>
    </div>
  </span>
  <span class="checkbox__label">{label}</span>
</label>
```

<!-- PROPS -->
