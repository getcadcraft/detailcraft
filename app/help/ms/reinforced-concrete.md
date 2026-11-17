---
title: Perincikan rasuk, tiang, papak dan dinding konkrit bertetulang
summary: Tambah rasuk, tiang, papak dan dinding konkrit mengikut grid, beri bar, sengkang dan pengikat, semak sambungan bertindih dan penambatan mengikut ACI 318-19 atau EN 1992-1-1, dan hasilkan lukisan bengkel serta helaian pembengkokan bar.
keywords: konkrit bertetulang, tetulang, tetulangan, rasuk, tiang, papak, dinding, sengkang, pengikat, kait, sambungan bertindih, penambatan, panjang pembangunan, ld, ldh, lbd, penutup, jarak, bar pengecil, bukaan, hamparan, tanda bar, jadual lenturan, bbs, lukisan bengkel, ACI 318, EN 1992, Eurocode 2, IfcReinforcingBar, import IFC
from: 3835b7ec
---

Tab {{ui:Konkrit}} di bawah pandangan memperincikan bar bagi rasuk, tiang, papak dan dinding konkrit. Anda memberi saiz dan bar; DetailCraft meletakkan setiap bar, menomborkannya, menyemak sambungan bertindih, penambatan, penutup dan jarak berbanding klausa asalnya, dan melukisnya.

:::warning
DetailCraft memperincikan bar yang anda berikan kepadanya. Ia tidak mereka bentuknya. Setiap keputusan adalah untuk semakan oleh jurutera.
:::

## Buka tab Konkrit

Pilih tab {{ui:Konkrit}} di bawah pandangan. Dalam susun atur reben, {{ui:Konkrit}} terdapat dalam tab {{ui:Pemodelan}} di sebelah {{ui:Tapak asas}}. Dengan baris arahan gaya lukisan, taip {{cmd:CONCRETE}}.

## Tambah elemen mengikut grid

Elemen konkrit diletakkan pada garis grid dan aras model, jadi sediakan ini dahulu (panel kiri).

1. Dalam {{ui:Tambah mengikut grid}}, pilih {{ui:Elemen}}: {{ui:Rasuk konkrit}}, {{ui:Tiang konkrit}}, {{ui:Papak}} atau {{ui:Dinding}}.
2. Pilih garis grid dan aras:
   - rasuk merentang dari satu persilangan grid ke persilangan lain, bahagian atasnya pada aras;
   - tiang berdiri pada persilangan, dari satu aras ke aras lain;
   - papak mengisi segi empat tepat antara dua garis grid bernombor dan dua garis grid berhuruf, bahagian atasnya pada aras;
   - dinding merentang sepanjang garis tengahnya dari satu persilangan ke persilangan lain, dari satu aras ke aras lain.
3. Beri saiz dan pilih {{ui:Tambah}}. Elemen dipilih dan medannya dibuka dalam panel {{ui:Sifat}}.

Setiap elemen bermula dengan bar yang merupakan nilai permulaan, bukan reka bentuk: tukarkannya kepada nilai jurutera.

## Ubah bar

Pilih elemen (dalam pandangan, atau namanya dalam tab {{ui:Konkrit}}). Panel {{ui:Sifat}} memaparkan:

| Elemen | Apa yang anda tetapkan |
|---|---|
| Rasuk | Lebar, kedalaman, penutup bersih; bar atas dan bawah (saiz, bilangan, kait lurus atau 90° di hujung); bar sisi; sengkang (saiz, kait 135° atau 90°, jarak sengkang pertama dari muka penyokong, panjang dan jarak zon hujung, jarak antara); panjang penyokong; panjang sambungan bertindih |
| Tiang | Lebar, kedalaman merentang, putaran, penutup; bar membujur pada setiap muka; pengikat seperti sengkang; apa yang dilakukan bar di bahagian atas (sambung bertindih dengan tiang di atas, kait ke dalam lantai, atau berhenti) |
| Papak | Ketebalan, saiz, atas, penutup; hamparan bawah dan hamparan atas setiap arah (saiz dan jarak); bar-U di sekeliling tepi; bar pengecil; bukaan |
| Dinding | Ketebalan, penutup, satu atau dua lapisan, bar mendatar dan menegak, bar-U di hujung, bar menegak sama ada disambung bertindih di atas atau tidak, bar pengecil, bukaan |

Setiap perubahan ialah satu langkah buat asal. Perubahan yang tidak boleh dibina ditolak dan bar status menyatakan sebabnya, contohnya "Bukaan tidak muat di dalam elemen bersama penutupnya."

Sengkang dan pengikat adalah tertutup, dengan kedua-dua kait di satu sudut. Bar rasuk masuk ke dalam tiang konkrit di hujungnya sehingga muka jauh tiang tolak penutup; di mana tiada tiang, beri {{ui:Panjang sokongan di permulaan (mm)}} dan di hujung.

## Sambungan bertindih dan penambatan

Bar yang lebih panjang daripada {{ui:Panjang bar stok (mm)}} (12000 sebagai permulaan) dipotong kepada kepingan panjang sama, disambung bertindih.

Jadual {{ui:Sambungan bertindih dan penambatan}} menyenaraikan setiap sambungan bertindih dan setiap penambatan: apa yang diperlukan, dengan klausa dan terma-termanya, dan apa yang ada pada perincian.

- Panjang sambungan bertindih 0 bermakna "mengikut keperluan": panjang yang diberikan oleh kod, dibundarkan ke atas kepada 25 mm.
- Taip panjang sambungan bertindih anda sendiri untuk menggunakannya. Jika ia lebih pendek daripada yang diperlukan, ia menjadi masalah (lihat di bawah), dan ditandakan * dalam jadual.
- Penambatan diukur dari muka penyokong ke hujung bar di dalam penyokong. Rasuk tanpa penyokong yang diketahui menyatakannya dan tidak disemak.
- Tiang yang berdiri di atas tapak asas disambung bertindih dengan bar permulaan tapak asas, dan pada tiang lain dengan bar tiang itu: sambungan bertindih mereka turut disemak.

**ACI 318-19** (SI): bar lurus dalam tegangan 25.4.2.3 (jadual, dengan ψt, ψe, ψg, λ), kait piawai 25.4.3.1 (ψr 1.6 dan ψo 1.25 diambil melainkan diketahui sebaliknya), bar dalam mampatan 25.4.9.2, sambungan bertindih tegangan 25.5.2.1 (Kelas B, atau Kelas A dalam tetapan), sambungan bertindih mampatan 25.5.5.1.

**EN 1992-1-1**: penambatan 8.4.4 dengan fbd daripada 8.4.2 (ikatan baik atau lemah), sambungan bertindih 8.7.3 dengan α6 bagi setiap bar yang disambung bertindih pada satu keratan. γc, γs dan αct bermula pada nilai yang disyorkan; tetapkan anneks kebangsaan anda.

## Semakan

Setiap semakan yang gagal terdapat dalam panel Masalah shell (sumber {{ui:Semakan tetulangan}}), dan dalam senarai {{ui:Semakan}} elemen:

| Semakan | ACI 318-19 | EN 1992-1-1 |
|---|---|---|
| Penutup | Jadual 20.5.1.3.1, mengikut pendedahan | Minimum lekatan, Jadual 4.2 (penutup ketahanan adalah tanggungjawab anda untuk diberikan) |
| Jarak bersih bar | 25.2.1 (rasuk, papak, dinding), 25.2.3 (tiang) | 8.2 (2) |
| Jarak sengkang | 9.7.6.2.2 | 9.2.2 (6) |
| Keluli minimum rasuk | 9.6.1.2 | 9.2.1.1 (1) |
| Bar sisi rasuk melebihi 900 mm dalam | 9.7.2.3 | tidak disemak |
| Nisbah keluli tiang, bilangan bar | 10.6.1.1, 10.7.3.1 | 9.5.2 |
| Pengikat: jarak, saiz, silang | 25.7.2.1, 25.7.2.2, 25.7.2.3 | 9.5.3 (1), (3), (4) |
| Jarak papak, keluli minimum | 7.7.2.3, 24.4.3.2 | 9.3.1.1 |
| Jarak dinding, keluli minimum, dua lapisan | 11.7.2.1, 11.7.3.1, 11.6.1, 11.7.2.3 | 9.6.2, 9.6.3 |
| Sambungan bertindih, penambatan | seperti di atas | seperti di atas |

Saiz agregat tidak diketahui, jadi jarak bersih disemak tanpanya.

## Bukaan, bar pengecil dan bar tepi

Pilih {{ui:Tambah bukaan}} di bawah papak atau dinding yang dipilih dan tetapkan kedudukan serta saiznya. Bar yang dilintasinya berhenti pada penutup dari tepinya. Bar pengecil ditambah di setiap sisi, dalam lapisan yang sama, membawa separuh luas bar yang dipotong, satu panjang penambatan melepasi bukaan. Itu ialah peraturan permulaan DetailCraft, bukan klausa kod: tukar {{ui:Bar pengecil}} kepada nilai jurutera. Bar sudut tidak ditambah.

Bar-U di sekeliling tepi bebas papak dan di hujung dinding mempunyai kaki sepanjang satu panjang sambungan bertindih.

## Tanda bar dan jadual lenturan

Bar yang serupa berkongsi satu tanda: tapak asas mengekalkan tanda F (5F1), rasuk mendapat B, tiang C, papak S dan dinding W (7B1, 8C1, 4S2). Tab {{ui:Jadual lenturan}} dan CSV-nya kini menyenaraikan setiap bar struktur, tapak asas dahulu. {{ui:Output}} › {{ui:Lagi}} › {{ui:Lenturan}} memuat turunnya.

## Lukisan bengkel

Pilih {{ui:Output}} › {{ui:Lagi}} › {{ui:Lukisan tetulang}}, {{ui:Lukisan tetulang}} dalam tab {{ui:Konkrit}}, atau {{ui:Lukisan bengkel}} di sebelah satu elemen. Setiap elemen mendapat helaian dengan dongakan (pelan bagi papak) yang menunjukkan setiap bar dan tandanya, zon sengkang atau pengikat dan sambungan bertindih yang didimensikan, serta keratan di tengah; kemudian helaian pembengkokan bar menyenaraikan setiap tanda dengan lakaran bentuknya, dimensinya, bilangannya, panjang potongan dan beratnya.

Helaian dibuat daripada model setiap kali, dan sekali lagi selepas setiap perubahan semasa tetingkap dibuka: blok tajuk membawa rujukan model. Simpan {{ui:Helaian ini sebagai PDF}} atau {{ui:Semua helaian sebagai PDF}}.

## Bar daripada fail IFC

{{ui:Fail}} › {{ui:Import IFC}} kini membaca IfcReinforcingBar: cakera yang disapu sepanjang garis tengahnya dikembalikan sebagai kaki lurus dan lenturan, dengan diameternya, tandanya dan elemen yang memegangnya. Bar dikekalkan seperti yang dibaca (ia tidak ditukar menjadi peraturan rasuk atau papak), ditunjukkan dalam pandangan, disenaraikan dalam jadual lenturan dan ditulis semula melalui eksport IFC. Laporan import menyatakan berapa banyak bar dibaca, saiz yang mana, dalam berapa elemen, serta apa yang ditinggalkan dan sebabnya.

Rasuk, tiang, papak atau dinding dalam fail itu yang memegang bar atau yang bahannya konkrit tidak dianggap sebagai keluli; laporan menyatakannya. Eksport IFC DetailCraft sendiri membawa takrifan setiap elemen konkrit, jadi ia kembali sebagai dirinya, dan bar-barnya dibuat semula daripadanya.

:::note
Membaca fail program reka bentuk struktur sendiri (bukan IFC) belum dibina: eksport IFC daripadanya.
:::

## Eksport IFC

Rasuk, tiang, papak konkrit (dengan bukaan) dan dinding dieksport sebagai IfcBeam, IfcColumn, IfcSlab dan IfcWall, setiap satu dengan bar-barnya sebagai IfcReinforcingBar (bar utama, ligatur untuk sengkang dan pengikat, bar tepi) dikumpulkan kepadanya, setiap bar ialah cakera yang disapu sepanjang garis tengahnya dengan lengkok sebenar pada lenturan, tandanya dan panjang potongannya.
