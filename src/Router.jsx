import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Services from './Services'
import ContactUs from './ContactUs'
import Others from './Others'


const RoutePage = () => {
  return (
    <Routes>
      <Route exact path='/' Component={Home} />
      <Route path='/service' Component={Services} />
      <Route path='/about' Component={About} />
      <Route path='/contactus' Component={ContactUs} />
      <Route path='/others' Component={Others} />
    </Routes>
  )
}

export default RoutePage
