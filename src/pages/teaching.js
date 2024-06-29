import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import Philosophy from "@/components/Philosophy";
import { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import fetchData from "./api/fetchData";

export default function Teaching() {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);
  const [teachingPhilosophyData, setTeachingPhilosophyData] = useState([]);

  const spring = useSpring({
    opacity: imageIsLoaded ? 1 : 0,
    config: { duration: 1000 },
  });

  useEffect(() => {
    const getContent = async () => {
      const contentData = await fetchData("teachingPhilosophy");
      setTeachingPhilosophyData(contentData);
    };
    getContent();
  }, []);

  return (
    <div id="top">
      <Nav />
      <main className="flex flex-col max-w-screen-lg gap-8 mx-auto">
        <h1 className="text-5xl font-bold text-center">Teaching</h1>
        <div className="flex p-6 bg-black/75">
          <Image
            className="h-fit"
            src="https://res.cloudinary.com/dwbwyzsyp/image/upload/v1687393753/Robbie/robbie4-5_fstxmo.jpg"
            alt="Robbie Pro Headshot"
            placeholder="blur"
            blurDataURL="/blur/robbie4-5Blur.jpg"
            width={400}
            height={500}
            onLoad={() => setImageIsLoaded(true)}
          />
          <di className="flex flex-col w-full gap-4 mx-auto leading-8 md:w-1/2">
            <Philosophy textArray={teachingPhilosophyData} />
          </di>
        </div>
        <div>
          <h2 className="text-4xl">Lesson Plans:</h2>
          <span className="italic">Free lesson for prospective students</span>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:h-40">
          <Link
            href="/contact/"
            className="flex flex-col justify-around w-3/4 h-full gap-6 p-4 text-center text-black transition duration-120 bg-primary hover:bg-black/75 hover:text-white"
          >
            <h3 className="text-3xl font-thin underline">Individual</h3>
            <div className="h-1/2">
              <div>
                <span className="text-xl font-thin">30 Minutes | $35</span>
              </div>
              <div>
                <span className="text-xl font-thin">1 Hour | $50</span>
              </div>
            </div>
          </Link>
          <Link
            href="/contact/"
            className="flex flex-col w-3/4 h-full gap-6 p-4 text-center text-black transition duration-120 justify-evenly bg-primary hover:bg-black/75 hover:text-white"
          >
            <h3 className="text-3xl font-thin underline">Monthly</h3>
            <span className="text-xl font-thin h-1/2">
              1 Hour per week | $180
            </span>
          </Link>
          <Link
            href="/contact/"
            className="flex flex-col justify-between w-3/4 h-full gap-6 p-4 text-center text-black transition duration-120 bg-primary hover:bg-black/75 hover:text-white"
          >
            <h3 className="text-3xl font-thin underline">Yearly</h3>
            <span className="text-xl font-thin h-1/2">
              1 Hour per week | $2,000
            </span>
          </Link>
        </div>
      </main>
      <Footer />
      <script>{console.log(teachingPhilosophyData)}</script>
    </div>
  );
}
