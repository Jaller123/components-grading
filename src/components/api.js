// src/api.js

const API_URL = 'http://localhost:5000/api/auth';

/**
 * Registers a new user by sending a POST request to the backend.
 * @param {string} username - The username of the new user.
 * @param {string} password - The password of the new user.
 * @returns {Promise<object>} - The response data from the backend.
 * @throws {Error} - Throws an error if the registration fails.
 */

export const registerUser = async (username, password) => {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Registration failed');
    }


    return await response.json(); // Return response data on success
  Created-Login-Form
  } catch (error) {
    console.error("Registration error:", error.message);
    throw error;
  }
};


/**
 * Logs in a user by sending a POST request to the backend.
 * @param {string} username - The username of the user.
 * @param {string} password - The password of the user.
 * @returns {Promise<object>} - The response data from the backend, including token and user info.
 * @throws {Error} - Throws an error if the login fails.
 */

export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Login failed');
    }

;


  } catch (error) {
    console.error("Login error:", error.message);
    throw error;
  }
};
