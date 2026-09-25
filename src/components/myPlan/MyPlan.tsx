"use client"

import { PlanContext } from "@/context/PlanContext";
import { useContext } from "react";

const MyPlan = () => {

    const { myPlan } = useContext(PlanContext)

    const totalMinutes = myPlan.reduce((total, item) => 
      total + item.duration, 0 )

    const totalCalories = myPlan.reduce((total, item) => 
        total + item.caloriesBurned,0 )

    return (
       <section className="container mx-auto px-10">
            <div className="mt-10">
                <h1 className="twxt-[30px] text-[#FFFFFF] font-bold font-oswald">MY PLAN</h1>
                <p className="text-[14px] text-[#8A92A0] font-regular font-inter">Cap of five lifts for today. Finish them, then load more.</p>
            </div>

            <div className="grid grid-cols-3 bg-[#111217] border border-white/10 rounded-lg mt-4">

                <div className="px-5 py-6 border-r border-white/5">
                    <p className="text-[10px] text-[#6B7280] font-inter">
                        Exercises
                    </p>

                    <p className="text-[28px] text-[#C2F800] font-bold font-inter mt-1">
                        {myPlan.length}
                    </p>
                </div>

                <div className="px-5 py-6 border-r border-white/5">
                    <p className="text-[10px] text-[#6B7280] font-inter">
                        Minutes
                    </p>

                    <p className="text-[28px] text-white font-bold font-inter mt-1">
                        {totalMinutes}
                    </p>
                </div>

                <div className="px-5 py-6">
                    <p className="text-[10px] text-[#6B7280] font-inter">
                        Calories
                    </p>

                    <p className="text-[28px] text-white font-bold font-inter mt-1">
                        {totalCalories}
                    </p>
                </div>

            </div>

            {/* Tabs + Sort */}
            <div className="flex items-center justify-between mt-5">

                <div className="flex bg-[#15171D] rounded-lg p-1 border border-white/5">

                    <button className="px-4 py-1.5 rounded-md text-[10px] text-[#6B7280] font-inter">
                        Today&apos;s Plan
                    </button>

                    <button className="px-4 py-1.5 rounded-md bg-[#25272D] text-white text-[10px] font-inter">
                        Saved
                    </button>

                </div>

                <div className="flex items-center gap-2">
                    <span className="text-[10px] text-[#6B7280] font-inter">
                        Sort By
                    </span>

                    <button className="bg-[#15171D] border border-white/10 rounded-full px-3 py-1.5 text-[10px] text-[#D1D5DB]">
                        Duration⌄
                    </button>
                </div>

            </div>

            {/* Empty State */}
            <div className="min-h-[215px] border border-dashed border-white/10 rounded-lg mt-4 flex flex-col items-center justify-center text-center">

                <h2 className="text-white text-[16px] font-bold font-oswald">
                    NOTHING HERE YET
                </h2>

                <p className="text-[10px] text-[#6B7280] font-inter mt-1">
                    Browse the library and add a lift to get today moving.
                </p>

                <button className="mt-4 bg-[#C2F800] text-black text-[10px] font-bold font-inter px-5 py-2 rounded-full">
                    Go to workouts
                </button>

            </div>
       </section>
    );
};

export default MyPlan;