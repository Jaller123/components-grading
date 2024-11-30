import React from 'react';
import OrderComplete from './OrderComplete';

export default {
  title: 'Components/OrderComplete',
  component: OrderComplete,
};

export const Default = () => (
  <OrderComplete
    username="Guest"
    onReturnToHomepage={() => alert('Returning to Homepage')}
  />
);
