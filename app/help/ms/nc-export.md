---
title: Hantar fail NC ke bengkel
summary: Eksport fail NC DSTV untuk setiap tanda bahagian (bentuk I, kanal, sudut, HSS, plat), dizip, dan semak sebelum sampai ke mesin.
keywords: nc, nc1, dstv, cnc, mesin, talian rasuk, talian gerudi, pemotongan plat, eksport, fabrikasi, zip
from: 598b6091
---

DetailCraft menulis satu fail NC DSTV (`.nc1`) bagi setiap tanda bahagian, untuk bentuk I, kanal, sudut, HSS segi empat tepat dan bulat, dan plat, lalu memampatkannya bersama dalam zip. Talian rasuk dan mesin plat membaca fail ini untuk bergergaji, menggerudi dan memotong.

## Eksport

1. Kosongkan tab {{ui:Masalah}} dahulu: sambungan yang tidak dapat dibina tidak menambah lubang.
2. Simpan model ({{key:Mod+S}}), supaya fail NC sepadan dengan model yang disimpan.
3. Pilih {{ui:Fail NC}} dalam kumpulan {{ui:Output}}.
4. Pelayar memuat turun `<name> NC.zip`. Bar status memberitahu berapa banyak fail yang dikandungnya, dan menyenaraikan mana-mana tanda yang tidak ditulisnya (sudut atau tiub bulat dengan takuk).

Dalam zip, setiap fail dinamakan mengikut tanda bahagiannya: `b1.nc1`, `c1.nc1`, `p1.nc1` … Zip itu tidak dimampatkan dan boleh dibuka dengan mana-mana alat zip.

Jika model tidak mempunyai bahagian, bar status memberitahu demikian.

## Kandungan setiap fail

- **Pengepala (ST):** nama model sebagai pesanan, tanda bahagian sebagai lukisan dan keping, fasa 1, gred bahan, kuantiti, profil dan dimensinya, jisim per meter dan luas cat per meter. Potongan gergaji adalah tegak.
- **Kontur luar (AK):** garis web dengan mana-mana takuk dipotong, dan setiap garis sayap dipendekkan di tempat takuk mengeluarkannya.
- **Lubang (BO):** setiap lubang dengan mukanya, kedudukan dan diameternya, termasuk lubang yang dibuat oleh plat hujung dan plat tapak.

Medan demi medan, dengan peraturan muka dan koordinat: [Medan fail NC](topic:nc1-fields).

## Apa yang tidak ditulis

- Sudut dan tiub bulat dengan takuk: tiada fail NC. Tanda mereka disenaraikan dalam bar status.
- Lubang dalam tiub bulat (DetailCraft tidak membuat mana-mana).
- Bevel, kontur dalam, penandaan bahagian (scribing) dan sudut gergaji selain tegak.
- Lubang berslot (DetailCraft hanya mempunyai lubang bulat).

## Semak sebelum pemesinan

Fail NC DetailCraft dibaca semula oleh suite ujiannya sendiri, tetapi ia belum dijalankan pada mesin bengkel anda.

1. Buka fail dalam pemapar NC bengkel anda atau perisian mesin, dan bandingkannya dengan lukisan bengkel.
2. Semak satu bahagian bagi setiap jenis pada mesin sebelum menjalankan satu kelompok.
3. Semak cara perisian anda membaca koordinat y sayap dan muka kanal: DetailCraft mengukur y sayap dari tepi belakang, dan meletakkan kanal terlentang seperti yang dilukis oleh standard (lihat [Medan fail NC](topic:nc1-fields#faces-and-coordinates)).
