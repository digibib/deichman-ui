Based on the Banner component.

### Usage

```jsx
import { Alert } from 'deichman-ui';

<Alert>
  <p>Alert contents</p>
</Alert>;
```

#### Without React:

```html
<aside class="alert alert--centered alert--show-close" role="dialog" aria-hidden="false">
  <div class="alert__inner">
    <p>Alert contents</p>

    <button class="alert__close" onClick="..." aria-label="Lukk">
      <div class="icon">
        <svg><use xlink:href="#close" /></svg>
      </div>
    </button>
  </div>
</aside>
```

### Props/modifiers:

| prop name  | type     | without react                       | description                                |
| ---------- | -------- | ----------------------------------- | ------------------------------------------ |
| type       | string   | alert--{type}                       | notification or warning                    |
| centered   | bool     | alert--centered                     | center text                                |
| onClose    | function | alert--show-close + onclick handler | if provided, it will show the close button |
| closeLabel | string   | N/A                                 | Read by screen reader                      |
