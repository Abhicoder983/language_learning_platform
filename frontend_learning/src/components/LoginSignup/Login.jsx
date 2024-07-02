import React, { useState } from 'react'
import user_icon from '../assets/person.png'
import password_icon from '../assets/password.png'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import './LoginSignup.css'
import { useEffect } from 'react';

const Login = () => {

    const [username, usernameupdate] = useState("");
    const [password, passwordupdate] = useState("");

    const usenavigate = useNavigate();

    useEffect(()=>{
        sessionStorage.clear();
       },[]);
   
    const ProceedLogin = (e) => {
        e.preventDefault();
        if (validate()) {
            // console.log('gfhfuyfj');
            fetch("http://127.0.0.1:8000/language/" + username).then((res) => {
                return res.json();
            }).then((resp) => {
                //console.log(resp)
                if (Object.keys(resp).length === 0) {
                    toast.error('please enter valid username');
                } else {
                    if (resp.password === password) {
                        toast.success('Success');
                        sessionStorage.setItem('username',username);
                        usenavigate('/home')
                    } else {
                        toast.error('please enter valid credentials');
                    }
                }
            }).catch((err) => {
                toast.error('login failed due to :' + err.message);
            });
        }
    }

    const validate = () => {
        let result = true;
        if (username === '' || username === null) {
            result = false;
            toast.warning('please enter username');
        }
        if (password === '' || password === null) {
            result = false;
            toast.warning('please enter password');
        }
        return result;
    }

    return (

        <center>
            <div className='login2'>
                <form className='containerL' onSubmit={ProceedLogin} >
                    <div className="headerL">
                        <div className="textL"> Login</div>
                        <div className="underlineL"></div>
                    </div>

                    <div className="inputs">

                        <div className="input">
                            <img src={user_icon} alt="" />
                            <input type="text" placeholder='Name' value={username} onChange={e => usernameupdate(e.target.value)} />
                        </div>

                        <div className="input">
                            <img src={password_icon} alt="" />
                            <input type="password" placeholder='Password' value={password} onChange={e => passwordupdate(e.target.value)} />
                        </div>
                    </div>
                    <div className='flex1'>
                        <div className='sub1'>
                            <button>Submit</button>
                        </div>
                        <Link to='/' ><div className='sub2'>
                            New user
                        </div></Link>

                    </div>



                </form>
            </div>


        </center>

    )
}

export default Login
