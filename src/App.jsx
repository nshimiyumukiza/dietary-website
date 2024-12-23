import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router";
import Head from './Components/Head';
const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Routes >
      <Route path='/'element ={<Head />} />
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App

