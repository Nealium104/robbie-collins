import Image from "next/legacy/image";
import Nav from "../components/Nav";
import Footer from "@/components/Footer";
import HomeParagraphs from "../components/HomeParagraphs";
import { useSpring, animated } from "@react-spring/web";
import Link from "next/link";
import { useState, useEffect } from "react";
import fetchData from "./api/fetchData";

export default function Home() {
  const [mainImageLoaded, setMainImageLoaded] = useState(false);
  const [data, setData] = useState([]);

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

  useEffect(() => {
    const getContent = async () => {
      const contentData = await fetchData("homeParagraphs");
      setData(contentData);
    };
    getContent();
  }, []);

  return (
    <div id="top">
      <Nav />
      <main className="h-screen">
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="flex flex-col items-center">
            <animated.h1
              style={{ ...springs, zIndex: 10 }}
              className="p-4 text-5xl font-thin text-center bg-black/75 lg:text-9xl"
            >
              Hi, I'm Robbie
            </animated.h1>
            <animated.div style={{ ...learnSprings }} className="z-10">
              <Link
                href="/bio/"
                className="relative z-10 text-base font-thin text-black btn bg-primary w-1/8 -bottom-20 bg-neutral/50 hover:text-white hover:border-1 hover:border-white"
              >
                Learn More
              </Link>
            </animated.div>
          </div>
          <div>
            <animated.div className="static" style={mainSpring}>
              <Image
                className="object-top"
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
        </div>
        <div className="justify-center m-5 md:flex md:flex-row-reverse md:text-xl">
          <div className="m-5 rounded-lg bg-neutral">
            {data
              .sort((a, b) => a.fields.position - b.fields.position)
              .map((item, index) => (
                <div key={index}>
                  <HomeParagraphs text={item.fields.paragraphText} />
                </div>
              ))}
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
