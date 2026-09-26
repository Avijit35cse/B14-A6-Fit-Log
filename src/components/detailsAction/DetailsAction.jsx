"use client";

import { PlanContext } from "@/context/PlanContext";
import { Bookmark, Plus } from "lucide-react";
import { useContext } from "react";
import { toast } from "react-toastify";

const DetailsAction = ({ fitness }) => {
    const context = useContext(PlanContext);

    const myPlan = context?.myPlan || [];
    const addToPlan = context?.addToPlan;
    const saveWorkout = context?.saveWorkout;

    const alreadyAdded = myPlan.some(
        (item) => item.id === fitness.id
    );

    const planFull = myPlan.length >= 5;

    // Add function
    const handleAdd = () => {
        if (alreadyAdded) {
            return toast.error(
                "This workout is already in today's plan!"
            );
        }

        if (planFull) {
            return toast.error(
                "Today's plan already has 5 lifts!"
            );
        }

        if (!addToPlan) return;

        const added = addToPlan(fitness);

        if (!added) {
            return toast.error(
                "Unable to add this workout!"
            );
        }

        toast.success(
            "Workout added to today's plan!"
        );
    };

    // Save For Later function
    const handleSave = () => {
        if (!saveWorkout) return;

        const saved = saveWorkout(fitness);

        if (!saved) {
            return toast.error(
                "This workout is already saved!"
            );
        }

        toast.success(
            "Workout saved for later!"
        );
    };

    return (
        <div className="flex gap-3 mt-6">
            <button
                className="flex items-center gap-2 bg-[#C2F800] text-black text-xs font-bold px-4 py-3 rounded-md disabled:opacity-40 disabled:cursor-not-allowed"
                onClick={handleAdd}
                disabled={alreadyAdded || planFull}
            >
                <Plus size={14} />

                {alreadyAdded
                    ? "ALREADY IN PLAN"
                    : planFull
                    ? "PLAN IS FULL"
                    : "ADD TO TODAY'S PLAN"}
            </button>

            <button
                className="flex items-center gap-2 border border-white/10 text-[#9CA3AF] text-xs px-4 py-3 rounded-md"
                onClick={handleSave}
            >
                <Bookmark size={14} />
                SAVE FOR LATER
            </button>
        </div>
    );
};

export default DetailsAction;