import { useCompany } from "../context/CompanyContext";


export function useQuota() {

    const { company } = useCompany();



    const canUpload = () => {

        return (
            company.documentsUsed
            <
            company.documentLimit
        );

    };



    const remainingDocuments =

        company.documentLimit
        -
        company.documentsUsed;



    return {

        canUpload,

        remainingDocuments,

        limit: company.documentLimit,

        used: company.documentsUsed,

        plan: company.plan

    };

}