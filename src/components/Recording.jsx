export default function Recording({ url, description }) {
  const extractYouTubeID = (url) => {
    const regExp =
      /^.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[1].length === 11 ? match[1] : null;
  };

  const videoID = extractYouTubeID(url);
  return (
    <article className="flex flex-col m-4">
      <div className="relative w-full h-96 bg-black/25">
        <iframe
          className="absolute w-full h-full"
          src={`https://www.youtube.com/embed/${videoID}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <p>{description}</p>
    </article>
  );
}
