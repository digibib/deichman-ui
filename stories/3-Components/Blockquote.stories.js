import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs, text } from '@storybook/addon-knobs';

import Blockquote from '../../src/components/Blockquote';
import readme from '../../src/components/Blockquote/Blockquote.md';

const stories = storiesOf('Components', module);

// Add knobs to stories
stories.addDecorator(withKnobs);

stories.add(
  'Blockquote',
  withReadme(readme, () => (
    <div className="sg-container">
      <Blockquote
        cite={text('Cite', 'Arthur C. Clarke')}
      >
        Any sufficiently advanced technology is indistinguishable from magic.
      </Blockquote>
    </div>
  )),
);
