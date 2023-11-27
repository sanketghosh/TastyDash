"use client";

import {
  FacebookIcon,
  InstagramIcon,
  PizzaIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";

const footer_links = [
  {
    id: 1,
    text: "Privacy Policy",
  },
  {
    id: 2,
    text: "Terms of Service",
  },
  {
    id: 3,
    text: "Contact Us",
  },
];

const footer_icons = [<FacebookIcon />, <TwitterIcon />, <InstagramIcon />];

export default function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 right-0 overflow-hidden py-5 bg-primary border-t-2">
      <div className="container relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-8 flex flex-wrap items-center justify-between">
          <div className="w-auto p-8">
            <Link href={"/home"}>
              <div className="inline-flex items-center text-foreground">
                <PizzaIcon />
                <span className="ml-1 font-bold">TastyDash</span>
              </div>
            </Link>
          </div>
          <div className="w-auto p-8">
            <ul className="-m-5 flex flex-wrap items-center">
              {footer_links.map((link) => (
                <li className="p-5" key={link.id}>
                  <a
                    className="text-xs font-medium text-foreground transition lg:text-sm"
                    href="#"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-auto p-8">
            <div className="-m-1.5 flex flex-wrap">
              {footer_icons.map((item, id) => (
                <div className="w-auto p-1.5" key={id}>
                  <div className="flex items-center justify-center text-2xl transition hover:text-zinc-800">
                    <a href="#">{item}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
