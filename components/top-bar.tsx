"use client";

import Link from "next/link";
import useAuthModal from "@/hooks/useAuthModal";

/* COMPONENTS */
import TastyDashLogo from "@/components/ui/tasty-dash-logo";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";

export default function Topbar() {
  const authModal = useAuthModal();

  return (
    <header className="relative w-full bg-primary">
      <div className="max-w-[90rem] mx-auto py-4 px-4 md:px-6 lg:px-9 flex items-center justify-between gap-4">
        <TastyDashLogo
          href="/"
          classNames="text-3xl md:text-2xl lg:text-xl text-foreground"
        />

        <div className="w-full md:max-w-xl lg:max-w-2xl  overflow-hidden">
          <Input
            placeholder="Search for your favorite pizza, burger or sushi..."
            className="bg-background"
          />
        </div>

        <Avatar className="cursor-pointer" onClick={authModal.onOpen}>
          <AvatarFallback className="text-sm">SG</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
