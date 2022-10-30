import React from "react"
// import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Homepage from "./pages/Homepage"
import Login from "./pages/Login"
import { Routes, Route } from "react-router-dom"
import "./styles/styles.css" //import styles.css檔  其他的css import進styles

function App() {
  return (
    <div className="App">
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
