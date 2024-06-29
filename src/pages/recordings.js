import fetchData from "./api/fetchData";
import Nav from "../components/Nav";
import Footer from "@/components/Footer";
import Recording from "@/components/Recording";
import { useState, useEffect } from "react";

export default function Recordings() {
  const [recordingData, setRecordingData] = useState([]);

  useEffect(() => {
    const getContent = async () => {
      const contentData = await fetchData("recording");
      setRecordingData(contentData);
    };
    getContent();
  }, []);

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
        <section className="grid max-w-screen-xl grid-cols-1 gap-4 mx-auto md:grid-cols-2">
          {recordingData
            .sort((a, b) => a.fields.position - b.fields.position)
            .map((item, index) => {
              return (
                <Recording
                  url={item.fields.url}
                  description={item.fields.description}
                />
              );
            })}
        </section>
      </main>
      <Footer />
      <script>{console.log(recordingData)}</script>
    </div>
  );
}
