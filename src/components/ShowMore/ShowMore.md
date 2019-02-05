### Usage

```jsx
import { ShowMore } from 'deichman-ui';

<ShowMore text="Show all books" ARIAControls="book-list" onClick={onClick} />;
```

#### Without React:

```html
<div class="show-more">
  <button class="show-more__button" aria-controls="book-list">+ Show all books</button>
</div>
```

#### ARIA:

- Give the button an ARIAControls prop to define what piece of content the button expands.
- Give that piece of content an ID with this name.

#### Props

| prop name    | type   | without react | Description      |
| ------------ | ------ | ------------- | ---------------- |
| text         | string | N/A           | Text contents    |
| ARIAControls | string | N/A           | See ARIA section |
| onClick      | func   | N/A           | onClick action   |
