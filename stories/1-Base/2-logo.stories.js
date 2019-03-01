import React from 'react';
import { storiesOf } from '@storybook/react';

import { Block } from '../../src/index';
import Grid, { GridItem } from '../../src/components/Grid';

import logoSrc from '../../public/images/logo.svg';
import logoSrcInverted from '../../public/images/logo-inverted.svg';
import logoSrcSmall from '../../public/images/logo-small.svg';
import logoSrcSmallInverted from '../../public/images/logo-small-inverted.svg';

const stories = storiesOf('Base', module);

stories.add('Logo', () => (
  <article className="sg-container">
    <p className="sg-heading">Logo</p>

    <Block top={8}>
      <h4>SVG image assets</h4>
    </Block>

    <div className="sg-image-box-wrapper">
      <Grid>
        <GridItem medium="one-half">
          <Block top={5}>
            <figure>
              <div className="sg-image-box">
                <img className="sg-image" src={logoSrc} alt="logo" />
              </div>
              <pre>
                <code>{'https://cdn.jsdelivr.net/npm/@digibib/deichman-ui/dist/logo.svg'}</code>
              </pre>
            </figure>
          </Block>
        </GridItem>
        <GridItem medium="one-half">
          <Block top={5}>
            <figure>
              <div className="sg-image-box sg-image-box--inverted">
                <img className="sg-image" src={logoSrcInverted} alt="logo" />
              </div>
              <pre>
                <code>
                  {'https://cdn.jsdelivr.net/npm/@digibib/deichman-ui/dist/logo-inverted.svg'}
                </code>
              </pre>
            </figure>
          </Block>
        </GridItem>
      </Grid>
    </div>

    <div className="sg-image-box-wrapper">
      <Grid>
        <GridItem medium="one-half">
          <Block top={5}>
            <figure>
              <div className="sg-image-box">
                <img className="sg-image" src={logoSrcSmall} alt="logo" />
              </div>
              <pre>
                <code>
                  {'https://cdn.jsdelivr.net/npm/@digibib/deichman-ui/dist/logo-small.svg'}
                </code>
              </pre>
            </figure>
          </Block>
        </GridItem>
        <GridItem medium="one-half">
          <Block top={5}>
            <figure>
              <div className="sg-image-box sg-image-box--inverted">
                <img className="sg-image" src={logoSrcSmallInverted} alt="logo" />
              </div>
              <pre>
                <code>
                  {'https://cdn.jsdelivr.net/npm/@digibib/deichman-ui/dist/logo-small-inverted.svg'}
                </code>
              </pre>
            </figure>
          </Block>
        </GridItem>
      </Grid>
    </div>
  </article>
));
