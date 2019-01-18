import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import List from '../../src/components/List';

const stories = storiesOf('Components', module);

// Add knobs to stories
stories.addDecorator(withKnobs);

const books = [
  {
    title: 'Trolldom',
  },
  {
    title: 'Magi',
  },
  {
    title: 'Sci-fi',
  },
  {
    title: 'Overtro',
  },
  {
    title: 'Skjegg',
  },
];

stories.add('List', () => (
  <div className="sg-container">
    <List numbered={boolean('numbered', false)} bulleted={boolean('bulleted', false)}>
      {books.map(book => (
        <List.Item>{book.title}</List.Item>
      ))}
    </List>
  </div>
));
