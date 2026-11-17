---
title: Ekspor file KISS untuk perangkat lunak fabrikasi
summary: Kirim daftar material ke program manajemen fabrikasi (MIS) sebagai file KISS 1.1: rakitan, part, fase sebagai urutan, lubang, cope, dan las.
keywords: kiss, kss, mis, manajemen fabrikasi, kontrol produksi, estimasi, daftar material, bom, ekspor, fabtrol, urutan
from: 30cf3951
---

Di grup {{ui:Keluaran}}, buka {{ui:Lainnya}} dan pilih {{ui:File KISS untuk perangkat lunak fabrikasi}}. DetailCraft mengunduh `<name>.kss`, sebuah file KISS ("Keep It Simple, Steel", versi 1.1), format teks biasa yang paling sering diimpor program manajemen fabrikasi sebagai daftar material.

## Isi file

- Header: nomor pekerjaan (delapan huruf dan angka pertama dari nama model), nama model, tanggal dan waktu, dan apakah ukuran menggunakan metrik.
- Untuk setiap tanda rakitan: part utamanya (kuantitas = berapa banyak rakitan), baris gambar (A-B1 dan seterusnya, nomor gambar rakitan), baris rakitan (nama, tipe, berat, panjang keseluruhan, tinggi, dan lebar), satu baris urutan untuk setiap [fase](topic:phases) tempat rakitan berada, serta baris upah kerja: lubang (berapa banyak, diameter, tebal tembus), cope, dan las.
- Lalu setiap part yang melekat padanya, dengan **total** kuantitas (per rakitan × jumlah rakitan), seperti yang diminta standar.
- Baut lepas dan angkur pada gambar BOLTS, rakitan FIELD.
- Setiap baris memuat tipe (W, C, L, HSS, PL, atau MI untuk profil kustom), ukuran, mutu, panjang potong dalam milimeter, nama part, dan berat.

## Imperial atau metrik

Di [Pengaturan DetailCraft](topic:settings), **Ukuran file KISS** memilih:

- **Otomatis** (awal): imperial jika setiap batang adalah profil AISC, metrik jika tidak.
- **Imperial**: profil menurut penamaan AISC (W 16X26, HSS 4X4X.250); pelat dan baut, yang DetailCraft simpan dalam milimeter, dibulatkan ke 1/16 in terdekat; berat dalam pon.
- **Metrik**: profil Eropa menurut namanya (IPE300), pelat sebagai tebal X lebar dalam milimeter; berat dalam kilogram.

Panjang selalu dalam milimeter dengan dua desimal, apa pun pengaturannya: standar KISS memintanya, dan program penerima mengonversinya.

:::note
Mutu dipotong menjadi delapan karakter standar: A572 Gr 50 menjadi A572-50. Koma dalam nama diubah menjadi spasi (format ini tidak memiliki tanda kutip). Periksa satu impor di program Anda sebelum mengandalkannya: file KISS DetailCraft diperiksa terhadap standar di sini, belum di program fabrikasi.
:::
