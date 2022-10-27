import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../pages/Blog/Blog";
import SelectCategory from "../../pages/SelectCategory/SelectCategory";
import Contact from "../../pages/Contact/Contact";
import Destination from "../../pages/Destination/Destination";
import Home from "../../pages/Home/Home";
import News from "../../pages/News/News";
import Login from "../../pages/shared/Login/Login";
import SignUp from "../../pages/shared/SignUp/SignUp";
import RoomShow from "../../pages/RoomShow/RoomShow";
export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main />,
        children: [
            {
                path:'/',
                element: <Home />,
                loader: () => fetch('https://travel-guru-server-lilac.vercel.app/categories')
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
            },
            {
                path:'/category/:id',
                loader: ({params}) => {
                    const id = params.id;
                    return fetch(`https://travel-guru-server-lilac.vercel.app/categories/${id}`)
                },
                element: <SelectCategory />
            },
            {
                path:'/booking/:id',
                loader: ({params}) => {
                    const id = params.id;
                    return fetch(`https://travel-guru-server-lilac.vercel.app/booking-room/${id}`)
                },
                element: <RoomShow />
            }
        ]
    }
])