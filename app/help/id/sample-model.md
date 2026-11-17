---
title: Jelajahi rangka contoh
summary: Buka rangka dua bentang bawaan dan gunakan untuk mempelajari apa yang dibuat DetailCraft, dari tanda sampai file NC.
keywords: contoh, sampel, demo, rangka, pelajari, tur, coba
from: 5c5944dd
---

Rangka contoh adalah model kecil yang lengkap: setiap jenis objek yang dibuat DetailCraft muncul setidaknya sekali. Ini cara tercepat untuk mempelajari aplikasi dan menguji ekspor sebelum Anda mengandalkannya.

## Buka

1. Pilih {{ui:Contoh}} di grup {{ui:File}}.
2. Jika model Anda saat ini memiliki perubahan yang belum disimpan, pilih {{ui:Simpan dahulu}} atau {{ui:Buang perubahan}}.
3. Bilah status menampilkan "Rangka contoh: 6 kolom dengan pelat dasar, 4 balok dengan pelat ujung, sebuah bresing, 7 fondasi dengan tulangan."

Contoh terbuka sebagai model baru bernama "Rangka contoh". Tidak ada yang lain yang berubah, dan tidak ada yang perlu diurungkan.

## Isinya

- **Grid** 1, 2, 3 pada 6000 mm dan A, B pada 7000 mm. **Level** Level 1 pada 0 dan Level 2 pada 4000.
- **Enam kolom**, W12x50, dari Level 1 ke Level 2 di setiap perpotongan, masing-masing di atas pelat dasar 25 mm dengan empat baut angkur.
- **Empat balok**, W16x26, di Level 2 sepanjang garis grid A dan B, bagian atas baja pada level, dengan pelat ujung baut rata di kedua ujung (delapan semuanya).
- **Satu bresing**, HSS4x4x1/4, dari A/1 di Level 1 naik ke A/2 di Level 2.
- **Enam fondasi tapak**, 2000 x 2000 x 600, satu di bawah setiap kolom, dengan anyaman bawah berkait kedua arah.
- **Satu fondasi lagi** di samping rangka, 2400 x 1800 x 600, dengan enam besi stek berkait yang berdiri tegak untuk pilar beton.

## Hal yang bisa dicoba

1. Klik balok. Baca {{ui:Tanda part}}, {{ui:Rakitan}}, {{ui:Panjang potong}} dan {{ui:Potongan mundur}}: panjang potong lebih pendek dari jarak grid 6000 mm karena setiap pelat ujung memotong balok mundur sebesar setengah kedalaman kolom ditambah tebal pelat.
2. Klik kolom. Di bawah {{ui:Lubang}} tercantum lubang yang dibuat pelat ujung di flensnya ("8 lubang dari sambungan"; kolom tengah memiliki 16, satu set di setiap flens).
3. Di daftar {{ui:Tanda part}} di sebelah kiri, lihat bahwa keempat balok berbagi satu tanda: mereka adalah potongan baja yang sama. Kolom sudut juga berbagi tanda, meskipun lubangnya menghadap arah berlawanan, karena kolom yang diputar ujung ke ujung adalah potongan yang sama. Kolom tengah, dengan lubang di kedua flens, mendapat tanda lain.
4. Klik pelat ujung (atau salah satu bautnya). Panel {{ui:Properti}} menampilkan pengaturan pelat, baut dan las, baut yang dibuatnya (dengan panjangnya dihitung dari cengkeraman), dan peringatan jarak tepi apa pun.
5. Buka tab {{ui:Daftar material}}. Bagian, rakitan (balok dengan dua pelat ujungnya adalah satu rakitan), serta baut dan batang angkur tercantum beserta beratnya. Anda akan melihat enam tanda part: c1 (dua kolom tengah) dan c2 (empat kolom sudut), keduanya W12x50 pada 3975 mm; b1, empat balok W16x26 pada 5650 mm; br1, bresingnya; p1, delapan pelat ujung PL20x180; dan p2, enam pelat dasar PL25x400. Pengencangnya adalah 64 baut 20 x 70 A325 dan 24 batang angkur 20 x 575.
6. Buka tab {{ui:Daftar pembengkokan}}. Keenam fondasi yang identik berbagi tanda tulangan; fondasi pilar menambahkan tandanya sendiri.
7. Klik bresing dan lihat grup {{ui:Keluaran}}: {{ui:Gambar kerja}} berwarna abu-abu (tidak aktif), karena sejauh ini gambar kerja hanya mencakup profil I dan pelat.
8. Pilih {{ui:File NC}}. Zip berisi satu file untuk setiap tanda profil I dan pelat; bilah status mencantumkan tanda bresing sebagai tidak ditulis.
9. Pilih {{ui:IFC}} dan buka file itu di penampil IFC apa pun untuk memeriksa bagaimana perangkat lunak lain Anda membacanya.

## Gunakan sebagai titik awal

Contoh adalah model biasa. Ubah, lalu beri nama baru di kolom {{ui:Nama}} dan simpan dengan nama barunya memakai {{key:Mod+S}}.
