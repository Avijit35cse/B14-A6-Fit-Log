"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = () => {
    const pathName = usePathname()
    return (
        <div className="flex items-center gap-2">
            <Link href="/"
                className={`rounded-full  px-4 py-1.5 text-[12px]  font-inter transition-colors ${pathName === "/" ? "text-[#C2F800] bg-[#1A2312]" : "text-[#9CA3AF] hover:bg-[#1A2312] hover:text-[#C2F800] hover:font-semibold"}`}>Workouts</Link>

            <Link href="/my-plan"
                className={`rounded-full px-4 py-1.5 text-[12px] font-inter transition-colors ${pathName === "/my-plan" ? "text-[#C2F800] bg-[#1A2312] font-semibold": "text-[#9CA3AF] hover:bg-[#1A2312] hover:text-[#C2F800] hover:font-semibold"}`}>My Plan</Link>
        </div>
    );
};

export default NavLink;