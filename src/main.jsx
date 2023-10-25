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
import ErrorPage from './components/ErrorPage';
import Products from './components/Products';
import ShowProducts from './components/ShowProducts';
import Details from './components/details';
import UpdateForm from './components/UpdateForm';
import Cart from './components/Cart';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/showproducts",
        element: <ShowProducts></ShowProducts>,
        loader: () => fetch('http://localhost:5000/products')
      },
      {
        path: "/apple",
        element: <PrivateRoute><Apple></Apple></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/products')
      },
      {
        path: "/Google",
        element: <Google></Google>,
        loader: () => fetch('http://localhost:5000/products')
      },
      {
        path: "/intel",
        element: <Intel></Intel>,
        loader: () => fetch('http://localhost:5000/products')
      },
      {
        path: "/samsung",
        element: <Samsung></Samsung>,
        loader: () => fetch('http://localhost:5000/products')
      },
      {
        path: "/sony",
        element: <Sony></Sony>,
        loader: () => fetch('http://localhost:5000/products')
      },
      {
        path: "/oppo",
        element: <Oppo></Oppo>,
        loader: () => fetch('http://localhost:5000/products')
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/products",
        element: <PrivateRoute><Products></Products></PrivateRoute>
      },
      {
        path: "/details",
        element: <Details></Details>,
        loader: () => fetch('http://localhost:5000/products')
      },
      {
        path: "/products/:id",
        element: <UpdateForm></UpdateForm>,
        loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
      },
      {
        path: "/carts",
        element: <Cart></Cart>,
        loader: () => fetch('http://localhost:5000/carts')
      },
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
