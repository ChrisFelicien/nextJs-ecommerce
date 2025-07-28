"use client";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { SignOutButton } from "@clerk/nextjs";

const SignOutLink = () => {
  const handleLogout = () => {
    toast("Logout successful");
  };
  return (
    <SignOutButton redirectUrl='/'>
      <button className='w-full text-left' onClick={handleLogout}>
        Logout
      </button>
    </SignOutButton>
  );
};

export default SignOutLink;
