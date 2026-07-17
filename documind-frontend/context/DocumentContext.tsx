import {
    createContext,
    useContext,
    useState,
    useEffect,
    type ReactNode
} from "react";


import type { Document } from "../types/document";


import {
    getDocuments,
    deleteDocument
} from "../services/documentService";



interface DocumentContextType {


    documents: Document[];


    refreshDocuments: () => Promise<void>;


    removeDocument: (
        id: number
    ) => Promise<void>;


}



const DocumentContext =
    createContext<DocumentContextType | null>(null);






export function DocumentProvider({

    children

}: {

    children: ReactNode

}) {



    const [documents, setDocuments] =

        useState<Document[]>([]);







    async function refreshDocuments() {


        try {


            const data: Document[] =

                await getDocuments();



            setDocuments(data);



        } catch (error) {


            console.error(

                "Error loading documents:",

                error

            );


        }


    }







    useEffect(() => {


        refreshDocuments();


    }, []);









    async function removeDocument(

        id: number

    ) {


        try {


            await deleteDocument(id);



            setDocuments(prev =>

                prev.filter(

                    doc => doc.id !== id

                )

            );



        } catch (error) {


            console.error(

                "Error deleting document:",

                error

            );


        }


    }









    return (

        <DocumentContext.Provider

            value={{

                documents,

                refreshDocuments,

                removeDocument

            }}

        >

            {children}

        </DocumentContext.Provider>

    );


}









export function useDocuments() {


    const context =

        useContext(DocumentContext);




    if (!context) {


        throw new Error(

            "useDocuments must be used inside DocumentProvider"

        );


    }



    return context;


}