import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import HomeRoutes from './component/routes/homeRoutes';
// import RegisterRoutes from './component/routes/registerRoutes';
// import { PaginationProvider } from './context/paginationContext';
import CallUser from './component/videoChat/callUser';
import Room from './component/videoChat/room';
import { SocketProvider } from './context/roomContext';
const App = () =>
{
  return (
    <>
      <BrowserRouter>
        <SocketProvider>
          <Routes>
            <Route exact path="/" element={<CallUser />} />
            <Route exact path="room/:id" element={<Room />} />
          </Routes>
        </SocketProvider>
      </BrowserRouter>
      {/* <PaginationProvider>
        <BrowserRouter>
          <HomeRoutes />
          <RegisterRoutes />
        </BrowserRouter>
      </PaginationProvider> */}

    </>
  )
}

export default App