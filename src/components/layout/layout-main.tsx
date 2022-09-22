import { ReactNode } from 'react';

interface LayoutMainProps {
  children: ReactNode;
}

const LayoutMain = ({ children }: LayoutMainProps) => (
  <main className="p-5 w-full max-w-7xl mx-auto">{children}</main>
);

export default LayoutMain;
