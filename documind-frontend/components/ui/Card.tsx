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
            rounded-2xl
            border
            border-gray-100
            shadow-sm
            hover:shadow-md
            transition
            p-6
            ${className}
            `}
        >


            {
                title && (

                    <h2
                        className="
                        text-lg
                        font-semibold
                        text-gray-800
                        mb-5
                        "
                    >

                        {title}

                    </h2>

                )
            }


            {children}


        </div>

    );

}


export default Card;

// import type { ReactNode } from "react";


// interface CardProps {

//     title?: string;

//     children: ReactNode;

//     className?: string;

// }



// function Card({

//     title,

//     children,

//     className = ""

// }: CardProps) {


//     return (

//         <div

//             className={`
//             bg-white
//             rounded-2xl
//             border
//             border-slate-200
//             shadow-sm
//             hover:shadow-md
//             transition-all
//             duration-200
//             p-6
//             ${className}
//             `}

//         >


//             {
//                 title && (

//                     <div className="
//                         mb-6
//                         flex
//                         items-center
//                         justify-between
//                     ">


//                         <h2
//                             className="
//                             text-lg
//                             font-semibold
//                             text-slate-800
//                             "
//                         >

//                             {title}

//                         </h2>


//                     </div>

//                 )
//             }



//             {children}



//         </div>

//     );

// }


// export default Card;