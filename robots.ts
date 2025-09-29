import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/auth/error',
          '/auth/verify-request',
          '/dashboard/private/',
          '/user/private/'
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/auth/error',
          '/auth/verify-request'
        ],
      }
    ],
    sitemap: [
      'https://employnation.in/sitemap.xml',
      'https://employnation.co.in/sitemap.xml'
    ],
    host: 'https://employnation.in'
  }
}