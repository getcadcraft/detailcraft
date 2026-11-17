---
title: Stok pemasok dan waktu tunggu
summary: Periksa batang stok yang dibeli daftar potong Anda terhadap daftar stok pemasok: apakah cukup, dan berapa lama waktu tunggunya?
keywords: pemasok, stok, waktu tunggu, gudang baja, pabrik baja, ketersediaan, pesanan tertunda, batang, pengadaan, pasokan
from: 1373f5a3
---

Tab {{ui:Pasokan}} mencari setiap profil yang dibeli {{ui:Daftar potong}} dalam daftar stok pemasok. File tetap berada di model; tidak ada yang dikirim ke mana pun.

## Tambahkan file pemasok

Tekan {{ui:Tambah file pemasok}} dan pilih CSV dari pemasok Anda (dipisahkan koma, titik koma, atau tab). Dibutuhkan satu kolom untuk item atau profil (Item, Name, Description, Section, SKU), dan satu untuk stok (In stock, Quantity, On hand) atau untuk waktu tunggu. Satuan (each, metres, kilograms, tonnes), harga, pemasok, dan tanggal restok dibaca jika ada kolomnya. Kata-kata juga dipahami: "Out of stock", "In stock", "2-3 weeks", "backorder". Hingga lima file dapat disimpan; menambahkan file dengan nama yang sama akan menggantinya.

## Yang Anda lihat

Untuk setiap profil yang dibeli daftar potong, tabel menampilkan apa yang dibutuhkan model, apa yang ada di stok, waktu tunggunya, pemasoknya, dan hasilnya:

- **Tercukupi:** stok cukup.
- **Kurang sebesar:** stok di bawah kebutuhan. Jika stok di bawah kebutuhan dan Anda mengatur waktu tunggu terlama, waktu tunggu memberi tahu berapa lama sisanya.
- **Terlambat:** tidak ada angka stok dan waktu tunggunya lebih lama daripada waktu tunggu yang Anda terima.
- **Tidak ada angka stok:** file tidak mencantumkannya.
- **Satuan lain:** pemasok mencantumkan profil dalam satuan yang tidak dapat dihitung model.

Kebutuhan model diberikan dalam batang (dari daftar potong bersarang, dengan panjang stok Anda), dalam meter batang yang dibeli, dan dalam kilogram (berat per meter profil); satuan file itu sendiri yang digunakan. Profil dicocokkan dengan namanya ("W16 X 26" dan "w16x26" dianggap sama). Profil yang tidak ada di file akan didaftarkan.

Kekurangan dan profil yang terlambat ada di panel {{ui:Masalah}}. Tidak ada yang dipesan di sini.

## Batasan

Angka stok dan waktu tunggu adalah milik file, sesuai tanggal file itu dibuat. Pelat tidak disarangkan, sehingga tidak dicari. File hanya dibaca: instruksi apa pun di dalamnya hanya teks.
