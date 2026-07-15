import { NavLink } from "react-router-dom";
import { mockCompany } from "../data/mockData";
import { useAuth } from "../context/AuthContext";
import {
    LayoutDashboard,
    FileText,
    Upload,
    CreditCard,
    User,
    LogOut,
    Crown,
    Link
} from "lucide-react";

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
    // const documentsUsed = 250;
    // const documentLimit = 1000;
    const { logout } = useAuth();

    const documentsUsed =
        mockCompany.documentsUsed;


    const documentLimit =
        mockCompany.documentLimit;

    const percentage = (documentsUsed / documentLimit) * 100;

    return (
        <aside className="w-72 bg-white border-r flex flex-col justify-between">

            <div>

                <div className="p-6 border-b">

                    <h1 className="text-2xl font-bold text-blue-600">
                        DocuMind AI
                    </h1>

                    <p className="text-sm text-gray-500 mt-2">
                        Automatisation intelligente des documents
                    </p>

                </div>

                <nav className="p-4 space-y-2">

                    {menuItems.map((item) => {

                        const Icon = item.icon;

                        return (

                            <NavLink
                                key={item.name}
                                to={item.path}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 rounded-lg px-4 py-3 transition ${isActive
                                        ? "bg-blue-600 text-white"
                                        : "text-gray-600 hover:bg-gray-100"
                                    }`
                                }
                            >
                                <Icon size={20} />

                                {item.name}

                            </NavLink>

                        );
                    })}

                </nav>

            </div>











            <div className="p-5 border-t">

                <h3 className="font-semibold">
                    Quota mensuel
                </h3>

                <p className="text-sm text-gray-500 mt-2">
                    {documentsUsed} / {documentLimit} documents
                </p>

                <div className="bg-gray-200 rounded-full h-2 mt-3">

                    <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{
                            width: `${percentage}%`,
                        }}
                    />

                </div>

                <div className="mt-6 bg-blue-50 rounded-lg p-4">

                    <div className="flex items-center gap-2">

                        <Crown
                            size={18}
                            className="text-yellow-500"
                        />

                        <span className="font-semibold">
                            {mockCompany.plan}
                        </span>

                    </div>

                    <button
                        className="
              mt-4
              w-full
              bg-blue-600
              text-white
              rounded-lg
              py-2
              hover:bg-blue-700
            "
                    >
                        Upgrade
                    </button>

                </div>

                <button

                    onClick={logout}

                    className="
flex
items-center
gap-2
text-red-600
"

                >

                    <LogOut size={20} />

                    Logout

                </button>


                <Link to="/pricing">

                    <CreditCard size={20} />

                    Pricing

                </Link> 

            </div>

        </aside>
    );
}

export default Sidebar;