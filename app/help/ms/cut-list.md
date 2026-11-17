---
title: Senarai potongan
summary: Susun rasuk, tiang, pengejang dan rasuk tangga ke dalam panjang stok dengan kerf gergaji, dan lihat berapa bar yang perlu dibeli serta pembaziran.
keywords: senarai potongan, nesting, panjang stok, bar, kerf, gergaji, baki, offcut, pembaziran, gabungan, pembelian, berbilang
from: 81d06ce5
---

Tab {{ui:Cut list}}, di bawah paparan, mengira cara memotong bahagian linear model daripada bar stok: berapa bar bagi setiap panjang untuk dibeli bagi setiap profil dan bahan, apa yang diletakkan pada setiap bar, dan pembaziran.

## Tetapkan stok

Di bahagian atas tab:

- **Panjang stok (mm):** panjang yang boleh dibeli, dipisahkan dengan ruang, contohnya `6000 12000`, atau bar 20 ft dan 40 ft sebagai `6096 12192`. Sehingga lapan.
- **Kerf gergaji (mm):** lebar yang diambil oleh setiap potongan (3 sebagai permulaan).
- **Pangkas hujung (mm):** potong hujung setiap bar sebelum keping pertama (0 sebagai permulaan).
- **Simpan baki dari (mm):** baki yang sekurang-kurangnya sepanjang ini dikembalikan ke stok; yang lebih pendek menjadi sisa (500 sebagai permulaan).

Tetapan ini disimpan dalam pelayar ini, sama seperti [tetapan](topic:settings) yang lain.

## Cara nesting berfungsi

- Setiap rasuk, tiang, pengejang dan rasuk tangga, mengikut tanda bahagian dan kiraan; plat dipotong daripada helaian dan tidak di-nesting di sini.
- Setiap profil dan bahan secara berasingan.
- Keping terpanjang dahulu, setiap satu ke bar pertama yang muat; bar baharu bermula sebagai panjang stok terpanjang. Kemudian setiap bar dibeli sebagai panjang stok terpendek yang masih boleh menampung potongannya.
- Setiap potongan mengambil kerf (tiada selepas potongan yang berakhir tepat di hujung bar); setiap bar kehilangan pangkas hujung.
- Keping yang lebih panjang daripada semua panjang stok disenaraikan di bawah **Lebih panjang daripada mana-mana stok**, tidak di-nesting: sambungkannya (lihat [Sambatan](topic:splices)) atau tambah panjang stok yang lebih panjang.

## Membaca hasilnya

- **Ringkasan:** bagi setiap profil dan bahan, keping, bar untuk dibeli (contohnya "2 × 12000, 1 × 6000"), jumlah m yang dibeli dan digunakan, dan pembaziran.
- **Bar dan potongannya:** setiap bar, panjang stoknya, potongannya sebagai tanda bahagian dan panjang, serta baki, sama ada disimpan atau sisa.

{{ui:Download CSV}} menyimpan kedua-dua jadual sebagai `<name> cut list.csv`.

DetailCraft tidak men-nesting plat ke dalam helaian, dan tidak mencampurkan profil atau bahan pada satu bar.
