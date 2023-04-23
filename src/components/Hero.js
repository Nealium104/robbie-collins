import Link from "next/link";
import Image from "next/legacy/image"

export default function Hero () {
    return (
        <>
            <div className="hero min-h-screen" style={{ 
                backgroundImage: `url("robbie.webp")` 
                }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content bg-black/50">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold text-primary">Hi, I'm Robbie</h1>
                <p className="mb-5 text-2xl">Welcome to the webpage of Robert Collins, a distinguished trumpet performer, educator, and organizer, known for his work with the Knoxville Symphony Orchestra, International Trumpet Guild, and the University of Kentucky. Explore his remarkable journey through performance, education, and mentorship in the trumpet community.</p>
                <Link href="bio" className="btn btn-primary">Learn More</Link>
                </div>
            </div>
            </div>
        </>
    )
}