import React from 'react'
import './Cstyles.css';
import logo from '../logo.png'


function Navbar() {
  return (
    <>
    <nav>
      <div className="mock"></div>
      <div className="fixed">
        <div className="nav-content">
          <div><img src={logo} className='logo' /></div>
          <div className="desktop-only">
            <div className="search-guide">
              <span className="search-placeholder"><i class="fa fa-search"></i></span>
              <span className="search-placeholder">Search</span>
            </div>
          </div>
          <div>
            <button className="primary">Log In</button>
            <button className="secondary">Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar
