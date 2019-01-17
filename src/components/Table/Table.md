### Usage

```jsx
import { Table, TableHead, TableBody, TableRow, TableCell } from 'deichman-ui';

<Table>
  <Head>
    <Row>
      <Cell isHead>Name</Cell>
      <Cell isHead>Age</Cell>
    </Row>
  </Head>
  <Body>
    <Row>
      <Cell>Amy</Cell>
      <Cell>54</Cell>
    </Row>
    <Row>
      <Cell>Franklin</Cell>
      <Cell>34</Cell>
    </Row>
  </Body>
</Table>;
```

#### Without React:

```html
<table class="table">
  <thead class="table__head">
    <tr class="table__row">
      <th class="table__cell">Pages</th>
      <th class="table__cell">Title</th>
      <th class="table__cell">Author</th>
    </tr>
  </thead>
  <tbody class="table__body">
    <tr class="table__row">
      <td class="table__cell">133-155</td>
      <td class="table__cell">The Body Snatcher</td>
      <td class="table__cell"><a href="#">Robert Louis Stevenson</a></td>
    </tr>
    <tr class="table__row">
      <td class="table__cell">186-205</td>
      <td class="table__cell">The Tell-Tale Heart</td>
      <td class="table__cell"><a href="#">Edgar Allan Poe</a></td>
    </tr>
    <tr class="table__row">
      <td class="table__cell">269-291</td>
      <td class="table__cell">The Yellow Wallpaper</td>
      <td class="table__cell"><a href="#">Charlotte Perkins Gilman</a></td>
    </tr>
  </tbody>
</table>
```
