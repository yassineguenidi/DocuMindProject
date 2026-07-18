import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Documents from "../pages/Documents";
import Upload from "../pages/Upload";
import Pricing from "../pages/Pricing";
import Profile from "../pages/Profile";

import PrivateRoute from "./PrivateRoute";




function AppRoutes() {


    return (

        <BrowserRouter>


            <Routes>


                <Route
                    path="/"
                    element={<Navigate to="/login" replace />}
                />



                {/* Routes publiques */}

                <Route
                    path="/login"
                    element={<Login />}
                />



                <Route
                    path="/register"
                    element={<Register />}
                />




                {/* Routes privées */}

                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }
                />



                <Route
                    path="/documents"
                    element={
                        <PrivateRoute>
                            <Documents />
                        </PrivateRoute>
                    }
                />




                <Route
                    path="/upload"
                    element={
                        <PrivateRoute>
                            <Upload />
                        </PrivateRoute>
                    }
                />



                <Route
                    path="/pricing"
                    element={
                        <PrivateRoute>
                            <Pricing />
                        </PrivateRoute>
                    }
                />



                <Route
                    path="/profile"
                    element={
                        <PrivateRoute>
                            <Profile />
                        </PrivateRoute>
                    }
                />




                <Route
                    path="*"
                    element={<h1>404 - Page introuvable</h1>}
                />


            </Routes>


        </BrowserRouter>

    );

}


export default AppRoutes;

// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import Login from "../pages/Login";
// import Register from "../pages/Register";
// import Dashboard from "../pages/Dashboard";
// import Documents from "../pages/Documents";
// import Upload from "../pages/Upload";
// import Pricing from "../pages/Pricing";
// import Profile from "../pages/Profile";

// function AppRoutes() {
//     return (
//         <BrowserRouter>
//             <Routes>

//                 {/* Redirection de la page d'accueil */}
//                 <Route path="/" element={<Navigate to="/login" replace />} />

//                 {/* Authentification */}
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/register" element={<Register />} />

//                 {/* Dashboard */}
//                 <Route path="/dashboard" element={<Dashboard />} />

//                 {/* Documents */}
//                 <Route path="/documents" element={<Documents />} />

//                 {/* Upload */}
//                 <Route path="/upload" element={<Upload />} />

//                 {/* Tarifs */}
//                 <Route path="/pricing" element={<Pricing />} />

//                 {/* Profil */}
//                 <Route path="/profile" element={<Profile />} />

//                 {/* Route inconnue */}
//                 <Route path="*" element={<h1>404 - Page introuvable</h1>} />

//             </Routes>
//         </BrowserRouter>
//     );
// }

// export default AppRoutes;