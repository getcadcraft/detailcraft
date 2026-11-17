---
title: Tetapkan grid dan aras
summary: Taip garis grid, jarak antaranya dan aras tempat setiap anggota diletakkan.
keywords: grid, grid, paksi, garis grid, aras, ketinggian, tingkat, lantai, jarak, persediaan
from: 9cad233c
---

Setiap anggota dalam DetailCraft diletakkan pada persilangan grid di satu aras. Tetapkan grid dan aras dahulu; anda boleh menukarnya kemudian.

## Cara grid berfungsi di sini

- **Garis bernombor** berjalan satu arah, **garis berhuruf** arah yang satu lagi. Nama-nama itu hanyalah tabiat: label boleh menjadi apa-apa teks sehingga 8 aksara (1, 2, 3 atau A1, A2, atau 10, 20).
- Anda taip label dan jarak antaranya, bukan koordinat. Garis pertama bagi setiap set berada pada 0.
- Garis bernombor ialah garis x malar; garis berhuruf ialah garis y malar. Jadi rasuk dari grid 1 ke grid 2 berjalan sepanjang x, dan rasuk dari A ke B berjalan sepanjang y.
- Semua nilai dalam milimeter.

Model baharu bermula dengan garis bernombor 1 2 3 pada 6000 6000, garis berhuruf A B pada 6000, dan dua aras.

## Tetapkan grid

1. Dalam panel {{ui:Model}} di sebelah kiri, buka {{ui:Grids}} jika ia dilipat.
2. Dalam {{ui:Numbered lines}}, taip label dipisahkan dengan ruang, contohnya `1 2 3 4 5`.
3. Dalam medan {{ui:Spacings}} di bawahnya, taip satu jarak bagi setiap jurang, contohnya `6000 6000 7500 6000`. Empat jurang bagi lima garis.
4. Lakukan perkara yang sama dalam {{ui:Lettered lines}} dan {{ui:Spacings}}-nya, contohnya `A B C` dan `8000 8000`.
5. Pilih {{ui:Apply grids}}.

Bar status menyatakan "Grid dikemas kini." dan paparan zum ke grid baharu. Koma juga berfungsi sebagai pemisah.

Jika ada yang tidak sepadan, tiada apa berubah dan bar status menyatakan sebabnya, contohnya "Grid bernombor: beri satu jarak antara setiap pasangan garis (4)." Semakan lain: jarak mestilah milimeter positif, label mesti berbeza, dan paling banyak 60 garis bagi setiap arah.

:::note
Anggota mengekalkan koordinatnya apabila grid berubah. Jika anda menukar jarak selepas meletakkan keluli, keluli kekal di tempatnya dan tidak lagi berada pada grid. Tukar grid dahulu, atau alihkan anggota dengan menyunting koordinat hujungnya.
:::

## Tetapkan aras

1. Buka {{ui:Levels}} dalam panel {{ui:Model}}.
2. Setiap baris mempunyai nama aras dan ketinggiannya dalam milimeter. Sunting mengikut kehendak anda.
3. Pilih {{ui:Add level}} untuk baris lain. Ia dinamakan "Aras 3" (dan seterusnya) dan diletakkan 4000 mm di atas aras tertinggi; tukar kedua-duanya jika perlu.
4. Untuk mengalih keluar aras, pilih butang × di hujung barisnya.
5. Pilih {{ui:Apply levels}}.

Tiada apa berubah sehingga anda memilih {{ui:Apply levels}}. Aras disusun mengikut ketinggian apabila digunakan. Setiap aras memerlukan nama, dua aras tidak boleh berkongsi nama, dan anda mesti kekalkan sekurang-kurangnya satu aras.

Aras boleh berada di bawah sifar (ruang bawah tanah pada `-3500`) dan tidak perlu berjarak sama.

## Cara aras digunakan

- Tiang yang diletakkan pada aras naik ke aras seterusnya, atau ke aras yang anda pilih dalam {{ui:Up to}}.
- Rasuk dan plat diletakkan antara dua persilangan pada aras yang anda klik.
- Tapak asas diletakkan dengan bahagian atasnya pada aras yang anda klik.
- {{ui:Plan}} melihat ke bawah pada satu aras pada satu masa.
- Eksport IFC mencipta satu tingkat bangunan bagi setiap aras.

## Buat asal

Perubahan grid dan aras ialah suntingan seperti biasa: {{key:Mod+Z}} mengembalikan grid sebelumnya.

## Seterusnya

[Letak tiang, rasuk dan tupang](topic:place-members)
