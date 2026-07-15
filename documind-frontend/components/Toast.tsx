import { CheckCircle, AlertCircle, X } from "lucide-react";


interface ToastProps {

    message: string;

    type: "success" | "error";

    onClose: () => void;

}



function Toast({
    message,
    type,
    onClose
}: ToastProps) {


    return (

        <div
            className={`
fixed
top-5
right-5
z-50
flex
items-center
gap-3
px-5
py-4
rounded-lg
shadow-lg
text-white
${type === "success"
                    ? "bg-green-600"
                    : "bg-red-600"}
`}
        >


            {
                type === "success"
                    ?
                    <CheckCircle />
                    :
                    <AlertCircle />
            }


            <p>
                {message}
            </p>


            <button
                onClick={onClose}
            >

                <X size={18} />

            </button>


        </div>

    )

}


export default Toast;