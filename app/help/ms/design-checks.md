---
title: Semak anggota keluli mengikut kod reka bentuk
summary: Buat gabungan beban daripada ASCE 7 atau EN 1990, semak setiap bentuk-I keluli mengikut AISC 360 atau EN 1993-1-1, dan lihat berapa banyak kapasiti setiap anggota digunakan. Satu bantuan sehingga jurutera telah menyemaknya.
keywords: reka bentuk, semakan reka bentuk, reka bentuk keluli, penggunaan, kapasiti, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurocode, gabungan beban, LRFD, Annex Negara, lengkukan, lengkukan sisi-kilasan, ricih, lenturan, interaksi, struktur, pelajar, jurutera
from: 66b6d545
---

Selepas anda menjalankan analisis, blok {{ui:Design checks}} dalam tab {{ui:Analysis}} menukarkan dayanya kepada keputusan bagi setiap anggota keluli: berapa banyak kapasitinya digunakan oleh gabungan yang paling teruk.

:::warning
Ia adalah **bantuan sehingga jurutera telah menyemaknya**. Ia hanya menggunakan daya tertib pertama (tiada kesan tertib kedua), tidak menyemak kilasan, bahagian langsing (kelas 4), bentuk dikimpal dan sambungan, dan ia meninggalkan apa yang tidak dapat disemaknya serta menyatakannya. Ia tidak menggantikan semakan jurutera, dan keputusannya bukan cop pengesahan.
:::

## Pilih kod

{{ui:Design code}} disimpan bersama model; pilih salah satu daripada dua keluarga:

- **ASCE 7 + AISC 360** (AS, LRFD): gabungan beban ASCE 7-16 §2.3.1 dan semakan anggota ANSI/AISC 360-16.
- **EN 1990 + EN 1993-1-1** (Eurocode): gabungan EN 1990 (Pers. 6.10, atau 6.10a dan 6.10b) dan semakan anggota EN 1993-1-1.

Kemudian pilih {{ui:Steel grade}} (A992, A36 dan lain-lain; atau S235 hingga S450, dengan kekuatan alah yang lebih rendah di atas 40 mm).

## Buat gabungan

Berikan setiap kes beban **jenisnya** (mati, hidup, hidup bumbung, salji, angin, seismik) dalam senarai kes, kemudian tekan {{ui:Make combinations}}. DetailCraft menulis gabungan kod sebagai gabungan kes anda: setiap gabungan kekuatan yang disenaraikan kod bagi jenis yang anda ada, dan gabungan kebolehkhidmatan untuk pesongan. Gabungan yang anda taip sendiri kekal; ia tidak disemak terhadap kod. Kes jenis {{ui:Other}} tidak digabungkan.

Bagi Eurocode, faktornya ialah **nilai yang disyorkan** EN 1990 Annex A1 (γG 1.35, γQ 1.5, nilai ψ bagi beban dikenakan, salji dan angin) dan EN 1993-1-1 (γM0 = γM1 = 1.0). Annex Negara negara anda menukar sebahagian daripadanya: buka {{ui:National Annex values}}, taip nilai anda, dan buat gabungan semula. Nilai ini disimpan dalam model.

## Semak anggota

Tekan {{ui:Check members}}. Bagi setiap bentuk-I keluli, jadual menunjukkan **penggunaannya** (permintaan berbanding kapasiti: 100 % ialah had), sama ada ia lulus, semakan mana yang mengawal, dan gabungan yang mana. Anggota diwarnakan pada model: biru digunakan sedikit, hijau kira-kira separuh, kuning-jingga hampir had, merah melebihi had, kelabu tidak disemak. Klik nama anggota untuk memilihnya.

Semakan, bersama klausa yang diikuti setiap satu (disenaraikan dalam laporan):

- tegangan, mampatan dengan lengkukan lentur dan kilasan, lenturan pada kedua-dua paksi dengan lengkukan sisi-kilasan, ricih, dan lenturan dengan daya paksi;
- pesongan gabungan kebolehkhidmatan berbanding {{ui:Deflection limit}} yang anda tetapkan (L/360 sebagai permulaan; nilai projek, bukan nilai kod).

**Panjang.** Panjang bertahan ialah sebahagian daripada setiap keping yang dianalisis (1 = tidak bertahan); penahan diambil berjarak sama dari permulaan. Faktor K mendarab panjang untuk lengkukan. Sambungan yang mana anggota lain mendarat memisahkan satu anggota, dan setiap keping disemak pada panjangnya sendiri, seolah-olah bertahan di situ.

## Apa yang tidak disemak

Anggota menunjukkan **tidak disemak**, dengan sebabnya, dan bukannya nombor apabila keratannya bukan bentuk-I yang diketahui semakan (tiub, sudut, saluran), apabila ia bentuk tersuai (dikimpal), atau apabila sesuatu bahagian langsing (AISC) atau kelas 4 (Eurocode) dalam lenturan. Bahagian langsing dalam mampatan menyingkirkan semakan mampatan dan anggota dibaca sebagai *lulus, disemak separa*. Juga belum dibina: kesan tertib kedua, kilasan, lengkukan ricih bersama lenturan, sambungan, lesu, kebakaran dan perincian seismik. Anggota konkrit dan beban seismik mempunyai [semakan sendiri](topic:concrete-and-seismic). Lihat [Belum dibina](topic:not-built-yet).

## Laporan

{{ui:Report (PDF)}} dan {{ui:Report (CSV)}} mendapat jadual reka bentuk selepas anda membuat semakan: edisi kod, tetapan dan nilai Annex Negara, penggunaan mengikut anggota, setiap klausa yang digunakan, dan bagi setiap anggota permintaan, kapasiti dan penggunaan bagi setiap semakan dalam gabungan yang mengawalnya.
