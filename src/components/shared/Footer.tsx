import Image from "next/image";

const Footer = () => {
    return (
        <div className="bg-[#0C0D10] border-t border-white/10 container mx-auto px-4 lg:px-10 py-4 lg:py-6 flex flex-col lg:flex-row justify-between mt-20">
            <div className="flex gap-2 items-center justify-center mb-4 lg:mb-0">
                <Image src="/footer_logo.png"
                alt="footer_logo" width={20} height={20}>
                </Image>
                <p className="text-[14px] text-[#FFFFFF] font-bold font-oswald">FITLOG</p>
            </div>
            <p className="text-[11px] sm:text-[12px] text-[#6B7280] font-regular text-center lg:text-right">© 2026 FitLog — Workout Library. Train hard, log honest.</p>
        </div>
    );
};

export default Footer;