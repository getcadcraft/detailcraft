---
title: Terokai bingkai sampel
summary: Buka bingkai dua bay terbina dalam dan gunakannya untuk mempelajari apa yang DetailCraft hasilkan, daripada tanda hingga fail NC.
keywords: sampel, contoh, demo, bingkai, pelajari, lawatan, cuba
from: 5c5944dd
---

Bingkai sampel ialah model kecil dan lengkap: setiap jenis benda yang DetailCraft bina muncul sekurang-kurangnya sekali. Ia cara terpantas untuk mempelajari aplikasi dan menguji eksport sebelum anda bergantung kepadanya.

## Buka

1. Pilih {{ui:Sampel}} dalam kumpulan {{ui:Fail}}.
2. Jika model semasa anda mempunyai perubahan yang belum disimpan, pilih {{ui:Simpan dahulu}} atau {{ui:Buang perubahan}}.
3. Bar status menyatakan "Bingkai sampel: 6 tiang dengan plat tapak, 4 rasuk dengan plat hujung, satu tupang, 7 tapak asas dengan tetulang."

Sampel dibuka sebagai model baharu bernama "Bingkai sampel". Ia tidak mengubah apa-apa lagi, dan tiada apa untuk dibuat asal.

## Apa yang ada di dalamnya

- **Grid** 1, 2, 3 pada 6000 mm dan A, B pada 7000 mm. **Aras** Aras 1 pada 0 dan Aras 2 pada 4000.
- **Enam tiang**, W12x50, dari Aras 1 ke Aras 2 pada setiap persilangan, setiap satu di atas plat tapak 25 mm dengan empat rod sauh.
- **Empat rasuk**, W16x26, pada Aras 2 sepanjang garis grid A dan B, bahagian atas keluli pada aras, dengan plat hujung bolt rata di kedua-dua hujung (lapan semuanya).
- **Satu tupang**, HSS4x4x1/4, dari A/1 pada Aras 1 naik ke A/2 pada Aras 2.
- **Enam tapak asas pad**, 2000 x 2000 x 600, satu di bawah setiap tiang, dengan hamparan bawah berkait pada kedua-dua arah.
- **Satu lagi tapak asas** di sebelah bingkai, 2400 x 1800 x 600, dengan enam bar permulaan berkait yang berdiri untuk tiang konkrit.

## Perkara untuk dicuba

1. Klik rasuk. Baca {{ui:Tanda bahagian}}, {{ui:Himpunan}}, {{ui:Panjang potongan}} dan {{ui:Potong balik}}: panjang potongan lebih pendek daripada jarak grid 6000 mm kerana setiap plat hujung memotong rasuk ke belakang sebanyak separuh kedalaman tiang ditambah tebal plat.
2. Klik tiang. Di bawah {{ui:Lubang}} ia menyenaraikan lubang yang dibuat oleh plat hujung pada flensnya ("8 lubang daripada sambungan"; tiang tengah mempunyai 16, satu set pada setiap flens).
3. Dalam senarai {{ui:Tanda bahagian}} di sebelah kiri, lihat bahawa keempat-empat rasuk berkongsi satu tanda: ia adalah keping keluli yang sama. Tiang sudut juga berkongsi tanda, walaupun lubangnya menghadap arah bertentangan, kerana tiang yang dipusingkan hujung ke hujung ialah keping yang sama. Tiang tengah, dengan lubang di kedua-dua flens, mendapat tanda lain.
4. Klik plat hujung (atau salah satu bolt-nya). Panel {{ui:Sifat}} memaparkan tetapan plat, bolt dan kimpalan, bolt yang dibuatnya (dengan panjangnya dikira daripada cengkaman) dan sebarang amaran jarak tepi.
5. Buka tab {{ui:Senarai bahan}}. Bahagian, himpunan, serta bolt dan rod sauh disenaraikan dengan beratnya. Anda sepatutnya melihat enam tanda bahagian: c1 (dua tiang tengah) dan c2 (empat tiang sudut), kedua-duanya W12x50 pada 3975 mm; b1, empat rasuk W16x26 pada 5650 mm; br1, tupang; p1, lapan plat hujung PL20x180; dan p2, enam plat tapak PL25x400. Pengikat ialah 64 bolt 20 x 70 A325 dan 24 rod sauh 20 x 575.
6. Buka tab {{ui:Jadual lenturan}}. Enam tapak asas yang serupa berkongsi tanda bar; tapak asas tiang menambah tandanya sendiri.
7. Klik tupang dan lihat kumpulan {{ui:Output}}: {{ui:Lukisan bengkel}} dilumpuhkan (kelabu), kerana setakat ini lukisan bengkel hanya meliputi bentuk-I dan plat.
8. Pilih {{ui:Fail NC}}. Zip itu mengandungi satu fail untuk setiap tanda bentuk-I dan plat; bar status menyenaraikan tanda tupang sebagai tidak ditulis.
9. Pilih {{ui:IFC}} dan buka fail dalam mana-mana pemapar IFC untuk menyemak cara perisian lain anda membacanya.

## Gunakannya sebagai titik permulaan

Sampel ialah model biasa. Ubahnya, kemudian namakan semula dalam medan {{ui:Nama}} dan simpan di bawah nama barunya dengan {{key:Mod+S}}.
