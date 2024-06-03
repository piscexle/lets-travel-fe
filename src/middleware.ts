import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';
import { pathnames, locales, localePrefix } from './config';

export default async function middleware(request: NextRequest) {
  const handleI18nRouting = createMiddleware({
    defaultLocale: 'en',
    locales,
    pathnames,
    localePrefix,
  });
  const response = handleI18nRouting(request);

  return response;
}

export const config = {
  matcher: ['/((?!api|_next|paypal|_vercel|.*\\..*).*)'],
};
