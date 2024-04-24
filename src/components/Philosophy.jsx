export default function Philosophy({ textArray, src, width, height }) {
  return (
    <>
      {textArray[0]?.fields?.text?.content.map((item, index) => (
        <p>{item?.content[0]?.value}</p>
      ))}
    </>
  );
}
