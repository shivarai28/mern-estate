import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Profile() {

const { currentUser} = useSelector((state)=>state.user)

  return (
    <div className='p-3 max-w-xl  mx-auto'>

    <h1 className='text-3xl text-center font-semibold'>Profile</h1>


    <form className='flex flex-col gap-3 items-center'>

      <img src={currentUser.avtar} alt="" className='rounded-full h-24 w-24  object-cover self-center cursor-pointer m-4 ' />

     <input type="text" className=" bg-slate-200 p-3 w-full rounded-lg outline-none " placeholder={currentUser.userName} id='userName'/>
      <input type="text" className="bg-slate-200 p-3 w-full  rounded-lg outline-none  " placeholder={currentUser.email} id='email'/>
      <input type="text" className="bg-slate-200 p-3 w-full rounded-lg outline-none " placeholder='Password' id='password'/>

     <button className="bg-slate-800 p-3 w-full rounded-lg mt-3">update</button>



    </form>
    <div className='flex items-center justify-between m-4'>
      <h3  className='hover:text-slate-600'>  <Link to='/delete'>Delete Account</Link></h3>
      <h3  className='hover:text-slate-600'>  <Link to ='/signout'>sign out</Link></h3>

    </div>

    </div>
  )
}
