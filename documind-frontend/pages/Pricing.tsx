import DashboardLayout from "../layouts/DashboardLayout";

import Card from "../components/Card";

import Button from "../components/Button";

import { plans } from "../data/plans";

import { useCompany } from "../context/CompanyContext";



function Pricing() {


  // const { company } = useCompany();


  const { company, changePlan } = useCompany();

  return (

    <DashboardLayout>


      <div className="space-y-8">


        <div>

          <h1 className="text-3xl font-bold">

            Choisissez votre offre

          </h1>


          <p className="text-gray-500 mt-2">

            Adaptez DocuMind AI aux besoins de votre entreprise.

          </p>

        </div>





        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">



          {

            plans.map((plan) => (


              <Card key={plan.id}>


                <div className="space-y-4">


                  <h2 className="text-2xl font-bold">

                    {plan.name}

                  </h2>



                  <p className="text-gray-500">

                    {plan.description}

                  </p>




                  <div className="text-3xl font-bold">

                    {

                      plan.price === null

                        ?

                        "Sur devis"

                        :

                        `${plan.price}€/mois`

                    }

                  </div>




                  <ul className="space-y-2 text-gray-600">


                    <li>

                      📄 {plan.documents} documents

                    </li>


                    <li>

                      👥 {plan.users} utilisateurs

                    </li>


                  </ul>





                  {

                    company.plan === plan.id

                      ?

                      <Button variant="secondary">

                        Plan actuel

                      </Button>


                      :

                      <Button

                        onClick={() => changePlan(plan.id)}

                      >

                        Choisir

                      </Button>

                  }



                </div>



              </Card>


            ))

          }



        </div>


      </div>


    </DashboardLayout>

  );


}


export default Pricing;