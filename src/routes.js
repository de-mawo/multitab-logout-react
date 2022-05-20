import {Navigate, useRoutes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Sales from "./pages/Sales";
import Messages from "./pages/Messages";
import Products from "./pages/Products";
import Users from "./pages/Users";
import Deliveries from "./pages/Deliveries";
import Settings from "./pages/Settings";
import DashboardLayout from "./layouts/DashboardLayout";
import PublicRoutesLayout from "./layouts/PublicRoutesLayout";
import Page404 from "./pages/Page404";
import Register from "./pages/Register";
import SingleProduct from "./pages/SingleProduct";

export default function Router () {

    return useRoutes([

       
        { path: '/app', element: <DashboardLayout/>,
       children: [
           {path: 'dashboard', element: <Dashboard/>},
           { path: 'sales', element: <Sales/>},
           { path: 'products', element: <Products /> },
           { path: 'products/:productId', element: <SingleProduct /> },
           { path: 'messages', element: <Messages /> },
           { path: 'users', element: <Users /> },
           { path: 'deliveries', element: <Deliveries /> },
           { path: 'settings', element: <Settings /> },        
       ],
    },
    {
        path: '/',
        element: <PublicRoutesLayout />,
        children: [
        {  index: true, element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: 'page404', element: <Page404 /> },    
        ],
    },
    { path: "*", element: <Navigate to="/page404" replace={true} /> },
    ])

}