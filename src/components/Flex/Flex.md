### Usage

```jsx
import { Flex } from 'deichman-ui';

<Flex>
  <p>Flex item</p>
  <p>Flex item</p>
</Flex>;
```

#### Without React:

```html
<div class="flex">
  <p>Flex item</p>
  <p>Flex item</p>
</div>
```

### Props/modifiers:

| prop name | type   | without react                                               |
| --------- | ------ | ----------------------------------------------------------- |
| align     | string | flex--align-{start/center/end}                              |
| justify   | string | flex--justify-{start/center/end/space-between/space-around} |
| wrap      | bool   | flex--wrap                                                  |
