import React from 'react'
import './RecentItem.css'

const RecentItem = ({url, title}) => {
    return (
        <div className='item'>
            <iframe 
            width="400" 
            height="235" 
            src={url}
            title="How I&#39;d Learn Full-Stack Web Development (If I Could Start Over)" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen></iframe>
            <div className="item__details">
                <img src="https://files.kick.com/images/subcategories/5/banner/responsives/lol___banner_351_468.webp" alt=""/>
                <div className="item__detailsText">
                    <h4>{title}</h4>
                    <p>CYFI</p>
                    <p>League of Legends</p>
                </div>

            </div>
        </div>

        
    )
}

export default RecentItem