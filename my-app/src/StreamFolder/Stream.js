import React from 'react'
import './Stream.css'

const Stream = () => {
    return(
        <div className='stream'>
            <div className="stream__container">
                <div className='stream__status'>
                    <div className="stream__statusContainer">
                        <div className="stream__statusContainerTop">
                            <div className="stream__statusIndicator">OFFLINE</div>
                            <h2>Check out the below streams from CYFI</h2>
                        </div>
                        <div className="stream__statusInfo">
                            <i className='fas fa-bell'></i>
                            <p>You will get a notification when CYFI is live</p>
                        </div>
                    </div>
                </div>
                <div className="stream__videoEmbed">
                    <iframe
                        width="500"
                         hight="295"
                        src="https://player.kick.com/cyrusblake89" 
                        frameborder="0"
                        scrolling="no" 
                        allowfullscreen="true"

                    >
                   
                    </iframe>

                </div>
            </div>
        </div>
    )
}

export default Stream