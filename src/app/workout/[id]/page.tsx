import { getWorkoutData } from "@/library/page";
import DetailsAction from "@/components/detailsAction/DetailsAction"
import Image from "next/image";
import { notFound } from "next/navigation";


const DetailsPage = async({params}: {params: Promise<{ id: string }>}) => {

    const {id} = await params

    const fitnessData = await getWorkoutData()

    const fitness = fitnessData.find(item => item.id === Number(id))

    if(!fitness){
        notFound()
    }

    return (
        <div className="min-h-screen bg-[#0C0D10] text-white">

            <main className="container mx-auto px-4 lg:px-10 py-8 lg:py-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">

                    {/* Image */}
                    <div>
                        <Image
                            src={fitness.image}
                            alt={fitness.name}
                            width={600}
                            height={600}
                            className="w-full rounded-xl object-cover"
                        />
                    </div>

                    {/* Details */}
                    <div>

                        <h1 className="text-3xl lg:text-4xl font-bold font-oswald">
                            {fitness.name}
                        </h1>

                        <p className="text-[#9CA3AF] text-sm mt-3 leading-6">
                            {fitness.description}
                        </p>

                        {/* Muscle Groups */}
                        <div className="flex gap-2 mt-4">
                            {fitness.muscleGroups.map((muscle: string) => (
                                <span
                                    key={muscle}
                                    className="bg-[#C2F800] text-black text-[10px] font-bold px-3 py-1 rounded-full"
                                >
                                    {muscle}
                                </span>
                            ))}
                        </div>

                        {/* Info */}
                        <div className="bg-[#15171D] rounded-xl mt-5 border border-white/10">

                            <div className="flex justify-between px-4 py-3 border-b border-white/10">
                                <span className="text-[10px] text-[#9CA3AF]">
                                    EQUIPMENT
                                </span>
                                <span className="text-xs">
                                    {fitness.equipment}
                                </span>
                            </div>

                            <div className="flex justify-between px-4 py-3 border-b border-white/10">
                                <span className="text-[10px] text-[#9CA3AF]">
                                    DIFFICULTY
                                </span>
                                <span className="text-xs">
                                    {fitness.difficulty}
                                </span>
                            </div>

                            <div className="flex justify-between px-4 py-3 border-b border-white/10">
                                <span className="text-[10px] text-[#9CA3AF]">
                                    SETS
                                </span>
                                <span className="text-xs">
                                    {fitness.sets}
                                </span>
                            </div>

                            <div className="flex justify-between px-4 py-3 border-b border-white/10">
                                <span className="text-[10px] text-[#9CA3AF]">
                                    REPS
                                </span>
                                <span className="text-xs">
                                    {fitness.reps}
                                </span>
                            </div>

                            <div className="flex justify-between px-4 py-3 border-b border-white/10">
                                <span className="text-[10px] text-[#9CA3AF]">
                                    DURATION
                                </span>
                                <span className="text-xs">
                                    {fitness.duration} min
                                </span>
                            </div>

                            <div className="flex justify-between px-4 py-3 border-b border-white/10">
                                <span className="text-[10px] text-[#9CA3AF]">
                                    CALORIES
                                </span>
                                <span className="text-xs">
                                    {fitness.caloriesBurned} kcal
                                </span>
                            </div>

                            <div className="flex justify-between px-4 py-3">
                                <span className="text-[10px] text-[#9CA3AF]">
                                    RATING
                                </span>
                                <span className="text-xs">
                                    {fitness.rating}
                                </span>
                            </div>

                        </div>

                        {/* Instructions */}
                        <h2 className="text-sm font-bold mt-6">
                            INSTRUCTIONS
                        </h2>

                        <ol className="mt-3 space-y-2">
                            {fitness.instructions.map(
                                (instruction: string, index: number) => (
                                    <li
                                        key={index}
                                        className="text-xs text-[#9CA3AF]"
                                    >
                                        {index + 1}. &nbsp;{instruction}
                                    </li>
                                )
                            )}
                        </ol>

                        <DetailsAction fitness={fitness}/>
                        

                    </div>

                </div>

            </main>

        </div>
    );
};

export default DetailsPage;