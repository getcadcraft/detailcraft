---
title: Angin, lokasi seismik dan kombinasi ASCE 7
summary: Buat kasus beban angin untuk gedung kaku yang tertutup, hitung nilai desain seismik untuk suatu lokasi, dan buat kombinasi ASCE 7, di tab Analisis.
keywords: angin, beban angin, asce 7, prosedur arah, eksposur, penutupan, seismik, kelas situs, ss, s1, sds, sd1, usgs, spektrum desain, kombinasi beban, lrfd, asd, kzt, kd, gust
from: 676fcbf3
---

Tiga blok di tab {{ui:Analisis}} membuat dan menggabungkan masukan angin dan seismik untuk rangka: {{ui:Beban angin (prosedur arah ASCE 7)}}, {{ui:Lokasi dan sistem seismik (ASCE 7)}} dan {{ui:Kombinasi beban ASCE 7}}. Ini adalah alat bantu: **bukan pemeriksaan standar; insinyur Anda meninjau hasilnya.**

## Yang akan Anda lakukan

Buat kasus beban angin untuk gedung kaku yang tertutup, ambil nilai seismik untuk suatu lokasi, dan buat kombinasi yang memakainya. Model memerlukan lantai, jadi jalankan analisis terlebih dahulu (lihat [Gaya, reaksi dan lendutan](topic:frame-analysis)).

## Langkah

1. Buka tab {{ui:Analisis}} dan pilih {{ui:Jalankan}}, agar lantai dan ukuran gedung diketahui. Jika sebuah blok menyatakan tidak ada lantai, pilih {{ui:Cari lantai}} di dalamnya.
2. Di {{ui:Beban angin (prosedur arah ASCE 7)}}, pilih {{ui:Edisi}}, ketik {{ui:Kecepatan angin dasar V}} dari peta angin Anda dan pilih {{ui:Satuan kecepatan}}-nya, lalu {{ui:Eksposur}} dan {{ui:Penutupan}}. Kzt, Kd, G, elevasi tanah, Cp leeward, eksentrisitas dan arah juga tersedia di sana.
3. Baca tekanan di setiap lantai dan gaya pada setiap lantai dalam tabel, lalu pilih {{ui:Buat kasus angin}}. Kasusnya adalah +X, -X, +Y dan -Y.
4. Di {{ui:Lokasi dan sistem seismik (ASCE 7)}}, pilih edisinya dan ketik Ss dan S1 (SMS, SM1 dan S1 untuk ASCE 7-22), kelas situs A sampai D, kategori risiko, dan sistem penahan gaya seismik. Atau ketik lintang dan bujur lalu pilih {{ui:Cari dari USGS (daring)}}; layanan daring hanya dihubungi saat Anda menekannya.
5. Baca Fa, Fv, SDS dan SD1, R, Cd dan Omega0 serta spektrum desain, lalu pilih {{ui:Pakai di blok seismik}}. Tekan {{ui:Buat kasus seismik}} di blok seismik (lihat [Periksa elemen beton dan buat beban seismik](topic:concrete-and-seismic)).
6. Di {{ui:Kombinasi beban ASCE 7}}, pilih {{ui:Metode}} (LRFD atau ASD) dan pilih {{ui:Buat kombinasi ASCE 7}}. Jalankan analisis lagi.

## Hal yang perlu diketahui

- Angin: hanya gedung kaku yang tertutup, dengan prosedur arah. Gedung fleksibel memerlukan faktor angin hembusan dari standar, yang tidak dibuat DetailCraft.
- Kelas situs E dan F memerlukan studi lokasi dan belum dibuat.
- Daftar sumber di bagian bawah blok menyebutkan asal setiap angka dan apa yang tidak disertakan.
- Pencarian USGS diuji dengan pengganti, bukan layanan yang sedang berjalan.
