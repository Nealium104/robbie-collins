import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/components/Index.module.css'
import Nav from '../components/Nav';
import Hero from '../components/Hero';
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
              hi, i'm robbie
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
            blurDataURL="/backgroundBlur.jpg"
            placeholder="blur"
          />
        </div>
        
        <div className='bg-neutral flex justify-center'>          
          <p className='w-3/4'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
            aperiam perferendis est earum minus ea dolore consectetur ut
            consequatur molestias facilis natus quae quisquam, obcaecati assumenda
            perspiciatis tenetur officiis odit.
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
}


{/* 
  If the parallax thing doesn't work, this will make the galaxy image the background for the whole thing
  <div style={{
  zIndex: -1,
  position: "fixed",
  width: "100vw",
  height: "100vh",
  }}>
    <Image 
    src="/backgroundBlue.webp"
    alt="Milky Way"
    layout="fill"
    objectFit="cover"
    ></Image>
  </div> */}