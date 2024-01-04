import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Edit from "../pages/Edit";
import Create from "../pages/Create";
import Detail from "../pages/Detail";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path:"/:id",
        element:<Detail />,
    },
    {
        path:"/create",
        element:<Create />,
    },
    {
        path:"/edit/:id",
        element :<Edit />,
    }
])

export default router