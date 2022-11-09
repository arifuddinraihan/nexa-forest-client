import { createBrowserRouter } from "react-router-dom";
import Structure from "../Layout/Structure";
import ErrorPage from "../Pages/Common/ErrorPage/ErrorPage";
import Home from "../Pages/MainPage/Home/Home";
import Services from "../Pages/MainPage/Services/Services";
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
                path : '/services',
                element : <Services></Services>
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