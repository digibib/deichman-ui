import React from 'react';
import { storiesOf } from '@storybook/react';

import { Block } from '../../src/index';

import logoSrc from '../../src/assets/images/logo-inverted.svg';

const stories = storiesOf('Introduction', module);

stories.add('About', () => (
  <article className="sg-container">
    <Block top={3}>
      <img style={{ width: '300px' }} src={logoSrc} />
    </Block>
    <Block top={4}>
      <p>Style-guide and pattern library</p>
    </Block>

    <Block top={6}>
      <h4>Usage</h4>
    </Block>
    <Block top={4}>
      <figure>
        <figcaption>With React:</figcaption>
        <pre>
          <code>npm install --save deichman-ui</code>
        </pre>
      </figure>
    </Block>
    <Block top={4}>
      <figure>
        <figcaption>Without React:</figcaption>
        <pre>
          <code>{'<link rel="stylesheet" href="https://tbc/deichman-ui.css">'}</code>
        </pre>
      </figure>
    </Block>
  </article>
));
