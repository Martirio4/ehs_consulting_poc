'use client'
import React, { useState, useEffect } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import firebaseApp from '../firebase'; // Import the initialized Firebase app
import { useRouter } from 'next/navigation'; // Import useRouter hook
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

function ClientLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();
  const [user, setUser] = React.useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    console.log("chequeando si hay user")
    const auth = getAuth(firebaseApp);
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user.email)
        setUser(user)
        router.push('/clients'); // Replace with your desired redirect path
      }
    });

    return () => unsubscribe(); // Cleanup function to remove event listener
  }, []);

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      console.log("intentando hacer login")
      const auth = getAuth(firebaseApp);
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (error) {
      setError(error.message);
      console.log(error.message)
    }
  };

  return (
    <div className="login-container flex flex-col items-center justify-start mt-[10vh] h-screen">
      { !user && ( // Check if user is null (not authenticated)
        <div className="login-form shadow-md rounded-lg p-8 bg-slate-100 max-w-md relative">
          <h2 className="text-2xl font-semibold text-center mb-6 text-slate-600" >Login</h2>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <form onSubmit={handleSignIn} className="flex flex-col space-y-4">
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-medium mb-2 text-slate-500">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="appearance-none rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
              />
            </div>
            <div className="relative flex flex-col items-center">
              <label htmlFor="password" className="text-sm font-medium mb-2 text-slate-500">Password:</label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="appearance-none rounded-md border border-gray-300 px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-transparent border-none p-0 m-0 cursor-pointer"
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-6 w-6 text-gray-400 mt-6" />
                ) : (
                  <EyeIcon className="h-6 w-6 text-gray-400 mt-6" />
                )}
              </button>
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-amber-300 py-2 text-center text-white font-medium hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-800 focus:ring-opacity-50"
            >
              Sign In
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default ClientLogin;


