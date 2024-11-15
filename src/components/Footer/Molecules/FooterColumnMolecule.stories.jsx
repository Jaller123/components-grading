import React from 'react';
import FooterColumnMolecule from './FooterColumnMolecule';

export default {
    title: 'Components/Footer/Molecules/FooterColumnMolecule',
    component: FooterColumnMolecule,
};

const companyLinks = ['Careers', 'Our Story', 'Terms and Conditions'];

export const CompanyColumn = () => (
    <FooterColumnMolecule title="Company" links={companyLinks} />
);
