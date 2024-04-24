import { useSpring } from "@react-spring/web";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import fetchData from "./api/fetchData";
import BioSection from "@/components/BioSection";

export default function Bio() {
  const [bioData, setBioData] = useState([]);
  const [imageIsLoaded, setImageIsLoaded] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
  });

  const createSpring = (index) =>
    useSpring({
      opacity: imageIsLoaded[index] ? 1 : 0,
      config: { duration: 1000 },
    });

  const handleImageLoad = (index) => () => {
    setImageIsLoaded((prevState) => ({ ...prevState, [index]: true }));
  };

  useEffect(() => {
    const getContent = async () => {
      const contentData = await fetchData("bioSection");
      setBioData(contentData);
    };
    getContent();
  }, []);

  return (
    <div id="top">
      <Nav />
      <main>
        <Hero />
        <section className="flex flex-col items-center justify-center max-w-screen-xl mx-auto">
          {bioData.map((item, index) => (
            <BioSection
              key={index}
              order={index + 1}
              text={item.fields?.text?.content[0]?.content[0]?.value}
              src={item.fields?.image?.fields?.file?.url}
              width={item.fields?.image?.fields?.file?.details?.image?.width}
              height={item.fields?.image?.fields?.file?.details?.image?.height}
            />
          ))}
        </section>
      </main>
      <Footer />
      <script>{console.log(bioData)}</script>
    </div>
  );
}
