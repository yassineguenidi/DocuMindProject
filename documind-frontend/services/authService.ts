import api from "./api";


export interface LoginResponse {

    access_token: string;

    token_type: string;

}



export async function loginUser(

    email: string,

    password: string

) {


    const response = await api.post<LoginResponse>(

        "/auth/login",

        {

            email,

            password

        }

    );


    return response.data;

}