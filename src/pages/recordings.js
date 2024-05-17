import Nav from "../components/Nav";
import Footer from "@/components/Footer";

export default function Recordings() {
  return (
    <div id="top">
      <Nav />
      <main>
        <h1 className="my-5 mt-20 text-5xl font-thin text-center md:mt-0">
          Recordings
        </h1>
        <p className="text-xl font-thin text-center">
          Some of my performances below:
        </p>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 mx-auto md:grid-cols-2">
          <div className="flex flex-col m-4 bg-neutral">
            <div className="relative w-full pb-[56%] h-0">
              <iframe
                className="absolute w-full h-full"
                src="https://www.youtube.com/embed/Ef64GLuyu9k"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <span className="w-full my-auto font-light text-center">
              Quarantine for unaccompanied trumpet was the opening piece for my
              DMA recital in the Spring of 2023. This piece held a lot of
              meaning in this performance for me. This was actually the first
              live, solo recital that I have performed since the pandemic.
            </span>
          </div>
          <div className="flex flex-col m-4 bg-neutral">
            <div className="relative w-full pb-[56%] h-0">
              <iframe
                className="absolute w-full h-full"
                src="https://www.youtube.com/embed/UW6YHTjf6-o"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <span className="w-full my-auto font-light text-center">
              Here are my favorite solo/impactful moments from playing in the
              orchestra. I hope you enjoy it!
            </span>
          </div>
          <div className="flex flex-col m-4 bg-neutral">
            <div className="relative w-full pb-[56%] h-0">
              <iframe
                className="absolute w-full h-full"
                src="https://www.youtube.com/embed/nN7vjFnG-rg?si=K7ZxnwXOflXsHrC1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <span className="w-full font-light text-center">
              All Through the Night was was composed for one of my first trumpet
              teachers, Tim Hudson of Greensboro, NC. This piece is dedicated to
              Tim, Michelle, and Tom Hudson. It is based on the traditional
              Welsh lullaby "Ard hyd y nos" (All through the night).
            </span>
          </div>
          <div className="flex flex-col m-4 bg-neutral">
            <div className="relative w-full pb-[56%] h-0">
              <iframe
                className="absolute w-full h-full"
                src="https://www.youtube.com/embed/Ai9OHuWMCOA"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <span className="w-full font-light text-center">
              This performance was sparked as a response from the 2020
              quarantine. These pictures were taken of our "Quiet City" during
              the trying times.{" "}
            </span>
          </div>
          <div className="flex flex-col m-4 bg-neutral">
            <div className="relative w-full pb-[56%] h-0">
              <iframe
                className="absolute w-full h-full"
                src="https://www.youtube.com/embed/KVUrKn0OrH0?si=3Zhsf4ctoRk0rBv_"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <span className="w-full font-light text-center">
              016 Fantasy for Trumpet and Piano by Rex Richardson is an extreme
              and obscure piece of trumpet repertoire. My doctoral dissertation
              is based around the execution of this piece and how it applies to
              extreme repertoire as a whole. This audo was recorded and produced
              in the DBH recording studio by Dave Henderson.
            </span>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
