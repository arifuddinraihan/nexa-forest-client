import { createBrowserRouter } from "react-router-dom";
import Structure from "../Layout/Structure";
import ErrorPage from "../Pages/Common/ErrorPage/ErrorPage";
import Home from "../Pages/MainPage/Home/Home";

const router = createBrowserRouter([
    {
        path : '/',
        element : <Structure></Structure>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            }
        ]
    }
]);

export default router;