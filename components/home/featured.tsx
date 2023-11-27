import { featuredProducts } from "@/data/data";
import Image from "next/image";
import SectionHeader from "@/components/section-header";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

export default function Featured() {
  return (
    <div className="py-6 px-2">
      <SectionHeader>Checkout Our Most Loved</SectionHeader>
      {/* wrapper */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* single card */}
        {featuredProducts.map((item, idx) => (
          <Card
            className="flex flex-col items-center justify-around min-h-[20rem] w-full border-2 border-primary transition-all hover:border-orange-600 bg-orange-50 hover:bg-orange-100 cursor-pointer rounded-xl px-4 py-4 gap-4"
            key={idx}
          >
            <Image
              width={96}
              height={96}
              src={item.img}
              alt={item.title}
              className="object-contain"
            />
            <h2 className="font-semibold text-center">{item.title}</h2>
            <h2 className="font-semibold text-center">${item.price}</h2>
            <p className="text-center text-xs">{item.desc}</p>
            <Button>Add To Cart</Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
