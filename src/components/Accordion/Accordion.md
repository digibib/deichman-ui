### Usage

```jsx
import { Accordion } from 'deichman-ui';

<Accordion name="something" text="Show more info">
  ...
</Accordion>;
```

### Props/modifiers:

| prop name     | type   | description                                              |
| ------------- | ------ | -------------------------------------------------------- |
| name          | string | Unique name (for screenreaders) - Uses text if undefined |
| text          | string | Label text for accordion                                 |
| large         | bool   | Size of font                                             |
| openByDefault | bool   | set to true to make the accordion expanded by default    |
