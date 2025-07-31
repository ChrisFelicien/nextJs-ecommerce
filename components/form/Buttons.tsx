"use client";

import { Loader2Icon } from "lucide-react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
// import { FaRegHeart, FaHeart } from "react-icons/fa";
// import { LuTrash, LuPencil } from "react-icons/lu";
// import { SingInButton } from "@clerk/nextjs";

type BtnSize = "lg" | "sm" | "default";

type SubmitButtonProps = {
  className?: string;
  text?: string;
  size?: BtnSize;
};

export const SubmitButtons = ({
  className = "",
  text = "submit",
  size = "lg"
}: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button
      type='submit'
      disabled={pending}
      className={cn("capitalize", className)}
      size={size}
    >
      {pending ? (
        <>
          <Loader2Icon className='mr-2 h-4 animate-spin' />
          Please wait...
        </>
      ) : (
        text
      )}
    </Button>
  );
};

export default SubmitButtons;
