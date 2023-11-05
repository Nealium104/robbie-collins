import Link from "next/link";
import Image from "next/legacy/image";
import { useState } from "react";
import { animated, useSpring } from "@react-spring/web";

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  const spring = useSpring({
    opacity: imageLoaded ? 1 : 0,
    config: { duration: 1000 },
  });

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
              a renowned trumpet performer, educator, and organizer. I'm known
              for my work with the Cincinnati Symphony Orchestra May
              festival-herald trumpets, Knoxville Symphony Orchestra,
              International Trumpet Guild, and the University of Kentucky. I
              invite you to explore my journey through performance, education,
              and mentorship in the trumpet community.
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
