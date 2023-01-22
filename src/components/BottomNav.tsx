import Link from 'next/link';
import { useRouter } from 'next/router';

interface IBottomNavElement {
    title: string;
    icon?: string;
    href: string;
    isActive: boolean;
}

function isBottomNavHidden(pathname: string) {
    if (pathname.startsWith("/restaurants") || pathname.startsWith("/bill") || pathname.startsWith("/plate")) {
        return false;
    }
    return true;
}

function BottomNavElement({ title, icon, href, isActive }: IBottomNavElement) {
    return (
        <Link href={href} className={`w-full`}>
            <div className={`py-3 w-full border-x-[1px] items-center justify-center flex ${isActive ? "rounded-t-2xl shadow-lg drop-shadow-2xl -translate-y-3" : "rounded-t-sm"} bg-white transition ease-in-out`}>
                {icon ? <div>
                    <span className="text-4xl material-symbols-rounded">
                        {icon}
                    </span>
                    <p className='text-xs text-center text-slate-400'>{title}</p>
                </div> :
                    <p className="text-2xl font-medium text-center">{title}</p>
                }
            </div>
        </Link>
    )
}

export default function BottomNav() {
    const { pathname, query } = useRouter();
    const hidden = isBottomNavHidden(pathname)
    return (
        <div className={`fixed bottom-0 flex w-full shadow-xl bg-gradient-to-b from-red-100 to-red-500 justify-evenly rounded-t-xl shadow-black ${hidden && "hidden"}`}>
            <BottomNavElement isActive={pathname.startsWith("/plate/")} title="Plate" href={`/plate/${query.id}`} icon="fastfood" />
            <BottomNavElement isActive={pathname.startsWith("/restaurants/")} title="Menu" href={`/restaurants/${query.id}`} icon="restaurant_menu" />
            <BottomNavElement isActive={pathname.startsWith("/bill/")} title="Bill" href={`/bill/${query.id}`} icon="receipt_long" />
        </div>
    )
}