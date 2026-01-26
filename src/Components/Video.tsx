type DriveVideoProps = {
  videoId: string;
  width?: string;
  height?: string;
  autoplay?: boolean;
};

export default function DriveVideo({
  videoId,
  width = "640",
  height = "480",
  autoplay = false,
}: DriveVideoProps) {
  const src = `https://drive.google.com/file/d/${videoId}/preview${autoplay ? "?autoplay=1" : ""}`;

  return (
    <div className="video-container">
      <iframe
        className="video"
        src={src}
        width={width}
        height={height}
        allow="autoplay"
        allowFullScreen
        style={{ border: "none", borderRadius: "8px" }}
      />
    </div>
  );
}
