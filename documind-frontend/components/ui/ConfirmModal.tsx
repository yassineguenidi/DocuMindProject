import Button from "../ui/Button";


interface ConfirmModalProps {

    isOpen: boolean;

    title: string;

    message: string;

    onConfirm: () => void;

    onCancel: () => void;

}



function ConfirmModal({

    isOpen,

    title,

    message,

    onConfirm,

    onCancel

}: ConfirmModalProps) {


    if (!isOpen) return null;



    return (

        <div
            className="
            fixed
            inset-0
            bg-black/40
            flex
            items-center
            justify-center
            z-50
            "
        >


            <div
                className="
                bg-white
                rounded-2xl
                p-6
                w-96
                shadow-xl
                "
            >


                <h2 className="
                text-xl
                font-bold
                mb-3
                ">

                    {title}

                </h2>



                <p className="
                text-gray-500
                mb-6
                ">

                    {message}

                </p>



                <div className="
                flex
                justify-end
                gap-3
                ">


                    <Button
                        variant="secondary"
                        onClick={onCancel}
                    >

                        Annuler

                    </Button>



                    <Button
                        variant="danger"
                        onClick={onConfirm}
                    >

                        Supprimer

                    </Button>


                </div>



            </div>


        </div>

    );


}


export default ConfirmModal;