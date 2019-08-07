import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';

import Block from '../../src/components/Block';

const stories = storiesOf('Utilities', module);

// Add knobs to stories
stories.addDecorator(withKnobs);

const delays = Array(6).fill();

const ColorDot = props => {
  return <span className={`sg-color-dot col-ok-${props.color + 1 || 1}`} />;
};

const animationOptions = {
  top: 'top',
  bottom: 'bottom',
};

stories.add('Animations', () => (
  <article className="sg-container">
    <h4>Animate in:</h4>
    <Block top={6}>
      <figure>
        <pre>
          <code>{'<div data-animate-in>...</div>'}</code>
        </pre>
      </figure>
    </Block>
    <Block top={6}>
      <div data-animate-in={select('animate in from', animationOptions, 'bottom')}>
        <Block right={2}>
          <ColorDot icon="search" />
        </Block>
      </div>
    </Block>
    <Block top={8}>
      <h4>Animation order/delay:</h4>
    </Block>
    <Block top={6} bottom={6}>
      <figure>
        <pre>
          <code>{'<div data-animate-in data-animation-order="1-10">...</div>'}</code>
        </pre>
      </figure>
    </Block>
    <div style={{ display: 'flex' }}>
      {delays.map((d, i) => (
        <div
          data-animate-in={select('animate in from', animationOptions, 'bottom')}
          data-animation-order={i}
        >
          <Block right={2}>
            <ColorDot color={i} />
          </Block>
        </div>
      ))}
    </div>
  </article>
));
