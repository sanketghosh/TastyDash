"use client";

import PageWrapper from "@/components/PageWrapper";
import Featured from "@/components/home/featured";
import Hero from "@/components/home/hero";
import Offer from "@/components/home/offer";

export default function Home() {
  return (
    <PageWrapper>
      <Hero />
      <Featured />
      <Offer />
    </PageWrapper>
  );
}
