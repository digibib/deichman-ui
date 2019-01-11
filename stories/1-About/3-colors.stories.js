import React from 'react';
import { storiesOf } from '@storybook/react';

import { Block } from '../../src/index';

const stories = storiesOf('Introduction', module);

stories.add('Colors', () => (
  <article className="sg-container">
    <p className="sg-heading">Color palette</p>

    <Block top={8}>
      <h4>Primary palette</h4>
    </Block>

    <Block top={6}>
      <p>Deichman RGB</p>
    </Block>

    <Block top={5}>
      <div className="sg-color">
        <div className="sg-color__palette col-yellow" />
        <div className="sg-color__name">Deichman Yellow</div>
        <div className="sg-color__hex">col-yellow</div>
      </div>
    </Block>

    <Block top={7}>
      <p>Grays</p>
    </Block>

    <Block top={5}>
      <div className="sg-colors">
        <div className="sg-color">
          <div className="sg-color__palette col-white" />
          <div className="sg-color__name">White</div>
          <div className="sg-color__hex">col-white</div>
        </div>
        <div className="sg-color">
          <div className="sg-color__palette col-gray-1" />
          <div className="sg-color__name">Gray 1</div>
          <div className="sg-color__hex">col-gray-1</div>
        </div>
        <div className="sg-color">
          <div className="sg-color__palette col-gray-2" />
          <div className="sg-color__name">Gray 2</div>
          <div className="sg-color__hex">col-gray-2</div>
        </div>
        <div className="sg-color">
          <div className="sg-color__palette col-gray-3" />
          <div className="sg-color__name">Gray 3</div>
          <div className="sg-color__hex">col-gray-3</div>
        </div>
        <div className="sg-color">
          <div className="sg-color__palette col-gray-4" />
          <div className="sg-color__name">Gray 4</div>
          <div className="sg-color__hex">col-gray-4</div>
        </div>
        <div className="sg-color">
          <div className="sg-color__palette col-gray-5" />
          <div className="sg-color__name">Gray 5</div>
          <div className="sg-color__hex">col-gray-5</div>
        </div>
        <div className="sg-color">
          <div className="sg-color__palette col-gray-6" />
          <div className="sg-color__name">Gray 6</div>
          <div className="sg-color__hex">col-gray-6</div>
        </div>
        <div className="sg-color">
          <div className="sg-color__palette col-gray-7" />
          <div className="sg-color__name">Gray 7</div>
          <div className="sg-color__hex">col-gray-7</div>
        </div>
        <div className="sg-color">
          <div className="sg-color__palette col-gray-8" />
          <div className="sg-color__name">Gray 8</div>
          <div className="sg-color__hex">col-gray-8</div>
        </div>
        <div className="sg-color">
          <div className="sg-color__palette col-black" />
          <div className="sg-color__name">Black</div>
          <div className="sg-color__hex">col-black</div>
        </div>
      </div>
    </Block>

    <Block top={5}>
      <hr />
    </Block>

    <Block top={5}>
      <h4>Oslo Kommune</h4>
    </Block>

    <Block top={5}>
      <div className="sg-colors">
        <div className="sg-color">
          <div className="sg-color__palette col-ok-1" />
          <div className="sg-color__name">Dark Blue</div>
          <div className="sg-color__hex">col-ok-1</div>
        </div>
        <div className="sg-color">
          <div className="sg-color__palette col-ok-2" />
          <div className="sg-color__name">Green</div>
          <div className="sg-color__hex">col-ok-2</div>
        </div>
        <div className="sg-color">
          <div className="sg-color__palette col-ok-3" />
          <div className="sg-color__name">Dark Green</div>
          <div className="sg-color__hex">col-ok-3</div>
        </div>
        <div className="sg-color">
          <div className="sg-color__palette col-ok-4" />
          <div className="sg-color__name">Pale Brown</div>
          <div className="sg-color__hex">col-ok-4</div>
        </div>
        <div className="sg-color">
          <div className="sg-color__palette col-ok-5" />
          <div className="sg-color__name">Pale Yellow</div>
          <div className="sg-color__hex">col-ok-5</div>
        </div>
        <div className="sg-color">
          <div className="sg-color__palette col-ok-6" />
          <div className="sg-color__name">Pale Red</div>
          <div className="sg-color__hex">col-ok-6</div>
        </div>
      </div>
    </Block>

    <Block top={5}>
      <p>Signal</p>
    </Block>

    <Block top={5}>
      <div className="sg-colors">
        <div className="sg-color">
          <div className="sg-color__palette col-red" />
          <div className="sg-color__name">Red</div>
          <div className="sg-color__hex">col-red</div>
        </div>
      </div>
    </Block>
  </article>
));
