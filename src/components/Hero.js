import Link from "next/link";
import Image from "next/image"

export default function Hero () {
    return (
        <>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("robbie.webp")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">hi, i'm robbie</h1>
                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button className="btn btn-primary">Learn More</button>
                </div>
            </div>
            </div>
        </>
    )
}