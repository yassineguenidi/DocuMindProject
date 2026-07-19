import { useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import Card from "../components/ui/Card";

import Modal from "../components/ui/Modal";

import { useDocuments } from "../context/DocumentContext";

import ConfirmModal from "../components/ui/ConfirmModal";
import toast from "react-hot-toast";

import {
    downloadDocument
} from "../services/documentService";

import {
    Search,
    Eye,
    Download,
    Trash2,
    FileText
} from "lucide-react";





function Documents() {


    const {
        documents,
        removeDocument
    } = useDocuments();




    const [documentToDelete, setDocumentToDelete] =
        useState<any>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const [search, setSearch] = useState("");

    const [typeFilter, setTypeFilter] = useState("ALL");

    const [sortBy, setSortBy] = useState("date");

    const [selectedDocument, setSelectedDocument] =
        useState<any>(null);







    const filteredDocuments = documents

        .filter((doc) =>

            doc.name
                .toLowerCase()
                .includes(
                    search.toLowerCase()
                )

        )


        .filter((doc) =>

            typeFilter === "ALL"

                ?

                true

                :

                doc.type === typeFilter

        )


        .sort((a, b) => {


            if (sortBy === "name") {


                return (
                    a.name.localeCompare(
                        b.name
                    )
                );

            }



            return (

                new Date(b.created_At)
                    .getTime()

                -

                new Date(a.created_At)
                    .getTime()

            );


        });



    async function openPreview(doc: any) {

        try {

            const token =
                localStorage.getItem("token");


            const response =
                await fetch(
                    `http://127.0.0.1:8000/api/v1/documents/${doc.id}/download`,
                    {
                        headers: {
                            Authorization:
                                `Bearer ${token}`
                        }
                    }
                );


            const blob =
                await response.blob();


            const url =
                URL.createObjectURL(blob);


            setPreviewUrl(url);


            setSelectedDocument(doc);


        } catch (error) {

            console.error(
                "Preview error:",
                error
            );

        }

    }






    return (


        <DashboardLayout>


            <div className="space-y-8">





                {/* Header */}


                <div className="flex justify-between items-center">


                    <div>


                        <h1 className="text-3xl font-bold">

                            Mes documents

                        </h1>


                        <p className="text-slate-500 mt-2">

                            Gérez vos documents depuis votre espace DocuMind AI.

                        </p>


                    </div>





                    <button

                        className="
                        bg-blue-600
                        hover:bg-blue-700
                        text-white
                        px-5
                        py-3
                        rounded-xl
                        transition
                        "

                    >

                        + Nouveau document


                    </button>



                </div>








                {/* Recherche + filtres */}



                <div className="flex flex-wrap gap-4">





                    <div className="relative flex-1 max-w-md">


                        <Search

                            size={18}

                            className="
                            absolute
                            left-4
                            top-1/2
                            -translate-y-1/2
                            text-slate-400
                            "

                        />



                        <input


                            value={search}


                            onChange={(e) =>
                                setSearch(e.target.value)
                            }



                            placeholder="Rechercher un document..."



                            className="
                            w-full
                            pl-11
                            pr-4
                            py-3
                            rounded-xl
                            border
                            border-slate-200
                            focus:outline-none
                            focus:ring-2
                            focus:ring-blue-500
                            "

                        />



                    </div>







                    <select


                        value={typeFilter}


                        onChange={(e) =>
                            setTypeFilter(
                                e.target.value
                            )
                        }



                        className="
                        rounded-xl
                        border
                        px-4
                        py-3
                        "

                    >


                        <option value="ALL">

                            Tous les types

                        </option>


                        <option value="CV">

                            CV

                        </option>



                        <option value="FACTURE">

                            Facture

                        </option>



                        <option value="CONTRAT">

                            Contrat

                        </option>



                    </select>







                    <select


                        value={sortBy}


                        onChange={(e) =>
                            setSortBy(
                                e.target.value
                            )
                        }



                        className="
                        rounded-xl
                        border
                        px-4
                        py-3
                        "

                    >


                        <option value="date">

                            Plus récent

                        </option>



                        <option value="name">

                            Nom

                        </option>



                    </select>





                </div>









                {/* Table */}


                <Card className="p-0 overflow-hidden">


                    <table className="w-full">


                        <thead className="bg-slate-50">


                            <tr>


                                <th className="
                                px-6
                                py-4
                                text-left
                                text-xs
                                uppercase
                                text-slate-500
                                ">

                                    Document

                                </th>



                                <th className="
                                px-6
                                py-4
                                text-left
                                text-xs
                                uppercase
                                text-slate-500
                                ">

                                    Type

                                </th>



                                <th className="
                                px-6
                                py-4
                                text-left
                                text-xs
                                uppercase
                                text-slate-500
                                ">

                                    Statut

                                </th>



                                <th className="
                                px-6
                                py-4
                                text-center
                                text-xs
                                uppercase
                                text-slate-500
                                ">

                                    Actions

                                </th>



                            </tr>


                        </thead>


                        <tbody>


                            {
                                filteredDocuments.length === 0 ? (


                                    <tr>


                                        <td
                                            colSpan={4}
                                            className="
                                            py-20
                                            text-center
                                            "
                                        >


                                            <FileText

                                                size={60}

                                                className="
                                                mx-auto
                                                text-slate-300
                                                "

                                            />



                                            <h2 className="
                                            mt-5
                                            text-xl
                                            font-semibold
                                            ">

                                                Aucun document trouvé

                                            </h2>



                                            <p className="
                                            text-slate-500
                                            mt-2
                                            ">

                                                Importez un document ou modifiez votre recherche.

                                            </p>



                                        </td>


                                    </tr>


                                )

                                    :

                                    (


                                        filteredDocuments.map((doc) => (


                                            <tr

                                                key={doc.id}

                                                className="
                                            border-b
                                            hover:bg-slate-50
                                            transition
                                            "

                                            >



                                                <td className="
                                            px-6
                                            py-4
                                            ">


                                                    <div className="
                                                flex
                                                items-center
                                                gap-3
                                                ">


                                                        <div

                                                            className="
                                                        w-10
                                                        h-10
                                                        rounded-xl
                                                        bg-blue-50
                                                        text-blue-600
                                                        flex
                                                        items-center
                                                        justify-center
                                                        "

                                                        >


                                                            <FileText

                                                                size={18}

                                                            />


                                                        </div>




                                                        <div>


                                                            <p className="
                                                        font-medium
                                                        ">

                                                                {doc.name}

                                                            </p>



                                                            <p className="
                                                        text-xs
                                                        text-slate-500
                                                        ">

                                                                PDF

                                                            </p>



                                                        </div>


                                                    </div>



                                                </td>








                                                <td className="
                                            px-6
                                            py-4
                                            ">


                                                    <span className="
                                                bg-slate-100
                                                px-3
                                                py-1
                                                rounded-full
                                                text-sm
                                                ">

                                                        {doc.type}

                                                    </span>



                                                </td>








                                                <td className="
                                            px-6
                                            py-4
                                            ">


                                                    <span

                                                        className="
                                                    bg-green-100
                                                    text-green-700
                                                    px-3
                                                    py-1
                                                    rounded-full
                                                    text-sm
                                                    "

                                                    >

                                                        {doc.status}

                                                    </span>



                                                </td>









                                                <td className="
                                            px-6
                                            py-4
                                            ">



                                                    <div className="
                                                flex
                                                justify-center
                                                gap-2
                                                ">





                                                        <button

                                                            onClick={() =>
                                                                openPreview(doc)
                                                            }


                                                            className="
    p-2
    rounded-lg
    hover:bg-blue-100
    transition
    "

                                                        >

                                                            <Eye size={18} />

                                                        </button>









                                                        <button

                                                            onClick={() =>
                                                                downloadDocument(doc.id)
                                                            }


                                                            className="
    p-2
    rounded-lg
    hover:bg-green-100
    transition
    "

                                                        >

                                                            <Download size={18} />

                                                        </button>









                                                        <button


                                                            onClick={() =>
                                                                setDocumentToDelete(doc)
                                                            }


                                                            className="
                                                        p-2
                                                        rounded-lg
                                                        hover:bg-red-100
                                                        text-red-600
                                                        transition
                                                        "


                                                        >


                                                            <Trash2 size={18} />


                                                        </button>




                                                    </div>



                                                </td>





                                            </tr>



                                        ))



                                    )

                            }



                        </tbody>



                    </table>



                </Card>









                {/* Preview Modal */}


                <Modal


                    isOpen={!!selectedDocument}


                    title={selectedDocument?.name}


                    onClose={() => {

                        setSelectedDocument(null);


                        if (previewUrl) {

                            URL.revokeObjectURL(
                                previewUrl
                            );

                        }


                        setPreviewUrl(null);

                    }}


                >



                    <div className="space-y-5">





                        <div>


                            <p className="text-slate-500">

                                Type

                            </p>


                            <p className="font-semibold">

                                {selectedDocument?.type}

                            </p>


                        </div>








                        <div>


                            <p className="text-slate-500">

                                Date d'ajout

                            </p>


                            <p className="font-semibold">


                                {
                                    selectedDocument &&
                                    new Date(
                                        selectedDocument.created_At
                                    ).toLocaleDateString()
                                }


                            </p>


                        </div>








                        <div
                            className="
    h-[600px]
    rounded-xl
    overflow-hidden
    border
    "
                        >


                            {
                                previewUrl && (

                                    <iframe

                                        src={previewUrl}

                                        className="
                w-full
                h-full
                "

                                        title="PDF Preview"

                                    />

                                )
                            }


                        </div>




                    </div>



                </Modal>




                <ConfirmModal

                    isOpen={!!documentToDelete}


                    title="Supprimer le document"


                    message={
                        `Voulez-vous supprimer ${documentToDelete?.name} ?`
                    }


                    onCancel={() =>
                        setDocumentToDelete(null)
                    }


                    onConfirm={async () => {


                        await removeDocument(
                            documentToDelete.id
                        );


                        toast.success(
                            "Document supprimé"
                        );


                        setDocumentToDelete(null);


                    }}

                />

            </div>



        </DashboardLayout>


    );


}




export default Documents;
