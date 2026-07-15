import { Bell, Search } from "lucide-react";

function Navbar() {
    return (
        <header className="h-16 bg-white border-b flex items-center justify-between px-8">

            {/* Barre de recherche */}
            <div className="relative w-96">

                <Search
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                    type="text"
                    placeholder="Rechercher un document..."
                    className="
            w-full
            border
            rounded-lg
            py-2
            pl-10
            pr-4
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
          "
                />

            </div>

            {/* Partie droite */}
            <div className="flex items-center gap-6">

                <button className="relative">

                    <Bell
                        size={22}
                        className="text-gray-600 hover:text-blue-600"
                    />

                    <span
                        className="
              absolute
              -top-1
              -right-1
              w-2
              h-2
              bg-red-500
              rounded-full
            "
                    />

                </button>

                <div className="text-right">

                    <p className="font-semibold">
                        Yassine Guenidi
                    </p>

                    <p className="text-sm text-gray-500">
                        Starter Plan 
                    </p>

                </div>

                <div
                    className="
            w-10
            h-10
            rounded-full
            bg-blue-600
            text-white
            flex
            items-center
            justify-center
            font-bold
          "
                >
                    Y
                </div>

            </div>

        </header>
    );
}

export default Navbar;


// function Navbar() {
//     return (
//         <header className="h-16 bg-white border-b flex items-center justify-between px-6">

//             <div className="text-xl font-bold text-blue-600">
//                 DocuMind AI
//             </div>

//             <div className="flex items-center gap-4">

//                 <button className="text-gray-600 hover:text-blue-600">
//                     Notifications
//                 </button>

//                 <div className="flex items-center gap-2">
//                     <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
//                         Y
//                     </div>

//                     <span className="text-gray-700">
//                         Yassine
//                     </span>
//                 </div>

//             </div>

//         </header>
//     );
// }

// export default Navbar;