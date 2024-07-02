import React, { useState } from "react"
import Head from './Head'
import "./header.css"
import { Link, useNavigate } from "react-router-dom"
import { useEffect } from "react"

const Header = () => {
  
  const usenavigate = useNavigate();
  const [click, setClick] = useState(false)
  useEffect(()=>{
    let username=sessionStorage.getItem('username');
    if(username==='' || username===null){
      usenavigate('/login');
    }
  },[]);



  return (
    <>
      <Head />

      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>

            <li>
              <Link to='/home'>Home</Link>
            </li>
            <li>
              <Link to='/courses'>All Courses</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/team'>Team</Link>
            </li>
            <li>
              <Link to='/pricing'>Pricing</Link>
            </li>
            <li>
              <Link to='/journal'>Journal</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <li>
              <Link to='/'>Logout</Link>
            </li>
          </ul>
          <div className='start'>
            <div className='button'>GET CERTIFICATE</div>
          </div>

          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>

        </nav>
      </header>
    </>
  )
}

export default Header
