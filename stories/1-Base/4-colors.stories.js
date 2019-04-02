import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';

import { Block } from '../../src/index';
import readme from './4-colors.stories.md';

const stories = storiesOf('Base', module);

stories.add(
  'Colors',
  withReadme(readme, () => (
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
          <div className="sg-color__palette col-yellow">
            <div className="sg-color__hex">#fffe07</div>
          </div>
          <div className="sg-color__name">Deichman Yellow</div>
          <div className="sg-color__class">col-yellow</div>
        </div>
      </Block>

      <Block top={7}>
        <p>Grays</p>
      </Block>

      <Block top={5}>
        <div className="sg-colors">
          <div className="sg-color">
            <div className="sg-color__palette col-white">
              <div className="sg-color__hex">#ffffff</div>
            </div>
            <div className="sg-color__name">White</div>
            <div className="sg-color__class">col-white</div>
          </div>
          <div className="sg-color">
            <div className="sg-color__palette col-gray-1">
              <div className="sg-color__hex">#f5f5f5</div>
            </div>
            <div className="sg-color__name">Gray 1</div>
            <div className="sg-color__class">col-gray-1</div>
          </div>
          <div className="sg-color">
            <div className="sg-color__palette col-gray-2">
              <div className="sg-color__hex">#eaeaea</div>
            </div>
            <div className="sg-color__name">Gray 2</div>
            <div className="sg-color__class">col-gray-2</div>
          </div>
          <div className="sg-color">
            <div className="sg-color__palette col-gray-3">
              <div className="sg-color__hex">#d6d6d6</div>
            </div>
            <div className="sg-color__name">Gray 3</div>
            <div className="sg-color__class">col-gray-3</div>
          </div>
          <div className="sg-color">
            <div className="sg-color__palette col-gray-4">
              <div className="sg-color__hex">#bfbfbf</div>
            </div>
            <div className="sg-color__name">Gray 4</div>
            <div className="sg-color__class">col-gray-4</div>
          </div>
          <div className="sg-color">
            <div className="sg-color__palette col-gray-5">
              <div className="sg-color__hex">#a9a9a9</div>
            </div>
            <div className="sg-color__name">Gray 5</div>
            <div className="sg-color__class">col-gray-5</div>
          </div>
          <div className="sg-color">
            <div className="sg-color__palette col-gray-6">
              <div className="sg-color__hex">#606060</div>
            </div>
            <div className="sg-color__name">Gray 6</div>
            <div className="sg-color__class">col-gray-6</div>
          </div>
          <div className="sg-color">
            <div className="sg-color__palette col-gray-7">
              <div className="sg-color__hex">#424242</div>
            </div>
            <div className="sg-color__name">Gray 7</div>
            <div className="sg-color__class">col-gray-7</div>
          </div>
          <div className="sg-color">
            <div className="sg-color__palette col-gray-8">
              <div className="sg-color__hex">#222222</div>
            </div>
            <div className="sg-color__name">Gray 8</div>
            <div className="sg-color__class">col-gray-8</div>
          </div>
          <div className="sg-color">
            <div className="sg-color__palette col-black">
              <div className="sg-color__hex">#000000</div>
            </div>
            <div className="sg-color__name">Black</div>
            <div className="sg-color__class">col-black</div>
          </div>
        </div>
      </Block>

      <Block top={5}>
        <hr />
      </Block>

      <Block top={5}>
        <h4>Oslo kommune</h4>
      </Block>

      <Block top={5}>
        <div className="sg-colors">
          <div className="sg-color">
            <div className="sg-color__palette col-ok-1">
              <div className="sg-color__hex">#38396a</div>
            </div>
            <div className="sg-color__name">Dark Blue</div>
            <div className="sg-color__class">col-ok-1</div>
          </div>
          <div className="sg-color">
            <div className="sg-color__palette col-ok-2">
              <div className="sg-color__hex">#53f3c5</div>
            </div>
            <div className="sg-color__name">Green</div>
            <div className="sg-color__class">col-ok-2</div>
          </div>
          <div className="sg-color">
            <div className="sg-color__palette col-ok-3">
              <div className="sg-color__hex">#085c58</div>
            </div>
            <div className="sg-color__name">Dark Green</div>
            <div className="sg-color__class">col-ok-3</div>
          </div>
          <div className="sg-color">
            <div className="sg-color__palette col-ok-4">
              <div className="sg-color__hex">#dac9bc</div>
            </div>
            <div className="sg-color__name">Pale Brown</div>
            <div className="sg-color__class">col-ok-4</div>
          </div>
          <div className="sg-color">
            <div className="sg-color__palette col-ok-5">
              <div className="sg-color__hex">#fbcd83</div>
            </div>
            <div className="sg-color__name">Pale Yellow</div>
            <div className="sg-color__class">col-ok-5</div>
          </div>
          <div className="sg-color">
            <div className="sg-color__palette col-ok-6">
              <div className="sg-color__hex">#fb9688</div>
            </div>
            <div className="sg-color__name">Pale Red</div>
            <div className="sg-color__class">col-ok-6</div>
          </div>
        </div>
      </Block>

      <Block top={5}>
        <p>Signal</p>
      </Block>

      <Block top={5}>
        <div className="sg-colors">
          <div className="sg-color">
            <div className="sg-color__palette col-red">
              <div className="sg-color__hex">#fa4343</div>
            </div>
            <div className="sg-color__name">Red</div>
            <div className="sg-color__class">col-red</div>
          </div>
        </div>
      </Block>
    </article>
  )),
);
