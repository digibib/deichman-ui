import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import { tags } from '../mockData';

import Tag from '../../src/components/Tag';
import TagList from '../../src/components/TagList';

const stories = storiesOf('Components', module);

// Add knobs to stories
stories.addDecorator(withKnobs);

stories.add('TagList', () => (
  <div className="sg-container">
    <TagList limited={boolean('limited', false)} expanded={boolean('expanded', false)}>
      {tags.map(tag => (
        <TagList.Item key={tag.text}>
          <Tag text={tag.text} active showClear onClear={() => {}} />
        </TagList.Item>
      ))}
    </TagList>
  </div>
));
