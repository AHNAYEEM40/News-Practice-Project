import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Layout/Home";
import Login from "../Layout/Login";
import Register from "../Layout/Register";
import About from "../Layout/About";
import Career from "../Layout/Career";

const router =createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/about',
                element:<About></About>
            ,},
            {
                path:'/career',
                element:<Career></Career>
            }
        ]
    }
])

export default router;