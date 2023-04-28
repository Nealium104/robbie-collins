import Image from "next/legacy/image";
import styles from '@/styles/components/Index.module.css'
import Nav from '../components/Nav';
import Footer from '@/components/Footer';
import { useSpring, animated, config } from '@react-spring/web';
import Link from 'next/link';

export default function Home() {
  const springs = useSpring({
    from: { y: '-100px', opacity: 0},
    to: { y: '100px', opacity: 1},
    config: { duration: 1000},
  })

  const learnSprings = useSpring({
    from: {opacity: 0},
    to: {opacity:1},
    config: {duration:2000},
    delay: 1500,
  })

  return (
    <>
      <Nav className='z-10' />
      <div className={styles.wrapper}>
        <div className={styles.header} style={{ position: 'relative' }}>
          <div className="flex flex-col items-center">
            <animated.h1 style={{...springs, zIndex: 10}} className="text-6xl bg-black/75 p-4 lg:text-9xl font-thin">
              Hi, I'm Robbie
            </animated.h1>
            <animated.div style={{...learnSprings}} className="z-10">
              <Link href="/bio/" className="btn text-base font-normal bg-primary text-black relative z-10 w-1/8 -bottom-20 bg-neutral/50 font-thin hover:text-white hover:border-1 hover:border-white">Learn More</Link>
            </animated.div>
          </div>
          <Image
            className=""
            src="/withBackgroundColorCorrected.webp"
            alt="Milky Way"
            layout="fill"
            objectFit="cover"
            blurDataURL="/backgroundBlur.jpg"
            placeholder="blur"
            priority
          />
        </div>
        <div className='md:flex md:flex-row-reverse justify-center m-5 md:text-xl'>      
          <div className='rounded-lg m-5 bg-neutral'>
            <p className='font-thin text-center p-10 max-w-screen-md'>
            Hello, I'm Robert Collins, a passionate trumpeter, educator, and organizer. With a diverse background in performance, education, and community involvement, 
            I aim to inspire others through music.
            </p>
            <p className='font-thin text-center p-4 max-w-screen-md'>In my bio, you'll learn about my experiences, academic journey, and the mentors who've shaped my growth. You can also learn about my musical
            involvement through performance and teaching. And if you need to contact me for lessons or just to reach out, you can contact me <Link className="text-purple-400 underline" href="/contact/">here!</Link>
            </p>
            <div className="flex justify-center py-4">
              <Link className='btn text-base font-normal bg-primary text-black rounded-lg hover:bg-white hover:text-black focus:bg-white focus:text-black' href="/bio/">Read my Bio</Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}