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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/apple",
        element: <Apple></Apple>,
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
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
