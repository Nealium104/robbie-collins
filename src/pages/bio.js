import { useSpring, animated } from '@react-spring/web';
import Nav from '../components/Nav'
import Hero from "../components/Hero";
import Image from "next/legacy/image";
import Footer from "@/components/Footer";
import { useState } from 'react';

export default function Bio () {
      const [imageIsLoaded, setImageIsLoaded] = useState({
          1: false,
          2: false,
          3: false,
          4: false,
          5: false,
          6: false,
    })
      
      const createSpring = index => useSpring({
        opacity: imageIsLoaded[index] ? 1 : 0,
        config: { duration: 1000},
      })

      const handleImageLoad = (index) => () => {
        setImageIsLoaded((prevState) => ({ ...prevState, [index]: true }));
      };

    return (
        <div id=''>
            <Nav />
            <main>
                <Hero />
                <div className="flex flex-col max-w-screen-xl mx-auto">
                    <div className="bg-black/25 p-10 items-center md:flex md:items-center">
                        <animated.div className="md:w-1/2" style={createSpring(1)}>
                            <Image 
                                src="https://res.cloudinary.com/dwbwyzsyp/image/upload/v1687393809/Robbie/chrisMartin_t35l3i.webp"
                                alt="Robbie with Chris Martin"
                                width={400}
                                height={400}
                                layout="responsive"
                                objectFit="cover"
                                placeholder='blur'
                                blurDataURL='/blur/chrisMartinBlur.jpg'
                                onLoad={handleImageLoad(1)}
                                spring={createSpring(1)}
                            />
                        </animated.div>
                        <p className="font-thin p-4 md:w-3/4 text-xl">
                        Kentucky-based trumpeter Robert Collins has a deep passion for music performance and education. He is originally from the Coastal Plains of North Carolina and is an active member in the trumpet world as a performer, organizer and educator on both the regional and international level.
                        </p>
                    </div>
                    <div className="bg-black/75 p-10 md:flex md:flex-row-reverse md:items-center">
                        <animated.div className="md:w-1/2" style={createSpring(2)}>
                            <Image 
                                src="https://res.cloudinary.com/dwbwyzsyp/image/upload/v1687393747/Robbie/saxon1_ydpjgo.webp"
                                alt="Robbie in his saxon outfit"
                                width={400}
                                height={400}
                                layout="responsive"
                                objectFit="cover"
                                placeholder='blur'
                                blurDataURL='/blur/saxon1Blur.jpg'
                                onLoad={handleImageLoad(2)}
                                spring={createSpring(2)}
                            />                    
                        </animated.div>
                            <p className="font-thin md:w-3/4 text-xl">
                            Robert has performed in groups such as the Cincinnati Symphony Orchestra May Festival Herald Trumpet Ensemble, Knoxville Symphony Orchestra, the Lexington Brass Band, Saxton's Cornet Band, the ECU Faculty Brass Quintet, and UK faculty brass quintet. He has also performed at events including the International Trumpet Guild New Works Recital, North American Baroque Trumpet Conference, the National Trumpet Competition, Kentucky Music Educators Conference, Midwest Regional Tuba Euphonium Conference, as well as others. One of Robert’s strengths is his ability to cover a wide ranging set of diverse styles; however, he feels most at home in a chamber music setting.
                            </p>
                    </div>
                    <div className="bg-black/25 p-10 md:flex md:items-center">
                        <animated.div className="md:w-1/2" style={createSpring(3)}>
                        <Image 
                                src="https://res.cloudinary.com/dwbwyzsyp/image/upload/v1687393790/Robbie/HBS_mstzwo.jpg"
                                alt="Robbie with an HBS overlay"
                                width={400}
                                height={400}
                                layout="responsive"
                                objectFit="cover"
                                placeholder='blur'
                                blurDataURL='/blur/HBSBlur.jpg'
                                onLoad={handleImageLoad(3)}
                                spring={createSpring(3)}
                                />
                        </animated.div>
                        <p className="font-thin p-4 md:w-3/4 text-xl">
                        Currently, Robert serves as the co-chair for the International Trumpet Guild (ITG) Pre-Professional Division. He also serves as the primary volunteer coordinator for the Historic Brass Society. He has previously worked with the University of Kentucky Summer Trumpet Institute, International Trumpet Guild Conference, North American Baroque Trumpet Competition, and Gardner-Webb Trumpet Summit. He has also been an attendee at the Chosen Vale International Trumpet Seminar during his time researching his dissertation.
                        </p>
                    </div>
                    <div className="bg-black/75 p-10 md:flex md:flex-row-reverse md:items-center">
                        <animated.div className="md:w-1/2" style={createSpring(4)}> 
                            <Image 
                                src="https://res.cloudinary.com/dwbwyzsyp/image/upload/v1687393787/Robbie/heraldTrumpets_ymgwy1.jpg" 
                                alt="Herald Trumpet Ensemble"
                                width={400}
                                height={400}
                                layout="responsive"
                                objectFit="cover"
                                placeholder='blur'
                                blurDataURL='/blur/heraldTrumpetsBlur.jpg'
                                onLoad={handleImageLoad(4)}
                                spring={createSpring(4)}
                            />
                        </animated.div>
                        <p className="font-thin p-4 md:w-3/4 text-xl">
                        In addition to running a private trumpet studio, Robert is a teaching assistant at the University of Kentucky, teaching the course MUC163 (Brass Methods), instructing undergraduate trumpet students in lessons, and acts as an ITG Youth Competition Coach. Prior to this, Robert served as a graduate assistant at East Carolina University. His primary duty for this was performing with the faculty brass quintet in several master classes in performances across North Carolina at various high schools and middle schools. Along with this, he also served as a teaching assistant for Jazz History, and served as an assistant audio engineer for East Carolina University.
                        </p>
                    </div>
                    <div className="bg-black/25 p-10 md:flex md:items-center">
                        <animated.div className="md:w-1/2" style={createSpring(5)}>
                            <Image 
                                src="https://res.cloudinary.com/dwbwyzsyp/image/upload/v1687888424/Robbie/received_280623074489260Edit_yfc956.jpg"
                                alt="Robbie playing for Hakan"
                                width={400}
                                height={400}
                                layout="responsive"
                                objectFit="cover"
                                placeholder='blur'
                                blurDataURL='/blur/hakanBlur.jpg'
                                onLoad={handleImageLoad(5)}
                                spring={createSpring(5)}
                            />
                        </animated.div>
                        <p className="font-thin p-4 md:w-3/4 text-xl">
                        Robert is an upcoming third year DMA student (ABD) at the University of Kentucky, where he currently serves as a teaching assistant for the trumpet studio. In addition to working on his doctorate, he has also obtained the Certificate in Baroque Trumpet Performance from the University of Kentucky. He completed his master's degree at East Carolina University and his undergraduate degree at Gardner-Webb University.  His current teacher in both modern and baroque trumpet is Dr. Jason Dovel. His previous trumpet instructors include Alan Siebert, Gabriel DiMartino, and Tim Hudson. Robert has also participated in masterclasses led by renowned trumpet players such as Hakan Hardenberger, Edward Carrol, Clément Saunier, Chris Martin, Charles Schlueter, Josh Cohen, Mark Ridenour, David Bilger, Craig Morris, Vince DiMartino, and Rex Richardson. 
                        </p>
                    </div>
                    <div className="bg-black/75 p-10 md:flex md:flex-row-reverse md:items-center">
                        <animated.div className="md:w-1/2" style={createSpring(6)}>
                            <Image 
                                src="https://res.cloudinary.com/dwbwyzsyp/image/upload/v1687393807/Robbie/closeUp_tpb3ve.jpg"
                                alt="robbie playing trumpet"
                                width={400}
                                height={400}
                                layout="responsive"
                                objectFit="cover"
                                placeholder='blur'
                                blurDataURL='/blur/closeUpBlur.jpg'
                                onLoad={handleImageLoad(6)}
                                spring={createSpring(6)}
                            />
                        </animated.div>
                        <p className="font-thin p-4 md:w-3/4 text-xl">
                        As a third-year DMA student (ABD) at the University of Kentucky, Robert has earned a Certificate in Baroque Trumpet Performance. He completed his master's degree at East Carolina University and his undergraduate degree at Gardner-Webb University. He currently studies both modern and baroque trumpet under Dr. Jason Dovel, and has previously trained with Alan Siebert, Gabriel DiMartino, and Timothy Hudson. 
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
