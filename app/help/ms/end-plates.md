---
title: Sambungkan rasuk ke tiang dengan plat hujung
summary: Tambah plat hujung berbolt di tempat rasuk bertemu sayap atau badan tiang, tetapkan plat, bolt dan kimpalan, dan salin sambungan ke setiap sambungan yang serupa.
keywords: plat hujung, endplate, sambungan momen, sambungan berbolt, sambungan, bolt, kimpalan, plat hujung lanjutan, rata, serupa, salin sambungan, komponen
from: 21e028b2
---

Sambungan plat hujung mengimpal plat pada hujung rasuk dan membolt-kannya pada sayap atau badan tiang. DetailCraft meletakkan plat, memangkas rasuk ke belakang, menebuk lubang yang sepadan pada plat dan sayap tiang, menambah bolt dan kimpalan, serta menyemak jarak tepi dan jarak.

:::warning
DetailCraft tidak mereka bentuk sambungan. Tetapan ialah nilai permulaan untuk anda ubah; tiada apa yang menyemak kekuatan. Amaran tepi dan jarak menggunakan minimum EN 1993-1-8 Jadual 3.3, yang mungkin berbeza daripada peraturan yang anda gunakan.
:::

## Apa yang boleh disambungkan

- Rasuk **rata** (kedua-dua hujung pada ketinggian yang sama), tegak (putaran 0), dengan profil bentuk-I.
- Ke dalam **sayap** atau **badan** tiang bentuk-I yang **menegak**, bersudut tegak lurus dengannya.
- Hujung rasuk mesti berada pada garis tiang, di antara bahagian bawah dan atas tiang.

Rasuk condong atau cerun dan keratan bukan-I ditolak dengan sebab: gunakan [tab ricih](topic:shear-tabs) untuk itu. Pada badan, plat dan sayap rasuk mesti muat di antara sayap tiang; DetailCraft memberi amaran apabila tidak muat.

:::tip
Pada putaran 0, sayap tiang menghadap sepanjang arah grid bernombor (x). Rasuk yang berjalan dari A ke B bertemu badan, dan mendapat plat hujung pada badan.
:::

## Tambah plat hujung pada rasuk

1. Pilih {{ui:Select}} ({{key:V}}) dan klik rasuk.
2. Pilih {{ui:End plates}} dalam kumpulan {{ui:Connect}}, atau {{ui:Add end plates}} dalam panel {{ui:Properties}}.
3. Setiap hujung bebas rasuk yang bertemu sayap atau badan tiang secara tegak lurus mendapat plat. Bar status menyatakan "2 plat hujung ditambah. Pilih satu untuk menukar plat, bolt dan kimpalannya; Serupa menyalinnya ke sambungan yang serupa."
4. Plat hujung baharu pertama dipilih dan tetapannya berada dalam panel {{ui:Properties}}.

Jika tiada apa yang berlaku, baca bar status:

- "Rasuk ini tidak berakhir pada garis tiang. Plat hujung diletakkan di tempat hujung rasuk bertemu tiang menegak."
- "Rasuk ini bertemu tiang pada sudut atau cerun: plat hujung dibina untuk sambungan tegak lurus dan rata. Gunakan Tab ricih."
- "Kedua-dua hujung sudah mempunyai sambungan."

## Tukar plat, bolt dan kimpalan

Klik plat hujung (atau salah satu bolt-nya) untuk memilih sambungan. Di bawah {{ui:Plate, bolts and weld (mm)}}:

| Tetapan | Lalai | Fungsi |
|---|---|---|
| Ketebalan plat | 20 | Ketebalan plat; juga sejauh mana rasuk dipangkas ke belakang melepasi sayap |
| Lebar plat | 180 | Merentasi sambungan |
| Lanjutan di atas rasuk | 0 | Di atas sayap atas; melebihi 0 menjadikan plat hujung lanjutan |
| Lanjutan di bawah rasuk | 0 | Di bawah sayap bawah |
| Diameter bolt | 20 | Saiz bolt nominal |
| Diameter lubang | 22 | Lubang kelegaan anda pada plat dan sayap tiang |
| Gred bolt | A325 | Teks; dicetak dalam senarai bahan |
| Baris bolt | 4 | Baris dua bolt, berpusat pada ketinggian plat |
| Jarak baris | 75 | Jarak menegak antara baris |
| Tolok | 100 | Jarak mendatar antara dua bolt dalam satu baris |
| Elaun panjang bolt | 30 | Ditambah pada genggaman untuk nat, washer dan ulir; lihat di bawah |
| Saiz kimpalan fillet | 8 | Sekeliling hujung rasuk |
| Bahan plat | A36 | Teks |

Taip nilai baharu dan tekan {{key:Enter}} atau {{key:Tab}}. Plat, lubang, bolt dan panjang potongan rasuk dikemas kini serta-merta. Setiap perubahan ialah satu langkah buat asal.

Di bawah tetapan, anda lihat apa yang dihasilkan oleh sambungan:

- {{ui:Bolts}}: contohnya "8 × 20 × 70 A325 (genggaman 36.2)".
- {{ui:Weld}}: saiz, lokasi, dan panjangnya.
- {{ui:Plate}}: saiz dan tanda bahagiannya.

### Cara nombor dikira

- Rasuk dipangkas ke belakang sebanyak separuh kedalaman tiang (pada badan: separuh ketebalan badan) ditambah ketebalan plat, supaya plat berada pada permukaan.
- Ketinggian plat ialah kedalaman rasuk ditambah dua lanjutan.
- Panjang bolt = genggaman (ketebalan plat + ketebalan sayap atau badan tiang) + elaun, dibundarkan ke atas kepada 5 mm yang seterusnya.
- Panjang kimpalan yang ditunjukkan ialah perimeter keratan rasuk.

### Amaran

Sambungan masih dibina, tetapi amaran ini muncul di bawahnya dan dalam tab {{ui:Masalah}}:

- Baris bolt atau bolt lebih dekat dengan tepi plat daripada 1.2 × diameter lubang.
- Jarak baris kurang daripada 2.2 × diameter lubang, atau tolok kurang daripada 2.4 × diameter lubang.
- Lubang yang menceroboh badan tiang atau filetnya, atau terkeluar dari sayap tiang.
- Plat yang lebih lebar daripada sayap tiang, atau (pada badan) lebih lebar daripada ruang antara sayap; sayap rasuk yang tidak muat di antaranya.
- Baris bolt terlalu dekat dengan sayap rasuk, atau tolok terlalu rapat untuk badan rasuk dan kimpalannya.

## Salin ke setiap sambungan yang serupa

1. Pilih sambungan yang telah anda sediakan.
2. Pilih {{ui:Guna pada yang serupa (n)}} dalam panel {{ui:Properties}}, atau {{ui:Serupa}} dalam menu {{ui:More}} kumpulan {{ui:Connect}}. Nombor dalam kurungan ialah berapa banyak sambungan yang akan menerimanya.
3. Setiap sambungan dengan profil rasuk dan profil tiang yang sama, rasuk masuk ke jenis permukaan yang sama, yang belum mempunyai sambungan akan mendapat salinan dengan tetapan yang sama. Bar status menyatakan berapa banyak.

Salinan adalah bebas: menukar satu kemudian tidak mengubah yang lain. Sambungan yang sudah mempunyai sambungan dibiarkan; padamkannya dahulu jika anda mahu ia digantikan.

## Mengalih dan memadam

Sambungan dibuat semula daripada tetapannya setiap kali model berubah, jadi mengalih atau mengubah saiz rasuk atau tiang turut membawa plat hujungnya. Jika perubahan bermakna sambungan tidak lagi muat, sambungan kekal dalam model dan tab {{ui:Masalah}} menyatakan sebabnya, contohnya "Hujung rasuk tidak lagi berada pada garis tiang."

Untuk memadam sambungan, pilih dan tekan {{key:Delete}}. Memadam rasuk atau tiang turut memadam sambungannya.

Seterusnya: [Tambah plat tapak dan bolt sauh](topic:base-plates).
