---
title: Kirim file NC ke bengkel
summary: Ekspor file NC DSTV untuk setiap tanda part (profil I, kanal, siku, HSS, pelat), di-zip, dan periksa sebelum sampai ke mesin.
keywords: nc, nc1, dstv, cnc, mesin, lini balok, lini bor, pemotongan pelat, ekspor, fabrikasi, zip
from: 598b6091
---

DetailCraft menulis satu file DSTV NC (`.nc1`) untuk setiap tanda part, untuk profil I, kanal, siku, HSS persegi dan bundar, serta pelat, lalu mengarsipkannya bersama-sama dalam satu zip. Lini balok dan mesin pelat membaca file ini untuk menggergaji, mengebor, dan memotong.

## Ekspor

1. Kosongkan tab {{ui:Masalah}} terlebih dahulu: sambungan yang tidak dapat dibuat tidak menambahkan lubang.
2. Simpan model ({{key:Mod+S}}), agar file NC sesuai dengan model yang tersimpan.
3. Pilih {{ui:File NC}} di grup {{ui:Keluaran}}.
4. Peramban mengunduh `<name> NC.zip`. Bilah status menyebutkan berapa file yang ada di dalamnya, dan mendaftar tanda mana pun yang tidak ditulis (siku atau pipa bundar dengan coak).

Di dalam zip, setiap file dinamai menurut tanda part-nya: `b1.nc1`, `c1.nc1`, `p1.nc1` … Zip tidak dikompresi dan dapat dibuka dengan alat zip apa pun.

Jika model tidak memiliki part, bilah status akan menyebutkannya.

## Isi tiap file

- **Header (ST):** nama model sebagai pesanan, tanda part sebagai drawing dan piece, fase 1, mutu baja, kuantitas, profil beserta dimensinya, massa per meter, dan luas cat per meter. Potongan gergaji berbentuk persegi.
- **Kontur luar (AK):** garis badan dengan takik untuk setiap coak, dan setiap garis flens yang dipendekkan di tempat coak menghilangkannya.
- **Lubang (BO):** setiap lubang dengan mukanya, posisinya, dan diameternya, termasuk lubang yang dibuat oleh pelat ujung dan pelat dasar.

Isian demi isian, dengan aturan muka dan koordinat: [Isian file NC](topic:nc1-fields).

## Yang tidak ditulis

- Siku dan pipa bundar dengan coak: tidak ada file NC. Tanda mereka tercantum di bilah status.
- Lubang di pipa bundar (DetailCraft tidak membuatnya).
- Miring tepi, kontur dalam, penandaan part (scribing), dan sudut gergaji selain persegi.
- Lubang slot (DetailCraft hanya memiliki lubang bundar).

## Periksa sebelum pemesinan

Isi file NC DetailCraft dibaca kembali oleh rangkaian pengujiannya sendiri, tetapi file itu belum pernah dijalankan di mesin bengkel Anda.

1. Buka file di penampil NC atau perangkat lunak mesin bengkel Anda, dan bandingkan dengan gambar kerja.
2. Periksa satu part dari setiap jenis di mesin sebelum menjalankan satu batch.
3. Periksa bagaimana perangkat lunak Anda membaca koordinat y flens dan muka kanal: DetailCraft mengukur y flens dari tepi belakang, dan membaringkan kanal di punggungnya seperti yang digambar standar (lihat [Isian file NC](topic:nc1-fields#faces-and-coordinates)).
