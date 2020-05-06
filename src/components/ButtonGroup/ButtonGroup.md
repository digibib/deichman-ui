### Usage

```jsx
import { ButtonGroup } from 'deichman-ui';

<ButtonGroup
  groupId="kategori"
  items={items}
  checked={value}
  handleChange={() => {})}
/>
```

#### Without React:

```html
<div className="button-group">
  <label className="button-group__item">
    <input type="radio" name="kategori" value="musikk" className="button-group__input" checked />
    <span className="button-group__button">
      <div class="icon">
        <svg width="24" height="24"><use xlink:href="/icons.svg#game" /></svg>
      </div>
      Spill
    </span>
  </label>

  <label className="button-group__item">
    <input type="radio" name="kategori" value="lydbok" className="button-group__input" />
    <span className="button-group__button">
      <div class="icon">
        <svg width="24" height="24"><use xlink:href="/icons.svg#soundbook" /></svg>
      </div>
      Lydbok
    </span>
  </label>
</div>
```

### Props/modifiers:

| prop name    | type   | without react | Description                      |
| ------------ | ------ | ------------- | -------------------------------- |
| groupId      | string | name          | Unique name for this ButtonGroup |
| items        | array  |               | An array with items              |
| checked      | string | checked       | Checked field                    |
| handleChange | func   |               | onChange handler                 |

Example items list:

```
const items = [
  { text: 'Spill', value: 'spill', icon: 'game' },
  { text: 'Bok', value: 'bok', icon: 'book' },
  { text: 'Lydbok', value: 'lydbok', icon: 'soundbook' },
];
```
