import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router";
import Head from './Components/Head';
// import Navbar from './Components/Navbar';
const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Routes >
      <Route path='/'element ={<Head />} />
      {/* <Route path='/'element = {<Navbar />}/> */}
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App

