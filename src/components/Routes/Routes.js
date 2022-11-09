import { createBrowserRouter } from "react-router-dom";
import Structure from "../Layout/Structure";
import ErrorPage from "../Pages/Common/ErrorPage/ErrorPage";
import Login from "../Pages/Login&Register/Login";
import Register from "../Pages/Login&Register/Register";
import Home from "../Pages/MainPage/Home/Home";
import AllServices from "../Pages/MainPage/Services/AllServices";
import ReviewForm from "../Pages/Review/ReviewForm";
import SingleService from "../Pages/SingleService/SingleService";

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
                element : <AllServices></AllServices>
            },
            {
                path : '/my-reviews',
                element : <AllServices></AllServices>
            },
            {
                path : '/write-reviews',
                element : <ReviewForm></ReviewForm>
            },
            {
                path : '/services/:id',
                element : <SingleService></SingleService>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`),
            },
        ]
    }
]);

export default router;