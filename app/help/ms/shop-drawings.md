---
title: Buat lukisan bengkel
summary: Satu helaian bagi setiap tanda bahagian, dibuat sekali gus: pratonton mana-mana satunya dan muat turun satu helaian atau keseluruhan set sebagai PDF pada A4 hingga A1 atau ANSI B hingga D, dengan lubang, potongan hujung, dimensi dan blok tajuk.
keywords: lukisan bengkel, semua bahagian, kelompok, keseluruhan set, lukisan bahagian tunggal, lukisan fabrikasi, pdf, lukisan terperinci, lukisan kepingan, cetak
from: d25fe035
---

DetailCraft membuat satu helaian bagi setiap tanda bahagian, untuk setiap rasuk, tiang, tupang dan plat dalam model, sekali gus: anda tidak perlu memilihnya satu demi satu. Kepingan yang sama berkongsi tanda, jadi mereka berkongsi satu helaian. Helaian dibuat serta-merta daripada model; ia tidak disimpan atau disunting.

## Buat keseluruhan set

1. Pilih {{ui:Shop drawing}} dalam kumpulan {{ui:Output}}. Tiada apa perlu dipilih. Dengan satu bahagian dipilih, tetingkap dibuka pada helaian bahagian itu. Dalam panel {{ui:Sifat}}, butang yang sama dipanggil {{ui:Shop drawing}} untuk anggota dan {{ui:Plate drawing}} untuk sambungan.
2. Pratonton dibuka, bertajuk dengan tanda bahagian, contohnya "Shop drawing b1". Senarai pertama di sebelah tajuk memegang setiap tanda bahagian dengan profil, panjang dan kuantitinya: pilih satu untuk melihat helaiannya. Senarai kedua menukar saiz helaian; keseluruhan set dibuat semula pada saiz itu (lihat [Lukisan susunan umum dan himpunan](topic:drawings#choose-the-sheet-size)).
3. Pilih {{ui:Download all}} (butang menunjukkan bilangan helaian) untuk satu PDF dengan satu halaman bagi setiap tanda bahagian, `<name> Shop drawings.pdf`. Setiap helaian menyatakan "Sheet 3 of 42" dalam blok tajuknya. Atau pilih {{ui:Download this sheet}} bagi helaian yang anda lihat, `<name> <mark>.pdf`.
4. Tutup pratonton dengan × atau {{key:Esc}}.

Jika {{ui:Shop drawing}} tidak aktif, model belum mempunyai bahagian.

## Apa yang ada pada helaian

Untuk bentuk-I:

- **Dongakan**, melihat ke arah web: bahagian dengan potongan hujungnya diberi takuk, lubang web sebagai bulatan dan lubang flange sebagai garisan tersembunyi (putus-putus).
- **Pelan flange atas**, dilihat dari atas, apabila mana-mana flange mempunyai lubang. Lubang flange bawah ditunjukkan putus-putus.
- **Keratan** melalui profil.
- **Dimensi:** kedudukan lubang berantai sepanjang bahagian ditambah panjang keseluruhan, ketinggian lubang web, tolok, dan saiz potongan hujung.
- **Senarai lubang:** setiap kumpulan lubang, contohnya "8 x Ø22 dalam flange atas".
- **Kimpalan**, apabila bahagian mempunyai plat yang dikimpal padanya.
- **Blok tajuk:** tanda bahagian, tanda himpunan, profil, bahan, panjang, kuantiti, berat setiap satu dan jumlah, nama model dan tarikh.

Untuk saluran, sudut atau bahagian berongga, helaian adalah sama, melihat ke arah web atau sisi: dinding tiub ditunjukkan sebagai garisan tersembunyi (putus-putus), dan keratan memberikan tebal dinding.

Untuk plat: muka plat dengan lubangnya, dan tepinya sebagai keratan.

## Skala

Skala dipilih dari senarai (1:1 hingga 1:200) supaya bahagian sesuai dengan helaian. Bahagian yang panjang dan cetek akan terlalu nipis untuk dibaca pada satu skala, jadi apabila kedalaman akan menjadi kurang daripada 30 mm pada kertas, kedalaman dilukis pada skala yang lebih besar daripada panjang. Tajuk paparan kemudian menyatakannya, contohnya "length 1:20, depth 1:5 (not to one scale; dimensions govern)". Sentiasa baca saiz daripada dimensi, bukan dengan mengukur helaian.

## Perkara yang perlu diketahui

- Kuantiti ialah bilangan bahagian dengan tanda itu dalam model. Tanda boleh dinomborkan semula selepas perubahan; lihat [Semak tanda dan senarai bahan](topic:marks-and-bom).
- Setiap helaian ialah satu bahagian sahaja, tanpa simbol kimpalan; lukisan himpunan (dengan simbol kimpalan) dan lukisan susunan umum terdapat dalam [Lukisan](topic:drawings). Helaian tidak boleh disunting atau dianotasi dalam DetailCraft. Untuk menanda, buka PDF dalam app penanda PDF seperti MarkupCraft.
- Blok tajuk menyatakan "DetailCraft lab build — millimeters".
- Teks menggunakan fon Helvetica PDF piawai. Aksara di luar set Eropah Barat dicetak sebagai "?", dan bar status mengirakannya.

## Cetak

Buka PDF yang dimuat turun dalam pembaca PDF anda dan cetak pada 100% (bukan "fit to page") pada kertas bersaiz yang anda pilih jika anda mahu skala yang dinyatakan kekal sah. Pada helaian yang lebih kecil, skalakan dan bergantung pada dimensi.
