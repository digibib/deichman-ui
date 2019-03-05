import React from 'react';
import { storiesOf } from '@storybook/react';

import { Block } from '../../src/index';

import logoSrc from '../../public/images/logo.svg';

const stories = storiesOf('Base', module);

stories.add('About', () => (
  <article className="sg-container">
    <h1>Deichman-ui</h1>
    <p>Style-guide and component library</p>
    <Block top={4}>
      <img src="https://img.shields.io/npm/v/@digibib/deichman-ui.svg" alt="version" />
    </Block>
    <Block top={6}>
      <h4>Usage</h4>
    </Block>
    <Block top={4}>
      <figure>
        <figcaption>With React:</figcaption>
        <pre>
          <code>npm install --save @digibib/deichman-ui</code>
        </pre>
      </figure>
    </Block>
    <Block top={4}>
      <figure>
        <figcaption>
          <p>Without React:</p>
        </figcaption>
        <pre>
          <code>
            {
              '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@digibib/deichman-ui@{version}/dist/index.css">'
            }
          </code>
        </pre>
      </figure>
    </Block>
    <Block top={2}>
      <p>
        PS: Check the version number (
        <a href="https://github.com/digibib/deichman-ui/blob/master/CHANGELOG.md">Changelog</a>)
      </p>
    </Block>
    <Block top={4}>
      <a href="https://github.com/digibib/deichman-ui">Source code on github</a>
    </Block>
  </article>
));
