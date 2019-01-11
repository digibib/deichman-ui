import React from 'react';
import { storiesOf } from '@storybook/react';

import { Block } from '../../src/index';

const stories = storiesOf('Introduction', module);

stories.add('Spacing', () => (
  <article className="sg-container">
    <p className="sg-heading">Spacing</p>

    <Block top={8}>
      <div className="sg-spacing-wrapper">
        <Block top={1} />
      </div>
      <div className="sg-spacing-wrapper">
        <Block top={2} />
      </div>
      <div className="sg-spacing-wrapper">
        <Block top={3} />
      </div>
      <div className="sg-spacing-wrapper">
        <Block top={4} />
      </div>
      <div className="sg-spacing-wrapper">
        <Block top={5} />
      </div>
      <div className="sg-spacing-wrapper">
        <Block top={6} />
      </div>
      <div className="sg-spacing-wrapper">
        <Block top={7} />
      </div>
      <div className="sg-spacing-wrapper">
        <Block top={8} />
      </div>
      <div className="sg-spacing-wrapper">
        <Block top={9} />
      </div>
    </Block>

    <Block top={6}>
      <h4>Usage</h4>
    </Block>

    <Block top={4}>
      <figure>
        <figcaption>With React:</figcaption>
        <pre>
          <code>{'<Block top={1}>...</Block>'}</code>
        </pre>
      </figure>
    </Block>
    <Block top={4}>
      <figure>
        <figcaption>Plain CSS:</figcaption>
        <pre>
          <code>{'<div class="block block--top-1">...</div>'}</code>
        </pre>
      </figure>
    </Block>
    <Block top={4}>
      <figure>
        <figcaption>In components (via CSS-variables):</figcaption>
        <pre>
          <code>{'.your-component { margin: var(--spacing-1); }'}</code>
        </pre>
      </figure>
    </Block>

    <Block top={6}>
      <h4>Notes</h4>
    </Block>

    <Block top={4}>
      <p>
        See the <a href="/?selectedKind=Components&selectedStory=Header">Block component</a> for
        more examples
      </p>
    </Block>
  </article>
));
