import Image from 'next/image';
import Link from 'next/link';

const link = <>
    <Link href="/" className="rounded-full bg-[#1A2312] px-4 py-[6px] text-[12px] font-semibold font-inter text-[#C2F800]">Workouts</Link>
    <Link href="/my-plan" className='rounded-full px-4 py-[6px] text-[12px] font-medium font-inter text-[#9CA3AF]'>My Plan</Link>
</>

const Navbar = () => {
    return (
        <div className="bg-[#171717] border-b border-white/10">
            <div className="navbar container mx-auto px-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {link}
                        </ul>
                    </div>

                    <div className="flex gap-2 items-center">
                        <Image src="/logo.png" alt="logo" width={28} height={28}></Image>
                        <a className="text-[18px] font-bold font-oswalad">FITLOG</a>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex items-center gap-2">
                        {link}
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    <a className="text-[#D1D5DB] text-[12px] font-medium font-inter">Plan <span className='bg-[#C2F800] font-bold text-black text-[12px] px-2 py-1 rounded-[150px]'>0</span></a>
                    <a className="text-[#9CA3AF] text-[12px] font-medium font-inter">Saved<span className='bg-[#C2F800] font-bold text-black text-[12px] px-2 py-1 rounded-[150px]'>0</span></a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;