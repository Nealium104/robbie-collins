import Link from "next/link";
import Image from "next/legacy/image";
import { useState, useEffect } from "react";
import { animated, useSpring } from "@react-spring/web";
import fetchData from "../pages/api/fetchData";

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [header, setHeader] = useState([]);

  const spring = useSpring({
    opacity: imageLoaded ? 1 : 0,
    config: { duration: 1000 },
  });

  useEffect(() => {
    const getContent = async () => {
      const contentData = await fetchData("bioHeader");
      setHeader(contentData);
      console.log(contentData);
    };
    getContent();
  }, []);

  return (
    <>
      <div className="relative min-h-screen hero">
        <animated.div style={spring}>
          <Image
            className="absolute inset-0 -z-10"
            src="https://res.cloudinary.com/dwbwyzsyp/image/upload/v1687393764/Robbie/robbie_r58rla.jpg"
            alt="Robbie Close Up"
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL="/blur/robbieBlur.jpg"
            onLoad={() => setImageLoaded(true)}
          />
        </animated.div>
        <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
        <div className="z-10 flex items-center justify-center p-6 text-center text-neutral-content bg-black/75">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-primary">
              Hi, I'm Robbie,
            </h1>
            <p className="mb-5 text-2xl font-thin">
              {header.map((item) => (
                <p>{item.fields.bioHeader}</p>
              ))}
            </p>
            <Link href="/contact/" className="btn btn-primary">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
