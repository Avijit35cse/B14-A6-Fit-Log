import { getWorkoutData } from "@/library/page";
import FitnessCard from "./FitnessCard";


const Library = async() => {
    
    const fitnessData = await getWorkoutData()

    return (
        <section className="container mx-auto px-10">
            <div className='py-16'>
                <h2 className='text-[#FFFFFF] text-[30px] font-oswald font-bold leading-9 tracking-[-0.75px]'>THE LIBRARY</h2>
                <p className='text-[14px] text-[#9CA3AF] font-regular font-inter'>Twelve lifts covering every major muscle group.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {fitnessData.map((fitness =>{
                    return <FitnessCard key={fitness.id} fitness={fitness}/>
                }))}
            </div>
        </section>
    );
};

export default Library;