import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";
import { useAuth } from "../context/AuthContext";


interface PrivateRouteProps {

    children: ReactNode;

}



function PrivateRoute({
    children
}: PrivateRouteProps) {


    const { user } = useAuth();



    if (!user) {

        return <Navigate to="/login" replace />;

    }



    return children;

}


export default PrivateRoute;