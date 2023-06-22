import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home";
import Blogs from "../Pages/Blogs";
import AllToys from "../Pages/AllToys";
import MyToys from "../Pages/MyToys";
import AddToy from "../Pages/AddToy";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ToyDetails from "../Pages/ToyDetails";
import UpdateToy from "../Pages/UpdateToy";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage";
import Community from "../Components/Community/Community";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/blogs',
                element: <Blogs></Blogs>
            },
            {
                path:'/alltoys',
                element: <AllToys></AllToys>,
                loader: ()=>fetch('https://toy-town-server-sigma.vercel.app/toysbylimit/20')
            },
            {
                path:'/toys/:id',
                element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
                loader: ({params}) => fetch(`https://toy-town-server-sigma.vercel.app/toys/${params.id}`)
            },
            {
                path:'/mytoys',
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path:'/updatetoy/:id',
                element: <PrivateRoute><UpdateToy></UpdateToy></PrivateRoute>,
                loader: ({params}) => fetch(`https://toy-town-server-sigma.vercel.app/toys/${params.id}`)
            },
            {
                path:'/addtoy',
                element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path:'/community',
                element:<Community></Community>
            }

        ]
    }
])

export default router