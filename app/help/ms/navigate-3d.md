---
title: Bergerak di sekitar pandangan 3D
summary: Pusing, pan dan zum dengan tetikus, pad sentuh atau skrin sentuh, dan bila hendak menggunakan Pelan dan Dongakan sebagai gantinya.
keywords: orbit, pusing, pan, zum, navigasi, pandangan, kamera, pad sentuh, sentuh, pelan, dongakan, muat, tetikus
from: 02c9c7b9
---

Pandangan mempunyai tiga mod, dipilih dalam bar pandangan di atasnya: {{ui:3D}}, {{ui:Pelan}} dan {{ui:Dongakan}}. Butang tetikus melakukan perkara yang berbeza dalam 3D berbanding Pelan dan Dongakan, jadi baca kedua-dua jadual.

## Dalam 3D

:::mouse
| Untuk | Lakukan ini |
|---|---|
| Pusing sekeliling model | Seret dengan butang kiri |
| Pan | Seret dengan butang kanan, atau tahan {{key:Shift}} dan seret dengan butang kiri |
| Zum | Putar roda, atau seret ke atas dan bawah dengan butang tengah (roda ditekan) |
| Pilih bahagian | Klik padanya (klik yang bergerak kurang daripada beberapa piksel) |
| Lihat keseluruhan model | Butang muat di hujung kanan bar pandangan |
:::

:::touch
| Untuk | Lakukan ini |
|---|---|
| Pusing sekeliling model | Seret dengan satu jari |
| Pan | Seret dengan dua jari |
| Zum | Cubit dengan dua jari |
| Pilih bahagian | Ketik padanya |
| Lihat keseluruhan model | Butang muat di hujung kanan bar pandangan |
:::

ViewCube di sudut kanan atas (di bawah bar pandangan) berpusing bersama model: klik muka, tepi atau bucu untuk melihat dari situ, seret untuk memusingnya, atau klik butang rumahnya untuk kembali ke permulaan. Lihat [ViewCube](topic:view-cube).

Model berpusing di sekitar tengah pandangan, dan roda zum ke arah tengah pandangan, bukan ke arah penunjuk. Untuk melihat sudut dengan dekat, pan sudut itu ke tengah dahulu, kemudian zum.

## Dalam Pelan dan Dongakan

Pandangan ini memandang tepat kepada model dan tidak boleh dipusing.

:::mouse
| Untuk | Lakukan ini |
|---|---|
| Pan | Seret dengan butang kiri atau kanan |
| Zum | Putar roda, atau seret ke atas dan bawah dengan butang tengah |
| Pilih bahagian | Klik padanya |
:::

:::touch
| Untuk | Lakukan ini |
|---|---|
| Pan | Seret dengan satu jari |
| Zum | Cubit dengan dua jari (menyeret dua jari juga melakukan pan) |
| Pilih bahagian | Ketik padanya |
:::

## Pad sentuh Mac

:::mac
- **Zum:** leret ke atas atau bawah dengan dua jari, atau cubit. Kedua-duanya sampai ke pandangan sebagai zum.
- **Pusing (3D):** tekan pad sentuh dan seret dengan satu jari. Jika anda menggunakan ketik untuk klik, ketik dua kali dan seret juga berfungsi apabila seretan dihidupkan dalam **System Settings, Accessibility, Pointer Control, Trackpad Options**.
- **Pan (3D):** tahan {{key:Shift}} dan seret. Menahan {{key:Ctrl}} atau {{key:Mod}} semasa menyeret juga melakukan pan. Klik dua jari ialah klik kanan, tetapi menyeret dengannya janggal pada pad sentuh.
- **Pan (Pelan dan Dongakan):** seret sahaja.
- Magic Mouse tiada butang tengah: gunakan seretan {{key:Shift}} untuk pan dan leret pada permukaannya untuk zum.
:::

Lebih lanjut tentang klik kanan dan pan tanpa tetikus: [Kekunci, tetikus dan pad sentuh](common:keys).

## Plan dan Dongakan memudahkan peletakan

Dalam {{ui:3D}}, persilangan pada aras berbeza boleh berada di atas satu sama lain pada skrin, dan klik pergi ke titik terdekat. Dalam {{ui:Pelan}} dan {{ui:Dongakan}} hanya titik aras atau garisan grid yang anda lihat boleh dipilih.

1. Pilih {{ui:Pelan}}, kemudian pilih aras dalam senarai di sebelah butang. Pandangan melihat ke bawah pada aras itu; apa-apa yang lebih daripada 1.5 m di atasnya dipotong.
2. Atau pilih {{ui:Dongakan}}, kemudian pilih garisan grid berhuruf ("Grid A", "Grid B" …). Pandangan memandang tepat pada garisan itu; hanya keluli dalam lingkungan 1 m daripadanya ditunjukkan.

Dongakan hanya ada pada garisan grid berhuruf. Untuk bekerja pada garisan grid bernombor (rangka dari A ke B), gunakan {{ui:3D}}, atau letakkan dengan menaip dalam borang {{ui:Tambah mengikut grid}}. Lihat [Letakkan tiang, rasuk dan tupang](topic:place-members#place-by-grid-without-clicking).

## Pemilihan

- Klik bahagian untuk memilihnya. Ia bertukar warna sorotan dan panel {{ui:Sifat}} menunjukkannya.
- Klik ruang kosong, atau tekan {{key:Esc}}, untuk mengosongkan pilihan.
- Keluli mengatasi konkrit: klik pada tiang di dalam tapak asas lut sinar memilih tiang. Klik tapak asas jauh dari tiang, atau salah satu barnya, untuk memilih tapak asas.
- Klik pada bolt atau plat hujung memilih sambungannya.
- Dalam Pelan dan Dongakan, bahagian yang dipotong tidak boleh diklik.
- Tahan {{key:Shift}} (atau {{key:Ctrl}}, atau {{key:Mod}}) dan klik untuk menambah bahagian ke pilihan atau mengeluarkannya; {{key:Mod+A}} memilih semua. Belum ada pemilihan tetingkap (seret kotak) lagi. Apa yang boleh anda lakukan dengan beberapa bahagian: [Salin, tampal dan pendua](topic:copy-paste).

Anda juga boleh memilih daripada senarai: klik tanda dalam {{ui:Tanda bahagian}} di sebelah kiri, tanda bahagian dalam tab {{ui:Senarai bahan}}, atau {{ui:Pilih}} di sebelah baris dalam {{ui:Masalah}}.

## Jika pandangan kelihatan salah

- Hilang model? Pilih butang muat.
- Pandangan kosong atau kelabu dengan mesej tentang WebGL: lihat [Penyelesaian masalah](topic:troubleshooting#the-3d-view-is-missing).
- Semuanya masih berfungsi tanpa pandangan 3D kecuali klik di dalamnya: panel, laporan dan eksport semuanya berjalan, dan {{ui:Tambah mengikut grid}} meletakkan ahli dengan menaip.
