import React from 'react'
import Profile from '../ProfileFolder/Profile'
import Stream from '../StreamFolder/Stream'
import './Body.css'

const Body = () => {
    return (
        <div className="body">
            <div className="body__left">
                <Stream/>
                <Profile/>
            </div>
            <div className="body__right">

            </div>
        </div>
    )
}

export default Body