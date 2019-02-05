### Usage

Mobile-first, responsive 12-column grid-system based on [ csswizandry-grids](https://github.com/csswizardry/csswizardry-grids).

```jsx
import { Grid, GridItem } from 'deichman-ui';

<Grid>
  <GridItem base="one-half">...</GridItem>
  <GridItem base="one-half">...</GridItem>
</Grid>;
```

#### Without React:

```html
<div class="grid">
  <div class="grid__item one-half">...</div>
  <div class="grid__item one-half">...</div>
</div>
```

### Responsiveness:

The grid uses the same breakpoints as the ones [defined here](/?selectedKind=Base&selectedStory=Breakpoints).

Example grid where the items are full-width up until the "large" breakpoint, and then take up half the width each:

```jsx
<Grid>
  <GridItem large="one-half">...</GridItem>
  <GridItem large="one-half">...</GridItem>
</Grid>
```

#### Without React:

```jsx
<div class="grid">
  <div class="grid__item large--one-half">...</div>
  <div class="grid__item large--one-half">...</div>
</div>
```

#### Props (On the Grid component)

| prop name | type | without react | Description                |
| --------- | ---- | ------------- | -------------------------- |
| rev       | bool | grid--rev     | Reverses order of items    |
| right     | bool | grid--right   | Aligns items to the right  |
| center    | bool | grid--center  | Centers items horizontally |
| middle    | bool | grid--middle  | Centers items vertically   |
| narrow    | bool | grid--narrow  | Smaller gutters            |

#### Props (On GridItem)

| prop name | type   | without react  | Description                   |
| --------- | ------ | -------------- | ----------------------------- |
| base      | string | base--{size}   | Base item width               |
| small     | string | small--{size}  | Item width from small and up  |
| medium    | string | medium--{size} | Item width from medium and up |
| large     | string | large--{size}  | Item width from large and up  |
| xlarge    | string | xlarge--{size} | Item width from xlarge and up |

#### Sizes

- one-half
- x-third(s)
- x-quarter(s)
- x-fifth(s)
- x-sixth(s)
- x-eighth(s)
- x-tenth(s)
- x-twelfth(s)
