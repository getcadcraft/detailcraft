---
title: Penyelesaian masalah
summary: Maksud mesej DetailCraft dan tindakan yang perlu, daripada paparan 3D yang hilang hingga sambungan yang tidak dapat dibina.
keywords: masalah, ralat, tidak berfungsi, bantuan, betulkan, mesej, ditolak, webgl, kosong, amaran, tidak dapat, isu
from: f8c3b2b1
---

Kebanyakan penolakan diterangkan dalam bar status di bahagian bawah skrin, atau dalam tab {{ui:Problems}}. Baca itu dahulu. Mesej di bawah dipetik seperti yang DetailCraft paparkan.

## Paparan 3D hilang

**"Pelayar ini tidak dapat memulakan grafik 3D (WebGL). Model, laporan dan eksport masih berfungsi."**

Pelayar tidak dapat memulakan WebGL, iaitu grafik 3D yang DetailCraft lukis.

1. Kemas kini pelayar kepada versi terkininya.
2. Hidupkan pecutan perkakasan dan mulakan semula pelayar (lihat di bawah).
3. Kemas kini pemacu grafik anda, atau cuba pelayar lain. Desktop jauh dan mesin maya selalunya tiada WebGL.
4. Sementara itu anda masih boleh bekerja: letakkan anggota dengan borang {{ui:Add by grid}}, baca laporan, dan eksport. Hanya klik dalam paparan yang memerlukan WebGL.

:::chromium
Untuk menghidupkan pecutan perkakasan, buka **Tetapan, Sistem** dan hidupkan **Guna pecutan grafik apabila tersedia**, kemudian lancarkan semula.
:::

:::firefox
Untuk menghidupkan pecutan perkakasan, buka **Tetapan, Umum, Prestasi**, nyahtanda **Guna tetapan prestasi yang disyorkan**, dan tandakan **Guna pecutan perkakasan apabila tersedia**. Mulakan semula Firefox.
:::

:::safari
Safari mempunyai WebGL dihidupkan secara lalai. Kemas kini macOS jika paparan masih tidak bermula, dan semak sama ada tiada sambungan yang menyekatnya.
:::

Lagi dalam [Pelayar dan komputer](common:browsers).

## Klik dalam paparan tidak berbuat apa-apa

- **Tiada persilangan berdekatan klik.** Alat peletakan hanya melekat pada persilangan grid. Klik yang jauh daripada setiap titik tidak berbuat apa-apa. Dekatkan sehingga titik itu menyala.
- **Alatnya ialah {{ui:Select}} dan anda mengklik ruang kosong.** Itu mengosongkan pilihan.
- **Anda menyeret.** Tekan dan lepas yang lebih daripada beberapa piksel jauhnya ialah seretan: ia memutarkan atau menggelongsorkan paparan.
- **Bahagian itu dipotong.** Dalam {{ui:Plan}} dan {{ui:Elevation}}, keluli di luar potongan disembunyikan dan tidak boleh diklik. Tukar kepada {{ui:3D}}.
- **Persilangan berada pada aras yang salah.** Dalam {{ui:3D}}, persilangan pada beberapa aras boleh bertindih pada skrin; klik mengambil yang terdekat. Gunakan {{ui:Plan}} atau {{ui:Elevation}}.

## Mesej peletakan

| Mesej | Tindakan |
|---|---|
| Tiada aras di atas Level 2 untuk tiang capai. Tambah aras dahulu. | Tambah aras dalam {{ui:Levels}}, atau klik aras yang lebih rendah |
| Pilih persilangan lain untuk hujung yang satu lagi. | Anda mengklik titik yang sama dua kali |
| Dua hujung ialah titik yang sama. | Dalam {{ui:Add by grid}}, pilihan "From" dan "To" adalah sama |
| Tambah garisan grid di sebelah kiri untuk meletakkan anggota. | Model tiada garisan grid dalam satu arah |
| Profil tidak diketahui "…" | Profil itu tiada dalam katalog atau profil tersuai model. Pilih satu daripada senarai |
| Taip nombor. | Medan nombor dibiarkan kosong atau mengandungi teks |

## Sambungan tidak dapat dibina

### "Rasuk ini tidak berakhir pada garisan tiang."

Plat hujung memerlukan hujung rasuk tepat pada garisan tiang menegak, antara bahagian bawah dan atasnya (dalam 1 mm). Semak {{ui:Ends (x, y, z mm)}} rasuk dan kedudukan tiang.

### "Rasuk ini bertemu web tiang atau pada sudut"

Atau dalam {{ui:Problems}}: "Rasuk yang dicantum ke web tiang belum dibina: pusingkan tiang 90° atau gunakan sambungan lain."

Rasuk dicantum ke web tiang. Pilih tiang dan tetapkan {{ui:Rotation (°)}} kepada 90, kemudian cuba lagi. Sambungan condong belum dibina.

### "Plat hujung hanya dibina untuk rasuk mendatar (rasuk ini condong)."

Kedua-dua hujung rasuk mesti berada pada ketinggian yang sama.

### "Plat hujung memerlukan rasuk tegak (putaran 0)."

Tetapkan semula {{ui:Rotation (°)}} rasuk kepada 0.

### "Plat hujung memerlukan rasuk bentuk-I." / "Plat hujung memerlukan tiang bentuk-I."

Hanya bentuk-I (W, IPE, HEA, HEB atau I tersuai) menerima plat hujung.

### "Hujung rasuk tidak lagi berada pada garisan tiang."

Anda mengalihkan rasuk atau tiang selepas menambah sambungan. Alihkannya kembali, atau padam sambungan.

### "Sambungan memotong anggota ini hingga tiada apa-apa."

Sambungan di kedua-dua hujung memotong anggota lebih jauh daripada panjangnya, contohnya rasuk yang sangat pendek antara dua tiang dalam. Semak hujung anggota dan ketebalan plat.

### "Tiada sambungan lain seperti ini … tanpa sambungan."

{{ui:Similar}} hanya menyalin kepada sambungan yang mempunyai profil rasuk, profil tiang dan jenis sambungan yang sama (rasuk ke dalam sayap) dan yang belum mempunyai sambungan.

### "Kedua-dua hujung sudah mempunyai sambungan." / "Tiang ini sudah mempunyai plat tapak."

Pilih sambungan sedia ada untuk menukarnya, atau padamkannya dahulu.

## Amaran dalam tab Masalah

Amaran tidak menghalang sambungan atau asas daripada dibina; ia meminta anda menyemaknya. Amaran tepi dan jarak menggunakan minimum EN 1993-1-8 Jadual 3.3 (tepi 1.2 × lubang, jarak 2.2 × lubang, tolok 2.4 × lubang). Jika projek anda menggunakan peraturan lain, amaran itu mungkin tidak terpakai; DetailCraft tidak mereka bentuk sambungan.

"a hole is off the end of the part" bermaksud x lubang kurang daripada 0 atau lebih daripada panjang potongan. Ingat bahawa x diukur dari permulaan potongan, selepas sambungan memotong bahagian itu.

## Perubahan asas ditolak

| Mesej | Tindakan |
|---|---|
| Penutup tidak meninggalkan ruang untuk bar dalam asas ini. | Jadikan asas lebih besar atau penutup lebih kecil |
| Asas terlalu cetek untuk dua lapisan bar di dalam penutup. | Jadikan lebih dalam atau kurangkan penutup |
| Bar permulaan tidak muat di dalam asas dengan penutup 75 mm. | Kurangkan bar permulaan, rapatkan jarak, atau gunakan asas yang lebih besar |
| Jarak bar mesti 50–1000 mm. | Taip jarak dalam julat itu |
| Panjang mesti 300–50000 mm. | Saiz asas mempunyai had: panjang dan lebar 300 hingga 50000, kedalaman 150 hingga 10000 |

## Grid dan aras ditolak

| Mesej | Tindakan |
|---|---|
| Grid bernombor: beri satu jarak antara setiap pasangan garisan (4). | Kira jurang anda: lima garisan memerlukan empat jarak |
| Grid berhuruf: jarak mesti milimeter positif. | Tiada sifar, nilai negatif atau teks |
| Grid bernombor: label grid mesti berbeza. | Dua garisan mempunyai label yang sama |
| Paling banyak 60 garisan grid setiap arah. | Pecahkan model |
| Simpan sekurang-kurangnya satu aras. | Anda telah mengalih keluar setiap baris aras |
| Setiap aras perlu ada nama. / Dua aras dinamakan "…". | Beri setiap aras nama yang berbeza |

## Membuka fail gagal

| Mesej | Punca |
|---|---|
| DetailCraft membuka model sendiri (.detailcraft.json). Import IFC belum dibina. | Fail itu bukan fail `.json` |
| Ini bukan model DetailCraft (bukan JSON). | Fail rosak atau JSON lain |
| Ini bukan model DetailCraft. | Fail JSON daripada program lain |
| Model ini disimpan oleh DetailCraft yang lebih baharu (format 2). | Buka dalam DetailCraft yang lebih baharu yang menyimpannya |
| Fail itu terlalu besar untuk menjadi model DetailCraft. | Melebihi 50 MB |

Apabila fail dibuka dengan amaran seperti "2 anggota tidak sah dan ditinggalkan.", bahagian model yang lain adalah baik. Jangan simpan ganti fail asal sehingga anda telah menyemak apa yang ditinggalkan.

## Eksport

| Mesej | Punca |
|---|---|
| Tiada apa-apa untuk dieksport lagi. | {{ui:IFC}} dengan model kosong |
| Tiada bahagian bentuk-I atau plat untuk menulis fail NC. | Hanya saluran, sudut atau tiub dalam model |
| Tidak ditulis (setakat ini hanya bentuk-I dan plat): … | Tanda itu bukan bentuk-I atau plat; yang lain telah ditulis |
| Tiada asas, jadi tiada bar untuk dijadualkan. | {{ui:Bending}} tanpa asas |
| … aksara di luar fon PDF dicetak sebagai "?". | Nama model atau gred mempunyai aksara yang tiada dalam fon PDF |

{{ui:Shop drawing}} dimalapkan: model belum mempunyai bahagian lagi.

## Muat turun tidak muncul

Setiap simpanan dan eksport ialah muat turun pelayar. Semak senarai muat turun pelayar anda. Jika pelayar bertanya sebelum memuat turun beberapa fail, atau menyekat muat turun daripada laman ini, benarkannya. Dalam Safari, semak butang muat turun pada bar alat.

## Kekunci tidak berfungsi

- Kursor berada dalam medan teks atau nombor: kekunci alat dan {{key:Delete}} diabaikan di sana supaya anda boleh menaip. Tekan {{key:Tab}} atau klik paparan.
- Dialog sedang terbuka: tutupnya dahulu.
- Pelayar memegang papan kekunci (contohnya bar alamat): klik di dalam DetailCraft.
- {{key:Ctrl+Shift+F}} menggunakan Control walaupun pada Mac.

## Masalah luar talian

Butang {{ui:Save for offline}} dalam bar aplikasi menunjukkan keadaan salinan luar talian. Cara simpanan berfungsi: [Bekerja luar talian](common:offline).

| Butang berbunyi | Maksudnya | Tindakan |
|---|---|---|
| {{ui:Save for offline}} | Belum ada salinan luar talian dalam pelayar ini | Pilih semasa dalam talian |
| Menyimpan 5 daripada 20 | Simpanan sedang berjalan | Tunggu {{ui:Offline ready}}; kekalkan tab terbuka |
| {{ui:Offline ready}} | DetailCraft, paparan 3D, setiap eksport dan bantuan ini berfungsi tanpa sambungan | Tiada. Klik untuk {{ui:Simpan semula (dapatkan versi terkini)}} atau {{ui:Alih keluar salinan luar talian}} |
| {{ui:Could not save}} | Sesetengah fail tidak dimuat turun | Semak sambungan anda dan klik untuk cuba lagi |
| {{ui:Offline not available}} | Tetingkap ini tidak boleh menyimpan salinan luar talian: tetingkap persendirian dan sesetengah komputer terurus menyekatnya | Gunakan tetingkap biasa, atau bekerja dalam talian |

Jika anda luar talian dan butang tidak menunjukkan {{ui:Offline ready}}, jangan muat semula atau tutup tab: apa yang telah dimuatkan terus berfungsi. Simpan model anda dengan {{key:Mod+S}} dan tunggu sehingga anda kembali dalam talian.

## Kerja belum disimpan

Jika pelayar bertanya sama ada hendak meninggalkan halaman, DetailCraft mempunyai perubahan yang belum disimpan. Pilih untuk kekal, kemudian tekan {{key:Mod+S}}. DetailCraft tidak dapat memulihkan model selepas tab ditutup.

## Masih buntu

Catatkan apa yang anda lakukan dan mesej tepatnya, dan beritahu kami melalui [halaman sokongan](https://getcadcraft.com/support).
