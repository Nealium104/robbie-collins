import Image from "next/image";

export default function Philosophy({ textArray, src, width, height }) {
  return (
    <div>
      {textArray.content.map((item, index) => (
        <p>{item.value}</p>
      ))}
    </div>
  );
}
