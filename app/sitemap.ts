import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.example.com';
  
  // Project IDs
  const projectIds = ['1', '2', '3', '4', '5', '6', '7'];
  
  // German routes
  const deRoutes = [
    { url: `${baseUrl}/`, priority: 1.0 },
    { url: `${baseUrl}/leistungen`, priority: 0.8 },
    { url: `${baseUrl}/referenzen`, priority: 0.8 },
    { url: `${baseUrl}/uber-uns`, priority: 0.7 },
    { url: `${baseUrl}/kontakt`, priority: 0.7 },
    { url: `${baseUrl}/impressum`, priority: 0.7 },
    { url: `${baseUrl}/datenschutz`, priority: 0.7 },
    ...projectIds.map(id => ({
      url: `${baseUrl}/projekt/${id}`,
      priority: 0.6,
    })),
  ];
  
  // Turkish routes
  const trRoutes = [
    { url: `${baseUrl}/hizmetler`, priority: 0.8 },
    { url: `${baseUrl}/referanslar`, priority: 0.8 },
    { url: `${baseUrl}/hakkimizda`, priority: 0.7 },
    { url: `${baseUrl}/iletisim`, priority: 0.7 },
    { url: `${baseUrl}/kunye`, priority: 0.7 },
    { url: `${baseUrl}/gizlilik-politikasi`, priority: 0.7 },
    ...projectIds.map(id => ({
      url: `${baseUrl}/proje/${id}`,
      priority: 0.6,
    })),
  ];
  
  const allRoutes = [...deRoutes, ...trRoutes];
  
  return allRoutes.map(route => ({
    url: route.url,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route.priority,
    alternates: {
      languages: {
        de: route.url.includes('/projekt/') || route.url.includes('/leistungen') || route.url.includes('/referenzen') || route.url.includes('/uber-uns') || route.url.includes('/kontakt') || route.url.includes('/impressum') || route.url.includes('/datenschutz') || route.url === `${baseUrl}/`
          ? route.url
          : route.url.replace('/proje/', '/projekt/').replace('/hizmetler', '/leistungen').replace('/referanslar', '/referenzen').replace('/hakkimizda', '/uber-uns').replace('/iletisim', '/kontakt').replace('/kunye', '/impressum').replace('/gizlilik-politikasi', '/datenschutz'),
        tr: route.url.includes('/proje/') || route.url.includes('/hizmetler') || route.url.includes('/referanslar') || route.url.includes('/hakkimizda') || route.url.includes('/iletisim') || route.url.includes('/kunye') || route.url.includes('/gizlilik-politikasi')
          ? route.url
          : route.url.replace('/projekt/', '/proje/').replace('/leistungen', '/hizmetler').replace('/referenzen', '/referanslar').replace('/uber-uns', '/hakkimizda').replace('/kontakt', '/iletisim').replace('/impressum', '/kunye').replace('/datenschutz', '/gizlilik-politikasi'),
      },
    },
  }));
}
