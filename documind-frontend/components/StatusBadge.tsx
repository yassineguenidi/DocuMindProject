interface Props {

    status: string;

}


function StatusBadge({ status }: Props) {


    const styles = {

        COMPLETED:
            "bg-green-100 text-green-700",

        AI_PROCESSING:
            "bg-blue-100 text-blue-700",

        OCR:
            "bg-purple-100 text-purple-700",

        FAILED:
            "bg-red-100 text-red-700",

        UPLOADING:
            "bg-orange-100 text-orange-700"

    };



    const labels = {

        COMPLETED: "Terminé",

        AI_PROCESSING: "Analyse IA",

        OCR: "OCR",

        FAILED: "Erreur",

        UPLOADING: "Upload"

    };



    return (

        <span

            className={`px-3 py-1 rounded-full text-sm ${styles[status as keyof typeof styles]}`}

        >

            {labels[status as keyof typeof labels]}

        </span>

    );

}


export default StatusBadge;