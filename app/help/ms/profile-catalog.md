---
title: Katalog profil
summary: Setiap saiz keluli terbina dalam, cara nama profil ditulis, dari mana dimensi datang, dan cara plat serta keratan tersuai dinamakan.
keywords: profil, keratan, katalog, saiz, bentuk w, wide flange, bentuk s, kanal, sudut, hss, tiub, paip, ipe, hea, heb, upn, uk, british, ub, uc, pfc, ea, uea, sudut kaki tidak sama, shs, rhs, chs, dibentuk sejuk, kemasan panas, blue book, plat, aisc, en 10365, penamaan
from: cd9b2bc3
---

DetailCraft mempunyai 2,311 saiz terbina dalam, setiap satu disalin daripada jadual yang diterbitkan dan disemak oleh ujian aplikasi: luas yang dikira daripada dimensi mesti sepadan dengan luas yang diterbitkan, dan berat yang diterbitkan mesti sepadan dengan luas itu didarab ketumpatan keluli. Plat dan profil tersuai dibuat daripada dimensinya.

## Penamaan

- **Bentuk US** ditulis seperti yang dicetak oleh AISC Manual, dengan x huruf kecil: W12x50, C10x15.3, L4x4x1/2, HSS6x6x1/4, HSS6.625x0.280. Penaipan tidak sensitif huruf besar.
- **Paip** ditulis seperti dalam pangkalan data AISC: Pipe4STD, Pipe4XS, Pipe4XXS (standard, ekstra kuat, dwi ekstra kuat).
- **Bentuk Eropah** ditulis seperti dalam EN 10365: IPE200, HEA240, HEB300, UPN200 (tanpa ruang).
- **Bentuk UK** ditulis dengan keluarga dahulu, kemudian saiz daripada Blue Book: UB305x165x40, UC203x203x46, PFC200x90x30, EA100x100x10.0, UEA150x90x10.0, SHS100x100x5.0, RHS200x100x8.0, CHS88.9x5.0. Profil keluli bentuk sejuk bermula dengan CF: CFSHS100x100x5.0. Menaip seperti yang sering dinyatakan dalam lukisan juga berfungsi: 305x165x40 UB, L100x100x10, SHS100x5.
- **Plat** ialah `PL<tebal>x<lebar>` dalam milimeter: PL20x200 ialah tebal 20 mm dan lebar 200 mm. Sebarang saiz daripada alat {{ui:Plat}} berfungsi.
- **Profil tersuai** boleh dinamakan apa sahaja, selagi ia bukan nama katalog dan tidak kelihatan seperti nama plat.

Dalam senarai {{ui:Profil}}, tajuk setiap kumpulan menamakan sumbernya, contohnya "W shapes — AISC Shapes Database v16.0".

## Sumber

| Kumpulan | Sumber | Nota |
|---|---|---|
| W shapes, S shapes, Kanal (C), Sudut (L), HSS, Paip | AISC Shapes Database v16.0 | Dimensi ditukar daripada inci kepada milimeter dengan tepat; jisim per meter daripada lb/ft yang diterbitkan |
| IPE, HEA, HEB, UPN | EN 10365:2017 | Milimeter dan kg/m seperti yang diterbitkan |
| UB, UC, PFC, EA, UEA, SHS, RHS, CHS, CFSHS, CFRHS, CFCHS | Steel for Life Blue Book (UK), jadual v18 (BS EN 10365, BS EN 10056-1, BS EN 10210-2, BS EN 10219-2) | Milimeter dan kg/m seperti yang diterbitkan |
| Plat | Berparameter | Jisim daripada luas × 7850 kg/m³ |
| Tersuai | Dimensi anda | Jisim daripada luas × 7850 kg/m³ |

Cara bentuk dilukis:

- **W shapes:** pangkalan data AISC tidak memberi jejari fillet, jadi DetailCraft melukis fillet sebagai r = kdes − tf.
- **S shapes dan kanal (C, UPN):** sayap selari dengan ketebalan purata yang diterbitkan, bucu tegak (sayap sebenar bercerun).
- **Sudut:** bucu tegak.
- **HSS segi empat tepat:** ketebalan dinding reka bentuk (0.93 × nominal, seperti yang dibenarkan AISC 360-22 B4.2) dengan jejari bucu luar dua kali ganda ketebalan itu.
- **HSS bulat dan Paip:** ketebalan dinding reka bentuk (0.93 × nominal).
- **IPE, HEA, HEB, UB, UC:** jejari akar yang diterbitkan.
- **PFC, EA, UEA:** bucu tegak (jisim dan luas yang diterbitkan masih termasuk jejari).
- **SHS, RHS, CHS:** dinding nominal. Bucu kemasan panas: luar 1.5 t, dalam t. Dibentuk sejuk: luar 2 t, dalam t sehingga 6 mm; 2.5 t dan 1.5 t sehingga 10 mm; 3 t dan 2 t melebihi itu.

## Saiz

Setiap saiz yang disenaraikan oleh jadual dalam kumpulan ini, terkecil dahulu:

| Kumpulan | Saiz |
|---|---|
| W shapes (289) | W4x13 hingga W44x408 |
| Bentuk S (28) | S3x5.7 hingga S24x121 |
| Kanal (32) | C3x3.5 hingga C15x50 |
| Sudut, kaki sama (61) | L2x2x1/8 hingga L12x12x1-3/8 |
| HSS, segi empat tepat dan segi empat sama (525) | HSS1-1/2x1-1/2x1/8 hingga HSS34x10x1 |
| HSS, bulat (189) | HSS1.660x0.140 hingga HSS28.000x1.000 |
| Paip (51) | Pipe1/2STD hingga Pipe26XS |
| IPE (18) | IPE80 hingga IPE600 |
| HEA (24) | HEA100 hingga HEA1000 |
| HEB (24) | HEB100 hingga HEB1000 |
| UPN (18) | UPN50 hingga UPN400 |
| Sudut, kaki tidak sama (76) | L2-1/2x1-1/2x3/16 hingga L8x6x1 |
| UB (107) | UB127x76x13 hingga UB1016x305x584 |
| UC (46) | UC152x152x23 hingga UC356x406x1299 |
| PFC (16) | PFC100x50x10 hingga PFC430x100x64 |
| EA (42) | EA20x20x3.0 hingga EA200x200x24.0 |
| UEA (39) | UEA30x20x3.0 hingga UEA200x150x18.0 |
| SHS, kemasan panas (123) | SHS40x40x3.2 hingga SHS400x400x17.5 |
| RHS, kemasan panas (161) | RHS50x30x3.2 hingga RHS500x300x17.5 |
| CHS, kemasan panas (103) | CHS42.4x3.2 hingga CHS508.0x17.5 |
| CFSHS, dibentuk sejuk (96) | CFSHS25x25x2.0 hingga CFSHS400x400x12.5 |
| CFRHS, dibentuk sejuk (137) | CFRHS50x25x2.0 hingga CFRHS500x300x12.5 |
| CFCHS, dibentuk sejuk (106) | CFCHS33.7x3.0 hingga CFCHS508.0x16.0 |

Sudut kaki tidak sama yang dicerminkan ialah bahagian yang sama dipusing hujung ke hujung, seperti cara bengkel membuat tangan bertentangan: lubang, takuk dan plat gusset-nya turut mengikut.

Pilih alat peletakan dan pilih saiz untuk melihat kedalaman, lebar sayap, ketebalan web dan sayap, jejari fillet, luas (cm²), jisim (kg/m) dan sumber dalam kotak {{ui:Profil}} panel {{ui:Sifat}}.

## Apa yang boleh dilakukan setiap bentuk

| Bentuk | Lubang | Takuk | Plat hujung dan plat tapak | Fail NC | Lukisan bengkel |
|---|---|---|---|---|---|
| Bentuk I (W, S, IPE, HEA, HEB, UB, UC, bentuk I tersuai) | Web, sayap atas, sayap bawah | Ya | Plat hujung: rasuk dan tiang. Plat tapak: ya | Ya | Ya |
| Kanal (C, UPN, PFC) | Web, sayap atas, sayap bawah | Tidak | Plat tapak sahaja | Ya | Ya |
| HSS segi empat tepat, SHS, RHS | Dinding sisi (web), atas, bawah | Tidak | Plat tapak sahaja | Ya | Ya |
| HSS bulat, Paip, CHS | Belum lagi | Tidak | Plat tapak sahaja | Ya | Ya |
| Sudut (L, EA, UEA) | Belum lagi | Tidak | Plat tapak sahaja | Ya | Ya |
| Plat dan bar rata tersuai | Muka plat | Tidak | Tidak | Ya | Ya |

Bagi tiub segi empat tepat, lubang pada muka "web" menembusi kedua-dua dinding sisi. Apa yang dimuatkan setiap fail NC ada dalam [Medan fail NC](topic:nc1-fields).

## Perlukan saiz lain?

Tambahkannya sebagai [profil tersuai](topic:plates-and-profiles#add-a-custom-profile). Senarai terbina dalam belum boleh disunting daripada aplikasi.
