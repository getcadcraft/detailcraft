---
title: Buat gambar kerja
summary: Satu lembar per tanda part, dibuat sekaligus: pratinjau salah satunya atau unduh satu lembar atau seluruh set sebagai PDF dalam A4 hingga A1 atau ANSI B hingga D, dengan lubang, coak, dimensi, dan kepala gambar.
keywords: gambar kerja, semua part, batch, seluruh set, gambar satu part, gambar fabrikasi, pdf, gambar detail, gambar bagian, cetak
from: d25fe035
---

DetailCraft membuat satu lembar per tanda part, untuk setiap balok, kolom, bresing, dan pelat dalam model, sekaligus: Anda tidak perlu memilihnya satu per satu. Potongan identik berbagi tanda, sehingga juga berbagi lembar. Lembar dibuat seketika dari model; tidak disimpan atau diedit.

## Buat seluruh set

1. Pilih {{ui:Shop drawing}} di grup {{ui:Output}}. Tidak perlu ada yang dipilih. Jika sebuah part dipilih, jendela akan terbuka pada lembar part tersebut. Di panel {{ui:Properties}}, tombol yang sama bernama {{ui:Shop drawing}} untuk batang dan {{ui:Plate drawing}} untuk sambungan.
2. Pratinjau terbuka, berjudul dengan tanda part, misalnya "Gambar kerja b1". Daftar pertama di samping judul memuat setiap tanda part beserta profil, panjang, dan jumlahnya: pilih satu untuk melihat lembarnya. Daftar kedua mengubah ukuran lembar; seluruh set dibuat ulang pada ukuran itu (lihat [Gambar tata letak umum dan rakitan](topic:drawings#choose-the-sheet-size)).
3. Pilih {{ui:Download all}} (tombol menampilkan jumlah lembar) untuk satu PDF dengan satu halaman per tanda part, `<name> Shop drawings.pdf`. Setiap lembar menulis "Lembar 3 dari 42" di kepala gambarnya. Atau pilih {{ui:Download this sheet}} untuk lembar yang sedang Anda lihat, `<name> <mark>.pdf`.
4. Tutup pratinjau dengan × atau {{key:Esc}}.

Jika {{ui:Shop drawing}} tidak aktif (abu-abu), model belum memiliki part.

## Isi lembar

Untuk profil I:

- **Tampak**, melihat ke arah badan: part dengan coaknya, lubang badan sebagai lingkaran, dan lubang sayap sebagai garis tersembunyi (putus-putus).
- **Denah sayap atas**, dilihat dari atas, saat sayap mana pun memiliki lubang. Lubang sayap bawah ditampilkan putus-putus.
- **Potongan** melalui profil.
- **Dimensi:** posisi lubang yang berantai sepanjang part ditambah panjang keseluruhan, tinggi lubang badan, gauge, dan ukuran coak.
- **Daftar lubang:** setiap kelompok lubang, misalnya "8 x Ø22 di sayap atas".
- **Las**, jika part memiliki pelat yang dilas padanya.
- **Kepala gambar:** tanda part, tanda rakitan, profil, material, panjang, jumlah, berat masing-masing dan total, nama model, dan tanggal.

Untuk kanal, siku, atau penampang berongga, lembarnya sama, melihat ke arah badan atau sisi: dinding tabung ditampilkan sebagai garis tersembunyi (putus-putus), dan potongan menunjukkan tebal dinding.

Untuk pelat: muka pelat dengan lubangnya, dan tepinya sebagai potongan.

## Skala

Skala dipilih dari daftar (1:1 sampai 1:200) agar part muat di lembar. Part yang panjang dan dangkal akan terlalu tipis untuk dibaca pada satu skala, jadi saat kedalaman di kertas kurang dari 30 mm, kedalaman digambar pada skala yang lebih besar daripada panjangnya. Judul tampilan akan menyatakannya, misalnya "panjang 1:20, kedalaman 1:5 (tidak dalam satu skala; dimensi yang berlaku)". Selalu baca ukuran dari dimensi, bukan dengan mengukur lembar.

## Hal yang perlu diketahui

- Jumlah adalah banyaknya part dengan tanda tersebut dalam model. Tanda dapat berubah nomornya setelah perubahan; lihat [Periksa tanda dan daftar material](topic:marks-and-bom).
- Setiap lembar adalah satu part tersendiri, tanpa simbol las; gambar rakitan (dengan simbol las) dan gambar tata letak umum ada di [Gambar](topic:drawings). Lembar tidak dapat diedit atau dianotasi di DetailCraft. Untuk memberi anotasi, buka PDF di aplikasi markup PDF seperti MarkupCraft.
- Kepala gambar menulis "DetailCraft lab build — milimeter".
- Teks memakai font Helvetica PDF standar. Karakter di luar himpunan karakter Eropa Barat dicetak sebagai "?", dan bilah status menghitungnya.

## Cetak

Buka PDF yang diunduh di penampil PDF Anda dan cetak pada 100% (tanpa "pas ke halaman") di kertas dengan ukuran yang Anda pilih, jika Anda ingin skala yang tertera tetap berlaku. Pada lembar yang lebih kecil, skalakan dan andalkan dimensinya.
