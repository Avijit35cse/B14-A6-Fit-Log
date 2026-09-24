import { Iworkout } from "@/types/type"


export const getWorkoutData = async() : Promise< Iworkout[] >=>{
    const response = await fetch("https://api.abcz.workers.dev/api/fitlog")
    
    if(!response.ok){
        throw new Error("Failed to fetch workout data.")
    }
    return response.json()
}
