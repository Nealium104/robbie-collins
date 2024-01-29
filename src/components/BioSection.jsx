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
      <div className="relative md:w-1/2">
        <Image
          className={`${loading && `bg-gray-500`} relative`}
          src={`https:${src}`}
          onLoadingComplete={() => setLoading(false)}
          width={width}
          height={height}
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <p className="p-4 text-xl font-thin md:w-full">{text}</p>
    </article>
  );
}
