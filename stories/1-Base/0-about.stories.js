import React from 'react';
import { storiesOf } from '@storybook/react';

import { Block, List } from '../../src/index';

import logoSrc from '../../public/images/logo.svg';

const stories = storiesOf('Base', module);

stories.add('About', () => (
  <article className="sg-container">
    <h1>Deichman-ui</h1>
    <p>Style-guide and component library</p>
    <Block top={4}>
      <img src="https://img.shields.io/npm/v/@digibib/deichman-ui.svg" alt="version" />{' '}
      <img src="https://badgen.net/bundlephobia/minzip/@digibib/deichman-ui" alt="bundle size" />
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

    <Block top={8}>
      <h4>A11y</h4>
    </Block>
    <Block top={4}>
      <p>Deichman-ui has custom focus-styles for keyboard-users. To implement this:</p>
    </Block>
    <Block top={2}>
      <List numbered>
        <List.Item>
          <p>
            Add <code>`body--a11y`</code> class to your <code>{`<body />`}</code> tag by default
          </p>
        </List.Item>
        <List.Item>
          <p>
            Add the outlineWatcher function to your code. This needs to run when the app/page boots
            up.{' '}
            <a href="https://github.com/digibib/deichman-ui/blob/master/src/helpers/outlineWatcher.js">
              Source
            </a>
            .
          </p>
        </List.Item>
        <List.Item>
          <p>This will enable/disable focus styles if your user interacts with the keyboard.</p>
        </List.Item>
      </List>
    </Block>
  </article>
));
