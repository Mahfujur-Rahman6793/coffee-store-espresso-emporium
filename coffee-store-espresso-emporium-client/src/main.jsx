import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffe from './component/AddCoffe.jsx';
import UpdateCoffe from './component/UpdateCoffe.jsx';
import Coffecard from './component/Coffecard.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader:() => fetch('http://localhost:5000/coffee')
  },
  {
    path:'/addcoffee',
    element:<AddCoffe></AddCoffe>
  },
  {
    path:'/coffeecard',
    element:<Coffecard></Coffecard>,
    loader: () => fetch(`http://localhost:5000/coffee`)
  },
  {
    path:'/updatecoffe/:id',
    element:<UpdateCoffe></UpdateCoffe>,
    loader:({params})=>fetch(`http://localhost:5000/coffee/${params.id}`)
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
