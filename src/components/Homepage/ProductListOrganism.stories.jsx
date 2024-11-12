import React from 'react';
import ProductListOrganism from './ProductListOrganism';

export default {
  title: 'Components/Organism/ProductListOrganism',
  component: ProductListOrganism,
};

const Template = (args) => <ProductListOrganism {...args} />;

export const Default = Template.bind({});
Default.args = {};
