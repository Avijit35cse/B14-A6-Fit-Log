"use client"

import { PlanContext } from '@/context/PlanContext';
import { Bookmark, Plus } from 'lucide-react';
import { useContext } from 'react';
import { toast } from 'react-toastify';


const DetailsAction = ({ fitness }) => {

    const { addToPlan } = useContext(PlanContext)

    // Add function
    const handleAdd = () =>{
        const savedPlan = JSON.parse(
            localStorage.getItem("myPlan") || "[]"
        )

        // Already added section

        const alreadyAdded = savedPlan.some((item) => item.id === fitness.id)

        if (alreadyAdded){
            return toast.error("This workout is already on your plan");
        }

        // Maximum 5 lifts

        if(savedPlan.length >= 5){
            return toast.error("You can add maximum 5 lifts to today's plan")
        }

        const updatePlan = [...savedPlan,fitness]

        localStorage.setItem("myPlan",JSON.stringify(updatePlan))
        toast.success("Workout added to today's plan!")
    
    }

    // Save For later function
    const handleSave = ()=>{

        const savedWorkouts = JSON.parse(
            localStorage.getItem("savedWorkouts") || "[]"
        )

        // Already saved

        const alreadySaved = savedWorkouts.some((item)=> item.id === fitness.id)
        
        if(alreadySaved){
            return toast.error("This workout is already saved!")
        }

        const updateSaved = [...savedWorkouts,fitness]
        localStorage.setItem("savedWorkouts", JSON.stringify(updateSaved))
        toast.success("Workout saved for later")

    }

    return (
        <div className="flex gap-3 mt-6">

            <button className="flex items-center gap-2 bg-[#C2F800] text-black text-xs font-bold px-4 py-3 rounded-md"
            onClick={handleAdd}>
                <Plus size={14} />
                ADD TO TODAY&apos;S PLAN
            </button>

            <button className="flex items-center gap-2 border border-white/10 text-[#9CA3AF] text-xs px-4 py-3 rounded-md"
            onClick={handleSave}>
                <Bookmark size={14} />
                SAVE FOR LATER
            </button>

        </div>
    );
};


export default DetailsAction;