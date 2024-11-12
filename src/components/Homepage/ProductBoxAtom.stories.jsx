import ProductBoxAtom from "./ProductBoxAtom";
import React from 'react';


export default {
    title: "Components/Homepage/ProductBox",
    component: ProductBoxAtom
}


const Template = (args) => <ProductBoxAtom {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Modern Sofa',
  image: 'https://via.placeholder.com/200',
  price: 499.99,  
};