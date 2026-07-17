import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {


  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const { login } = useAuth();

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

          DocuMind AI

        </h1>



        <p
          className="
text-center
text-gray-500
mt-3
"
        >

          Automatisez vos documents avec l'IA

        </p>




        <div className="mt-8 space-y-4">


          <input

            type="email"

            placeholder="Email"

            value={email}

            onChange={(e) => setEmail(e.target.value)}

            className="
w-full
border
rounded-lg
p-3
"

          />



          <input

            type="password"

            placeholder="Mot de passe"

            value={password}

            onChange={(e) => setPassword(e.target.value)}

            className="
w-full
border
rounded-lg
p-3
"

          />



          <button

            onClick={async () => {

              try {

                await login(
                  email,
                  password
                );

                window.location.href = "/dashboard";

              } catch (error) {

                console.error(
                  "Login failed",
                  error
                );

                alert(
                  "Email ou mot de passe incorrect"
                );

              }

            }}

            className="
w-full
bg-blue-600
text-white
py-3
rounded-lg
"

          >

            Se connecter

          </button>



        </div>




        <p
          className="
text-center
mt-6
text-gray-500
"
        >

          Pas encore inscrit ?

          <Link
            to="/register"
            className="text-blue-600 ml-2"
          >

            Créer un compte

          </Link>


        </p>



      </div>


    </div>

  )

}


export default Login;