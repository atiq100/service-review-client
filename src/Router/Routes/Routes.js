import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Services from "../../Pages/Home/Services/Services";
import Login from "../../Pages/Login/Login";
import ServiceDetail from "../../Pages/ServiceDetail/ServiceDetail";
import SignUp from "../../Pages/SignUp/SignUp";

const { createBrowserRouter } = require("react-router-dom");


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/services',
                element:<Services></Services>
            },
            {
                path:'/service/:id',
                element:<ServiceDetail></ServiceDetail>,
                loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
            }
        ]
    }
])
export default router;