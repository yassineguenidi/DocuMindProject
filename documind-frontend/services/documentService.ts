import api from "./api";

import type { Document } from "../types/document";



export async function getDocuments(): Promise<Document[]> {


    const response = await api.get<Document[]>(
        "/documents"
    );


    return response.data;

}




// export async function uploadDocument(

//     file: File,

//     documentType: string

// ) {


//     const formData = new FormData();


//     formData.append(
//         "file",
//         file
//     );


//     formData.append(
//         "document_type",
//         documentType
//     );



//     const response = await api.post(

//         "/documents/upload",

//         formData,

//         {
//             headers: {
//                 "Content-Type": "multipart/form-data"
//             }
//         }

//     );



//     return response.data;

// }


export async function uploadDocument(

    file: File,

    documentType: string

) {


    const formData = new FormData();


    formData.append(
        "file",
        file
    );


    formData.append(
        "document_type",
        documentType
    );


    console.log(
        "TOKEN:",
        localStorage.getItem("token")
    );


    const response = await api.post(

        "/documents/upload",

        formData,

        {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }

    );


    return response.data;

}



export async function deleteDocument(

    id: number

) {


    const response = await api.delete(

        `/documents/${id}`

    );


    return response.data;

}

export async function downloadDocument(
    id: number
) {

    const response = await api.get(
        `/documents/${id}/download`,
        {
            responseType: "blob"
        }
    );


    const url = window.URL.createObjectURL(
        new Blob([response.data])
    );


    const link = document.createElement("a");

    link.href = url;


    link.download = "document.pdf";


    document.body.appendChild(link);


    link.click();


    link.remove();


    window.URL.revokeObjectURL(url);

}