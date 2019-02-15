### Usage

```jsx
import { Table } from 'deichman-ui';

<Table>
  <Table.Head>
    <Table.Row>
      <Table.Cell isHead>Name</Table.Cell>
      <Table.Cell isHead>Age</Table.Cell>
    </Table.Row>
  </Table.Head>
  <Table.Body>
    <Table.Row>
      <Table.Cell>Amy</Table.Cell>
      <Table.Cell>54</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Franklin</Table.Cell>
      <Table.Cell>34</Table.Cell>
    </Table.Row>
  </Table.Body>
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

### Props/modifiers:

| prop name   | type | without react      |
| ----------- | ---- | ------------------ |
| full        | bool | table--full        |
| dark        | bool | table--dark        |
| transparent | bool | table--transparent |
| condensed   | bool | table--condensed   |
| noPadding   | bool | table--no-padding  |
