### Usage

```jsx
import { List } from 'deichman-ui';

<List>
  {books.map(book => (
    <List.Item>{book.title}</List.Item>
  ))}
</List>;
```

#### Without React:

```html
<ul class="list">
  <li class="list__item">Text</li>
  <li class="list__item">Text</li>
  <li class="list__item">Text</li>
</ul>
```
