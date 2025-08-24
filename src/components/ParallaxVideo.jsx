import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// import "./App.css";

const ParallaxVideo = () => {
  const vidArr = [
    "https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2%2F6827802fb93caba00853824a_video2-transcode.mp4",
    "https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2%2F682dd7a24d93a7df690274d9_post-labs-video-3-transcode.mp4",
    "https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2%2F683a0051a4448581c2d2e587_post-labs-video-mobile-4-transcode.mp4",
  ];

  const words = ["Scale", "Creators", "Canada"];

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });


  const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.33], [1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.33, 0.45, 0.66], [0, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.66, 0.8, 1], [0, 1, 1]);
  const opacities = [opacity1, opacity2, opacity3];


  const y = useTransform(scrollYProgress, [0, 1], [0, -100 * (words.length - 1)]);

  return (
    <div className="w-full">

      <section ref={ref} className="relative h-[330vh] bg-white">
        <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
          {vidArr.map((item, index) => (
            <motion.video
              key={index}
              src={item}
              muted
              loop
              autoPlay
              className="absolute inset-0 w-[100vw] h-[110vh] object-cover"
              style={{ opacity: opacities[index] }}
            />
          ))}

          <div className="absolute text-white text-[40px] lg:text-[80px] font-normal left-10 bottom-[200px] flex flex-col gap-4">
            <span className="absolute   lg:left-[200px] w-[200px] lg:w-[400px]">Built for</span>

            <motion.div style={{ y }} className="absolute flex flex-col items-start left-[160px] lg:left-[520px] top-[40px] lg:top-[50px]">
              {words.map((word, index) => {
                const wordProgress = useTransform(
                  scrollYProgress,
                  [
                    index / words.length,
                    (index + 0.5) / words.length,
                    (index + 1) / words.length,
                  ],
                  [0.5, 1, 0.5] 
                );

                return (
                  <motion.div
                    key={index}
                    style={{ opacity: wordProgress }}
                    className="h-[1.8em] lg:h-[1em]"
                  >
                    {word}
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default ParallaxVideo;
