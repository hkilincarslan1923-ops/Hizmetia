import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface DbCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  count: string;
  is_active: boolean;
  featured: boolean;
  created_at: string;
}

export interface DbSettings {
  id: number;
  logo: string;
  site_name: string;
  phone: string;
  email: string;
  address: string;
  whatsapp: string;
  updated_at: string;
}

export interface DbAdmin {
  id: number;
  username: string;
  password_hash: string;
  created_at: string;
}
