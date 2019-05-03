import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs';

import Block from '../../src/components/Block';
import Grid, { GridItem } from '../../src/components/Grid';
import readme from './7-getting-started.stories.md';

const stories = storiesOf('Base', module);

// Add knobs to stories
stories.addDecorator(withKnobs);

stories.add(
  'Getting started',
  withReadme(readme, () => (
    <article className="sg-container">
      <p className="sg-heading">Getting started</p>

      <Block top={6}>
        <h4>General usage</h4>
      </Block>

      <Grid>
        <GridItem medium="one-half">
          <Block top={2}>
            <ul class="list list--bulleted">
              <li class="list__item">
                Start with the "Container" component, which limits the width of the content
              </li>
              <li class="list__item">
                If you need multiple columns, for example on wider screens, use the "Grid"
              </li>
              <li class="list__item">
                Place "Block" components inside the grid items if you need vertical spacing between
                Components
              </li>
              <li class="list__item">
                Components has no margin/padding. They should be laid out on the page using a
                combination of the Grid and Block components.
              </li>
              <li class="list__item">test</li>
            </ul>
          </Block>

          <Block top={2}>
            <p>See the "Readme" tab at the bottom for an example of the above</p>
          </Block>
        </GridItem>
      </Grid>
    </article>
  )),
);
