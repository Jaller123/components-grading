import React from 'react';
import LoginButtonAtom from './LoginButtonAtom';

export default {
  title: 'Components/Login/LoginButtonAtom',
  component: LoginButtonAtom,
  parameters: {
    docs: {
      description: {
        component: 'A styled button component that triggers a login action, using CSS Modules for styling.',
      },
    },
  },
};

export const Default = {
  args: {
    onClick: () => alert('Login button clicked'),
  },
};
