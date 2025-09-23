import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
        <div className='max-w-lg p-3  mx-auto '>

   

      <h1  className='text-3xl font-semi-bold text-center p-2 my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4 my-5  ' >
        <input type="text" placeholder='Username'  className='outline-none  bg-slate-200 p-3 rounded-lg  focus:bg-slate-300 '/>
        <input type="email" placeholder='Email' className='outline-none p-3 bg-slate-200 rounded-lg  focus:bg-slate-300' />
        <input type="password" placeholder='Password'  className='outline-none bg-slate-200  p-3 rounded-lg  focus:bg-slate-300'/>
        <button type='submit' className='bg-slate-700 mt-5 py-2 mx-45 rounded-md hover:bg-slate-950 hover:text-white'>Register</button>
      </form>

      <p className='mt-5 px-33'>Already have an account?<Link to={'/login'} ><span className='text-blue-600 cursor-pointer'>Login</span></Link></p>


    </div>
  )
}
