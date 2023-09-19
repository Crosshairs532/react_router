import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from './components/Home/Home';
import './index.css'
import About from './components/about/About';
import Contact from './components/contact/Contact';
import User from './components/User/User.jsx';
import UserDetail from './userDetail/UserDetail.jsx';
import Posts from './components/Posts/Posts.jsx';
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
      element: <Contact></Contact>,
    }, {
      path: '/Users',
      loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
      element: <User></User>

    },
    {
      path: '/users/:useId',
      loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.useId}`),
      element: <UserDetail></UserDetail>
    },
    {
      path: '/posts',
      loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
      element: <Posts></Posts>
    }
    ]
    // >>>>>>> react router basic nav bar linking done
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
