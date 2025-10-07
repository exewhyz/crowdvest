"use client";

import ReactPlayer from "react-player";

export default function DrivePlayer({
  url,
  width = "100%",
  height = "480px",
}: {
  url: string;
  width?: string;
  height?: string;
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
    />
  );
}
