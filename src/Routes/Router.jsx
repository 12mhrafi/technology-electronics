import * as React from "react";
import Root from './../Layouts/Root';

import Home from "../Pages/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import MyCart from './../Pages/MyCart/MyCart';
import AddProduct from './../Pages/AddProduct/AddProduct';
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import BrandItem from "../Components/BrandItem/BrandItem";
import ProductDetail from "../Components/ProductDetail.jsx/ProductDetail";
import UpdateProuducts from "../Components/UpdateProducts/UpdateProuducts";
import Error from "../Error/Error";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";




const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error></Error>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path:"/addProduct",
          element: <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        },
        {
          path:"/myCart",
          element:<PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/register",
          element:<Register></Register>
        },
        {
          path:"/brandItem/:id",
          loader:() => fetch("https://technology-server-ten.vercel.app/users"),
          element:<BrandItem></BrandItem>
        },
        {
          path:"/productDetail/:id",
          loader:()=> fetch("https://technology-server-ten.vercel.app/users"),
          element:<PrivateRoute>
            <ProductDetail></ProductDetail>
          </PrivateRoute>
        },
        {
          path:"/updateProudct/:id",
          loader: ()=> fetch("https://technology-server-ten.vercel.app/users"),

          element:<PrivateRoute>
            <UpdateProuducts></UpdateProuducts>
          </PrivateRoute>
        }
        
      ]
    },
  ]);
  
  export default router;