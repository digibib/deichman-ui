import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Block from '../../src/components/Block';

const stories = storiesOf('Base', module);

// Add knobs to stories
stories.addDecorator(withKnobs);

stories.add('Breakpoints', () => (
  <article className="sg-container">
    <p className="sg-heading">Breakpoints</p>

    <Block top={8}>
      <h4>Pre-defined breakpoints:</h4>
    </Block>

    <Block top={6}>
      <figure>
        <figcaption>
          <p>Standard breakpoints:</p>
        </figcaption>
        <pre>
          <code>
            {`--small (min-width: 20em); /* 320px */
--medium (min-width: 48em); /* 768px */
--large (min-width: 67.5em); /* 1080px */
--xlarge (min-width: 83em); /* 1328px */`}
          </code>
        </pre>
      </figure>
    </Block>
    <Block top={6}>
      <figure>
        <figcaption>
          <p>Max-width breakpoints:</p>
        </figcaption>
        <pre>
          <code>
            {`--max-small (max-width: 19.938em); /* 320px */
--max-medium (max-width: 47.938em); /* 768px */
--max-large (max-width: 67.438em); /* 1080px */
--max-xlarge (max-width: 82.938em); /* 1328px */`}
          </code>
        </pre>
      </figure>
    </Block>
  </article>
));
