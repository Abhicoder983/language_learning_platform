import React, { useState } from 'react'
import './LoginSignup.css'
import user_icon from '../assets/person.png'
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'
import { Link, useNavigate } from 'react-router-dom'
import Chatabot from '../chatbot/Chatabot'
import { toast } from 'react-toastify';

const LoginSignup = () => {

  const [name, nameChange] = useState("");
  const [email, emailchange] = useState("");
  const [password, passwordchange] = useState("");

  const navigate = useNavigate();

  const IsValidate = () => {
    let isproceed = true;
    let errormessage = 'Please enter the value in';
    if (name === null || name === '') {
      isproceed = false;
      errormessage += ' username';
    }
    if (password === null || password === '') {
      isproceed = false;
      errormessage += ' password';
    }
    if (email === null || email === '') {
      isproceed = false;
      errormessage += ' email';
    }
    if (!isproceed) {
      toast.warning(errormessage)
    }
    return isproceed;
  }

  const handlesubmit = (e) => {

    e.preventDefault();

    let regobj = { email, password, name };
    // console.log(regobj);
    
    if (IsValidate()) {
      fetch("http://127.0.0.1:8000/language/", {
        method: "POST",
        headers: { 'content-type': 'application/json' },

        body: JSON.stringify(regobj)
        
      }
    
    ).then((res) => {
        toast.success('Registered Successfully.');
        navigate('/login');
      }).catch((err) => {
        toast.error('Failed :' + err.message);
      });
    }
  }

  return (
    <>

      <div className='login1'>
        <Chatabot />
        <form className='containerL' onSubmit={handlesubmit} >
          <div className="headerL">
            <div className="textL"> Sign up</div>
            <div className="underlineL"></div>
          </div>

          <div className="inputs">
            <div className="input">
              <img src={user_icon} alt="" />
              <input type="text" placeholder='Name' value={name} onChange={e => nameChange(e.target.value)} />
            </div>

            <div className="input">
              <img src={email_icon} alt="" />
              <input type="email" placeholder='Email Id' value={email} onChange={e => emailchange(e.target.value)} />
            </div>

            <div className="input">
              <img src={password_icon} alt="" />
              <input type="password" placeholder='Password' value={password} onChange={e => passwordchange(e.target.value)} />
            </div>
          </div>

          <div className='flex1'>
            <div className='sub1'>
              <button>Submit</button>
            </div>
            <Link to='/login' ><div className='sub2'>
              Old user
            </div></Link>
          </div>

        </form>


      </div>


    </>
  )
}


export default LoginSignup
