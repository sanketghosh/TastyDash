"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { PlusCircleIcon } from "lucide-react";

/* components */
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type MenuItemCardPropsType = {
  title: string;
  img: string;
  price: number;
  id: string | number;
};

export default function MenuItemCard({
  title,
  img,
  price,
  id,
}: MenuItemCardPropsType) {
  return (
    <Card>
      <Link
        className="w-full h-full flex flex-col gap-2 items-center p-4 bg-orange-50 border-2 border-primary hover:border-primary hover:bg-orange-100 rounded-xl relative text-primary"
        href={`/product/${id}`}
      >
        <Image
          src={img}
          alt={title}
          width={150}
          height={150}
          className="mb-2 hover:rotate-180"
        />
        <h1 className="font-semibold text-sm">{title}</h1>
        <h2 className="text-lg font-bold text-foreground">${price}</h2>
        <Button
          className={`p-1.5 rounded-full text-background text-2xl hover:bg-opacity-90 font-medium absolute right-3 top-3 bg-primary`}
          value={"default"}
        >
          <PlusCircleIcon />
        </Button>
      </Link>
    </Card>
  );
}
