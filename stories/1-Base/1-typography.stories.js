import React from 'react';
import { storiesOf } from '@storybook/react';

import { Block } from '../../src/index';

const stories = storiesOf('Base', module);

stories.add('Typography', () => (
  <article className="sg-container">
    <p className="sg-heading">Typography</p>

    <Block top={8} bottom={5}>
      <div className="sg-flex-row">
        <h1>h1 Headline</h1>
        <code>{`<h1/>`}, .h1</code>
      </div>
    </Block>
    <hr />
    <Block top={5} bottom={5}>
      <div className="sg-flex-row">
        <h2>h2 Headline</h2>
        <code>{`<h2/>`}, .h2</code>
      </div>
    </Block>
    <hr />
    <Block top={5} bottom={5}>
      <div className="sg-flex-row">
        <h3>h3 Headline</h3>
        <code>{`<h3/>`}, .h3</code>
      </div>
    </Block>
    <hr />
    <Block top={5} bottom={5}>
      <div className="sg-flex-row">
        <h4>h4 Headline</h4>
        <code>{`<h4/>`}, .h4</code>
      </div>
    </Block>
    <hr />
    <Block top={5} bottom={5}>
      <div className="sg-flex-row">
        <strong>Subheading</strong>
        <code>{`<strong/>`}</code>
      </div>
    </Block>
    <hr />
    <Block top={5} bottom={5}>
      <div className="sg-flex-row">
        <p>Body copy</p>
        <code>{`<p/>`}</code>
      </div>
    </Block>
    <hr />
    <Block top={5} bottom={5}>
      <div className="sg-flex-row">
        <p className="link">Link</p>
        <code>{`<a/>, .link`}</code>
      </div>
    </Block>
    <hr />
    <Block top={5} bottom={5}>
      <div className="sg-flex-row">
        <small>Body copy 2</small>
        <code>{`<small/>`}</code>
      </div>
    </Block>
    <hr />
    <Block top={5} bottom={5}>
      <div className="sg-flex-row">
        <p className="caption">Caption</p>
        <code>.caption</code>
      </div>
    </Block>
    <hr />
    <Block top={5} bottom={5}>
      <div className="sg-flex-row">
        <p className="overline">Overline</p>
        <code>.overline</code>
      </div>
    </Block>
  </article>
));
