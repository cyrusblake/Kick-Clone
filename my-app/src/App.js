import React from 'react';
// import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from  './HeaderFolder/Header'
import Sidebar from './SideBarFolder/Sidebar'
import Body from './BodyFolder/Body'

function App() {
  return (
    <>
    <div>
        <Header/>
        <div className="app__main">
           <Sidebar />
           <Body/>
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
  );
}

export default App;
