import type { ReactNode } from "react";
import { X } from "lucide-react";

interface ModalProps {

    isOpen: boolean;

    title: string;

    children: ReactNode;

    onClose: () => void;

}

function Modal({

    isOpen,

    title,

    children,

    onClose

}: ModalProps) {

    if (!isOpen) return null;

    return (

        <div
            className="
        fixed
        inset-0
        bg-black/50
        flex
        items-center
        justify-center
        z-50
      "
        >

            <div
                className="
          bg-white
          rounded-xl
          shadow-xl
          w-full
          max-w-4xl
          max-h-[90vh]
          overflow-auto
        "
            >

                <div
                    className="
            flex
            justify-between
            items-center
            border-b
            p-5
          "
                >

                    <h2 className="text-xl font-bold">
                        {title}
                    </h2>

                    <button onClick={onClose}>
                        <X />
                    </button>

                </div>

                <div className="p-6">

                    {children}

                </div>

            </div>

        </div>

    );

}

export default Modal;