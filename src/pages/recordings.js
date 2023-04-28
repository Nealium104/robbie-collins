import Nav from '../components/Nav'
import Footer from "@/components/Footer";

export default function Recordings () {
    return (
        <>
            <Nav />
            <h1 className="font-thin text-5xl text-center my-5 mt-20 md:mt-0">Recordings</h1>
            <p className="font-thin text-center text-xl">Some of my performances below:</p>
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 mx-auto max-w-screen-xl">
                    <div className="m-4 bg-neutral flex flex-col">
                        <div className="relative w-full pb-[56%] h-0">
                            <iframe className="absolute w-full h-full" src="https://www.youtube.com/embed/Ef64GLuyu9k" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                        <span className="text-center w-full font-light my-auto">Quarantine for unaccompanied trumpet was the opening piece for my DMA recital in the Spring of 2023. This piece held a lot of meaning in this performance for me. This was actually the first live, solo recital that I have performed since the pandemic.</span>
                    </div>
                    <div className="m-4 bg-neutral flex flex-col">
                        <div className="relative w-full pb-[56%] h-0">
                            <iframe className="absolute w-full h-full" src="https://www.youtube.com/embed/UW6YHTjf6-o" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                        <span className="text-center w-full font-light my-auto">This performance was recorded at the Memorial Baptist Church in Greenville, NC as part of Robert Collins's MM recital at ECU.</span>
                    </div>
                    <div className="m-4 bg-neutral flex flex-col">
                        <div className="relative w-full pb-[56%] h-0">
                            <iframe className="absolute w-full h-full" src="https://www.youtube.com/embed/f-zRBMu0VO8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                        <span className="text-center w-full font-light">This video is a submission for the graduate solo division of the National Trumpet Competition.</span>
                    </div>
                </div>
            <Footer />
        </>
    )
}
