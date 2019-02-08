### Usage

```jsx
import { Accordion } from 'deichman-ui';

<Accordion name="something" text="Show more info">
  ...
</Accordion>;
```

### Props/modifiers:

| prop name     | type   | description                                           |
| ------------- | ------ | ----------------------------------------------------- |
| name          | string | (REQUIRED) Unique name (for screenreaders)            |
| text          | string | Label text for accordion                              |
| openByDefault | bool   | set to true to make the accordion expanded by default |
