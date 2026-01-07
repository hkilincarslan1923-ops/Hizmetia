export interface Category {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  count: string;
  isActive: boolean;
  featured: boolean;
  createdAt: string;
}

export interface SiteSettings {
  logo: string;
  siteName: string;
  phone: string;
  email: string;
  address: string;
  whatsapp: string;
}
