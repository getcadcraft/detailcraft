---
title: Bergerak di sekitar tampilan 3D
summary: Putar, geser, dan zoom dengan mouse, trackpad, atau layar sentuh, dan kapan menggunakan Denah dan Tampak sebagai gantinya.
keywords: orbit, putar, geser, zoom, navigasi, tampilan, kamera, trackpad, sentuh, denah, tampak, paskan, mouse
from: 02c9c7b9
---

Tampilan memiliki tiga mode, dipilih di bilah tampilan di atasnya: {{ui:3D}}, {{ui:Denah}}, dan {{ui:Tampak}}. Tombol mouse melakukan hal yang berbeda di 3D dibandingkan di Denah dan Tampak, jadi baca kedua tabelnya.

## Di 3D

:::mouse
| Untuk | Lakukan ini |
|---|---|
| Berputar mengelilingi model | Seret dengan tombol kiri |
| Geser | Seret dengan tombol kanan, atau tahan {{key:Shift}} dan seret dengan tombol kiri |
| Zoom | Putar roda, atau seret ke atas dan bawah dengan tombol tengah (roda ditekan) |
| Pilih anggota | Klik (klik yang bergerak kurang dari beberapa piksel) |
| Lihat seluruh model | Tombol paskan di ujung kanan bilah tampilan |
:::

:::touch
| Untuk | Lakukan ini |
|---|---|
| Berputar mengelilingi model | Seret dengan satu jari |
| Geser | Seret dengan dua jari |
| Zoom | Cubit dengan dua jari |
| Pilih anggota | Ketuk |
| Lihat seluruh model | Tombol paskan di ujung kanan bilah tampilan |
:::

Kubus tampilan di kanan atas (di bawah bilah tampilan) berputar mengikuti model: klik sisi, tepi, atau sudut untuk melihat dari sana, seret untuk memutarnya, atau klik tombol rumahnya untuk kembali ke awal. Lihat [Kubus tampilan](topic:view-cube).

Model berputar di sekitar tengah tampilan, dan roda melakukan zoom ke arah tengah tampilan, bukan ke penunjuk. Untuk melihat sudut tertentu dari dekat, geser sudut itu ke tengah lebih dahulu, lalu zoom.

## Di Denah dan Tampak

Tampilan ini menghadap lurus ke model dan tidak dapat diputar.

:::mouse
| Untuk | Lakukan ini |
|---|---|
| Geser | Seret dengan tombol kiri atau kanan |
| Zoom | Putar roda, atau seret ke atas dan bawah dengan tombol tengah |
| Pilih anggota | Klik |
:::

:::touch
| Untuk | Lakukan ini |
|---|---|
| Geser | Seret dengan satu jari |
| Zoom | Cubit dengan dua jari (menyeret dua jari juga menggeser) |
| Pilih anggota | Ketuk |
:::

## Trackpad Mac

:::mac
- **Zoom:** geser ke atas atau bawah dengan dua jari, atau cubit. Keduanya diterima tampilan sebagai zoom.
- **Putar (3D):** tekan trackpad dan seret dengan satu jari. Jika Anda memakai ketuk untuk klik, ketuk dua kali dan seret juga berfungsi jika seret diaktifkan di **System Settings, Accessibility, Pointer Control, Trackpad Options**.
- **Geser (3D):** tahan {{key:Shift}} dan seret. Menahan {{key:Ctrl}} atau {{key:Mod}} saat menyeret juga menggeser. Klik dua jari adalah klik kanan, tetapi menyeret dengannya kurang nyaman di trackpad.
- **Geser (Denah dan Tampak):** cukup seret.
- Magic Mouse tidak memiliki tombol tengah: gunakan seret {{key:Shift}} untuk menggeser dan usapan di permukaannya untuk zoom.
:::

Selengkapnya tentang klik kanan dan geser tanpa mouse: [Tombol, mouse, dan trackpad](common:keys).

## Peletakan lebih mudah di Denah dan Tampak

Di {{ui:3D}}, perpotongan di level yang berbeda dapat berada di atas satu sama lain di layar, dan klik pergi ke titik yang terdekat. Di {{ui:Denah}} dan {{ui:Tampak}} hanya titik dari level atau garis grid yang sedang Anda lihat yang dapat dipilih.

1. Pilih {{ui:Denah}}, lalu pilih level di daftar di samping tombol. Tampilan menghadap ke bawah ke level itu; apa pun yang lebih dari 1.5 m di atasnya dipotong.
2. Atau pilih {{ui:Tampak}}, lalu pilih garis grid berhuruf ("Grid A", "Grid B" …). Tampilan menghadap lurus ke garis itu; hanya baja dalam 1 m darinya yang ditampilkan.

Tampak hanya tersedia pada garis grid berhuruf. Untuk bekerja pada garis grid bernomor (rangka dari A ke B), gunakan {{ui:3D}}, atau letakkan dengan mengetik di formulir {{ui:Tambah berdasarkan grid}}. Lihat [Letakkan kolom, balok, dan bresing](topic:place-members#place-by-grid-without-clicking).

## Memilih

- Klik anggota untuk memilihnya. Warna sorotan berubah dan panel {{ui:Properti}} menampilkannya.
- Klik ruang kosong, atau tekan {{key:Esc}}, untuk menghapus pilihan.
- Baja menang atas beton: klik kolom di dalam fondasi tembus pandang akan memilih kolom. Klik fondasi jauh dari kolom, atau pada salah satu tulangannya, untuk memilih fondasi.
- Mengklik baut atau pelat ujung memilih sambungannya.
- Di Denah dan Tampak, bagian yang terpotong tidak dapat diklik.
- Tahan {{key:Shift}} (atau {{key:Ctrl}}, atau {{key:Mod}}) dan klik untuk menambah anggota ke pilihan atau mengeluarkannya; {{key:Mod+A}} memilih semuanya. Belum ada pilihan dengan jendela (seret kotak). Apa yang bisa dilakukan dengan beberapa anggota: [Salin, tempel, dan duplikat](topic:copy-paste).

Anda juga dapat memilih dari daftar: klik tanda di {{ui:Tanda part}} di sebelah kiri, tanda part di tab {{ui:Daftar material}}, atau {{ui:Pilih}} di samping baris di {{ui:Masalah}}.

## Jika tampilan terlihat salah

- Kehilangan model? Pilih tombol paskan.
- Tampilan kosong atau abu-abu dengan pesan tentang WebGL: lihat [Pemecahan masalah](topic:troubleshooting#the-3d-view-is-missing).
- Semuanya tetap berfungsi tanpa tampilan 3D kecuali klik di dalamnya: panel, laporan, dan ekspor semuanya berjalan, dan {{ui:Tambah berdasarkan grid}} meletakkan anggota dengan mengetik.
