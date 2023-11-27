import Countdown from "react-countdown";

import Image from "next/image";
import offerProduct from "@/public/offerProduct.png";
import { useEffect, useState } from "react";
import SectionHeader from "@/components/section-header";
import { Button } from "../ui/button";

export default function Offer() {
  /* 
  For Error: Text content does not match server-rendered HTML.
  */

  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    return null;
  }

  const targetDate = new Date("2023-09-12");

  return (
    <>
      <SectionHeader>Don't miss our latest offer</SectionHeader>
      <div className="py-6 w-full bg-black rounded-2xl">
        <div className="flex flex-col md:flex-row gap-16 items-center md:justify-between py-5 px-10">
          <div className="text-background flex-1 flex flex-col gap-4 items-start max-w-md">
            <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl max-w-sm">
              delicious burger & french fry
            </h2>
            <p className="text-muted max-w-md mx-auto text-sm md:text-base">
              A tropical twist on burger, featuring succulent ham and melted
              mozzarella cheese.
            </p>
            <div className="text-4xl font-bold text-yellow-400">
              <Countdown date={targetDate} />
            </div>
            <Button>Hurry Up! Order Now</Button>
          </div>
          <Image src={offerProduct} alt="offer-prod" className="flex-1 h-60" />
        </div>
      </div>
    </>
  );
}
