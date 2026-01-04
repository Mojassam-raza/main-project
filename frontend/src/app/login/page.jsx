'use client';
import { useFormik } from 'formik';
import React from 'react';
import { Waveform } from 'ldrs/react';
import 'ldrs/react/Waveform.css';
import * as Yup from 'yup';
import axios from 'axios';
import toast from 'react-hot-toast';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('nhi hai'),
  password: Yup.string()
    .required('password khan hai')
});

const Login = () => {
  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: '',

    },
    onSubmit: (value, { resetForm }) => {
      console.log(value);
   
      // submit values to backend

      axios.post('http://localhost:5000/user/authenticate', value)
        .then((result) => {
          toast.success('login successfull')
          localStorage.setItem('token', result.data.token);
        }).catch((err) => {
          console.log(err);
          toast.error('Invalid Email or Passeord');
        });
    },
    validationSchema: LoginSchema,
  });

  return (
    <div className='bg-gray-900 min-h-screen pt-30'>
      <div className="max-w-lg mx-auto bg-white border border-gray-200 rounded-xl shadow-2xs">


        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800">Log In</h1>


            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Sign in</h1>
              <p className="mb-5 mt-2 text-sm text-gray-600 dark:text-neutral-500">
                Don't have an account yet?
                <a className="text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium dark:text-blue-500" href="../examples/html/signup.html">
                  Sign up here
                </a>
              </p>
            </div>
            <button type="button" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
              <svg className="w-4 h-auto" width="46" height="47" viewBox="0 0 46 47" fill="none">
                <path d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z" fill="#4285F4" />
                <path d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z" fill="#34A853" />
                <path d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z" fill="#FBBC05" />
                <path d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z" fill="#EB4335" />
              </svg>
              Sign in with Google
            </button>



            {/* Form */}
            <form onSubmit={loginForm.handleSubmit}>
              <div className="grid gap-y-4">

                {/* Email */}
                <div className='pt-8'>
                  <label htmlFor="email" className="block text-sm mb-2 text-left px-3 font-xl text-black">Email address</label>
                  <input
                    type="email"
                    id="email"
                    onChange={loginForm.handleChange}
                    value={loginForm.values.email}
                    className="border py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  {(loginForm.errors.email && loginForm.touched.email) && (
                    <p className="text-xs text-red-600 mt-2 px-4 text-left">{loginForm.errors.email}</p>
                  )}
                </div>

                {/* Password */}
                <div>
                  <label htmlFor="password" className="block text-sm mb-2 text-left px-3 font-xl text-black">Password</label>
                  <input
                    type="password"
                    id="password"
                    onChange={loginForm.handleChange}
                    value={loginForm.values.password}
                    className="border py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  {(loginForm.errors.password && loginForm.touched.password) && (
                    <p className="text-xs text-red-600 mt-2 px-4 text-left">{loginForm.errors.password}</p>
                  )}

                  <div className="flex items-center justify-between mt-3 px-3">
                    <label className="flex items-center space-x-2 text-sm text-gray-700">
                      <input type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                      <span>Remember me</span>
                    </label>
                    <a href="#" className="text-sm text-blue-600 hover:underline">
                      Forgot password?
                    </a>
                  </div>
                </div>


                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700"
                >
                  Log in
                </button>
                {/* <button
                  type="submit"
                  className="w-full py-3 px-5 bg-white-600 text-blue rounded-lg shadow hover:bg-white-700 focus:outline-hidden focus:bg-white-700"
                >
                  Create account
                </button> */}
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Example global vs local button styles (optional) */}
      {/* */}
      {/* <div>
        <button className='global-btn'>login global button</button>
        <button className={classes.localBtn}>local button</button>
      </div> */}

    </div>
  );
};

export default Login;