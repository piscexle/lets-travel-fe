import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Nguyễn Võ Hoàng Long',
  description: 'Nguyễn Võ Hoàng Long',
};

const Layout = ({ children }: { children: React.ReactNode }) => <div>{children}</div>;

export default Layout;
     