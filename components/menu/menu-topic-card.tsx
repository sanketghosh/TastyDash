import Link from "next/link";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

type MenuTopicCardPropsType = {
  slug: string;
  title: string;
  desc?: string;
  img: string;
  color: string;
};

export default function MenuTopicCard({
  slug,
  img,
  color,
  title,
  desc,
}: MenuTopicCardPropsType) {
  return (
    <Card className="p-0">
      <Link
        href={`/menu/${slug}`}
        className="flex bg-cover items-start md:items-center flex-col rounded-xl md:flex-row overflow-hidden h-72 w-full p-8 shadow-lg scale-95 hover:scale-100 brightness-95 hover:brightness-100 transition-all border-2 border-opacity-20"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div
          className={`${
            color === "white" ? "text-zinc-100" : "text-zinc-900"
          } w-1/2 flex-col flex gap-3`}
        >
          <h1 className="font-bold text-lg md:text-xl">{title}</h1>
          <p className="text-sm md:text-[15px]">{desc}</p>
          <Button className="bg-foreground">
            <Link
              href={`/menu/${slug}`}
              className="px-4 py-2.5 text-sm rounded-md text-center"
            >
              Explore Now
            </Link>
          </Button>
        </div>
      </Link>
    </Card>
  );
}
