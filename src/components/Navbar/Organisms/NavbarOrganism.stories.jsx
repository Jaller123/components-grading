import React from 'react'
import NavbarOrganism from './NavbarOrganism';


export default {
    title: 'Components/Navbar/Organism/NavbarOrganism',
    component: NavbarOrganism,
}
export const Default = () => (
    <NavbarOrganism
      username="John Doe"
      onLogout={() => alert("Logged out and navigated to login page!")}
    />
  );