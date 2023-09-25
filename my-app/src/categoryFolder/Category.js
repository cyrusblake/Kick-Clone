import React from 'react'
import Header from '../HeaderFolder/Header'
import Sidebar from '../SideBarFolder/Sidebar'
import CategoryBody from '../CategoryBody/CategoryBody'
import './Category.css'
// import Body from '../BodyFolder/Body'

export default function Category(){
    return(
        <>
            <div>
                <Header/>
                <div className='app__cat'>
                    <Sidebar/>
                    <CategoryBody/>
                </div>
            </div>
           
           
        </>
    )
}