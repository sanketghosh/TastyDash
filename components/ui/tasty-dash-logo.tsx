import { PizzaIcon } from "lucide-react";
import Link from "next/link";

type TastyDashLogoPropsType = {
  href: string;
  classNames?: string;
};

export default function TastyDashLogo({
  href,
  classNames,
}: TastyDashLogoPropsType) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center space-x-1.5 select-none ${classNames}`}
    >
      <span>
        <PizzaIcon size={27} />
      </span>
      <span className="font-extrabold hidden lg:block">TastyDash</span>
    </Link>
  );
}
