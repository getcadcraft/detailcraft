---
title: Fase
summary: Bagi model menjadi fase (urutan pemasangan atau pengiriman), tampilkan atau sembunyikan tiap fase, letakkan part dalam fase, dan beri nomor tanda per fase.
keywords: fase, pengelola fase, urutan pemasangan, pengiriman, lot, urutan, sembunyikan fase, tampilkan fase, filter, penomoran, awalan tanda, per fase
from: bae506f5
---

Fase adalah sekelompok part yang dibuat, dikirim, atau dipasang bersama: urutan pemasangan, pengiriman, atau lot. Setiap batang dan fondasi berada dalam satu fase. Sambungan berada dalam fase batang utamanya: balok dari pelat ujung, kolom dari pelat dasar. Model baru memiliki satu fase.

## Panel Fase

Bagian {{ui:Fase}} dari panel {{ui:Model}} mencantumkan setiap fase:

- kotak centang menampilkan atau menyembunyikan fase dalam tampilan;
- nomor, dan nama yang bisa Anda ketik (kosong = "Fase 2" dan seterusnya);
- jumlah part di dalamnya;
- tombol {{ui:×}} menghapus fase. Hanya fase kosong yang bisa dihapus: pindahkan part-nya ke fase lain terlebih dahulu.

{{ui:Tambah fase}} menambahkan nomor berikutnya dan menjadikannya fase tempat part baru masuk.

## Letakkan part dalam fase

- **Part baru:** {{ui:Part baru masuk ke}} memilih fase tempat setiap batang dan fondasi yang Anda letakkan mulai sekarang akan masuk.
- **Satu part:** pilih, lalu ubah {{ui:Fase}} di panel {{ui:Properti}}.
- **Banyak part:** pilih (dengan jendela, {{key:Shift}}+klik, {{key:Mod+A}}) lalu ubah {{ui:Fase}} di bagian atas panel {{ui:Properti}}. Tampil **Bervariasi** jika part berada di fase berbeda. Satu perubahan adalah satu langkah urungkan.

Salinan mempertahankan fase dari part asalnya, juga saat ditempel ke model lain (fase itu ditambahkan di sana).

## Tampilkan dan sembunyikan fase

Fase tersembunyi tidak digambar di tampilan, tidak dapat diklik atau ditangkap oleh jendela pilihan, dan {{key:Mod+A}} membiarkannya. Fase itu tetap ada dalam daftar material, laporan, gambar, dan setiap ekspor. Menyembunyikan hanya berlaku untuk tampilan: tidak disimpan dan tidak dapat diurungkan.

## Tanda per fase

Dengan **Beri nomor tanda per fase** aktif (aktif sejak awal) dan part berada di lebih dari satu fase, setiap fase diberi nomor sendiri dan tandanya diawali nomor fase: tanda part 1-b1, 2-b1, tanda rakitan 2-B1, fondasi 2-F1. Dua balok identik di fase berbeda kemudian memiliki tanda berbeda, karena dibuat dan dikirim pada waktu berbeda. Dengan hanya satu fase yang dipakai, tanda tidak memiliki awalan. Matikan untuk memberi nomor seluruh model sebagai satu, sehingga potongan identik berbagi tanda apa pun fasenya.

Fase ditulis ke dalam ekspor IFC (set properti DetailCraft, Fase).

:::note
Model dengan fase disimpan dalam format file 2 DetailCraft. Rilis 0.3 DetailCraft tidak dapat membukanya; build ini membuka file lama, dengan setiap part di fase 1.
:::
