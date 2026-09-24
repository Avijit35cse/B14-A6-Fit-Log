import Image from "next/image";

const Footer = () => {
    return (
        <div className="container mx-auto px-4 lg:px-10 py-8 lg:py-10 mt-12 lg:mt-16 flex flex-col lg:flex-row justify-between">
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