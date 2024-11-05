// src/components/Register/RegisterMolecule.jsx
import React, { useState } from 'react';
import styles from '../Login/Login.module.css'
import UserAtom from '../Input/UserAtom';
import PasswordAtom from '../Input/PasswordAtom';
import RegisterButtonAtom from './RegisterButtonAtom';
import { registerUser } from '../api';

const RegisterMolecule = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async () => {
    if (!username || !password) {
      setError('Username and password are required.');
      setMessage('');
      return;
    }

    try {
      const data = await registerUser(username, password);
      setMessage(data.message || 'New user registered successfully!');
      setError(''); // Clear any error
    } catch (err) {
      setError(err.message || 'Registration failed.');
      setMessage(''); // Clear any success message
    }
  };

  return (
    <div className={styles.container}>
      <UserAtom username={username} onUsernameChange={setUsername} />
      <PasswordAtom password={password} onPasswordChange={setPassword} />
      <RegisterButtonAtom onClick={handleRegister} label="Register" /> {/* Renamed button label */}
      {error && <div className={styles.errorText}>{error}</div>}
      {message && <div className={styles.successText}>{message}</div>}
    </div>
  );
};

export default RegisterMolecule;
