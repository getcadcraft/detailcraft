---
title: Angin, tapak seismik dan gabungan ASCE 7
summary: Buat kes beban angin bagi bangunan tegar berkurung, tentukan nilai reka bentuk seismik bagi satu tapak, dan buat gabungan ASCE 7, dalam tab Analisis.
keywords: angin, beban angin, asce 7, prosedur arah, pendedahan, kurungan, seismik, kelas tapak, ss, s1, sds, sd1, usgs, spektrum reka bentuk, gabungan beban, lrfd, asd, kzt, kd, hembusan
from: 676fcbf3
---

Tiga blok dalam tab {{ui:Analisis}} menyediakan input angin dan seismik bagi rangka dan menggabungkannya: {{ui:Beban angin (prosedur arah ASCE 7)}}, {{ui:Tapak dan sistem seismik (ASCE 7)}} dan {{ui:Gabungan beban ASCE 7}}. Ia alat bantu: **bukan semakan kod; jurutera anda menyemak keputusan.**

## Apa yang anda akan buat

Buat kes beban angin bagi bangunan tegar berkurung, ambil nilai seismik bagi satu tapak, dan buat gabungan yang menggunakannya. Model memerlukan lantai, jadi jalankan analisis dahulu (lihat [Daya, tindak balas dan pesongan](topic:frame-analysis)).

## Langkah

1. Buka tab {{ui:Analisis}} dan pilih {{ui:Jalankan}}, supaya lantai dan saiz bangunan diketahui. Jika sesuatu blok mengatakan tiada lantai, pilih {{ui:Cari tingkat}} di dalamnya.
2. Dalam {{ui:Beban angin (prosedur arah ASCE 7)}}, pilih {{ui:Edisi}}, taip {{ui:Kelajuan angin asas V}} daripada peta angin anda dan pilih {{ui:Unit kelajuan}}, kemudian {{ui:Pendedahan}} dan {{ui:Kurungan}}. Kzt, Kd, G, ketinggian tanah, Cp hiliran, kesipian dan arah juga ada di situ.
3. Baca tekanan pada setiap lantai dan daya pada setiap lantai dalam jadual, kemudian pilih {{ui:Jana kes angin}}. Kesnya ialah +X, -X, +Y dan -Y.
4. Dalam {{ui:Tapak dan sistem seismik (ASCE 7)}}, pilih edisi dan taip Ss dan S1 (SMS, SM1 dan S1 untuk ASCE 7-22), kelas tapak A hingga D, kategori risiko dan sistem penentangan daya seismik. Atau taip latitud dan longitud dan pilih {{ui:Cari daripada USGS (dalam talian)}}; ia hanya bertanya perkhidmatan dalam talian apabila anda menekannya.
5. Baca Fa, Fv, SDS dan SD1, R, Cd dan Omega0 serta spektrum reka bentuk, kemudian pilih {{ui:Guna dalam blok Seismik}}. Tekan {{ui:Buat kes seismik}} dalam blok seismik (lihat [Semak ahli konkrit dan buat beban seismik](topic:concrete-and-seismic)).
6. Dalam {{ui:Gabungan beban ASCE 7}}, pilih {{ui:Kaedah}} (LRFD atau ASD) dan pilih {{ui:Jana gabungan ASCE 7}}. Jalankan analisis sekali lagi.

## Perkara yang perlu diketahui

- Angin: bangunan tegar berkurung sahaja, prosedur arah. Bangunan fleksibel memerlukan faktor hembusan daripada piawaian, yang tidak dibuat oleh DetailCraft.
- Kelas tapak E dan F memerlukan kajian tapak dan belum dibina.
- Senarai sumber di bahagian bawah blok menyatakan dari mana setiap nombor datang dan apa yang ditinggalkan.
- Carian USGS diuji pada perkhidmatan gantian, bukan perkhidmatan langsung.
