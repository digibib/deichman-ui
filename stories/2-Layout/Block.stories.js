import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';

import Block from '../../src/components/Block';

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
};

stories.add('Block', () => (
  <article className="sg-container">
    <p className="sg-heading">Block</p>
    <Block top={8}>
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
    </Block>

    <Block top={6}>
      <h4>Usage</h4>
    </Block>
    <Block top={4}>
      <figure>
        <figcaption>With React:</figcaption>
        <pre>
          <code>
            {`import { Block } from 'deichman-ui';`}
            <br />
            <br />
            {`<Block top={1}>`}
            <br />
            {`  <p>I have top spacing</p>`}
            <br />
            {`</Block>`}
          </code>
        </pre>
      </figure>
    </Block>
    <Block top={4}>
      <figure>
        <figcaption>Without React:</figcaption>
        <pre>
          <code>
            {`<div class="block block--top-1">`}
            <br />
            {`  <p>I have top spacing</p>`}
            <br />
            {`</div>`}
          </code>
        </pre>
      </figure>
    </Block>
  </article>
));
