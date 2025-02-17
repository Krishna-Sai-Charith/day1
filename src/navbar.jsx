import React from 'react'
import './navbar.css';

const navbar = () => {
  return (
    <div id='main'>
        <div id='logo'>
          <h2>Startup</h2>
        </div>
        <div id='elem'>
            <span>Home</span>
            <span>About</span>
            <span>Blog</span>
            <span>Support</span>
            <span> Pages</span> 
        </div>
        <div id='btns'>
            <button>Sign in</button>
            <button>Sign Up</button>

        </div>
    </div>
  )
}

export default navbar