import { menu } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import MenuTopicCard from "@/components/menu/menu-topic-card";

export default function MenuTopics() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {menu.map((item) => (
        <MenuTopicCard
          key={item.id}
          slug={item.slug}
          title={item.title}
          desc={item.desc}
          color={item.color}
          img={item.img}
        />
      ))}
    </div>
  );
}
