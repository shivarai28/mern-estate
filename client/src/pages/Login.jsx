import React, { use } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {signInStart,signInSuccess,signInFailure } from '../redux/user/user-slice.js';
import OAuth from '../components/OAuth.jsx';


export default function Login() {
  const [formData, setFormData] = useState({});
  const {loading,error} = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {

   setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  }

  const handleSumbit = async (e) => {
    e.preventDefault()

    try { 
    dispatch(signInStart());
      const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    const data = await res.json();
    console.log(data);

    if(data.success == false){
      dispatch(signInFailure(data.message));
      return;
    }
    dispatch(signInSuccess(data));
    navigate('/profile')

    }
     catch (error) {
      dispatch(signInFailure(error.message));
      return;
    }
   
  }


  return (
        <div className='max-w-lg p-3  mx-auto '>

   

      <h1  className='text-3xl font-semi-bold text-center p-2 my-7'>Login </h1>
      <form onSubmit={handleSumbit} className='flex flex-col gap-4 my-5  ' >
         <input type="email" placeholder='Email' id='email' onChange={handleChange} className='outline-none p-3 bg-slate-200 rounded-lg  focus:bg-slate-300' />
        <input type="password" placeholder='Password' id='password' onChange={handleChange}  className='outline-none bg-slate-200  p-3 rounded-lg  focus:bg-slate-300'/>
        <button  disabled={loading} type='submit' className='bg-slate-700 mt-5 p-3  rounded-md hover:bg-slate-950 hover:text-white'>
     {loading ? 'Loading...' : 'Login'}
          </button>
     <OAuth/>
      </form>

      <p className='mt-5 px-33'>Forgot Password?<Link to={'/login'} ></Link></p>

      {error && <p className='text-red-600 mt-5'>{error}</p>}
    </div>
  )
}
