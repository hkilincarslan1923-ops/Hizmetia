-- Hizmetia Database Schema for Supabase
-- Run this SQL in your Supabase SQL Editor

-- Categories Table
CREATE TABLE IF NOT EXISTS categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  icon VARCHAR(50) DEFAULT 'sparkles',
  image TEXT,
  count VARCHAR(20) DEFAULT '0',
  is_active BOOLEAN DEFAULT true,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Site Settings Table
CREATE TABLE IF NOT EXISTS settings (
  id SERIAL PRIMARY KEY,
  logo TEXT,
  site_name VARCHAR(255) DEFAULT 'Hizmetia',
  phone VARCHAR(50),
  email VARCHAR(255),
  address TEXT,
  whatsapp VARCHAR(50),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Admin Users Table
CREATE TABLE IF NOT EXISTS admins (
  id SERIAL PRIMARY KEY,
  username VARCHAR(100) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default categories
INSERT INTO categories (title, description, icon, image, count, is_active, featured) VALUES
(
  'Apartman Temizliği',
  'Apartman giriş, merdiven ve ortak alan temizliği hizmetleri. Profesyonel ekibimizle binanızı tertemiz tutuyoruz.',
  'building',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
  '3.456',
  true,
  true
),
(
  'Ev Temizliği',
  'Evinizin her köşesi için detaylı temizlik hizmeti. Mutfak, banyo, salon ve yatak odası temizliği.',
  'sparkles',
  'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop',
  '8.912',
  true,
  true
),
(
  'Evden Eve Nakliyat',
  'Güvenli ve hızlı evden eve nakliyat hizmeti. Eşyalarınız sigortalı ve özenle taşınır.',
  'truck',
  'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=400&h=300&fit=crop',
  '4.567',
  true,
  true
);

-- Insert default settings
INSERT INTO settings (site_name, phone, email, address, whatsapp) VALUES
('Hizmetia', '0532 123 45 67', 'info@hizmetia.com.tr', 'İstanbul, Türkiye', '905321234567');

-- Insert default admin (password: Hizmetia2024!)
-- Note: In production, use proper password hashing
INSERT INTO admins (username, password_hash) VALUES
('admin', 'Hizmetia2024!');

-- Enable Row Level Security (RLS)
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE admins ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access to categories
CREATE POLICY "Allow public read access to categories" ON categories
  FOR SELECT USING (true);

-- Create policies for public read access to settings
CREATE POLICY "Allow public read access to settings" ON settings
  FOR SELECT USING (true);

-- Create policies for authenticated write access
CREATE POLICY "Allow authenticated insert to categories" ON categories
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow authenticated update to categories" ON categories
  FOR UPDATE USING (true);

CREATE POLICY "Allow authenticated delete from categories" ON categories
  FOR DELETE USING (true);

CREATE POLICY "Allow authenticated update to settings" ON settings
  FOR UPDATE USING (true);
