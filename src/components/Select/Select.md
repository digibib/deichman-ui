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
