import Link from "next/link";
import Nav from '../components/Nav'
import Hero from "../components/Hero";
import Carousel from "@/components/Carousel";

export default function Bio () {
    return (
        <>
            <Nav />
            <Hero />
            <div>
                <p className="mx-auto text-center my-5">Robert Collins is a highly active trumpet performer, organizer, and educator. He has performed with ensembles such as the Knoxville Symphony Orchestra, Lexington Brass Band, Saxton's Cornet Band, and ECU Faculty Brass Quintet, as well as at events like the North American Baroque Trumpet Conference, National Trumpet Competition, Kentucky Music Educators Conference, and Midwest Regional Tuba Euphonium Conference.</p>
            </div>
            <Carousel />
        </>
    )
}