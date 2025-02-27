import React from 'react';
import styles from '../Login/Login.module.css';

const PasswordAtom = ({ password, onPasswordChange }) => {
    const handleChange = (e) => {
        const newValue = e.target.value;
        onPasswordChange(newValue);
    };

    return (
        <div>
            <label className={styles.label} htmlFor="password">Password</label>
            <input
                id="password"
                type="password"
                value={password}
                onChange={handleChange}
                className={styles.inputField}
                placeholder="Enter your password"
            />
        </div>
    );
};

export default PasswordAtom;
