interface ProfileCardProps {

    firstname: string;

    lastname: string;

    email: string;

    role: string;

}



function ProfileCard({

    firstname,

    lastname,

    email,

    role

}: ProfileCardProps) {


    return (

        <div
            className="
            bg-white
            rounded-xl
            shadow
            p-6
            flex
            items-center
            gap-5
            "
        >

            <div
                className="
                w-20
                h-20
                rounded-full
                bg-blue-600
                text-white
                flex
                items-center
                justify-center
                text-3xl
                font-bold
                "
            >

                {firstname[0]}

            </div>



            <div>

                <h2 className="text-xl font-bold">

                    {firstname} {lastname}

                </h2>


                <p className="text-gray-500">

                    {email}

                </p>


                <span
                    className="
                    inline-block
                    mt-2
                    px-3
                    py-1
                    rounded-full
                    bg-blue-100
                    text-blue-600
                    text-sm
                    "
                >

                    {role}

                </span>


            </div>


        </div>

    );

}


export default ProfileCard;