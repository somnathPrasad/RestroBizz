import Link from 'next/link';
import { useRouter } from 'next/router';

interface IBottomNavElement {
    title: string;
    icon?: string;
    href: string;
    isActive: boolean;
}

function BottomNavElement({ title, icon, href, isActive }: IBottomNavElement) {
    return (
        <Link href={href} className={`w-full`}>
            <div className={`py-3 w-full border-x-[1px] items-center justify-center flex ${isActive ? "rounded-t-2xl shadow-lg drop-shadow-2xl -translate-y-3" : "rounded-t-sm"} bg-white transition ease-in-out`}>
                {icon ? <div>
                    <span className="material-symbols-rounded text-4xl">
                        {icon}
                    </span>
                    <p className='text-xs text-slate-400 text-center'>{title}</p>
                </div> :
                    <p className="font-medium text-2xl text-center">{title}</p>
                }
            </div>
        </Link>
    )
}

export default function BottomNav() {
    const { pathname } = useRouter();
    return (
        <div className="bottom-0 fixed bg-gradient-to-b from-red-100 to-red-500 flex justify-evenly w-full rounded-t-xl shadow-xl shadow-black">
            <BottomNavElement isActive={pathname === "/Plate"} title="Plate" href="/Plate" icon="fastfood" />
            <BottomNavElement isActive={pathname === "/"} title="Menu" href="/" icon="restaurant_menu" />
            <BottomNavElement isActive={pathname === "/Bill"} title="Bill" href="/Bill" icon="receipt_long" />
        </div>
    )
}