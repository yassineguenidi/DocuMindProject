import {
    createContext,
    useContext,
    useState,
    type ReactNode
} from "react";


import type { User } from "../types/user";



interface AuthContextType {

    user: User | null;

    login: (email: string, password: string) => void;

    logout: () => void;

}



const AuthContext =
    createContext<AuthContextType | null>(null);





export function AuthProvider({
    children
}: {
    children: ReactNode
}) {



    const [user, setUser] = useState<User | null>(() => {


        const saved =
            localStorage.getItem("user");


        return saved
            ? JSON.parse(saved)
            : null;


    });






    const login = (
        email: string,
        password: string
    ) => {


        // Simulation utilisateur
        // Plus tard remplacé par API FastAPI + JWT

        const fakeUser: User = {


            id: 1,


            firstname: "Yassine",


            lastname: "Guenidi",


            email,


            role: "ADMIN",


            companyId: 1


        };





        localStorage.setItem(

            "user",

            JSON.stringify(fakeUser)

        );



        localStorage.setItem(

            "token",

            "fake-token"

        );





        setUser(fakeUser);



    };








    const logout = () => {



        localStorage.removeItem("user");


        localStorage.removeItem("token");



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



    const context = useContext(AuthContext);




    if (!context) {


        throw new Error(

            "useAuth must be used inside AuthProvider"

        );


    }



    return context;



}