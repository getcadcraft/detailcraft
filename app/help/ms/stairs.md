---
title: Tangga
summary: Letakkan tangga keluli lurus dari tinggi naik, lebar pijak dan lebar: dua rasuk tangga dan plat tapak, satu himpunan yang dikimpal.
keywords: tangga, rasuk tangga, tapak, tegak, lebar pijak, nosing, rentetan, tangga keluli, ibc 1011, blondel
from: 62fa3845
---

Tangga keluli lurus: dua rasuk tangga (saluran dengan hujung kakinya masuk, atau bar rata yang berdiri pada tepinya) dan plat tapak di setiap langkah, dikimpal di antara mereka. DetailCraft mengira bilangan tegak dari tinggi naik, menyemaknya terhadap had kod bangunan, dan menjadikan tangga satu himpunan bengkel.

## Letakkan tangga

1. Pilih {{ui:Stair}} dalam kumpulan {{ui:Place}}, atau tekan {{key:S}}.
2. Tetapkan tangga di sebelah kanan: **arah pendakian** (0° mendaki sepanjang +x, 90° sepanjang +y), **tinggi naik** (0 = naik ke aras seterusnya), **lebar pijak**, **lebar bersih** antara rasuk tangga, **tegak tertinggi yang dibenarkan**, **rasuk tangga**, **tebal plat tapak**, **nosing** dan bahan.
3. Klik persilangan grid: itulah kaki tegak pertama, pada garis tengah tangga.

Bar status menyatakan berapa tegak yang dibuatnya. Pilih tangga (klik rasuk tangga atau tapak) untuk menukar mana-mana tetapannya, kedudukannya atau fasanya; sifat juga menunjukkan tegak, tapak, larian, kecerunan dan 2 × tegak + lebar pijak.

## Apa yang DetailCraft kira

- **Tegak.** Sesedikit yang memastikan setiap tegak kekal pada atau di bawah tertinggi yang dibenarkan: tinggi naik 3000 mm pada 178 mm atau kurang memberi 17 tegak 176.5 mm. Terdapat satu tapak kurang daripada tegak (aras atas ialah langkah terakhir).
- **Tapak.** Plat larian + nosing dalam (280 + 25 = PL6x305 secara lalai) dan sepanjang lebar bersih, bahagian atasnya pada ketinggian setiap tegak, tepi hadapannya (nosing) di hadapan garis tegak.
- **Rasuk tangga.** Pada kecerunan tangga, dari tempat ia bertemu aras bawah hingga tempat ia bertemu aras atas, sedikit di luar lebar bersih, bahagian atasnya 50 mm di atas garis nosing. Hujung kaki saluran menghadap ke dalam tangga; bar rata seperti PL12x250 berdiri pada tepinya.
- **Kimpalan.** Setiap tapak ke kedua-dua rasuk tangga. Tapak dan rasuk tangga kanan dikimpal ke rasuk tangga kiri, jadi tangga mendapat satu tanda himpunan (ST1) dan lukisan himpunannya sendiri; rasuk tangga mendapat tanda bahagian st…, tapak mendapat p….
- **Semakan.** Amaran apabila tegak berada di luar 4 hingga 7 in. (102 hingga 178 mm) atau lebar pijak di bawah 11 in. (279 mm), had IBC 2021 seksyen 1011.5.2; apabila 2 × tegak + lebar pijak berada di luar 600 hingga 650 mm (peraturan keselesaan biasa); dan apabila rasuk tangga terlalu cetek untuk menanggung tapak. Profil rasuk tangga yang tidak diketahui menghalang tangga daripada dibina.

## Perkara yang perlu diketahui

- Alih, putar, cermin, salin, tampal, padam dan fasa berfungsi pada tangga seperti pada anggota. Putaran memusingkan pendakian; cermin menghantarnya ke arah bercermin.
- Rasuk tangga dipotong persegi: potongan hujung mereka terhadap lantai tidak dibuat.
- Tangga biasa ini ialah satu rentetan dengan tapak plat. Untuk pelantar, pemegang tangan dengan baluster, tapak pan lipat atau jerajak, set peraturan yang anda pilih, senarai potongan dan lukisan lubang rasuk tangga, tandakan {{ui:Gunakan penjana tangga keluli}} dalam alat Tangga (lihat Penjana tangga keluli).
- Rasuk tangga dieksport ke IFC sebagai IfcMember dan tapak sebagai IfcPlate; kedua-duanya pergi ke fail NC dan senarai bahan. Semakan pertembungan membiarkan bahagian tangga sendiri (ia dikimpal bersama).
- DetailCraft tidak mereka bentuk tangga: rasuk dan tapak tidak disemak untuk kekuatan atau pesongan.
