export interface User {

    id: number;

    name: string;

    email: string;

    role: string;

}



export interface Company {

    id: number;

    name: string;

    plan: string;

    documentLimit: number;

    documentsUsed: number;

}



export interface Document {

    id: number;

    name: string;

    type: string;

    date: string;

    status: string;

}



export interface Subscription {

    name: string;

    price: string;

    limit: string;

}