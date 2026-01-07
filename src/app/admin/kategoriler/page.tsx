"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Plus, Pencil, Trash2, Building, Home, Truck, Sparkles, Droplets, Zap, TreePine, Shield, Camera, HardHat, Loader2 } from "lucide-react";
import { fetchCategories, createCategory, editCategory, removeCategory } from "@/lib/database";
import type { Category } from "@/lib/types";

const ICON_LIST = [
  { val: "building", lbl: "Bina", Icon: Building },
  { val: "home", lbl: "Ev", Icon: Home },
  { val: "truck", lbl: "Kamyon", Icon: Truck },
  { val: "sparkles", lbl: "Parıltı", Icon: Sparkles },
  { val: "droplets", lbl: "Su", Icon: Droplets },
  { val: "zap", lbl: "Elektrik", Icon: Zap },
  { val: "tree", lbl: "Ağaç", Icon: TreePine },
  { val: "shield", lbl: "Kalkan", Icon: Shield },
  { val: "camera", lbl: "Kamera", Icon: Camera },
  { val: "hardhat", lbl: "Baret", Icon: HardHat },
];

function renderIcon(iconValue: string) {
  const found = ICON_LIST.find((i) => i.val === iconValue);
  if (found) {
    const Ic = found.Icon;
    return <Ic className="w-5 h-5" />;
  }
  return <Sparkles className="w-5 h-5" />;
}

interface FormState {
  title: string;
  description: string;
  icon: string;
  image: string;
  count: string;
  isActive: boolean;
  featured: boolean;
}

const initialForm: FormState = {
  title: "",
  description: "",
  icon: "sparkles",
  image: "",
  count: "0",
  isActive: true,
  featured: false,
};

export default function KategorilerSayfasi() {
  const [catList, setCatList] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [editing, setEditing] = useState<Category | null>(null);
  const [toDelete, setToDelete] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>(initialForm);

  useEffect(() => {
    refreshList();
  }, []);

  async function refreshList() {
    setLoading(true);
    try {
      const data = await fetchCategories();
      setCatList(data);
    } catch (error) {
      console.error('Failed to fetch categories:', error);
    }
    setLoading(false);
  }

  function clearForm() {
    setForm(initialForm);
    setEditing(null);
  }

  function openAddEdit(cat?: Category) {
    if (cat) {
      setEditing(cat);
      setForm({
        title: cat.title,
        description: cat.description,
        icon: cat.icon,
        image: cat.image,
        count: cat.count,
        isActive: cat.isActive,
        featured: cat.featured,
      });
    } else {
      clearForm();
    }
    setDialogOpen(true);
  }

  function closeDialog() {
    setDialogOpen(false);
    clearForm();
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);

    try {
      if (editing) {
        await editCategory(editing.id, form);
      } else {
        await createCategory(form);
      }
      await refreshList();
      closeDialog();
    } catch (error) {
      console.error('Failed to save category:', error);
    }

    setSaving(false);
  }

  function askDelete(id: string) {
    setToDelete(id);
    setDeleteOpen(true);
  }

  async function doDelete() {
    if (toDelete) {
      setSaving(true);
      try {
        await removeCategory(toDelete);
        await refreshList();
      } catch (error) {
        console.error('Failed to delete category:', error);
      }
      setSaving(false);
    }
    setDeleteOpen(false);
    setToDelete(null);
  }

  async function toggleActive(id: string, val: boolean) {
    await editCategory(id, { isActive: val });
    await refreshList();
  }

  async function toggleFeatured(id: string, val: boolean) {
    await editCategory(id, { featured: val });
    await refreshList();
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-8 h-8 animate-spin text-[#402e47]" />
          <p className="text-gray-600">Kategoriler yükleniyor...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Kategoriler</h1>
          <p className="text-gray-600 mt-1">Hizmet kategorilerini yönetin</p>
        </div>
        <Button onClick={() => openAddEdit()} className="bg-[#402e47] hover:bg-[#5a4460]">
          <Plus className="w-4 h-4 mr-2" />
          Yeni Kategori Ekle
        </Button>
      </div>

      {catList.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-16">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
              <Plus className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Henüz kategori yok</h3>
            <p className="text-gray-500 text-center mb-6">İlk hizmet kategorinizi ekleyerek başlayın</p>
            <Button onClick={() => openAddEdit()} className="bg-[#402e47] hover:bg-[#5a4460]">
              <Plus className="w-4 h-4 mr-2" />
              Kategori Ekle
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {catList.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <div className="relative h-40">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-3 right-3 flex gap-2">
                  <button type="button" onClick={() => openAddEdit(item)} className="w-8 h-8 rounded-lg bg-white/90 text-gray-700 hover:bg-white flex items-center justify-center">
                    <Pencil className="w-4 h-4" />
                  </button>
                  <button type="button" onClick={() => askDelete(item.id)} className="w-8 h-8 rounded-lg bg-white/90 text-red-600 hover:bg-white flex items-center justify-center">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <div className="absolute top-3 left-3 w-10 h-10 rounded-lg bg-white/90 flex items-center justify-center text-[#402e47]">
                  {renderIcon(item.icon)}
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-white font-bold text-lg">{item.title}</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-gray-600 line-clamp-2 mb-3">{item.description}</p>
                <div className="flex items-center gap-2 mb-3">
                  {item.featured && <Badge className="bg-amber-100 text-amber-700">Öne Çıkan</Badge>}
                  <Badge variant={item.isActive ? "default" : "secondary"}>{item.isActive ? "Aktif" : "Pasif"}</Badge>
                </div>
                <div className="flex items-center justify-between pt-3 border-t">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">Aktif</span>
                      <Switch checked={item.isActive} onCheckedChange={(c) => toggleActive(item.id, c)} />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">Öne Çıkan</span>
                      <Switch checked={item.featured} onCheckedChange={(c) => toggleFeatured(item.id, c)} />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>{editing ? "Kategori Düzenle" : "Yeni Kategori Ekle"}</DialogTitle>
            <DialogDescription>{editing ? "Kategori bilgilerini güncelleyin" : "Yeni bir hizmet kategorisi ekleyin"}</DialogDescription>
          </DialogHeader>
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="catTitle">Kategori Adı</Label>
              <Input id="catTitle" placeholder="Örn: Ev Temizliği" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="catDesc">Açıklama</Label>
              <Textarea id="catDesc" placeholder="Kategori hakkında kısa bir açıklama..." value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={3} required />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>İkon</Label>
                <Select value={form.icon} onValueChange={(v) => setForm({ ...form, icon: v })}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {ICON_LIST.map((opt) => (
                      <SelectItem key={opt.val} value={opt.val}>
                        <div className="flex items-center gap-2"><opt.Icon className="w-4 h-4" />{opt.lbl}</div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="catCount">Profesyonel Sayısı</Label>
                <Input id="catCount" placeholder="1.234" value={form.count} onChange={(e) => setForm({ ...form, count: e.target.value })} />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="catImg">Görsel URL</Label>
              <Input id="catImg" placeholder="https://example.com/image.jpg" value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} required />
              {form.image && <div className="mt-2 rounded-lg overflow-hidden h-32"><img src={form.image} alt="Önizleme" className="w-full h-full object-cover" /></div>}
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Switch id="catActive" checked={form.isActive} onCheckedChange={(c) => setForm({ ...form, isActive: c })} />
                <Label htmlFor="catActive">Aktif</Label>
              </div>
              <div className="flex items-center gap-2">
                <Switch id="catFeat" checked={form.featured} onCheckedChange={(c) => setForm({ ...form, featured: c })} />
                <Label htmlFor="catFeat">Öne Çıkan</Label>
              </div>
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={closeDialog} disabled={saving}>İptal</Button>
              <Button type="submit" className="bg-[#402e47] hover:bg-[#5a4460]" disabled={saving}>
                {saving ? (
                  <><Loader2 className="w-4 h-4 mr-2 animate-spin" />Kaydediliyor...</>
                ) : (
                  editing ? "Güncelle" : "Ekle"
                )}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={deleteOpen} onOpenChange={setDeleteOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Kategoriyi Sil</DialogTitle>
            <DialogDescription>Bu kategoriyi silmek istediğinizden emin misiniz? Bu işlem geri alınamaz.</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteOpen(false)} disabled={saving}>İptal</Button>
            <Button variant="destructive" onClick={doDelete} disabled={saving}>
              {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : "Sil"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
