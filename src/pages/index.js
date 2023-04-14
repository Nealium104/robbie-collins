import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/components/Index.module.css'
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Footer from '@/components/Footer';
import { useSpring, animated, config } from '@react-spring/web';

export default function Home() {
  const springs = useSpring({
    from: { y: '-100px', opacity: 0},
    to: { y: '100px', opacity: 1},
    config: { duration: 1000},
  })


  return (
    <>
      <Head>
        <title>Robbie Collins</title>
        <meta name="description" content="Robbie Collins" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <div className={styles.wrapper}>
        <div className={styles.header}>
        <div>
          <animated.h1 style={{...springs}} className="text-9xl bg-black/75 p-4">
            hi, i'm robbie
          </animated.h1>
        </div>
        <Image
            className={styles.background}
            src="/withBackgroundColorCorrected.webp"
            alt="Milky Way"
            width={4639}
            height={3093}
          />
          </div>
        <div className='bg-neutral flex justify-center'>
          <p className='w-3/4'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
            aperiam perferendis est earum minus ea dolore consectetur ut
            consequatur molestias facilis natus quae quisquam, obcaecati assumenda
            perspiciatis tenetur officiis odit.
          </p>
          <Image 
          />
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