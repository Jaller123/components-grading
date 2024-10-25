import React, { useState } from 'react';
import styles from './Login.module.css';
import UserAtom from './UserAtom';
import PasswordAtom from './PasswordAtom';
import LoginButtonAtom from './LoginButtonAtom';

const LoginMolecule = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Handle login click with basic validation
  const handleLogin = () => {
    if (username === '' || password === '') {
      setError('Username and password cannot be empty.');
    } else {
      setError('');
      console.log(`Logging in with Username: ${username} and Password: ${password}`);
    }
  };

  return (
    <div className={styles.container}>
      <UserAtom username={username} onUsernameChange={setUsername} />
      <PasswordAtom password={password} onPasswordChange={setPassword} />
      <LoginButtonAtom onClick={handleLogin} />
      {error && <div className={styles.errorText}>{error}</div>}
    </div>
  );
};

export default LoginMolecule;
