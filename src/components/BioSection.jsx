import Image from "next/image";
import { useState } from "react";

export default function BioSection({ src, order, text, width, height }) {
  const [loading, setLoading] = useState(true);

  return (
    <article
      className={`${
        order % 2 == 0 ? "bg-black/75" : "bg-black/25 md:flex-row-reverse"
      } p-10 md:flex md:items-center`}
    >
      <div className="relative w-full h-[400px]">
        <Image
          className={`${loading && `bg-gray-500`} md:w-1/2 relative`}
          src={`https:${src}`}
          onLoadingComplete={() => setLoading(false)}
          fill
        />
      </div>
      <p className="p-4 text-xl font-thin md:w-3/4">{text}</p>
    </article>
  );
}
