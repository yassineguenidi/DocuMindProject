import { useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import FileUpload from "../components/FileUpload";

import DocumentTypeSelector from "../components/DocumentTypeSelector";

import { useDocuments } from "../context/DocumentContext";

import { useQuota } from "../hooks/useQuota";

import { useCompany } from "../context/CompanyContext";


function Upload() {


    const { incrementDocuments } = useCompany();

    const [file, setFile] = useState<File | null>(null);

    const [type, setType] = useState("");

    const { addDocument } = useDocuments();

    const {
        canUpload,
        remainingDocuments
    } = useQuota();


    const handleUpload = () => {

        if (!file) {

            alert("Veuillez sélectionner un fichier");

            return;

        }

        if (!canUpload()) {

            alert(
                "Votre quota est atteint. Veuillez changer votre offre."
            );

            return;

        }

        addDocument({

            id: Date.now(),

            name: file.name,

            size: file.size,

            type: type || "AUTRE",

            status: "UPLOADING",

            createdAt: new Date().toISOString(),

            updatedAt: new Date().toISOString(),

            pages: 0,

            owner: "Yassine",

            companyId: 1

        });

        incrementDocuments();


    };



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



                    <button

                        onClick={handleUpload}

                        className="
                        bg-blue-600
                        text-white
                        px-6
                        py-3
                        rounded-lg
                        "

                    >

                        Ajouter le document

                    </button>



                </div>



            </div>


        </DashboardLayout>

    );

}


export default Upload;