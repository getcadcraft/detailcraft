---
title: Aturan tanda
summary: Kapan persisnya dua part atau dua rakitan berbagi tanda, bagaimana tanda diberi nomor, dan cara kerja tanda fondasi dan tulangan.
keywords: tanda, penomoran, tanda part, tanda rakitan, tanda potongan, awalan, toleransi, part identik, tanda tulangan, tanda fondasi
from: ce02c98e
---

DetailCraft menghitung ulang setiap tanda setelah setiap perubahan. Tidak ada yang disimpan, sehingga tanda selalu menggambarkan model seperti keadaannya sekarang. Lihat [Periksa tanda dan daftar material](topic:marks-and-bom) untuk cara menggunakannya.

## Tanda part

Dua part berbagi tanda part jika semua ini cocok:

1. Tipe part (balok, kolom, bresing, atau pelat).
2. Nama profil (tidak peka huruf besar-kecil).
3. Material (tidak peka huruf besar-kecil).
4. Panjang potong, dalam 1 mm.
5. Setiap lubang: muka, posisi sepanjang dan melintang, dalam 1 mm, dan diameter dalam 0.1 mm.
6. Setiap cope: ujung, sisi, panjang, dan kedalaman, dalam 1 mm.

{{ui:Nama}} anggota tidak dihitung. Begitu pula posisinya dalam model, rotasinya, dan arah penggambarannya, selama part itu sendiri sama.

### Part yang dibalik

Part dibandingkan dalam setiap cara ia bisa dibalik yang memetakan penampangnya ke dirinya sendiri. Jika salah satu cara membuatnya cocok dengan part lain, mereka berbagi tanda.

| Bentuk | Putaran yang dihitung |
|---|---|
| I-profil, HSS persegi panjang, pelat | Ujung ke ujung (terhadap sumbu vertikal), ujung ke ujung (terhadap sumbu horizontal), dan terbalik terhadap panjangnya sendiri |
| Kanal | Ujung ke ujung terhadap sumbu horizontal saja, sehingga badan tetap di sisi yang sama |
| Siku, HSS bulat | Tidak ada: dibandingkan seperti terpasang |

Jadi balok dengan lubang dekat ujung kirinya cocok dengan balok dengan lubang yang sama dekat ujung kanannya, dan kolom dengan lubang di satu sayap cocok dengan kolom dengan lubang yang sama di sayap lainnya.

### Penomoran

| Tipe | Awalan part | Awalan rakitan |
|---|---|---|
| Kolom | c | C |
| Balok | b | B |
| Bresing | br | BR |
| Pelat (ditempatkan, pelat ujung, atau pelat dasar) | p | P |

Tanda diberi nomor mulai dari 1 dalam setiap awalan. Urutannya: kolom, lalu balok, bresing, dan pelat; dalam satu tipe, menurut nama profil secara alami (W8x10 sebelum W12x26); lalu part yang lebih panjang lebih dahulu.

Karena penomoran mengikuti urutan itu, menambah atau mengubah satu part dapat menggeser nomor part lain.

## Tanda rakitan

- Setiap part yang tidak dilas ke part lain adalah part utama dari rakitannya sendiri.
- Pelat ujung dilas ke baloknya, dan pelat dasar dilas ke kolomnya, sehingga keduanya termasuk rakitan anggota tersebut.
- Dua rakitan berbagi tanda jika part utamanya berbagi tanda part dan part yang melekat padanya memiliki tanda yang sama di tempat yang sama (dalam 1 mm), dengan putaran yang diizinkan sama seperti part utama.
- Awalan rakitan mengikuti part utama: balok dengan dua pelat ujung adalah rakitan B.

Pelat yang Anda letakkan dengan alat {{ui:Pelat}} tidak dilas ke apa pun, sehingga setiap pelat adalah rakitan P sendiri.

## Tanda fondasi

Fondasi dengan panjang, lebar, kedalaman, teks beton, tikar bawah, dan besi stek yang sama berbagi tanda: F1, F2 … sesuai urutan penempatannya. Posisi dan rotasi tidak dihitung.

## Tanda tulangan

Tulangan dengan ukuran, bentuk, dan dimensi A, B, dan C yang sama (dibulatkan ke milimeter) berbagi tanda di semua fondasi. Tanda terdiri dari nomor tulangan, F, dan penghitung per ukuran tulangan: 5F1, 5F2, 6F1. Tulangan arah panjang dan tulangan arah pendek dari fondasi persegi adalah tulangan yang sama dan berbagi tanda; kolom {{ui:Digunakan untuk}} pada jadwal mencantumkan kedua penggunaannya.
