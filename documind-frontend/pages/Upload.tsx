import { useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import FileUpload from "../components/documents/FileUpload";

import DocumentTypeSelector from "../components/ui/DocumentTypeSelector";

import Button from "../components/ui/Button";

import toast from "react-hot-toast";

import {
    uploadDocument
} from "../services/documentService";

import {
    useDocuments
} from "../context/DocumentContext";




function Upload() {


    const [type, setType] = useState("");

    const [file, setFile] = useState<File | null>(null);

    const [loading, setLoading] = useState(false);


    const {
        refreshDocuments
    } = useDocuments();





    async function handleUpload() {


        if (!file) {

            alert(
                "Veuillez sélectionner un fichier"
            );

            return;

        }



        try {


            setLoading(true);



            await uploadDocument(

                file,

                type || "Autre"

            );



            await refreshDocuments();



            toast.success(
                "Document envoyé avec succès"
            );



            setFile(null);



        } catch (error) {


            console.error(
                error
            );


            toast.error(
                "Erreur lors de l'envoi"
            );


        } finally {


            setLoading(false);


        }


    }







    return (


        <DashboardLayout>


            <div className="space-y-8">



                <div>


                    <h1 className="text-3xl font-bold">

                        Importer un document

                    </h1>



                    <p className="text-gray-500 mt-2">

                        Choisissez le type puis envoyez votre fichier.

                    </p>


                </div>






                <div
                    className="
                    bg-white
                    rounded-xl
                    shadow
                    p-6
                    space-y-6
                    "
                >



                    <DocumentTypeSelector

                        value={type}

                        onChange={setType}

                    />





                    <FileUpload

                        onFileSelect={setFile}

                    />






                    <Button

                        onClick={handleUpload}

                    >

                        {
                            loading
                                ? "Upload..."
                                : "Envoyer le document"
                        }


                    </Button>




                </div>




            </div>



        </DashboardLayout>


    );


}


export default Upload;