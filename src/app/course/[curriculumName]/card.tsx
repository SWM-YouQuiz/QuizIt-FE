import Link from "next/link";
import Image from "next/image";

const Card = ({name, logo}: {name: string, logo: string}) => {
    return (
        <Link
            href={`/chapter/${name}`}
            className="flex flex-col justify-between items-center p-2 h-40 w-40 border-2 rounded-lg shadow-lg shadow-bg-primary"
        >
            <div className="flex-1 flex items-center justify-center">
                <Image
                    src={"/next.svg"}
                    alt={`${name}-logo`}
                    width={100}
                    height={100}
                />
            </div>
            <div className="text-sm font-light">{name}</div>
        </Link>

    )
}

export default Card;