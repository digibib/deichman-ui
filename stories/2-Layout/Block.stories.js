import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs, select } from '@storybook/addon-knobs';

import Block from '../../src/components/Block';
import readme from '../../src/components/Block/Block.md';

const stories = storiesOf('Layout', module);

// Add knobs to stories
stories.addDecorator(withKnobs);

// Size prop
const sizeOptions = {
  none: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
};

stories.add(
  'Block',
  withReadme(readme, () => (
    <article className="sg-container">
      <div className="sg-spacing-wrapper-simple">
        <Block
          top={select('top', sizeOptions, 2)}
          bottom={select('bottom', sizeOptions, 0)}
          left={select('left', sizeOptions, 0)}
          right={select('right', sizeOptions, 0)}
        >
          Block contents
        </Block>
      </div>
    </article>
  )),
);
