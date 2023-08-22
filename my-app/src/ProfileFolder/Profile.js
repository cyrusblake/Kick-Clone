import React from 'react'
import './Profile.css'
import RecentItem from '../RecentFolder/RecentItem'


const Profile = () => {
    return (
        <div className='profile'>
            <div className="profile__topLeft">
                <img src="https://files.kick.com/images/user/3259960/profile_image/conversion/4ad636d8-277e-471d-84aa-6feb52e15e21-fullsize.webp" alt=""/>
                <div className="profile__TLD">
                    <h1>CYFI</h1>
                    <h3>0k followers</h3>
                </div>
            </div>
            <div className="profile__topRight">
                <i className='fas fa-heart graybg'></i>
                <i className='fas fa-bell graybg'></i>
                <i className='fas fa-ellipsis-v'></i>
            </div>
            <div className="profile__menu">
                <h2 className='active'>About</h2>
                <h2>Videos</h2>
                <h2>Clips</h2>
                <h2><i className="fas fa-arrow-up"></i></h2>
                <h2>Chat</h2>
            </div>
            <div className="profile__recent">
                <h2>Recent broadcasts</h2>
                <div className='profile__recentItems'>
                    <RecentItem
                        url={'https://player.kick.com/cyrusblake89'}
                        title={'Grinding to Ranked'}
                    />
                </div>
            </div>
        </div>
    )
}

export default Profile