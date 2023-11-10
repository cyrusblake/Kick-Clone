import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
// import Header from  './HeaderFolder/Header'
// import Sidebar from './SideBarFolder/Sidebar'
// import Body from './BodyFolder/Body'
import Home from './pages/Home'
import Login from './pages/Login'
import ProfilePage from './pages/ProfilePage'
import Category from './categoryFolder/Category'

function App() {
  return (
    <>
    <div>
        {/* <Header/>
        <div className="app__main">
           <Sidebar />
           <Body/>
        </div> */}
        <BrowserRouter>
          <Routes>
              <Route index element={<ProfilePage/>} />
              <Route path='Home' element={<Home />} />
              <Route path='Login' element={<Login />} />
              <Route path='ProfilePage' element={<ProfilePage />} />
              <Route path='Category' element={<Category/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
