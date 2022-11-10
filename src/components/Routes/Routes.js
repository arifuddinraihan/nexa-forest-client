import { createBrowserRouter } from "react-router-dom";
import Structure from "../Layout/Structure";
import AddService from "../Pages/AddService/AddService";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/Common/ErrorPage/ErrorPage";
import Login from "../Pages/Login&Register/Login";
import Register from "../Pages/Login&Register/Register";
import Home from "../Pages/MainPage/Home/Home";
import AllServices from "../Pages/MainPage/Services/AllServices";
import MyReview from "../Pages/Review/MyReview";
import ReviewForm from "../Pages/Review/ReviewForm";
import SingleService from "../Pages/SingleService/SingleService";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path : '/',
        element : <Structure></Structure>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/blog',
                element : <Blog></Blog>,
                loader: () => fetch(`https://nexa-forest-server-side.vercel.app/blogs`)
            },
            {
                path : '/login',
                element : <Login></Login>
            },
            {
                path : '/sing-up',
                element : <Register></Register>
            },
            {
                path : '/all-services',
                element : <AllServices></AllServices>
            },
            {
                path : '/add-services',
                element : <PrivateRoutes><AddService></AddService></PrivateRoutes>
            },
            {
                path : '/my-reviews',
                element : <PrivateRoutes><MyReview></MyReview></PrivateRoutes>
            },
            {
                path : '/write-reviews/:id',
                element : <PrivateRoutes><ReviewForm></ReviewForm></PrivateRoutes>,
                loader: ({params}) => fetch(`https://nexa-forest-server-side.vercel.app/services/${params.id}`),
            },
            {
                path : '/services/:id',
                element : <SingleService></SingleService>,
                loader: ({params}) => fetch(`https://nexa-forest-server-side.vercel.app/services/${params.id}`),
            },
        ]
    }
]);

export default router;