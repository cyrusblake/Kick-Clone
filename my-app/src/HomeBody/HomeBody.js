import React from 'react'
import './HomeBody.css'
import RecentItem from '../RecentFolder/RecentItem'
import { Link } from 'react-router-dom'


const HomeBody = () => {
    return (
        <div className="homebody">
            <div className="contents">
                <h2>Featured Streams</h2>
                <div className='hprofile__recentItems'>
                    
                    <RecentItem
                        url={'https://player.kick.com/cyrusblake89'}
                        title={'Grinding to Ranked'}
                    />
                    <RecentItem
                        url={'https://player.kick.com/cyrusblake89'}
                        title={'Grinding to Ranked'}
                    />
                    
                </div>
                <div className="hv">
                    <div>
                        <h2>Top Live Categories</h2>
                    </div> 
                    <div className="hvp">
                        <p>
                            <Link className="" to='/Category'>
                                View all
                            </Link>
                        </p>
                    </div>     
                </div>
                

                <div className="categories">

                    <div className="itemdetails">
                        <img src="https://files.kick.com/images/subcategories/15/banner/responsives/8f43401b-0d59-4802-8f70-cd5e259adc9b___banner_293_391.webp" alt=""/>
                        <div className="item__detailsText">
                            <h3>Just Chatting</h3>
                            <p>39,704</p>
                            <p>IRL</p>
                        </div>
                    </div>

                    <div className="itemdetails">
                        <img src="https://files.kick.com/images/subcategories/28/banner/responsives/5d5a7c84-0791-4e4c-9e9e-2ff031c88f8f___banner_294_392.webp" alt=""/>
                        <div className="item__detailsText">
                            <h3>Slots & Casino</h3>
                            <p>39,704</p>
                            <p>IRL</p>
                        </div>
                    </div>

                    <div className="itemdetails">
                        <img src="https://files.kick.com/images/subcategories/8/banner/responsives/8110f223-9654-4536-bfee-6a324bbf03f9___banner_205_273.webp" alt=""/>
                        <div className="item__detailsText">
                            <h3>Grand Theft Auto</h3>
                            <p>39,704</p>
                            <p>IRL</p>
                        </div>
                    </div>

                    <div className="itemdetails">
                        <img src="https://files.kick.com/images/subcategories/4/banner/responsives/39a1b85d-ab36-4dcb-a928-0ed66f2134d4___banner_245_327.webp" alt=""/>
                        <div className="item__detailsText">
                            <h3>Call of Duty: War..</h3>
                            <p>39,704</p>
                            <p>IRL</p>
                        </div>
                    </div>

                    <div className="itemdetails">
                        <img src="https://files.kick.com/images/subcategories/3/banner/responsives/a12b84e6-f2fd-43a3-9c2b-30173fc42f66___banner_245_327.webp" alt=""/>
                        <div className="item__detailsText">
                            <h3>Fortnite</h3>
                            <p>39,704</p>
                            <p>IRL</p>
                        </div>
                    </div>

                    <div className="itemdetails">
                        <img src="https://files.kick.com/images/subcategories/16/banner/responsives/803cea32-1ef3-4620-8731-f3cdcf8b6206___banner_245_327.webp" alt=""/>
                        <div className="item__detailsText">
                            <h3>Pools Hot Tubs</h3>
                            <p>39,704</p>
                            <p>IRL</p>
                        </div>
                    </div>
                    
                </div>
                <img className="merch" src="https://dbxmjjzl5pc1g.cloudfront.net/2c658949-18b2-42a7-bb92-90fe4d5602d3/images/banners/merch_banner.jpg" alt=""/>
                <h2>Top Live Groups</h2>
                <div className="groups">
                    <img src="https://dbxmjjzl5pc1g.cloudfront.net/c3617eac-3ff6-4fe8-bab8-dd37bd5c745f/images/categories/games.gif" alt=""/>
                    <img src="https://dbxmjjzl5pc1g.cloudfront.net/c3617eac-3ff6-4fe8-bab8-dd37bd5c745f/images/categories/irl.gif" alt=""/>
                    <img src="https://dbxmjjzl5pc1g.cloudfront.net/c3617eac-3ff6-4fe8-bab8-dd37bd5c745f/images/categories/music.gif" alt=""/>
                    <img src="https://dbxmjjzl5pc1g.cloudfront.net/c3617eac-3ff6-4fe8-bab8-dd37bd5c745f/images/categories/gambling.gif" alt=""/>
                    <img src="https://dbxmjjzl5pc1g.cloudfront.net/c3617eac-3ff6-4fe8-bab8-dd37bd5c745f/images/categories/creative.gif" alt=""/>
                    <img src="https://dbxmjjzl5pc1g.cloudfront.net/c3617eac-3ff6-4fe8-bab8-dd37bd5c745f/images/categories/alternative.gif" alt=""/>
                </div>
            </div>
           
           
        </div>
    )
}

export default HomeBody