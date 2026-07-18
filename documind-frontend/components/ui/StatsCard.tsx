import type { ReactNode } from "react";


interface StatsCardProps {

    title: string;

    value: string;

    icon?: ReactNode;

    description?: string;

}




function StatsCard({

    title,

    value,

    icon,

    description


}: StatsCardProps) {



    return (


        <div


            className="
            bg-white
            border
            border-slate-200
            rounded-2xl
            p-6
            shadow-sm
            hover:shadow-md
            transition
            "


        >



            <div

                className="
                flex
                justify-between
                items-start
                "

            >



                <div>



                    <p

                        className="
                        text-sm
                        text-slate-500
                        "

                    >

                        {title}


                    </p>



                    <h2

                        className="
                        text-3xl
                        font-bold
                        text-slate-900
                        mt-3
                        "

                    >

                        {value}


                    </h2>



                    {
                        description &&


                        <p

                            className="
                            text-sm
                            text-slate-500
                            mt-3
                            "

                        >

                            {description}


                        </p>

                    }


                </div>







                {

                    icon &&


                    <div

                        className="
                        w-12
                        h-12
                        rounded-xl
                        bg-blue-50
                        text-blue-600
                        flex
                        items-center
                        justify-center
                        "

                    >

                        {icon}


                    </div>

                }



            </div>




        </div>



    );

}



export default StatsCard;