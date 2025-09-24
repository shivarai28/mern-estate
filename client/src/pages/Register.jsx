import React, { use } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import OAuth from '../components/OAuth';


export default function Register() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {

   setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  }

  const handleSumbit = async (e) => {
    e.preventDefault()

    try { 
      setLoading(true)
      const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    const data = await res.json();
    console.log(data);

    if(data.success == false){
      setLoading(false)
      setError(data.message)
      return;
    }
    setLoading(false)
    setError(null)
    navigate('/login')

    }
     catch (error) {
      setError(error.message)
      setLoading(false)
      console.log(data);
      return;
    }
   
  }


  return (
        <div className='max-w-lg p-3  mx-auto '>

   

      <h1  className='text-3xl font-semi-bold text-center p-2 my-7'>Sign Up</h1>
      <form onSubmit={handleSumbit} className='flex flex-col gap-4 my-5  ' >
        <input type="text" placeholder='Username' id='userName' onChange={handleChange}  className='outline-none  bg-slate-200 p-3 rounded-lg  focus:bg-slate-300 '/>
        <input type="email" placeholder='Email' id='email' onChange={handleChange} className='outline-none p-3 bg-slate-200 rounded-lg  focus:bg-slate-300' />
        <input type="password" placeholder='Password' id='password' onChange={handleChange}  className='outline-none bg-slate-200  p-3 rounded-lg  focus:bg-slate-300'/>
        <button  disabled={loading} type='submit' className='bg-slate-700 mt-5 p-3  rounded-md hover:bg-slate-950 hover:text-white'>
     {loading ? 'Registering...' : 'Register'}
          </button>
      <OAuth/>
      </form>

      <p className='mt-5 px-33'>Already have an account?<Link to={'/login'} ><span className='text-blue-600 cursor-pointer'>Login</span></Link></p>

      {error && <p className='text-red-600 mt-5'>{error}</p>}
    </div>
  )
}
