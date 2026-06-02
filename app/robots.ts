import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      disallow: '/', // 🚫 Mencegah Google/bot mengindeks website ini (Shadow Web)
    },
  };
}
