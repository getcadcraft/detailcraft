---
title: Daftar potong
summary: Susun balok, kolom, bresing, dan ibu tangga ke panjang stok dengan kerf gergaji, lalu lihat berapa batang yang perlu dibeli serta sisanya.
keywords: daftar potong, penyusunan, panjang stok, batang, kerf, gergaji, potongan sisa, sisa, penggabungan, pembelian, beberapa
from: 81d06ce5
---

Tab {{ui:Cut list}}, di bawah tampilan, menghitung cara memotong part linier model dari batang stok: berapa batang tiap panjang yang perlu dibeli untuk setiap profil dan material, apa yang ada di setiap batang, dan berapa sisanya.

## Atur stok

Di bagian atas tab:

- **Panjang stok (mm):** panjang yang bisa Anda beli, dipisahkan spasi, misalnya `6000 12000`, atau batang 20 ft dan 40 ft sebagai `6096 12192`. Hingga delapan.
- **Kerf gergaji (mm):** lebar yang diambil setiap potongan (awalnya 3).
- **Pemangkasan ujung (mm):** potong ujung setiap batang sebelum potongan pertama (awalnya 0).
- **Simpan sisa dari (mm):** sisa yang panjangnya minimal segini dikembalikan ke stok; yang lebih pendek menjadi sampah (awalnya 500).

Nilai ini disimpan di peramban ini, seperti [pengaturan](topic:settings) lainnya.

## Cara penyusunannya

- Setiap balok, kolom, bresing, dan ibu tangga, menurut tanda part dan jumlahnya; pelat dipotong dari lembaran dan tidak disusun di sini.
- Setiap profil dan material secara terpisah.
- Potongan terpanjang lebih dulu, masing-masing ke batang pertama yang muat; batang baru dimulai sebagai panjang stok terpanjang. Lalu setiap batang dibeli sebagai panjang stok terpendek yang masih memuat potongannya.
- Setiap potongan mengambil kerf (tidak ada setelah potongan yang berakhir tepat di ujung batang); setiap batang kehilangan pemangkasan ujungnya.
- Potongan yang lebih panjang dari semua panjang stok didaftarkan di bawah **Lebih panjang dari stok mana pun**, dan tidak disusun: sambung (lihat [Sambungan lewatan](topic:splices)) atau tambahkan panjang stok yang lebih panjang.

## Membacanya

- **Ringkasan:** per profil dan material, potongannya, batang yang dibeli (misalnya "2 × 12000, 1 × 6000"), meter yang dibeli dan dipakai, serta sisanya.
- **Batang dan potongannya:** setiap batang, panjang stoknya, potongan-potongannya sebagai tanda part dan panjang, serta sisanya, apakah disimpan atau menjadi sampah.

{{ui:Download CSV}} menyimpan kedua tabel sebagai `<name> cut list.csv`.

DetailCraft tidak menyusun pelat ke dalam lembaran, dan tidak mencampur profil atau material pada satu batang.
