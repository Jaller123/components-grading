import React from 'react';
import SocialIconAtom from './SocialIconAtom';
import FacebookIcon from '../../../assets/Facebook.png';
import InstagramIcon from '../../../assets/Instagram.png';
import TwitterIcon from '../../../assets/Twitter.png';
import LinkedInIcon from '../../../assets/LinkedIn.png';

export default {
    title: 'Components/Footer/Atoms/SocialIconAtom',
    component: SocialIconAtom,
};

export const Facebook = () => (
    <SocialIconAtom icon={FacebookIcon} alt="Facebook" />
);

export const Instagram = () => (
    <SocialIconAtom icon={InstagramIcon} alt="Instagram" />
);

export const Twitter = () => (
    <SocialIconAtom icon={TwitterIcon} alt="Twitter" />
);

export const LinkedIn = () => (
    <SocialIconAtom icon={LinkedInIcon} alt="LinkedIn" />
);
