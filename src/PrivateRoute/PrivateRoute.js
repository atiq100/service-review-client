import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider/AuthProvider";


const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user,loading} = useContext(AuthContext)

    if(loading){
        return <progress className='w-60'></progress>
    }

   if(!user){
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
   }
   return children;
};
   

export default PrivateRoute;