import DashboardLayout from "../layouts/DashboardLayout";

import Card from "../components/ui/Card";
import StatsCard from "../components/ui/StatsCard";
import Button from "../components/ui/Button";
import StatusBadge from "../components/ui/StatusBadge";

import { useDocuments } from "../context/DocumentContext";
import { useCompany } from "../context/CompanyContext";


import {
    FileText,
    Upload,
    CreditCard,
    TrendingUp,
    Plus,
    FolderOpen,
    Trash2
} from "lucide-react";




function Dashboard() {


    const {
        documents,
        removeDocument

    } = useDocuments();



    const {
        company

    } = useCompany();





    const quotaPercentage = Math.round(
        (company.documentsUsed / company.documentLimit) * 100
    );





    return (


        <DashboardLayout>



            <div className="space-y-8">





                {/* Welcome Header */}



                <div

                    className="
                    bg-gradient-to-r
                    from-blue-600
                    to-indigo-600
                    rounded-3xl
                    p-8
                    text-white
                    "

                >



                    <h1
                        className="
                        text-3xl
                        font-bold
                        "
                    >

                        Bonjour Yassine 👋

                    </h1>



                    <p
                        className="
                        mt-3
                        text-blue-100
                        "
                    >

                        Gérez et automatisez vos documents avec DocuMind AI.

                    </p>



                </div>









                {/* Statistics */}



                <div

                    className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    xl:grid-cols-4
                    gap-6
                    "

                >



                    <StatsCard

                        title="Documents traités"

                        value={documents.length.toString()}

                        icon={
                            <FileText size={22} />
                        }

                        description="Documents analysés"

                    />




                    <StatsCard

                        title="Quota utilisé"

                        value={`${company.documentsUsed} / ${company.documentLimit}`}

                        icon={
                            <Upload size={22} />
                        }

                        description={`${quotaPercentage}% utilisé`}

                    />




                    <StatsCard

                        title="Plan actuel"

                        value={company.plan}

                        icon={
                            <CreditCard size={22} />
                        }

                        description="Abonnement actif"

                    />




                    <StatsCard

                        title="Croissance"

                        value="+13%"

                        icon={
                            <TrendingUp size={22} />
                        }

                        description="vs mois dernier"

                    />



                </div>









                {/* Quick Actions */}



                <Card title="Actions rapides">


                    <div

                        className="
                        flex
                        flex-wrap
                        gap-4
                        "

                    >



                        <Button>


                            <span
                                className="
                                flex
                                items-center
                                gap-2
                                "
                            >

                                <Plus size={18} />

                                Nouveau document


                            </span>


                        </Button>





                        <Button variant="secondary">


                            <span
                                className="
                                flex
                                items-center
                                gap-2
                                "
                            >

                                <FolderOpen size={18} />

                                Voir documents


                            </span>


                        </Button>



                    </div>



                </Card>









                {/* Documents */}




                <Card title="Documents récents">





                    {

                        documents.length === 0

                            ?

                            (

                                <div

                                    className="
                            text-center
                            py-10
                            text-slate-500
                            "

                                >

                                    Aucun document disponible


                                </div>

                            )

                            :

                            (

                                <div
                                    className="
                        overflow-x-auto
                        "
                                >


                                    <table

                                        className="
                        w-full
                        "

                                    >



                                        <thead>


                                            <tr

                                                className="
                                border-b
                                text-sm
                                text-slate-500
                                "

                                            >


                                                <th
                                                    className="
                                    text-left
                                    py-4
                                    "
                                                >
                                                    Document
                                                </th>


                                                <th>
                                                    Date
                                                </th>


                                                <th>
                                                    Statut
                                                </th>


                                                <th>
                                                    Action
                                                </th>


                                            </tr>



                                        </thead>







                                        <tbody>


                                            {
                                                documents.map((doc) => (


                                                    <tr

                                                        key={doc.id}

                                                        className="
                                border-b
                                hover:bg-slate-50
                                transition
                                "

                                                    >



                                                        <td

                                                            className="
                                    py-4
                                    flex
                                    items-center
                                    gap-3
                                    "

                                                        >


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

                                                                <FileText size={20} />

                                                            </div>



                                                            <span
                                                                className="
                                        font-medium
                                        "
                                                            >

                                                                {doc.name}

                                                            </span>



                                                        </td>







                                                        <td>

                                                            {
                                                                new Date(
                                                                    doc.createdAt
                                                                )
                                                                    .toLocaleDateString()
                                                            }

                                                        </td>







                                                        <td>

                                                            <StatusBadge
                                                                status={doc.status}
                                                            />

                                                        </td>






                                                        <td>


                                                            <button


                                                                onClick={() =>
                                                                    removeDocument(doc.id)
                                                                }


                                                                className="
                                        text-red-500
                                        hover:text-red-700
                                        transition
                                        "

                                                            >

                                                                <Trash2 size={18} />


                                                            </button>



                                                        </td>





                                                    </tr>


                                                ))
                                            }



                                        </tbody>



                                    </table>



                                </div>

                            )


                    }




                </Card>




            </div>



        </DashboardLayout>


    );


}



export default Dashboard;