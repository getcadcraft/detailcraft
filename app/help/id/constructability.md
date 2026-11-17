---
title: Pemeriksaan kemudahan konstruksi
summary: Masalah untuk hal-hal yang dilihat detailer dengan mata: baut yang tidak terjangkau kunci, baut terlalu rapat untuk soket, ukuran las sudut di luar batasnya, las yang tidak terjangkau obor, dan tabung yang menampung air.
keywords: kemudahan konstruksi, kunci, soket, akses baut, pengencangan, ukuran las, las sudut, las minimum, las maksimum, air, lubang ventilasi, lubang drainase, galvanisasi, penampang berongga, masalah
from: 72315151
---

DetailCraft mencari empat jenis masalah yang tidak ditemukan oleh pemeriksaan kekuatan mana pun, dan mencantumkannya di panel {{ui:Masalah}}. Itu adalah peringatan dan catatan untuk diperiksa, bukan kesalahan: model tetap dibangun.

## Baut yang tidak terjangkau kunci

Untuk setiap baut, DetailCraft menempatkan soket di atas kepala dan di atas mur. Soket adalah silinder selebar mur diukur pada sudutnya ditambah dinding 4 mm, panjang 60 mm. Jika badan balok, flens, pelat, atau bresing berada di dalam silinder itu, masalah menyebutkan sambungannya, berapa banyak baut, bagian mana yang menghalangi, dan seberapa jauh dari baut.

Soket adalah soket impak yang khas. Kunci pas membutuhkan ruang lebih sedikit, dan alat yang lebih besar membutuhkan lebih banyak. Mintalah asisten yang terhubung untuk menjalankan `constructability_check` dengan `socketLength` yang lain untuk melihat bagaimana jawabannya berubah.

## Baut terlalu rapat untuk soket

Soket di atas satu baut tidak boleh menyentuh kepala baut berikutnya. Baut dari sebuah sambungan yang lebih dekat daripada lebar soket ditambah kepala tetangganya dicantumkan dengan jarak yang ditemukan dan jarak yang dibutuhkan.

## Ukuran las fillet

AISC 360-16 Tabel J2.4 menetapkan las fillet terkecil menurut tebal bagian yang lebih tipis (3 mm sampai tebal 6.35 mm, 5 mm sampai 12.7, 6 mm sampai 19.05, 8 mm di atasnya), dan J2.2b menetapkan yang terbesar sepanjang tepi material: tidak lebih besar daripada material jika materialnya lebih tipis dari 6.35 mm, jika tidak 1.6 mm lebih kecil. Sambungan dengan ukuran yang sama pada tebal yang sama dicantumkan sebagai satu masalah.

Tebal yang dipakai adalah bagian paling tipis yang disebut oleh las, jadi las 8 mm di sekeliling balok dengan badan 6.35 mm akan dicantumkan.

## Air dan ventilasi

- **Ujung atas terbuka** dari penampang berongga yang berdiri tegak atau miring lebih dari 10° membiarkan hujan masuk.
- Penampang berongga yang **tertutup di kedua ujung** memerlukan lubang ventilasi dan lubang drainase; galvanisasi celup panas dan tekanan udara yang dipanaskan sama-sama memintanya.

## Apakah las dapat dijangkau

Las fillet dibuat dengan obor di tengah antara kedua muka yang disambungnya. Untuk setiap las fillet keliling (pelat ujung, pelat dasar, pelat miter), pemeriksaan mengambil garis luar penampang batang di pelat dan, setiap 20 mm, menjalankan jalur obor keluar pada sudut 45° dari tempat nozelnya (jari-jari 10 mm untuk awal) pertama kali melewati kedua muka, selama 30 mm lagi. Jika jalur itu bertemu dengan flens balok itu sendiri atau bagian lain, bagian las tersebut dicantumkan dengan bagian dan jaraknya. Angka ini tipikal, bukan standar: tanyakan kepada fabrikator Anda tentang proses dan nozelnya. Las di sepanjang dua tepi (pelat geser) tidak ditemukan dan tidak diperiksa.
