---
title: Tambah plat tapak dan bolt sauh
summary: Letakkan plat tapak yang dikimpal dengan empat bolt sauh di bawah tiang, tetapkan saiznya, dan salin ke setiap tiang yang serupa.
keywords: plat tapak, baseplate, bolt sauh, bolt tapak, bolt penahan, tapak tiang, bolt asas, serupa
from: 619ebc64
---

Sambungan plat tapak meletakkan plat di bawah tiang, memotong tiang pendek sebanyak tebal plat, mengimpal kedua-duanya, dan menambah empat bolt sauh melalui lubang dalam plat.

:::warning
Saiz ini ialah nilai permulaan, bukan reka bentuk. DetailCraft tidak menyemak galas, kekuatan bolt sauh atau kedalaman tertanam.
:::

## Tambah plat tapak

1. Pilih {{ui:Pilih}} ({{key:V}}) dan klik tiang. Tiang mesti tegak.
2. Pilih {{ui:Plat tapak}} dalam kumpulan {{ui:Sambung}}, atau {{ui:Tambah plat tapak}} dalam panel {{ui:Sifat}}.
3. Bar status menyatakan "Plat tapak ditambah dengan empat bolt sauh." Sambungan baharu dipilih.

Satu tiang hanya boleh mempunyai satu plat tapak. Jika sudah ada, bar status menyatakan "Tiang ini sudah mempunyai plat tapak."

## Tukar

Pilih plat tapak (klik plat atau bolt sauh). Di bawah {{ui:Plat, bolt dan kimpalan (mm)}}:

| Tetapan | Lalai | Fungsi |
|---|---|---|
| Tebal plat | 25 | Tiang dipendekkan sebanyak ini |
| Panjang plat | 450 | Sepanjang kedalaman tiang |
| Lebar plat | 400 | Merentasi tiang |
| Diameter bolt sauh | 20 | Saiz bolt sauh |
| Diameter lubang | 33 | Lubang dalam plat |
| Gred bolt | F1554 Gr 36 | Gred bolt sauh, sebagai teks |
| Jarak bolt sauh (sepanjang kedalaman) | 350 | Antara pusat bolt sauh, sepanjang panjang plat |
| Jarak bolt sauh (merentasi) | 300 | Antara pusat bolt sauh, merentasi |
| Unjuran bolt sauh di atas plat | 100 | Dari atas plat ke hujung atas bolt sauh |
| Tertanam bolt sauh di bawah plat | 450 | Dari bawah plat ke bawah masuk ke dalam konkrit |
| Saiz kimpalan fillet | 8 | Sekeliling pangkal tiang |
| Bahan plat | A36 | Teks |
| Jurang grout | 0 | Ruang antara atas konkrit dan bawah plat |
| Pengejang | Tiada | Pilih Tiada, 2 (sejajar dengan web) atau 4 (juga bersudut tepat dengannya); lihat di bawah |
| Tebal, tinggi pengejang | 12, 150 | |
| Kedalaman lug ricih | 0 | Sejauh mana lug mencapai di bawah plat; 0 = tiada lug |
| Tebal, lebar lug ricih | 25, 150 | |
| Washer plat | Tiada | Pada setiap bolt sauh, atau tiada |
| Saiz washer, tebal | 0, 0 | 0 = minimum dari AISC Design Guide 1 untuk bolt sauh |

Panjang bolt sauh = tertanam + jurang grout + tebal plat + unjuran. Dengan nilai lalai, ia ialah 575 mm.

## Butiran tapak: grout, pengejang, lug ricih, washer

Keempat-empat ini dimatikan pada plat tapak baharu, dan pada plat tapak daripada model yang dibuat sebelum DetailCraft 0.4.

- **Jurang grout.** Plat diletakkan sejauh ini di atas atas konkrit, dan bolt sauh menjadi lebih panjang sebanyak itu. AISC Design Guide 1 (2.10) mencadangkan 1 in. pada lantai siap dan 1½ hingga 2 in. pada tapak asas atau tiang; lebih untuk plat besar dan plat dengan lug ricih.
- **Pengejang.** Plat tegak yang dikimpal pada tiang dan plat, dari muka tiang ke tepi plat, sebagai segi empat tepat (belum ada chamfer atau tirus). **2** berada sejajar dengan web, di luar setiap flange; **4** menambah dua yang bersudut tepat dengan web, di antara flange, sehingga ke sisi plat. Pada tiang tiub, ia berada di tengah setiap muka. Setiap satu dikimpal pada tiang dan plat di kedua-dua belah.
- **Lug ricih.** Plat yang dikimpal sekeliling di bawah plat tapak, sejajar dengan kedalaman tiang, berpusat. DetailCraft memberi amaran jika ia tidak lebih dalam daripada jurang grout. Ia tidak memotong poket dalam tapak asas; [semakan pertembungan](topic:clash-check) mengecualikan lug dan tapak asas atas sebab itu.
- **Washer plat.** Washer plat segi empat pada setiap bolt sauh, duduk di atas plat tapak, disenaraikan dalam himpunan tiang sebagai longgar (dihantar bersama tiang, tidak dikimpal: Design Guide 1, 2.6). Dengan saiz dan tebal 0, DetailCraft mengambil washer minimum dari AISC Design Guide 1, edisi ke-2, Jadual 2.3 untuk bolt sauh; bolt sauh metrik mengambil saiz inci seterusnya (bolt sauh M20 mendapat baris 7/8 in.: 2½ in. × 5/16 in.). Panel sifat menunjukkan saiz yang digunakan. Lubang washer ialah diameter bolt sauh + 1/16 in.: itu pilihan DetailCraft, jadual tidak memberikannya. DetailCraft memberi amaran apabila bolt sauh mungkin tidak menonjol cukup jauh untuk washer dan nat (unjuran kurang daripada tebal washer + diameter bolt sauh).

Design Guide 1, Jadual 2.3, juga mengesyorkan lubang bolt sauh dalam plat: 1-5/16 in. untuk bolt sauh ¾ in., 1-9/16 in. untuk ⅞ in., 1-13/16 in. untuk 1 in. DetailCraft tidak menukar saiz lubang anda.

Amaran juga muncul apabila lubang bolt sauh lebih dekat daripada 1.2 × diameter lubang ke tepi plat, apabila bolt sauh jatuh di dalam garis luar tiang, atau apabila plat lebih kecil daripada tiang.

## Salin ke tiang yang serupa

1. Pilih plat tapak.
2. Pilih {{ui:Guna pada yang serupa (n)}}, atau {{ui:Serupa}} dalam menu {{ui:Lagi}} kumpulan {{ui:Sambung}}.
3. Setiap tiang tegak dengan profil yang sama yang tiada plat tapak dan tidak berdiri di atas tiang lain mendapat salinan.

## Plat tapak dan tapak asas

Plat tapak tidak memerlukan tapak asas, dan tapak asas tidak mengetahui plat tapak di atasnya: bolt sauh tidak diikat pada tetulang tapak asas. Letakkan tapak asas dengan {{ui:Tapak asas}}; lihat [Letak tapak asas dengan tetulang](topic:footings-and-rebar).
