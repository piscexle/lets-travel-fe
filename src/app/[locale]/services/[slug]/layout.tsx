import { Metadata } from 'next';
import { unstable_setRequestLocale } from 'next-intl/server';
import React from 'react';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Services',
};

const Layout = ({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) => {
  unstable_setRequestLocale(locale);
  return children;
};

export default Layout;
