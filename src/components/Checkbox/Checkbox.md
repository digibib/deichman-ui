### Usage

```jsx
import { Checkbox } from 'deichman-ui';

<Checkbox name={name} onChange={onChange} label={Click me}>;
```

#### Without React:

```html
<label class="checkbox" onChange="{onChange}" htmlFor="{name}">
  <input
    className="checkbox__input"
    type="checkbox"
    name="{name}"
    id="{name}"
    checked="{checked}"
  />
  <span className="checkbox__box">
    <div class="icon">
      <svg width="24" height="24"><use xlink:href="iconmap.svg#check" /></svg>
    </div>
  </span>
  <span className="checkbox__label">{label}</span>
</label>
```

<!-- PROPS -->
