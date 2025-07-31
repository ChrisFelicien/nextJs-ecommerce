import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface TextAreaInputProps {
  name: string;
  label?: string;
  defaultValue?: string;
}

const TextAreaInput = ({ name, label, defaultValue }: TextAreaInputProps) => {
  return (
    <div className='mb-2'>
      <Label htmlFor={name} className='capitalize'>
        {label || name}
      </Label>
      <Textarea
        id={name}
        name={name}
        defaultValue={defaultValue}
        rows={5}
        className=' leading-loose resize-none'
      />
    </div>
  );
};

export default TextAreaInput;
