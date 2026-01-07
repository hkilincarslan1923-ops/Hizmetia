"use client";

import { supabase } from './supabase';
import type { Category, SiteSettings } from './types';

// Check if Supabase is configured
const isSupabaseConfigured = () => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  return url && url.length > 0 && key && key.length > 0;
};

// LocalStorage keys (fallback)
const CATEGORIES_KEY = "hizmetia_categories";
const SETTINGS_KEY = "hizmetia_settings";

// Default data
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

// ============ CATEGORIES ============

export async function fetchCategories(): Promise<Category[]> {
  if (!isSupabaseConfigured()) {
    return getLocalCategories();
  }

  try {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    return (data || []).map(row => ({
      id: row.id,
      title: row.title,
      description: row.description,
      icon: row.icon,
      image: row.image,
      count: row.count,
      isActive: row.is_active,
      featured: row.featured,
      createdAt: row.created_at,
    }));
  } catch (error) {
    console.error('Supabase error, falling back to localStorage:', error);
    return getLocalCategories();
  }
}

export async function createCategory(category: Omit<Category, 'id' | 'createdAt'>): Promise<Category | null> {
  if (!isSupabaseConfigured()) {
    return addLocalCategory(category);
  }

  try {
    const { data, error } = await supabase
      .from('categories')
      .insert({
        title: category.title,
        description: category.description,
        icon: category.icon,
        image: category.image,
        count: category.count,
        is_active: category.isActive,
        featured: category.featured,
      })
      .select()
      .single();

    if (error) throw error;

    return {
      id: data.id,
      title: data.title,
      description: data.description,
      icon: data.icon,
      image: data.image,
      count: data.count,
      isActive: data.is_active,
      featured: data.featured,
      createdAt: data.created_at,
    };
  } catch (error) {
    console.error('Supabase error:', error);
    return addLocalCategory(category);
  }
}

export async function editCategory(id: string, updates: Partial<Category>): Promise<boolean> {
  if (!isSupabaseConfigured()) {
    updateLocalCategory(id, updates);
    return true;
  }

  try {
    const dbUpdates: Record<string, unknown> = {};
    if (updates.title !== undefined) dbUpdates.title = updates.title;
    if (updates.description !== undefined) dbUpdates.description = updates.description;
    if (updates.icon !== undefined) dbUpdates.icon = updates.icon;
    if (updates.image !== undefined) dbUpdates.image = updates.image;
    if (updates.count !== undefined) dbUpdates.count = updates.count;
    if (updates.isActive !== undefined) dbUpdates.is_active = updates.isActive;
    if (updates.featured !== undefined) dbUpdates.featured = updates.featured;

    const { error } = await supabase
      .from('categories')
      .update(dbUpdates)
      .eq('id', id);

    if (error) throw error;
    return true;
  } catch (error) {
    console.error('Supabase error:', error);
    updateLocalCategory(id, updates);
    return true;
  }
}

export async function removeCategory(id: string): Promise<boolean> {
  if (!isSupabaseConfigured()) {
    deleteLocalCategory(id);
    return true;
  }

  try {
    const { error } = await supabase
      .from('categories')
      .delete()
      .eq('id', id);

    if (error) throw error;
    return true;
  } catch (error) {
    console.error('Supabase error:', error);
    deleteLocalCategory(id);
    return true;
  }
}

// ============ SETTINGS ============

export async function fetchSettings(): Promise<SiteSettings> {
  if (!isSupabaseConfigured()) {
    return getLocalSettings();
  }

  try {
    const { data, error } = await supabase
      .from('settings')
      .select('*')
      .limit(1)
      .single();

    if (error) throw error;

    return {
      logo: data.logo || '',
      siteName: data.site_name,
      phone: data.phone,
      email: data.email,
      address: data.address,
      whatsapp: data.whatsapp,
    };
  } catch (error) {
    console.error('Supabase error, falling back to localStorage:', error);
    return getLocalSettings();
  }
}

export async function updateSettings(settings: Partial<SiteSettings>): Promise<boolean> {
  if (!isSupabaseConfigured()) {
    saveLocalSettings({ ...getLocalSettings(), ...settings });
    return true;
  }

  try {
    const dbUpdates: Record<string, unknown> = {};
    if (settings.logo !== undefined) dbUpdates.logo = settings.logo;
    if (settings.siteName !== undefined) dbUpdates.site_name = settings.siteName;
    if (settings.phone !== undefined) dbUpdates.phone = settings.phone;
    if (settings.email !== undefined) dbUpdates.email = settings.email;
    if (settings.address !== undefined) dbUpdates.address = settings.address;
    if (settings.whatsapp !== undefined) dbUpdates.whatsapp = settings.whatsapp;
    dbUpdates.updated_at = new Date().toISOString();

    const { error } = await supabase
      .from('settings')
      .update(dbUpdates)
      .eq('id', 1);

    if (error) throw error;
    return true;
  } catch (error) {
    console.error('Supabase error:', error);
    saveLocalSettings({ ...getLocalSettings(), ...settings });
    return true;
  }
}

// ============ AUTH ============

export async function verifyAdmin(username: string, password: string): Promise<boolean> {
  if (!isSupabaseConfigured()) {
    // Fallback to hardcoded credentials
    return username === 'admin' && password === 'Hizmetia2024!';
  }

  try {
    const { data, error } = await supabase
      .from('admins')
      .select('*')
      .eq('username', username)
      .eq('password_hash', password) // In production, use proper password hashing!
      .single();

    if (error || !data) return false;
    return true;
  } catch (error) {
    console.error('Supabase error:', error);
    return username === 'admin' && password === 'Hizmetia2024!';
  }
}

// ============ LOCAL STORAGE FALLBACK ============

function getLocalCategories(): Category[] {
  if (typeof window === "undefined") return defaultCategories;
  const stored = localStorage.getItem(CATEGORIES_KEY);
  if (!stored) {
    localStorage.setItem(CATEGORIES_KEY, JSON.stringify(defaultCategories));
    return defaultCategories;
  }
  return JSON.parse(stored);
}

function saveLocalCategories(categories: Category[]): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(CATEGORIES_KEY, JSON.stringify(categories));
}

function addLocalCategory(category: Omit<Category, "id" | "createdAt">): Category {
  const categories = getLocalCategories();
  const newCategory: Category = {
    ...category,
    id: Math.random().toString(36).substring(2, 9),
    createdAt: new Date().toISOString(),
  };
  categories.unshift(newCategory);
  saveLocalCategories(categories);
  return newCategory;
}

function updateLocalCategory(id: string, updates: Partial<Category>): void {
  const categories = getLocalCategories();
  const index = categories.findIndex((c) => c.id === id);
  if (index !== -1) {
    categories[index] = { ...categories[index], ...updates };
    saveLocalCategories(categories);
  }
}

function deleteLocalCategory(id: string): void {
  const categories = getLocalCategories().filter((c) => c.id !== id);
  saveLocalCategories(categories);
}

function getLocalSettings(): SiteSettings {
  if (typeof window === "undefined") return defaultSettings;
  const stored = localStorage.getItem(SETTINGS_KEY);
  if (!stored) {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(defaultSettings));
    return defaultSettings;
  }
  return JSON.parse(stored);
}

function saveLocalSettings(settings: SiteSettings): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}
