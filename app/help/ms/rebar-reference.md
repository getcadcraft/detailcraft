---
title: Rujukan tetulang
summary: Saiz bar, dimensi kait, kod bentuk, panjang potongan dan lajur jadual lenturan yang digunakan DetailCraft.
keywords: tetulang, saiz bar, kait, diameter lenturan, kod bentuk, panjang potongan, jadual lenturan, senarai bar, astm a615, aci 318
from: 1583535e
---

## Saiz bar

Daripada ASTM A615/A615M Jadual 1 (tanda sistem inci-paun). Milimeter dan kg/m ialah penukaran tepat bagi nilai inci dan lb/ft yang diterbitkan. Senarai menunjukkan setiap saiz sebagai, contohnya, "#5 (15.9 mm)".

| Bar | Diameter (mm) | Jisim (kg/m) | Luas (mm²) | Diameter lenturan dalam | Kaki kait 90°, luar ke luar (mm) |
|---|---|---|---|---|---|
| #3 | 9.5 | 0.560 | 71 | 6 db | 152 |
| #4 | 12.7 | 0.994 | 129 | 6 db | 203 |
| #5 | 15.9 | 1.552 | 200 | 6 db | 254 |
| #6 | 19.1 | 2.235 | 284 | 6 db | 305 |
| #7 | 22.2 | 3.042 | 387 | 6 db | 356 |
| #8 | 25.4 | 3.973 | 510 | 6 db | 406 |
| #9 | 28.7 | 5.060 | 645 | 8 db | 487 |
| #10 | 32.3 | 6.404 | 819 | 8 db | 548 |
| #11 | 35.8 | 7.907 | 1006 | 8 db | 609 |

Dalam [tetapan DetailCraft](topic:settings) ({{ui:Tetulang}}), **nama bar ASTM** boleh memaparkan bar ini mengikut nama A615M metrik lembut sebagai gantinya: #3 = #10, #4 = #13, #5 = #16, #6 = #19, #7 = #22, #8 = #25, #9 = #29, #10 = #32, #11 = #36 (bar yang sama; ACI 315-99 Jadual 1 menyenaraikan kedua-duanya).

### Bar metrik (BS 4449)

| Bar | Diameter (mm) | kg/m | Jejari lenturan minimum r (mm) | Kaki kait = unjuran hujung P (mm) |
|---|---|---|---|---|
| H8 | 8 | 0.395 | 16 | 115 |
| H10 | 10 | 0.617 | 20 | 120 |
| H12 | 12 | 0.888 | 24 | 125 |
| H16 | 16 | 1.578 | 32 | 130 |
| H20 | 20 | 2.466 | 70 | 190 |
| H25 | 25 | 3.853 | 87 | 240 |
| H32 | 32 | 6.313 | 112 | 305 |
| H40 | 40 | 9.865 | 140 | 380 |

Jisim ialah keratan nominal didarab 7850 kg/m³. Jejari dan unjuran hujung ialah nilai minimum BS 8666:2020 (jadual dimensi minimumnya; diameter lama ialah 2r). Tapak asas dengan bar BS mendapat kaki kait P dan panjang potongan mengikut formula BS 8666 di bawah. Memilih keluli Eropah dalam tetapan memulakan tapak asas baharu dengan hamparan H16 dan bar permulaan H20 dalam konkrit C30/37.

## Kait

Bar ASTM: kait 90° piawai daripada ACI 318-19 Jadual 25.3.1: diameter lenturan dalam 6 db untuk #3 hingga #8 dan 8 db untuk #9 hingga #11, dengan sambungan lurus 12 db melepasi lenturan. Kaki kait, diukur luar ke luar, ialah separuh diameter lenturan + db + 12 db.

Jika kait bar hamparan tidak muat dalam kedalaman tapak asas di dalam penutup konkrit, DetailCraft memendekkan kaki supaya muat dan menyenaraikan amaran.

## Bentuk

DetailCraft menyimpan tiga bentuk. Jadual lenturan mencetaknya sebagai kod DetailCraft, sebagai jenis ACI 315 atau sebagai kod bentuk BS 8666: pilih **Kod bentuk jadual lenturan** dalam [tetapan DetailCraft](topic:settings) ({{ui:Tetulang}}).

| Kod | Bentuk | Dimensi |
|---|---|---|
| S | Lurus | A = panjang |
| L | Satu lenturan 90° | A = kaki utama, B = kaki kait, kedua-duanya luar ke luar |
| U | Dua lenturan 90° pada sisi yang sama | A = tengah, B dan C = dua kaki, luar ke luar |

Bar hamparan dengan {{ui:Kait hujung}} dihidupkan ialah U; tanpa itu, S. Bar permulaan dengan {{ui:Kait di bahagian bawah}} dihidupkan ialah L; tanpa itu, S.

| DetailCraft | BS 8666:2020 | ACI 315-99 (Rajah 10) |
|---|---|---|
| S | 00, L = A | tiada nombor jenis |
| L | 11, L = A + B − 0.5r − d | tiada nombor jenis: rajah itu tiada bar dengan satu kait |
| U | 21, A dan C ialah kaki, B tengah: L = A + B + C − r − 2d | Jenis 2, kait A dan G, B lurus |

Dengan kod BS 8666 atau ACI 315, lajur A, B dan C jadual mengikut huruf standard itu (tengah bagi U ialah B).

## Panjang potongan

Bagi bar BS 4449, panjang potongan ialah formula BS 8666 bagi kod bentuk bar (di atas). Bagi bar ASTM, ia ialah panjang tepat garis tengah bar: bahagian lurus serta lenturan sebagai lengkok pada separuh diameter lenturan ditambah separuh diameter bar. Ia tidak dikira daripada jadual potongan lenturan, jadi ia boleh berbeza beberapa milimeter daripada jadual yang menggunakan jadual itu.

## Susun atur

- Hamparan bawah: bar sepanjang L membentuk lapisan bawah, bar sepanjang B berada di atasnya. Setiap set disebarkan sama rata merentasi tapak asas di dalam penutup konkrit, pada jarak yang anda beri atau lebih rapat, dengan sekurang-kurangnya dua bar.
- Bar permulaan: grid bar sepanjang L dan sepanjang B pada jarak yang anda beri, berpusat pada tapak asas, berdiri di atas hamparan dan menonjol di atas bahagian atas sebanyak unjuran yang anda beri. Setiap kait menghala ke luar.

## Semakan

| Semakan | Peraturan | Keputusan |
|---|---|---|
| Ruang untuk bar | Penutup di kedua-dua sisi memberi ruang untuk bar | Ditolak jika tidak |
| Kedalaman untuk dua lapisan | Kedalaman tolak dua penutup memuatkan kedua-dua lapisan hamparan | Ditolak jika tidak |
| Bar permulaan muat | Grid bar permulaan muat di dalam penutup | Ditolak jika tidak |
| Jarak bersih | Sekurang-kurangnya yang lebih besar antara 25.4 mm dan db (ACI 318-19 25.2.1; saiz agregat tidak disemak) | Amaran |
| Kedalaman kait | Kaki kait muat dalam kedalaman di dalam penutup | Amaran, kaki dipendekkan |
| Kait permulaan | Kait kekal di luar penutup | Amaran |

## Lajur jadual lenturan

Tab {{ui:Jadual lenturan}} dan CSV-nya mempunyai lajur ini: Tanda bar, Saiz, Bentuk, A (mm), B (mm), C (mm), Bilangan, Panjang potongan (mm), Jumlah panjang (m), kg/m, Berat setiap satu (kg), Jumlah berat (kg), Digunakan untuk. Baris terakhir menjumlahkan bilangan, panjang dan berat.
