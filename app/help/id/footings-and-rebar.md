---
title: Pasang fondasi dengan tulangan
summary: Pasang fondasi telapak persegi dengan lapisan tulangan bawah dan besi stek, periksa, dan unduh daftar pembengkokan.
keywords: fondasi, fondasi telapak, pondasi, tulangan, penulangan, batang, lapisan, besi stek, pasak, daftar pembengkokan, daftar tulangan, beton, kait, selimut beton
from: 41a048be
---

Topik ini membahas fondasi telapak persegi. Balok, kolom, pelat lantai dan dinding ada di [Detail beton bertulang](topic:reinforced-concrete). Setiap fondasi mendapat lapisan tulangan bawah ke dua arah dan, jika Anda menginginkannya, besi stek yang berdiri menjulang keluar darinya. Tulangan berukuran US #3 sampai #11.

## Memasang fondasi

1. Pilih {{ui:Denah}} dan tentukan level bagian atas fondasi.
2. Pilih {{ui:Fondasi}} di grup {{ui:Letakkan}}, atau tekan {{key:F}}.
3. Atur fondasi di panel {{ui:Properti}} (lihat di bawah), atau biarkan nilai bawaan.
4. Klik perpotongan grid. Fondasi berpusat pada perpotongan itu dengan bagian atasnya di level tersebut. Bilah status menampilkan, misalnya, "Fondasi 2000 x 2000 x 600 di bawah A/1."

Anda juga dapat memakai formulir {{ui:Tambah berdasarkan grid}} di bagian bawah panel.

Fondasi digambar transparan agar tulangannya terlihat, dan tulangan digambar sebagai tabung pejal.

## Pengaturan fondasi

| Field | Bawaan | Catatan |
|---|---|---|
| Panjang L (mm) | 2000 | Sepanjang x; 300 sampai 50000 |
| Lebar B (mm) | 2000 | Sepanjang y; 300 sampai 50000 |
| Tinggi H (mm) | 600 | 150 sampai 10000 |
| Beton | 4000 psi | Teks, dicetak dalam ekspor IFC |

**Lapisan tulangan bawah**

| Field | Bawaan | Catatan |
|---|---|---|
| Tulangan panjang | #5 | Batang sepanjang L, lapisan bawah |
| Jarak (mm) | 250 | Jarak terbesar yang diizinkan; batang disebar merata pada jarak ini atau lebih rapat |
| Tulangan pendek | #5 | Batang sepanjang B, diletakkan di atas tulangan panjang |
| Jarak (mm) | 250 | Sama seperti di atas |
| Selimut beton (mm) | 75 | Selimut bersih di setiap sisi |
| Kait ujung | Aktif | Membengkokkan kedua ujung setiap batang lapisan dengan kait 90° standar (bentuk U); nonaktif menghasilkan batang lurus (bentuk S) |

**Besi stek**

| Field | Bawaan | Catatan |
|---|---|---|
| Besi stek | Aktif | Nonaktifkan untuk fondasi tanpa besi stek |
| Batang | #6 | |
| Batang sepanjang L / Batang sepanjang B | 2 / 2 | Kisi batang, berpusat di fondasi |
| Jarak sepanjang L / Jarak sepanjang B | 250 / 250 | Antar pusat batang |
| Tonjolan di atas muka atas | 600 | Seberapa jauh batang menjulang di atas bagian atas fondasi |
| Kait di bawah | Aktif | Kait 90° yang mengarah ke luar, bertumpu pada lapisan (bentuk L) |

Di bawah isian, DetailCraft menampilkan panjang kaki kait untuk tulangan panjang, misalnya "Panjang kaki kait untuk #5: 254 mm dari luar ke luar."

## Mengubah fondasi yang sudah dipasang

Pilih fondasi (klik betonnya yang jauh dari kolom, atau salah satu batangnya). Anda mendapat isian yang sama ditambah {{ui:Pusat x}}, {{ui:Pusat y}}, {{ui:Muka atas z}} dan {{ui:Rotasi (°)}}. Di bawahnya, tabel mencantumkan batang fondasi ini beserta tanda, jumlah dan panjangnya, serta volume beton dalam meter kubik.

Setiap perubahan diperiksa sebelum disimpan. Perubahan yang tidak dapat dibangun ditolak dan bilah status menjelaskan alasannya, misalnya "Selimut tidak menyisakan ruang untuk tulangan di fondasi ini.", "Fondasi terlalu dangkal untuk dua lapis tulangan di dalam selimut." atau "Besi stek tidak muat di dalam fondasi dengan selimut 75 mm."

Perubahan yang dapat dibangun tetapi perlu diperiksa dicantumkan di bawah fondasi dan di tab {{ui:Masalah}}:

- "Batang #11 pada 59.6 mm menyisakan kurang dari 35.8 mm bersih (ACI 318-19 25.2.1)." Celah bersih antar batang harus minimal sebesar diameter batang dan minimal 25.4 mm.
- "Kait #5 membutuhkan kedalaman 254 mm; hanya 150 mm yang muat di dalam selimut." Kaki kait kemudian dipotong agar muat, sehingga kait tersebut tidak lagi standar.
- "Kait besi stek masuk ke dalam selimut."
- "Besi stek lebih rapat daripada jarak bersih minimum."

## Tanda tulangan dan daftar pembengkokan

Batang yang identik (ukuran, bentuk, dan dimensi sama hingga milimeter) memakai satu tanda tulangan di semua fondasi. Tanda ditulis `<nomor batang>F<n>`: 5F1, 5F2 untuk batang #5, 6F1 untuk batang #6 pertama, dan seterusnya. Fondasi dengan ukuran, beton, lapisan, dan besi stek yang sama memakai satu tanda fondasi: F1, F2 …

1. Buka tab {{ui:Daftar pembengkokan}} di bagian bawah. Setiap baris adalah satu tanda tulangan: ukuran, bentuk, dimensi A, B dan C, jumlah, panjang potong, panjang total, massa per meter, berat setiap batang, berat total, dan untuk apa batang itu dipakai.
2. Pilih {{ui:Unduh CSV}} di tab, atau {{ui:Pembengkokan}} di menu {{ui:Lainnya}} grup {{ui:Keluaran}}, untuk `<name> bending schedule.csv`.

Bentuk adalah kode milik DetailCraft, bukan standar: S lurus, L satu bengkokan, U dua bengkokan. Dimensi diukur dari luar ke luar; panjang potong adalah panjang sumbu pusat yang tepat melewati bengkokan. Lihat [Referensi tulangan](topic:rebar-reference).

## Yang tidak diperiksa DetailCraft

- Panjang penyaluran dan panjang sambungan lewatan, serta apakah besi stek cukup panjang untuk kolom di atasnya.
- Bagian ukuran agregat dari aturan jarak bersih (aplikasi tidak mengetahui campuran beton).
- Apa pun tentang kolom atau pelat dasar di atasnya: fondasi dan baja dimodelkan secara terpisah.

Lihat juga [Yang belum dibuat](topic:not-built-yet).
