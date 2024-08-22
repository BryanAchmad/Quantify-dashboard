import Image from "next/image";
import Link from "next/link";

const menuItems = [
    {
        icon: "/dashboard.svg",
        label: "Dashboard",
        href: "/dashboard",
        // visible: ["admin", "teacher", "student", "parent"],
    },
    {
        icon: "/store.svg",
        label: "Store",
        href: "/store",
        // visible: ["admin", "teacher", "student", "parent"],
    },
    {
        icon: "/user.svg",
        label: "Customers",
        href: "/customers",
        // visible: ["admin", "teacher", "student", "parent"],
    },
    {
        icon: "/envelope.svg",
        label: "Email",
        href: "/email",
        // visible: ["admin", "teacher", "student", "parent"],
    },
    {
        icon: "/bell.svg",
        label: "Notifications",
        href: "/notifications",
        // visible: ["admin", "teacher", "student", "parent"],
    },
    {
        icon: "/calendar.svg",
        label: "Scheduling",
        href: "/scheduling",
        // visible: ["admin", "teacher", "student", "parent"],
    },
];

const Menu = () => {
    return (
        menuItems.map((i) => (
            <div className="flex flex-col gap-2" key={i.label}>
                <Link 
                    href={i.href} 
                    key={i.label} 
                    className="flex items-center justify-center lg:justify-start gap-2 text-gray-500 py-1 px-3">
                    <Image src={i.icon} alt="" width={20} height={20} />
                    <span className="hidden lg:block text-[16px] text-[#797979]">{i.label}</span>
                </Link>
            </div>
        ))
    )
} 

export default Menu;