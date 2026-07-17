import DashboardLayout from "../layouts/DashboardLayout";
import Card from "../components/Card";
import StatsCard from "../components/StatsCard";
import Button from "../components/Button";

import { useDocuments } from "../context/DocumentContext";
import { useCompany } from "../context/CompanyContext";

import StatusBadge from "../components/StatusBadge";


import {
    FileText,
    Upload,
    CreditCard,
    TrendingUp,
} from "lucide-react";

function Dashboard() {
    // const { documents } = useDocuments();
    const {
        documents,
        removeDocument
    } = useDocuments();
    const { company } = useCompany();

    const quotaPercentage = Math.round(
        (company.documentsUsed / company.documentLimit) * 100
    );

    return (
        <DashboardLayout>
            <div className="space-y-8">
                {/* Header */}

                <div>
                    <h1 className="text-3xl font-bold">
                        Bonjour Yassine 👋
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Bienvenue sur votre espace DocuMind AI
                    </p>
                </div>

                {/* Statistiques */}

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    <StatsCard
                        title="Documents traités"
                        value={documents.length.toString()}
                        icon={<FileText size={24} />}
                        description="Documents analysés"
                    />

                    <StatsCard
                        title="Quota utilisé"
                        value={`${company.documentsUsed} / ${company.documentLimit}`}
                        icon={<Upload size={24} />}
                        description={`${quotaPercentage}% utilisé`}
                    />

                    <StatsCard
                        title="Plan actuel"
                        value={company.plan}
                        icon={<CreditCard size={24} />}
                        description="Abonnement actif"
                    />

                    <StatsCard
                        title="Croissance"
                        value="+13%"
                        icon={<TrendingUp size={24} />}
                        description="vs mois dernier"
                    />
                </div>

                {/* Actions rapides */}

                <Card title="Actions rapides">
                    <div className="flex gap-4 flex-wrap">
                        <Button>
                            Upload document
                        </Button>

                        <Button variant="secondary">
                            Voir documents
                        </Button>
                    </div>
                </Card>

                {/* Documents récents */}

                <Card title="Documents récents">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b">
                                <th className="text-left p-3">Document</th>
                                <th className="text-left p-3">Date</th>
                                <th className="text-left p-3">Statut</th>
                                <th className="text-left p-3">
                                    Actions
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {documents.map((doc) => (
                                <tr
                                    key={doc.id}
                                    className="border-b hover:bg-gray-50 transition"
                                >
                                    <td className="p-3">{doc.name}</td>

                                    <td className="p-3">
                                        {new Date(doc.createdAt).toLocaleDateString()}
                                    </td>


                                    <td
                                        className={`p-3 font-medium ${doc.status === "COMPLETED"
                                            ? "text-green-600"
                                            : doc.status === "FAILED"
                                                ? "text-red-600"
                                                : "text-orange-500"
                                            }`}
                                    >
                                        <StatusBadge status={doc.status} />
                                    </td>

                                    <td className="p-3">

                                        <button

                                            onClick={() => removeDocument(doc.id)}

                                            className="
        text-red-600
        hover:text-red-800
        "

                                        >

                                            Supprimer

                                        </button>

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Card>
            </div>
        </DashboardLayout>
    );
}

export default Dashboard;