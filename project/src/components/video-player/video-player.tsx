import { useEffect, useRef } from 'react';

type VideoProps = {
    src: string;
    img: string;
    isPlaying: boolean;
}

export default function Videoplayer({ src, img, isPlaying }: VideoProps): JSX.Element {

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {

    if (videoRef.current === null) {
      return;
    }

    if (isPlaying) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      return;
    }

    videoRef.current.load();
  }, [isPlaying]);

  return (
    <video
      src={src}
      ref={videoRef}
      poster={img}
      muted
      loop
    >
    </video>
  );
}
