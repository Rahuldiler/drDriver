import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import HomeRoutes from './component/routes/homeRoutes';
import RegisterRoutes from './component/routes/registerRoutes';
import { PaginationProvider } from './context/paginationContext';
const App = () =>
{
  return (
    <>
      <PaginationProvider>
        <BrowserRouter>
          <HomeRoutes />
          <RegisterRoutes />
        </BrowserRouter>
      </PaginationProvider>

    </>
  )
}

export default App