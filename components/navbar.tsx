"use client";

import Link from "next/link";
import { Menu, ShoppingCartIcon } from "lucide-react";

/* COMPONENTS */
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const menuItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Menu",
    href: "/menu",
  },
  {
    name: "Orders",
    href: "/orders",
  },
];

export default function Navbar() {
  return (
    <nav className="bg-green-900">
      <div className="flex items-center justify-between max-w-[90rem] mx-auto py-3 px-4 md:px-6 lg:px-9">
        <Sheet>
          <SheetTrigger className="text-lg text-background">
            <Menu />
          </SheetTrigger>
          <SheetContent side={"left"}></SheetContent>
        </Sheet>
        <div className="flex items-center gap-5 lg:gap-7 text-background text-sm">
          {menuItems.map((item, idx) => (
            <div key={idx}>
              <Link href={item.href}>{item.name}</Link>
            </div>
          ))}
        </div>

        <div>
          <Link href={"/cart"} className="relative p-0">
            <span className="text-background">
              <ShoppingCartIcon size={27} />
            </span>
            <span className="p-1 rounded-full bg-primary text-foreground font-semibold text-xs absolute -top-2 -right-2">
              20
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
