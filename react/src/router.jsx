import {createBrowserRouter, Navigate} from "react-router-dom";
import Dashboard from "./views/Dashboard.jsx";
import Surveys from "./views/Surveys.jsx";
import Signup from "./views/Signup.jsx";
import Login from "./views/Login.jsx";
import GuestLayout from "./components/GuestLayout.jsx";
import DefaultLayout from "./components/DefaultLayout.jsx";

const router = createBrowserRouter([

    {
        path: "/",
        element: <DefaultLayout/>,
        children: [
            {
                path: "/dashboard",
                element: <Navigate to="/"/>,
            },
            {
                path: "/",
                element: <Dashboard/>
            },
            {
                path: "/surveys",
                element: <Surveys/>
            },
        ]
    },
    {
        path: "/",
        element: <GuestLayout/>,
        children: [
            {
                path: "/signup",
                element: <Signup/>
            },
            {
                path: "/login",
                element: <Login/>
            },
        ]
    }


])
export default router;