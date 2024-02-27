interface HeadingProps {
  label: string;
}

function Heading({ label }: HeadingProps) {
  return <div className='font-bold text-2xl mb-5'>{label}</div>;
}

export default Heading;
