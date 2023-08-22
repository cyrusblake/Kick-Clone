import React from 'react';
import Header from '../HeaderFolder/Header';
import Sidebar from '../SideBarFolder/Sidebar'

export default function Home(){
    return(
        <>
            <div className="home">
                <Header />
                <Sidebar />
            </div>
        </>
    )
}