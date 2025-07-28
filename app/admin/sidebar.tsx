"use client";

import { adminLinks } from "@/utils/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside>
      {adminLinks.map((link, i) => {
        const isActivePage = pathname === link.href;
        const variant = isActivePage ? "default" : "ghost";

        return (
          <Button
            key={i}
            variant={variant}
            asChild
            className='w-full mb-2 capitalize font-normal justify-start'
          >
            <Link href={link.href}>{link.label}</Link>
          </Button>
        );
      })}
    </aside>
  );
};

export default Sidebar;
