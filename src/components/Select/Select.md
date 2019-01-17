### Usage

```jsx
import { Select } from 'deichman-ui';

const exampleOptions = [
  {
    text: 'Trolldom',
    value: '1',
  },
  {
    text: 'Magi',
    value: '2',
  },
  {
    text: 'Sci-fi',
    value: '3',
  },
];

const selectedItem = '1';

<Select name="something" options={exampleOptions} selected={selectedItem} />;
```

#### Without React:

```html
<div class="select">
  <div class="select__arrow">
    <div class="icon">
      <svg><use xlink:href="iconmap.svg#arrow-down" /></svg>
    </div>
  </div>
  <select className="select__field">
    <option value="123">Option 1</option>
  </select>
</div>
```
