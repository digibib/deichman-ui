import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import Container from '../../src/components/Container';
import Button from '../../src/components/Button';
import Block from '../../src/components/Block';
import Modal from '../../src/components/Modal';

const stories = storiesOf('Patterns', module);

// Add knobs to stories
stories.addDecorator(withKnobs);

class ModalWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
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
        <Block top={6}>
          <h1>Welcome!</h1>
        </Block>
        <Block top={2}>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, quo rerum! Temporibus,
            modi dolore corrupti at ipsam et sed aut praesentium blanditiis repellat, suscipit
            laudantium ad. Rem minus perferendis ipsa.
          </p>
        </Block>
        <Block top={5}>
          <Button onClick={this.onToggle}>Show terms</Button>
        </Block>
        <Modal name="Modal" visible={isOpen} onClose={this.onToggle}>
          <h3>Terms of use</h3>
          <Block top={3}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus laborum in
              earum accusantium laboriosam eos ducimus maxime cupiditate nobis sed fugiat nesciunt,
              perferendis incidunt doloribus tempora, maiores temporibus molestias soluta!
            </p>
          </Block>
          <Block top={5}>
            <Button primary full onClick={this.onToggle}>
              Okay
            </Button>
          </Block>
        </Modal>
      </Container>
    );
  }
}

stories.add('Modal', () => <ModalWrapper />);
