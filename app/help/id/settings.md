---
title: Pengaturan DetailCraft
summary: Mulai batang baru sebagai profil US atau Eropa, atur seberapa jauh Duplikat memindahkan salinan, pilih apakah salinan membawa sambungannya, dan tampilkan atau sembunyikan baut di tampilan 3D.
keywords: pengaturan, preferensi, ukuran lembar, ukuran kertas, gambar, opsi, baja, aisc, en, profil eropa, profil us, profil metrik, profil default, mutu, s355, a992, offset duplikat, offset tempel, salin sambungan, baut, baut angkur, sembunyikan baut, atur ulang
from: e46cea57
---

Buka {{ui:Pengaturan}} dengan ikon roda gigi di bilah aplikasi atau {{key:Mod+,}}. Tab pertama, {{ui:DetailCraft}}, memuat pengaturan milik aplikasi ini; {{ui:Umum}} memuat yang dibagikan setiap aplikasi CadCraft (tema, bilah alat, panel). Pengaturan DetailCraft hanya ada di aplikasi: Anda mengubahnya di sini, langsung berlaku, dan peramban ini mengingatnya. Pengaturan tersebut tidak disimpan di file model Anda.

## Batang baru

Profil dan mutu yang dimulai oleh alat penempatan:

| Alat | Profil US (AISC), A992 | Profil Eropa (EN), S355 |
|---|---|---|
| {{ui:Balok}} | W16x26, A992 | IPE300, S355 |
| {{ui:Kolom}} | W12x50, A992 | HEB200, S355 |
| {{ui:Bresing}} | HSS6x6x1/4, A500 Gr C | HEA160, S355 |
| {{ui:Pelat}} | A36 | S355 |

Profil US adalah awalnya. Pilihan Eropa menggunakan HEA160 untuk bresing karena katalog EN DetailCraft belum memiliki profil berongga ([Katalog profil](topic:profile-catalog)). Anda tetap dapat memilih profil dan mutu apa pun untuk bagian berikutnya di panel {{ui:Properti}} saat alat penempatan aktif. Batang yang sudah ada di model mempertahankan profil dan mutunya sendiri.

## Duplikat dan tempel

- **Offset (mm)**: x, y dan z. {{ui:Duplikat}} ({{key:Mod+D}}) menempatkan salinan sejauh ini dari aslinya, dan bentuk {{ui:Tempel berdasarkan offset (mm, dari aslinya)}} dimulai dengannya. Nilai awalnya 6000, 0, 0: satu bentang 6 m sepanjang grid bernomor. Atur ke jarak bentang Anda, atau ke tinggi level pada z untuk menyalin lantai ke atas.
- **Salin pelat ujung dan pelat dasar bersama batangnya** (aktif di awal): sambungan ikut serta dengan salinan hanya jika setiap batang yang dihubungkannya ikut disalin. Matikan untuk menyalin batang dan fondasi tanpa sambungannya, misalnya untuk mencoba sambungan lain pada salinan.

Lihat [Salin, tempel dan duplikat](topic:copy-paste).

## Tampilan 3D

**Tampilkan baut dan batang angkur** (aktif di awal). Hilangkan centangnya untuk menyembunyikannya di tampilan dan melihat lubang serta pelat dari sambungan yang padat. Baut yang disembunyikan tidak dapat diklik; klik pelat untuk memilih sambungan. Daftar material, gambar dan setiap ekspor tetap memuat setiap baut dan batang.

## Indikator sudut

Yang ditampilkan di sudut tampilan 3D: **Kubus tampilan** (awal; kanan atas — klik sisi, tepi atau sudut untuk melihat dari sana, seret untuk mengorbit, seret cincin kompasnya untuk memutar model), **Ikon sumbu** (penanda kecil X, Y, Z di kiri bawah yang berputar mengikuti tampilan: X merah, Y hijau, Z biru) atau **Tidak ada**. Hanya di {{ui:3D}}; {{ui:Denah}} dan {{ui:Tampak}} tidak menampilkan keduanya. Lihat [Kubus tampilan](topic:view-cube).

## Atur ulang

{{ui:Atur ulang pengaturan DetailCraft}} di bagian bawah dialog mengembalikan ini ke awal (profil US, offset 6000, 0, 0, sambungan disalin, baut ditampilkan), beserta yang ada di {{ui:Umum}}.

## Gambar

**Ukuran lembar**: lembar gambar dan gambar kerja dibuat dalam orientasi lanskap: A4, A3 (awal), A2, A1, ANSI B, ANSI C atau ANSI D. Jendela {{ui:Gambar}} dan gambar kerja memiliki daftar yang sama. Lihat [Gambar tata letak dan perakitan](topic:drawings).

## Tulangan

- **Nama batang ASTM**: #3 sampai #11, atau #10 sampai #36 metrik lunak untuk batang yang sama.
- **Kode bentuk daftar pembengkokan**: S, L, U milik DetailCraft; tipe ACI 315; atau kode bentuk BS 8666. Lihat [Referensi tulangan](topic:rebar-reference).

## Seret untuk memilih

**Persegi panjang** (seperti sebelumnya) atau **Laso**: garis bebas, dengan {{key:Space}} untuk beralih antara di dalam, menyentuh, dan pagar saat Anda menyeret. Lihat [Pilih dengan jendela](topic:select-and-change#select-with-a-window).
