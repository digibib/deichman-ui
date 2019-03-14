import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import Container from '../../src/components/Container';
import Block from '../../src/components/Block';
import Overlay from '../../src/components/Overlay';
import Sidebar from '../../src/components/Sidebar';
import Burger from '../../src/components/Burger';

const stories = storiesOf('Patterns', module);

// Add knobs to stories
stories.addDecorator(withKnobs);

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };

    this.onToggle = this.onToggle.bind(this);
  }

  onToggle(e) {
    e.preventDefault();
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const { isOpen } = this.state;

    return (
      <Container>
        <Sidebar open={isOpen}>
          <Block top={6} left={6} right={6}>
            <h4>Welcome!</h4>
          </Block>
        </Sidebar>
        <Overlay visible={isOpen} onClick={this.onToggle} />
        <div style={{ position: 'fixed', bottom: '0', left: '0', zIndex: '300', padding: '40px' }}>
          <Burger open={isOpen} onClick={this.onToggle} />
        </div>
      </Container>
    );
  }
}

stories.add('Navigation', () => <Navigation />);
