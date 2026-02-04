type DriveVideoProps = {
  videoId: string;
  autoplay?: boolean;
};

export default function DriveVideo({
  videoId,
  autoplay = false,
}: DriveVideoProps) {
  const src = `https://drive.google.com/file/d/${videoId}/preview${autoplay ? "?autoplay=1" : ""}`;

  return (
    <div className="video-container">
      <iframe
        className="video"
        src={src}
        allow="autoplay"
        allowFullScreen
        style={{ border: "none", borderRadius: "8px" }}
      />
    </div>
  );
}
