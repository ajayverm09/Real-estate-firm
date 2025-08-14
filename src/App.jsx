import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Sales from './pages/Sales'
import Footer from './components/Footer'
import ChatWidget from './components/Chat'
import SalesProperty from './pages/SalesProperty'
import RentalDetail from './pages/RentalDetails'
import RentalList from './pages/RentalList'
import Agents from './pages/Agents'
import Contact from './pages/Contact'

function App() {

  return (
    <>
      <div>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/sales' element={<Sales/>}></Route>
          <Route path="/sales/:id" element={<SalesProperty />} />
          <Route path='/rental' element={<RentalList/>}></Route>
          <Route path='/rental/:id' element={<RentalDetail/>}></Route>
          <Route path='/agents' element={<Agents/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
        <ChatWidget/>
        <Footer/>
      </div>
    </>
  )
}

export default App
