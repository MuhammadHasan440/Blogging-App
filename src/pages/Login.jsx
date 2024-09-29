import React from 'react';
import { useForm } from "react-hook-form";
import { loginUser } from '../config/firebase/firebasemethods';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const loginUserFromFirebase = async (data) => {
    try {
      const userLogin = await loginUser({
        email: data.email,
        password: data.password
      });
      console.log(userLogin);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <form 
        onSubmit={handleSubmit(loginUserFromFirebase)} 
        className="bg-white shadow-lg rounded-lg px-8 py-10 w-full max-w-md border border-gray-300"
      >
        <div className="mb-6">
          <h1 className="text-center text-4xl font-bold text-black">LOGIN</h1>
        </div>
        <div className="px-6 py-8">
          <label className="block mb-4">
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Email"
              className="input input-bordered w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-black"
            />
            {errors.email && <span className='text-red-600'>This field is required</span>}
          </label>
          <label className="block mb-4">
            <input
              {...register("password", { required: true })}
              type="password"
              placeholder="Password"
              className="input input-bordered w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-black"
            />
            {errors.password && <span className='text-red-600'>This field is required</span>}
          </label>
          <div className="text-center">
            <button
              type="submit"
              className="w-full py-3 bg-black text-white rounded-lg transition duration-300 hover:bg-gray-800"
            >
              LOGIN
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
