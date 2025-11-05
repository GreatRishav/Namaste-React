import React from 'react'
import ReactDOM from 'react-dom'
import {LOGO_URL} from '../../utils/constant'
import './style.css'
import {useState} from 'react';

    const styles = {
    "fontSize": '24px'
};

const Heading = ()=>
{
    const [loginButtonReact,setLoginButtonReact] = useState('Login');
    return (
        <div className='header' >
            <div className='Logo-container'>
                <img src= {LOGO_URL} alt='food items logo'></img>
            </div>
            <div className='nav-items'>
                <ul className='ul-list'>
                    <li style={styles}>Home</li>
                    <li style={styles}>About Us</li>
                    <li style={styles}>Contact Us</li>
                    <li style={styles}>Cart</li>
                    <li style={styles} className='Log-in' onClick={()=>
                        {
                            loginButtonReact === 'Login'?
                            setLoginButtonReact('Logout'):
                            setLoginButtonReact('Login');
                        }
                    }>{loginButtonReact}</li>
                </ul>
            </div>
        </div>
    )
}

export default Heading;