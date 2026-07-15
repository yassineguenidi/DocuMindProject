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

        <div className="
      bg-white
      rounded-xl
      shadow
      p-6
      flex
      justify-between
      items-start
    ">


            <div>


                <p className="text-gray-500">
                    {title}
                </p>


                <h2 className="text-3xl font-bold mt-2">
                    {value}
                </h2>


                {
                    description && (

                        <p className="text-sm text-gray-500 mt-2">
                            {description}
                        </p>

                    )
                }


            </div>



            {
                icon && (

                    <div className="
            bg-blue-50
            text-blue-600
            p-3
            rounded-lg
          ">

                        {icon}

                    </div>

                )
            }


        </div>

    );

}


export default StatsCard;