import Link from "next/link";
import Nav from '../components/Nav'
import Hero from "../components/Hero";
import Image from "next/legacy/image";
import Footer from "@/components/Footer";

export default function Bio () {
    return (
        <>
            <Nav />
            <Hero />
            <div className="flex flex-col">
                <div className="bg-black/50 md:flex md:items-center">
                    <p className="p-4 md:w-1/2 text-xl">
                    Kentucky-based trumpeter Robert Collins has a deep passion for music performance and education. He is originally from the Coastal Plains of North Carolina and is an active member in the trumpet world as a performer, organizer and educator on both the regional and international level.
                    </p>
                    <div className="md:w-1/2">
                        <Image 
                            src="/carousel/chrisMartin.jpg"
                            alt="Robbie with Chris Martin"
                            width={400}
                            height={400}
                            layout="responsive"
                            objectFit="cover"
                            />
                    </div>
                </div>
                <div className="bg-black/50 md:flex md:flex-row-reverse md:items-center">
                    <p className="p-4 md:w-1/2 text-xl">
                    Robert has performed in groups such as the Knoxville Symphony Orchestra, the Lexington Brass Band, Saxton's Cornet Band, and the ECU Faculty Brass Quintet. He has also performed at events including the International Trumpet Guild New Works Recital, North American Baroque Trumpet Conference, the National Trumpet Competition, Kentucky Music Educators Conference, Midwest Regional Tuba Euphonium Conference, as well as others. One of Robert’s strengths is his ability to cover a wide ranging set of diverse styles; however, he feels most at home in a chamber music setting.
                    </p>
                    <div className="md:w-1/2">
                        <Image 
                            src="/carousel/saxon1.jpg"
                            alt="Robbie in his saxon outfit"
                            width={400}
                            height={400}
                            layout="responsive"
                            objectFit="cover"
                        />
                    </div>
                </div>
                <div className="bg-black/50 md:flex md:items-center">
                    <p className="p-4 md:w-1/2 text-xl">
                    Currently, Robert serves as the co-chair for the International Trumpet Guild Pre-Professional Division. He also serves as the primary volunteer coordinator for the Historic Brass Society. He has previously worked with the University of Kentucky Summer Trumpet Institute, International Trumpet Guild Conference, North American Baroque Trumpet Competition, and Gardner-Webb Trumpet Summit. He has also been an attendee at the Chosen Vale International Trumpet Seminar during his time researching his dissertation.
                    </p>
                    <div className="md:w-1/2">
                    <Image 
                            src="/carousel/HBS.jpg"
                            alt="Robbie with an HBS overlay"
                            width={400}
                            height={400}
                            layout="responsive"
                            objectFit="cover"
                            />
                    </div>
                </div>
                <div className="bg-black/50 md:flex md:flex-row-reverse md:items-center">
                    <p className="p-4 md:w-1/2 text-xl">
                    In addition to running a private trumpet studio, Robert is a teaching assistant at the University of Kentucky, teaching the course MUC163 (Brass Methods), and instructing undergraduate trumpet students in lessons. Prior to this, Robert served as a graduate assistant at East Carolina University. His primary duty for this was performing with the faculty brass quintet in several master classes in performances across North Carolina at various high schools and middle schools. Along with this, he also served as a teaching assistant for Jazz History, and served as an assistant audio engineer for East Carolina University.
                    </p>
                    <div className="md:w-1/2"> 
                        <Image 
                            src="/carousel/baroqueDuet.jpg" 
                            alt="baroque duet"
                            width={400}
                            height={267}
                            layout="responsive"
                            objectFit="cover"
                         />
                    </div>
                </div>
                <div className="bg-black/50 md:flex md:items-center">
                    <p className="p-4 md:w-1/2 text-xl">
                    Robert is an upcoming third year DMA student (ABD) at the University of Kentucky, where he currently serves as a teaching assistant for the trumpet studio. In addition to working on his doctorate, he has also obtained the Certificate in Baroque Trumpet Performance from the University of Kentucky. He completed his master's degree at East Carolina University and his undergraduate degree at Gardner-Webb University.  His current teacher in both modern and baroque trumpet is Dr. Jason Dovel. His previous trumpet instructors include Alan Siebert, Gabriel DiMartino, and Tim Hudson. Robert has also participated in masterclasses led by renowned trumpet players such as Hakan Hardenberger, Edward Carrol, Clément Saunier, Chris Martin, Charles Schlueter, Josh Cohen, Mark Ridenour, David Bilger, Craig Morris, Vince DiMartino, and Rex Richardson. 
                    </p>
                    <div className="md:w-1/2">
                        <Image 
                            src="/facingFront.JPG"
                            alt="Robbie facing front with a baroque trumpet"
                            width={400}
                            height={714}
                            layout="responsive"
                            objectFit="cover"
                        />
                    </div>
                </div>
                <div className="bg-black/50 md:flex md:flex-row-reverse md:items-center">
                    <p className="p-4 md:w-1/2 text-xl">
                    As a third-year DMA student (ABD) at the University of Kentucky, Robert has earned a Certificate in Baroque Trumpet Performance. He completed his master's degree at East Carolina University and his undergraduate degree at Gardner-Webb University. He currently studies both modern and baroque trumpet under Dr. Jason Dovel, and has previously trained with Alan Siebert, Gabriel DiMartino, and Timothy Hudson. 
                    </p>
                    <div className="md:w-1/2">
                        <Image 
                            src="/closeUp.jpg"
                            alt="robbie playing trumpet"
                            width={400}
                            height={600}
                            layout="responsive"
                            objectFit="cover"
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

{/* <div className="bg-black/50 md:flex md:flex-row-reverse md:items-center">
<p className="p-4 md:w-1/2 text-xl">

</p>
<div className="md:w-1/2">
    <Image 

    />
</div>
</div> */}

