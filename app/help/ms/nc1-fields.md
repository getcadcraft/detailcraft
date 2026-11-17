---
title: Medan fail NC1
summary: Apa yang DetailCraft tulis dalam setiap fail NC DSTV, medan demi medan, dan cara muka serta koordinat diukur.
keywords: nc1, dstv, fail nc, blok st, ak, bo, pengepala, muka, koordinat, cnc, format
from: 1b676fc1
---

Setiap fail `.nc1` menerangkan satu tanda bahagian. Baris ditamatkan dengan CR LF. Medan teks membawa ASCII biasa; aksara lain menjadi "?". Baris kedua ialah ulasan, `** DetailCraft <mark>.nc1`.

## Pengepala (ST)

| Medan | Bentuk I, kanal | Sudut | HSS segi empat tepat | HSS bulat | Plat |
|---|---|---|---|---|---|
| Pesanan | Nama model | ← | ← | ← | ← |
| Lukisan, keping | Tanda bahagian | ← | ← | ← | ← |
| Fasa | Fasa bahagian, atau 1 | ← | ← | ← | ← |
| Kualiti keluli | Gred bahan | ← | ← | ← | ← |
| Kuantiti | Bilangan bahagian dengan tanda ini | ← | ← | ← | ← |
| Profil | Nama profil, contohnya W16x26 | ← | ← | ← | `PL<t>*<width>` |
| Kod profil | I atau U (kanal) | L | M | RO | B |
| Panjang | Panjang potongan | ← | ← | ← | Panjang |
| Tinggi | Kedalaman d | Kaki | Tinggi | Diameter | Lebar plat |
| Lebar sayap | bf | Kaki | Lebar | Diameter | 0 |
| Tebal sayap | tf | t | Dinding t | Dinding t | 0 |
| Tebal web | tw | t | Dinding t | Dinding t | Tebal plat |
| Jejari | Jejari fillet (0 untuk kanal AISC) | 0 | Jejari bucu luar | 0 | 0 |
| Berat per meter | kg/m | kg/m | kg/m | kg/m | kg/m² |
| Luas cat per meter | Perimeter luar, m²/m | ← | ← | ← | 2 (kedua-dua muka, m²/m²) |
| Sudut gergaji (4 medan) | 0 (tegak) | ← | ← | ← | ← |
| Medan teks (4) | `-` | ← | ← | ← | ← |

Plat mengikut lajur standard "for the sheets". Standard tidak mempunyai lajur untuk tiub bulat: DetailCraft menulis diameter sebagai kedua-dua tinggi dan lebar sayap, dan dinding sebagai kedua-dua tebal.

## Kontur luar (AK)

- **Bentuk I dan kanal:** web (v), dengan takuk segi empat tepat bagi setiap takuk; setiap sayap (o dan u), dipendekkan di hujung yang mana takuk sekurang-kurangnya sedalam sayap.
- **HSS segi empat tepat:** kedua-dua dinding sisi (v dan h), ditakuk bagi takuk, dan dinding atas dan bawah (o dan u).
- **Sudut:** satu segi empat tepat bagi setiap kaki (v dan u). Takuk pada sudut tidak ditulis: bahagian sedemikian disenaraikan sebagai tidak ditulis. Tupang sudut yang dibolt pada [plat gusset](topic:brace-gussets) mempunyai lubangnya pada kaki yang dibolt: v bagi kaki sepanjang u bahagian, u bagi kaki sepanjang v bahagian.
- **HSS bulat:** satu segi empat tepat pada v, tiub dilihat dari depan (panjang × diameter).
- **Plat:** satu segi empat tepat pada muka v.

Setiap kontur ditutup (titik pertama diulang di hujung) dan berjalan mengikut arah lawan jam.

## Lubang (BO)

Satu baris bagi setiap lubang: muka, x, y, diameter, kedalaman 0 (tembus). Semua lubang disertakan, yang anda taip dan yang dibuat oleh sambungan. Lubang yang menembusi dinding sisi HSS segi empat tepat ditulis dua kali, sekali pada v dan sekali pada h.

## Muka dan koordinat

Setiap profil diletakkan seperti yang dilukis oleh rajah kedudukan profil standard (DSTV 1998, hlm. 7): x sepanjang bahagian, Y merentasi, Z naik dari muka belakang, dengan titik sifar pada bucu luar. DetailCraft tidak pernah mencerminkan bahagian untuk sepadan dengan rajah.

| Muka | Bentuk I | Kanal | Sudut | HSS segi empat tepat | Plat |
|---|---|---|---|---|---|
| v | Web, depan | Web, dilihat dari sisi hujung sayap | Kaki sepanjang u bahagian | Dinding sisi pada −u | Muka plat |
| h | | | | Dinding sisi pada +u | |
| o | Sayap atas | **Sayap bawah** | | Dinding atas | |
| u | Sayap bawah | **Sayap atas** | Kaki sepanjang v bahagian | Dinding bawah | |

- **x** berjalan sepanjang bahagian dari permulaan potongannya.
- **Bentuk I dan HSS segi empat tepat:** y pada web atau dinding sisi diukur dari bawah profil; y pada sayap, atau dinding atas dan bawah, diukur dari tepinya di sisi belakang (sisi +u bahagian).
- **Kanal** terletak terlentang dengan hujung sayap menghadap ke atas, seperti dalam rajah standard. Maka y pada web berjalan dari luar sayap atas ke bawah, sayap atas ialah muka u dan sayap bawah muka o, dan y pada sayap berjalan dari belakang web ke arah hujung sayap.
- **Sudut:** y pada setiap kaki diukur dari tumit.
- **Plat:** y diukur dari tepi −u plat.

Semak cara perisian mesin anda membaca muka kanal sebelum memotong: sesetengah program memusingkan kanal ke arah sebaliknya.

## Tidak ditulis

Bevel, kontur dalam, penandaan (SI), sudut gergaji selain tegak, lubang berslot, lubang dalam tiub bulat (DetailCraft tiada), dan takuk pada sudut serta tiub bulat.
