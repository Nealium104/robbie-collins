import Head from 'next/head';
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
      <Head>
        <title>Robbie Collins</title>
        <meta name="description" content="Robbie Collins" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav className='z-10' />
      <div className={styles.wrapper}>
        <div className={styles.header} style={{ position: 'relative' }}>
          <div className="flex flex-col items-center">
            <animated.h1 style={{...springs, zIndex: 10}} className="text-4xl bg-black/75 p-4 lg:text-9xl">
              Hi, I'm Robbie
            </animated.h1>
            <animated.div style={{...learnSprings}} className="z-10">
              <Link href="/bio/" className="btn relative z-10 w-1/8 -bottom-20 bg-neutral/50">Learn More</Link>
            </animated.div>
          </div>
          <Image
            className="absolute top-0 left-0 w-full h-full object-cover object-center"
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
          <div className='border-4 border-primary m-5 rounded-lg bg-neutral/25'>
            <p className='text-center p-10 max-w-screen-md'>
            Hello, I'm Robert Collins, a passionate trumpeter, educator, and organizer. With a diverse background in performance, education, and community involvement, 
            I aim to inspire others through music.
            </p>
            <p className='text-center p-4 max-w-screen-md'>In my bio, you'll learn about my experiences, academic journey, and the mentors who've shaped my growth. You can also learn about my musical
            involvement through performance and teaching and contact me directly through the form on the contact page.
            </p>
            <div className="flex justify-center py-4">
              <Link className='btn bg-primary focus:bg-white focus:text-black' href="/bio/">Read my Bio</Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}