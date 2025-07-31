import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const name: string = "price";

interface PriceInputProps {
  defaultValue?: number;
}

const PriceInput = ({ defaultValue }: PriceInputProps) => {
  return (
    <div className='mb-2'>
      <Label htmlFor={name} className='capitalize'>
        Price (USD)
      </Label>
      <Input
        name={name}
        id={name}
        min={0}
        defaultValue={defaultValue || 100}
        type='number'
        required
      />
    </div>
  );
};

export default PriceInput;
