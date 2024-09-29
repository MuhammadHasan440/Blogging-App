import React from 'react';
import { auth, signOutUser } from '../config/firebase/firebasemethods';

const Logout = () => {

  const userLogout = () => {
    signOutUser(auth)
      .then((message) => {
        console.log(message);
        console.log('Successfully logged out');
      })
      .catch((error) => {
        console.error("Sign out failed: ", error);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <div className="my-6 p-6 border-4 border-gray-300 rounded-lg shadow-lg bg-white">
        <h1 className="text-5xl font-bold text-black text-center">
          Logout
        </h1>
        <p className="mt-4 text-gray-700 text-center">
          Are you sure you want to logout?
        </p>
      </div>
      <button 
        onClick={userLogout} 
        type="button" 
        className="w-full max-w-md py-3 bg-black text-white rounded-lg shadow-md hover:bg-gray-800 transition duration-200"
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
