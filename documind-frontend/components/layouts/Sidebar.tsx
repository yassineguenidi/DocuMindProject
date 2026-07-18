import { NavLink } from "react-router-dom";

import {
    LayoutDashboard,
    FileText,
    Upload,
    CreditCard,
    User,
    LogOut,
    Crown
} from "lucide-react";


import { useAuth } from "../../context/AuthContext";
import { mockCompany } from "../../data/mockData";




const menuItems = [

    {
        name: "Dashboard",
        path: "/dashboard",
        icon: LayoutDashboard,
    },

    {
        name: "Documents",
        path: "/documents",
        icon: FileText,
    },

    {
        name: "Upload",
        path: "/upload",
        icon: Upload,
    },

    {
        name: "Pricing",
        path: "/pricing",
        icon: CreditCard,
    },

    {
        name: "Profile",
        path: "/profile",
        icon: User,
    },

];





function Sidebar() {


    const { logout } = useAuth();



    const percentage =
        (mockCompany.documentsUsed /
            mockCompany.documentLimit) * 100;





    return (


        <aside
            className="
            h-screen
            flex
            flex-col
            justify-between
            bg-white
            "
        >



            <div>


                {/* Logo */}


                <div
                    className="
                    px-6
                    py-7
                    border-b
                    "
                >


                    <h1
                        className="
                        text-2xl
                        font-bold
                        tracking-tight
                        text-blue-600
                        "
                    >

                        DocuMind AI

                    </h1>


                    <p
                        className="
                        text-xs
                        text-slate-500
                        mt-2
                        leading-relaxed
                        "
                    >

                        Intelligent document automation platform

                    </p>


                </div>







                {/* Navigation */}


                <nav
                    className="
                    p-4
                    space-y-1
                    "
                >


                    {
                        menuItems.map((item) => {


                            const Icon = item.icon;



                            return (

                                <NavLink

                                    key={item.name}

                                    to={item.path}

                                    className={({ isActive }) =>

                                        `
                                    flex
                                    items-center
                                    gap-3
                                    px-4
                                    py-3
                                    rounded-xl
                                    text-sm
                                    font-medium
                                    transition-all
                                    ${isActive

                                            ?

                                            "bg-blue-600 text-white shadow-md shadow-blue-200"

                                            :

                                            "text-slate-600 hover:bg-slate-100"

                                        }
                                    `

                                    }

                                >


                                    <Icon size={19} />


                                    {item.name}



                                </NavLink>

                            );


                        })
                    }



                </nav>



            </div>









            {/* Bottom Section */}


            <div
                className="
                p-5
                space-y-5
                "
            >





                {/* Quota */}


                <div
                    className="
                    bg-slate-50
                    rounded-2xl
                    p-4
                    "
                >


                    <div
                        className="
                        flex
                        justify-between
                        items-center
                        "
                    >


                        <span
                            className="
                            text-sm
                            font-semibold
                            "
                        >

                            Storage

                        </span>


                        <span
                            className="
                            text-xs
                            text-slate-500
                            "
                        >

                            {mockCompany.documentsUsed}/
                            {mockCompany.documentLimit}

                        </span>


                    </div>





                    <div
                        className="
                        h-2
                        bg-slate-200
                        rounded-full
                        mt-3
                        overflow-hidden
                        "
                    >

                        <div

                            className="
                            h-full
                            bg-blue-600
                            rounded-full
                            "

                            style={{
                                width: `${percentage}%`
                            }}

                        />

                    </div>


                </div>







                {/* Plan */}


                <div
                    className="
                    bg-gradient-to-br
                    from-blue-50
                    to-indigo-50
                    rounded-2xl
                    p-4
                    "
                >


                    <div
                        className="
                        flex
                        items-center
                        gap-2
                        "
                    >


                        <Crown
                            size={18}
                            className="text-yellow-500"
                        />


                        <span
                            className="
                            font-semibold
                            text-sm
                            "
                        >

                            {mockCompany.plan}

                        </span>


                    </div>




                    <button

                        className="
                        mt-4
                        w-full
                        bg-blue-600
                        hover:bg-blue-700
                        text-white
                        rounded-xl
                        py-2
                        text-sm
                        transition
                        "

                    >

                        Upgrade

                    </button>


                </div>







                {/* Logout */}


                <button

                    onClick={logout}

                    className="
                    flex
                    items-center
                    gap-3
                    text-sm
                    text-red-500
                    hover:text-red-600
                    px-3
                    "

                >


                    <LogOut size={18} />


                    Logout


                </button>



            </div>



        </aside>


    );

}



export default Sidebar;


// import { NavLink } from "react-router-dom";
// import { mockCompany } from "../data/mockData";
// import { useAuth } from "../context/AuthContext";
// import {
//     LayoutDashboard,
//     FileText,
//     Upload,
//     CreditCard,
//     User,
//     LogOut,
//     Crown,
//     Link
// } from "lucide-react";

// const menuItems = [
//     {
//         name: "Dashboard",
//         path: "/dashboard",
//         icon: LayoutDashboard,
//     },
//     {
//         name: "Documents",
//         path: "/documents",
//         icon: FileText,
//     },
//     {
//         name: "Upload",
//         path: "/upload",
//         icon: Upload,
//     },
//     {
//         name: "Pricing",
//         path: "/pricing",
//         icon: CreditCard,
//     },
//     {
//         name: "Profile",
//         path: "/profile",
//         icon: User,
//     },
// ];

// function Sidebar() {
//     // const documentsUsed = 250;
//     // const documentLimit = 1000;
//     const { logout } = useAuth();

//     const documentsUsed =
//         mockCompany.documentsUsed;


//     const documentLimit =
//         mockCompany.documentLimit;

//     const percentage = (documentsUsed / documentLimit) * 100;

//     return (
//         <aside className="w-72 bg-white border-r flex flex-col justify-between">

//             <div>

//                 <div className="p-6 border-b">

//                     <h1 className="text-2xl font-bold text-blue-600">
//                         DocuMind AI
//                     </h1>

//                     <p className="text-sm text-gray-500 mt-2">
//                         Automatisation intelligente des documents
//                     </p>

//                 </div>

//                 <nav className="p-4 space-y-2">

//                     {menuItems.map((item) => {

//                         const Icon = item.icon;

//                         return (

//                             <NavLink
//                                 key={item.name}
//                                 to={item.path}
//                                 className={({ isActive }) =>
//                                     `flex items-center gap-3 rounded-lg px-4 py-3 transition ${isActive
//                                         ? "bg-blue-600 text-white"
//                                         : "text-gray-600 hover:bg-gray-100"
//                                     }`
//                                 }
//                             >
//                                 <Icon size={20} />

//                                 {item.name}

//                             </NavLink>

//                         );
//                     })}

//                 </nav>

//             </div>











//             <div className="p-5 border-t">

//                 <h3 className="font-semibold">
//                     Quota mensuel
//                 </h3>

//                 <p className="text-sm text-gray-500 mt-2">
//                     {documentsUsed} / {documentLimit} documents
//                 </p>

//                 <div className="bg-gray-200 rounded-full h-2 mt-3">

//                     <div
//                         className="bg-blue-600 h-2 rounded-full"
//                         style={{
//                             width: `${percentage}%`,
//                         }}
//                     />

//                 </div>

//                 <div className="mt-6 bg-blue-50 rounded-lg p-4">

//                     <div className="flex items-center gap-2">

//                         <Crown
//                             size={18}
//                             className="text-yellow-500"
//                         />

//                         <span className="font-semibold">
//                             {mockCompany.plan}
//                         </span>

//                     </div>

//                     <button
//                         className="
//               mt-4
//               w-full
//               bg-blue-600
//               text-white
//               rounded-lg
//               py-2
//               hover:bg-blue-700
//             "
//                     >
//                         Upgrade
//                     </button>

//                 </div>

//                 <button

//                     onClick={logout}

//                     className="
// flex
// items-center
// gap-2
// text-red-600
// "

//                 >

//                     <LogOut size={20} />

//                     Logout

//                 </button>


//                 <Link to="/pricing">

//                     <CreditCard size={20} />

//                     Pricing

//                 </Link>

//             </div>

//         </aside>
//     );
// }

// export default Sidebar;