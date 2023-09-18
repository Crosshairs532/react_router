import React from 'react'
import ReactDOM from 'react-dom/client'
<<<<<<< HEAD
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,

  },
  {
    path: '/HOme'
    ,
    element: <h1>i am in the home page</h1>
=======
// import App from './App.jsx'
import Home from './components/Home/Home';
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import About from './components/about/About';
import Contact from './components/contact/Contact';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [{
      path: '/about',
      element: <About></About>,
    },
    {
      path: '/contact',
      element: <Contact></Contact>
    }
    ]
>>>>>>> react router basic nav bar linking done
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
