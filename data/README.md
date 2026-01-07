# Hizmetia Veritabanı Kurulumu

Bu proje **Supabase** (PostgreSQL) veritabanı kullanmaktadır.
Supabase yapılandırılmadığında otomatik olarak localStorage'a düşer.

---

## Supabase Kurulumu

### 1. Supabase Hesabı Oluşturun

1. [supabase.com](https://supabase.com) adresine gidin
2. Ücretsiz hesap oluşturun
3. "New Project" ile yeni proje oluşturun
4. Proje adı ve şifre belirleyin

### 2. Veritabanı Tablolarını Oluşturun

1. Supabase Dashboard'a gidin
2. Sol menüden **SQL Editor** seçin
3. `supabase-schema.sql` dosyasındaki SQL kodunu kopyalayın
4. SQL Editor'e yapıştırın ve **Run** butonuna basın

### 3. API Anahtarlarını Alın

1. Sol menüden **Project Settings** > **API** seçin
2. Aşağıdaki bilgileri kopyalayın:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### 4. Environment Değişkenlerini Ayarlayın

`.env.local` dosyasını düzenleyin:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### 5. Netlify'da Environment Değişkenleri

Deploy için Netlify Dashboard'da:
1. **Site settings** > **Environment variables**
2. Yukarıdaki değişkenleri ekleyin

---

## Dosyalar

| Dosya | Açıklama |
|-------|----------|
| `supabase-schema.sql` | Veritabanı şeması ve varsayılan veriler |
| `categories.json` | Kategori verileri (referans) |
| `settings.json` | Site ayarları (referans) |
| `admin.json` | Admin bilgileri (referans) |

---

## Veritabanı Tabloları

### categories
| Sütun | Tip | Açıklama |
|-------|-----|----------|
| id | UUID | Benzersiz ID |
| title | VARCHAR | Kategori başlığı |
| description | TEXT | Açıklama |
| icon | VARCHAR | İkon adı |
| image | TEXT | Görsel URL |
| count | VARCHAR | Profesyonel sayısı |
| is_active | BOOLEAN | Aktif durumu |
| featured | BOOLEAN | Öne çıkan durumu |
| created_at | TIMESTAMP | Oluşturulma tarihi |

### settings
| Sütun | Tip | Açıklama |
|-------|-----|----------|
| id | SERIAL | ID |
| logo | TEXT | Logo URL |
| site_name | VARCHAR | Site adı |
| phone | VARCHAR | Telefon |
| email | VARCHAR | E-posta |
| address | TEXT | Adres |
| whatsapp | VARCHAR | WhatsApp numarası |

### admins
| Sütun | Tip | Açıklama |
|-------|-----|----------|
| id | SERIAL | ID |
| username | VARCHAR | Kullanıcı adı |
| password_hash | VARCHAR | Şifre |

---

## Admin Giriş Bilgileri

| Alan | Değer |
|------|-------|
| **URL** | `/admin/giris` |
| **Kullanıcı Adı** | `admin` |
| **Şifre** | `Hizmetia2024!` |

---

## Notlar

- Supabase yapılandırılmadığında site localStorage kullanır
- Üretim ortamında şifreleri hash'leyin (bcrypt vb.)
- Row Level Security (RLS) aktif, gerektiğinde politikaları düzenleyin
