### Usage

```jsx
import { Button } from 'deichman-ui';

<Button>Click me</Button>;
```

#### Without React:

```html
<button class="button">Click me</button>
```

```html
<button class="button button--with-icon">
  <div class="icon">
    <svg width="24" height="24"><use xlink:href="/icons.svg#add" /></svg>
  </div>
  Click me
</button>
```

### Props/modifiers:

| prop name | type | without react     | Description                                                     |
| --------- | ---- | ----------------- | --------------------------------------------------------------- |
| primary   | bool | button--primary   |                                                                 |
| disabled  | bool | button--disabled  | Disabled state (for non-react usage, also add [disabled] attr.) |
| loading   | bool | button--loading   | Applies loading styling (spinner)                               |
| full      | bool | button--full      | Full width                                                      |
| condensed | bool | button--condensed | Less side padding                                               |
| small     | bool | button--small     | Smaller font size                                               |
| icon      | bool | button--with-icon |                                                                 |
| onClick   | func |                   |                                                                 |
