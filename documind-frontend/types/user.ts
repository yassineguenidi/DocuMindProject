export type UserRole =
    | "ADMIN"
    | "MANAGER"
    | "EMPLOYEE";



export interface User {

    id: number;

    firstname: string;

    lastname: string;

    email: string;

    role: UserRole;

    companyId: number;

}