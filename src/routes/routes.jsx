import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Home from "../Pages/Home";
import Software from "../Pages/Software";
import Services from "../Pages/Services";
import Technologies from "../Pages/Technologies";
import Resources from "../Pages/Resources";
import Company from "../Pages/Company";

const routes = [
    {
        path:'',
        element:<Layout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:"/software",
                element:<Software/>

            },
            {
                path:"/services",
                element:<Services/>

            },
            {
                path:"/technologies",
                element:<Technologies/>

            },
            {
                path:"/resources",
                element:<Resources/>

            },
             {
                path:"/company",
                element:<Company/>

            }
        ]
        
    }
]

const router = createBrowserRouter(routes);

export default router;