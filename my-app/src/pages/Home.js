import React from 'react'
import Header from '../HeaderFolder/Header'
import Sidebar from '../SideBarFolder/Sidebar'
import HomeBody from '../HomeBody/HomeBody'
import './Home.css'
// import Body from '../BodyFolder/Body'

export default function Home(){
    return(
        <>
            <div>
                <Header/>
                <div className="app__main">
                    <Sidebar />
                    <HomeBody />
                    {/* <Body/> */}
                </div>
        
                {/* <BrowserRouter>
                <Routes>
                    <Route index element={<Login />} />
                    <Route path='Login' element={<Login />} />
                    <Route path='Home' element={<Home />} />
                </Routes>
                </BrowserRouter> */}
            </div>
        </>
    )
}