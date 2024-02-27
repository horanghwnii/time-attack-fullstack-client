import { ComponentProps } from 'react';

interface ButtonProps extends ComponentProps<'button'> {
  label: string;
}

function Button({ label, ...props }: ButtonProps) {
  return (
    <button
      className='w-full border py-2 rounded bg-black text-white mt-2'
      {...props}
    >
      {label}
    </button>
  );
}

export default Button;
