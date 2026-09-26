import Image from "next/image";
import { Clock3, Flame, Star } from "lucide-react";
import { Iworkout } from "@/types/type";
import Link from "next/link";

const FitnessCard = ({ fitness }: { fitness: Iworkout }) => {
    return (
        <Link
            href={`/workout/${fitness.id}`}
            className="card bg-[#15171D] shadow-sm w-full overflow-hidden
            transition-all duration-300 ease-in-out
            hover:-translate-y-2 hover:shadow-xl
            hover:border hover:border-[#C2F800]/20"
        >
            <figure>
                <Image
                    src={fitness.image}
                    alt={fitness.name}
                    width={392.67}
                    height={192}
                    className="w-full h-70 object-cover"
                />
            </figure>

            <div className="card-body">
                <div className="flex flex-wrap gap-2 mt-3">
                    {fitness.muscleGroups.map((muscle: string) => (
                        <span
                            key={muscle}
                            className="text-[11px] text-[#000000] font-bold font-inter leading-[16.5px] tracking-[0.55px] border border-white/10 bg-[#C2F800] px-2.5 py-0.5 rounded-3xl"
                        >
                            {muscle}
                        </span>
                    ))}
                </div>

                <h2 className="card-title text-[18px] font-bold font-oswald leading-7 tracking-[0.45px] pt-2 uppercase">
                    {fitness.name}
                </h2>

                <p className="text-[12px] text-[#9CA3AF] font-regular font-inter leading-6 border-b border-white/5">
                    {fitness.equipment}
                </p>

                <div className="card-actions flex gap-4 mt-4">
                    <div className="flex gap-1 items-center justify-center text-[#9CA3AF] text-[12px] font-regular font-inter">
                        <Clock3 size={17} />
                        <span>{fitness.duration} min</span>
                    </div>

                    <div className="flex gap-1 items-center justify-center text-[#9CA3AF] text-[12px] font-regular font-inter">
                        <Flame size={17} />
                        <span>{fitness.caloriesBurned} kcal</span>
                    </div>

                    <div className="flex gap-1 items-center justify-center text-[#9CA3AF] text-[12px] font-regular font-inter">
                        <Star size={17} />
                        <span>{fitness.rating}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default FitnessCard;