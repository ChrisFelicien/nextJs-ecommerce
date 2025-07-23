import Link from "next/link";
import { Button } from "../ui/button";
import { LuShoppingCart } from "react-icons/lu";

const CartButton = () => {
  const numItemsInCart = 5;
  return (
    <Button
      size={"icon"}
      variant={"outline"}
      asChild
      className='flex justify-center items-center relative'
    >
      <Link href={"/cart"}>
        <LuShoppingCart />
        <span className='absolute -right-3 -top-3 text-xs bg-primary text-secondary rounded-full h-6 w-6 flex items-center justify-center'>
          {numItemsInCart}
        </span>
      </Link>
    </Button>
  );
};

export default CartButton;
