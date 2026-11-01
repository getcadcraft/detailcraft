---
title: Tur layar
summary: Setiap bilah, panel, dan tab di DetailCraft menurut namanya di layar, dan kegunaan masing-masing.
keywords: layar, tata letak, bilah alat, panel, properti, bilah status, laporan, antarmuka, ui, tab
from: 454f74fd
---

DetailCraft memenuhi jendela peramban di bawah bilah aplikasi. Dari atas ke bawah: bilah alat, lalu tiga kolom (panel {{ui:Model}}, tampilan, panel {{ui:Properti}}), lalu tab laporan, lalu bilah status.

## Bilah aplikasi

Bilah ramping di paling atas milik situs CadCraft, bukan milik model. Bilah ini menampilkan nama aplikasi dan versi, tautan ke {{ui:Tentang DetailCraft}}, {{ui:Bantuan}} (atau {{key:F1}}) untuk bantuan ini, {{ui:Simpan untuk offline}}, tombol mode layar, dan sakelar {{ui:Kertas}} / {{ui:Model}}.

- {{ui:Simpan untuk offline}} menyimpan DetailCraft, tampilan 3D-nya, dan bantuan ini di peramban Anda sehingga terbuka tanpa koneksi. Tombol bertuliskan {{ui:Siap offline}} setelah tersimpan; klik tombol itu untuk {{ui:Simpan lagi (ambil versi terbaru)}} atau {{ui:Hapus salinan offline}}. Lihat [Bekerja offline](common:offline).
- {{ui:Kertas}} memberi layar terang dan {{ui:Model}} layar gelap. Tampilan 3D mengikuti seketika; tidak ada yang berubah pada model Anda.
- Tombol mode layar dan {{key:Ctrl+Shift+F}} berganti di antara normal, layar penuh, dan layar penuh dengan bilah tersembunyi. {{key:Ctrl+Shift+F}} memakai tombol Control di semua komputer, termasuk Mac. Dengan bilah tersembunyi, arahkan ke tepi atas layar (atau ketuk) untuk memunculkannya kembali. {{key:Esc}} keluar dari layar penuh.

## Bilah alat

Bilah alat memiliki lima grup. Arahkan penunjuk ke tombol untuk melihat fungsinya dan tombol pintasnya.

| Grup | Tombol | Fungsinya |
|---|---|---|
| {{ui:File}} | {{ui:Baru}}, {{ui:Buka}}, {{ui:Impor IFC}}, {{ui:Simpan}}, {{ui:Contoh}} | Memulai model, membuka `.detailcraft.json` tersimpan atau file IFC, menyimpan, atau membuka rangka contoh |
| {{ui:Letakkan}} | {{ui:Pilih}}, {{ui:Balok}}, {{ui:Kolom}}, {{ui:Bresing}}, {{ui:Pelat}}, {{ui:Fondasi}}, {{ui:Tangga}} | Alat yang dipakai klik berikutnya di tampilan |
| {{ui:Sambung}} | {{ui:Pelat ujung}}, {{ui:Pelat dasar}}, dan di {{ui:Lainnya}}: {{ui:Pelat geser}}, {{ui:Sambungan lewatan}}, {{ui:Pelat buhul}}, {{ui:Serupa}} | Menambahkan sambungan ke balok, kolom, atau bresing yang dipilih, atau menyalin sambungan terpilih ke setiap sambungan yang serupa |
| {{ui:Edit}} | {{ui:Urungkan}}, {{ui:Ulangi}}, {{ui:Salin}}, {{ui:Tempel}}, {{ui:Lainnya}} | Mundur dan maju melalui edit; menyalin pilihan dan menempelnya. {{ui:Lainnya}} membuka menu dengan {{ui:Potong}}, {{ui:Salin}}, {{ui:Tempel}}, {{ui:Tempel di tempat yang sama}}, {{ui:Duplikat}}, {{ui:Hapus}}, {{ui:Pilih semua}} dan {{ui:Batalkan pilihan}}, masing-masing dengan tombolnya |
| {{ui:Keluaran}} | {{ui:IFC}}, {{ui:File NC}}, {{ui:BOM}}, {{ui:Gambar kerja}}, {{ui:Gambar}}, dan di {{ui:Lainnya}}: {{ui:Pembengkokan}}, {{ui:Laporan berat per fase}}, {{ui:File KISS untuk perangkat lunak fabrikasi}} | Mengunduh ekspor, atau membuka lembar gambar |

Tombol dan item menu yang tidak dapat bekerja saat ini berwarna abu-abu, dan mengarahkan penunjuk ke salah satunya menyebutkan alasannya. {{ui:Pelat ujung}} memerlukan balok yang dipilih, {{ui:Pelat dasar}} kolom yang dipilih, {{ui:Serupa}} sambungan yang dipilih, {{ui:Gambar kerja}} part profil I atau pelat yang dipilih, {{ui:Salin}} batang atau fondasi yang dipilih, dan {{ui:Tempel}} sesuatu yang disalin. Lihat [Menyalin, menempel, dan menduplikat](topic:copy-paste).

## Panel Model (kiri)

- {{ui:Model}}: {{ui:Nama}} model. Nama ini dipakai untuk setiap file yang Anda simpan atau ekspor.
- {{ui:Grid}}: garis grid dan jaraknya, dan {{ui:Terapkan grid}}. Lihat [Menyiapkan grid dan level](topic:grids-and-levels).
- {{ui:Level}}: satu baris per level (nama dan elevasi dalam mm), {{ui:Tambah level}}, dan {{ui:Terapkan level}}.
- {{ui:Profil kustom}}: membuat penampang parametrik Anda sendiri. Tertutup sampai Anda membukanya.
- {{ui:Tanda part}}: setiap tanda part dalam model beserta profil, panjang, dan jumlahnya. Klik tanda untuk memilih part pertama yang memilikinya.

{{ui:Grid}}, {{ui:Level}}, dan {{ui:Profil kustom}} dapat dilipat: klik judulnya.

## Tampilan (tengah)

Tampilan menunjukkan model dalam 3D. Di atasnya, bilah tampilan memiliki tiga tombol dan satu daftar:

- {{ui:3D}}: memutar model dengan bebas.
- {{ui:Denah}}: melihat lurus ke bawah pada satu level. Daftar level muncul di samping tombol. Apa pun yang lebih dari 1,5 m di atas level dipotong agar level terlihat dan dapat diklik dengan jelas.
- {{ui:Tampak}}: melihat lurus ke satu garis grid berhuruf (Grid A, Grid B …). Daftar grid berhuruf muncul. Hanya baja dalam jarak 1 m dari garis itu yang ditampilkan.
- Tombol paskan di ujung kanan bilah tampilan melakukan zoom untuk menampilkan seluruh model.

Titik-titik kecil menandai setiap perpotongan grid di setiap level. Saat alat penempatan menyala, titik yang paling dekat dengan penunjuk menyala dan bilah status menyebut namanya, misalnya "A/2 pada Level 1". Warna membedakan jenis batang: kolom, balok, bresing, dan pelat masing-masing memiliki warna sendiri, baut dan batang lainnya, fondasi tembus pandang, dan tulangan digambar sebagai tabung. Lubang tampil sebagai sumbat gelap; coak dipotong.

Cara memutar, menggeser, dan zoom: [Bergerak di tampilan 3D](topic:navigate-3d).

Ketika model kosong, tampilan menampilkan daftar singkat "Mulai model". Anda juga dapat meletakkan file model tersimpan di mana saja pada tampilan untuk membukanya.

## Panel Properti (kanan)

Apa yang ditampilkan panel ini bergantung pada apa yang sedang Anda lakukan, dan judulnya menyatakannya: "Model", "Letakkan balok", "Balok b2", "Sambungan pelat ujung", "Pelat dasar", "Fondasi F1", "3 dipilih", atau "Tempel".

- **Tidak ada yang dipilih:** ringkasan model (batang, sambungan, fondasi, part, tanda, baut, berat baja dan tulangan, grid, level).
- **Alat penempatan menyala:** opsi untuk bagian berikutnya (profil, material, posisi, rotasi, dan untuk kolom {{ui:Hingga}}), ringkasan profil yang dipilih, dan formulir {{ui:Tambah berdasarkan grid}} untuk menempatkan tanpa mengklik di tampilan.
- **Batang dipilih:** nama, profil, material, posisi, rotasi, koordinat kedua ujungnya, tanda, panjang potong, dan beratnya, lubang dan coaknya, serta tombol untuk sambungan, gambar kerjanya, dan {{ui:Hapus}}.
- **Sambungan dipilih:** setiap pengaturan pelat, baut, dan las, baut dan las yang dibuatnya, peringatannya, dan {{ui:Terapkan ke yang serupa}}.
- **Fondasi dipilih:** posisi dan ukurannya, tulangan bawah, besi stek, dan tanda tulangan yang dipakainya.
- **Beberapa hal dipilih:** jumlah batang setiap tipe, sambungan, dan fondasi, berat bajanya, serta {{ui:Salin}}, {{ui:Duplikat}}, dan {{ui:Hapus}}.
- **Menempel:** apa yang ada di papan klip, dan formulir untuk menempel dengan offset yang diketik atau pada perpotongan grid yang Anda pilih dari daftar.

Kolom angka berlaku ketika Anda menekan {{key:Enter}} atau meninggalkan kolom. Setiap perubahan adalah satu langkah yang dapat Anda urungkan.

## Tab laporan (bawah)

- {{ui:Masalah}}: semua yang tidak dapat dibangun DetailCraft atau ingin Anda periksa, dengan tombol {{ui:Pilih}} pada setiap baris. Tab menampilkan jumlahnya dalam tanda kurung.
- {{ui:Daftar material}}: part, rakitan, serta baut dan batang angkur, dengan berat dan tautan {{ui:Unduh CSV}}. Klik tanda part untuk memilih part itu.
- {{ui:Daftar pembengkokan}}: setiap tanda tulangan di setiap fondasi, dengan tautan {{ui:Unduh CSV}}.

Dengan tab terfokus, {{key:Left}} dan {{key:Right}} berpindah antartab.

## Bilah status

Bilah di sepanjang bagian bawah memiliki tiga bagian: perpotongan grid di bawah penunjuk saat menempatkan, pesan terbaru (apa yang baru terjadi, atau mengapa sesuatu ditolak), dan total berjalan part, baut, berat baja, dan berat tulangan. Ketika sebuah tindakan tampak tidak melakukan apa-apa, baca dahulu pesan di sini.

Judul tab peramban diawali dengan titik (•) selama model memiliki perubahan yang belum Anda simpan.

## Pada layar sempit

Di bawah lebar sekitar 760 piksel, kolom ditumpuk: bilah alat, tampilan, bilah status, {{ui:Properti}}, tab laporan, lalu panel {{ui:Model}} terakhir. Gulir halaman untuk menjangkaunya. DetailCraft ditata untuk layar desktop atau laptop; ponsel cukup untuk melihat, bukan untuk detailing.
