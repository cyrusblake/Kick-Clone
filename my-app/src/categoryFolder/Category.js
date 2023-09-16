import React from 'react'
import Header from '../HeaderFolder/Header'
import Sidebar from '../SideBarFolder/Sidebar'
import HomeBody from '../HomeBody/HomeBody'
// import Body from '../BodyFolder/Body'

export default function Category(){
    return(
        <>
            <div>
                <Header/>
                <div className="app__main">
                    <Sidebar />
                <div className="cats">
                    <div>
                        <h1>1</h1>
                    </div>
                    <div>
                        <h1>1</h1>
                    </div>
                    <div>
                        <h1>1</h1>
                    </div>
                    <div>
                        <h1>1</h1>
                    </div>
                    <div>
                        <h1>1</h1>
                    </div>
                    <div>
                        <h1>1</h1>
                    </div>
                    <div>
                        <h1>1</h1>
                    </div>
                   
                <div/>
            </div>
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