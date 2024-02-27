import { ComponentProps, useId } from 'react';

interface InputProps extends ComponentProps<'input'> {
  label: string;
}

function Input({ label, ...props }: InputProps) {
  const id = useId();
  return (
    <div className='flex flex-col w-full mb-6'>
      <label htmlFor={id}>{label}</label>
      <input
        className='border px-3 py-1 outline-none text-lg'
        id={id}
        {...props}
      />
    </div>
  );
}

export default Input;
