import Nav from '../components/Nav'
import Footer from "../components/Footer"
import Image from "next/image";
import Link from 'next/link';
import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

export default function Teaching () {
    const [imageIsLoaded, setImageIsLoaded] = useState(false);

    const spring = useSpring({
        opacity: imageIsLoaded ? 1 : 0,
        config: { duration: 1000},
      })

    return (
        <div id='top'>
            <Nav />
            <main className='mx-auto max-w-screen-lg'>
                <h1 className="font-thin text-5xl font-bold p-4 text-center mt-20 md:mt-0">Teaching</h1>
                    <div className="md:flex pt-5 md:pt-0 items-center bg-black/75 my-6">
                        <animated.div className="mx-auto" style={spring}>
                            <Image 
                                className='mx-auto'
                                src="/images/robbie4-5.jpg"
                                alt="Robbie Pro Headshot"
                                placeholder='blur'
                                blurDataURL='/blur/robbie4-5Blur.jpg'
                                width={400}
                                height={500}
                                onLoad={() => setImageIsLoaded(true)}
                            />
                        </animated.div>
                        <div className='w-full p-3 md:w-1/2 mx-auto'>
                            <p className="font-thin py-5 ">There is nothing I enjoy more than teaching music. I have always wanted to be a teacher and I wake up every day excited for the opportunity to teach again. Expressing musical concepts to students seems to come naturally to me, and I have always felt comfortable explaining ideas to others.</p>
                            <p className="font-thin py-5 ">My passion for the trumpet influences how I teach. Because I am quite motivated personally, my first priority in my trumpet studio is student motivation. It is important to me that my students are curious, and highly motivated. To promote student motivation, I try to lead by example, rising early every day to practice, trying to be positive in all situations, answering emails immediately, and being involved in music and the community in as many ways as possible.</p>
                            <p className="font-thin py-5 ">Currently, I offer both modern and baroque trumpet lessons both in-person and virtually! I offer in-person lessons to all of those living within the Lexington, KY area. If you are interested in studying with me but do not live in the area, I also provide Zoom lessons. Whether you are looking for a consistent, long-term teacher, or just a one-off lesson to prepare for all-state, I am happy to be of assistance! Please do not hesitate to reach out, the first lesson I provide is always free.</p>
                        </div>
                    </div>
                <h2 className='text-center text-4xl'>Lesson Plans:</h2>
                <div className="flex flex-col md:flex-row items-center md:h-40 my-10">
                    <Link href="/contact/" className="flex flex-col justify-around text-center p-4 m-4 bg-primary text-black w-3/4 h-full gap-6 hover:bg-black/75 hover:text-white">
                        <h3 className="underline text-3xl font-thin">Individual</h3>
                        <div className="h-1/2">
                            <div>
                                <span className='text-xl font-thin'>30 Minutes | $35</span>
                            </div>
                            <div>
                                <span className='text-xl font-thin'>1 Hour | $50</span>
                            </div>
                        </div>
                    </Link>
                    <Link href="/contact/" className="flex flex-col justify-evenly text-center p-4 m-4 bg-primary text-black w-3/4 h-full gap-6 hover:bg-black/75 hover:text-white">
                        <h3 className="underline text-3xl font-thin">Monthly</h3>
                        <span className='text-xl h-1/2 font-thin'>1 Hour per week | $180</span>
                    </Link>
                    <Link href="/contact/" className="flex flex-col justify-between text-center p-4 m-4 bg-primary text-black w-3/4 h-full gap-6 hover:bg-black/75 hover:text-white">
                        <h3 className="underline text-3xl font-thin">Yearly</h3>
                        <span className='text-xl h-1/2 font-thin'>1 Hour per week | $2,000</span>
                    </Link>
                </div>
            </main>
            <Footer />
        </div>
    )
}