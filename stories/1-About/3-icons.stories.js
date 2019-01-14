import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';

import Icon from '../../src/components/Icon';
import { Block } from '../../src/index';
import readme from './3-icons.stories.md';

const stories = storiesOf('Introduction', module);

stories.add(
  'Icons',
  withReadme(readme, () => (
    <article className="sg-container">
      <p className="sg-heading">Icons</p>

      <Block top={8}>
        <h4>All icons</h4>
      </Block>

      <Block top={5}>
        <div className="sg-icons">
          <div className="sg-icon">
            <div className="sg-icon__fig">
              <Icon icon="add-to-calendar" />
            </div>
            <p className="sg-icon__name">add-to-calendar</p>
          </div>
          <div className="sg-icon">
            <div className="sg-icon__fig">
              <Icon icon="date" />
            </div>
            <p className="sg-icon__name">date</p>
          </div>
          <div className="sg-icon">
            <div className="sg-icon__fig">
              <Icon icon="time" />
            </div>
            <p className="sg-icon__name">time</p>
          </div>
          <div className="sg-icon">
            <div className="sg-icon__fig">
              <Icon icon="map" />
            </div>
            <p className="sg-icon__name">map</p>
          </div>
          <div className="sg-icon">
            <div className="sg-icon__fig">
              <Icon icon="share" />
            </div>
            <p className="sg-icon__name">share</p>
          </div>
          <div className="sg-icon">
            <div className="sg-icon__fig">
              <Icon icon="location" />
            </div>
            <p className="sg-icon__name">location</p>
          </div>
          <div className="sg-icon">
            <div className="sg-icon__fig">
              <Icon icon="user" />
            </div>
            <p className="sg-icon__name">user</p>
          </div>
          <div className="sg-icon">
            <div className="sg-icon__fig">
              <Icon icon="search" />
            </div>
            <p className="sg-icon__name">search</p>
          </div>
          <div className="sg-icon">
            <div className="sg-icon__fig">
              <Icon icon="bookmark" />
            </div>
            <p className="sg-icon__name">bookmark</p>
          </div>
          <div className="sg-icon">
            <div className="sg-icon__fig">
              <Icon icon="home" />
            </div>
            <p className="sg-icon__name">home</p>
          </div>
          <div className="sg-icon">
            <div className="sg-icon__fig">
              <Icon icon="e-book" />
            </div>
            <p className="sg-icon__name">e-book</p>
          </div>
          <div className="sg-icon">
            <div className="sg-icon__fig">
              <Icon icon="new-tab" />
            </div>
            <p className="sg-icon__name">new-tab</p>
          </div>
          <div className="sg-icon">
            <div className="sg-icon__fig">
              <Icon icon="soundbook" />
            </div>
            <p className="sg-icon__name">soundbook</p>
          </div>
          <div className="sg-icon">
            <div className="sg-icon__fig">
              <Icon icon="book" />
            </div>
            <p className="sg-icon__name">book</p>
          </div>
          <div className="sg-icon">
            <div className="sg-icon__fig">
              <Icon icon="grid" />
            </div>
            <p className="sg-icon__name">grid</p>
          </div>
          <div className="sg-icon">
            <div className="sg-icon__fig">
              <Icon icon="list" />
            </div>
            <p className="sg-icon__name">list</p>
          </div>
          <div className="sg-icon">
            <div className="sg-icon__fig">
              <Icon icon="large-list" />
            </div>
            <p className="sg-icon__name">large-list</p>
          </div>
          <div className="sg-icon">
            <div className="sg-icon__fig">
              <Icon icon="menu" />
            </div>
            <p className="sg-icon__name">menu</p>
          </div>
          <div className="sg-icon">
            <div className="sg-icon__fig">
              <Icon icon="arrow-up" />
            </div>
            <p className="sg-icon__name">arrow-up</p>
          </div>
          <div className="sg-icon">
            <div className="sg-icon__fig">
              <Icon icon="arrow-right" />
            </div>
            <p className="sg-icon__name">arrow-right</p>
          </div>
          <div className="sg-icon">
            <div className="sg-icon__fig">
              <Icon icon="arrow-down" />
            </div>
            <p className="sg-icon__name">arrow-down</p>
          </div>
          <div className="sg-icon">
            <div className="sg-icon__fig">
              <Icon icon="arrow" />
            </div>
            <p className="sg-icon__name">arrow</p>
          </div>
        </div>
      </Block>
    </article>
  )),
);
