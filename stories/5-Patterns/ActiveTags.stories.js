import React, { Component } from 'react';
import autoBind from 'auto-bind';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import { tags } from '../mockData';

import Container from '../../src/components/Container';
import Block from '../../src/components/Block';
import Tag from '../../src/components/Tag';
import TagList from '../../src/components/TagList';

const stories = storiesOf('Patterns', module);

// Add knobs to stories
stories.addDecorator(withKnobs);

class TagSelection extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.state = {
      activeTagIds: [0, 1, 5],
    };
  }

  onAddTag(tagId) {
    const { activeTagIds = [] } = this.state;
    this.setState({
      activeTagIds: [...activeTagIds, tagId],
    });
  }

  onRemoveTag(tagId) {
    const { activeTagIds = [] } = this.state;
    this.setState({
      activeTagIds: activeTagIds.filter(activeTagId => activeTagId !== tagId),
    });
  }

  render() {
    const { activeTagIds } = this.state;
    const activeTags = tags.filter(tag => activeTagIds.includes(tag.id));
    const availableTags = tags.filter(tag => !activeTagIds.includes(tag.id));

    return (
      <div className="sg-container">
        <h4>All tags (Click to add)</h4>
        <Block top={5} bottom={5}>
          <TagList>
            {availableTags.map(tag => (
              <TagList.Item key={tag.text}>
                <Tag text={tag.text} onClick={() => this.onAddTag(tag.id)} />
              </TagList.Item>
            ))}
          </TagList>
        </Block>
        <h4>Selected tags (Click to remove)</h4>
        <Block top={5}>
          <TagList>
            {activeTags.map(tag => (
              <TagList.Item key={tag.text}>
                <Tag text={tag.text} active showClear onClick={() => this.onRemoveTag(tag.id)} />
              </TagList.Item>
            ))}
          </TagList>
        </Block>
      </div>
    );
  }
}

stories.add('Tag selection', () => <TagSelection />);
