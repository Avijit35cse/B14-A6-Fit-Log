import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
    return (
        <div className="hero bg-[#0C0D10] min-h-screen px-4 lg:px-10">
            <div className="hero-content bg-[#15171D] flex-col lg:flex-row-reverse justify-between items-center container mx-auto rounded-3xl p-[56px]">
                <Image
                    alt="hero_image"
                    src="/banner.png"
                    width={334}
                    height={334}
                    className="w-55 sm:w-70 lg:w-83.5 h-auto"
                />
                <div className='w-full lg:max-w-225'>
                    <p className='text-[#C2F800] text-[11px] font-bold font-inter'>WORKOUT LIBRARY</p>
                    <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-extrabold text-white py-4 lg:py-5 leading-tight tracking-[-1.5px]">TRAIN WITH INTENT. LOG
                        EVERY SET.</h1>
                    <p className="max-w-full lg:w-139.5 py-6 text-[#9CA3AF] text-[14px] lg:text-[16px] font-regular font-inter mb-8 leading-7">
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                        into today&apos;s plan, and watch the week&apos;s work add up.
                    </p>
                    <Link href="#library" className="btn btn-primary bg-[#C2F800] text-[12px] text-[#000000] font-bold font-inter">BROWSE WORKOUTS</Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;