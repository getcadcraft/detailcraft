---
title: Tindakan kekunci dan tetikus
summary: Setiap pintasan papan kekunci dan tindakan tetikus, pad sentuh dan sentuhan dalam DetailCraft, daripada kod.
keywords: papan kekunci, pintasan, pintasan papan kekunci, kekunci, tetikus, pad sentuh, sentuh, ctrl, command, helaian rujukan
from: 05a2dea0
---

Cara kekunci ditulis dalam bantuan ini: [Kekunci, tetikus dan pad sentuh](common:keys). Pada Mac, {{key:Mod}} ialah kekunci Command; di tempat lain ialah Ctrl.

## Alat

Fungsi ini berfungsi apabila kursor tidak berada dalam medan teks atau nombor.

| Kekunci | Fungsi |
|---|---|
| {{key:V}} | {{ui:Pilih}} |
| {{key:B}} | {{ui:Rasuk}} |
| {{key:C}} | {{ui:Tiang}} |
| {{key:R}} | {{ui:Tupang}} |
| {{key:P}} | {{ui:Plat}} |
| {{key:F}} | {{ui:Tapak asas}} |
| {{key:S}} | {{ui:Tangga}} |
| {{key:M}} | Alih pilihan dengan memilih dua persilangan grid ([Pilih mengikut tetingkap, alih, putar, cermin, tukar banyak](topic:select-and-change)) |
| {{key:Esc}} | Lepaskan tetingkap pilihan yang diseret, atau letakkan semula bahagian yang diseret; batalkan pengalihan, titik pertama rasuk, tupang atau plat, atau tampalan; tekan sekali lagi untuk kembali ke {{ui:Pilih}}; dalam {{ui:Pilih}}, kosongkan pilihan. Dengan menu {{ui:Lagi}} dibuka, tutupnya |
| {{key:Delete}} atau {{key:Backspace}} | Padam pilihan (semua yang dipilih, dalam satu langkah buat asal) |

## Fail dan sunting

| Kekunci | Fungsi |
|---|---|
| {{key:Mod+S}} | Simpan model (muat turun). Berfungsi walaupun sedang menaip dalam medan |
| {{key:Mod+O}} | Buka model. Berfungsi walaupun sedang menaip dalam medan |
| {{key:Mod+Z}} | Buat asal (di luar medan teks; dalam medan, ia membatalkan taipan anda) |
| {{key:Mod+Y}} atau {{key:Mod+Shift+Z}} | Buat semula |

## Salin dan tampal

Fungsi ini berfungsi apabila kursor tidak berada dalam medan teks atau nombor (di situ ia menyalin, menampal dan memilih teks anda seperti biasa). Setiap tampal, potong, pendua atau padam ialah satu langkah buat asal. Lagi: [Salin, tampal dan pendua](topic:copy-paste).

| Kekunci | Fungsi |
|---|---|
| {{key:Mod+C}} | {{ui:Salin}} ahli dan tapak asas yang dipilih (bersama lubang, potongan hujung dan sambungannya) |
| {{key:Mod+X}} | {{ui:Potong}}: salin pilihan, kemudian padamnya |
| {{key:Mod+V}} | {{ui:Tampal}}: salinan mengikut penunjuk; klik persilangan grid untuk meletakkannya |
| {{key:Mod+Shift+V}} | {{ui:Tampal di tempat yang sama}}: pada koordinat tempat ia disalin |
| {{key:Mod+D}} | {{ui:Pendua}}: satu salinan serta-merta, dialihkan oleh ofset dalam [Tetapan DetailCraft](topic:settings) |
| {{key:Mod+A}} | {{ui:Pilih semua}}: setiap ahli, sambungan dan tapak asas |
| {{key:Esc}} | {{ui:Nyahpilih semua}} |

Jika anda telah memilih teks pada halaman (dalam jadual laporan, contohnya) dan tiada apa dalam model, {{key:Mod+C}} menyalin teks, seperti biasa.

{{ui:Baharu}}, {{ui:Sampel}} dan eksport tidak mempunyai kekunci; gunakan bar alat.

Tiada kekunci ini berfungsi semasa kotak dialog (pratonton lukisan bengkel atau soalan) dibuka.

## Medan dan panel

| Kekunci | Fungsi |
|---|---|
| {{key:Enter}} atau {{key:Tab}} | Guna nilai yang ditaip (setiap perubahan ialah satu langkah buat asal) |
| {{key:Enter}} dalam medan {{ui:Grid}}, {{ui:Aras}}, {{ui:Profil tersuai}}, lubang atau potongan hujung | Sama seperti menekan butang borang tersebut |
| {{key:Left}} {{key:Right}} | Alih antara tab {{ui:Masalah}}, {{ui:Senarai bahan}} dan {{ui:Jadual lenturan}} apabila tab mempunyai fokus |
| {{key:Esc}} | Tutup pratonton lukisan bengkel atau kotak dialog soalan (sama seperti {{ui:Batal}}) |

## Skrin dan bantuan

| Kekunci | Fungsi |
|---|---|
| {{key:Ctrl+Shift+F}} | Pusing antara normal, skrin penuh dan skrin penuh dengan bar disembunyikan. Ctrl pada setiap komputer, termasuk Mac |
| {{key:Mod+,}} | Buka {{ui:Tetapan}} ([Tetapan DetailCraft](topic:settings)) |
| {{key:Esc}} | Keluar dari skrin penuh |
| {{key:F1}} | Buka bantuan ini |

## Tetikus

| Tindakan | Dalam 3D | Dalam Pelan dan Dongakan |
|---|---|---|
| Klik | Pilih bahagian, atau letakkan di persilangan terdekat apabila alat letak dihidupkan (atau tampal di situ semasa menampal) | Sama |
| {{key:Shift}}, {{key:Ctrl}} atau {{key:Mod}} dan klik | Tambah bahagian ke pilihan, atau keluarkannya | Sama |
| Tekan pada bahagian yang dipilih dan seret | Alih pilihan merentasi aras; dengan {{key:Mod}} ditahan, naik dan turun | Alih pilihan (dalam dongakan: sepanjangnya dan naik turun) |
| Seret dengan butang kiri | Pusing model | Dengan {{ui:Pilih}}: tetingkap pilihan (ke kanan: sepenuhnya di dalam; ke kiri: menyentuh). Semasa meletakkan: pan |
| {{key:Shift}} dan seret dengan butang kiri | Dengan {{ui:Pilih}}: tetingkap pilihan, ditambah ke pilihan. Semasa meletakkan: pan | Dengan {{ui:Pilih}}: tetingkap pilihan, ditambah ke pilihan |
| {{key:Ctrl}} atau {{key:Mod}} dan seret dengan butang kiri | Pan | Tiada apa-apa |
| Seret dengan butang kanan | Pan | Pan |
| Roda | Zum ke arah tengah pandangan | Zum |
| Seret dengan butang tengah | Zum | Dengan {{ui:Pilih}}: pan. Selainnya zum |
| Lepaskan fail `.detailcraft.json` pada aplikasi | Buka fail itu | Buka fail itu |

Klik hanya dikira jika penunjuk bergerak kurang daripada kira-kira 5 piksel antara tekan dan lepas; pergerakan yang lebih panjang ialah seretan.

## Pad sentuh

| Tindakan | Fungsi |
|---|---|
| Leret dua jari ke atas atau bawah, atau cubit | Zum |
| Tekan dan seret | Pusing (3D) atau pan (Pelan dan Dongakan) |
| {{key:Shift}} dan tekan dan seret | Pan dalam 3D |
| Klik dua jari | Klik kanan (tiada menu dalam pandangan) |

## Sentuhan

Pada tablet atau skrin sentuh:

| Tindakan | Fungsi |
|---|---|
| Ketik | Pilih bahagian, atau letakkan di persilangan grid terdekat apabila alat letak dihidupkan (ketikan dalam lingkungan lebar jari daripadanya dikira) |
| Tekan lama pada bahagian | Tambah ke pilihan, atau keluarkannya (apa yang dilakukan {{key:Shift}}+klik dengan tetikus) |
| Satu jari pada bahagian yang dipilih, kemudian seret | Alih pilihan, melekap pada persilangan grid |
| Satu jari di tempat lain | Pusing model (3D) atau pan (Pelan dan Dongakan) |
| Dua jari | Cubit untuk zum, gerak bersama untuk pan |

Butang, senarai dan medan lebih besar apabila skrin hanya sentuhan. Tetingkap pilihan memerlukan tetikus; dengan jari, ketik dan tekan lama.

## Kekunci yang dikekalkan pelayar

Sesetengah pintasan milik pelayar dan tiada halaman boleh menggunakannya, contohnya {{key:Mod+W}} (tutup tab), {{key:Mod+T}} (tab baharu) dan {{key:Mod+N}} (tetingkap baharu). Jika {{key:Mod+Y}} membuka sejarah pelayar dan bukannya membuat semula, gunakan {{key:Mod+Shift+Z}}.

Pintasan hanya sampai ke DetailCraft apabila halaman mempunyai papan kekunci. Jika kekunci tidak berbuat apa-apa, atau pelayar yang bertindak balas, klik bahagian kosong tetingkap DetailCraft dahulu (contohnya selepas menaip dalam bar alamat).

## Di mana Alih berada

Tiada arahan Alih: pilih bahagian dan seret merentasi aras (tahan {{key:Mod}} untuk seret naik dan turun), atau sunting {{ui:Mula}} dan {{ui:Hujung}} dalam {{ui:Sifat}}.
