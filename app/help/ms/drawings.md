---
title: Lukisan susunan umum dan pemasangan
summary: Buat pelan, dongakan dan satu lukisan pemasangan bagi setiap tanda pemasangan daripada model, pada helaian A4 hingga A1 atau ANSI B hingga D, keluarkan dengan huruf semakan, dan muat turun sebagai PDF, DWG atau DXF.
keywords: garisan tersembunyi, penyingkiran garisan tersembunyi, putus-putus, awan semakan, awan, segi tiga semakan, pelan bolt sauh, bolt sauh, jadual bolt sauh, jadual plat tapak, penandaan, keluaran, semakan, keluarkan semula, jadual semakan, log keluaran, penghantaran, dwg, dxf, fail CAD, eksport lukisan, lukisan, susunan umum, ga, pelan, dongakan, lukisan pemasangan, saiz helaian, saiz kertas, a4, a3, a2, a1, ansi b, ansi c, ansi d, tabloid, 11 x 17, 22 x 34, pdf, cetak, skala, blok tajuk, rujukan model
from: 709f8604
---

Pilih {{ui:Drawings}} dalam kumpulan {{ui:Output}}. DetailCraft membuat keseluruhan set daripada model seperti sekarang. Tiada apa-apa disimpan: ubah model, buka {{ui:Drawings}} sekali lagi, dan set dibuat semula.

## Apa yang ada dalam set

- **Pelan**, satu bagi setiap aras yang mempunyai sesuatu di atasnya, dilihat dari atas.
- **Dongakan**, satu bagi setiap garis grid dengan anggota dalam jarak 1 m daripadanya.
- **Pelan bolt sauh**, apabila model mempunyai plat tapak: setiap plat tapak dilihat dari atas dengan tiangnya dan bolt sauh, grid dengan dimensinya, perincian tipikal bagi setiap corak bolt sauh (BP1, BP2 …) dengan jarak bolt dan jarak tepi, dan dua jadual: bolt sauh mengikut tanda (R1, R2 …: kuantiti, diameter, panjang, unjuran di atas plat, tertanam, gred) dan plat tapak mengikut grid (tiang, corak, plat, bolt sauh, bahagian atas plat). Tiang yang berada di luar grid ditentukan mengikut koordinatnya.
- **Lukisan pemasangan**, satu bagi setiap tanda pemasangan: pandangan depan, atas dan hujung, dimensi berantai ke lubang dan tepi plat, senarai bahagian, bolt dan bolt sauh yang longgar, serta nota kimpalan dan lubang. Setiap plat yang dikimpal mempunyai simbol kimpalan fillet dalam pandangan depan (AWS A2.4): anak panah menunjuk ke sambungan, segi tiga di bawah garis rujukan bermakna sisi anak panah, nombor di kirinya ialah saiz kimpalan dalam mm, dan bulatan di tempat anak panah bertemu garis bermakna sekeliling.

**Garisan tersembunyi.** Pelan dan dongakan tidak menunjukkan garisan bahagian yang dilindungi sepenuhnya oleh bahagian di hadapannya (rasuk yang dilihat dari hujung di belakang tiang). Lukisan pemasangan melukis plat secara putus-putus di tempat bahagian utama menutupinya: di belakang badan dalam pandangan depan (dilihat dari sisi −u bahagian), di bawah sayap atas dalam pandangan atas. Bahagian yang berada pada kedalaman sama, atau bertindih dalam kedalaman, kedua-duanya dilukis sepenuhnya.

Setiap helaian mempunyai blok tajuk dengan nombor lukisan, skala, nama model, tarikh, nombor helaian dengan saiz helaian, dan rujukan model: kod yang dibuat daripada model yang disimpan, supaya cetakan boleh dipadankan dengan model asalnya.

## Pilih saiz helaian

Pilih saiz dalam senarai di bahagian atas tetingkap {{ui:Drawings}}: {{ui:A4}}, {{ui:A3}}, {{ui:A2}}, {{ui:A1}}, {{ui:ANSI B}} (11 × 17 in), {{ui:ANSI C}} (17 × 22 in) atau {{ui:ANSI D}} (22 × 34 in). Setiap helaian ialah landskap. Set dibuat semula pada saiz baharu serta-merta, dan saiz yang sama digunakan untuk lukisan bengkel. Ia juga terdapat dalam [tetapan DetailCraft](topic:settings#drawings), dan pelayar ini mengingatinya.

- Helaian yang lebih besar dilukis pada skala yang lebih besar. Skala sentiasa skala piawai (1:10, 1:20, 1:25, 1:50, 1:100 dan seterusnya).
- Teks kekal sama saiz pada setiap helaian, supaya ia kekal boleh dibaca apabila dicetak.
- Pada helaian kecil, pemasangan yang panjang dan nipis boleh mendapat skala yang lebih besar merentasi kedalamannya berbanding sepanjang panjangnya. Tajuk pandangan kemudian menyatakan kedua-dua skala, dan dimensi menjadi penentu.

## Keluarkan lukisan dan semakan

Baris di atas pratonton menyatakan kedudukan helaian yang dipaparkan: **Belum dikeluarkan**, **Semakan B, dikeluarkan … ; tidak berubah sejak**, atau, dalam merah, **Berubah sejak semakan B: perlu dikeluarkan semula**. Senarai helaian menandakan helaian yang telah dikeluarkan dengan semakannya dan yang perlu dikeluarkan semula.

- Taip tujuan keluaran ini (ia bermula sebagai "Dikeluarkan untuk fabrikasi") dan pilih {{ui:Keluarkan helaian ini}}, atau {{ui:Keluarkan helaian yang berubah}} bagi setiap helaian yang baharu atau telah berubah sejak keluaran terakhirnya.
- Keluaran pertama helaian ialah semakan A, kemudian B, C dan seterusnya (I dan O dilangkau).
- Blok tajuk menunjukkan nombor lukisan dengan semakannya ("A-B1  rev B"), dan jadual semakan di sebelahnya menyenaraikan keluaran terkini: semakan, tarikh dan penerangan. Pada helaian kecil, ia menunjukkan seberapa banyak yang muat.
- Helaian "berubah" apabila apa yang dilukis padanya berubah: anggota yang dialihkan, lubang baharu, tanda yang dinomborkan semula. Tarikh, bilangan helaian dan jadual semakan itu sendiri tidak dikira. Menukar saiz helaian menukar setiap helaian.
- Log keluaran disimpan dalam fail model, dan mengeluarkan ialah satu langkah buat asal. [Fail KISS](topic:kiss-export) membawa semakan terkini setiap lukisan.

### Awan semakan

Dari keluaran kedua sesuatu helaian dan seterusnya, setiap bahagian atau asas yang berubah dilukis di dalam awan semakan dengan segi tiga semakan yang memuatkan huruf.

- Semasa helaian telah berubah sejak keluaran terakhirnya, awan menunjukkan apa yang berubah sejak itu, dengan semakan yang akan datang dalam segi tiga (semakan B dikeluarkan dan berubah: segi tiga menyatakan C).
- Apabila anda mengeluarkannya, awan kekal pada helaian semakan itu, seperti pada set bercetak, sehingga helaian berubah sekali lagi.
- Setiap helaian hanya mengawan perubahan yang ditunjukkannya. Pelan dan dongakan tidak melukis lubang atau potongan hujung, jadi ia mengawan anggota yang dialihkan, diputar atau diubah saiz, atau yang tandanya berubah. Lukisan pemasangan dan pelan bolt sauh juga mengawan lubang dan potongan yang baharu atau dialihkan.
- Tanda yang dinomborkan semula dikira: apabila perubahan menjadikan rasuk sebagai pemasangan baharu, rasuk yang tandanya beralih naik (B1 ke B2) diawan pada pelan dan dongakan.
- Bahagian yang dipadam tidak meninggalkan apa-apa untuk diawan.
- Helaian yang dikeluarkan sebelum awan semakan diperkenalkan (DetailCraft 0.4) mula diawan dari keluaran seterusnya.
- Awan terdapat dalam muat turun PDF, DXF dan DWG, dan tidak pernah dikira sebagai perubahan dengan sendirinya.

## Muat turun

Pilih format dalam senarai di sebelah butang, kemudian {{ui:Helaian ini}} untuk helaian yang dipaparkan atau {{ui:Semua helaian}} untuk keseluruhan set.

- **PDF**: untuk dicetak atau dihantar. {{ui:Semua helaian}} menghasilkan satu PDF, satu halaman bagi setiap helaian, setiap halaman pada saiz yang dipilih.
- **DWG**, dalam format 2018, 2013, 2010, 2007, 2004 atau 2000: untuk membuka helaian dalam program CAD. Pilih format lama untuk program lama.
- **DXF (R12)**: versi yang hampir setiap program CAD boleh buka.

Helaian DWG atau DXF dilukis pada saiz penuh: satu unit lukisan ialah satu milimeter pada kertas, jadi ia dicetak pada 1:1 dan setiap pandangan mengekalkan skala yang dinyatakan tajuknya. Setiap pen ialah lapisannya sendiri: DC-OUTLINE, DC-THICK, DC-THIN, DC-HIDDEN, DC-CENTER, DC-GRID dan seterusnya, dengan ketebalan garisan (DWG) dan garis putus-putusnya. Perkataan ialah teks dalam gaya teks DetailCraft (Arial). Dimensi ialah garisan dan angka yang anda lihat, bukan objek dimensi. {{ui:Semua helaian}} memasukkan fail DWG atau DXF dalam satu zip, satu fail bagi setiap helaian.

:::note
DXF R12 tidak mempunyai ketebalan garisan dan tiada isian: lapisan mengekalkan namanya, jadi tetapkan pen mengikut lapisan semasa anda memplot, dan bentuk berisi ditinggalkan (bar status menyatakan berapa banyak).
:::

Cetak pada 100% (tanpa "Muat ke halaman") pada kertas saiz yang sama jika anda mahu skala yang dinyatakan kekal sah.
