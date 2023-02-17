import Link from "next/link";

export default function MenuItem({ title, address }) {
    return (
        <div>
            <Link href={address} className="mx-4 lg:mx-6 hover:text-amber-400">

                <p className="hidden sm:inline my-2 font-mono font-semibold ">
                    {title}
                </p>
            </Link>
        </div>
    );
}
