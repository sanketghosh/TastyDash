"use client";

import { singleProduct } from "@/data/data";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";

/* components */
import PageWrapper from "@/components/PageWrapper";
import { Button } from "@/components/ui/button";

export default function SingleProduct() {
  const [selectSize, setSelectSize] = useState<number>(2);
  const [quantity, setQuantity] = useState<number>(1);
  const [total, setTotal] = useState(singleProduct.price);

  const handleSelectSize = (index: number) => {
    setSelectSize(index);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };
  const increaseQuantity = () => {
    setQuantity((prev) => (prev < 9 ? prev + 1 : 9));
  };

  useEffect(() => {
    setTotal(
      quantity *
        (singleProduct.options
          ? singleProduct.price +
            singleProduct.options[selectSize].additionalPrice
          : singleProduct.price)
    );
  }, [quantity, selectSize, singleProduct.options, singleProduct.price]);

  return (
    <PageWrapper className="pt-4 md:pt-10 flex items-center justify-center">
      <div className="flex flex-col items-center lg:flex-row w-full lg:w-2/3 p-5 gap-5">
        <div className="p-2 flex-1 flex items-center justify-center">
          <Image
            src={singleProduct.img}
            alt={singleProduct.title}
            width={400}
            height={400}
            className="object-cover hover:rotate-180"
          />
        </div>
        <div className="flex flex-1 flex-col gap-3 mt-5 lg:mt-0">
          <h1 className="font-extrabold text-primary uppercase text-2xl">
            {singleProduct.title}
          </h1>
          <p className="text-sm">{singleProduct.desc}</p>
          <h2 className="text-xl font-bold">${total.toFixed(2)}</h2>
          <div className="flex items-center justify-between gap-2">
            {singleProduct.options?.map((item, idx) => (
              <Button
                className="w-full"
                variant={`${selectSize === idx ? "default" : "outline"}`}
                key={item.title}
                onClick={() => handleSelectSize(idx)}
              >
                {item.title}
              </Button>
            ))}
          </div>
          <div className="py-2.5 flex flex-row items-center gap-2">
            <div className="w-1/2 flex items-center gap-5 text-xl bg-zinc-100 border py-[5px] justify-center rounded-md border-primary">
              <button onClick={decreaseQuantity} className="text-primary">
                <ChevronLeftCircle />
              </button>
              <span className="font-semibold">0{quantity}</span>
              <button onClick={increaseQuantity} className="text-primary">
                <ChevronRightCircle />
              </button>
            </div>
            <Button
              className="w-1/2 bg-foreground py-[5px]"
              variant={"default"}
            >
              Add To Cart
            </Button>
          </div>
          <div>
            {quantity === 9 ? (
              <p className="font-medium text-xs text-red-600">
                *Cant add more than 9 at a time
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
