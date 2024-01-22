import Image from "next/legacy/image";
import Nav from "../components/Nav";
import Footer from "@/components/Footer";
import { useSpring, animated } from "@react-spring/web";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [mainImageLoaded, setMainImageLoaded] = useState(false);

  const springs = useSpring({
    from: { y: "-100px", opacity: 0 },
    to: { y: "100px", opacity: 1 },
    config: { duration: 1000 },
  });

  const learnSprings = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 2000 },
    delay: 1500,
  });

  const mainSpring = useSpring({
    opacity: mainImageLoaded ? 1 : 0,
    config: { duration: 1000 },
  });

  return (
    <div id="top">
      <Nav />
      <main>
        <header className="relative z-10 flex items-center justify-center h-full">
          <section className="flex flex-col items-center">
            <animated.h1
              style={{ ...springs, zIndex: 10 }}
              className="p-4 text-5xl font-thin text-center bg-black/75 lg:text-9xl"
            >
              Hi, I'm Robbie
            </animated.h1>
            <animated.div style={{ ...learnSprings }} className="z-10">
              <Link
                href="/bio/"
                className="relative z-10 text-base font-normal text-black btn bg-primary w-1/8 -bottom-20 bg-neutral/50 hover:text-white hover:border-1 hover:border-white"
              >
                Learn More
              </Link>
            </animated.div>
          </section>
          <div>
            <animated.div
              className="w-full min-h-screen mt-32"
              style={mainSpring}
            >
              <Image
                className="mt-20 md:mt-0"
                src="https://res.cloudinary.com/dwbwyzsyp/image/upload/v1687393746/Robbie/withBackgroundColorCorrected_f6yufy.jpg"
                alt="Milky Way"
                layout="fill"
                objectFit="cover"
                blurDataURL="/blur/withBackgroundColorCorrectedBlur.jpg"
                placeholder="blur"
                onLoad={() => setMainImageLoaded(true)}
              />
            </animated.div>
          </div>
        </header>
        <div className="justify-center m-5 md:flex md:flex-row-reverse md:text-xl">
          <div className="m-5 rounded-lg bg-neutral">
            <p className="max-w-screen-md p-10 font-thin text-center">
              Hello, I'm Robert Collins, a passionate trumpeter, educator, and
              organizer. With a diverse background in performance, education,
              and community involvement, I aim to inspire others through music.
            </p>
            <p className="max-w-screen-md p-4 font-thin text-center">
              In my bio, you'll learn about my experiences, academic journey,
              and the mentors who've shaped my growth. You can also learn about
              my musical involvement through performance and teaching. And if
              you need to contact me for lessons or just to reach out, you can
              contact me{" "}
              <Link className="text-purple-400 underline" href="/contact/">
                here!
              </Link>
            </p>
            <div className="flex justify-center py-4">
              <Link
                className="text-base font-normal text-black rounded-lg btn bg-primary hover:bg-bg-black/75 hover:text-white hover:border-white focus:bg-black/75 focus:text-black"
                href="/bio/"
              >
                Read my Bio
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
