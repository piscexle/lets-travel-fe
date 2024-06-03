import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Lê Hữu Phú',
  description: 'Lê Hữu Phú',
};

const Layout = ({ children }: { children: React.ReactNode }) => <div>{children}</div>;

export default Layout;
