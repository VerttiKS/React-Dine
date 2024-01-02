import './App.css';
import { createContext, useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import RootLayout from './pages/RootLayout.jsx';
import Cart from './pages/Cart.jsx';
import Checkout from './pages/Checkout.jsx';
import Success from './pages/Success.jsx';


export const Context = createContext();


function App() {
  
  const [cart, setCart] = useState([]);

  const router = createBrowserRouter([
    {
      path: '/', 
      element: <RootLayout/>,
      errorElement: <ErrorPage/>,
      children: [
        {index: true, element: <div className='default'><Home/></div>},
        {path: '/cart', element: <div className='default'><Cart/></div>},
        {path: '/checkout', element: <div className='default_left'><Checkout/></div>},
        {path: '/success', element: <div className='default_left'><Success/></div>}
      ]
    }
  ]);

  return (
    <Context.Provider value={[cart, setCart]}>
      <RouterProvider router={router}/>
    </Context.Provider>
  )
}

export default App
