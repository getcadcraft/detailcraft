---
title: Atur grid dan level
summary: Ketik garis grid, jaraknya, dan level tempat setiap batang ditempatkan.
keywords: grid, grid, sumbu, garis grid, level, elevasi, lantai, lantai bangunan, jarak, pengaturan
from: 9cad233c
---

Setiap batang di DetailCraft ditempatkan pada perpotongan grid di sebuah level. Atur grid dan level terlebih dahulu; Anda dapat mengubahnya nanti.

## Cara kerja grid di sini

- **Garis bernomor** berjalan ke satu arah, **garis berhuruf** ke arah lainnya. Namanya hanya kebiasaan: label dapat berupa teks apa pun hingga 8 karakter (1, 2, 3 atau A1, A2, atau 10, 20).
- Anda mengetik label dan jarak di antaranya, bukan koordinat. Garis pertama di setiap kelompok berada di 0.
- Garis bernomor adalah garis dengan x konstan; garis berhuruf adalah garis dengan y konstan. Jadi balok dari grid 1 ke grid 2 berjalan sepanjang x, dan balok dari A ke B berjalan sepanjang y.
- Semua nilai dalam milimeter.

Model baru dimulai dengan garis bernomor 1 2 3 pada 6000 6000, garis berhuruf A B pada 6000, dan dua level.

## Mengatur grid

1. Di panel {{ui:Model}} sebelah kiri, buka {{ui:Grid}} jika sedang terlipat.
2. Di {{ui:Garis bernomor}}, ketik label dipisahkan spasi, misalnya `1 2 3 4 5`.
3. Di isian {{ui:Jarak}} di bawahnya, ketik satu jarak untuk setiap celah, misalnya `6000 6000 7500 6000`. Empat celah untuk lima garis.
4. Lakukan hal yang sama di {{ui:Garis berhuruf}} dan {{ui:Jarak}}-nya, misalnya `A B C` dan `8000 8000`.
5. Pilih {{ui:Terapkan grid}}.

Bilah status menampilkan "Grid diperbarui." dan tampilan melakukan zoom ke grid baru. Koma juga berfungsi sebagai pemisah.

Jika ada yang tidak cocok, tidak ada yang berubah dan bilah status menjelaskan alasannya, misalnya "Grid bernomor: berikan satu jarak di antara setiap pasangan garis (4)." Pemeriksaan lainnya: jarak harus berupa milimeter positif, label harus berbeda, dan paling banyak 60 garis di setiap arah.

:::note
Batang mempertahankan koordinatnya saat grid berpindah. Jika Anda mengubah jarak setelah memasang baja, baja tetap di tempatnya dan tidak lagi berada di grid. Ubah grid terlebih dahulu, atau pindahkan batang dengan mengedit koordinat ujungnya.
:::

## Mengatur level

1. Buka {{ui:Level}} di panel {{ui:Model}}.
2. Setiap baris memiliki nama level dan elevasinya dalam milimeter. Edit sesuai keinginan Anda.
3. Pilih {{ui:Tambah level}} untuk baris lain. Baris itu diberi nama "Level 3" (dan seterusnya) dan ditempatkan 4000 mm di atas level tertinggi; ubah keduanya jika diperlukan.
4. Untuk menghapus level, pilih tombol × di ujung barisnya.
5. Pilih {{ui:Terapkan level}}.

Tidak ada yang berubah sampai Anda memilih {{ui:Terapkan level}}. Level diurutkan menurut elevasi saat diterapkan. Setiap level harus memiliki nama, dua level tidak boleh memiliki nama yang sama, dan Anda harus mempertahankan minimal satu level.

Level dapat berada di bawah nol (ruang bawah tanah di `-3500`) dan tidak harus berjarak merata.

## Cara level digunakan

- Kolom yang ditempatkan pada sebuah level berjalan ke atas sampai level berikutnya, atau sampai level yang Anda pilih di {{ui:Hingga}}.
- Balok dan pelat ditempatkan di antara dua perpotongan pada level yang Anda klik.
- Fondasi ditempatkan dengan bagian atasnya di level yang Anda klik.
- {{ui:Denah}} melihat ke bawah pada satu level sekaligus.
- Ekspor IFC membuat satu lantai bangunan untuk setiap level.

## Urungkan

Perubahan grid dan level adalah pengeditan seperti biasa: {{key:Mod+Z}} mengembalikan grid sebelumnya.

## Berikutnya

[Pasang kolom, balok, dan bresing](topic:place-members)
