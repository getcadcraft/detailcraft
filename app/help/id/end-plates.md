---
title: Sambungkan balok ke kolom dengan pelat ujung
summary: Tambahkan pelat ujung baut di tempat balok bertemu sayap atau badan kolom, atur pelat, baut, dan las, lalu salin sambungan ke setiap sambungan yang serupa.
keywords: pelat ujung, endplate, sambungan momen, sambungan baut, sambungan, baut, las, pelat ujung diperpanjang, rata, serupa, salin sambungan, komponen
from: 21e028b2
---

Sambungan pelat ujung mengelas sebuah pelat ke ujung balok dan membautnya ke sayap atau badan kolom. DetailCraft menempatkan pelat, memotong balok ke belakang, mengebor lubang yang sesuai pada pelat dan sayap kolom, menambahkan baut dan las, serta memeriksa jarak tepi dan spasi.

:::warning
DetailCraft tidak mendesain sambungan. Pengaturannya adalah nilai awal untuk Anda ubah; tidak ada yang memeriksa kekuatannya. Peringatan tepi dan spasi memakai batas minimum EN 1993-1-8 Tabel 3.3, yang mungkin berbeda dengan aturan yang Anda gunakan.
:::

## Yang dapat dihubungkan

- Balok **datar** (kedua ujungnya pada ketinggian yang sama), tegak (rotasi 0), dengan profil I.
- Ke dalam **sayap** atau **badan** kolom profil I yang **vertikal**, tegak lurus terhadapnya.
- Ujung balok harus berada pada garis kolom, di antara bagian bawah dan atas kolom.

Balok miring atau berkemiringan dan penampang non-I ditolak dengan alasannya: gunakan [pelat geser](topic:shear-tabs) untuk itu. Pada badan, pelat dan sayap balok harus muat di antara sayap kolom; DetailCraft memberi peringatan jika tidak.

:::tip
Pada rotasi 0, sayap kolom menghadap sepanjang arah grid bernomor (x). Balok yang berjalan dari A ke B bertemu badan, dan mendapat pelat ujung pada badan.
:::

## Tambahkan pelat ujung ke balok

1. Pilih {{ui:Select}} ({{key:V}}) lalu klik balok.
2. Pilih {{ui:End plates}} di grup {{ui:Connect}}, atau {{ui:Add end plates}} di panel {{ui:Properties}}.
3. Setiap ujung bebas balok yang bertemu sayap atau badan kolom secara tegak lurus mendapat pelat. Bilah status berbunyi "2 pelat ujung ditambahkan. Pilih satu untuk mengubah pelat, baut, dan las; Serupa menyalinnya ke sambungan seperti itu."
4. Pelat ujung baru pertama dipilih, dan pengaturannya ada di panel {{ui:Properties}}.

Jika tidak terjadi apa-apa, baca bilah status:

- "Balok ini tidak berakhir di garis kolom. Pelat ujung ditempatkan di tempat ujung balok bertemu kolom vertikal."
- "Balok ini bertemu kolom dengan sudut atau berkemiringan: pelat ujung dibuat untuk sambungan yang tegak lurus dan datar. Gunakan Pelat geser."
- "Kedua ujung sudah memiliki sambungan."

## Ubah pelat, baut, dan las

Klik pelat ujung (atau salah satu bautnya) untuk memilih sambungan. Di bawah {{ui:Plate, bolts and weld (mm)}}:

| Pengaturan | Awal | Fungsinya |
|---|---|---|
| Tebal pelat | 20 | Tebal pelat; juga seberapa jauh balok dipotong ke belakang melewati sayap |
| Lebar pelat | 180 | Melintang sambungan |
| Perpanjangan di atas balok | 0 | Di atas sayap atas; di atas 0 menjadikannya pelat ujung yang diperpanjang |
| Perpanjangan di bawah balok | 0 | Di bawah sayap bawah |
| Diameter baut | 20 | Ukuran baut nominal |
| Diameter lubang | 22 | Kelonggaran lubang Anda pada pelat dan sayap kolom |
| Mutu baut | A325 | Teks; dicetak di daftar material |
| Baris baut | 4 | Baris dua baut, dipusatkan pada tinggi pelat |
| Jarak baris | 75 | Jarak vertikal antar baris |
| Gauge | 100 | Jarak horizontal antara dua baut pada satu baris |
| Tambahan panjang baut | 30 | Ditambahkan ke grip untuk mur, ring, dan ulir; lihat di bawah |
| Ukuran las fillet | 8 | Keliling di sekeliling ujung balok |
| Material pelat | A36 | Teks |

Ketik nilai baru lalu tekan {{key:Enter}} atau {{key:Tab}}. Pelat, lubang, baut, dan panjang potong balok diperbarui seketika. Setiap perubahan adalah satu langkah urungkan.

Di bawah pengaturan, Anda melihat apa yang dibuat sambungan:

- {{ui:Bolts}}: misalnya "8 × 20 × 70 A325 (grip 36.2)".
- {{ui:Weld}}: ukuran, lokasi, dan panjangnya.
- {{ui:Plate}}: ukurannya dan tanda part-nya.

### Cara angkanya dihitung

- Balok dipotong ke belakang sebesar setengah kedalaman kolom (pada badan: setengah tebal badan) ditambah tebal pelat, sehingga pelat berada di muka.
- Tinggi pelat adalah kedalaman balok ditambah kedua perpanjangan.
- Panjang baut = grip (tebal pelat + tebal sayap atau badan kolom) + tambahan, dibulatkan ke atas ke kelipatan 5 mm berikutnya.
- Panjang las yang ditampilkan adalah keliling penampang balok.

### Peringatan

Sambungan tetap dibangun, tetapi peringatan ini muncul di bawahnya dan di tab {{ui:Problems}}:

- Baris baut atau baut yang lebih dekat ke tepi pelat daripada 1.2 × diameter lubang.
- Jarak baris di bawah 2.2 × diameter lubang, atau gauge di bawah 2.4 × diameter lubang.
- Lubang yang masuk ke badan kolom atau filletnya, atau keluar dari sayap kolom.
- Pelat yang lebih lebar daripada sayap kolom, atau (pada badan) lebih lebar daripada ruang di antara sayap; sayap balok yang tidak muat di antaranya.
- Baris baut yang terlalu dekat dengan sayap balok, atau gauge yang terlalu sempit untuk badan balok dan lasnya.

## Salin ke setiap sambungan serupa

1. Pilih sambungan yang sudah Anda atur.
2. Pilih {{ui:Apply to similar (n)}} di panel {{ui:Properties}}, atau {{ui:Similar}} di menu {{ui:More}} grup {{ui:Connect}}. Angka dalam kurung adalah jumlah sambungan yang akan menerimanya.
3. Setiap sambungan dengan profil balok dan profil kolom yang sama, dengan balok yang masuk ke jenis muka yang sama, dan yang belum memiliki sambungan, mendapat salinan dengan pengaturan yang sama. Bilah status menyebutkan jumlahnya.

Salinan bersifat independen: mengubah satu nanti tidak mengubah yang lain. Sambungan yang sudah memiliki sambungan dibiarkan; hapus itu dulu jika Anda ingin menggantinya.

## Memindahkan dan menghapus

Sambungan dibuat ulang dari pengaturannya setiap kali model berubah, sehingga memindahkan atau mengubah ukuran balok atau kolom ikut membawa pelat ujungnya. Jika perubahan berarti sambungan tidak lagi cocok, sambungan tetap berada di model dan tab {{ui:Problems}} menjelaskan alasannya, misalnya "Ujung balok tidak lagi berada di garis kolom."

Untuk menghapus sambungan, pilih lalu tekan {{key:Delete}}. Menghapus balok atau kolom juga menghapus sambungannya.

Berikutnya: [Tambahkan pelat dasar dan batang angkur](topic:base-plates).
