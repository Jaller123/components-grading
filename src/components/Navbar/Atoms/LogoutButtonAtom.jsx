import React from "react";
import PropTypes from "prop-types";
import styles from "../Navbar.module.css";

const LogoutButtonAtom = ({ onLogout }) => (
  <button className={styles.logoutButton} onClick={onLogout}>
    Logout
  </button>
);

LogoutButtonAtom.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default LogoutButtonAtom;
