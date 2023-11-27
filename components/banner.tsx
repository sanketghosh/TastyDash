"use client";

import { XCircleIcon } from "lucide-react";
import { useState } from "react";

// import { MdClose } from "@/icons";

export default function Banner() {
  const [bannerClose, setBannerClose] = useState(false);

  const handleBannerClose = () => {
    setBannerClose(true);
  };

  return (
    <div
      className={`bg-background text-foreground py-3 px-3 text-sm md:text-base text-center relative ${
        bannerClose ? "hidden" : "block"
      }`}
    >
      <h2>
        Order anything over $10 and get upto{" "}
        <span className="font-semibold">30% off</span>
      </h2>
      <button
        onClick={handleBannerClose}
        className="absolute right-2 md:right-10 top-3 text-lg"
      >
        <XCircleIcon />
      </button>
    </div>
  );
}
