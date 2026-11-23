---
title: Periksa batang baja sesuai standar desain
summary: Buat kombinasi beban dari ASCE 7 atau EN 1990, periksa setiap profil I baja terhadap AISC 360 atau EN 1993-1-1, dan lihat berapa persen kapasitasnya dipakai oleh setiap batang. Ini adalah bantuan sampai seorang insinyur telah meninjaunya.
keywords: desain, pemeriksaan desain, desain baja, utilisasi, utilization, kapasitas, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurocode, kombinasi beban, LRFD, National Annex, tekuk, tekuk lateral-torsi, geser, lentur, interaksi, struktur, mahasiswa, insinyur
from: 15685c4e
---

Setelah Anda menjalankan analisis, blok {{ui:Pemeriksaan desain}} di tab {{ui:Analisis}} mengubah gayanya menjadi keputusan untuk setiap batang baja: seberapa besar kapasitas batang yang dipakai oleh kombinasi terburuknya.

:::warning
Ini adalah **bantuan sampai seorang insinyur telah meninjaunya**. Ini hanya memakai gaya orde pertama (tanpa efek orde kedua), tidak memeriksa torsi, bagian langsing (kelas 4), profil las, atau sambungan, dan membiarkan di luar apa yang tidak dapat diperiksanya serta menyebutkannya. Ini tidak menggantikan pemeriksaan insinyur, dan hasilnya bukan stempel pengesahan.
:::

## Pilih standar

{{ui:Standar desain}} disimpan bersama model; pilih salah satu dari dua keluarga:

- **ASCE 7 + AISC 360** (US, LRFD): kombinasi beban ASCE 7-16 §2.3.1 dan pemeriksaan batang ANSI/AISC 360-16.
- **EN 1990 + EN 1993-1-1** (Eurocode): kombinasi EN 1990 (Pers. 6.10, atau 6.10a dan 6.10b) dan pemeriksaan batang EN 1993-1-1.

Lalu pilih {{ui:Mutu baja}} (A992, A36, dan lainnya; atau S235 sampai S450, dengan kekuatan luluh yang lebih rendah di atas 40 mm).

## Buat kombinasinya

Beri setiap kasus beban **jenisnya** (mati, hidup, hidup atap, salju, angin, seismik) di daftar kasus, lalu tekan {{ui:Buat kombinasi}}. DetailCraft menulis kombinasi standar sebagai kombinasi dari kasus Anda: setiap kombinasi kekuatan yang dicantumkan standar untuk jenis yang Anda miliki, dan kombinasi layan untuk lendutan. Kombinasi yang Anda ketik sendiri tetap ada; kombinasi tersebut tidak diperiksa terhadap standar. Kasus berjenis {{ui:Lainnya}} tidak dikombinasikan.

Untuk Eurocode, faktornya adalah **nilai yang direkomendasikan** dari EN 1990 Lampiran A1 (γG 1.35, γQ 1.5, nilai ψ untuk beban guna, salju, dan angin) dan EN 1993-1-1 (γM0 = γM1 = 1.0). National Annex negara Anda mengubah sebagian darinya: buka {{ui:Nilai National Annex}}, ketik nilai Anda, lalu buat kombinasinya lagi. Nilai tersebut disimpan dalam model.

## Periksa batangnya

Tekan {{ui:Periksa batang}}. Untuk setiap profil I baja, tabel menampilkan **utilisasinya** (beban dibagi kapasitas: 100 % adalah batasnya), apakah lolos, pemeriksaan mana yang menentukan, dan kombinasi mana. Batang diberi warna pada model: biru jika sedikit dipakai, hijau sekitar setengah, kuning ocher mendekati batas, merah jika melebihi, abu-abu jika tidak diperiksa. Klik nama batang untuk memilihnya.

Pemeriksaannya, beserta pasal yang diikuti masing-masing (tercantum dalam laporan):

- tarik, tekan dengan tekuk lentur dan tekuk torsi, lentur terhadap kedua sumbu dengan tekuk lateral-torsi, geser, dan lentur dengan gaya aksial;
- lendutan dari kombinasi layan terhadap {{ui:Batas lendutan}} yang Anda atur (mulai dari L/360; ini nilai proyek, bukan nilai standar).

**Panjang.** Panjang terkekang adalah bagian dari setiap potongan yang dianalisis (1 = tidak terkekang); pengekang dianggap berjarak sama, dimulai dari ujung. Faktor K mengalikan panjang untuk tekuk. Sambungan tempat batang lain bertumpu membagi sebuah batang, dan setiap potongan diperiksa berdasarkan panjangnya sendiri, seolah terkekang di situ.

## Yang tidak diperiksa

Batang menampilkan **tidak diperiksa**, beserta alasannya, sebagai pengganti angka ketika penampangnya bukan bentuk yang dikenal pemeriksaan (siku, kanal; tabung persegi dan bulat diperiksa jika dindingnya kompak), ketika berupa bentuk kustom (dilas), atau ketika suatu bagian langsing (AISC) atau kelas 4 (Eurocode) dalam lentur. Bagian langsing yang tertekan menghilangkan pemeriksaan tekan, dan batang terbaca *lolos, sebagian diperiksa*. Las pada sambungan memiliki [pemeriksaan sendiri](topic:weld-checks). Juga belum dibuat: efek orde kedua, torsi, tekuk geser yang bersamaan dengan lentur, sambungan baut, kelelahan, detail tahan api, dan detail seismik. Batang beton dan beban seismik memiliki [pemeriksaan sendiri](topic:concrete-and-seismic). Lihat [Belum dibuat](topic:not-built-yet).

## Laporan

{{ui:Laporan (PDF)}} dan {{ui:Laporan (CSV)}} memuat tabel desain setelah Anda memeriksa: edisi standar, pengaturan dan nilai National Annex, utilisasi per batang, setiap pasal yang dipakai, dan untuk setiap batang beban, kapasitas, serta utilisasi tiap pemeriksaan dalam kombinasi yang menentukan.
