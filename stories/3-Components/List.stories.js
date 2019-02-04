import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import List from '../../src/components/List';
import readme from '../../src/components/List/List.md';

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

stories.add(
  'List',
  withReadme(readme, () => (
    <div className="sg-container">
      <List numbered={boolean('numbered', false)} bulleted={boolean('bulleted', false)}>
        {books.map(book => (
          <List.Item>{book.title}</List.Item>
        ))}
      </List>
    </div>
  )),
);
