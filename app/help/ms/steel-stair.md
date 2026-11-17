---
title: Penjana tangga keluli
summary: Tangga keluli daripada ketinggian antara tingkat, larian dan lebar: tinggi naik dan lebar pijak mengikut set peraturan yang anda pilih, pelantar, rel dan baluster, lukisan bengkel dan senarai potongan dengan berat.
keywords: tangga keluli, penjana tangga, rasuk tangga, tapak, plat corak, jerajak, pan lipat, pelantar, pemegang tangan, baluster, tinggi naik, lebar pijak, osha, ibc, approved document k, senarai potongan, berat, lukisan bengkel
from: a4f0a985
---

Penjana tangga membuat keseluruhan tangga keluli daripada beberapa nombor: rasuk tangga, tapak, pelantar apabila rentetan terlalu tinggi, pemegang tangan dengan tiang dan baluster, lubang pemasangan dalam rasuk tangga, senarai potongan dengan berat, dan lukisan bengkel. Ia bermula dari alat {{ui:Stair}}, seperti tangga biasa (lihat Tangga), dengan satu suis ditambah.

## Letakkan tangga keluli

1. Pilih {{ui:Stair}} dalam kumpulan {{ui:Place}}, atau tekan {{key:S}}.
2. Di sebelah kanan, tandakan {{ui:Use the steel stair generator}}.
3. Pilih **set peraturan** untuk tempat tangga dibina, **tinggi naik** (dari lantai ke lantai; 0 = naik ke aras seterusnya), **larian tersedia** (0 = biarkan peraturan menentukan), **lebar bersih** dan **jenis tapak**: plat corak, jerajak atau pan plat lipat.
4. Tetapkan bahagian rasuk tangga, pelantar (mengikut peraturan, atau nombor), pemegang tangan (kedua-dua belah, satu, tiada), ketinggian rel dan jurang baluster.
5. Klik persilangan grid: itulah kaki tegak pertama.

Pilih tangga (klik rasuk tangga, tapak atau rel) untuk menukar sebarang tetapan; sifat menunjukkan tegak, lebar pijak, kecerunan, rentetan dan pelantar, keluli di dalamnya, senarai potongan dan sumber set peraturan.

## Set peraturan

Set peraturan mengehadkan bentuk tangga: tinggi naik dan lebar pijak, 2 × tegak + lebar pijak, kecerunan, pelantar, ketinggian rel dan bukaan terbesar. DetailCraft menawarkan yang di bawah; wilayah ialah tetapan, bukan tekaan. Buka **Sumber nombor set peraturan ini** dalam sifat: setiap nombor menamakan sumbernya dan menyatakan sejauh mana ia telah disemak.

- **International Building Code 2021**: tegak 4 hingga 7 in., tapak sekurang-kurangnya 11 in., rel 34 hingga 38 in. Had 12 kaki antara pelantar ditunjukkan sebagai *tidak dibaca*, dan nombor rel sebagai dibaca dalam risalah yang memetik kod; sahkan sebelum bergantung padanya.
- **OSHA 29 CFR 1910.25 dan 1910.29** (tangga piawai industri): 30° hingga 50°, tegak paling banyak 9.5 in., tapak sekurang-kurangnya 9.5 in., sekurang-kurangnya 22 in. lebar, pelantar selebar tangga dan 30 in. dalam, rel atas yang digunakan sebagai pemegang tangan 36 hingga 38 in. Ini dibaca dalam peraturan itu sendiri.
- **Approved Document K 2013, England** (tangga akses dan utiliti umum): julat tinggi naik dan lebar pijak serta 2 × tegak + lebar pijak 550 hingga 700 mm, dibaca dalam laporan yang ditugaskan kerajaan yang menjadualkannya. Dokumen itu tidak memberi DetailCraft ketinggian rel, jadi ketinggian yang anda tetapkan digunakan dan senarai Masalah menyatakannya.

Set peraturan yang tiada di sini tidak diteka: tangga kemudian mengikut peraturan keselesaan biasa 600 hingga 650 mm dan menyatakan ia tidak mempunyai peraturan.

## Apa yang ia kira

- **Tegak dan lebar pijak.** Bilangan tegak paling sedikit yang 2 × tegak + lebar pijak berada di tengah julat peraturan, tanpa lebar pijak jatuh di bawah minimum peraturan. Dengan larian diberikan, lebar pijak ialah larian dibahagi dengan tapak, dan apa-apa di luar peraturan dinyatakan.
- **Rentetan dan pelantar.** Rentetan yang lebih tinggi daripada yang dibenarkan peraturan dibahagikan dengan pelantar selebar tangga dan tidak kurang daripada minimum peraturan; anda juga boleh meminta pelantar. Pelantar ialah bingkai dua rasuk sisi dan dua sudut silang di bawah penutup, pada dua tiang.
- **Tapak.** Plat corak ialah plat yang dikimpal (6 mm secara lalai; corak tidak ditambah pada berat). Tapak pan plat lipat mempunyai lipatan di nosing dan dibolt melalui web rasuk tangga: dua lubang 2 mm lebih besar daripada bolt pada 0.3 dan 0.7 kedalaman. Jerajak dilukis sebagai plat berat yang sama (kedalaman bar galas × tebal ÷ jarak); bar silang dan jalur tidak dikira, dan senarai potongan menyatakannya.
- **Rel.** Rel atas paip pada tiang di sepanjang setiap rentetan dan setiap pelantar, dengan jurang baluster yang tiada sfera lebih besar daripada bukaan peraturan boleh lepas (100 mm paling banyak secara lalai).

## Lukisan, senarai potongan, eksport

- Rentetan ialah satu himpunan; rel ialah yang lain (kedua-dua belah ialah himpunan yang sama, dibuat dua kali). Setiap satu mempunyai lukisan himpunannya, dan lukisan rasuk tangga menunjukkan lubangnya.
- **Helaian tangga** (ST-…) menunjukkan rasuk tangga setiap rentetan lurus dengan stesen lubang ditulis dari hujung bawah, dan perincian tapak: keratan, nosing, lipatan dan flange hujung dengan lubangnya.
- {{ui:Cut list and weights}} dalam sifat menyenaraikan setiap bahagian dan panjang dengan kuantiti dan kilogram; {{ui:Download the cut list (CSV)}} menyimpannya.
- Semuanya pergi ke senarai bahan, fail NC dan IFC sebagai bahagian biasa (IfcMember, IfcColumn, IfcPlate).

## Perkara yang perlu diketahui

- Ini ialah titik permulaan, bukan reka bentuk. Tiada apa yang disemak untuk kekuatan atau pesongan; set peraturan hanya mengehadkan bentuk.
- Hujung rasuk tangga terhadap lantai dipotong persegi dan tidak diperincikan; tiang pelantar berdiri pada lantai di bawah dan tiada plat tapak.
- Meletakkan tangga sebagai satu elemen dalam BimCraft belum disambungkan.
