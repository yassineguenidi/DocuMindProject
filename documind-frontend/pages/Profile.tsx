import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import Button from "../components/Button";
import ProfileCard from "../components/ProfileCard";

import {
    getCurrentUser,
    updateProfile
} from "../services/userService";

import type { User } from "../types/user";



function Profile() {


    const [user, setUser] = useState<User | null>(null);


    const [firstname, setFirstname] = useState("");

    const [lastname, setLastname] = useState("");


    const [loading, setLoading] = useState(false);

    const [pageLoading, setPageLoading] = useState(true);





    useEffect(() => {


        async function loadUser() {


            try {


                const data = await getCurrentUser();


                setUser(data);

                setFirstname(data.firstname);

                setLastname(data.lastname);



            } catch (error) {


                console.error(
                    "Erreur chargement profil:",
                    error
                );


            } finally {


                setPageLoading(false);


            }


        }



        loadUser();



    }, []);






    async function handleUpdate() {


        try {


            setLoading(true);



            const updated = await updateProfile({

                firstname,

                lastname

            });



            setUser(updated);



            alert(
                "Profil mis à jour avec succès"
            );



        } catch (error) {


            console.error(
                "Erreur modification profil:",
                error
            );


            alert(
                "Erreur lors de la modification"
            );



        } finally {


            setLoading(false);


        }


    }






    if (pageLoading) {


        return (

            <DashboardLayout>

                <div className="text-center p-10">

                    Chargement du profil...

                </div>

            </DashboardLayout>

        );


    }







    return (


        <DashboardLayout>


            <div className="space-y-8">



                {/* Header */}

                <div>


                    <h1 className="text-3xl font-bold">

                        Mon profil

                    </h1>


                    <p className="text-gray-500 mt-2">

                        Gérez vos informations personnelles

                    </p>


                </div>







                {/* Profile Card */}


                {
                    user &&

                    <ProfileCard

                        firstname={user.firstname}

                        lastname={user.lastname}

                        email={user.email}

                        role={user.role}

                    />

                }







                {/* Personal Information */}


                <div
                    className="
                    bg-white
                    rounded-xl
                    shadow
                    p-6
                    max-w-xl
                    "
                >


                    <h2
                        className="
                        text-xl
                        font-semibold
                        mb-6
                        "
                    >

                        Informations personnelles

                    </h2>




                    <div className="space-y-4">



                        <div>


                            <label className="text-sm text-gray-500">

                                Prénom

                            </label>


                            <input

                                className="
                                w-full
                                border
                                rounded-lg
                                p-3
                                mt-1
                                "

                                value={firstname}

                                onChange={
                                    e =>
                                        setFirstname(
                                            e.target.value
                                        )
                                }

                            />


                        </div>






                        <div>


                            <label className="text-sm text-gray-500">

                                Nom

                            </label>


                            <input

                                className="
                                w-full
                                border
                                rounded-lg
                                p-3
                                mt-1
                                "

                                value={lastname}

                                onChange={
                                    e =>
                                        setLastname(
                                            e.target.value
                                        )
                                }

                            />


                        </div>







                        <div>


                            <label className="text-sm text-gray-500">

                                Email

                            </label>


                            <input

                                className="
                                w-full
                                border
                                rounded-lg
                                p-3
                                mt-1
                                bg-gray-100
                                "

                                value={
                                    user?.email || ""
                                }

                                disabled

                            />


                        </div>






                        <Button

                            onClick={handleUpdate}

                        >

                            {

                                loading

                                    ?

                                    "Enregistrement..."

                                    :

                                    "Sauvegarder"

                            }


                        </Button>





                    </div>



                </div>





            </div>



        </DashboardLayout>


    );


}



export default Profile;