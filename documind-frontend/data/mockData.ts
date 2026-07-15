import type { Document } from "../types/document";
import type { Company } from "../types/company";
import type { User } from "../types/user";



export const mockUser: User = {

    id: 1,

    firstname: "Yassine",

    lastname: "Guenidi",

    email: "yassine@documind.ai",

    role: "ADMIN",

    companyId: 1

};





export const mockCompany: Company = {

    id: 1,

    name: "DocuMind AI",

    plan: "STARTER",

    documentLimit: 1000,

    documentsUsed: 250,

    users: 3,

    logo: ""

};





export const mockDocuments: Document[] = [

    {

        id: 1,

        name: "facture_client.pdf",

        size: 245000,

        type: "FACTURE",

        status: "COMPLETED",

        createdAt: "2026-07-12",

        updatedAt: "2026-07-12",

        pages: 4,

        owner: "Yassine",

        companyId: 1

    },



    {

        id: 2,

        name: "contrat_service.pdf",

        size: 560000,

        type: "CONTRAT",

        status: "AI_PROCESSING",

        createdAt: "2026-07-11",

        updatedAt: "2026-07-11",

        pages: 12,

        owner: "Yassine",

        companyId: 1

    },



    {

        id: 3,

        name: "cv_candidat.pdf",

        size: 120000,

        type: "CV",

        status: "COMPLETED",

        createdAt: "2026-07-10",

        updatedAt: "2026-07-10",

        pages: 2,

        owner: "Yassine",

        companyId: 1

    }

];