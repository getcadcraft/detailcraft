---
title: Periksa ekspor IFC terhadap IDS klien
summary: Muat file .ids yang diberikan kepada Anda dan lihat setiap bagian yang diekspor dan tidak memenuhinya di Masalah, sebelum Anda mengirim IFC.
keywords: ids, information delivery specification, buildingsmart, persyaratan, pengiriman, periksa, validasi, qa, ekspor ifc, properti, material, pengadaan
from: 50d0f785
---

## Yang akan Anda lakukan

IDS (Information Delivery Specification, standar buildingSMART) adalah daftar apa yang harus dimuat sebuah IFC. DetailCraft memeriksa IFC yang akan diekspornya (file yang sama dengan yang ditulis {{ui:IFC}}) terhadap IDS yang diberikan kepada Anda, dan mencantumkan setiap bagian yang tidak memenuhinya.

## Langkah

1. Buka atau gambar model Anda.
2. Klik {{ui:Periksa terhadap IDS…}} di grup {{ui:Keluaran}} pada bilah alat.
3. Klik {{ui:Muat file .ids…}} dan pilih filenya. Tidak ada yang diunggah.
4. Baca hasilnya: setiap spesifikasi dengan {{ui:Lulus}} atau {{ui:Gagal}} dan berapa elemen yang diterapkannya.
5. Buka Masalah ({{key:Ctrl+Shift+M}}) dan klik satu kegagalan: bagian, sambungan, tangga, atau fondasi asalnya akan dipilih dan tampilan di-zoom ke sana.

## Yang akan terlihat

- Satu peringatan untuk setiap elemen yang diekspor dan setiap persyaratan yang tidak dipenuhinya, dengan nama spesifikasi, apa yang diminta IDS, dan apa yang ada di ekspor.
- Laporan pemeriksaan (di Masalah) dimulai dengan IDS: judul, versi, penulis, dan jumlah setiap spesifikasi.

## Perlu diketahui

- IDS disimpan di file model, jadi diperiksa lagi saat Anda membuka model. Memuat atau melupakannya adalah satu langkah yang bisa diurungkan.
- Setiap perubahan diperiksa lagi sebentar kemudian; pada model besar, pemeriksaan menunggu sedikit lebih lama di antara setiap proses.
- GlobalId ekspor berasal dari nama model dan nomor bagian di dalam DetailCraft, jadi tetap sama dari satu pemeriksaan ke pemeriksaan berikutnya. Mengganti nama model memberi setiap elemen GlobalId baru.
- Angka dibandingkan dalam satuan SI (ekspor dalam milimeter; panjang dikonversi ke meter terlebih dahulu).
- Pola dalam IDS dibaca sebagai nilai utuh. `^` di awal dan `$` di akhir juga diambil sebagai "nilai utuh", seperti yang dimaksud sebagian besar file IDS.

## Berikutnya

- [Ekspor IFC](topic:ifc-export)
