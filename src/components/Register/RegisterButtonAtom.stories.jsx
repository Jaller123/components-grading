import React from 'react';
import RegisterButtonAtom from './RegisterButtonAtom';

export default {
  title: 'Components/Login/RegisterButtonAtom',
  component: RegisterButtonAtom,
  parameters: {
    docs: {
      description: {
        component: 'A styled button component that triggers a Register action, using CSS Modules for styling.',
      },
    },
  },
};

export const Default = {
  args: {
    onClick: () => alert('Register button clicked'),
  },
};
