import Nav from '../components/Nav'
import Footer from "../components/Footer"
import Image from "next/image";

export default function Teaching () {
    return (
        <>
            <Nav />
            <div className='mx-auto max-w-screen-lg'>
                <h1 className="text-5xl font-bold p-4 text-center">Teaching</h1>
                <div className="md:flex items-center">
                    <Image 
                        src="/robbie4-5.jpg"
                        width={400}
                        height={500}
                    />
                    <div>
                        <p className="py-5 mx-6">There is nothing I enjoy more than teaching music. I have always wanted to be a teacher and I wake up every day excited for the opportunity to teach again. Expressing musical concepts to students seems to come naturally to me, and I have always felt comfortable explaining ideas to others.</p>
                        <p className="py-5 mx-6">My passion for the trumpet influences how I teach. Because I am quite motivated personally, my first priority in my trumpet studio is student motivation. It is important to me that my students are curious, and highly motivated. To promote student motivation, I try to lead by example, rising early every day to practice, trying to be positive in all situations, answering emails immediately, and being involved in music and the community in as many ways as possible.</p>
                        <p className="py-5 mx-6">Currently, I offer both modern and baroque trumpet lessons both in-person and virtually! I offer in-person lessons to all of those living within the Lexington, KY area. If you are interested in studying with me but do not live in the area, I also provide Zoom lessons. Whether you are looking for a consistent, long-term teacher, or just a one-off lesson to prepare for all-state, I am happy to be of assistance! Please do not hesitate to reach out, the first lesson I provide is always free.</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center md:h-40 my-10">
                    <div className="flex flex-col justify-around text-center p-4 m-4 bg-white text-black rounded-xl w-3/4 h-full gap-6 hover:bg-primary hover:text-white">
                        <h2 className="underline text-3xl font-bold">Individual</h2>
                        <div className="h-1/2">
                            <div>
                                <span className='text-xl'>30 Minutes | $35</span>
                            </div>
                            <div>
                                <span className='text-xl'>1 Hour | $50</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-evenly text-center p-4 m-4 bg-white text-black rounded-xl w-3/4 h-full gap-6 hover:bg-primary hover:text-white">
                        <h2 className="underline text-3xl font-bold">Monthly</h2>
                        <span className='text-xl h-1/2'>1 Hour | $180</span>
                    </div>
                    <div className="flex flex-col justify-between text-center p-4 m-4 bg-white text-black rounded-xl w-3/4 h-full gap-6 hover:bg-primary hover:text-white">
                        <h2 className="underline text-3xl font-bold">Yearly</h2>
                        <span className='text-xl h-1/2'>1 Hour | $2,000</span>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}