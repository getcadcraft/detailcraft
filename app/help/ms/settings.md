---
title: Tetapan DetailCraft
summary: Mulakan ahli baharu sebagai bentuk AS atau Eropah, tetapkan sejauh mana Pendua mengalihkan salinan, pilih sama ada salinan membawa sambungannya, dan tunjuk atau sembunyikan bolt dalam pandangan 3D.
keywords: tetapan, keutamaan, saiz helaian, saiz kertas, lukisan, pilihan, keluli, aisc, en, eropah, bentuk AS, bentuk Eropah, bentuk metrik, profil lalai, gred, s355, a992, ofset pendua, ofset tampal, salin sambungan, bolt, rod sauh, sembunyikan bolt, tetap semula
from: e46cea57
---

Buka {{ui:Tetapan}} dengan ikon gear dalam bar aplikasi atau {{key:Mod+,}}. Tab pertama, {{ui:DetailCraft}}, memuatkan tetapan yang tergolong dalam aplikasi ini; {{ui:Umum}} memuatkan tetapan yang dikongsi oleh setiap aplikasi CadCraft (tema, bar alat, panel). Tetapan DetailCraft hanya wujud dalam aplikasi: anda mengubahnya di sini, ia berkuat kuasa serta-merta, dan pelayar ini mengingatinya. Ia tidak disimpan dalam fail model anda.

## Ahli baharu

Profil dan gred yang dimulakan oleh alat peletakan:

| Alat | Bentuk AS (AISC), A992 | Bentuk Eropah (EN), S355 |
|---|---|---|
| {{ui:Rasuk}} | W16x26, A992 | IPE300, S355 |
| {{ui:Tiang}} | W12x50, A992 | HEB200, S355 |
| {{ui:Tupang}} | HSS6x6x1/4, A500 Gr C | HEA160, S355 |
| {{ui:Plat}} | A36 | S355 |

Bentuk AS ialah permulaannya. Pilihan Eropah menggunakan HEA160 untuk tupang kerana katalog EN DetailCraft belum mempunyai bahagian berongga ([Katalog profil](topic:profile-catalog)). Anda tetap boleh memilih mana-mana profil dan gred untuk bahagian seterusnya dalam panel {{ui:Sifat}} semasa alat peletakan dihidupkan. Ahli yang sudah berada dalam model mengekalkan profil dan gred sendiri.

## Pendua dan tampal

- **Ofset (mm)**: x, y dan z. {{ui:Pendua}} ({{key:Mod+D}}) meletakkan salinan sejauh ini dari yang asal, dan borang {{ui:Tampal mengikut ofset (mm, dari yang asal)}} bermula dengannya. Ia bermula pada 6000, 0, 0: satu bay 6 m sepanjang grid bernombor. Tetapkannya kepada jarak bay anda, atau kepada ketinggian aras dalam z untuk menyalin lantai ke atas.
- **{{ui:Salin plat hujung dan plat tapak bersama ahlinya}}** (dihidupkan pada permulaan): sambungan ikut serta dengan salinan hanya apabila setiap ahli yang disambungnya turut disalin. Nyahtanda untuk menyalin ahli dan tapak asas tanpa sambungannya, contohnya untuk mencuba sambungan yang berbeza pada salinan.

Lihat [Salin, tampal dan pendua](topic:copy-paste).

## Pandangan 3D

**Tunjukkan bolt dan rod sauh** (dihidupkan pada permulaan). Nyahtanda untuk menyembunyikannya dalam pandangan dan melihat lubang serta plat bagi sambungan yang sibuk. Bolt tersembunyi tidak boleh diklik; klik plat untuk memilih sambungan. Senarai bahan, lukisan dan setiap eksport tetap menyertakan setiap bolt dan rod.

## Penunjuk sudut

Apa yang dipaparkan di sudut pandangan 3D: **ViewCube** (permulaan; kanan atas — klik muka, tepi atau sudut untuk melihat dari situ, seret untuk mengorbit, seret cincin kompasnya untuk memusingkan model), **Ikon paksi** (penanda X, Y, Z kecil di kiri bawah yang berpusing mengikut pandangan: X merah, Y hijau, Z biru) atau **Tiada**. Hanya dalam {{ui:3D}}; {{ui:Pelan}} dan {{ui:Dongakan}} tidak memaparkan kedua-duanya. Lihat [ViewCube](topic:view-cube).

## Tetap semula

{{ui:Tetapkan semula tetapan DetailCraft}} di bahagian bawah kotak dialog mengembalikan ini kepada permulaan (bentuk AS, ofset 6000, 0, 0, sambungan disalin, bolt ditunjukkan), bersama yang {{ui:Umum}}.

## Lukisan

**Saiz helaian**: lukisan helaian dan lukisan bengkel dibuat pada, mendatar: A4, A3 (permulaan), A2, A1, ANSI B, ANSI C atau ANSI D. Tetingkap {{ui:Lukisan}} dan lukisan bengkel mempunyai senarai yang sama. Lihat [Lukisan susunan umum dan pemasangan](topic:drawings).

## Tetulang

- **Nama bar ASTM**: #3 hingga #11, atau #10 hingga #36 metrik lembut untuk bar yang sama.
- **Kod bentuk jadual lenturan**: S, L, U DetailCraft; jenis ACI 315; atau kod bentuk BS 8666. Lihat [Rujukan tetulang](topic:rebar-reference).

## Seret untuk memilih

**Segi empat tepat** (seperti sebelum ini) atau **Lasso**: garis bebas tangan, dengan {{key:Space}} bertukar antara dalam, sentuh dan pagar semasa anda menyeret. Lihat [Pilih dengan tetingkap](topic:select-and-change#select-with-a-window).
