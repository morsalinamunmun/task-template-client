import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Main/Layout';
import AuthProvider from './Provider/AuthProvider';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signout from './components/Signup/Signup';
import Dashboard from './Main/Dashboard';
import Todo from './components/Dashboard/Todo';
import Ongoing from './components/Dashboard/Ongoing';
import Complete from './components/Dashboard/Complete';
import PrivateRoute from './components/Routes/PrivateRoute';
import Benefit from './components/categoryPeople/Benefit';
import FQA from './components/FQA/FQA';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/benefit',
        element: <Benefit></Benefit>
      },
      {
        path: '/fqa',
        element: <FQA></FQA>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <Signout></Signout>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'todo',
        element: <Todo></Todo>
      },
      {
        path: 'ongoing',
        element: <Ongoing></Ongoing>
      },
      {
        path: 'complete',
        element: <Complete></Complete>
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
