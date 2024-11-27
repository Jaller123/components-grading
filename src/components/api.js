const AUTH_API_URL = 'http://localhost:5000/api/auth';
const PRODUCTS_API_URL = 'http://localhost:5000/api/products'

const getToken = () => {
  return localStorage.getItem('token');
};

const getAuthHeader = () => {
  const token = getToken()
  return token ? { 'x-auth-token' : token } : {}
};

export const registerUser = async (username, password) => {
  try {
    const response = await fetch(`${AUTH_API_URL}/register`, {
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

    return await response.json(); 

  } catch (error) {
    console.error("Registration error:", error.message);
    throw error;
  }
};


export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${AUTH_API_URL}/login`, {
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

    return await response.json(); 
  } catch (error) {
    console.error("Login error:", error.message);
    throw error;
  }
};

export const getProducts = async () => {
  try {
    const response = await fetch(PRODUCTS_API_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...getAuthHeader(), 
      },
    });

    if(!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to fetch products');
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching products", error.message);
    throw error;
  }
};