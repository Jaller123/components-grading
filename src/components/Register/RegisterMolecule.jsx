// src/components/Register/RegisterMolecule.jsx
import React, { useState } from 'react';
import styles from '../Login/Login.module.css'
import UserAtom from '../Input/UserAtom';
import PasswordAtom from '../Input/PasswordAtom';
import RegisterButtonAtom from './RegisterButtonAtom';
import AlreadyHaveAnAccBtnAtom from './AlreadyHaveAccBtnAtom'
import backgroundImage from '../../assets/loginbg.jpeg';
import { registerUser } from '../api';

const RegisterMolecule = ({ onAlreadyHaveAccount }) => {
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
      localStorage.setItem('token', data.token)
      console.log('Token:', data.token)
      setMessage(data.message || 'New user registered successfully!');
      setError(''); // Clear any error
    } catch (err) {
      setError(err.message || 'Registration failed.');
      setMessage(''); // Clear any success message
    }
  };



  return (
  <div className={styles.background}
  style={{ backgroundImage: `url(${backgroundImage})` }}>
    <div className={styles.container}>
      <h1>Cartify</h1>
      <h4 className={styles.h4}>Please enter your desired credentials to create an account</h4>
      <UserAtom username={username} onUsernameChange={setUsername} />
      <PasswordAtom password={password} onPasswordChange={setPassword} />
      <RegisterButtonAtom onClick={handleRegister} label="Register" /> 
      <AlreadyHaveAnAccBtnAtom onClick={onAlreadyHaveAccount} label="AlreadyHaveAnAcc" />
      {error && <div className={styles.errorText}>{error}</div>}
      {message && <div className={styles.successText}>{message}</div>}
    </div>
  </div>
  );
};

export default RegisterMolecule;
