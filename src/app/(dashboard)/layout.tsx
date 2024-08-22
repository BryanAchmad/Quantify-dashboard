import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="h-screen flex bg-[#161618]">
			<div className="flex flex-col w-[18%] md:w[8%] lg:w-[18%] xl:w-[18%] p-[12px] gap-[24px]">
				<Link
					href="/"
					className="flex items-center justify-center lg:justify-start gap-2 p-[12px] rounded-xl bg-[#080808] ring-inset ring-2 ring-[#1B1D24]"
				>
					<Image src="/logo.png" alt="logo" width={24} height={24} />
					<span className="hidden lg:block text-white font-semibold text-[18px]">Quantify</span>
				</Link>
				<div className="flex items-center gap-2 bg-[#242424] rounded-[12px] p-3">
                    <Image src="/search.png" alt="" width={20} height={20} />
                    <input type="text" placeholder="Search" className="w-[128px] bg-transparent outline-none text-[14px]"/>
                    {/* <div className="flex gap-1">
                        <Image src="/command.png" alt="" width={20} height={20} />
                        <Image src="/k-letter.png" alt="" width={20} height={20} />
                    </div> */}
                </div>
				<Menu />
			</div>
			<div className="w-[82%] md:w[92%] lg:w-[82%] xl:w-[82%] bg-[#161618] overflow-scroll p-2 overflow-y-scroll no-scrollbar">
				{children}
			</div>
		</div>
	);
}
