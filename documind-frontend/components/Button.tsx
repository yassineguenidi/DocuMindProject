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
            "bg-blue-600 text-white hover:bg-blue-700",

        secondary:
            "bg-gray-200 text-gray-700 hover:bg-gray-300",

        danger:
            "bg-red-600 text-white hover:bg-red-700"

    };



    return (

        <button

            type={type}

            onClick={onClick}

            disabled={disabled}

            className={`
        px-5
        py-3
        rounded-lg
        font-medium
        transition
        disabled:opacity-50
        ${styles[variant]}
      `}

        >

            {children}

        </button>

    );

}


export default Button;