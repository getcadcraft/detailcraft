---
title: Panel rangka kayu dan keluli tolakan sejuk nipis
summary: Rangka panel dinding, lantai dan bumbung daripada kayu atau keluli tolakan sejuk nipis, dengan setiap kepingan, senarai potongan, lukisan bengkel dan stok untuk dibeli.
keywords: rangka, kayu, kayu balak, kayu, keluli nipis, tolakan sejuk, stud, gelegar, kasau, header, king stud, jack stud, cripple, senarai potongan, lukisan bengkel, panel
from: 3e38ffb9
---

Tab {{ui:Framing}} merangka panel yang anda terangkan dan memberikan anda apa yang diperlukan oleh krew pembinaan rangka dan kedai kayu. Panel disimpan dalam fail model.

:::warning
Saiz, jarak dan header ditentukan oleh anda. DetailCraft tidak menyemak sama ada stud pada jarak itu menanggung dinding itu, atau sama ada header merentangi bukaan itu: itu tugas jadual kod anda dan jurutera anda.
:::

## Tambah panel

Pilih {{ui:Add a wall}}, {{ui:Add a floor}} atau {{ui:Add a roof}}, kemudian isi dimensi dalam milimeter, bahan (kayu atau keluli nipis) dan saiz anggota. Saiz kayu ialah nama nominal dengan saiz siapnya (2×4 ialah 38 × 89 mm). Stud keluli dinamakan mengikut kedalaman dan ketebalan, contohnya `C92-1.2`.

## Dinding

Dinding mempunyai plat bawah, satu atau lebih plat atas (satu landasan bagi keluli), stud hujung, stud pada jarak yang anda beri, dan untuk setiap bukaan: dua king stud, dua jack stud, header bersaiz dan berlapis yang anda pilih, serta cripple di atas header (dan di bawah ambang tingkap). Beri setiap bukaan jaraknya dari hujung kiri, lebarnya, serta bahagian atas dan bawah bukaan kasarnya diukur dari subflor; pintu mempunyai bahagian bawah 0.

## Lantai dan bumbung

Lantai mempunyai gelegar merentasi lebarnya sepanjang rentangnya, gelegar tepi di kedua-dua hujung dan, jika anda menandakannya, blocking di tengah rentang. Panel bumbung ialah gabel: sepasang kasau pada jarak yang anda beri (panjangnya termasuk lebihan cucur atap sepanjang cerun) dan papan bumbung.

## Apa yang anda dapat

Setiap panel menunjukkan kepingannya pada lukisan mengikut skala dengan setiap kepingan ditanda, senarai potongan mengikut tanda, dan jumlah. Jadual {{ui:Stock to buy}} menyusun semua potongan panel ke dalam panjang stok, panjang terpendek yang memuatkan potongan setiap bar. {{ui:Save the shop drawing (SVG)}} menulis lukisan itu; butang {{ui:CSV}} menulis setiap senarai potongan dan senarai stok.

## Letak panel dalam model

Di bawah setiap panel, nyatakan kedudukannya (x, y, z dalam milimeter dan sudut) dan tekan {{ui:Place as members}}: setiap kepingan menjadi anggota model, dengan keratan siap bagi saiznya dan berat bahan (kira-kira 500 kg/m³ bagi kayu, keluli bagi stud). Dinding berjalan sepanjang sudut dari hujung kiri bawahnya dengan bahagian bawah pada z; gelegar lantai terletak dengan bahagian bawahnya pada z; elevasi gabel bumbung berjalan sepanjang sudut dengan z di bahagian atas plat dinding. Setiap lapisan header ialah anggota yang bersebelahan. Menekannya sekali lagi menggantikan anggota yang diletakkan sebelum ini, dan {{ui:Remove the placed members}} mengeluarkannya; setiap satu ialah satu langkah buat asal. Analisis mengabaikan anggota ini: ia bukan anggota rangka keluli.

## Helaian PDF

{{ui:PDF sheets}} menyimpan satu halaman A3 untuk setiap panel: panel mengikut skala dengan setiap kepingan ditanda, dimensi keseluruhan, senarai potongan dan jalur tajuk.

Masalah dalam panel {{ui:Problems}}: bukaan terlalu hampir dengan hujung dinding atau dengan bukaan lain, header yang tidak muat di bawah plat atas, kepingan yang lebih panjang daripada stok terpanjang.

Panel {{ui:Problems}} juga menyenaraikan **Antara muka (LOD 350)** bagi panel dinding dan dinding konkrit: bukaan yang melepasi hujung atau bahagian atas dindingnya, dua bukaan yang bertindih, dan bukaan dinding konkrit yang lebih lebar daripada 1000 mm tanpa bar pengapit. Ia ialah nasihat, peraturan yang sama yang dijalankan oleh audit BimCraft; lebar itu ialah nilai permulaan CadCraft, bukan piawai.
