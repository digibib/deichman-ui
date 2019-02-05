import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs, text } from '@storybook/addon-knobs';

import ShowMore from '../../src/components/ShowMore';
import readme from '../../src/components/ShowMore/ShowMore.md';

const stories = storiesOf('Components', module);

// Add knobs to stories
stories.addDecorator(withKnobs);

stories.add(
  'ShowMore',
  withReadme(readme, () => (
    <div className="sg-container">
      <ShowMore text={text('text', 'Show all books')} onClick={() => {}} />
    </div>
  )),
);
