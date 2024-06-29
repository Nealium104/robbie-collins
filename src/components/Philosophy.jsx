export default function Philosophy({ textArray, src, width, height }) {
  return (
    <>
      {textArray[0]?.fields?.text?.content.map((item, index) => (
        <p className="w-[30em]">{item?.content[0]?.value}</p>
      ))}
    </>
  );
}
