### Usage

```jsx
import { TagList, Tag } from 'deichman-ui';

<TagList>
  {tags.map(tag => (
    <TagList.Item>
      <Tag text="Hello" />
      <Tag text="Hello" />
      <Tag text="Hello" />
    </TagList.Item>
  ))}
</TagList>;
```

```html
<div class="tag-list">
  <ul class="tag-list__list">
    <li class="tag-list__item">
      ...
    </li>
    <li class="tag-list__item">
      ...
    </li>
    <li class="tag-list__item">
      ...
    </li>
  </ul>
  <a class="tag-list__show-more" href="#expand">+ Vis mer</a>
</div>
```

### Props/modifiers:

| prop name | type   | without react          | Comments      |
| --------- | ------ | ---------------------- | ------------- |
| limited   | bool   | tag-list--limited      |               |
| expanded  | bool   | tag-list--expanded     |               |
| maxRows   | number | tag-list--max-lines{n} | Defaults to 2 |
