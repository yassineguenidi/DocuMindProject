import {
    createContext,
    useContext,
    useState,
    type ReactNode
} from "react";

import type { User } from "../types/user";

import { loginUser } from "../services/authService";


interface AuthContextType {

    user: User | null;

    login: (
        email: string,
        password: string
    ) => Promise<void>;

    logout: () => void;

}



const AuthContext =
    createContext<AuthContextType | null>(null);



export function AuthProvider({
    children
}: {
    children: ReactNode
}) {


    const [user, setUser] = useState<User | null>(

        () => {

            const saved =
                localStorage.getItem("user");


            return saved
                ? JSON.parse(saved)
                : null;

        }

    );




    const login = async (
        email: string,
        password: string
    ) => {


        const response =
            await loginUser(
                email,
                password
            );



        localStorage.setItem(
            "token",
            response.access_token
        );



        // récupérer l'utilisateur connecté

        const userResponse =
            await fetch(
                "http://127.0.0.1:8000/api/v1/auth/me",
                {
                    headers: {
                        Authorization:
                            `Bearer ${response.access_token}`
                    }
                }
            );



        const currentUser =
            await userResponse.json();



        localStorage.setItem(
            "user",
            JSON.stringify(currentUser)
        );


        setUser(currentUser);

    };





    const logout = () => {


        localStorage.removeItem("token");

        localStorage.removeItem("user");


        setUser(null);

    };





    return (

        <AuthContext.Provider

            value={{
                user,
                login,
                logout
            }}

        >

            {children}

        </AuthContext.Provider>

    );

}




export function useAuth() {

    const context =
        useContext(AuthContext);


    if (!context) {

        throw new Error(
            "useAuth must be used inside AuthProvider"
        );

    }


    return context;

}