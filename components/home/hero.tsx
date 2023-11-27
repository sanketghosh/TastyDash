"use client";

import Image from "next/image";

/* importing states */
import { useEffect, useState } from "react";

/* importing images */
import bgImage1 from "@/public/slide1.png";
import bgImage2 from "@/public/slide2.png";
import bgImage3 from "@/public/slide3.jpg";
import { Button } from "../ui/button";

export default function Hero() {
  const bg_images = [bgImage1, bgImage2, bgImage3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bg_images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const currentImage = bg_images[currentImageIndex];
  // console.log(currentImage);

  return (
    <div className="relative">
      <Image
        alt="bg-image"
        src={currentImage}
        className="w-full h-[70vh] object-cover brightness-[.4] overflow-hidden rounded-tl-2xl rounded-br-2xl transition"
      />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col gap-5 items-center justify-center p-5">
        <h1 className="text-zinc-50 text-3xl md:text-5xl font-bold text-center max-w-xl mx-auto">
          Crave. Tap. Eat.
          <br className="max-md:hidden" />
          <span>Instantly enjoy mouthwatering meals!</span>
        </h1>
        <p className="max-w-2xl text-[13px] md:text-base mx-auto text-center text-zinc-300 font-medium">
          Explore flavors with TastyDash. Order delightful food in a dash.
          Lightning-fast delivery brings savory satisfaction. Order now and
          savor the taste!
        </p>
        <Button>Order Now</Button>
      </div>
    </div>
  );
}
