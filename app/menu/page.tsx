import PageWrapper from "@/components/PageWrapper";
import MenuTopics from "@/components/menu/menu-topics";
import React from "react";

export default function Menu() {
  return (
    <PageWrapper className="pt-4 md:pt-10">
      <MenuTopics />
    </PageWrapper>
  );
}
