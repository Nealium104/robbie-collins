import Link from "next/link";
import Image from "next/legacy/image"

export default function Hero() {
    return (
        <>
            <div className="hero min-h-screen relative">
                <div>
                    <Image
                        className="absolute inset-0 -z-10"
                        src="/images/robbie.jpg"
                        alt="Robbie Close Up"
                        layout="fill"
                        objectFit="cover"
                        placeholder="blur"
                        blurDataURL="/blur/robbie.jpg"
                    />
                </div>
                <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
                <div className="text-center text-neutral-content bg-black/75 p-6 flex items-center justify-center z-10">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-primary">Hi, I'm Robbie,</h1>
                        <p className="mb-5 text-2xl font-thin">a renowned trumpet performer, educator, and organizer. I'm known for my work with the Knoxville Symphony Orchestra, International Trumpet Guild, and the University of Kentucky. I invite you to explore my journey through performance, education, and mentorship in the trumpet community.</p>
                        <Link href="bio" className="btn btn-primary">Learn More</Link>
                    </div>
                </div>
            </div>
        </>
    )
}