"use client"
import { useState, createContext, useEffect } from "react";


type Fitness = { id: string | number; [key: string]: unknown }

export const PlanContext = createContext<{
    myPlan: Fitness[]
    addToPlan: (fitness: Fitness) => boolean
    removeFromPlan: (id: Fitness["id"]) => void
} | undefined>(undefined)

const PlanProvider = ({ children }) => {

    const [myPlan, setMyPlan] = useState<Fitness[]>([])

    useEffect(()=> {
        const savedPlan = JSON.parse(localStorage.getItem("myPlan") || "[]")

        setMyPlan(savedPlan)
    },[])

    const addToPlan = (fitness: Fitness) => {

        if (myPlan.length >= 5) {
            return false
        }

    const alreadyAdded = myPlan.some((item) => item.id === fitness.id)

        if (alreadyAdded) {
            return false
        }
        const updatedPlan = [...myPlan, fitness] 
        setMyPlan(updatedPlan)

        localStorage.setItem("myPlan", JSON.stringify(updatedPlan))

        return true
    }
    const removeFromPlan = (id) => {

        const updatedPlan = myPlan.filter((item) => item.id !== id)
        setMyPlan(updatedPlan)

        localStorage.setItem("myPlan", JSON.stringify(updatedPlan))
    }

    const shareState = {
        myPlan,
        addToPlan,
        removeFromPlan,
    }


    return (
        <PlanContext.Provider value={shareState}>

            {children}

        </PlanContext.Provider>
    );
};

export default PlanProvider;