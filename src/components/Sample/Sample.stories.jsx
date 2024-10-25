import React from 'react';
import Sample from './Sample';

export default {
  title: 'Components/Sample',
  component: Sample,
  parameters: {
    docs: {
      description: {
        component: 'This component uses a combination of CSS Modules for core styling and CSS-in-JS for dynamic styling based on props.',
      },
    },
  },
};

// Story: Default with valid prop
export const Default = {
  args: {
    text: "Hello, Storybook!",
    fontSize: 16,
  },
};

// Story: Large font size to test dynamic styling
export const LargeText = {
  args: {
    text: "Large Font Text",
    fontSize: 24,
  },
};

// Story: Invalid prop to trigger guard
export const InvalidProp = {
  args: {
    text: 123, // Invalid type to trigger error handling
  },
};