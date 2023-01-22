import Link from "next/link";
import { useRouter } from "next/router";

export default function MenuTopBar({ title = "Menu" }) {
    const router = useRouter();
    const restroId = router.asPath.split("/")[2];
    return (
        <div className="fixed top-0 left-0 right-0 w-full py-4 text-center border border-b border-gray-200 shadow-2xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 shadow-slate-300">
            <p className='text-3xl font-medium'> {title}
            </p>
            {title === "Restro Bizz" && <Link href={"/restaurants/add"} className="">🔗Add restaurants →</Link>}
            {title === "Menu" && <Link href={`/foods/${restroId}/add`} className="italic">Add food items to menu</Link>}
        </div>
    )
}