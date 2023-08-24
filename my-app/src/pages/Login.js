import React from 'react';
import './Login.css'

export default function Login(){

    return(
        <>
            <div className="login">
                <div className="Login__body"> 
                    <div className="Login__Container">
                        <img src="" alt=""/>
                        <h3>Log in</h3>
                        <h3>Sign Up</h3>
                        <h4>Email or username</h4>
                        <input style={{color: 'white'}} type="text" placeholder="you@example.com" />{' '}
                        <h4>Password</h4>
                        <input style={{color: 'white'}} type="text" placeholder="" />{' '}
                        <button className='b1'>Log in</button>
                        <button className="b2">Log in with Google</button>
                        <button className="b3">Log in with Apple</button>
                    </div>
                    <div className="Login__IMG">
                        <img 
                        src="https://dbxmjjzl5pc1g.cloudfront.net/bdc232bd-f0ee-413c-92a5-4e4bf940beac/images/kick-signin-cover.jpg"
                        height="868"
                        width="440"        
                         alt=""/>
                    </div>
                </div>
            </div>
        </>
    )
}