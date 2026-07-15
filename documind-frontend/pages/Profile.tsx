import DashboardLayout from "../layouts/DashboardLayout";
import Card from "../components/Card";
import { useAuth } from "../context/AuthContext";
import { useCompany } from "../context/CompanyContext";


function Profile() {

    const { user } = useAuth();

    const { company } = useCompany();


    return (

        <DashboardLayout>

            <div className="space-y-6">


                <h1 className="text-3xl font-bold">

                    Mon profil

                </h1>


                <Card title="Utilisateur">


                    <p>
                        Nom :
                        {user?.firstname}
                        {user?.lastname}
                    </p>


                    <p>
                        Email :
                        {user?.email}
                    </p>


                    <p>
                        Rôle :
                        {user?.role}
                    </p>


                </Card>



                <Card title="Entreprise">


                    <p>
                        Entreprise :
                        {company.name}
                    </p>


                    <p>
                        Plan :
                        {company.plan}
                    </p>


                </Card>


            </div>


        </DashboardLayout>

    );

}


export default Profile;