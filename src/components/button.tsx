import { ReactNode } from 'react';

interface ButtonHeaderProps {
  children: ReactNode;
  className?: string;
  prepend?: ReactNode;
  append?: ReactNode;
  type?: 'default' | 'flat';
  onClick?: () => void;
}

const Button = ({
  children,
  className,
  append,
  prepend,
  type = 'default',
  onClick
}: ButtonHeaderProps) => {
  let cx = '';

  if (type === 'flat') {
    cx =
      'text-light-gray bg-transparent hover:bg-medium-gray hover:text-light-gray';
  } else {
    cx = 'text-dark-gray bg-light-transparent hover:bg-light-medium';
  }

  return (
    <button
      className={`${cx} ${className} flex flex items-center justify-center text-lg text-center text-lg cursor-pointer px-[16px] pt-[9px] pb-[7px] rounded`}
      onClick={onClick}
    >
      {prepend}
      <div className="text-center leading-18px">{children}</div>
      {append}
    </button>
  );
};

export default Button;
