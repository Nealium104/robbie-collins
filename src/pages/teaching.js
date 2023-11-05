import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

export default function Teaching() {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);

  const spring = useSpring({
    opacity: imageIsLoaded ? 1 : 0,
    config: { duration: 1000 },
  });

  return (
    <div id="top">
      <Nav />
      <main className="max-w-screen-lg mx-auto">
        <h1 className="p-4 mt-4 text-5xl font-bold text-center md:mt-0">
          Teaching
        </h1>
        <div className="p-5 my-6 md:flex md:pt-0 bg-black/75">
          <animated.div className="pt-4 mx-auto" style={spring}>
            <Image
              className="mx-auto"
              src="https://res.cloudinary.com/dwbwyzsyp/image/upload/v1687393753/Robbie/robbie4-5_fstxmo.jpg"
              alt="Robbie Pro Headshot"
              placeholder="blur"
              blurDataURL="/blur/robbie4-5Blur.jpg"
              width={400}
              height={500}
              onLoad={() => setImageIsLoaded(true)}
            />
          </animated.div>
          <div className="flex flex-col w-full gap-4 p-3 mx-auto md:w-1/2">
            <p className="font-thin ">
              Teaching music is my deepest passion, and I've held the lifelong
              dream of becoming an educator. Explaining musical concepts to my
              students is second nature, and I find it easy to communicate ideas
              to others. I try to make my teaching style cater to the students
              on an individual level. I have come to find that people learn in a
              variety of ways, and I enjoy the challenge of finding what works
              best for each student. I place great importance on promoting
              self-motivation by nurturing the students' curiousity; I want them
              to be the best version of themselves, not a carbon copy of myself.
            </p>
            <p className="font-thin">
              I firmly believe that teaching is a mutual exchange. The best
              educators learn from their students as much as they impart
              knowledge onto them. There's nothing more fulfilling than
              witnessing a student's "AHA!" moment, or listening to them express
              their own ideas in a unique way. Their enthusiasm becomes my own,
              and I embrace the fresh perspectives they bring to the world of
              music while welcoming their suggestions. Thanks to this dynamic
              exchange of ideas, I continue to grow as a musician and each day
              feels fresh and new. It makes me eagerly anticipate the years of
              teaching that lie ahead for me.
            </p>
            <p className="font-thin">
              I currently serve as the private trumpet instructor for both the
              Central Music Academy, located in Lexington, Kentucky, as well as
              the Wesley Academy of Music and YES Arts, in Frankfort, Kentucky.
              These are non-profit 501(C)(3) organizations that provide free
              musical training to students between the ages of 8–18 from
              underprivileged backgrounds who would not be able to afford
              private instruction otherwise. Working with these programs has
              helped me grow as an educator and allowed me to provide an
              opportunity to mentor many young musicians with different goals
              and interests. I am dedicated to ensuring that all students,
              regardless of their background, feel welcomed, supported, and
              empowered to reach their full potential in the world of music.
            </p>
          </div>
        </div>
        <h2 className="text-4xl text-center">Lesson Plans:</h2>
        <div className="flex flex-col items-center my-10 md:flex-row md:h-40">
          <Link
            href="/contact/"
            className="flex flex-col justify-around w-3/4 h-full gap-6 p-4 m-4 text-center text-black transition duration-120 bg-primary hover:bg-black/75 hover:text-white"
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
            className="flex flex-col w-3/4 h-full gap-6 p-4 m-4 text-center text-black justify-evenly bg-primary hover:bg-black/75 hover:text-white"
          >
            <h3 className="text-3xl font-thin underline">Monthly</h3>
            <span className="text-xl font-thin h-1/2">
              1 Hour per week | $180
            </span>
          </Link>
          <Link
            href="/contact/"
            className="flex flex-col justify-between w-3/4 h-full gap-6 p-4 m-4 text-center text-black bg-primary hover:bg-black/75 hover:text-white"
          >
            <h3 className="text-3xl font-thin underline">Yearly</h3>
            <span className="text-xl font-thin h-1/2">
              1 Hour per week | $2,000
            </span>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
