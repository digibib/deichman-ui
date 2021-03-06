import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs';

import Block from '../../src/components/Block';
import Grid, { GridItem } from '../../src/components/Grid';
import readme from '../../src/components/Grid/Grid.md';

const stories = storiesOf('Layout', module);

// Add knobs to stories
stories.addDecorator(withKnobs);

// Size prop
const sizeOptions = {
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
const sizeDefault = 1;

stories.add(
  'Grid',
  withReadme(readme, () => (
    <div className="sg-container">
      <h4>Example</h4>

      <Block top={4}>
        <Grid>
          <GridItem base="one-whole">
            <div className="sg-grid-wrapper">
              <small>one-whole</small>
            </div>
          </GridItem>
        </Grid>
      </Block>

      <Block top={5}>
        <Grid>
          <GridItem base="one-half">
            <div className="sg-grid-wrapper">
              <small>one-half</small>
            </div>
          </GridItem>
          <GridItem base="one-half">
            <div className="sg-grid-wrapper">
              <small>one-half</small>
            </div>
          </GridItem>
        </Grid>
      </Block>

      <Block top={5}>
        <Grid>
          <GridItem base="one-third">
            <div className="sg-grid-wrapper">
              <small>one-third</small>
            </div>
          </GridItem>
          <GridItem base="one-third">
            <div className="sg-grid-wrapper">
              <small>one-third</small>
            </div>
          </GridItem>
          <GridItem base="one-third">
            <div className="sg-grid-wrapper">
              <small>one-third</small>
            </div>
          </GridItem>
        </Grid>
      </Block>

      <Block top={5}>
        <Grid>
          <GridItem base="one-quarter">
            <div className="sg-grid-wrapper">
              <small>one-quarter</small>
            </div>
          </GridItem>
          <GridItem base="three-quarters">
            <div className="sg-grid-wrapper">
              <small>three-quarters</small>
            </div>
          </GridItem>
        </Grid>
      </Block>

      <Block top={5}>
        <Grid>
          <GridItem base="one-sixth">
            <div className="sg-grid-wrapper">
              <small>one-sixth</small>
            </div>
          </GridItem>
          <GridItem base="one-sixth">
            <div className="sg-grid-wrapper">
              <small>one-sixth</small>
            </div>
          </GridItem>
          <GridItem base="one-sixth">
            <div className="sg-grid-wrapper">
              <small>one-sixth</small>
            </div>
          </GridItem>
          <GridItem base="one-sixth">
            <div className="sg-grid-wrapper">
              <small>one-sixth</small>
            </div>
          </GridItem>
          <GridItem base="one-sixth">
            <div className="sg-grid-wrapper">
              <small>one-sixth</small>
            </div>
          </GridItem>
          <GridItem base="one-sixth">
            <div className="sg-grid-wrapper">
              <small>one-sixth</small>
            </div>
          </GridItem>
        </Grid>
      </Block>

      <Block top={8}>
        <h4>Responsive Grid</h4>
      </Block>

      <Block top={5}>
        <Grid>
          <GridItem medium="one-half">
            <div className="sg-grid-wrapper">
              <small>Full on mobile, half-width on medium screens</small>
            </div>
          </GridItem>
          <GridItem medium="one-half">
            <div className="sg-grid-wrapper">
              <small>Full on mobile, half-width on medium screens</small>
            </div>
          </GridItem>
        </Grid>
      </Block>

      <Block top={8}>
        <h4>Vertically centered Grid</h4>
      </Block>

      <Block top={5}>
        <Grid middle>
          <GridItem base="one-half">
            <div className="sg-grid-wrapper">
              <small>I've got no padding</small>
            </div>
          </GridItem>
          <GridItem base="one-half">
            <div className="sg-grid-wrapper">
              <Block top={5} bottom={5}>
                <small>I've got padding</small>
              </Block>
            </div>
          </GridItem>
        </Grid>
      </Block>

      <Block top={8}>
        <h4>Horizontally centered Grid</h4>
      </Block>

      <Block top={5}>
        <Grid center>
          <GridItem base="one-half">
            <div className="sg-grid-wrapper">
              <small>one-half</small>
            </div>
          </GridItem>
        </Grid>
      </Block>
    </div>
  )),
);
