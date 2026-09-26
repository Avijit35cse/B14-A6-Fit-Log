"use client";

import { Iworkout } from "@/types/type";
import {
    createContext,
    ReactNode,
    useEffect,
    useState,
} from "react";

type PlanContextType = {
    myPlan: Iworkout[];
    savedWorkouts: Iworkout[];

    addToPlan: (workout: Iworkout) => boolean;
    removeFromPlan: (id: string | number) => void;

    saveWorkout: (workout: Iworkout) => boolean;
    removeFromSaved: (id: string | number) => void;
};

export const PlanContext =
    createContext<PlanContextType | null>(null);

const PlanProvider = ({
    children,
}: {
    children: ReactNode;
}) => {
    const [myPlan, setMyPlan] = useState<Iworkout[]>([]);
    const [savedWorkouts, setSavedWorkouts] =
        useState<Iworkout[]>([]);

    const [loaded, setLoaded] = useState(false);

    // ================= LOAD FROM LOCAL STORAGE =================

    useEffect(() => {
    const timer = setTimeout(() => {
        const storedPlan =
            localStorage.getItem("myPlan");

        const storedSaved =
            localStorage.getItem("savedIworkouts");

        if (storedPlan) {
            setMyPlan(JSON.parse(storedPlan));
        }

        if (storedSaved) {
            setSavedWorkouts(
                JSON.parse(storedSaved)
            );
        }

        setLoaded(true);
    }, 0);

    return () => clearTimeout(timer);
}, []);

    // ================= SAVE PLAN =================

    useEffect(() => {
        if (!loaded) return;

        localStorage.setItem(
            "myPlan",
            JSON.stringify(myPlan)
        );
    }, [myPlan, loaded]);

    // ================= SAVE SAVED WORKOUTS =================

    useEffect(() => {
        if (!loaded) return;

        localStorage.setItem(
            "savedWorkouts",
            JSON.stringify(savedWorkouts)
        );
    }, [savedWorkouts, loaded]);

    // ================= ADD TO TODAY'S PLAN =================

    const addToPlan = (workout: Iworkout): boolean => {
        // Maximum 5 lifts
        if (myPlan.length >= 5) {
            return false;
        }

        // Prevent duplicate workout
        const alreadyExists = myPlan.some(
            (item) => item.id === workout.id
        );

        if (alreadyExists) {
            return false;
        }

        setMyPlan((previous) => [
            ...previous,
            workout,
        ]);

        // Successfully added
        return true;
    };

    // ================= REMOVE FROM PLAN =================

    const removeFromPlan = (
        id: string | number
    ) => {
        setMyPlan((previous) =>
            previous.filter(
                (item) => item.id !== id
            )
        );
    };

    // ================= SAVE WORKOUT =================

    const saveWorkout = (workout: Iworkout): boolean => {
        const alreadySaved = savedWorkouts.some(
            (item) => item.id === workout.id
        );

        if (alreadySaved) {
            return false;
        }

        // NO 5 ITEM LIMIT HERE
        setSavedWorkouts((previous) => [
            ...previous,
            workout,
        ]);

        // Successfully saved
        return true;
    };

    // ================= REMOVE FROM SAVED =================

    const removeFromSaved = (
        id: string | number
    ) => {
        setSavedWorkouts((previous) =>
            previous.filter(
                (item) => item.id !== id
            )
        );
    };

    return (
        <PlanContext.Provider
            value={{
                myPlan,
                savedWorkouts,
                addToPlan,
                removeFromPlan,
                saveWorkout,
                removeFromSaved,
            }}
        >
            {children}
        </PlanContext.Provider>
    );
};

export default PlanProvider;