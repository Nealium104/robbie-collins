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
                <p className="mb-5 text-2xl">Hello, I'm Robert Collins, a renowned trumpet performer, educator, and organizer. I'm known for my work with the Knoxville Symphony Orchestra, International Trumpet Guild, and the University of Kentucky. I invite you to explore my remarkable journey through performance, education, and mentorship in the trumpet community.</p>
                <Link href="bio" className="btn btn-primary">Learn More</Link>
                </div>
            </div>
            </div>
        </>
    )
}

{/* <Image
className="absolute top-0 left-0 w-full h-full object-cover object-center"
src="/withBackgroundColorCorrected.webp"
alt="Milky Way"
layout="fill"
objectFit="cover"
blurDataURL="/backgroundBlur.jpg"
placeholder="blur"
priority
/> */}

{/* <div className="min-h-screen block">
<div className="h-full w-full">
<Image 
className="-z-10"
src="/robbie.webp"
alt="Robbie Close Up"
layout="fill"
objectFit="cover"
priority
/> */}