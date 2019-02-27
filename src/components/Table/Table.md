### Usage

⚠️ The `label`/`data-label` props are needed for responsive tables.

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
      <Table.Cell label="Name">Amy</Table.Cell>
      <Table.Cell label="Age">54</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell label="Name">Franklin</Table.Cell>
      <Table.Cell label="Age">34</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>;
```

#### Without React:

```html
<table class="table">
  <thead class="table__head">
    <tr class="table__row">
      <th class="table__cell">Name</th>
      <th class="table__cell">Age</th>
    </tr>
  </thead>
  <tbody class="table__body">
    <tr class="table__row">
      <td class="table__cell" data-label="Name">Amy</td>
      <td class="table__cell" data-label="Age">54</td>
    </tr>
    <tr class="table__row">
      <td class="table__cell" data-label="Name">Frank</td>
      <td class="table__cell" data-label="Age">34</td>
    </tr>
  </tbody>
</table>
```

#### Responsive tables:

### Props/modifiers:

| prop name   | type | without react      | Comments                 |
| ----------- | ---- | ------------------ | ------------------------ |
| full        | bool | table--full        |                          |
| dark        | bool | table--dark        |                          |
| transparent | bool | table--transparent |                          |
| condensed   | bool | table--condensed   |                          |
| noPadding   | bool | table--no-padding  |                          |
| vertical    | bool | table--vertical    | Only supports single row |
| responsive  | bool | table--responsive  | (default true)           |
