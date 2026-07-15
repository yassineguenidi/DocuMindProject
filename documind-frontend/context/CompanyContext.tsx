import {

    createContext,

    useContext,

    useState,

    type ReactNode

} from "react";


import type { Company } from "../types/company";


import { mockCompany } from "../data/mockData";





interface CompanyContextType {



    company: Company;

    incrementDocuments: () => void;

    changePlan: (plan: string) => void;

}





const CompanyContext =

    createContext<CompanyContextType | null>(null);







export function CompanyProvider({

    children

}: {

    children: ReactNode

}) {


    // const [company] =

    //     useState<Company>(mockCompany);

    const [company, setCompany] = useState<Company>(mockCompany);

    function incrementDocuments() {

        setCompany(prev => ({

            ...prev,

            documentsUsed:
                prev.documentsUsed + 1

        }));

    }

    function changePlan(plan: string) {

        setCompany(prev => ({

            ...prev,

            plan,

            documentLimit:

                plan === "FREE"
                    ? 100
                    :
                    plan === "STARTER"
                        ? 1000
                        :
                        plan === "BUSINESS"
                            ? 10000
                            :
                            999999999

        }));

    }


    return (

        <CompanyContext.Provider

            value={{

                company,

                incrementDocuments,

                changePlan

            }}

        >


            {children}


        </CompanyContext.Provider>

    );


}





export function useCompany() {


    const context =

        useContext(CompanyContext);



    if (!context) {

        throw new Error(

            "useCompany must be used inside CompanyProvider"

        );

    }



    return context;


}