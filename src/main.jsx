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
        loader: () => fetch('https://assignment-10-mongodb-4mrvipihw-tahmid530.vercel.app/products')
      },
      {
        path: "/apple",
        element: <PrivateRoute><Apple></Apple></PrivateRoute>,
        loader: () => fetch('https://assignment-10-mongodb-4mrvipihw-tahmid530.vercel.app/products')
      },
      {
        path: "/Google",
        element: <Google></Google>,
        loader: () => fetch('https://assignment-10-mongodb-4mrvipihw-tahmid530.vercel.app/products')
      },
      {
        path: "/intel",
        element: <Intel></Intel>,
        loader: () => fetch('https://assignment-10-mongodb-4mrvipihw-tahmid530.vercel.app/products')
      },
      {
        path: "/samsung",
        element: <Samsung></Samsung>,
        loader: () => fetch('https://assignment-10-mongodb-4mrvipihw-tahmid530.vercel.app/products')
      },
      {
        path: "/sony",
        element: <Sony></Sony>,
        loader: () => fetch('https://assignment-10-mongodb-4mrvipihw-tahmid530.vercel.app/products')
      },
      {
        path: "/oppo",
        element: <Oppo></Oppo>,
        loader: () => fetch('https://assignment-10-mongodb-4mrvipihw-tahmid530.vercel.app/products')
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
        loader: () => fetch('https://assignment-10-mongodb-4mrvipihw-tahmid530.vercel.app/products')
      },
      {
        path: "/products/:id",
        element: <UpdateForm></UpdateForm>,
        loader: ({params}) => fetch(`https://assignment-10-mongodb-4mrvipihw-tahmid530.vercel.app/products/${params.id}`)
      },
      {
        path: "/carts",
        element: <Cart></Cart>,
        loader: () => fetch('https://assignment-10-mongodb-4mrvipihw-tahmid530.vercel.app/carts')
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
