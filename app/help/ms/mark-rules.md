---
title: Peraturan tanda
summary: Tepatnya bila dua bahagian atau dua himpunan berkongsi tanda, bagaimana tanda dinomborkan, dan cara tanda tapak asas dan bar berfungsi.
keywords: tanda, penomboran, tanda bahagian, awalan, toleransi, bahagian serupa, tanda bar, tanda tapak asas, tanda kepingan, tanda himpunan
from: ce02c98e
---

DetailCraft mengira semula setiap tanda selepas setiap perubahan. Tiada apa-apa disimpan, jadi tanda sentiasa menerangkan model seperti keadaannya sekarang. Lihat [Semak tanda dan senarai bahan](topic:marks-and-bom) untuk cara menggunakannya.

## Tanda bahagian

Dua bahagian berkongsi tanda bahagian apabila semua ini sepadan:

1. Jenis bahagian (rasuk, tiang, tupang atau plat).
2. Nama profil (tidak sensitif huruf besar-kecil).
3. Bahan (tidak sensitif huruf besar-kecil).
4. Panjang potongan, dalam lingkungan 1 mm.
5. Setiap lubang: muka, kedudukan sepanjang dan merentas, dalam 1 mm, dan diameter dalam 0.1 mm.
6. Setiap potongan hujung: hujung, sisi, panjang dan kedalaman, dalam 1 mm.

{{ui:Nama}} ahli tidak dikira. Begitu juga kedudukannya dalam model, putarannya, atau arah ia dilukis, selagi bahagian itu sendiri sama.

### Bahagian yang dipusingkan

Bahagian dibandingkan dalam setiap cara ia boleh dipusing terbalik yang memetakan keratannya kembali kepada dirinya sendiri. Jika mana-mana daripadanya menjadikannya sepadan dengan bahagian lain, mereka berkongsi tanda.

| Bentuk | Pusingan yang dikira |
|---|---|
| Bentuk I, HSS segi empat tepat, plat | Hujung ke hujung (mengikut paksi menegak), hujung ke hujung (mengikut paksi mendatar), dan terbalik mengikut panjangnya sendiri |
| Saluran | Hujung ke hujung mengikut paksi mendatar sahaja, supaya badan kekal di sisi yang sama |
| Sudut, HSS bulat | Tiada: dibandingkan seperti yang diletakkan |

Jadi rasuk dengan lubang berhampiran hujung kirinya sepadan dengan rasuk yang mempunyai lubang yang sama berhampiran hujung kanannya, dan tiang dengan lubang pada satu sayap sepadan dengan tiang yang mempunyai lubang yang sama pada sayap yang satu lagi.

### Penomboran

| Jenis | Awalan bahagian | Awalan himpunan |
|---|---|---|
| Tiang | c | C |
| Rasuk | b | B |
| Tupang | br | BR |
| Plat (diletakkan, plat hujung atau plat tapak) | p | P |

Tanda dinomborkan dari 1 dalam setiap awalan. Susunannya: tiang, kemudian rasuk, tupang dan plat; dalam satu jenis, mengikut nama profil dalam susunan semula jadi (W8x10 sebelum W12x26); kemudian bahagian yang lebih panjang dahulu.

Kerana penomboran mengikut susunan itu, menambah atau menukar satu bahagian boleh mengalihkan nombor bahagian lain.

## Tanda himpunan

- Setiap bahagian yang tidak dikimpal kepada bahagian lain ialah bahagian utama bagi himpunannya sendiri.
- Plat hujung dikimpal kepada rasuknya, dan plat tapak kepada tiangnya, jadi ia tergolong dalam himpunan ahli tersebut.
- Dua himpunan berkongsi tanda apabila bahagian utamanya berkongsi tanda bahagian dan bahagian yang dilampirkan mempunyai tanda yang sama pada tempat yang sama (dalam 1 mm), dengan membenarkan pusingan yang sama seperti bahagian utama.
- Awalan himpunan mengikut bahagian utama: rasuk dengan dua plat hujung ialah himpunan B.

Plat yang anda letakkan dengan alat {{ui:Plat}} tidak dikimpal kepada apa-apa, jadi setiap satunya ialah himpunan P sendiri.

## Tanda tapak asas

Tapak asas dengan panjang, lebar, kedalaman, teks konkrit, jejaring bawah dan bar penyambung yang sama berkongsi tanda: F1, F2 … mengikut susunan ia diletakkan. Kedudukan dan putaran tidak dikira.

## Tanda bar

Bar dengan saiz, bentuk dan dimensi A, B dan C yang sama (dibundarkan kepada milimeter) berkongsi tanda merentasi semua tapak asas. Tanda ialah nombor bar, F, dan pembilang bagi setiap saiz bar: 5F1, 5F2, 6F1. Bar arah panjang dan bar arah pendek bagi tapak asas segi empat sama ialah bar yang sama dan berkongsi tanda; lajur {{ui:Digunakan untuk}} dalam jadual lenturan menyenaraikan kedua-dua penggunaan.
