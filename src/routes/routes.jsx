import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Home from "../Pages/Home";

const routes = [
    {
        path:'',
        element:<Layout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            }
        ]
        
    }
]

const router = createBrowserRouter(routes);

export default router;