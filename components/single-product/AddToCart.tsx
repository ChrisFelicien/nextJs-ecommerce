import { Button } from "../ui/button";

const AddToCart = ({ productId }: { productId: string }) => {
  console.log(productId);
  return (
    <Button className='capitalize text-secondary bg-primary mt-8' size={"lg"}>
      Add to card
    </Button>
  );
};

export default AddToCart;
