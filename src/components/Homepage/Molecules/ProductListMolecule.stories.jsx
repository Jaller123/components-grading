import React from 'react';
import ProductListMolecule from './ProductListMolecule';

export default {
  title: 'Components/Homepage/Molecules/ProductListMolecule',
  component: ProductListMolecule,
};

const Template = (args) => <ProductListMolecule {...args} />;

export const Default = Template.bind({});
Default.args = {
  products: [
    { id: 1, title: 'Modern Sofa', price: 499.99, image: 'https://via.placeholder.com/200' },
    { id: 2, title: 'Dining Table', price: 299.99, image: 'https://via.placeholder.com/200' },
    { id: 3, title: 'Office Chair', price: 149.99, image: 'https://via.placeholder.com/200' },
  ],
};
