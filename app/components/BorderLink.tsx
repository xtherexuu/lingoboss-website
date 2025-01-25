import type { ReactNode } from "react";
import { Link } from "react-router";

export default function BorderLink({
  to,
  children,
  className,
}: {
  to: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={
        className +
        " " +
        "border-[#aaefdf] border-[2px] text-xs 600:text-sm 800:text-base text-white px-[10px] py-[8px] 600:px-[15px] 600:py-[10px] rounded-lg hover:border-primary-green hover:text-primary-green transition-all duration-300"
      }
    >
      {children}
    </Link>
  );
}
