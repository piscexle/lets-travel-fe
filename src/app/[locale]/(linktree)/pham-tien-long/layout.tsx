import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Phạm Tiến Long',
  description: 'Phạm Tiến Long',
};

const Layout = ({ children }: { children: React.ReactNode }) => <div>{children}</div>;

export default Layout;
