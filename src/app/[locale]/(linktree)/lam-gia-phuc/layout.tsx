import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Lâm Gia Phúc',
  description: 'Lâm Gia Phúc',
};

const Layout = ({ children }: { children: React.ReactNode }) => <div>{children}</div>;

export default Layout;
