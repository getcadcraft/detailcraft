---
title: Periksa batang baja terhadap standar desain
summary: Buat kombinasi beban dari ASCE 7 atau EN 1990, periksa setiap profil I baja terhadap AISC 360 atau EN 1993-1-1, dan lihat seberapa besar kapasitas tiap batang yang terpakai. Ini alat bantu sampai insinyur telah memeriksanya.
keywords: desain, pemeriksaan desain, desain baja, pemanfaatan, utilisasi, kapasitas, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurocode, kombinasi beban, LRFD, National Annex, tekuk, tekuk lateral-torsi, geser, lentur, interaksi, struktural, mahasiswa, insinyur
from: 66b6d545
---

Setelah Anda menjalankan analisis, blok {{ui:Design checks}} di tab {{ui:Analysis}} mengubah gayanya menjadi vonis untuk setiap batang baja: seberapa besar kapasitasnya terpakai oleh kombinasi terburuk.

:::warning
Ini adalah **alat bantu sampai insinyur telah memeriksanya**. Alat ini hanya memakai gaya orde pertama (tanpa efek orde kedua), tidak memeriksa torsi, bagian langsing (kelas 4), bentuk las, atau sambungan, dan membiarkan yang tidak dapat diperiksanya serta menyatakannya. Alat ini tidak menggantikan pemeriksaan insinyur, dan hasilnya bukan stempel pengesahan.
:::

## Pilih standar

{{ui:Design code}} disimpan bersama model; pilih salah satu dari dua keluarga:

- **ASCE 7 + AISC 360** (Amerika Serikat, LRFD): kombinasi beban ASCE 7-16 §2.3.1 dan pemeriksaan batang ANSI/AISC 360-16.
- **EN 1990 + EN 1993-1-1** (Eurocode): kombinasi EN 1990 (Pers. 6.10, atau 6.10a dan 6.10b) dan pemeriksaan batang EN 1993-1-1.

Lalu pilih {{ui:Steel grade}} (A992, A36, dan lainnya; atau S235 sampai S450, dengan kekuatan leleh yang lebih rendah di atas 40 mm).

## Buat kombinasi

Beri setiap kasus beban **jenisnya** (mati, hidup, hidup atap, salju, angin, seismik) dalam daftar kasus, lalu tekan {{ui:Make combinations}}. DetailCraft menulis kombinasi standar sebagai kombinasi dari kasus Anda: setiap kombinasi kekuatan yang dicantumkan standar untuk jenis yang Anda miliki, dan kombinasi layan untuk lendutan. Kombinasi yang Anda ketik sendiri tetap ada; kombinasi itu tidak diperiksa terhadap standar. Kasus berjenis {{ui:Other}} tidak dikombinasikan.

Untuk Eurocode, faktornya adalah **nilai yang direkomendasikan** EN 1990 Lampiran A1 (γG 1.35, γQ 1.5, nilai ψ untuk beban terpasang, salju, dan angin) serta EN 1993-1-1 (γM0 = γM1 = 1.0). Annex nasional negara Anda mengubah sebagian darinya: buka {{ui:National Annex values}}, ketik nilai Anda, lalu buat kombinasi lagi. Nilai tersebut disimpan di model.

## Periksa batang

Tekan {{ui:Check members}}. Untuk setiap batang I baja, tabel menampilkan **pemanfaatan** (beban dibagi kapasitas: 100 % adalah batasnya), apakah lolos, pemeriksaan mana yang menentukan, dan kombinasi mana. Batang diberi warna pada model: biru jika sedikit terpakai, hijau sekitar setengahnya, oker mendekati batas, merah jika melampaui, dan abu-abu jika tidak diperiksa. Klik nama batang untuk memilihnya.

Pemeriksaannya, dengan klausul yang diikuti masing-masing (tercantum di laporan):

- tarik, tekan dengan tekuk lentur dan torsi, lentur terhadap kedua sumbu dengan tekuk lateral-torsi, geser, dan lentur dengan gaya aksial;
- lendutan dari kombinasi layan terhadap {{ui:Deflection limit}} yang Anda atur (L/360 sebagai awal; ini nilai proyek, bukan nilai standar).

**Panjang.** Panjang terkekang adalah bagian dari setiap potongan yang dianalisis (1 = tidak terkekang); kekangan dianggap berjarak sama dari awal. Faktor K mengalikan panjang untuk tekuk. Sambungan tempat batang lain bertemu membagi batang, dan setiap potongan diperiksa pada panjangnya sendiri, seolah terkekang di sana.

## Yang tidak diperiksa

Batang menampilkan **tidak diperiksa**, dengan alasannya, sebagai pengganti angka ketika penampangnya bukan profil I yang dikenal pemeriksaan (tabung, siku, kanal), ketika bentuknya kustom (dilas), atau ketika sebagian part langsing (AISC) atau kelas 4 (Eurocode) pada lentur. Bagian langsing yang tertekan membuat pemeriksaan tekan dilewati, dan batang terbaca *lolos, sebagian diperiksa*. Juga belum dibuat: efek orde kedua, torsi, tekuk geser bersama lentur, sambungan, kelelahan, api, dan detailing seismik. Komponen beton dan beban seismik memiliki [pemeriksaan sendiri](topic:concrete-and-seismic). Lihat [Belum dibuat](topic:not-built-yet).

## Laporan

{{ui:Report (PDF)}} dan {{ui:Report (CSV)}} mendapatkan tabel desain setelah Anda memeriksa: edisi standar, pengaturan dan nilai National Annex, pemanfaatan per batang, setiap klausul yang dipakai, dan untuk setiap batang, beban, kapasitas, serta pemanfaatan setiap pemeriksaan dalam kombinasi yang menentukan.
