import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Trịnh Thái Vương',
  description: 'Trịnh Thái Vương',
};

const Layout = ({ children }: { children: React.ReactNode }) => <div>{children}</div>;

export default Layout;
