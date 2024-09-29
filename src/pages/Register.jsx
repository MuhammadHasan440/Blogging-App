import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { signUpUser, uploadImage } from '../config/firebase/firebasemethods';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const registerUserFromFirebase = async (data) => {
    if (data.profileimage.length > 0) {
      const userProfileImageUrl = await uploadImage(data.profileimage[0], data.email);

      try {
        const userData = await signUpUser({
          fullname: data.fullname,
          email: data.email,
          password: data.password,
          profileImage: userProfileImageUrl,
        });
        console.log('User Registered Successfully:', userData);
        reset();
        setSelectedFile(null);
        navigate('/login');
      } catch (error) {
        console.error('Error registering user:', error);
      }
    } else {
      console.error('Profile image is required');
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file ? file.name : null);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <form onSubmit={handleSubmit(registerUserFromFirebase)} className="bg-white shadow-lg rounded-lg px-8 py-10 w-full max-w-md border border-gray-300">
        <div className="mb-6">
          <h1 className="text-center text-4xl font-bold text-black">REGISTER</h1>
        </div>
        <div className="border rounded-3xl px-6 py-8 bg-gray-100 border-gray-300">
          <label className="block mb-4">
            <input
              {...register("fullname", { required: true })}
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-gray-600"
            />
            {errors.fullname && <span className='text-red-600'>This field is required</span>}
          </label>
          <label className="block mb-4">
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Email"
              className="input input-bordered w-full px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-gray-600"
            />
            {errors.email && <span className='text-red-600'>This field is required</span>}
          </label>
          <label className="block mb-4">
            <input
              {...register("password", { required: true })}
              type="password"
              placeholder="Password"
              className="input input-bordered w-full px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-gray-600"
            />
            {errors.password && <span className='text-red-600'>This field is required</span>}
          </label>
          <label className="block mb-5 relative">
            <input
              {...register("profileimage", { required: true })}
              type="file"
              onChange={handleFileChange}
              className="absolute inset-0 opacity-0 cursor-pointer" // Hide the input
            />
            <span className="flex justify-center items-center w-full max-w-xs bg-gray-700 text-white py-2 rounded-lg text-center cursor-pointer">
              Choose File
            </span>
            {errors.profileimage && <span className='text-red-600'>This field is required</span>}
            {selectedFile ? (
              <p className="mt-2 text-green-600">Selected file: {selectedFile}</p>
            ) : (
              <p className="mt-2 text-red-600">No file chosen</p>
            )}
          </label>
          <div className="text-center">
            <button
              type="submit"
              className="w-full py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition duration-200"
            >
              REGISTER
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
