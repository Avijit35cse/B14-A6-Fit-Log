    "use client";

    import Image from "next/image";
    import Link from "next/link";
    import {
        useContext,
        useEffect,
        useMemo,
        useState,
    } from "react";

    import {
        Clock3,
        Flame,
        Star,
        X,
        ChevronDown,
        Search,
    } from "lucide-react";

    import { useRouter, useSearchParams } from "next/navigation";

    import { PlanContext } from "@/context/PlanContext";

    const MyPlan = () => {
        const router = useRouter();
        const searchParams = useSearchParams();

        const urlTab = searchParams.get("tab");

        const activeTab =
            urlTab === "saved" ? "saved" : "today";

        const [sortBy, setSortBy] =
            useState<"duration" | "calories" | "rating">("duration");

        const [search, setSearch] = useState("");

        const [doneIds, setDoneIds] = useState<
            (string | number)[]
        >([]);

        const [loading, setLoading] =
            useState(true);

        const context = useContext(PlanContext);

        const myPlan = context?.myPlan || [];

        const savedWorkouts =
            context?.savedWorkouts || [];

        const removeFromPlan =
            context?.removeFromPlan;

        const removeFromSaved =
            context?.removeFromSaved;


        // ================= LOAD DONE WORKOUTS =================

        useEffect(() => {
            const timer = setTimeout(() => {
                const savedDone = JSON.parse(
                    localStorage.getItem(
                        "doneWorkouts"
                    ) || "[]"
                ) as (string | number)[];

                setDoneIds(savedDone);
                setLoading(false);
            }, 0);

            return () => clearTimeout(timer);
        }, []);


        // ================= MARK AS DONE =================

        const handleDone = (
            id: string | number
        ) => {
            let updatedIds;

            if (doneIds.includes(id)) {
                updatedIds = doneIds.filter(
                    (item) => item !== id
                );
            } else {
                updatedIds = [
                    ...doneIds,
                    id,
                ];
            }

            setDoneIds(updatedIds);

            localStorage.setItem(
                "doneWorkouts",
                JSON.stringify(updatedIds)
            );
        };


        // ================= CURRENT LIST =================

        const currentList =
            activeTab === "today"
                ? myPlan
                : savedWorkouts;


        // ================= SEARCH =================

        const filteredWorkouts = useMemo(() => {
            const searchText =
                search.trim().toLowerCase();

            if (!searchText) {
                return currentList;
            }

            return currentList.filter(
                (workout) => {
                    const workoutName =
                        String(
                            workout.name || ""
                        ).toLowerCase();

                    const equipment =
                        String(
                            workout.equipment || ""
                        ).toLowerCase();

                    const difficulty =
                        String(
                            workout.difficulty || ""
                        ).toLowerCase();

                    const tags =
                        Array.isArray(
                            workout.muscleGroups
                        )
                            ? workout.muscleGroups
                                .join(" ")
                                .toLowerCase()
                            : "";

                    return (
                        workoutName.includes(
                            searchText
                        ) ||
                        equipment.includes(
                            searchText
                        ) ||
                        difficulty.includes(
                            searchText
                        ) ||
                        tags.includes(
                            searchText
                        )
                    );
                }
            );
        }, [currentList, search]);


        // ================= SORT =================

        const sortedWorkouts = useMemo(() => {
            const workouts = [
                ...filteredWorkouts,
            ];

            if (sortBy === "duration") {
                return workouts.sort(
                    (a, b) =>
                        Number(
                            b.duration || 0
                        ) -
                        Number(
                            a.duration || 0
                        )
                );
            }

            if (sortBy === "calories") {
                return workouts.sort(
                    (a, b) =>
                        Number(
                            b.caloriesBurned || 0
                        ) -
                        Number(
                            a.caloriesBurned || 0
                        )
                );
            }

            if (sortBy === "rating") {
                return workouts.sort(
                    (a, b) =>
                        Number(
                            b.rating || 0
                        ) -
                        Number(
                            a.rating || 0
                        )
                );
            }

            return workouts;
        }, [filteredWorkouts, sortBy]);


        // ================= METRICS =================

        const totalExercises =
            currentList.length;

        const totalMinutes =
            currentList.reduce(
                (total, item) =>
                    total +
                    Number(
                        item.duration || 0
                    ),
                0
            );

        const totalCalories =
            currentList.reduce(
                (total, item) =>
                    total +
                    Number(
                        item.caloriesBurned || 0
                    ),
                0
            );


        return (
            <main className="bg-[#0C0D10]">

                <section className="container mx-auto px-4 sm:px-6 lg:px-10">

                    {/* ================= HEADER ================= */}

                    <div className="pt-8 sm:pt-10"> 

                        <h1 className="text-[22px] sm:text-[26px] lg:text-[30px] text-white font-bold font-oswald">
                            MY PLAN
                        </h1>

                        <p className="text-[10px] sm:text-[12px] text-[#8A92A0] font-inter mt-1">
                            Cap of five lifts for today. Finish them, then load more.
                        </p>

                    </div>


                    {/* ================= METRICS ================= */}

                    <div className="grid grid-cols-3 mt-5 bg-[#111217] border border-white/10 rounded-md overflow-hidden py-4">

                        <div className="px-4 sm:px-6 py-2 sm:py-3 border-r border-white/5">

                            <p className="text-[8px] sm:text-[9px] text-[#6B7280] font-inter">
                                Exercises
                            </p>

                            <p className="text-[21px] sm:text-[25px] text-[#C2F800] font-bold font-inter mt-1">
                                {totalExercises}
                            </p>

                        </div>


                        <div className="px-4 sm:px-6 py-2 sm:py-3 border-r border-white/5">

                            <p className="text-[8px] sm:text-[9px] text-[#6B7280] font-inter">
                                Minutes
                            </p>

                            <p className="text-[21px] sm:text-[25px] text-white font-bold font-inter mt-1">
                                {totalMinutes}
                            </p>

                        </div>


                        <div className="px-4 sm:px-6 py-2 sm:py-3">

                            <p className="text-[8px] sm:text-[9px] text-[#6B7280] font-inter">
                                Calories
                            </p>

                            <p className="text-[21px] sm:text-[25px] text-white font-bold font-inter mt-1">
                                {totalCalories}
                            </p>

                        </div>

                    </div>


                    {/* ================= TABS + SEARCH + SORT ================= */}

                    <div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">

                        {/* TABS */}

                        <div className="flex items-center bg-[#111217] border border-white/5 rounded-lg p-1 w-fit">

                            <button
                                onClick={() =>
                                    router.push(
                                        "/my-plan?tab=today"
                                    )
                                }
                                className={`h-[28px] sm:h-[30px] px-4 sm:px-5 rounded-md text-[8px] sm:text-[9px] font-inter transition-all ${
                                    activeTab ===
                                    "today"
                                        ? "bg-[#1A1D24] text-white shadow-sm"
                                        : "text-[#6B7280]"
                                }`}
                            >
                                Today&apos;s Plan
                            </button>


                            <button
                                onClick={() =>
                                    router.push(
                                        "/my-plan?tab=saved"
                                    )
                                }
                                className={`h-[28px] sm:h-[30px] px-4 sm:px-5 rounded-md text-[8px] sm:text-[9px] font-inter transition-all ${
                                    activeTab ===
                                    "saved"
                                        ? "bg-[#1A1D24] text-white shadow-sm"
                                        : "text-[#6B7280]"
                                }`}
                            >
                                Saved
                            </button>

                        </div>


                        {/* SEARCH + SORT */}

                        <div className="flex items-center gap-2">

                            {/* SEARCH */}

                            <div className="relative">

                                <Search
                                    size={11}
                                    className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[#6B7280]"
                                />

                                <input
                                    type="text"
                                    value={search}
                                    onChange={(e) =>
                                        setSearch(
                                            e.target.value
                                        )
                                    }
                                    placeholder="Search name or tag"
                                    className="h-[30px] w-[130px] sm:w-[160px] bg-[#111217] border border-white/10 rounded-md pl-7 pr-2 text-[8px] sm:text-[9px] text-white placeholder:text-[#6B7280] font-inter outline-none focus:border-[#C2F800]/40"
                                />

                            </div>


                            {/* SORT */}

                            <div className="flex items-center gap-2">

                                <span className="hidden sm:block text-[8px] sm:text-[9px] text-[#6B7280] font-inter">
                                    Sort By
                                </span>

                                <div className="relative">

                                    <select
                                        value={sortBy}
                                        onChange={(e) =>
                                            setSortBy(
                                                e.target.value as
                                                    "duration" |
                                                    "calories" |
                                                    "rating"
                                            )
                                        }
                                        className="appearance-none h-[30px] w-[82px] sm:w-[90px] bg-[#111217] border border-white/10 rounded-md pl-3 pr-6 text-[8px] sm:text-[9px] text-[#D1D5DB] font-inter outline-none cursor-pointer"
                                    >

                                        <option value="duration">
                                            Duration
                                        </option>

                                        <option value="calories">
                                            Calories
                                        </option>

                                        <option value="rating">
                                            Rating
                                        </option>

                                    </select>

                                    <ChevronDown
                                        size={10}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 text-[#8A92A0] pointer-events-none"
                                    />

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* ================= CONTENT ================= */}

                    <div className="mt-2">

                        {loading ? (

                            <div className="min-h-[220px] sm:min-h-[250px] bg-[#111217] border border-white/10 rounded-md flex items-center justify-center">

                                <p className="text-[#8A92A0] text-[10px]">
                                    Loading workouts…
                                </p>

                            </div>

                        ) : sortedWorkouts.length ===
                        0 ? (

                            <div className="min-h-[220px] sm:min-h-[250px] bg-[#111217] border border-white/10 rounded-md flex flex-col items-center justify-center">

                                <h2 className="text-white text-[10px] sm:text-[11px] font-bold font-inter">
                                    {search
                                        ? "NO WORKOUT FOUND"
                                        : "NOTHING HERE YET"}
                                </h2>

                                <p className="text-[8px] sm:text-[9px] text-[#6B7280] mt-1 text-center px-4">

                                    {search
                                        ? "Try another workout name or tag."
                                        : "Browse the library and add a lift to get today moving."}

                                </p>

                                {!search && (
                                    <Link
                                        href="/"
                                        className="mt-3 bg-[#C2F800] text-black text-[8px] sm:text-[9px] font-bold px-4 py-2 rounded-full"
                                    >
                                        Go to workouts
                                    </Link>
                                )}

                            </div>

                        ) : (

                            <div className="space-y-1.5">

                                {sortedWorkouts.map(
                                    (workout) => {

                                        const isDone =
                                            doneIds.includes(
                                                workout.id
                                            );

                                        return (

                                            <div
                                                key={
                                                    workout.id
                                                }
                                                className="h-[70px] sm:h-[72px] bg-[#15171D] border border-white/10 rounded-md px-2 sm:px-3 flex items-center gap-2 sm:gap-3"
                                            >

                                                {/* THUMBNAIL */}

                                                <div className="relative w-[58px] h-[48px] sm:w-[68px] sm:h-[52px] shrink-0 rounded-sm overflow-hidden">

                                                    <Image
                                                        src={String(
                                                            workout.image
                                                        )}
                                                        alt={String(
                                                            workout.name
                                                        )}
                                                        fill
                                                        className="object-cover"
                                                    />

                                                </div>


                                                {/* WORKOUT INFO */}

                                                <div className="flex-1 min-w-0">

                                                    <h2 className="text-white text-[9px] sm:text-[10px] font-bold font-oswald truncate">
                                                        {String(
                                                            workout.name
                                                        )}
                                                    </h2>

                                                    <p className="text-[7px] sm:text-[8px] text-[#6B7280] truncate mt-[1px]">
                                                        {String(
                                                            workout.equipment ||
                                                                ""
                                                        )}
                                                    </p>


                                                    {/* TAGS */}

                                                    {Array.isArray(
                                                        workout.muscleGroups
                                                    ) &&
                                                        workout
                                                            .muscleGroups
                                                            .length >
                                                            0 && (
                                                            <p className="text-[6px] sm:text-[7px] text-[#8A92A0] truncate mt-[1px]">
                                                                {workout.muscleGroups.join(
                                                                    " • "
                                                                )}
                                                            </p>
                                                        )}


                                                    {/* STATS */}

                                                    <div className="flex items-center gap-2 sm:gap-3 mt-1">

                                                        <span className="flex items-center gap-1 text-[6px] sm:text-[7px] text-[#8A92A0]">

                                                            <Clock3
                                                                size={8}
                                                            />

                                                            {
                                                                workout.duration
                                                            }{" "}
                                                            min

                                                        </span>


                                                        <span className="flex items-center gap-1 text-[6px] sm:text-[7px] text-[#8A92A0]">

                                                            <Flame
                                                                size={8}
                                                            />

                                                            {
                                                                workout.caloriesBurned
                                                            }{" "}
                                                            kcal

                                                        </span>


                                                        <span className="flex items-center gap-1 text-[6px] sm:text-[7px] text-[#8A92A0]">

                                                            <Star
                                                                size={8}
                                                            />

                                                            {
                                                                workout.rating
                                                            }

                                                        </span>

                                                    </div>

                                                </div>


                                                {/* ACTIONS */}

                                                <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">

                                                    {/* VIEW DETAILS */}

                                                    <Link
                                                        href={`/workout/${workout.id}`}
                                                        className="border border-white/10 text-[#8A92A0] text-[6px] sm:text-[7px] px-2 sm:px-2.5 py-1.5 rounded-full whitespace-nowrap"
                                                    >
                                                        View Details
                                                    </Link>


                                                    {/* DONE */}

                                                    {activeTab ===
                                                        "today" && (
                                                        <button
                                                            onClick={() =>
                                                                handleDone(
                                                                    workout.id
                                                                )
                                                            }
                                                            className={`text-[6px] sm:text-[7px] px-2 sm:px-2.5 py-1.5 rounded-full whitespace-nowrap font-bold ${
                                                                isDone
                                                                    ? "bg-white/10 text-[#C2F800]"
                                                                    : "bg-[#C2F800] text-black"
                                                            }`}
                                                        >
                                                            {isDone
                                                                ? "✓ Done"
                                                                : "Mark as Done"}
                                                        </button>
                                                    )}


                                                    {/* REMOVE */}

                                                    <button
                                                        onClick={() =>
                                                            activeTab ===
                                                            "today"
                                                                ? removeFromPlan?.(
                                                                    workout.id
                                                                )
                                                                : removeFromSaved?.(
                                                                    workout.id
                                                                )
                                                        }
                                                        className="text-[#6B7280] hover:text-red-400 p-1 transition-colors"
                                                        aria-label="Remove workout"
                                                    >
                                                        <X
                                                            size={13}
                                                            strokeWidth={2}
                                                        />
                                                    </button>

                                                </div>

                                            </div>

                                        );
                                    }
                                )}

                            </div>

                        )}

                    </div>

                </section>

            </main>
        );
    };

    export default MyPlan;