/*
    Header
        -Logo
        -Nav Items
    Body
        -Search
        -Resturant Card
    Footer
        -Copyright
        -Links
        -Address
        -Contact

*/

import React from 'react'
import ReactDOM from 'react-dom/client'

const Header = ()=>
{
    return (
        <div className='header'>
            <div className='Logo-container'>
                <img src= 'https://img.pikbest.com/png-images/20250103/fast-food-chain-restaurant-illustration-logo-design-template_11336884.png!w700wp' alt='food items logo'></img>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const AppLayout = ()=>
{
    return (
        <div className='app'></div>
    )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header/>)