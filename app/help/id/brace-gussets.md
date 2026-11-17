---
title: Pelat buhul bresing
summary: Sambungkan ujung bresing ke kolom atau balok dengan pelat buhul: siku dan pelat datar dibaut, tabung diceruk dan dilas.
keywords: pelat buhul, gusset, bresing, bresing vertikal, bresing siku, pelat datar, sabuk, bresing HSS, pelat pisau, tabung berceruk, sambungkan
from: 22f6598d
---

Pelat buhul bresing adalah pelat yang dilas di pabrik ke kolom (atau balok) tempat bresing bertumpu, pada bidang bresing. DetailCraft memotong bresing agar bebas dari semua yang ada di sambungan, menempatkan dan menentukan ukuran pelat buhul, lalu menyambungkan bresing ke pelat tersebut: **siku** atau **pelat datar** dengan satu baris baut, atau **tabung** (persegi, persegi panjang, atau HSS bulat) yang diceruk di atas pelat buhul dan dilas.

## Tempat ini berfungsi

- Ujung bresing berada pada garis kolom atau balok (dalam 1 mm), dan bresing tidak hampir sejajar dengan garis itu. Kolom adalah tumpuan jika ada; jika tidak, baloklah.
- Pelat buhul berada pada bidang bresing dan garis tumpuan. **Siku** harus memiliki satu sayap di bidang itu, dan **pelat datar** harus memiliki mukanya di bidang itu: putar bresing (rotasinya, {{ui:Rotation (°)}}) sampai terpenuhi. Dengan sayap siku membentuk 45° terhadap bidang, DetailCraft memberi tahu dan tidak membangun apa pun.
- Profil I dan kanal sebagai bresing tidak disambungkan.

## Tambah pelat buhul

1. Pilih satu atau lebih bresing.
2. Pilih {{ui:Gusset}} di menu {{ui:More}} pada grup {{ui:Connect}}.
3. Setiap ujung bresing terpilih yang bertumpu pada kolom atau balok dan belum memiliki pelat buhul akan mendapatkannya.

Pilih pelat buhul (klik pelatnya) untuk mengubah pengaturannya. {{ui:Apply to similar (n)}} menyalinnya ke setiap ujung bresing bebas dengan profil bresing dan profil tumpuan yang sama.

## Yang dihitung DetailCraft

- **Potong mundur.** Bresing dipendekkan di ujung itu sampai sudutnya bebas, sejauh {{ui:Brace clearance}} (25) dari setiap batang di sambungan (di sampingnya, atau melewati ujungnya jika batang berakhir di situ) dan dari pelat dasar di bawah kolom.
- **Baut (siku, pelat datar).** {{ui:Bolts}} (3) dalam satu baris sepanjang bresing, yang pertama berjarak {{ui:Bolt end distance}} (40) dari ujung potongan, dengan {{ui:Bolt pitch}} (75). Pada siku, baut menembus sayap di bidang pelat buhul, berjarak {{ui:Bolt gauge}} dari tumit (0 = tengah sayap); pada pelat datar, baut berada pada garis tengahnya (atau bergeser darinya sejauh gauge). Cengkeram baut = siku atau pelat datar + pelat buhul.
- **Pelat buhul.** Persegi panjang: dari muka tumpuan keluar melewati baut terakhir sejauh jarak ujung, dan sepanjang tumpuan sejauh yang dibutuhkan baut. Pelat ini menempel di belakang sayap siku (atau muka pelat datar). Untuk tabung, pelat berjalan melalui tengah tabung, dengan {{ui:Tube lap on the gusset}} (200) dari tabung, dan ruang untuk las.
- **Sambungan.** Di dasar kolom, pelat buhul diturunkan ke pelat dasar. Jika balok melintasi sambungan (bresing naik ke sudut balok-kolom), pelat buhul tetap di bawah atau di atas balok. Jika itu membuat baut atau lewatan tanpa jarak ujungnya, DetailCraft memberi peringatan.
- **Las.** Pelat buhul ke tumpuannya, di kedua sisi. Tabung ke pelat buhul, empat garis sepanjang lewatan.

## Baik diketahui

- Pelat buhul termasuk rakitan tumpuan (dilas di pabrik). Bresing dikirim dengan lubangnya sudah dibor, dan berkas NC sendiri.
- Celah tabung tidak dipotong pada model; [pemeriksaan benturan](topic:clash-check) membiarkan bresing dan pelat buhulnya.
- Pelat buhul tidak dilas ke balok yang disentuhnya. Pelat buhul sudut yang dilas ke balok dan kolom sekaligus, sudut pelat yang dipotong miring, dan tata letak titik kerja pada sambungan Uniform Force Method belum dibuat.
- DetailCraft tidak mendesain pelat buhul atau baut (tanpa pemeriksaan kekuatan); peringatannya hanya soal jarak dan kesesuaian.
