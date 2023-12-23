import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Login/Signup";
import Checkout from "../pages/Checkout/Checkout";
import MyBookins from "../pages/MyBookings/MyBookins";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'checkout/:id',
                element: <PrivateRoutes><Checkout /></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://car-doctor-server1.vercel.app/services/${params.id}`)
            },
            {
                path: 'my-bookings',
                element: <PrivateRoutes><MyBookins /></PrivateRoutes>
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            }
        ]
    }
])

export default router;