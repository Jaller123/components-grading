import React from 'react';
import styles from '../Checkout.module.css';
import trashicon from '../../../assets/trash.png'; 
const TrashIconAtom = ({ onClick }) => {
    return (
        <div className={styles.trashIcon} onClick={onClick} role="button" aria-label="Remove item">
            <img src={trashicon} alt="Remove" className={styles.trashIconImage} />
        </div>
    );
};

export default TrashIconAtom;

