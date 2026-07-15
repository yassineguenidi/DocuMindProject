interface Props {

    value: string;

    onChange: (value: string) => void;

}


function DocumentTypeSelector({
    value,
    onChange
}: Props) {


    const types = [

        "Facture",

        "Contrat",

        "CV",

        "Carte identité",

        "Autre"

    ];


    return (

        <div>

            <label className="font-semibold">
                Type de document
            </label>


            <select

                value={value}

                onChange={(e) => onChange(e.target.value)}

                className="
w-full
border
rounded-lg
p-3
mt-2
"

            >


                <option value="">
                    Sélectionner
                </option>


                {
                    types.map(type => (

                        <option
                            key={type}
                            value={type}
                        >

                            {type}

                        </option>

                    ))
                }


            </select>


        </div>

    )

}


export default DocumentTypeSelector;