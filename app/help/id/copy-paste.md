---
title: Salin, tempel, dan duplikat
summary: Pilih beberapa part, salin bersama lubang, cope, dan sambungannya, lalu tempel di perpotongan grid, pada offset, di tempat yang sama, atau di tab lain. Potong, duplikat, hapus, dan pilih semua.
keywords: salin, tempel, potong, duplikat, papan klip, tempel di tempat yang sama, pilih semua, batalkan pilihan, pilih banyak, shift klik, beberapa, ulangi satu bay, salin satu frame, offset, hapus beberapa, menu edit, menu lainnya
from: f25f1829
---

Grup {{ui:Edit}} pada bilah alat memiliki {{ui:Undo}}, {{ui:Redo}}, {{ui:Copy}}, dan {{ui:Paste}}. Menu {{ui:More}} berisi sisanya: {{ui:Cut}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:Paste in place}}, {{ui:Duplicate}}, {{ui:Delete}}, {{ui:Select all}}, dan {{ui:Select none}}, masing-masing dengan pintasannya. Tombol atau item menu yang tidak dapat dijalankan saat ini akan diredupkan; arahkan kursor ke atasnya untuk membaca alasannya (misalnya "belum ada yang disalin").

Setiap tempel, potong, duplikat, dan hapus adalah satu langkah: satu {{key:Mod+Z}} membatalkan semuanya.

## Pilih beberapa part

- Klik part untuk memilihnya. Tahan {{key:Shift}} (atau {{key:Ctrl}}, atau {{key:Mod}}) lalu klik part lain untuk menambahkannya; klik part yang sudah dipilih dengan cara yang sama untuk mengeluarkannya.
- {{key:Mod+A}} atau {{ui:Select all}} memilih setiap batang, sambungan, dan pondasi.
- {{key:Esc}} atau {{ui:Select none}} menghapus pilihan.

Dengan beberapa hal dipilih, panel {{ui:Properties}} diberi judul "4 dipilih" (atau sesuai jumlahnya) dan mendaftar batang menurut jenisnya, sambungan, pondasi, serta berat baja kotor, dengan tombol {{ui:Copy}}, {{ui:Duplicate}}, dan {{ui:Delete}}.

## Salin

1. Pilih batang dan pondasi yang Anda inginkan.
2. Pilih {{ui:Copy}} atau tekan {{key:Mod+C}}.

Yang ikut tersalin:

- Setiap batang secara utuh: profil, material, ujung, posisi, rotasi, nama, lubang, dan cope. Profil kustom yang dipakainya juga ikut disalin.
- Setiap pondasi secara utuh: ukuran, beton, tulangan bawah, dan besi stek.
- Pelat ujung dan pelat dasar, tetapi hanya jika setiap batang yang dihubungkan sambungan ikut disalin: pelat ujung balok memerlukan balok dan kolomnya. Bilah status menyebutkan berapa sambungan yang tertinggal. Untuk sengaja tidak menyertakan sambungan, hapus centang **Salin pelat ujung dan pelat dasar bersama batangnya** di [pengaturan DetailCraft](topic:settings).

Sambungan saja tidak dapat disalin; pilih batangnya saja. Untuk memberi sambungan yang sama pada sambungan lain, gunakan {{ui:Similar}} (lihat [Pelat ujung](topic:end-plates#copy-it-to-every-similar-joint)).

Salinan tetap tersimpan di peramban ini sampai Anda menyalin sesuatu yang lain. Tab atau jendela DetailCraft lain di peramban yang sama dapat menempelkannya, sehingga Anda dapat menyalin satu frame dari satu model dan menempelkannya ke model lain.

## Tempel di perpotongan grid

1. Pilih {{ui:Paste}} atau tekan {{key:Mod+V}}.
2. Gerakkan penunjuk di atas tampilan. Garis putus-putus salinan mengikuti perpotongan grid yang paling dekat dengan penunjuk.
3. Klik sebuah perpotongan. Titik dasar salinan (sudut terendahnya: x, y, dan z terkecil dari semua yang disalin) diletakkan di sana.

Part yang ditempel dipilih setelahnya, sehingga Anda dapat menempel lagi di tempat lain, atau mengubahnya. {{key:Esc}} membatalkan tempel; salinan tetap ada di papan klip. {{ui:Plan}} dan {{ui:Elevation}} memudahkan Anda mengenai perpotongan yang tepat.

:::tip
Untuk mengulang satu bay, pilih batang bay tersebut (atau semuanya dengan {{key:Mod+A}}), salin, tempel, lalu klik perpotongan satu bay ke samping dari tempat sudut terendah salinan berada.
:::

## Tempel dari keyboard

Saat menempel, panel {{ui:Properties}} menampilkan isi papan klip dan dua formulir:

- {{ui:Paste by offset (mm, from the original)}}: ketik x, y, dan z, lalu pilih {{ui:Paste at this offset}}. Formulir ini dimulai dengan offset dari [pengaturan DetailCraft](topic:settings).
- {{ui:Paste onto a grid intersection}}: pilih grid huruf, grid angka, dan level, lalu pilih {{ui:Paste here}}. Titik dasar diletakkan di sana.

## Tempel di tempat yang sama

{{ui:Paste in place}} ({{key:Mod+Shift+V}}) menempatkan salinan tepat pada koordinat tempat ia disalin. Gunakan setelah {{ui:Cut}}, atau untuk membawa part dari model lain ke tempat yang sama. Jika aslinya masih ada, salinan berada di atasnya dan bilah status memberi peringatan: pindahkan salinan melalui {{ui:Start}} dan {{ui:End}} di {{ui:Properties}}, atau batalkan.

## Duplikat

{{ui:Duplicate}} ({{key:Mod+D}}) menyalin pilihan dan langsung menempelkannya, digeser sesuai offset di [pengaturan DetailCraft](topic:settings) (awalnya 6000 mm sepanjang x). Papan klip tidak berubah. Hasil salinan dipilih setelahnya, sehingga menekan {{key:Mod+D}} lagi membuat duplikat berikutnya dari situ.

## Potong dan hapus

- {{ui:Cut}} ({{key:Mod+X}}) menyalin pilihan, lalu menghapusnya. Tempel di tempat yang seharusnya.
- {{ui:Delete}} ({{key:Delete}} atau {{key:Backspace}}) menghapus pilihan. Menghapus batang juga menghapus sambungannya.

## Tanda setelah tempel

Tanda part dan tanda rakitan tidak pernah disimpan; DetailCraft memberi nomor ulang dari model setelah setiap perubahan ([Cara tanda diberikan](topic:mark-rules)). Jadi:

- Salinan yang merupakan potongan yang sama dengan aslinya (profil, mutu, panjang potong, lubang, dan cope yang sama) memakai tanda yang sama dengan aslinya, dan jumlah di {{ui:Part marks}} serta daftar material naik.
- Salinan yang ternyata berbeda mendapat tanda sendiri. Balok yang ditempel tanpa pelat ujungnya, misalnya, tidak dipotong, sehingga itu potongan yang berbeda. Tanda diberi nomor ulang di seluruh model, sehingga nomor part lain juga dapat berubah.

Setiap batang, lubang, cope, sambungan, dan pondasi yang ditempel mendapat id baru, sehingga tidak ada yang di dalam model dibagi antara salinan dan aslinya.

## Jika papan klip ditolak

Isi papan klip diperiksa seteliti file model yang Anda buka: apa pun yang bukan part DetailCraft yang valid dibuang, dan bilah status menyebutkan apa yang terjadi. Papan klip yang diisi oleh DetailCraft yang lebih baru, atau oleh sesuatu yang lain, ditolak dengan pesan dan tidak ada yang ditempel. Jika jendela privat tidak dapat menyimpan salinan di penyimpanan peramban, salinan tetap berfungsi di tab tersebut.
