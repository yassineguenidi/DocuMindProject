import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

interface DashboardLayoutProps {
    children: ReactNode;
}

function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <div className="flex h-screen bg-gray-100">

            {/* Sidebar */}
            <Sidebar />

            {/* Contenu */}
            <div className="flex flex-col flex-1">

                {/* Navbar */}
                <Navbar />

                {/* Page */}
                <main className="flex-1 p-6 overflow-auto">
                    {children}
                </main>

            </div>
        </div>
    );
}

export default DashboardLayout;