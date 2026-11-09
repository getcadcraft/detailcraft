---
title: Buka, simpan, dan ekspor file
summary: File model DetailCraft, setiap ekspor yang dihasilkannya, lokasi file disimpan, dan perbedaannya menurut peramban serta koneksi.
keywords: buka, simpan, ekspor, unduh, file, json, ifc, nc1, dstv, csv, pdf, zip, format, impor
from: 6fbc8e8f
---

DetailCraft punya satu file sendiri, yaitu model, dan lima ekspor. Setiap penyimpanan dan setiap ekspor adalah unduhan. Tidak ada yang diunggah, dan tidak ada yang disimpan di server.

## File model

Model DetailCraft disimpan sebagai `<name>.detailcraft.json`, dengan `<name>` adalah nama model di panel {{ui:Model}}. File ini berisi grid, level, batang (beserta lubang dan coaknya), sambungan dan pengaturannya, fondasi, serta profil kustom Anda.

Part, tanda, baut, las, dan tulangan tidak disimpan: DetailCraft menghitungnya ulang dari model setiap kali dibuka. Itu sebabnya file model berukuran kecil.

### Simpan

1. Ketik nama di kolom {{ui:Nama}} di bagian atas panel {{ui:Model}}.
2. Pilih {{ui:Simpan}} di grup {{ui:File}}, atau tekan {{key:Mod+S}}.
3. Peramban mengunduh `<name>.detailcraft.json`. Bilah status menampilkan "Disimpan … (diunduh)", dan titik di awal judul tab peramban hilang.

Setiap penyimpanan adalah unduhan baru. Peramban tidak menimpa file yang Anda buka; tergantung pengaturannya, peramban menambahkan nomor pada nama, seperti `Frame (1).detailcraft.json`, atau menanyakan lokasi penyimpanan. Simpan versi Anda sendiri dengan mengganti nama unduhan.

:::chromium
Chrome dan Edge menyimpan ke folder Unduhan Anda, kecuali **Tanyakan di mana menyimpan setiap file sebelum mengunduh** aktif di pengaturan unduhan peramban. Aktifkan jika Anda ingin memilih folder dan nama file setiap kali.
:::

:::firefox
Firefox menyimpan ke folder Unduhan Anda, atau menanyakan setiap kali jika **Selalu tanya saya di mana menyimpan file** aktif di pengaturannya.
:::

:::safari
Safari menyimpan ke folder Unduhan Anda. Untuk mengubah folder, buka **Safari, Pengaturan, Umum, Lokasi unduhan file**.
:::

### Buka

1. Pilih {{ui:Buka}} di grup {{ui:File}}, atau tekan {{key:Mod+O}}.
2. Pilih file `.detailcraft.json`.

Atau seret file dari {{pick:mac=Finder|windows=File Explorer|linux=pengelola file Anda}} dan lepaskan di tampilan. Tampilan menampilkan "Lepaskan model DetailCraft untuk membukanya" selama Anda menyeret.

Jika model yang terbuka memiliki perubahan yang belum disimpan, DetailCraft akan bertanya dulu: {{ui:Batal}}, {{ui:Buang perubahan}} atau {{ui:Simpan dahulu}}.

DetailCraft memeriksa setiap kolom dalam file sebelum menggunakannya. Bagian yang tidak dapat digunakan akan dilewati, dan bilah status menjelaskan apa saja, misalnya "2 batang tidak valid dan dilewati." Model yang disimpan oleh DetailCraft yang lebih baru akan ditolak dengan pesan, bukan dibuka setengah benar.

### Yang dibuka

File model miliknya sendiri (`.json`, hingga 50 MB) dan file IFC (`.ifc`, IFC2X3 atau IFC4, hingga 200 MB). File IFC, baik yang dibuka maupun yang dimasukkan dengan {{ui:Impor IFC}}, menjadi model baru yang berisi balok, kolom, batang, pelat, grid, dan level dari file tersebut, dengan lubang dan coak dipotong di dalamnya dan bautnya sebagai baut lepas. Sebuah laporan mencatat apa saja yang dilewati. Lihat [Ekspor IFC](topic:ifc-export#import). DetailCraft belum membuka DWG, DXF, atau model dari program detailing lain; mencobanya akan menampilkan "DetailCraft membuka model miliknya (.detailcraft.json) dan file IFC (.ifc)."

## Pekerjaan yang hilang, file terbaru, aplikasi desktop

- Selama model memiliki perubahan yang belum Anda simpan, DetailCraft menyimpan salinan di peramban ini. Jika tab atau peramban berhenti sebelum Anda menyimpan, saat Anda membuka DetailCraft berikutnya, aplikasi akan bertanya **Pulihkan pekerjaan Anda?**: pulihkan salinan itu, atau biarkan. Lihat [Pulihkan pekerjaan Anda](common:recover).
- Model yang baru Anda buka tercantum di layar awal jika peramban mengizinkan DetailCraft membukanya kembali; klik salah satu untuk membukanya lagi.
- Di aplikasi desktop, {{ui:Simpan}} menulis model kembali ke file yang Anda buka (di peramban, ia mengunduh salinan), dan mengklik dua kali model DetailCraft atau file IFC akan membukanya di DetailCraft.

## Ekspor

Semua ekspor memakai nama model. Pilih di grup {{ui:Keluaran}}.

| Tombol | File | Isinya |
|---|---|---|
| {{ui:IFC}} | `<name>.ifc` | IFC4: lantai, grid, setiap bagian baja sebagai ekstrusi profil dengan lubang dan coaknya, rakitan, baut dan batang angkur, fondasi, serta setiap batang tulangan. Lihat [Ekspor IFC](topic:ifc-export). |
| {{ui:File NC}} | `<name> NC.zip` | Satu file DSTV `.nc1` untuk setiap tanda part. Lihat [Kirim file NC ke bengkel](topic:nc-export). |
| {{ui:BOM}} | `<name> BOM.csv` | Tiga tabel dalam satu file: part, rakitan, serta baut dan batang angkur. Lihat [Tanda dan daftar material](topic:marks-and-bom). |
| {{ui:Pembengkokan}} | `<name> bending schedule.csv` | Setiap tanda tulangan di fondasi. Lihat [Fondasi dan tulangan](topic:footings-and-rebar). |
| {{ui:Gambar kerja}} | `<name> <mark>.pdf` | `<name> Shop drawings.pdf` berisi satu lembar untuk setiap tanda part; {{ui:Unduh PDF}} memberikan lembar yang sedang ditampilkan (A3 kecuali Anda memilih ukuran lain). Lihat [Membuat gambar kerja](topic:shop-drawings). |
| {{ui:Gambar}} | `<name> drawings.pdf`, `<name> <sheet>.pdf`; `<name> <sheet>.dwg` atau `.dxf`, beberapa dalam `<name> drawings DWG.zip` (atau `DXF.zip`) | Denah, tampak, dan gambar rakitan pada ukuran lembar yang Anda pilih; DWG dan DXF pada ukuran penuh, 1 satuan = 1 mm di kertas. Lihat [Gambar tata letak umum dan rakitan](topic:drawings). |

### Catatan tentang file CSV

- File dimulai dengan tanda urutan byte agar program spreadsheet membaca karakter beraksen dengan benar.
- Sel yang diawali `=`, `+`, `-` atau `@` (dan bukan angka biasa) diberi tanda kutip tunggal di depannya, sehingga spreadsheet tidak pernah menjalankannya sebagai rumus.
- Panjang dalam milimeter dan berat dalam kilogram.

### Catatan tentang PDF

Teks dalam PDF memakai font standar Helvetica. Karakter yang tidak tersedia di dalamnya (di luar himpunan Eropa Barat) dicetak sebagai "?", dan bilah status memberi tahu jumlahnya.

## Satuan

DetailCraft bekerja dalam milimeter di seluruh bagian: grid, level, koordinat, profil, lubang, dan setiap ekspor. Nama profil tetap dalam bentuk yang diterbitkan (W12x50 adalah penunjukan AS meskipun dimensinya ditampilkan dalam mm). Belum ada masukan imperial.

## Daring dan luring

Membuka, menyimpan, dan mengekspor semuanya terjadi di peramban Anda, sehingga hasilnya sama dengan atau tanpa koneksi setelah DetailCraft dimuat.

Untuk memakai DetailCraft tanpa koneksi nanti, pilih {{ui:Simpan untuk offline}} di bilah aplikasi selagi Anda daring. Tombol akan menghitung naik ("Menyimpan 3 dari 20") lalu menampilkan {{ui:Siap offline}}. Salinan yang tersimpan menyertakan pustaka grafis 3D (sekitar 2.6 MB) dan bantuan ini, sehingga setelah disimpan, tampilan 3D, setiap ekspor, dan bantuan semuanya berfungsi luring. Rincian, dan apa yang masih memerlukan koneksi: [Bekerja luring](common:offline).

:::offline
Anda sedang luring. Jika bilah aplikasi menampilkan {{ui:Siap offline}}, membuka, menyimpan, dan mengekspor tetap berfungsi seperti biasa. Jika tidak, biarkan tab ini terbuka, jangan muat ulang sampai Anda kembali daring, dan simpan model Anda sekarang.
:::

Penyimpanan cloud belum tersedia, dan belum ada build desktop. Cadangkan file `.detailcraft.json` Anda seperti Anda mencadangkan file kerja lainnya. Selengkapnya di [Di mana file Anda disimpan](common:your-files).

## Pekerjaan yang belum disimpan

DetailCraft hanya menyimpan model di tab yang terbuka. Jika Anda menutup atau memuat ulang tab dengan perubahan yang belum disimpan, peramban akan menanyakan apakah Anda ingin meninggalkan halaman; rumusannya berasal dari peramban. Simpan dengan {{key:Mod+S}} sering-sering.
