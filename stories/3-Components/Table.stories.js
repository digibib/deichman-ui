import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import Block from '../../src/components/Block';
import Table from '../../src/components/Table';
import readme from '../../src/components/Table/Table.md';

const stories = storiesOf('Components', module);

// Add knobs to stories
stories.addDecorator(withKnobs);

stories.add(
  'Table',
  withReadme(readme, () => (
    <Fragment>
      <div className="sg-container">
        <Block bottom={5}>
          <h4>Horizontal table:</h4>
        </Block>
        <Table
          full={boolean('full', true)}
          dark={boolean('dark', false)}
          transparent={boolean('transparent', false)}
          condensed={boolean('condensed', false)}
          noPadding={boolean('noPadding', false)}
          responsive={boolean('responsive', true)}
        >
          <Table.Head>
            <Table.Row>
              <Table.Cell isHeadCell>Pages</Table.Cell>
              <Table.Cell isHeadCell>Title</Table.Cell>
              <Table.Cell isHeadCell>Author</Table.Cell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell label="Pages">133-155</Table.Cell>
              <Table.Cell label="Title">The Body Snatcher</Table.Cell>
              <Table.Cell label="Author">
                <a href="#">Robert Louis Stevenson</a>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell label="Pages">186-205</Table.Cell>
              <Table.Cell label="Title">The Tell-Tale Heart</Table.Cell>
              <Table.Cell label="Author">
                <a href="#">Edgar Allan Poe</a>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell label="Pages">269-291</Table.Cell>
              <Table.Cell label="Title">The Yellow Wallpaper</Table.Cell>
              <Table.Cell label="Author">
                <a href="#">Charlotte Perkins Gilman</a>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
      <div className="sg-container">
        <Block bottom={5}>
          <h4>Vertical table:</h4>
        </Block>
        <Table
          full={boolean('full', true)}
          dark={boolean('dark', false)}
          transparent={boolean('transparent', false)}
          condensed={boolean('condensed', false)}
          noPadding={boolean('noPadding', false)}
          responsive={boolean('responsive', true)}
          vertical
        >
          <Table.Body>
            <Table.Row>
              <Table.Cell isHeadCell>Pages</Table.Cell>
              <Table.Cell>133-155</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell isHeadCell>Title</Table.Cell>
              <Table.Cell>The Tell-Tale Heart</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell isHeadCell>Author</Table.Cell>
              <Table.Cell>
                <a href="#">Edgar Allan Poe</a>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </Fragment>
  )),
);
