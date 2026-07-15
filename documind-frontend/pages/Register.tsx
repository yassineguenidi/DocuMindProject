import { Link } from "react-router-dom";


function Register() {


    return (

        <div

            className="
min-h-screen
flex
items-center
justify-center
bg-gray-100
"

        >


            <div

                className="
bg-white
shadow-xl
rounded-xl
p-8
w-full
max-w-md
"

            >


                <h1

                    className="
text-3xl
font-bold
text-blue-600
text-center
"

                >

                    Créer un compte

                </h1>



                <p

                    className="
text-gray-500
text-center
mt-2
"

                >

                    Commencez avec DocuMind AI

                </p>




                <div className="space-y-4 mt-8">



                    <input

                        placeholder="Nom complet"

                        className="
w-full
border
rounded-lg
p-3
"

                    />



                    <input

                        placeholder="Email professionnel"

                        type="email"

                        className="
w-full
border
rounded-lg
p-3
"

                    />




                    <input

                        placeholder="Nom de l'entreprise"

                        className="
w-full
border
rounded-lg
p-3
"

                    />



                    <input

                        placeholder="Mot de passe"

                        type="password"

                        className="
w-full
border
rounded-lg
p-3
"

                    />



                    <button

                        className="
w-full
bg-blue-600
text-white
py-3
rounded-lg
hover:bg-blue-700
"

                    >

                        Créer mon espace

                    </button>



                </div>



                <p

                    className="
text-center
mt-6
text-gray-500
"

                >

                    Déjà un compte ?

                    <Link

                        to="/login"

                        className="
text-blue-600
ml-2
"

                    >

                        Connexion

                    </Link>


                </p>



            </div>


        </div>

    )

}


export default Register;