import Main from "../../layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Home from "../../Pages/Home/Home/Home";
import Services from "../../Pages/Home/Services/Services";
import Login from "../../Pages/Login/Login";
import AddReview from "../../Pages/Reviews/AddReview/AddReview";
import Reviews from "../../Pages/Reviews/Reviews/Reviews";
import ServiceDetail from "../../Pages/ServiceDetail/ServiceDetail";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";

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
            },
            {
                path:'/addservice',
                element:<PrivateRoute><AddService></AddService></PrivateRoute>,
                loader:()=>fetch('http://localhost:5000/services')
            },
            {
                path:'/service',
                element:<AddReview></AddReview>,
                loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path:'/reviews/:id',
                element:<Reviews></Reviews>,
                loader:({params})=>fetch(`http://localhost:5000/reviews/${params.id}`)
            }
        ]
    }
])
export default router;