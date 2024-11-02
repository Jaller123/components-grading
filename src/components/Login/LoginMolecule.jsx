import React, { useState } from 'react';
import styles from './Login.module.css';
import UserAtom from './UserAtom';
import PasswordAtom from './PasswordAtom';
import LoginButtonAtom from './LoginButtonAtom';
import { loginUser } from '../api'

const LoginMolecule = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState()

  // Handle login click with basic validation
  const handleLogin = async () => {
    if (!username || !password) {
      setError('Username and password are required')
      return;
    }

    try {
      const data = await loginUser(username, password);
      setMessage(`Welcome ${data.user.username}!`)
      setError('')
    } catch(err) {
      setError(err.message || 'Incorrect Credentials');
      setMessage('');
    };
  }
  return (
    <div className={styles.container}>
      <UserAtom username={username} onUsernameChange={setUsername} />
      <PasswordAtom password={password} onPasswordChange={setPassword} />
      <LoginButtonAtom onClick={handleLogin} />
      {error && <div className={styles.errorText}>{error}</div>}
      {message && <div className={styles.successText}>{message}</div>}
    </div>
  );
};

export default LoginMolecule;
