
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import Header from './components/Header'
import PrivateRoutes from './components/privateRoutes'



function App() {
  return (
    <BrowserRouter>
      <Header /> 
    
      
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />   

      <Route element ={<PrivateRoutes/>}>
      <Route path = '/profile' element = {<Profile/>} />
      </Route>
      
      <Route path = '/login' element = {<Login />} />
      <Route path = '/register' element = {<Register/>} />
      <Route path = '*' element = {<NotFound/>} />
   </Routes>


</BrowserRouter>

    
  )
}

export default App