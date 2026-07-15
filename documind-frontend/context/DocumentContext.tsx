import {

createContext,

useContext,

useState,

type ReactNode

} from "react";


import type { Document } from "../types/document";


import { mockDocuments } from "../data/mockData";



interface DocumentContextType {


documents:Document[];


addDocument:(document:Document)=>void;


removeDocument:(id:number)=>void;


}




const DocumentContext =
createContext<DocumentContextType | null>(null);





export function DocumentProvider({

children

}:{

children:ReactNode

}){


const [documents,setDocuments] =

useState<Document[]>(mockDocuments);





function addDocument(document:Document){

setDocuments(prev=>[

document,

...prev

]);

}





function removeDocument(id:number){

setDocuments(prev=>

prev.filter(

doc=>doc.id !== id

)

);

}





return (

<DocumentContext.Provider

value={{

documents,

addDocument,

removeDocument

}}

>

{children}

</DocumentContext.Provider>

);

}





export function useDocuments(){


const context =
useContext(DocumentContext);



if(!context){

throw new Error(

"useDocuments must be used inside DocumentProvider"

);

}



return context;


}