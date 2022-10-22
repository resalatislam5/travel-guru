import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../pages/Blog/Blog";
import Contact from "../../pages/Contact/Contact";
import Destination from "../../pages/Destination/Destination";
import Home from "../../pages/Home/Home";
import News from "../../pages/News/News";
import Login from "../../pages/shared/Login/Login";
import SignUp from "../../pages/shared/SignUp/SignUp";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main />,
        children: [
            {
                path:'/',
                element: <Home />
            },
            {
                path:'/news',
                element: <News />
            },
            {
                path:'/destination',
                element: <Destination />
            },
            {
                path:'/blog',
                element: <Blog />
            },
            {
                path:'/contact',
                element: <Contact />
            },
            {
                path:'/login',
                element: <Login />
            },
            {
                path:'/signup',
                element: <SignUp />
            }
        ]
    }
])