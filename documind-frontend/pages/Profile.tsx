import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import Avatar from "../components/ui/Avatar";

import Button from "../components//ui/Button";

import Card from "../components/ui/Card";

import {
    Mail,
    Shield,
    Building2,
    User
} from "lucide-react";


import {
    getCurrentUser,
    updateProfile
} from "../services/userService";


import type { User as UserType } from "../types/user";


import toast from "react-hot-toast";



function Profile() {


    const [user, setUser] =
        useState<UserType | null>(null);



    const [firstname, setFirstname] =
        useState("");



    const [lastname, setLastname] =
        useState("");



    const [loading, setLoading] =
        useState(false);





    useEffect(() => {


        async function load() {


            const data =
                await getCurrentUser();



            setUser(data);

            setFirstname(
                data.firstname
            );

            setLastname(
                data.lastname
            );


        }


        load();


    }, []);





    async function saveProfile() {


        try {


            setLoading(true);



            const updated =
                await updateProfile({

                    firstname,

                    lastname

                });



            setUser(updated);



            toast.success(
                "Profil mis à jour"
            );



        } catch (error) {


            toast.error(
                "Erreur lors de la mise à jour"
            );


        }
        finally {

            setLoading(false);

        }


    }






    return (

        <DashboardLayout>


            <div
                className="
                space-y-8
                "
            >



                <div>

                    <h1 className="
                    text-3xl
                    font-bold
                    ">

                        Mon profil

                    </h1>


                    <p className="
                    text-gray-500
                    mt-2
                    ">

                        Gérez votre compte DocuMind AI

                    </p>

                </div>





                {/* Profil header */}


                <Card>


                    <div
                        className="
                        flex
                        items-center
                        gap-6
                        "
                    >


                        <Avatar

                            firstname={
                                user?.firstname
                            }

                            lastname={
                                user?.lastname
                            }

                        />



                        <div>


                            <h2
                                className="
                                text-2xl
                                font-bold
                                "
                            >

                                {
                                    user?.firstname
                                }
                                {" "}
                                {
                                    user?.lastname
                                }


                            </h2>



                            <div
                                className="
                                flex
                                items-center
                                gap-2
                                text-gray-500
                                mt-2
                                "
                            >

                                <Mail size={16} />

                                {
                                    user?.email
                                }


                            </div>


                        </div>


                    </div>


                </Card>







                <div
                    className="
                    grid
                    grid-cols-1
                    lg:grid-cols-2
                    gap-6
                    "
                >



                    <Card title="Informations personnelles">


                        <div
                            className="
                            space-y-4
                            "
                        >


                            <input

                                className="
                                w-full
                                border
                                rounded-xl
                                p-3
                                "

                                value={firstname}

                                onChange={
                                    e =>
                                        setFirstname(
                                            e.target.value
                                        )
                                }

                                placeholder="Prénom"

                            />



                            <input

                                className="
                                w-full
                                border
                                rounded-xl
                                p-3
                                "

                                value={lastname}

                                onChange={
                                    e =>
                                        setLastname(
                                            e.target.value
                                        )
                                }

                                placeholder="Nom"

                            />



                            <Button

                                onClick={
                                    saveProfile
                                }

                            >

                                {
                                    loading
                                        ?
                                        "Sauvegarde..."
                                        :
                                        "Sauvegarder"
                                }


                            </Button>


                        </div>


                    </Card>







                    <Card title="Sécurité">


                        <div
                            className="
                            space-y-4
                            "
                        >

                            <div
                                className="
                                flex
                                items-center
                                gap-3
                                "
                            >

                                <Shield
                                    className="
                                    text-blue-600
                                    "
                                />


                                <p>

                                    Mot de passe sécurisé

                                </p>


                            </div>



                            <Button
                                variant="secondary"
                            >

                                Modifier le mot de passe

                            </Button>


                        </div>


                    </Card>




                </div>







                <Card title="Entreprise">


                    <div
                        className="
                        flex
                        items-center
                        gap-3
                        "
                    >

                        <Building2
                            className="text-blue-600"
                        />


                        <div>

                            <p
                                className="
                                font-semibold
                                "
                            >

                                DocuMind AI

                            </p>


                            <p
                                className="
                                text-gray-500
                                "
                            >

                                Plan Starter

                            </p>

                        </div>


                    </div>


                </Card>



            </div>


        </DashboardLayout>

    );


}


export default Profile;

// import { useEffect, useState } from "react";

// import DashboardLayout from "../layouts/DashboardLayout";

// import Button from "../components/ui/Button";
// import ProfileCard from "../components/ui/ProfileCard";

// import {
//     getCurrentUser,
//     updateProfile
// } from "../services/userService";

// import type { User } from "../types/user";



// function Profile() {


//     const [user, setUser] = useState<User | null>(null);


//     const [firstname, setFirstname] = useState("");

//     const [lastname, setLastname] = useState("");


//     const [loading, setLoading] = useState(false);

//     const [pageLoading, setPageLoading] = useState(true);





//     useEffect(() => {


//         async function loadUser() {


//             try {


//                 const data = await getCurrentUser();


//                 setUser(data);

//                 setFirstname(data.firstname);

//                 setLastname(data.lastname);



//             } catch (error) {


//                 console.error(
//                     "Erreur chargement profil:",
//                     error
//                 );


//             } finally {


//                 setPageLoading(false);


//             }


//         }



//         loadUser();



//     }, []);






//     async function handleUpdate() {


//         try {


//             setLoading(true);



//             const updated = await updateProfile({

//                 firstname,

//                 lastname

//             });



//             setUser(updated);



//             alert(
//                 "Profil mis à jour avec succès"
//             );



//         } catch (error) {


//             console.error(
//                 "Erreur modification profil:",
//                 error
//             );


//             alert(
//                 "Erreur lors de la modification"
//             );



//         } finally {


//             setLoading(false);


//         }


//     }






//     if (pageLoading) {


//         return (

//             <DashboardLayout>

//                 <div className="text-center p-10">

//                     Chargement du profil...

//                 </div>

//             </DashboardLayout>

//         );


//     }







//     return (


//         <DashboardLayout>


//             <div className="space-y-8">



//                 {/* Header */}

//                 <div>


//                     <h1 className="text-3xl font-bold">

//                         Mon profil

//                     </h1>


//                     <p className="text-gray-500 mt-2">

//                         Gérez vos informations personnelles

//                     </p>


//                 </div>







//                 {/* Profile Card */}


//                 {
//                     user &&

//                     <ProfileCard

//                         firstname={user.firstname}

//                         lastname={user.lastname}

//                         email={user.email}

//                         role={user.role}

//                     />

//                 }







//                 {/* Personal Information */}


//                 <div
//                     className="
//                     bg-white
//                     rounded-xl
//                     shadow
//                     p-6
//                     max-w-xl
//                     "
//                 >


//                     <h2
//                         className="
//                         text-xl
//                         font-semibold
//                         mb-6
//                         "
//                     >

//                         Informations personnelles

//                     </h2>




//                     <div className="space-y-4">



//                         <div>


//                             <label className="text-sm text-gray-500">

//                                 Prénom

//                             </label>


//                             <input

//                                 className="
//                                 w-full
//                                 border
//                                 rounded-lg
//                                 p-3
//                                 mt-1
//                                 "

//                                 value={firstname}

//                                 onChange={
//                                     e =>
//                                         setFirstname(
//                                             e.target.value
//                                         )
//                                 }

//                             />


//                         </div>






//                         <div>


//                             <label className="text-sm text-gray-500">

//                                 Nom

//                             </label>


//                             <input

//                                 className="
//                                 w-full
//                                 border
//                                 rounded-lg
//                                 p-3
//                                 mt-1
//                                 "

//                                 value={lastname}

//                                 onChange={
//                                     e =>
//                                         setLastname(
//                                             e.target.value
//                                         )
//                                 }

//                             />


//                         </div>







//                         <div>


//                             <label className="text-sm text-gray-500">

//                                 Email

//                             </label>


//                             <input

//                                 className="
//                                 w-full
//                                 border
//                                 rounded-lg
//                                 p-3
//                                 mt-1
//                                 bg-gray-100
//                                 "

//                                 value={
//                                     user?.email || ""
//                                 }

//                                 disabled

//                             />


//                         </div>






//                         <Button

//                             onClick={handleUpdate}

//                         >

//                             {

//                                 loading

//                                     ?

//                                     "Enregistrement..."

//                                     :

//                                     "Sauvegarder"

//                             }


//                         </Button>





//                     </div>



//                 </div>





//             </div>



//         </DashboardLayout>


//     );


// }



// export default Profile;