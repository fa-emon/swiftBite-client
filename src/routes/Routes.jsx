import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/404 page/ErrorPage";
import Login from "../pages/Shared/login/Login";
import Register from "../pages/Shared/register/Register";
import Contact from "../pages/Contact/Contact";
import AboutUs from "../pages/AboutUs/AboutUs";
import Gallery from "../pages/Gallery/Gallery/Gallery";
import Menu from "../pages/Menu/Menu/Menu";
import SpecificDetails from "../pages/Menu/SpecificDetails/SpecificDetails";
import Order from "../pages/Order/Order/Order";
import Dashboard from "../layout/Dashboard";
import MyOrder from "../pages/Dashboard/MyOrder/MyOrder";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItem from "../pages/Dashboard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import Payment from "../pages/Dashboard/Payment/Payment";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import UpdateItem from "../pages/Dashboard/UpdateItem/UpdateItem";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/menu',
                element: <Menu></Menu>
            },
            {
                path: '/menu/category/:id',
                loader: async ({ params }) => {
                    return fetch(`http://localhost:5000/menu/category/${params.id}`);
                },
                element: <SpecificDetails></SpecificDetails>
            },
            {
                path: '/order',
                element: <Order></Order>
            },
            {
                path: '/about',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/gallery',
                element: <Gallery></Gallery>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'userHome',
                element: <UserHome></UserHome>
            },
            {
                path: 'myOrder',
                element: <MyOrder></MyOrder>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            },
            
            // admin routes
            {
                path: 'adminHome',
                element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            {
                path: 'allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: 'addItems',
                element: <AdminRoute><AddItem></AddItem></AdminRoute>
            },
            {
                path: 'manageItems',
                element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
            },
            {
                path: 'updateItems/:id',
                loader: async ({ params }) => {
                    return fetch(`http://localhost:5000/menu/category/${params.id}`);
                },
                element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>
            }
        ]
    }
])