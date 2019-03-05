### Description

Full-page overlay, used for modal backdrops etc

### Usage

```jsx
import { Overlay } from 'deichman-ui';

<Overlay visible>;
```

#### Without React:

```html
<div class="overflow overflow--visible">...</div>
```

### Props/modifiers:

| prop name | type | without react      | description  |
| --------- | ---- | ------------------ | ------------ |
| visible   | bool | overlay--visible   |              |
| opaque    | bool | overlay--opaque    |              |
| white     | bool | overlay--white     |              |
| forModal  | bool | overlay--for-modal | More opacity |
