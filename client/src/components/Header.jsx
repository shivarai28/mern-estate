import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Profile from '../pages/Profile';

export default function Header() {

 const { currentUser } = useSelector((state) => state.user);








  return (
    <header  className=' bg-slate-300 shadow-md p-1'>

        <div  className=" flex  justify-between items-center max-w-7xl mx-auto p-4">
            <h2 className='text-sm sm:text-xl font-bold flex flex-wrap '>
                <span className='text-slate-500 '>Shiv</span>
                <span className='text-slate-700'>Estate</span>
            </h2>

            <form action=""  className='hidden sm:flex  items-center  bg-slate-100 rounded-lg  p-3'>
                <input type="text" placeholder='Search...'  className='outline-none bg-transparent w-24 sm:w-64' />
                <button type='submit' className='text-slate-500 hover:text-slate-800'><FaSearch/></button>
            </form>

            <ul className='flex  gap-4 items-center'>
               <Link to={"/"}> <li className='text-xl font-medium hidden sm:inline text-slate-700 hover:text-slate-900'>Home</li></Link>
               <Link to={"/about"}> <li className='text-xl font-medium hidden sm:inline text-slate-700 hover:text-slate-900'>About</li></Link>
              
              {
                currentUser ?<Link to={"/profile"} > <img src={currentUser.avtar} alt=""  className='rounded-3xl w-12 h-12 cursor-pointer mx-2 object-cover '  /> </Link>:
                 <Link to={"/login"}> <li className='text-xl font-medium  text-slate-700 hover:text-slate-900'>Sign in </li></Link>
  
              }
              
                        </ul>

        </div>


    </header>
  )
}
