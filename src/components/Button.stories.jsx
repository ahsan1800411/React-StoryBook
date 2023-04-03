import React from 'react';
import Button from './Button';
import { action, actions } from '@storybook/addon-actions';

export default {
  title: 'Form/Button',
  component: Button,
};

export const Primary = () => (
  <Button varient='primary' onClick={action('clicked')}>
    Primary
  </Button>
);
export const Danger = () => <Button varient='danger'>Danger</Button>;
export const Success = () => (
  <Button varient='success' {...actions('onClick', 'onMouseOver')}>
    Success
  </Button>
);
export const Secondary = () => (
  <Button varient='secondary' onClick={() => console.log('button Clicked')}>
    Secondary
  </Button>
);

// args are another way of defining the props but it's a much Simpler way and resuable at the same time
// A Decorator is a component that wraps a story
export const Template = (args) => <Button {...args} />;

export const PrimaryA = Template.bind({});

PrimaryA.args = {
  children: 'Primary Children',
  varient: 'primary',
};
