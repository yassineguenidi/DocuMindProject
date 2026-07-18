import { ReactNode } from "react";

import Navbar from "../components/layouts/Navbar";
import Sidebar from "../components/layouts/Sidebar";


interface DashboardLayoutProps {

    children: ReactNode;

}



function DashboardLayout({

    children

}: DashboardLayoutProps) {


    return (

        <div
            className="
            flex
            min-h-screen
            bg-slate-50
            "
        >



            {/* Sidebar */}

            <aside
                className="
                w-72
                hidden
                md:block
                border-r
                border-slate-200
                bg-white
                "
            >

                <Sidebar />

            </aside>







            {/* Main Area */}


            <div
                className="
                flex-1
                flex
                flex-col
                min-w-0
                "
            >



                {/* Navbar */}

                <header
                    className="
                    h-20
                    bg-white
                    border-b
                    border-slate-200
                    flex
                    items-center
                    "
                >

                    <Navbar />

                </header>







                {/* Content */}


                <main

                    className="
                    flex-1
                    overflow-y-auto
                    p-6
                    lg:p-10
                    "

                >


                    {children}


                </main>



            </div>



        </div>

    );

}


export default DashboardLayout;