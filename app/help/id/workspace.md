---
title: Tur layar
summary: Setiap bilah, panel, dan tab di DetailCraft menurut nama di layar, dan fungsinya.
keywords: layar, tata letak, bilah alat, panel, properti, bilah status, laporan, antarmuka, ui, tab
from: 94f81073
---

DetailCraft mengisi jendela peramban di bawah bilah aplikasi. Dari atas ke bawah: bilah alat, lalu tiga kolom (panel {{ui:Model}}, tampilan, panel {{ui:Properti}}), lalu tab laporan, lalu bilah status.

## Bilah aplikasi

Bilah tipis paling atas milik situs CadCraft, bukan milik model. Bilah ini menampilkan nama dan versi aplikasi, tautan ke {{ui:Tentang DetailCraft}}, {{ui:Bantuan}} (atau {{key:F1}}) untuk bantuan ini, {{ui:Simpan untuk offline}}, tombol mode layar, dan sakelar {{ui:Kertas}} / {{ui:Model}}.

- {{ui:Simpan untuk offline}} menyimpan DetailCraft, tampilan 3D-nya, dan bantuan ini di peramban Anda sehingga dapat dibuka tanpa koneksi. Tombol menampilkan {{ui:Siap offline}} setelah disimpan; klik lagi untuk {{ui:Simpan lagi (ambil versi terbaru)}} atau {{ui:Hapus salinan offline}}. Lihat [Bekerja luring](common:offline).
- {{ui:Kertas}} memberi layar terang dan {{ui:Model}} layar gelap. Tampilan 3D langsung mengikuti; tidak ada yang berubah di model Anda.
- Tombol mode layar dan {{key:Ctrl+Shift+F}} berganti secara bergilir antara normal, layar penuh, dan layar penuh dengan bilah disembunyikan. {{key:Ctrl+Shift+F}} memakai tombol Control di setiap komputer, termasuk Mac. Saat bilah disembunyikan, arahkan kursor ke tepi atas layar (atau ketuk) untuk memunculkannya kembali. {{key:Esc}} keluar dari layar penuh.

## Bilah alat

Bilah alat memiliki lima grup. Arahkan kursor ke tombol untuk melihat fungsinya dan pintasannya.

| Grup | Tombol | Fungsinya |
|---|---|---|
| {{ui:File}} | {{ui:Baru}}, {{ui:Buka}}, {{ui:Impor IFC}}, {{ui:Simpan}}, {{ui:Contoh}} | Memulai model, membuka `.detailcraft.json` atau file IFC yang tersimpan, menyimpan satu model, atau membuka rangka contoh |
| {{ui:Letakkan}} | {{ui:Pilih}}, {{ui:Balok}}, {{ui:Kolom}}, {{ui:Bresing}}, {{ui:Pelat}}, {{ui:Fondasi}}, {{ui:Tangga}} | Alat yang digunakan klik berikutnya di tampilan |
| {{ui:Sambung}} | {{ui:Pelat ujung}}, {{ui:Pelat dasar}}, dan di {{ui:Lainnya}}: {{ui:Pelat geser}}, {{ui:Sambungan lewatan}}, {{ui:Pelat buhul}}, {{ui:Serupa}} | Menambahkan sambungan ke balok, kolom, atau bresing yang dipilih, atau menyalin sambungan yang dipilih ke setiap sambungan serupa |
| {{ui:Edit}} | {{ui:Urungkan}}, {{ui:Ulangi}}, {{ui:Salin}}, {{ui:Tempel}}, {{ui:Lainnya}} | Mundur dan maju melalui suntingan; salin pilihan dan tempelkan. {{ui:Lainnya}} membuka menu dengan {{ui:Potong}}, {{ui:Salin}}, {{ui:Tempel}}, {{ui:Tempel di tempat yang sama}}, {{ui:Duplikat}}, {{ui:Hapus}}, {{ui:Pilih semua}}, dan {{ui:Batalkan pilihan}}, masing-masing dengan pintasannya |
| {{ui:Keluaran}} | {{ui:IFC}}, {{ui:File NC}}, {{ui:BOM}}, {{ui:Gambar kerja}}, {{ui:Gambar}}, dan di {{ui:Lainnya}}: {{ui:Pembengkokan}}, {{ui:Laporan berat per fase}}, {{ui:File KISS untuk perangkat lunak fabrikasi}} | Mengunduh ekspor, atau membuka lembar gambar |

Tombol dan item menu yang tidak dapat bekerja saat ini akan redup, dan jika diarahkan kursor, akan terlihat alasannya. {{ui:Pelat ujung}} memerlukan balok yang dipilih, {{ui:Pelat dasar}} kolom yang dipilih, {{ui:Serupa}} sambungan yang dipilih, {{ui:Gambar kerja}} model dengan part, {{ui:Salin}} batang atau fondasi yang dipilih, dan {{ui:Tempel}} sesuatu yang sudah disalin. Lihat [Salin, tempel, dan duplikat](topic:copy-paste).

## Panel Model (kiri)

- {{ui:Model}}: {{ui:Nama}} model. Nama ini dipakai untuk setiap file yang Anda simpan atau ekspor.
- {{ui:Grid}}: garis grid dan jaraknya, serta {{ui:Terapkan grid}}. Lihat [Atur grid dan level](topic:grids-and-levels).
- {{ui:Level}}: satu baris untuk setiap level (nama dan elevasi dalam mm), {{ui:Tambah level}}, dan {{ui:Terapkan level}}.
- {{ui:Profil kustom}}: buat penampang parametrik Anda sendiri. Tertutup sampai Anda membukanya.
- {{ui:Tanda part}}: setiap tanda part dalam model dengan profil, panjang, dan jumlahnya. Klik sebuah tanda untuk memilih part pertama yang memilikinya.

{{ui:Grid}}, {{ui:Level}}, dan {{ui:Profil kustom}} dapat dilipat: klik judulnya.

## Tampilan (tengah)

Tampilan menunjukkan model dalam 3D. Di atasnya, bilah tampilan memiliki tiga tombol dan sebuah daftar:

- {{ui:3D}}: putar model secara bebas.
- {{ui:Denah}}: lihat lurus ke bawah pada satu level. Daftar level muncul di sebelah tombol. Apa pun yang lebih dari 1.5 m di atas level akan dipotong agar Anda dapat melihat dan mengklik level dengan jelas.
- {{ui:Tampak}}: lihat lurus ke satu garis grid berhuruf (Grid A, Grid B …). Daftar grid berhuruf muncul. Hanya baja dalam jarak 1 m dari garis itu yang ditampilkan.
- Tombol paskan di ujung kanan bilah tampilan akan memperbesar untuk menampilkan seluruh model.

Titik kecil menandai setiap perpotongan grid di setiap level. Saat alat penempatan aktif, titik terdekat dengan penunjuk menyala dan bilah status menyebutkannya, misalnya "A/2 di Level 1". Warna membedakan jenis batang: kolom, balok, bresing, dan pelat masing-masing punya warna sendiri, baut dan batang angkur warna lain, fondasi tembus pandang, dan tulangan digambar sebagai tabung. Lubang tampak sebagai sumbat gelap; coak terpotong.

Cara memutar, menggeser, dan memperbesar: [Bergerak di tampilan 3D](topic:navigate-3d).

Saat model kosong, tampilan menampilkan daftar singkat "Mulai model". Anda juga dapat menyeret file model yang tersimpan dan melepaskannya di mana saja pada tampilan untuk membukanya.

## Panel Properti (kanan)

Isi panel ini bergantung pada apa yang sedang Anda lakukan, dan judulnya menunjukkan yang mana: "Model", "Letakkan balok", "Balok b2", "Sambungan pelat ujung", "Pelat dasar", "Fondasi F1", "3 dipilih", atau "Tempel".

- **Tidak ada yang dipilih:** ringkasan model (batang, sambungan, fondasi, part, tanda, baut, berat baja dan tulangan, grid, level).
- **Alat penempatan aktif:** opsi untuk bagian berikutnya (profil, material, posisi, rotasi, dan untuk kolom {{ui:Hingga}}), ringkasan profil yang dipilih, dan formulir {{ui:Tambah berdasarkan grid}} untuk menempatkan tanpa mengklik di tampilan.
- **Batang yang dipilih:** namanya, profil, material, posisi, rotasi, koordinat kedua ujungnya, tandanya, panjang potong dan beratnya, lubang dan coaknya, serta tombol untuk sambungan, gambar kerjanya, dan {{ui:Hapus}}.
- **Sambungan yang dipilih:** setiap pengaturan pelat, baut, dan las, baut dan las yang dibuatnya, peringatannya, serta {{ui:Terapkan ke yang serupa}}.
- **Fondasi yang dipilih:** posisi dan ukurannya, tikar bawah, batang stek, dan tanda tulangan yang digunakannya.
- **Beberapa hal dipilih:** jumlah batang setiap jenis, sambungan, dan fondasi, berat bajanya, serta {{ui:Salin}}, {{ui:Duplikat}}, dan {{ui:Hapus}}.
- **Menempel:** isi papan klip, dan formulir untuk menempel dengan offset yang diketik atau ke perpotongan grid yang Anda pilih dari daftar.

Kolom angka berlaku saat Anda menekan {{key:Enter}} atau meninggalkan kolom. Setiap perubahan adalah satu langkah yang dapat Anda urungkan.

## Tab laporan (bawah)

- {{ui:Masalah}}: semua yang tidak dapat dibuat DetailCraft atau yang perlu Anda periksa, dengan tombol {{ui:Pilih}} di setiap baris. Tab menampilkan jumlahnya dalam kurung.
- {{ui:Daftar material}}: part, rakitan, serta baut dan batang angkur, dengan berat dan tautan {{ui:Unduh CSV}}. Klik tanda part untuk memilih part itu.
- {{ui:Daftar pembengkokan}}: setiap tanda tulangan di setiap fondasi, dengan tautan {{ui:Unduh CSV}}.

Saat sebuah tab sedang difokus, {{key:Left}} dan {{key:Right}} berpindah antar tab.

## Bilah status

Bilah di sepanjang bagian bawah memiliki tiga bagian: perpotongan grid di bawah penunjuk saat menempatkan, pesan terbaru (apa yang baru terjadi, atau mengapa sesuatu ditolak), dan total berjalan dari part, baut, berat baja, serta berat tulangan. Saat suatu aksi tampak tidak melakukan apa-apa, bacalah pesan di sini terlebih dahulu.

Judul tab peramban diawali titik (•) saat model memiliki perubahan yang belum disimpan.

## Pada layar sempit

Di bawah sekitar 760 piksel lebar, kolom-kolom bertumpuk: bilah alat, tampilan, bilah status, {{ui:Properti}}, tab laporan, lalu panel {{ui:Model}} di paling akhir. Gulir halaman untuk mencapainya. DetailCraft dirancang untuk layar desktop atau laptop; ponsel cocok untuk melihat, bukan untuk detailing.
