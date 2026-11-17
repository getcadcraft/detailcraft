---
title: Periksa tanda dan daftar material
summary: Baca tanda part dan rakitan yang diberikan DetailCraft ke setiap bagian, periksa daftar material, dan unduh sebagai CSV.
keywords: tanda, penomoran, tanda part, tanda rakitan, tanda potongan, bom, daftar material, berat, daftar baut, csv
from: caa2ee80
---

DetailCraft memberi tanda pada model secara otomatis. Tidak ada perintah penomoran dan tidak ada yang perlu dijalankan: setelah setiap perubahan, ia menentukan part mana yang merupakan potongan baja yang sama, lalu memberinya satu tanda.

## Tempat tanda muncul

- Daftar {{ui:Part marks}} di panel {{ui:Model}}: setiap tanda dengan profil, panjang, dan jumlahnya. Klik satu untuk memilih part pertama dengan tanda tersebut.
- Panel {{ui:Properties}} dari batang yang dipilih (dan daftar **Part marks** di panel kiri): {{ui:Part mark}} dan {{ui:Assembly}}. Judul panel juga memuat tandanya, misalnya "Balok b1".
- Tab {{ui:Bill of materials}}, CSV, nama berkas NC, gambar kerja, dan ekspor IFC (sebagai tag setiap elemen).

## Cara part diberi tanda

- **Tanda part:** c untuk kolom, b untuk balok, br untuk bresing, st untuk ibu tangga, p untuk pelat (termasuk pelat ujung dan pelat dasar). Lalu sebuah angka: c1, c2, b1, p1 … Saat part berada di lebih dari satu fase, nomor fase ditulis di depan, misalnya 2-b1.
- **Tanda rakitan:** C, B, BR, atau P. Rakitan adalah batang utama dan pelat yang dilas padanya, seperti balok dengan dua pelat ujungnya, atau kolom dengan pelat dasarnya.
- Dua part berbagi tanda jika memiliki profil, material, dan panjang potong yang sama, serta lubang dan coak yang sama, semuanya dalam 1 mm, meskipun salah satunya diputar ujung ke ujung atau dibalik terhadap yang lain.
- Penomoran dimulai dari kolom, lalu balok, bresing, dan pelat; di dalam setiap kelompok, menurut nama profil, dengan yang terpanjang lebih dulu.

Aturan lengkapnya, termasuk putaran mana yang dihitung untuk kanal dan siku: [Aturan tanda](topic:mark-rules).

:::warning
Tanda dihitung ulang setelah setiap perubahan, sehingga nomornya bisa berubah. Menambah part, mengubah profil, atau menambah lubang dapat mengubah b3 menjadi b4. Anggap tanda final hanya saat model sudah selesai, dan buat BOM, berkas NC, dan gambar kerja dari model tersimpan yang sama.
:::

## Baca daftar material

Buka tab {{ui:Bill of materials}} di bagian bawah. Ada tiga tabel.

**Part**, dengan total berat baja di judulnya:

| Kolom | Artinya |
|---|---|
| Part mark | Klik untuk memilih part pertama dengan tanda ini |
| Type | balok, kolom, bresing, ibu tangga, atau pelat |
| Profile | Misalnya W16x26 atau PL20x180 |
| Material | Grade yang Anda atur |
| Length (mm) | Panjang potong, setelah sambungan |
| Count | Berapa banyak |
| Unit weight (kg) | Massa profil per meter × panjang |
| Total weight (kg) | Berat satuan × jumlah |

Baris terakhir memberikan total jumlah dan berat.

**Rakitan:** setiap tanda rakitan, part utamanya, semua part-nya (misalnya "b1 + p1 + p1"), jumlah, berat satuan, dan berat total.

**Baut dan baut angkur:** dikelompokkan menurut jenis, diameter, panjang, dan grade, dengan jumlah.

:::note
Berat adalah berat kotor: lubang dan coak tidak dikurangkan. Baut, mur, ring, dan las tidak termasuk dalam berat baja.
:::

## Unduh

Pilih {{ui:Download CSV}} di tab ini, atau {{ui:BOM}} di grup {{ui:Output}}. Berkas `<name> BOM.csv` memuat ketiga tabel berurutan, masing-masing di bawah judulnya, dengan baris kosong di antaranya. Berkas dapat dibuka di program spreadsheet mana pun.

## Periksa sebelum mengirim

1. Buka tab {{ui:Problems}} dan selesaikan setiap baris. Sambungan yang tidak bisa dibangun tidak menambahkan pelat, lubang, atau baut, sehingga BOM akan kurang.
2. Cari tanda yang tidak Anda duga. Dua balok yang Anda kira sama tetapi bertanda berbeda biasanya berbeda pada lubang, coak, atau panjang potong; pilih masing-masing dan bandingkan.
3. Simpan model, lalu buat semua ekspor dari kondisi tersimpan itu.
