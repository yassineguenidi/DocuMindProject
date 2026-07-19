interface AvatarProps {
    firstname?: string;
    lastname?: string;
}


function Avatar({
    firstname,
    lastname
}: AvatarProps) {


    const initials =
        `${firstname?.[0] || ""}${lastname?.[0] || ""}`
            .toUpperCase();



    return (

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
            shadow-lg
            "
        >

            {initials}

        </div>

    );

}


export default Avatar;