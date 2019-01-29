### Usage

```jsx
import { Checkbox } from 'deichman-ui';

<Checkbox name={name} onClick={onClick} label={Click me}>;
```

#### Without React:

```html
<label class="checkbox" onClick="{onClick}" htmlFor="{name}">
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
