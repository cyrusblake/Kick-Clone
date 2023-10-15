import React from 'react';
import './Login.css'
import {Link} from 'react-router-dom'

export default function Login(){

    function togglePopup(){
        document.getElementById("popup-1").classList.toggle("active");
    }

    return(
        <>
            <div className="popup" id="popup-1">
                <div className="overlay"></div>
                <div className="popup_content">
                    <div className="close-btn " onClick={togglePopup}>&times;</div>
                    <h1 className='ih1'>Log in to Contor</h1>
                    
                    <form>
                        <div className='uu'>
                            <p>Username</p>
                            <input className="userI" placeholder='Enter Username'/>
                        </div>
                        <div className='up'>
                            <p>Password</p>
                            <input className="userI" placeholder='Enter Password' />
                        </div>
                        <button type="submit" className='lb'>Log In</button> 
                        </form>
                        <Link to='/SignUp' className="b-btn">Don't have an account? Sign Up</Link>
                </div>
             </div>
        <h3 className="sh3" onClick={togglePopup}>View Definition</h3>
        </>
    )
}