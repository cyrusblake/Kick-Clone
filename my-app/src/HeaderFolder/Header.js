import React from "react"
import "../HeaderFolder/Header.css"
import { Avatar } from "@mui/material"




const Header = () => {

    let logo = require('../HeaderFolder/Kick_logo.svg.png')
    return (
        <div className="header"> 
            <div className="header__left">
                <p></p>
                <img className="hear__leftLogo"
                src={logo} width="100px" alt="kick logo"/>
                <h2>Following</h2>
                <h2>Browse</h2>
                <div className="header__vl"></div>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,700,0,-25" />
                <span className="material-symbols-outlined">more_vert</span>
            </div>

            <div className="header__center">
                
                <div className="header__CLC">
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,700,0,-25" />
                    <span className="material-symbols-outlined">
                        search
                    </span>

                </div>
                <input style={{color: 'white'}} type="text" placeholder="Search" />{' '}
            </div>

            <div className="header__right">
                <div className="header__rightContainer">
                    <Avatar />
                </div>
            </div>
        </div>
    )
}

export default Header