import { ReactNode } from 'react';
import LayoutFooter from './layout-footer';
import LayoutHeader from './layout-header';
import LayoutMain from './layout-main';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="dark:bg-black dark:text-white min-h-screen">
      <LayoutHeader />
      <LayoutMain>{children}</LayoutMain>
      <LayoutFooter />
    </div>
  );
};

export default Layout;
