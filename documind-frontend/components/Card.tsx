import type { ReactNode } from "react";


interface CardProps {

    title?: string;

    children: ReactNode;

    className?: string;

}



function Card({

    title,

    children,

    className = ""

}: CardProps) {


    return (

        <div
            className={`
        bg-white
        rounded-xl
        shadow
        p-6
        ${className}
      `}
        >


            {
                title && (

                    <h2
                        className="
            text-xl
            font-bold
            mb-4
            "
                    >

                        {title}

                    </h2>

                )
            }



            <div>

                {children}

            </div>



        </div>

    );

}


export default Card;