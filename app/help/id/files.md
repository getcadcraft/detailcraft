---
title: Membuka, menyimpan, dan mengekspor file
summary: File model DetailCraft, setiap ekspor yang ditulisnya, ke mana file pergi, dan apa yang berbeda menurut peramban dan koneksi.
keywords: buka, simpan, ekspor, unduh, file, json, ifc, nc1, dstv, csv, pdf, zip, format, impor
from: bd715ea3
---

DetailCraft memiliki satu file sendiri, yaitu model, dan lima ekspor. Setiap penyimpanan dan setiap ekspor adalah unduhan. Tidak ada yang diunggah, dan tidak ada yang disimpan di server.

## File model

Model DetailCraft disimpan sebagai `<nama>.detailcraft.json`, dengan `<nama>` adalah nama model di panel {{ui:Model}}. File ini memuat grid, level, batang (beserta lubang dan coaknya), sambungan dan pengaturannya, fondasi, dan profil kustom Anda.

Part, tanda, baut, las, dan batang tulangan tidak disimpan: DetailCraft menghitungnya lagi dari model setiap kali dibuka. Itulah sebabnya file model kecil.

### Menyimpan

1. Ketik nama di kolom {{ui:Nama}} di bagian atas panel {{ui:Model}}.
2. Pilih {{ui:Simpan}} di grup {{ui:File}}, atau tekan {{key:Mod+S}}.
3. Peramban mengunduh `<nama>.detailcraft.json`. Bilah status menyatakan "Tersimpan … (diunduh)", dan titik di awal judul tab peramban hilang.

Setiap penyimpanan adalah unduhan baru. Peramban tidak menimpa file yang Anda buka; bergantung pada pengaturannya, peramban menambahkan angka pada nama, seperti `Frame (1).detailcraft.json`, atau menanyakan tempat penyimpanan. Simpan versi Anda sendiri dengan mengganti nama unduhan.

:::chromium
Chrome dan Edge menyimpan ke folder Downloads kecuali **Tanyakan lokasi penyimpanan setiap file sebelum mengunduh** aktif di pengaturan unduhan peramban. Aktifkan jika Anda ingin memilih folder dan nama file setiap kali.
:::

:::firefox
Firefox menyimpan ke folder Downloads, atau bertanya setiap kali jika **Selalu tanya tempat menyimpan file** aktif di pengaturannya.
:::

:::safari
Safari menyimpan ke folder Downloads. Untuk mengubah folder, buka **Safari, Pengaturan, Umum, Lokasi unduhan file**.
:::

### Membuka

1. Pilih {{ui:Buka}} di grup {{ui:File}}, atau tekan {{key:Mod+O}}.
2. Pilih file `.detailcraft.json`.

Atau seret file dari {{pick:mac=Finder|windows=File Explorer|linux=pengelola file Anda}} dan letakkan di tampilan. Tampilan menyatakan "Letakkan model DetailCraft untuk membukanya" saat Anda menyeret.

Jika model yang terbuka memiliki perubahan yang belum disimpan, DetailCraft bertanya dahulu: {{ui:Batal}}, {{ui:Buang perubahan}}, atau {{ui:Simpan dahulu}}.

DetailCraft memeriksa setiap kolom file sebelum memakainya. Apa pun yang tidak dapat dipakai dihilangkan dan bilah status menyebutkan apa, misalnya "2 batang tidak valid dan dihilangkan." Model yang disimpan oleh DetailCraft yang lebih baru ditolak dengan pesan, bukan dibuka setengah benar.

### Yang dapat dibuka

File modelnya sendiri (`.json`, hingga 50 MB) dan file IFC (`.ifc`, IFC2X3 atau IFC4, hingga 200 MB). File IFC, yang dibuka atau dimasukkan dengan {{ui:Impor IFC}}, menjadi model baru berisi balok, kolom, batang, pelat, grid, dan levelnya, dengan lubang dan coak yang dipotong di dalamnya dan bautnya sebagai baut lepas; laporan mencantumkan apa yang dihilangkan. Lihat [Ekspor IFC](topic:ifc-export#import). DetailCraft belum membuka DWG, DXF, atau model program detailing lain; mencobanya menampilkan "DetailCraft membuka model sendiri (.detailcraft.json) dan file IFC (.ifc)."

## Pekerjaan yang hilang, file terbaru, aplikasi desktop

- Selama model memiliki perubahan yang belum Anda simpan, DetailCraft menyimpan salinan di peramban ini. Jika tab atau peramban berhenti sebelum Anda menyimpan, saat berikutnya Anda membuka DetailCraft, ia bertanya **Pulihkan pekerjaan Anda?**: pulihkan salinan, atau lepaskan. Lihat [Memulihkan pekerjaan Anda](common:recover).
- Model yang baru-baru ini Anda buka tercantum di layar awal bila peramban mengizinkan DetailCraft membukanya lagi; klik satu untuk membukanya kembali.
- Di aplikasi desktop, {{ui:Simpan}} menulis model kembali ke file yang Anda buka (di peramban, ia mengunduh salinan), dan mengklik ganda model DetailCraft atau file IFC membukanya di DetailCraft.

## Ekspor

Semua ekspor memakai nama model. Pilih di grup {{ui:Keluaran}}.

| Tombol | File | Isinya |
|---|---|---|
| {{ui:IFC}} | `<nama>.ifc` | IFC4: lantai, grid, setiap part baja sebagai ekstrusi profil beserta lubang dan coaknya, rakitan, baut dan baut angkur, fondasi, dan setiap batang tulangan. Lihat [Ekspor IFC](topic:ifc-export). |
| {{ui:File NC}} | `<nama> NC.zip` | Satu file DSTV `.nc1` per tanda part. Lihat [Mengirim file NC ke bengkel](topic:nc-export). |
| {{ui:BOM}} | `<nama> BOM.csv` | Tiga tabel dalam satu file: part, rakitan, serta baut dan baut angkur. Lihat [Tanda dan daftar material](topic:marks-and-bom). |
| {{ui:Pembengkokan}} | `<nama> bending schedule.csv` | Setiap tanda tulangan di fondasi. Lihat [Fondasi dan tulangan](topic:footings-and-rebar). |
| {{ui:Gambar kerja}} | `<nama> <tanda>.pdf` | Satu lembar (A3 kecuali Anda memilih ukuran lain) untuk part yang dipilih (profil I dan pelat). Lihat [Membuat gambar kerja](topic:shop-drawings). |
| {{ui:Gambar}} | `<nama> drawings.pdf`, `<nama> <lembar>.pdf`; `<nama> <lembar>.dwg` atau `.dxf`, beberapa dalam `<nama> drawings DWG.zip` (atau `DXF.zip`) | Denah, tampak, dan gambar rakitan pada ukuran lembar yang Anda pilih; DWG dan DXF pada ukuran penuh, 1 unit = 1 mm pada kertas. Lihat [Gambar tata letak umum dan rakitan](topic:drawings). |

### Catatan tentang file CSV

- Diawali dengan byte-order mark agar program spreadsheet membaca karakter beraksen dengan benar.
- Sel yang diawali `=`, `+`, `-`, atau `@` (dan bukan angka biasa) mendapat apostrof di depan, sehingga spreadsheet tidak pernah menjalankannya sebagai rumus.
- Panjang dalam milimeter dan berat dalam kilogram.

### Catatan tentang PDF

Teks dalam PDF memakai font Helvetica standar. Karakter yang tidak dimilikinya (di luar set Eropa Barat) tercetak sebagai "?", dan bilah status memberi tahu jumlahnya.

## Satuan

DetailCraft bekerja dalam milimeter di seluruh bagian: grid, level, koordinat, profil, lubang, dan setiap ekspor. Nama profil mempertahankan bentuk terbitannya (W12x50 adalah sebutan AS meskipun dimensinya ditampilkan dalam mm). Belum ada masukan imperial.

## Online dan offline

Membuka, menyimpan, dan mengekspor semuanya terjadi di peramban Anda, sehingga berfungsi sama dengan atau tanpa koneksi setelah DetailCraft termuat.

Untuk memakai DetailCraft tanpa koneksi nanti, pilih {{ui:Simpan untuk offline}} di bilah aplikasi saat Anda online. Tombol menghitung naik ("Menyimpan 3 dari 20") lalu bertuliskan {{ui:Siap offline}}. Salinan yang disimpan menyertakan pustaka grafis 3D (sekitar 2,6 MB) dan bantuan ini, sehingga setelah tersimpan, tampilan 3D, setiap ekspor, dan bantuan semuanya berfungsi offline. Rincian, dan apa yang masih memerlukan koneksi: [Bekerja offline](common:offline).

:::offline
Anda sedang offline. Jika bilah aplikasi menampilkan {{ui:Siap offline}}, membuka, menyimpan, dan mengekspor berfungsi seperti biasa. Jika tidak, biarkan tab ini terbuka, jangan muat ulang sampai Anda online lagi, dan simpan model Anda sekarang.
:::

Penyimpanan cloud belum tersedia, dan belum ada build desktop. Cadangkan file `.detailcraft.json` Anda seperti Anda mencadangkan file kerja lainnya. Selengkapnya di [Ke mana file Anda pergi](common:your-files).

## Pekerjaan yang belum disimpan

DetailCraft menyimpan model hanya di tab yang terbuka. Jika Anda menutup atau memuat ulang tab dengan perubahan yang belum disimpan, peramban bertanya apakah akan meninggalkan halaman; kata-katanya milik peramban. Simpan dengan {{key:Mod+S}} sesering mungkin.
