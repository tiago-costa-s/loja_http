import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './routes/home/Home.jsx'
import ListProducts from './routes/listproducts/ListProducts.jsx'
import RegisterProducts from './routes/registerproducts/RegisterProducts.jsx'
import Login from './routes/login/Login.jsx'
import RegisterUser from './routes/registeruser/RegisterUser.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Login />
        // element: <Home />
      },
      {
        path: 'listproducts',
        element: <ListProducts />
      },
      {
        path: 'registerproducts',
        element: <RegisterProducts />
      },
      {
        path: 'registeruser',
        element: <RegisterUser />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
