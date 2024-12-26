"use client";

import { useRef, useState } from "react";
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from "react-icons/fa";

function VideoPlayer({
  src,
  activeSrc,
  onPlay,
}: {
  src: string;
  activeSrc: string | null;
  onPlay: (src: string, videoRef: React.RefObject<HTMLVideoElement>) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);

  const isPlaying = activeSrc === src;

  const handlePlay = () => {
    if (!isPlaying) {
      videoRef.current?.play();
      onPlay(src, videoRef);
    } else {
      videoRef.current?.pause();
    }
  };

  const handleMute = () => {
    setIsMuted((prev) => !prev);
    if (videoRef.current) videoRef.current.muted = !isMuted;
  };

  return (
    <div className="relative aspect-video w-full group bg-gray-200">
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full"
        muted={isMuted}
        onPlay={() => setHasStarted(true)}
        onEnded={() => {
          setHasStarted(false);
          // @ts-expect-error - ignore this error
          onPlay(null, null); // Reset active video when it ends
        }}
        onPause={() => {
          if (isPlaying) {
            // @ts-expect-error - ignore this error
            onPlay(null, null); // Reset active video when paused
          }
        }}
      />
      {!hasStarted && (
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            className="flex items-center justify-center bg-black bg-opacity-50 text-white text-4xl rounded-full w-[90px] h-[90px]"
            onClick={handlePlay}
          >
            <FaPlay />
          </button>
        </div>
      )}
      {hasStarted && (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            className="flex items-center justify-center bg-black bg-opacity-50 text-white text-4xl rounded-full w-[90px] h-[90px]"
            onClick={handlePlay}
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
        </div>
      )}
      <button
        className={`absolute bottom-4 left-4 bg-black bg-opacity-75 text-white p-2 rounded-full ${
          hasStarted ? "opacity-0 group-hover:opacity-100" : "opacity-100"
        } transition-opacity duration-300`}
        onClick={handleMute}
      >
        {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
      </button>
    </div>
  );
}

export default function TwoVideoSection() {
  const [activeVideo, setActiveVideo] = useState<{
    src: string | null;
    ref: React.RefObject<HTMLVideoElement> | null;
  }>({ src: null, ref: null });

  const handlePlay = (
    src: string | null,
    videoRef: React.RefObject<HTMLVideoElement> | null
  ) => {
    if (activeVideo.ref && activeVideo.ref.current !== videoRef?.current) {
      activeVideo.ref.current?.pause(); // Pause the previously playing video
    }
    setActiveVideo({ src, ref: videoRef });
  };

  return (
    <div className="flex flex-col gap-4 items-center justify-center lg:flex-row max-w-[90vw] lg:max-w-[80vw] mx-auto">
      <div className="w-full">
        <VideoPlayer
          src="https://utfs.io/f/KrRM7QSS9JrXSgaCJKVYCKNBRMtzkIXFdUo3j0y8cT1Zg46x"
          activeSrc={activeVideo.src}
          onPlay={handlePlay}
        />
      </div>
      <div className="w-full">
        <VideoPlayer
          src="https://utfs.io/f/KrRM7QSS9JrXYbVEv3waLSUHnukyhDrp7vqOfjsziWwmXd40"
          activeSrc={activeVideo.src}
          onPlay={handlePlay}
        />
      </div>
    </div>
  );
}
