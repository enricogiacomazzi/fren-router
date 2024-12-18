import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, Link, NavLink } from 'react-router'
import { Home } from './pages/Home'
import { Bio } from './pages/Bio'
import { HomeLayout } from './layouts/HomeLayout'

const App = () => {

  function navStyle(val) {
    if(val.isActive) {
      return 'active';
    }

    return 'non-active';
  } 

  return (
    <>
      <NavLink to="/" className={navStyle}>Home</NavLink>
      <br/>
      <NavLink to="/pippo" className={navStyle}>Bio</NavLink>
      <Routes>
        <Route element={<HomeLayout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/uno" element={<h1>AAAAAAAA ciao</h1>} />
        </Route>

        <Route path="/pluto">
          <Route index element={<h1>Pluto</h1>} />
          <Route path="pippo/:nome" element={<Bio />} />
        </Route>


        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    
    </>

  )
}

export default App
