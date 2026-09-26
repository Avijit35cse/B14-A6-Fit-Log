import Link from "next/link";

export default function NotFound() {
    return (
        <main className="min-h-screen bg-[#0C0D10] flex items-center justify-center px-4">
            <div className="text-center">
                <p className="text-[#C2F800] text-sm font-bold">
                    FITLOG
                </p>

                <h1 className="text-7xl font-bold text-white mt-3">
                    404
                </h1>

                <h2 className="text-xl font-bold text-white mt-4">
                    WORKOUT NOT FOUND
                </h2>

                <p className="text-sm text-[#9CA3AF] mt-3">
                    The workout or page you are looking for does not exist.
                </p>

                <Link
                    href="/"
                    className="inline-block mt-6 bg-[#C2F800] text-black text-xs font-bold px-5 py-3 rounded-md"
                >
                    GO TO WORKOUTS
                </Link>
            </div>
        </main>
    );
}

