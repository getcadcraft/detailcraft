---
title: Sambungan mitre
summary: Gabungkan dua anggota I-profil yang bertemu pada sudut: kedua ujung dipotong pada bidang yang membagi dua sudut, dengan pelat ujung, baut, dan pengaku jika Anda menginginkannya.
keywords: mitre, miter, sambungan mitre, siku, lutut, haunch, rangka portal, rabung, sudut, potongan sudut, potongan miring, pelat ujung, pelat ujung berbaut, pengaku, sambungkan
from: cd8380d4
---

Mitre menyambungkan dua anggota I-profil yang ujungnya bertemu pada sudut, seperti lutut rangka portal, rabung, atau dua balok yang berbelok di sudut denah. DetailCraft memotong kedua ujung pada bidang yang membagi dua sudut di antara keduanya, sehingga kedua permukaan potong sesuai. Jika Anda mau, ia menambahkan pelat ujung ke setiap ujung yang dipotong, menyambung kedua pelat dengan baut, dan memasang sepasang pengaku badan di setiap anggota.

## Tempat ia bekerja

- Dua **I-profil** (IPE, HEA, HEB, W, dan sejenisnya) yang **ujungnya bertemu pada node yang sama**. Anggota mana pun dapat digambar ke arah mana pun.
- Sudut di antara anggota harus paling sedikit 15°. Anggota yang segaris ditolak: gunakan [sambungan lewatan](topic:splices).
- Potongan polos (tanpa pelat) bekerja apa pun cara anggota bertemu. **Pelat ujung** memerlukan dua anggota yang bertemu pada bidang badannya, seperti lutut portal atau rabung. Dua balok yang berbelok di sudut pada denah bertemu pada bidang sayapnya, sehingga hanya mendapat potongan polos.
- Anggota berukuran berbeda disambungkan, tetapi dengan peringatan: permukaan potongnya tidak akan sesuai.

## Tambah mitre

1. Pilih kedua anggota: klik satu, lalu {{key:Shift}}+klik yang lain.
2. Pilih {{ui:Mitre}} di menu {{ui:Lainnya}} grup {{ui:Sambung}}. Dialog Mitre terbuka.
3. Atur kolom bernomor. Gambar di sebelahnya dibuat dari angka Anda saat mengetik, dan lingkaran bernomornya menunjukkan apa yang diatur setiap kolom.
4. Pilih {{ui:Tambahkan mitre}}. Jika Anda memilih lebih dari dua anggota, setiap sambungan bebas di antaranya mendapat mitre yang sama.

Untuk mengubah mitre nanti, pilih (klik salah satu pelatnya) lalu pilih {{ui:Dialog mitre dengan pratinjau}} di panel kanan, atau ubah pengaturannya langsung di sana. Potongan polos tidak memiliki pelat untuk diklik: pilih kedua anggotanya dan pilih {{ui:Mitre}} lagi, dan dialog terbuka pada mitre tersebut. {{ui:Terapkan ke yang serupa (n)}} menyalinnya ke setiap sambungan bebas di antara anggota dengan dua profil yang sama pada sudut yang sama.

## Kolom bernomor (mm)

| No. | Pengaturan | Default | Fungsinya |
|---|---|---|---|
| 1 | Celah antar pelat (atau ujung potongan) | 0 | Celah bersih di sambungan. Setiap sisi mendapat setengahnya |
| 2 | Pelat ujung, tebal pelat | aktif, 20 | Pelat ujung dilas mengelilingi setiap ujung potongan. Hilangkan centang untuk potongan polos |
| 3 | Baris baut, jarak baris, gauge, baris luar | 4, 0, 0, mati | Jarak 0 menyebar baris secara merata di antara sayap. Gauge 0 = setengah lebar pelat, minimal 2.4 × lubang. Baris luar masuk ke perpanjangan pelat melewati sayap luar |
| 4 | Pelat melewati sayap luar | 0 | Seberapa jauh pelat meraih melewati sayap luar, sepanjang potongan |
| 5 | Pelat melewati sayap dalam | 0 | Sama di sisi dalam |
| 6 | Pengaku badan, jarak melewati potongan | mati, 50 | Sepasang di setiap anggota, pada kedua sisi badan, tegak lurus terhadap anggota, sejauh ini melewati ujung jauh potongannya |
| 7 | Tebal pengaku | 10 | |

Di bawah {{ui:Baut}}: diameter baut, lubang, mutu, dan toleransi panjang (20, 22, A325, 30), seperti untuk pelat ujung. Di bawah {{ui:Pelat dan las}}: lebar pelat (0 = lebar sayap), ukuran las sudut (8), dan mutu pelat (A36).

## Yang Anda dapatkan

- **Potongannya.** Ujung setiap anggota dipotong pada bidangnya. Panjangnya dalam daftar, gambar, dan file NC adalah **panjang keseluruhan**, dari ujung persegi ke titik terjauh dari potongan.
- **Pelatnya** termasuk anggotanya sendiri: rakitan setiap anggota adalah anggota itu, pelat ujungnya, dan pengakunya. Bautnya adalah baut lapangan untuk sambungan itu: daftar material menghitungnya sekali, dan gambar rakitan setiap anggota mencantumkannya sebagai baut lepas.
- **Gambar** menampilkan ujung miring dan pelat; gambar kerja anggota mitre mencatat sudut setiap potongan dari tegak lurus.
- **File NC** (DSTV) membawa sudut potongan miring di header, sebagaimana diminta standar, dan kontur yang mengikuti potongan. Periksa di penampil NC bengkel Anda sendiri sebelum memotong, seperti untuk setiap file NC.
- **IFC** memotong ekstrusi setiap anggota dengan bidang potongnya, sehingga program lain menampilkan potongan yang sebenarnya.
- **Tanda:** anggota mitre adalah potongan yang berbeda dari anggota potongan persegi dengan panjang yang sama. Dua anggota dengan potongan yang sama berbagi tanda, seperti dua kasau rabung.

## Hal yang perlu diketahui

- Mitre tetap hidup. Pindahkan atau ubah ukuran salah satu anggota, dan potongan, pelat, serta baut mengikuti. Hapus salah satu anggota dan mitre ikut hilang, dan ujung anggota lainnya kembali persegi.
- Peringatan menggunakan minimum EN 1993-1-8 yang sama dengan sambungan lain (jarak ujung dan tepi 1.2 × lubang, jarak 2.2 × lubang, gauge 2.4 × lubang), ditambah baris baut yang terlalu dekat ke sayap, pelat yang lebih sempit dari sayap, dan pengaku tanpa ruang.
- Nilainya adalah nilai awal, bukan desain. DetailCraft tidak memeriksa kekuatan sambungan, dan tidak membuat haunch, mitre las dengan las tumpul, atau pengaku yang sejajar dengan sayap anggota lain.
