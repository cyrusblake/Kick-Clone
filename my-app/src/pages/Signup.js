import React from 'react';
import './Signup.css'
import {Link} from 'react-router-dom'

export default function Login(){

    function togglePopup(){
        document.getElementById("popup-2").classList.toggle("active");
    }

    return(
        <>
            <div className="popup" id="popup-2">
                <div className="overlay"></div>
                <div className="popup_content">
                    <div className="close-btn " onClick={togglePopup}>&times;</div>
                    <h1 className='sh1'>Sign up to Kick</h1>
                    
                    <form>
                        <div className='uu'>
                            <p>Username</p>
                            <input className="userI" placeholder='Enter Username'/>
                        </div>
                        <div className='up'>
                            <p>Password</p>
                            <input className="userI" placeholder='Enter Password' />
                        </div>
                        <button type="submit" className='sb'>Sign up</button> 
                    </form>
                    <Link to='/SignUp' className="b-btn">Have an account already? Log In</Link>
                </div>
             </div>
        <h3 className="sh3" onClick={togglePopup}>
            Sign Up
        </h3>
        </>
    )
}