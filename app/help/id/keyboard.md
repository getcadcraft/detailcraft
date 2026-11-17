---
title: Aksi tombol dan mouse
summary: Setiap pintasan keyboard serta aksi mouse, trackpad, dan layar sentuh di DetailCraft, dari kode.
keywords: keyboard, pintasan, pintasan keyboard, tombol, mouse, trackpad, sentuh, ctrl, command, ringkasan pintasan
from: 05a2dea0
---

Cara tombol ditulis dalam bantuan ini: [Tombol, mouse, dan trackpad](common:keys). Di Mac, {{key:Mod}} adalah tombol Command; di tempat lain adalah Ctrl.

## Alat

Ini bekerja saat kursor tidak berada di kolom teks atau angka.

| Tombol | Fungsi |
|---|---|
| {{key:V}} | {{ui:Pilih}} |
| {{key:B}} | {{ui:Balok}} |
| {{key:C}} | {{ui:Kolom}} |
| {{key:R}} | {{ui:Bresing}} |
| {{key:P}} | {{ui:Pelat}} |
| {{key:F}} | {{ui:Fondasi}} |
| {{key:S}} | {{ui:Tangga}} |
| {{key:M}} | Pindahkan pilihan dengan memilih dua perpotongan grid ([Pilih dengan jendela, pindahkan, putar, cerminkan, dan ubah banyak sekaligus](topic:select-and-change)) |
| {{key:Esc}} | Lepaskan jendela pilihan yang sedang diseret, atau kembalikan bagian yang diseret; batalkan pindahkan, titik pertama balok, bresing, atau pelat, atau tempel; tekan lagi untuk kembali ke {{ui:Pilih}}; di {{ui:Pilih}}, hapus pilihan. Dengan menu {{ui:Lainnya}} terbuka, tutup menu itu |
| {{key:Delete}} atau {{key:Backspace}} | Hapus pilihan (semua yang dipilih, dalam satu langkah urungkan) |

## File dan edit

| Tombol | Fungsi |
|---|---|
| {{key:Mod+S}} | Simpan model (unduh). Tetap bekerja saat mengetik di kolom |
| {{key:Mod+O}} | Buka model. Tetap bekerja saat mengetik di kolom |
| {{key:Mod+Z}} | Urungkan (di luar kolom teks; di dalam kolom teks, membatalkan ketikan Anda) |
| {{key:Mod+Y}} atau {{key:Mod+Shift+Z}} | Ulangi |

## Salin dan tempel

Ini bekerja saat kursor tidak berada di kolom teks atau angka (di sana, salin, tempel, dan pilih teks Anda seperti biasa). Setiap tempel, potong, duplikat, atau hapus adalah satu langkah urungkan. Selengkapnya: [Salin, tempel, dan duplikat](topic:copy-paste).

| Tombol | Fungsi |
|---|---|
| {{key:Mod+C}} | {{ui:Salin}} anggota dan fondasi yang dipilih (dengan lubang, cope, dan sambungannya) |
| {{key:Mod+X}} | {{ui:Potong}}: salin pilihan, lalu hapus |
| {{key:Mod+V}} | {{ui:Tempel}}: salinan mengikuti penunjuk; klik perpotongan grid untuk meletakkannya |
| {{key:Mod+Shift+V}} | {{ui:Tempel di tempat yang sama}}: pada koordinat tempat ia disalin |
| {{key:Mod+D}} | {{ui:Duplikat}}: salinan seketika, digeser sebesar offset di [Pengaturan DetailCraft](topic:settings) |
| {{key:Mod+A}} | {{ui:Pilih semua}}: setiap anggota, sambungan, dan fondasi |
| {{key:Esc}} | {{ui:Batalkan pilihan}} |

Jika Anda memilih teks di halaman (misalnya di tabel laporan) dan tidak ada yang dipilih di model, {{key:Mod+C}} menyalin teks seperti biasa.

{{ui:Baru}}, {{ui:Contoh}}, dan ekspor tidak memiliki tombol; gunakan bilah alat.

Tidak ada tombol-tombol ini yang berfungsi saat dialog (pratinjau gambar kerja atau pertanyaan) sedang terbuka.

## Kolom dan panel

| Tombol | Fungsi |
|---|---|
| {{key:Enter}} atau {{key:Tab}} | Terapkan nilai yang diketik (setiap perubahan adalah satu langkah urungkan) |
| {{key:Enter}} di kolom {{ui:Grid}}, {{ui:Level}}, {{ui:Profil kustom}}, lubang, atau cope | Sama seperti memilih tombol formulir itu |
| {{key:Left}} {{key:Right}} | Pindah antartab {{ui:Masalah}}, {{ui:Daftar material}}, dan {{ui:Daftar pembengkokan}} saat sebuah tab sedang fokus |
| {{key:Esc}} | Tutup pratinjau gambar kerja atau dialog pertanyaan (sama seperti {{ui:Batal}}) |

## Layar dan bantuan

| Tombol | Fungsi |
|---|---|
| {{key:Ctrl+Shift+F}} | Ganti bergilir antara normal, layar penuh, dan layar penuh dengan bilah tersembunyi. Ctrl di setiap komputer, termasuk Mac |
| {{key:Mod+,}} | Buka {{ui:Pengaturan}} ([Pengaturan DetailCraft](topic:settings)) |
| {{key:Esc}} | Keluar dari layar penuh |
| {{key:F1}} | Buka bantuan ini |

## Mouse

| Aksi | Di 3D | Di Denah dan Tampak |
|---|---|---|
| Klik | Pilih anggota, atau letakkan di perpotongan terdekat saat alat peletakan aktif (atau tempel di sana saat menempel) | Sama |
| {{key:Shift}}, {{key:Ctrl}}, atau {{key:Mod}} dan klik | Tambahkan anggota ke pilihan, atau keluarkan | Sama |
| Tekan pada anggota yang dipilih dan seret | Pindahkan pilihan melintasi level; dengan {{key:Mod}} ditahan, naik dan turun | Pindahkan pilihan (di tampak: sepanjangnya dan naik turun) |
| Seret dengan tombol kiri | Putar model | Dengan {{ui:Pilih}}: jendela pilihan (ke kanan: sepenuhnya di dalam; ke kiri: menyentuh). Saat meletakkan: geser |
| {{key:Shift}} dan seret dengan tombol kiri | Dengan {{ui:Pilih}}: jendela pilihan, ditambahkan ke pilihan. Saat meletakkan: geser | Dengan {{ui:Pilih}}: jendela pilihan, ditambahkan ke pilihan |
| {{key:Ctrl}} atau {{key:Mod}} dan seret dengan tombol kiri | Geser | Tidak ada |
| Seret dengan tombol kanan | Geser | Geser |
| Roda | Zoom ke arah tengah tampilan | Zoom |
| Seret dengan tombol tengah | Zoom | Dengan {{ui:Pilih}}: geser. Selain itu zoom |
| Jatuhkan file `.detailcraft.json` ke aplikasi | Buka | Buka |

Klik hanya dihitung jika penunjuk bergerak kurang dari sekitar 5 piksel antara tekan dan lepas; gerakan yang lebih panjang adalah seret.

## Trackpad

| Aksi | Fungsi |
|---|---|
| Geser dua jari ke atas atau bawah, atau cubit | Zoom |
| Tekan dan seret | Putar (3D) atau geser (Denah dan Tampak) |
| {{key:Shift}} dan tekan lalu seret | Geser di 3D |
| Klik dua jari | Klik kanan (tidak ada menu di tampilan) |

## Sentuh

Di tablet atau layar sentuh:

| Aksi | Fungsi |
|---|---|
| Ketuk | Pilih anggota, atau letakkan di perpotongan grid terdekat saat alat peletakan aktif (ketukan dalam sekitar lebar jari dari titik itu dihitung) |
| Tekan lama pada anggota | Tambahkan ke pilihan, atau keluarkan (apa yang dilakukan {{key:Shift}}+klik dengan mouse) |
| Satu jari pada anggota yang dipilih, lalu seret | Pindahkan pilihan, menempel ke perpotongan grid |
| Satu jari di tempat lain | Putar model (3D) atau geser (Denah dan Tampak) |
| Dua jari | Cubit untuk zoom, gerakkan bersama untuk geser |

Tombol, daftar, dan kolom isian lebih besar saat layar hanya sentuh. Jendela pilihan memerlukan mouse; dengan jari, gunakan ketuk dan tekan lama.

## Tombol yang dipakai peramban

Beberapa pintasan milik peramban dan tidak dapat digunakan halaman mana pun, misalnya {{key:Mod+W}} (tutup tab), {{key:Mod+T}} (tab baru), dan {{key:Mod+N}} (jendela baru). Jika {{key:Mod+Y}} membuka riwayat peramban alih-alih mengulangi, gunakan {{key:Mod+Shift+Z}}.

Pintasan hanya sampai ke DetailCraft saat halaman memegang keyboard. Jika sebuah tombol tidak berfungsi, atau peramban yang meresponsnya, klik bagian kosong dari jendela DetailCraft terlebih dahulu (misalnya setelah mengetik di bilah alamat).

## Tempat Pindahkan berada

Tidak ada perintah Pindahkan: pilih anggota dan seret melintasi level (tahan {{key:Mod}} untuk seret naik dan turun), atau edit {{ui:Awal}} dan {{ui:Akhir}} di {{ui:Properti}}.
