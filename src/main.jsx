import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/Root';
import Home from './components/Home';
import Apple from './components/Apple';
import Google from './components/Google';
import Intel from './components/Intel';
import Samsung from './components/Samsung';
import Sony from './components/Sony';
import Oppo from './components/Oppo';
import Login from './components/Login';
import Register from './components/Register';
import AuthProvider from './components/AuthProvider';
import PrivateRoute from './components/PrivateRoute';
// import App from './App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      // {
      //   path: "/",
      //   element: <App></App>
      // },
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/apple",
        element: <PrivateRoute><Apple></Apple></PrivateRoute>,
      },
      {
        path: "/google",
        element: <Google></Google>,
      },
      {
        path: "/intel",
        element: <Intel></Intel>
      },
      {
        path: "/samsung",
        element: <Samsung></Samsung>
      },
      {
        path: "/sony",
        element: <Sony></Sony>
      },
      {
        path: "/oppo",
        element: <Oppo></Oppo>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
