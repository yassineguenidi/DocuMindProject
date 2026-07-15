export type DocumentStatus =

    | "UPLOADING"

    | "QUEUED"

    | "OCR"

    | "AI_PROCESSING"

    | "VALIDATION"

    | "COMPLETED"

    | "FAILED";



export interface Document {

    id: number;

    name: string;

    size: number;

    type: string;

    status: DocumentStatus;

    createdAt: string;

    updatedAt: string;

    pages: number;

    owner: string;

    companyId: number;

}

// export interface Document {

//     id: number;

//     name: string;

//     fileUrl: string;

//     status:
//     | "pending"
//     | "processing"
//     | "completed"
//     | "failed";

//     createdAt: string;

// }



// export interface User {

//     id: number;

//     name: string;

//     email: string;

//     role:
//     | "admin"
//     | "manager"
//     | "employee";

// }



// export interface Company {

//     id: number;

//     name: string;

//     plan:
//     | "free"
//     | "starter"
//     | "business"
//     | "enterprise";

//     documentLimit: number;

//     documentsUsed: number;

// }



// export interface Subscription {

//     id: number;

//     plan: string;

//     status:
//     | "active"
//     | "expired";

//     startDate: string;

//     endDate: string;

// }

