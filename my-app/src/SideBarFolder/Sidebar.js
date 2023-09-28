import React from 'react'
import Channel from '../ChannelFolder/Channel'
import '../SideBarFolder/Sidebar.css'

const Sidebar = () => {

    return(
        <div className="sidebar">
            <div className="sidebar__top">
                <h5>Following</h5>
                <Channel avatar='https://static-cdn.jtvnw.net/jtv_user_pictures/6458f34e-0b0d-4214-9ee3-84490c705075-profile_image-70x70.png' name='CYFI' 
                followers=''>
                </Channel>
                <h5>Recommended</h5>
                <Channel avatar='https://static-cdn.jtvnw.net/jtv_user_pictures/6458f34e-0b0d-4214-9ee3-84490c705075-profile_image-70x70.png' name='CYFI' followers=''/>
                <p className='sidebar__TSM'>Show More</p>
            </div>
            {/* <div className="sidebar__bottom">
                <div className="sidebar__bottomContainer">
                <div className="header__CLC">
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,700,0,-25" />
                    <span className="material-symbols-outlined">
                        search
                    </span>

                </div>
                <input style={{color: 'white'}} type="text" placeholder="Search" />{' '}
                </div>
            </div> */}
            

        </div>
    )
}

export default Sidebar