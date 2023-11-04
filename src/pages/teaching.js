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
                <h1 className="font-thin text-5xl font-bold p-4 text-center mt-4 md:mt-0">Teaching</h1>
                    <div className="md:flex pt-5 md:pt-0 items-center bg-black/75 my-6">
                        <animated.div className="mx-auto" style={spring}>
                            <Image 
                                className='mx-auto'
                                src="https://res.cloudinary.com/dwbwyzsyp/image/upload/v1687393753/Robbie/robbie4-5_fstxmo.jpg"
                                alt="Robbie Pro Headshot"
                                placeholder='blur'
                                blurDataURL='/blur/robbie4-5Blur.jpg'
                                width={400}
                                height={500}
                                onLoad={() => setImageIsLoaded(true)}
                            />
                        </animated.div>
                        <div className='w-full p-3 md:w-1/2 mx-auto'>
                            <p className="font-thin py-5 ">Teaching music is my deepest passion, and I've held the lifelong dream of becoming an educator. Explaining musical concepts to my students is second nature, and I find it easy to communicate ideas to others. Teaching occupies my thoughts, even beyond the classroom, as I continually assess my teaching methods, adapt strategies for individual students, and uncover solutions long after the class or lesson has concluded. I try to make my teaching style cater to the students on an individual level. I have come to find that people learn in a variety of ways, and I enjoy the challenge of finding what works best for each student.
My passion for the trumpet significantly influences my teaching approach. Given my personal drive, my top priority in my trumpet studio is to instill motivation in my students. I place great importance on nurturing their curiosity and keeping them highly motivated; I want them to be the best version of themselves, not a carbon copy of myself. To foster this motivation, I lead by example, pushing students to pursue individual interests, maintaining a positive outlook in all situations, promptly addressing emails, and actively participating in music and the community in as many ways as I can.
I firmly believe that teaching is a mutual exchange. Good teachers learn as much as they impart knowledge. I not only gain knowledge from my students but draw inspiration from them. Effective educators learn as much as they impart. My students contribute to my knowledge and inspire me. Their enthusiasm becomes my own, and I embrace the fresh perspectives they bring to the world of music while welcoming their suggestions. Thanks to this dynamic exchange of ideas, each day feels fresh and new. It makes me eagerly anticipate the years of teaching that lie ahead for me.
I currently serve as the private trumpet instructor for both the Central Music Academy, located in Lexington, Kentucky, as well as the Wesley Academy of Music and YES Arts, in Frankfort, Kentucky. These are non-profit 501(C)(3) organizations that provide free musical training to students between the ages of 8–18 from underprivileged backgrounds who would not be able to afford private instruction otherwise. Working with these programs has helped me grow as an educator and allowed me to provide an opportunity to mentor many young musicians with different goals and interests. I am dedicated to ensuring that all students, regardless of their background, feel welcomed, supported, and empowered to reach their full potential in the world of music.</p>
                            
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