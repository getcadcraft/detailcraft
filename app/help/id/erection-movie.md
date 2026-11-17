---
title: Denah ereksi dan film
summary: Masukkan crane dan bagan bebannya, lihat setiap pengangkatan diperiksa terhadap bagan menurut urutan fase, dan simpan film ereksi yang dapat diputar tanpa jaringan di ponsel mana pun.
keywords: ereksi, crane, pengangkatan, bagan beban, radius, kapasitas, rigging, urutan, film, animasi, ponsel, offline, rencana pengangkatan
from: fa7b0133
---

Tab {{ui:Erection}} mengubah model menjadi urutan ereksi dan memeriksa setiap pengangkatan terhadap crane yang Anda jelaskan. Tab ini merencanakan dari angka yang Anda ketik. Ini bukan rencana pengangkatan: rigger dan operator crane yang membuatnya.

## Jelaskan crane

Pilih {{ui:Add a crane}}, lalu isi:

- **Pusat crane X dan Y:** tempat crane berdiri, dalam milimeter.
- **Kait tertinggi:** seberapa tinggi kait dapat naik, dalam milimeter. 0 berarti tidak ada batas yang diperiksa.
- **Blok kait dan rigging yang tidak ada dalam bagan:** kilogram yang dikurangkan dari bagan sebelum beban ditambahkan, jika bagan Anda belum memperhitungkannya.
- **Bagan beban:** satu baris per baris, radius dalam meter lalu kapasitas dalam kilogram. Salin baris dari bagan crane itu sendiri.

Bagan dibaca seperti bagan beban dibaca: kapasitas yang tercantum untuk suatu radius berlaku sampai radius tersebut. Beban pada radius di antara dua baris mendapat kapasitas baris yang **lebih jauh**, tidak pernah nilai di antaranya. Di dalam baris pertama, kapasitas baris pertama berlaku. Melewati baris terakhir, crane tidak dapat mengangkat sama sekali. Radius yang dihitung untuk pengangkatan adalah yang lebih besar antara radius pengambilan dan radius atur.

Crane kedua ditambahkan dengan cara yang sama. Setiap pengangkatan diberikan ke crane pertama yang dapat menanganinya dalam margin Anda.

## Yang dilakukan rencana

- Satu pengangkatan per rakitan: balok dengan pelat ujungnya, kolom dengan pelat dasarnya, atau tangga.
- Urutan mengikuti fase terlebih dahulu, lalu tingkat demi tingkat: kolom, balok yang dipikulnya, bresing, pelat, tangga. Sebuah part tidak pernah diangkat sebelum yang memikulnya.
- Setiap pengangkatan menampilkan beratnya (berat kotor model, ditambah {{ui:Rigging added to each weight}}), radiusnya, bagian bagan yang dipakainya, dan menit ketika ia dimulai.
- {{ui:Most of the chart a lift may use}} adalah margin keselamatan Anda. Pengangkatan di atasnya ditandai **Melebihi margin Anda**; di atas bagan, **Melebihi bagan**; melewati radius terakhir bagan, **Melewati bagan**; dan part yang lebih tinggi dari kait, **Kait terlalu rendah**.

Lubang dan cope tidak dikurangkan dari berat, dan baut tercakup oleh persentase rigging.

## Masalah

Setiap pengangkatan yang melebihi, melewati, terlalu tinggi, atau dijadwalkan sebelum yang memikulnya muncul di panel {{ui:Problems}}. Balok tanpa sambungan untuk memikulnya didaftarkan sebagai membutuhkan penyangga sementara.

## Simpan film

{{ui:Save movie}} menulis satu file HTML. Bukalah di peramban mana pun, termasuk di ponsel, tanpa jaringan dan tanpa akun: putar dan jeda, seret bilah ke menit mana pun, putar model dengan jari, dan cubit untuk memperbesar. Keterangan menyebut setiap pengangkatan, beratnya, radiusnya, dan bagiannya dari bagan. Model digambar sebagai kotak polos: film ini menunjukkan urutan dan pengangkatan, bukan profil sebenarnya.

Tabel yang sama dapat disimpan sebagai CSV dengan tombol {{ui:CSV}}. Crane dan bagan disimpan dalam file model, dan setiap perubahan adalah satu langkah urungkan.
