import type { ReactNode } from "react";


interface ButtonProps {

    children: ReactNode;

    type?: "button" | "submit" | "reset";

    onClick?: () => void;

    disabled?: boolean;

    variant?: "primary" | "secondary" | "danger";

}



function Button({

    children,

    type = "button",

    onClick,

    disabled = false,

    variant = "primary"

}: ButtonProps) {



    const styles = {


        primary:
        `
        bg-blue-600
        text-white
        hover:bg-blue-700
        shadow-sm
        `,


        secondary:
        `
        bg-slate-100
        text-slate-700
        hover:bg-slate-200
        `,


        danger:
        `
        bg-red-600
        text-white
        hover:bg-red-700
        `


    };




    return (

        <button


            type={type}

            onClick={onClick}

            disabled={disabled}


            className={`
                px-5
                py-3
                rounded-xl
                font-medium
                text-sm
                transition-all
                duration-200
                active:scale-95
                disabled:opacity-50
                disabled:cursor-not-allowed

                ${styles[variant]}
            `}


        >


            {children}


        </button>


    );


}


export default Button;