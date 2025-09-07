import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      if (email === 'kcare@gmail.com' && password === 'kcare@123') {
        // Simulate successful login by setting a token
        localStorage.setItem('token', 'dummy-auth-token');
        navigate('/dashboard');
      } else {
        setError('Invalid email or password');
      }
    } else {
      // For demo purposes, signup will also log the user in
      localStorage.setItem('token', 'dummy-auth-token');
      navigate('/dashboard');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-stone-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-display text-center text-stone-800">
          {isLogin ? 'Patient Portal Login' : 'Create Your Account'}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full px-4 py-2 border rounded-lg text-stone-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          )}
          <input
            type="email"
            placeholder="Email Address"
            required
            className="w-full px-4 py-2 border rounded-lg text-stone-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="w-full px-4 py-2 border rounded-lg text-stone-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-500 text-center">{error}</p>}
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-teal-500 rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
        <p className="text-center">
          <button onClick={() => setIsLogin(!isLogin)} className="text-teal-600 hover:underline">
            {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Login'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
