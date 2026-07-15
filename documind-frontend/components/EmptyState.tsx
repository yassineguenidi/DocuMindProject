import { FileX } from "lucide-react";


interface EmptyStateProps {

    title: string;

    description: string;

}



function EmptyState({

    title,

    description

}: EmptyStateProps) {


    return (

        <div
            className="
flex
flex-col
items-center
justify-center
p-10
text-center
"
        >


            <FileX
                size={60}
                className="text-gray-400"
            />


            <h2
                className="
text-xl
font-bold
mt-4
"
            >

                {title}

            </h2>



            <p
                className="
text-gray-500
mt-2
"
            >

                {description}

            </p>



        </div>

    )

}


export default EmptyState;