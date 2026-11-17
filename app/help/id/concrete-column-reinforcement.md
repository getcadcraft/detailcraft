---
title: Tulangi kolom beton persegi panjang
summary: Contoh kerja untuk mendetail kolom beton persegi panjang di DetailCraft: tempatkan, beri tulangan longitudinal dan pengikat, baca pemeriksaannya, sambungan lewatan di atasnya dan tanda tulangan, lalu gambar lembar kerjanya.
keywords: kolom beton, kolom persegi panjang, tulangan kolom, tulangan longitudinal, batang vertikal, pengikat, sengkang, pengikat silang, sambungan lewatan, besi stek, rasio tulangan kolom, 1 persen, 8 persen, jarak pengikat, ACI 318-19 25.7.2, EN 1992-1-1 9.5, gambar kerja, tanda tulangan, 8C1, 3C2
from: aee2a3ca
---

Topik ini membawa satu kolom persegi dari nol sampai menjadi detail yang diperiksa, digambar, dan dijadwalkan. Aturan umum untuk balok, pelat, dan dinding ada di [Mendetail beton bertulang](topic:reinforced-concrete); ini adalah sisi kolomnya, dengan angka yang bisa Anda ulangi.

:::warning
DetailCraft mendetail batang yang Anda berikan. Ia tidak mendesainnya. Batang di bawah ini adalah nilai awal untuk contoh, bukan rekomendasi: insinyur perencana yang memilih ukuran, jumlah, dan jaraknya.
:::

## Apa itu kolom di sini

Kolom persegi panjang memiliki lebar (sepanjang x lokalnya) dan kedalaman melintang (sepanjang y lokalnya), selimut bersih ke pengikat, batang longitudinal di setiap muka, dan pengikat tertutup. Memutarnya memutar seluruhnya; muka tetap disebut "muka lebar" dan "muka kedalaman".

- Batang longitudinal diberikan sebagai jumlah pada muka lebar dan jumlah pada muka kedalaman. Batang sudut dihitung pada keduanya, jadi 3 dan 3 membuat 8 batang; 4 dan 4 membuat 12.
- Pengikat berupa persegi panjang tertutup dengan dua kait di satu sudut, 135° atau 90°. Pengikat pertama berjarak tertentu di atas lantai (dan di bawah yang berikutnya), zona ujung memiliki jarak yang lebih rapat, dan bagian tengah lebih lebar.
- Apa yang dilakukan batang di puncak: diteruskan dan disambung lewatan dengan tulangan di atasnya, dibelokkan dengan kait 90° ke dalam lantai, atau berhenti di bawah puncak.

## Kolom contoh

Kolom 400 × 400 mm, 3600 mm antara lantai di atas dan lantai di bawah, batang longitudinal #8, pengikat #3, selimut bersih 40 mm, f'c 28 MPa, fy 420 MPa, ACI 318-19, interior.

1. Buka tab {{ui:Beton}} dan atur garis grid dan level tempat kolom berdiri (panel kiri).
2. Di {{ui:Tambah berdasarkan grid}}, pilih {{ui:Kolom beton}}, pilih perpotongan grid dan kedua level, atur {{ui:Lebar (mm)}} dan {{ui:Kedalaman melintang (mm)}} menjadi 400, lalu pilih {{ui:Tambah}}.
3. Di panel {{ui:Properti}} atur:
   - {{ui:Selimut beton bersih (mm)}} 40;
   - {{ui:Tulangan longitudinal}} #8, {{ui:Tulangan pada muka lebar}} 3, {{ui:Tulangan pada muka kedalaman}} 3;
   - {{ui:Pengikat}} #3, {{ui:Kait}} 135°, {{ui:Jarak antara (mm)}} 300, {{ui:Panjang zona ujung (mm)}} 600, {{ui:Jarak di zona ujung (mm)}} 150, {{ui:Pertama dari muka (mm)}} 50;
   - {{ui:Tulangan di puncak}} {{ui:Diteruskan dan disambung lewatan dengan tulangan di atas}}.

Setiap perubahan adalah satu langkah urungkan.

### Yang Anda dapatkan

| Bagian | Hasil |
|---|---|
| Tulangan longitudinal | 8 batang #8 (cincin 3 × 3), masing-masing 4375 mm panjangnya: kolom 3600 mm ditambah sambungan lewatan 775 mm di atasnya |
| Sambungan lewatan | 757 mm dibutuhkan untuk sambungan lewatan tekan (ACI 318-19 25.5.5.1, fy 420), 775 mm disediakan: kebutuhan dibulatkan ke kelipatan 25 mm berikutnya |
| Pengikat | 17 pengikat #3, masing-masing dengan panjang potong sekitar 1359 mm, berjarak 150 mm di kedua zona ujung 600 mm dan 300 mm di antaranya |
| Rasio tulangan | 2.5 % dari penampang bruto (batas 1 % sampai 8 %, ACI 318-19 10.6.1.1) |
| Jarak bersih batang | 112 mm (minimal 40 mm, ACI 318-19 25.2.3) |
| Jarak pengikat | 300 mm (diizinkan 400 mm: yang terkecil dari 16 diameter batang, 48 diameter pengikat, dan sisi yang lebih kecil, ACI 318-19 25.7.2.1) |
| Ukuran pengikat | #3 (diizinkan hingga 9.5 mm, ACI 318-19 25.7.2.2) |

Semua ini ada di daftar {{ui:Pemeriksaan}} elemen; sambungan lewatan juga ada di {{ui:Sambungan lewatan dan angkur}}.

## Pengikat silang

Dengan satu pengikat perimeter, hanya batang sudut yang tertahan. ACI 318-19 25.7.2.3 membiarkan batang tengah pada muka tanpa penahan jika berada dalam 150 mm bersih dari batang sudut. Dengan 3 batang pada muka, seperti di atas, itu terpenuhi. Dengan 4 batang atau lebih pada muka, tidak terpenuhi, dan DetailCraft menyatakannya sebagai peringatan ({{ui:Pemeriksaan}} dan Masalah): "pengikat silang" diperlukan. **Pengikat silang belum digambar**: tambahkan di gambar secara manual, atau pilih batang yang lebih sedikit pada muka.

Untuk EN 1992-1-1, DetailCraft memeriksa ukuran batang (minimal 8 mm), jumlah batang (minimal 4), luas baja (0.2 % sampai 4 % penampang), jarak bersih, dan jarak sengkang (9.5.2 dan 9.5.3).

## Sambungan lewatan, fondasi, dan kolom di bawah

- Jika **sebuah fondasi model berdiri di bawah kolom**, kolom disambung lewatan dengan besi stek fondasi, dan sambungan lewatannya juga diperiksa.
- Jika **kolom lain dalam model berdiri di bawahnya**, ia disambung lewatan dengan batang kolom itu.
- Berikan {{ui:Panjang sambungan lewatan (mm, 0 = sesuai kebutuhan)}} sendiri untuk menggantinya; yang lebih pendek daripada yang dibutuhkan adalah masalah dan ditandai * di tabel.
- Sambungan lewatan tekan digunakan secara default ({{ui:Sambungan lewatan tekan}} di pengaturan); pilih {{ui:Sambungan lewatan tarik}} ketika kolom bisa mengalami tarik.

## Tanda, jadwal, dan lembar kerja

Batang identik berbagi satu tanda: batang longitudinal kolom di atas adalah 8C1, pengikatnya 17C2 (angka dahulu, lalu huruf jenis C untuk kolom, dan nomor berjalan). Tanda muncul di tab {{ui:Daftar pembengkokan}}, dengan panjang potong dan beratnya, serta di CSV dari {{ui:Keluaran}} › {{ui:Lainnya}} › {{ui:Pembengkokan}}.

Pilih {{ui:Gambar kerja}} di sebelah kolom untuk lembar dengan kolom dalam tampak (setiap batang, tandanya, zona pengikat, dan sambungan lewatan diberi dimensi) dan potongan di tengah, diikuti lembar pembengkokan batang. Simpan {{ui:Lembar ini sebagai PDF}}.

## Yang tidak dilakukan ini

- Kolom bulat dan spiral, dan kolom yang tidak persegi panjang: belum dibuat.
- Pengikat sudut dan silang di dalam penampang, serta detail seismik (ACI 318-19 pasal 18): belum dibuat.
- Sambungan lewatan pada posisi yang Anda pilih, atau berselang-seling: semua batang disambung lewatan pada satu penampang yang sama.
- Apakah batang cukup untuk beban: itu desain insinyur perencana.
