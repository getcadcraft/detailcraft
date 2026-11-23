---
title: Semak anggota keluli mengikut kod reka bentuk
summary: Buat gabungan beban daripada ASCE 7 atau EN 1990, semak setiap bentuk I keluli mengikut AISC 360 atau EN 1993-1-1, dan lihat berapa banyak kapasitinya yang digunakan oleh setiap anggota. Bantuan sehingga jurutera telah menyemaknya.
keywords: reka bentuk, semakan reka bentuk, reka bentuk keluli, penggunaan, utilisation, utilization, kapasiti, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurocode, gabungan beban, LRFD, Annex Negara, lengkokan, lengkokan sisi-kilasan, ricihan, lenturan, interaksi, struktur, pelajar, jurutera
from: 15685c4e
---

Selepas anda menjalankan analisis, blok {{ui:Semakan reka bentuk}} dalam tab {{ui:Analisis}} menukar dayanya kepada keputusan bagi setiap anggota keluli: berapa banyak kapasitinya yang digunakan oleh kombinasi terburuk.

:::warning
Ia ialah **bantuan sehingga jurutera telah menyemaknya**. Ia hanya menggunakan daya peringkat pertama (tiada kesan peringkat kedua), tidak menyemak kilasan, bahagian langsing (kelas 4), bentuk dikimpal mahupun sambungan, dan ia meninggalkan perkara yang tidak dapat disemaknya serta memberitahu anda tentang itu. Ia tidak menggantikan semakan jurutera, dan keputusannya bukan cop pengesahan.
:::

## Pilih kod

{{ui:Kod reka bentuk}} disimpan bersama model; pilih satu daripada dua keluarga:

- **ASCE 7 + AISC 360** (US, LRFD): gabungan beban ASCE 7-16 §2.3.1 dan semakan anggota ANSI/AISC 360-16.
- **EN 1990 + EN 1993-1-1** (Eurocode): gabungan EN 1990 (Pers. 6.10, atau 6.10a dan 6.10b) dan semakan anggota EN 1993-1-1.

Kemudian pilih {{ui:Gred keluli}} (A992, A36 dan lain-lain; atau S235 hingga S450, dengan kekuatan alah yang lebih rendah di atas 40 mm).

## Buat kombinasi

Berikan setiap kes beban **jenisnya** (mati, hidup, hidup bumbung, salji, angin, seismik) dalam senarai kes, kemudian tekan {{ui:Buat kombinasi}}. DetailCraft menulis kombinasi kod sebagai kombinasi kes anda: setiap kombinasi kekuatan yang disenaraikan kod untuk jenis yang anda ada, dan kombinasi had perkhidmatan untuk pesongan. Kombinasi yang anda taip sendiri kekal; ia tidak disemak mengikut kod. Kes berjenis {{ui:Lain-lain}} tidak digabungkan.

Untuk Eurocode, faktornya ialah **nilai yang disyorkan** EN 1990 Annex A1 (γG 1.35, γQ 1.5, nilai ψ bagi beban dikenakan, salji dan angin) dan EN 1993-1-1 (γM0 = γM1 = 1.0). Annex Negara negara anda menukar sebahagian daripadanya: buka {{ui:Nilai Annex Negara}}, taip nilai anda, dan buat kombinasi semula. Nilai itu disimpan dalam model.

## Semak anggota

Tekan {{ui:Semak anggota}}. Bagi setiap bentuk I keluli, jadual menunjukkan **penggunaannya** (permintaan berbanding kapasiti: 100 % ialah had), sama ada ia lulus, semakan mana yang menentukan, dan kombinasi yang mana. Anggota diwarnakan pada model: biru sedikit digunakan, hijau kira-kira separuh, kuning-jingga hampir had, merah melebihi had, kelabu tidak disemak. Klik nama anggota untuk memilihnya.

Semakan, dengan klausa yang diikutinya (disenaraikan dalam laporan):

- tegangan, mampatan dengan lengkokan lenturan dan kilasan, lenturan pada kedua-dua paksi dengan lengkokan sisi-kilasan, ricihan, dan lenturan dengan daya paksi;
- pesongan bagi kombinasi had perkhidmatan berbanding {{ui:Had pesongan}} yang anda tetapkan (L/360 sebagai permulaan; nilai projek, bukan nilai kod).

**Panjang.** Panjang ditopang ialah sebahagian daripada setiap bahagian yang dianalisis (1 = tidak ditopang); topang diandaikan berjarak sama dari permulaan. Faktor K didarab dengan panjang untuk lengkokan. Sambungan tempat anggota lain bertemu memecahkan anggota, dan setiap bahagian disemak mengikut panjangnya sendiri, seperti yang ditopang di situ.

## Apa yang tidak disemak

Anggota menunjukkan **tidak disemak**, dengan sebabnya, dan bukannya nombor, apabila bahagian keratannya bukan bentuk yang diketahui oleh semakan (sudut, saluran; tiub segi empat dan bulat disemak apabila dindingnya padat), apabila ia bentuk tersuai (dikimpal), atau apabila sebahagian langsing (AISC) atau kelas 4 (Eurocode) dalam lenturan. Bahagian langsing dalam mampatan mengeluarkan semakan mampatan dan anggota itu menunjukkan *lulus, disemak sebahagian*. Kimpalan pada sambungan mempunyai [semakan sendiri](topic:weld-checks). Juga belum dibina: kesan peringkat kedua, kilasan, ricihan lengkokan bersama lenturan, sambungan berbolt, lesu, kebakaran dan perincian seismik. Anggota konkrit dan beban seismik mempunyai [semakan sendiri](topic:concrete-and-seismic). Lihat [Belum dibina](topic:not-built-yet).

## Laporan

{{ui:Laporan (PDF)}} dan {{ui:Laporan (CSV)}} mendapat jadual reka bentuk selepas anda membuat semakan: edisi kod, tetapan dan nilai Annex Negara, penggunaan mengikut anggota, setiap klausa yang digunakan, dan bagi setiap anggota, permintaan, kapasiti dan penggunaan setiap semakan dalam kombinasi yang menentukannya.
