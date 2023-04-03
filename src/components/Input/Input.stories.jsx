import React from 'react';
import Input from './Input';

export default {
  title: 'Form/Input',
  component: Input,
};

export const Large = () => <Input size='large' placeholder='Large Input' />;
export const Small = () => <Input size='small' placeholder='Small Input' />;
export const Medium = () => <Input size='edium' placeholder='Medium Input' />;

// to rename a story
Small.storyName = 'Small Input';
