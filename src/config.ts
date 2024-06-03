import { Pathnames } from 'next-intl/navigation';

export const locales = ['en', 'vi'] as const;

export const pathnames = {
  '/': {
    en: '/',
    vi: '/',
  },
  '/services': {
    en: '/services',
    vi: '/services',
  },
  '/services/[slug]': {
    en: '/services/[slug]',
    vi: '/services/[slug]',
  },
  '/news': {
    en: '/news',
    vi: '/news',
  },
  '/news/[slug]': {
    en: '/news/[slug]',
    vi: '/news/[slug]',
  },
  '/projects': {
    en: '/projects',
    vi: '/projects',
  },
  '/career': {
    en: '/career',
    vi: '/career',
  },
  '/reset-password': {
    en: '/reset-password',
    vi: '/reset-password',
  },
  '/about-us': {
    en: '/about-us',
    vi: '/about-us',
  },
  '/about-us/store-location': {
    en: '/about-us/store-location',
    vi: '/about-us/store-location',
  },
  '/about-us/[slug]': {
    en: '/about-us/[slug]',
    vi: '/about-us/[slug]',
  },
  '/search': {
    en: '/search',
    vi: '/search',
  },
  '/faqs': {
    en: '/faqs',
    vi: '/faqs',
  },
  '/profile': {
    en: '/profile',
    vi: '/profile',
  },

  '/checkout/cart': {
    en: '/checkout/cart',
    vi: '/checkout/cart',
  },
  '/checkout/payment': {
    en: '/checkout/payment',
    vi: '/checkout/payment',
  },
  '/catalogs/detail/[slug]': {
    en: '/catalogs/detail/[slug]',
    vi: '/catalogs/detail/[slug]',
  },
  '/catalogs': {
    en: '/catalogs',
    vi: '/catalogs',
  },
  '/[detail-product-slug]': {
    en: '/[detail-product-slug]',
    vi: '/[detail-product-slug]',
  },
} satisfies Pathnames<typeof locales>;

// Use the default: `always`undefined
export const localePrefix = 'always';

export type AppPathnames = keyof typeof pathnames;
