"use client";

import { useEffect, useRef, useState } from "react";

export function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { rootMargin: "100px", threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white py-12 md:py-16">
      <div
        ref={containerRef}
        className="mx-auto max-w-5xl px-4 md:px-6 lg:px-8"
      >
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-sm">
          <video
            ref={videoRef}
            src={isInView ? "/video.mp4.mp4" : undefined}
            controls
            preload="metadata"
            playsInline
            className="h-auto w-full"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
