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
    }
])