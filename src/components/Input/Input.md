### Usage

```jsx
import { Input } from 'deichman-ui';

<Input value={value} name="first-name" placeholder="Enter first name" />;
```

#### Without React:

```html
<div class="input"><input class="input__field" id="name" name="first-name" /></div>
```

##### Example with error message visible:

```html
<div class="input input--error">
  <input class="input__field" />
  <div className="input__error">Error message!</div>
</div>
```

##### Example with label:

```html
<div class="input">
  <label class="caption" for="first-name">Navn</label>
  <input name="Navn" id="first-name" name="first-name" class="input__field" />
  <div className="input__error">Error message!</div>
</div>
```

### Props/modifiers:

| prop name   | type   | without react     |
| ----------- | ------ | ----------------- |
| type        | string | N/A               |
| value       | string | N/A               |
| placeholder | string | N/A               |
| full        | bool   | input--full       |
| error       | string | input--error      |
| disabled    | bool   | disabled          |
| showClear   | bool   | input--show-clear |
| onClear     | bool   | N/A               |
| onChange    | bool   | N/A               |
