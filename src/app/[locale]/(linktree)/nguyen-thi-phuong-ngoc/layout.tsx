import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Nguyễn Thị Phương Ngọc',
  description: 'Nguyễn Thị Phương Ngọc',
};

const Layout = ({ children }: { children: React.ReactNode }) => <div>{children}</div>;

export default Layout;
