import { BrowserRouter, Route, Routes } from "react-router-dom"
import React from "react"
import Calculadora from "../pages/Calculadora"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Calculadora/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
