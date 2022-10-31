import React, { useState } from "react"
import { Link } from "react-router-dom"

const Nav = ({ search, setInput }) => {
  const inputHandler = (e) => {
    setInput(e.target.value)
  }
  return (
    <nav>
      <div className="logo">
        <img src="https://img.icons8.com/color/48/000000/pinterest--v1.png" />
      </div>
      <div className="search">
        <input onChange={inputHandler} type="text" placeholder="text" />
        <button onClick={search}>search</button>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
