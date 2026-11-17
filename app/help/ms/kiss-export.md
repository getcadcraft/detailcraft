---
title: Eksport fail KISS untuk perisian fabrikasi
summary: Hantar senarai bahan ke program pengurusan fabrikasi (MIS) sebagai fail KISS 1.1: himpunan, bahagian, fasa sebagai jujukan, lubang, potongan hujung dan kimpalan.
keywords: kiss, kss, mis, pengurusan fabrikasi, kawalan pengeluaran, anggaran, senarai bahan, bom, eksport, fabtrol, jujukan
from: 30cf3951
---

Dalam kumpulan {{ui:Output}}, buka {{ui:Lagi}} dan pilih {{ui:Fail KISS untuk perisian fabrikasi}}. DetailCraft memuat turun `<name>.kss`, fail KISS ("Keep It Simple, Steel", versi 1.1), format teks biasa yang kebanyakan program pengurusan fabrikasi gunakan untuk mengimport senarai bahan.

## Kandungannya

- Pengepala: nombor kerja (lapan huruf dan digit pertama nama model), nama model, tarikh dan masa, dan sama ada saiz adalah metrik.
- Untuk setiap tanda himpunan: bahagian utamanya (kuantiti = bilangan himpunan), baris lukisan (A-B1 dan seterusnya, nombor lukisan himpunan), baris himpunan (nama, jenis, berat, panjang keseluruhan, kedalaman dan lebar), satu baris jujukan untuk setiap [fasa](topic:phases) yang himpunan itu berada, dan baris buruh: lubang (berapa, diameter, ketebalan tembus), potongan hujung dan kimpalan.
- Kemudian setiap bahagian yang dilampirkan padanya, dengan kuantiti **keseluruhan** (bagi setiap himpunan × bilangan himpunan), seperti yang diminta oleh piawaian.
- Bolt longgar dan bolt sauh pada lukisan BOLTS, himpunan FIELD.
- Setiap baris memberikan jenis (W, C, L, HSS, PL, atau MI untuk profil tersuai), saiz, gred, panjang potongan dalam milimeter, nama bahagian dan berat.

## Imperial atau metrik

Dalam [Tetapan DetailCraft](topic:settings), **Saiz fail KISS** memilih:

- **Automatik** (permulaan): imperial apabila setiap ahli ialah bentuk AISC, metrik jika tidak.
- **Imperial**: bentuk mengikut tanda AISC (W 16X26, HSS 4X4X.250); plat dan bolt, yang DetailCraft simpan dalam milimeter, kepada 1/16 in terdekat; berat dalam paun.
- **Metrik**: bentuk Eropah mengikut nama (IPE300), plat sebagai tebal X lebar dalam milimeter; berat dalam kilogram.

Panjang sentiasa dalam milimeter dengan dua titik perpuluhan, walau apa pun tetapannya: piawaian KISS memerlukannya, dan program penerima yang menukarkannya.

:::note
Gred dipotong kepada lapan aksara piawaian: A572 Gr 50 menjadi A572-50. Koma dalam nama ditukar menjadi ruang (format ini tiada petikan). Semak satu import dalam program anda sebelum bergantung padanya: fail KISS DetailCraft disemak berbanding piawaian di sini, belum lagi dalam program fabrikasi.
:::
