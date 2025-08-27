import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import './register.css';

const Register = () => {
  const { register } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const phoneRegex = /^[0-9]{10}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (!phoneRegex.test(phone)) {
      setError('Invalid phone number. Please enter a 10-digit number.');
      return;
    }
    if (!emailRegex.test(email)) {
      setError('Invalid email address.');
      return;
    }

    try {
      const newUser = { username, email, password, phone, city, country };
      
      const response = await axios.post('http://localhost:8800/api/auth/register', newUser);

      if (response.status === 201) {
        register(response.data.user);
        toast.success('User created successfully!');
        navigate('/login');
      } else {
        setError(response.data.message || 'Registration failed');
      }
    } catch (error) {
      if (error.response && error.response.status !== 201) {
        setError(error.response.data.message || 'Registration failed');
      } else {
        // If the error response status is 201, it means the user was created successfully
        toast.success('User created successfully!');
        navigate('/login');
      }
    }
  };

  return (
    <div className="register">
      <div className="registerContainer">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
          
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="full-width"
          />
          {error && emailRegex.test(email) === false && <div style={{ color: 'red' }}>Invalid email address.</div>}
          
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="full-width"
          />
          
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
            className="full-width"
          />
          {error && password !== confirmPassword && <div style={{ color: 'red' }}>Passwords do not match</div>}
          
          <label>Phone:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone number"
          />
          {error && phoneRegex.test(phone) === false && <div style={{ color: 'red' }}>Invalid phone number. Please enter a 10-digit number.</div>}
          
          <label>City:</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter your city"
          />
          
          <label>Country:</label>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="Enter your country"
          />

          {error && <div style={{ color: 'red' }}>{error}</div>}
          
          <button type="submit" className="full-width">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
