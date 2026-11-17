---
title: Pelan pendirian dan filem
summary: Masukkan kren dan carta bebannya, lihat setiap angkatan disemak terhadap carta mengikut susunan fasa, dan simpan filem pendirian yang boleh dimainkan luar talian pada mana-mana telefon.
keywords: pendirian, kren, angkat, carta beban, jejari, kapasiti, rigging, urutan, filem, animasi, telefon, luar talian, pelan angkat
from: fa7b0133
---

Tab {{ui:Erection}} menukar model kepada perintah pendirian dan menyemak setiap angkatan terhadap kren yang anda terangkan. Ia merancang daripada nombor yang anda taip. Ia bukan pelan angkat: rigger dan operator kren yang membuatnya.

## Terangkan kren

Pilih {{ui:Add a crane}}, kemudian isi:

- **Pusat kren X dan Y:** di mana kren berdiri, dalam mm.
- **Cangkuk tertinggi:** ketinggian maksimum cangkuk boleh naik, dalam mm. 0 bermakna tiada had disemak.
- **Blok cangkuk dan rigging yang tiada dalam carta:** kilogram yang ditolak daripada carta sebelum beban ditambah, apabila carta anda belum melakukannya.
- **Carta beban:** satu baris bagi setiap garisan, jejari dalam m dan kemudian kapasiti dalam kg. Salin baris daripada carta kren itu sendiri.

Carta dibaca mengikut cara carta beban dibaca: kapasiti yang disenaraikan bagi sesuatu jejari berlaku sehingga jejari itu. Beban pada jejari di antara dua baris mendapat kapasiti baris yang **lebih jauh**, bukan nilai di antaranya. Di dalam baris pertama, kapasiti baris pertama berlaku. Melebihi baris terakhir, kren tidak boleh mengangkat sama sekali. Jejari yang dikira bagi sesuatu angkatan ialah yang lebih besar antara jejari angkat dan jejari letak.

Kren kedua ditambah dengan cara yang sama. Setiap angkatan pergi ke kren pertama yang boleh mengendalikannya dalam margin anda.

## Apa yang dilakukan pelan

- Satu angkatan bagi setiap pemasangan: rasuk dengan plat hujungnya, tiang dengan plat tapaknya, tangga.
- Susunan mengikut fasa dahulu, kemudian peringkat demi peringkat: tiang, rasuk yang dibawanya, pengejang, plat, tangga. Sesuatu bahagian tidak pernah diangkat sebelum apa yang membawanya.
- Setiap angkatan menunjukkan beratnya (berat kasar model, ditambah {{ui:Rigging ditambah pada setiap berat}}), jejarinya, bahagian carta yang digunakannya dan minit ia bermula.
- {{ui:Sebahagian besar carta yang boleh digunakan oleh angkatan}} ialah margin keselamatan anda. Angkatan melebihinya ditandakan **Melebihi margin anda**; melebihi carta, **Melebihi carta**; melampaui jejari terakhir carta, **Melampaui carta**; dan bahagian yang lebih tinggi daripada cangkuk, **Cangkuk terlalu rendah**.

Lubang dan potongan hujung tidak ditolak daripada berat, dan bolt diliputi oleh peratusan rigging.

## Masalah

Setiap angkatan yang melebihi, melampaui, terlalu tinggi atau ditetapkan sebelum apa yang membawanya muncul dalam panel {{ui:Problems}}. Rasuk tanpa sambungan untuk membawanya disenaraikan sebagai memerlukan sokongan sementara.

## Simpan filem

{{ui:Save movie}} menulis satu fail HTML. Buka dalam mana-mana pelayar, juga pada telefon, tanpa rangkaian dan tanpa akaun: main dan jeda, seret bar ke mana-mana minit, putar model dengan jari, cubit untuk zum. Kapsyen menamakan setiap angkatan, beratnya, jejari dan bahagian carta. Model dilukis sebagai kotak biasa: ia menunjukkan susunan dan angkatan, bukan profil sebenar.

Jadual yang sama disimpan sebagai CSV dengan butang {{ui:CSV}}. Kren dan carta disimpan dalam fail model, dan setiap perubahan ialah satu langkah buat asal.
