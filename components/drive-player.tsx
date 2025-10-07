"use client";

import ReactPlayer from "react-player";

export default function DrivePlayer({
  url,
  width = "100%",
  height = "480px",
  videoRef,
}: {
  url: string;
  width?: string;
  height?: string;
  videoRef?: React.RefObject<HTMLVideoElement> | null;
}) {
  return (
    <ReactPlayer
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-full object-cover"
      src={url}
      width={width}
      height={height}
      ref={videoRef}
    />
  );
}
