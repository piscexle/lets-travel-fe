import React from 'react';
import 'suneditor/dist/css/suneditor.min.css';
import './globals.scss';
import StyledComponentsRegistry from '@/lib/AntdRegistry';
import { appConfig } from '@/config/appConfig';
import { ReduxProvider } from '@/store/provider';
import type { Metadata } from 'next';
import { Be_Vietnam_Pro } from 'next/font/google';
import { ConfigProvider, ThemeConfig } from 'antd';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import ToasterContextProvider from '@/components/Toaster/Toaster';
import Pwa from './Pwa';

const FontBeVietNamPro = Be_Vietnam_Pro({
  subsets: ['vietnamese'],
  display: 'swap',
  variable: '--font-be_vietnam',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const theme: ThemeConfig = {
  token: {
    colorPrimary: '#5aaf32',
    fontFamily: FontBeVietNamPro.style.fontFamily,
  },
  components: {
    Button: {
      colorPrimary: '#5aaf32',
      colorPrimaryHover: '#5aaf32',
      colorPrimaryActive: '#3C3F4B',
      colorLinkHover: '5aaf32',
      borderRadius: 20,
    },
    Input: {
      activeBorderColor: '#5aaf32',
      hoverBorderColor: '#5aaf32',
    },
    Tabs: {
      itemHoverColor: '#5aaf32',
      itemSelectedColor: '#5aaf32',
      itemActiveColor: '#5aaf32',
      inkBarColor: '#5aaf32',
    },
    Spin: {
      colorPrimary: '#5aaf32',
    },
    Table: {
      cellPaddingInline: 8,
    },
  },
  hashed: false,
};

export const metadata: Metadata = {
  title: {
    default: appConfig.siteName!,
    template: `%s | ${appConfig.siteName}`,
  },
  description: appConfig.description,
  keywords: appConfig.keywords,
  robots: {
    follow: true,
    index: true,
  },
  authors: [
    {
      url: appConfig.url,
      name: appConfig.title,
    },
  ],
  verification: {
    google: 'your-verification-id',
  },
  metadataBase: new URL(appConfig.url),
  openGraph: {
    images: `${appConfig.url}/favicon.ico`,
    type: 'article',
    title: appConfig.title,
    authors: appConfig.title,
    description: appConfig.description,
    locale: appConfig.locale,
    siteName: appConfig.siteName,
  },
  icons: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      sizes: '32x32',
      url: '/favicon.ico',
    },
  ],
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();

  unstable_setRequestLocale(locale);
  return (
    <html lang={locale}>
      <body className={FontBeVietNamPro.className}>
        <ReduxProvider>
          <NextIntlClientProvider messages={messages}>
            <ConfigProvider theme={theme}>
              <StyledComponentsRegistry>
                <ToasterContextProvider>{children}</ToasterContextProvider>
              </StyledComponentsRegistry>
            </ConfigProvider>
            <Pwa />
          </NextIntlClientProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
