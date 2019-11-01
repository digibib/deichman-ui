### Usage

```jsx
import { Loader } from 'deichman-ui';

<Loader>;
```

#### Without React:

```html
<div className="loader">
  <svg viewBox="0 0 150 68" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M24.06,25h22.7C62.94,25,75.44,37.4,75.44,56.5s-12.5,31.86-28.6,31.86H24.06ZM45.81,79C57,79,65,71.83,65,56.5S57,34.32,45.81,34.32H34.08V79Z"
      transform="translate(-24.06 -23.93)"
    />
  </svg>

  <div className="loader__line loader__line-top" />
  <div className="loader__line" />
  <div className="loader__line loader__line-bottom" />
</div>
```
