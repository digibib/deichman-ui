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
