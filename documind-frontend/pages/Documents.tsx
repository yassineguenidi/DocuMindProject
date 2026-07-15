import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import Card from "../components/Card";
import Modal from "../components/Modal";
import { useDocuments } from "../context/DocumentContext";
import {
    Search,
    Eye,
    Download,
    Trash2
} from "lucide-react";


function Documents() {


    const [search, setSearch] = useState("");

    const [selectedDocument, setSelectedDocument] = useState<any>(null);



    // const documents = [

    //     {
    //         id: 1,
    //         name: "facture_client.pdf",
    //         type: "Facture",
    //         date: "13/07/2026",
    //         status: "Terminé"
    //     },

    //     {
    //         id: 2,
    //         name: "contrat_service.pdf",
    //         type: "Contrat",
    //         date: "12/07/2026",
    //         status: "Analyse"
    //     },

    //     {
    //         id: 3,
    //         name: "cv_candidat.pdf",
    //         type: "CV",
    //         date: "10/07/2026",
    //         status: "Terminé"
    //     }

    // ];
    const { documents } = useDocuments();



    const filteredDocuments =
        documents.filter((doc) =>
            doc.name
                .toLowerCase()
                .includes(search.toLowerCase())
        );



    return (

        <DashboardLayout>

            <div className="space-y-6">


                <h1 className="text-3xl font-bold">
                    Mes documents
                </h1>



                <div className="relative w-96">

                    <Search
                        className="absolute left-3 top-3 text-gray-400"
                        size={18}
                    />

                    <input

                        className="
            border
            rounded-lg
            pl-10
            p-2
            w-full
            "

                        placeholder="Rechercher..."

                        value={search}

                        onChange={(e) => setSearch(e.target.value)}

                    />

                </div>





                <Card>


                    <table className="w-full">


                        <thead>

                            <tr className="border-b">


                                <th className="p-3 text-left">
                                    Nom
                                </th>


                                <th className="p-3 text-left">
                                    Type
                                </th>


                                <th className="p-3 text-left">
                                    Statut
                                </th>


                                <th className="p-3">
                                    Actions
                                </th>


                            </tr>

                        </thead>



                        <tbody>


                            {
                                filteredDocuments.map((doc) => (

                                    <tr
                                        key={doc.id}
                                        className="border-b"
                                    >

                                        <td className="p-3">
                                            {doc.name}
                                        </td>


                                        <td className="p-3">
                                            {doc.type}
                                        </td>


                                        <td className="p-3 text-green-600">
                                            {doc.status}
                                        </td>


                                        <td className="p-3">


                                            <div className="flex gap-4 justify-center">


                                                <button
                                                    onClick={() =>
                                                        setSelectedDocument(doc)
                                                    }
                                                >

                                                    <Eye size={18} />

                                                </button>



                                                <Download size={18} />



                                                <Trash2
                                                    size={18}
                                                    className="text-red-600"
                                                />



                                            </div>


                                        </td>


                                    </tr>


                                ))
                            }


                        </tbody>


                    </table>


                </Card>





                <Modal

                    isOpen={!!selectedDocument}

                    title={selectedDocument?.name}

                    onClose={() =>
                        setSelectedDocument(null)
                    }

                >

                    <div className="space-y-4">


                        <p>
                            Type :
                            <b> {selectedDocument?.type}</b>
                        </p>


                        <p>
                            Date :
                            <b> {selectedDocument?.date}</b>
                        </p>


                        <div className="
              h-96
              bg-gray-100
              rounded-lg
              flex
              items-center
              justify-center
            ">

                            Aperçu PDF

                        </div>


                    </div>


                </Modal>



            </div>


        </DashboardLayout>

    );

}


export default Documents;