import React from 'react';
import SocialIconAtom from './SocialIconAtom';
import styles from './Footer.module.css';


import FacebookIcon from '../../assets/Facebook.png';
import InstagramIcon from '../../assets/Instagram.png';
import TwitterIcon from '../../assets/Twitter.png';
import LinkedInIcon from '../../assets/LinkedIn.png';

const socialIcons = [
    { icon: FacebookIcon, alt: 'Facebook' },
    { icon: InstagramIcon, alt: 'Instagram' },
    { icon: TwitterIcon, alt: 'Twitter' },
    { icon: LinkedInIcon, alt: 'LinkedIn' },
];

const SocialMediaMolecule = () => (
    <div className={styles.icons}>
        {socialIcons.map((iconData, index) => (
            <SocialIconAtom key={index} icon={iconData.icon} alt={iconData.alt} />
        ))}
    </div>
);

export default SocialMediaMolecule;
