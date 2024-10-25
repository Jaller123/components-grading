import React from 'react';
import styles from './Login.module.css';

const UserAtom = ({ username, onUsernameChange }) => {
    const handleChange = (e) => {
        const newValue = e.target.value;
        onUsernameChange(newValue);
    };

    return (
        <div>
            <label className={styles.label} htmlFor="username">Username</label>
            <input
                id="username"
                type="text"
                value={username}
                onChange={handleChange}
                className={styles.inputField}
                placeholder="Enter your username"
            />
        </div>
    );
};

export default UserAtom;
