import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { links } from "@/utils/links";
import { Button } from "../ui/button";
import Link from "next/link";
import { LuAlignLeft } from "react-icons/lu";
import UserIcon from "./UserIcon";
import { auth } from "@clerk/nextjs/server";

import { SignedIn, SignedOut, SignUpButton, SignInButton } from "@clerk/nextjs";
import SignOutLink from "./SignOutLink";

const LinkDropDown = async () => {
  const { userId } = await auth();

  const isAdmin = userId === process.env.ADMIN_USER_ID;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"} className='flex gap-4 max-w=[100px]'>
          <LuAlignLeft className='w-6 h-6' />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-48' align='start' sideOffset={10}>
        <SignedOut>
          <DropdownMenuItem>
            <SignInButton mode='modal'>
              <button className='w-full text-left'>Login</button>
            </SignInButton>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SignUpButton mode='modal'>
              <button className='w-full text-left'>Create account</button>
            </SignUpButton>
          </DropdownMenuItem>
        </SignedOut>
        <SignedIn>
          {links.map((link) => {
            if (!isAdmin && link.label === "dashboard") return;
            return (
              <DropdownMenuItem key={link.href}>
                <Link href={link.href} className='capitalize w-full'>
                  {link.label}
                </Link>
              </DropdownMenuItem>
            );
          })}
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SignOutLink />
          </DropdownMenuItem>
        </SignedIn>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LinkDropDown;
