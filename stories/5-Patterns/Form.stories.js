import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';

import Container from '../../src/components/Container';
import Block from '../../src/components/Block';
import Checkbox from '../../src/components/Checkbox';
import Select from '../../src/components/Select';
import Button from '../../src/components/Button';
import Textarea from '../../src/components/Textarea';
import Input from '../../src/components/Input';
import Flex from '../../src/components/Flex';
import Radio from '../../src/components/Radio';

const stories = storiesOf('Patterns', module);

// Add knobs to stories
stories.addDecorator(withKnobs);

const yearOptions = [
  {
    text: '1900',
    value: '1900',
  },
  {
    text: '1901',
    value: '1901',
  },
  {
    text: '1902',
    value: '1902',
  },
];

class FormExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(target, value) {
    const { fields } = this.state;
    this.setState({
      fields: { ...fields, [target]: value },
    });
  }

  render() {
    const { fields } = this.state;

    return (
      <Container>
        <Block top={4}>
          <form onSubmit={() => {}}>

            <Block top={4}>
              <Input
                value={fields.firstName}
                name="firstName"
                label="Fornavn"
                placeholder="Carl"
                onChange={({ value }) => this.handleChange('firstName', value)}
                full
              />
            </Block>
            <Block top={4}>
              <Input
                value={fields.lastName}
                name="lastName"
                label="Etternavn"
                placeholder="Deichman"
                onChange={({ value }) => this.handleChange('lastName', value)}
                full
              />
            </Block>

            <Block top={4}>
              <Flex align="top">
                <Block right={2}>
                  <Input
                    value={fields.dayOfBirth}
                    name="dayOfBirth"
                    label="Dag"
                    placeholder="01"
                    pattern="[0-9]*"
                    onChange={({ value }) => this.handleChange('dayOfBirth', value)}
                  />
                </Block>
                <Block right={2}>
                  <Input
                    value={fields.monthOfBirth}
                    name="monthOfBirth"
                    label="Måned"
                    placeholder="01"
                    pattern="[0-9]*"
                    onChange={({ value }) => this.handleChange('monthOfBirth', value)}
                  />
                </Block>
                <Block>
                  <Select
                    name="yearOfBirth"
                    label="År"
                    selected={fields.yearOfBirth}
                    options={yearOptions}
                    onChange={({ value }) => this.handleChange('yearOfBirth', value)}
                  />
                </Block>
              </Flex>
            </Block>

            <Block top={4}>
              <Radio
                name="keepHistory"
                label="Jeg vil lagre lånehistorikken"
                value="option1"
                checked={fields.keepHistory === "option1"}
                onChange={() => this.handleChange('keepHistory', "option1")}
              />
            </Block>
            <Block top={2}>
              <Radio
                name="keepHistory"
                label="Jeg ønsker ikke å lagre lånehistorikken min"
                value="option2"
                checked={fields.keepHistory === "option2"}
                onChange={() => this.handleChange('keepHistory', "option2")}
              />
            </Block>

            <Block top={4}>
              <Textarea
                value={fields.book}
                name="book"
                label="Skriv litt om din yndlingsbok"
                placeholder="Jeg liker ..."
                onChange={({ value }) => this.handleChange('book', value)}
                full
              />
            </Block>

            <Block top={4}>
              <Checkbox
                name="acceptedTerms"
                label="Jeg godtar vilkårene"
                checked={fields.acceptedTerms}
                onChange={() => this.handleChange('acceptedTerms', !fields.acceptedTerms)}
                full
              />
            </Block>

            <Block top={6}>
              <Button type="submit" primary onClick={() => {}}>
                Fortsett
              </Button>
            </Block>
          </form>
        </Block>
      </Container>
    );
  }
}

stories.add('Form', () => <FormExample />);
