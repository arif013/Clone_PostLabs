import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ParallaxVideo = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const videos = gsap.utils.toArray(".video-layer");
      gsap.set(videos, { opacity: 0 });
      gsap.set(videos[0], { opacity: 1 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=" + videos.length * window.innerHeight,
          scrub: true,
          pin: true,
        },
      });

      videos.forEach((video, i) => {
        if (i < videos.length - 1 ) {
          tl.to(video, { opacity: 0, duration: 1 }, i + 1);
          tl.to(videos[i + 1], { opacity: 1, duration: 1 }, i + 1);
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* Scrollable height = #videos * viewport */}
      <div style={{ height: `${3 * 100}vh` }} />

      {/* Fixed videos that stay full screen */}
      <div className="videos-wrapper fixed inset-0">
        <div className="video-layer absolute inset-0">
          <video
            src="https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2%2F6827802fb93caba00853824a_video2-transcode.mp4"
            autoPlay
            playsInline
            loop
            muted
            preload="auto"
            className="w-screen h-screen object-cover"
          />
        </div>
        <div className="video-layer absolute inset-0">
          <video
            src="https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2%2F682dd7a24d93a7df690274d9_post-labs-video-3-transcode.mp4"
            autoPlay
            playsInline
            loop
            muted
            preload="auto"
            className="w-screen h-screen object-cover"
          />
        </div>
        <div className="video-layer absolute inset-0">
          <video
            src="https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2%2F683a0051a4448581c2d2e587_post-labs-video-mobile-4-transcode.mp4"
            autoPlay
            playsInline
            loop
            muted
            preload="auto"
            className="w-screen h-screen object-cover"
          />
        </div>
      </div>

      {/* Next content */}
      {/* <section className="h-screen flex items-center justify-center bg-black text-white text-4xl">
        Next Content Section 🚀
      </section> */}
    </div>
  );
};

export default ParallaxVideo;
