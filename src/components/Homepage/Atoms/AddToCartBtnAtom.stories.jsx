import React from 'react';
import AddToCartButtonAtom from './AddToCartBtnAtom';

export default {
  title: 'Components/Homepage/Atoms/AddToCartBtnAtom',
  component: AddToCartButtonAtom,
  parameters: {
    docs: {
      description: {
        component: 'A styled button component that triggers adding a product to the cart action, using CSS Modules for styling.',
      },
    },
  },
};

export const Default = {
  args: {
    onClick: () => alert('Add to cart button clicked'),
  },
};
