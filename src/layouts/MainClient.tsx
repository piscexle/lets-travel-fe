import React, { type ReactNode, useEffect } from 'react';
import FooterClient from '@/components/Footer/Footer';
import HeaderClient from '@/components/HeaderClient/HeaderClient';
import { FloatButton } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';
import { usePathname } from 'next/navigation';
import './style.scss';

type IMainProps = {
  children: ReactNode;
};

const MainClient = ({ children }: IMainProps) => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <HeaderClient />
      <main>{children}</main>
      <FooterClient />
      <FloatButton.BackTop type="primary" icon={<ArrowUpOutlined />} />
    </>
  );
};

export { MainClient };
