---
title: Stok pembekal dan masa penghantaran
summary: Semak bar stok yang dibeli oleh senarai potongan anda dengan senarai stok pembekal: adakah cukup, dan berapa lama penantiannya?
keywords: pembekal, stok, masa penghantaran, depoh keluli, kilang, ketersediaan, pesanan tertunggak, bar, perolehan, bekalan
from: 1373f5a3
---

Tab {{ui:Supply}} mencari setiap keratan yang dibeli oleh {{ui:Cut list}} dalam senarai stok pembekal. Fail itu kekal dalam model; tiada apa-apa dihantar ke mana-mana.

## Tambah fail pembekal

Tekan {{ui:Add a supplier file}} dan pilih CSV daripada pembekal anda (dipisahkan dengan koma, koma bertitik atau tab). Ia memerlukan lajur untuk item atau keratan (Item, Name, Description, Section, SKU), dan satu lagi untuk stok (In stock, Quantity, On hand) atau untuk masa penghantaran. Unit (each, metres, kilograms, tonnes), harga, pembekal dan tarikh isi semula stok dibaca apabila ada lajur untuknya. Perkataan juga difahami: "Out of stock", "In stock", "2-3 weeks", "backorder". Sehingga lima fail boleh disimpan; menambah fail dengan nama yang sama akan menggantikannya.

## Apa yang anda lihat

Bagi setiap keratan yang dibeli oleh senarai potongan, jadual menunjukkan apa yang diperlukan model, apa yang ada dalam stok, masa penghantaran, pembekal dan hasilnya:

- **Mencukupi:** stok cukup.
- **Kurang sebanyak:** stok di bawah keperluan. Jika stok di bawah keperluan dan anda menetapkan tempoh menunggu terpanjang, masa penghantaran memberitahu berapa lama baki yang diperlukan.
- **Terlambat:** tiada angka stok dan masa penghantaran lebih panjang daripada tempoh menunggu yang anda terima.
- **Tiada angka stok:** fail tidak menyatakannya.
- **Unit lain:** pembekal menyenaraikan keratan dalam unit yang model tidak dapat berikan.

Apa yang diperlukan model diberi dalam bar (daripada senarai potongan yang disusun, dengan panjang stok anda), dalam meter bar yang dibeli dan dalam kilogram (berat keratan per meter), dan unit fail itu sendiri digunakan. Keratan dipadankan mengikut namanya ("W16 X 26" dan "w16x26" adalah sama). Keratan yang tiada dalam fail disenaraikan.

Kekurangan dan keratan yang terlambat berada dalam panel {{ui:Masalah}}. Tiada apa-apa di sini memesan apa-apa.

## Had

Angka stok dan masa penghantaran ialah milik fail, setakat hari ia dibuat. Plat tidak disusun, jadi ia tidak dicari. Fail hanya dibaca: sebarang arahan di dalamnya hanyalah teks.
