import React from 'react'
import '../ChannelFolder/Channel.css'
import {Link} from 'react-router-dom'

const Channel = ({avatar, name, followers}) => {
    return (
        <div className='channel'>
            <div className="channel__details">
                <img src={avatar} alt="avatar" />

                <Link className='theLink' to='/ProfilePage'>
                    <p>{name}</p>
                </Link>
                 
            </div>
            <p>{followers}</p>

           
            
            
        </div>
    )
}

export default Channel