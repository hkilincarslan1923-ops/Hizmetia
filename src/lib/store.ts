import type { Category, SiteSettings } from "@/lib/types";

const CATEGORIES_KEY = "hizmetia_categories";
const SETTINGS_KEY = "hizmetia_settings";

const defaultCategories: Category[] = [
  {
    id: "apartman-temizligi",
    title: "Apartman Temizliği",
    description: "Apartman giriş, merdiven ve ortak alan temizliği hizmetleri. Profesyonel ekibimizle binanızı tertemiz tutuyoruz.",
    icon: "building",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    count: "3.456",
    isActive: true,
    featured: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: "ev-temizligi",
    title: "Ev Temizliği",
    description: "Evinizin her köşesi için detaylı temizlik hizmeti. Mutfak, banyo, salon ve yatak odası temizliği.",
    icon: "sparkles",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop",
    count: "8.912",
    isActive: true,
    featured: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: "evden-eve-nakliyat",
    title: "Evden Eve Nakliyat",
    description: "Güvenli ve hızlı evden eve nakliyat hizmeti. Eşyalarınız sigortalı ve özenle taşınır.",
    icon: "truck",
    image: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=400&h=300&fit=crop",
    count: "4.567",
    isActive: true,
    featured: true,
    createdAt: new Date().toISOString(),
  },
];

const defaultSettings: SiteSettings = {
  logo: "",
  siteName: "Hizmetia",
  phone: "0532 123 45 67",
  email: "info@hizmetia.com.tr",
  address: "İstanbul, Türkiye",
  whatsapp: "905321234567",
};

export function getCategories(): Category[] {
  if (typeof window === "undefined") return defaultCategories;
  const stored = localStorage.getItem(CATEGORIES_KEY);
  if (!stored) {
    localStorage.setItem(CATEGORIES_KEY, JSON.stringify(defaultCategories));
    return defaultCategories;
  }
  return JSON.parse(stored);
}

export function saveCategories(categories: Category[]): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(CATEGORIES_KEY, JSON.stringify(categories));
}

export function addCategory(category: Omit<Category, "id" | "createdAt">): Category {
  const categories = getCategories();
  const newCategory: Category = {
    ...category,
    id: Math.random().toString(36).substring(2, 9),
    createdAt: new Date().toISOString(),
  };
  categories.push(newCategory);
  saveCategories(categories);
  return newCategory;
}

export function updateCategory(id: string, updates: Partial<Category>): void {
  const categories = getCategories();
  const index = categories.findIndex((c) => c.id === id);
  if (index !== -1) {
    categories[index] = { ...categories[index], ...updates };
    saveCategories(categories);
  }
}

export function deleteCategory(id: string): void {
  const categories = getCategories().filter((c) => c.id !== id);
  saveCategories(categories);
}

export function getSettings(): SiteSettings {
  if (typeof window === "undefined") return defaultSettings;
  const stored = localStorage.getItem(SETTINGS_KEY);
  if (!stored) {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(defaultSettings));
    return defaultSettings;
  }
  return JSON.parse(stored);
}

export function saveSettings(settings: SiteSettings): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}
