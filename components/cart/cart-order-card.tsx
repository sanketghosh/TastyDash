import Image, { StaticImageData } from "next/image";
import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";

type CartOrderCardPropsType = {
  title: string;
  numberOfItems: number;
  size: string;
  price: number;
  image: StaticImageData;
};

export default function CartOrderCard({
  title,
  numberOfItems,
  size,
  price,
  image,
}: CartOrderCardPropsType) {
  return (
    <div className="p-4 rounded-xl flex items-center gap-4 relative border-primary border-2 w-full md:w-[45%] lg:w-[30%]">
      <Image src={image} alt={title} className="h-28 w-28" />
      <div className="text-sm font-medium">
        <h1>
          {title} x {numberOfItems}
        </h1>
        <p>{size}</p>
        <p>${price}</p>
      </div>
      <Button
        variant={"destructive"}
        className="absolute text-xl rounded-full right-1 top-1 hover:scale-105 p-1"
      >
        <Trash2 />
      </Button>
    </div>
  );
}
