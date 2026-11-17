---
title: Salin, tampal dan pendua
summary: Pilih beberapa bahagian, salin dengan lubang, potongan dan sambungannya, dan tampal pada persilangan grid, pada ofset, di tempat yang sama, atau dalam tab lain. Potong, pendua, padam dan pilih semua.
keywords: salin, tampal, potong, pendua, papan keratan, tampal di tempat yang sama, pilih semua, nyahpilih semua, pilih berbilang, klik shift, beberapa, ulang satu bay, salin satu bingkai, ofset, padam beberapa, menu edit, menu lagi
from: f25f1829
---

Kumpulan {{ui:Edit}} pada bar alat mempunyai {{ui:Undo}}, {{ui:Redo}}, {{ui:Copy}} dan {{ui:Paste}}. Menu {{ui:More}} mengandungi yang lain: {{ui:Cut}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:Paste in place}}, {{ui:Duplicate}}, {{ui:Delete}}, {{ui:Select all}} dan {{ui:Select none}}, setiap satu dengan kekunci pintasannya. Butang atau item menu yang tidak boleh bertindak sekarang dilumpuhkan (kelabu); letakkan penunjuk di atasnya untuk membaca sebabnya (contohnya "belum ada apa-apa disalin").

Setiap tampal, potong, pendua dan padam ialah satu langkah: satu {{key:Mod+Z}} membatalkan semuanya.

## Pilih beberapa bahagian

- Klik bahagian untuk memilihnya. Tahan {{key:Shift}} (atau {{key:Ctrl}}, atau {{key:Mod}}) dan klik lebih banyak bahagian untuk menambahkannya; klik bahagian yang dipilih dengan cara yang sama untuk mengeluarkannya.
- {{key:Mod+A}} atau {{ui:Select all}} memilih setiap anggota, sambungan dan asas.
- {{key:Esc}} atau {{ui:Select none}} mengosongkan pilihan.

Apabila beberapa perkara dipilih, panel {{ui:Properties}} bertajuk "4 dipilih" (atau berapa banyak pun) dan menyenaraikan anggota mengikut jenis, sambungan, asas dan berat keluli kasar, dengan butang {{ui:Copy}}, {{ui:Duplicate}} dan {{ui:Delete}}.

## Salin

1. Pilih anggota dan asas yang anda mahu.
2. Pilih {{ui:Copy}} atau tekan {{key:Mod+C}}.

Yang turut disalin:

- Setiap anggota sepenuhnya: profil, bahan, hujung, kedudukan, putaran, nama, lubang dan potongan. Profil tersuai yang digunakannya turut disalin.
- Setiap asas sepenuhnya: saiz, konkrit, jaringan bawah dan bar permulaan.
- Plat hujung dan plat tapak, tetapi hanya apabila setiap anggota yang disambungkan turut disalin: plat hujung rasuk memerlukan rasuk dan tiangnya. Bar status menyatakan berapa banyak sambungan yang ditinggalkan. Untuk meninggalkan sambungan dengan sengaja, kosongkan **Salin plat hujung dan plat tapak bersama anggotanya** dalam [tetapan DetailCraft](topic:settings).

Sambungan sahaja tidak boleh disalin; pilih anggotanya sebaliknya. Untuk memberi sambungan yang sama kepada sambungan lain, gunakan {{ui:Serupa}} (lihat [Plat hujung](topic:end-plates#copy-it-to-every-similar-joint)).

Salinan kekal dalam pelayar ini sehingga anda menyalin sesuatu yang lain. Tab atau tetingkap DetailCraft lain dalam pelayar yang sama boleh menampalnya, jadi anda boleh menyalin satu bingkai daripada satu model dan menampalnya ke model lain.

## Tampal pada persilangan grid

1. Pilih {{ui:Paste}} atau tekan {{key:Mod+V}}.
2. Gerakkan penunjuk ke atas paparan. Garis putus-putus salinan mengikut persilangan grid yang paling dekat dengan penunjuk.
3. Klik satu persilangan. Titik asas salinan (sudut terendahnya: x, y dan z terkecil bagi semua yang disalin) jatuh di situ.

Bahagian yang ditampal dipilih selepas itu, jadi anda boleh menampal semula di tempat lain, atau mengubahnya. {{key:Esc}} membatalkan tampalan; salinan kekal pada papan keratan. {{ui:Plan}} dan {{ui:Elevation}} memudahkan persilangan yang betul dikena.

:::tip
Untuk mengulang satu bay, pilih anggota bay (atau semua dengan {{key:Mod+A}}), salin, tampal, dan klik persilangan satu bay di sepanjang dari tempat sudut terendah salinan berada.
:::

## Tampal daripada papan kekunci

Semasa menampal, panel {{ui:Properties}} menunjukkan apa yang ada pada papan keratan dan dua borang:

- {{ui:Paste by offset (mm, from the original)}}: taip x, y dan z dan pilih {{ui:Paste at this offset}}. Ia bermula dengan ofset daripada [tetapan DetailCraft](topic:settings).
- {{ui:Paste onto a grid intersection}}: pilih grid berhuruf, grid bernombor dan aras, dan pilih {{ui:Paste here}}. Titik asas pergi ke situ.

## Tampal di tempat yang sama

{{ui:Paste in place}} ({{key:Mod+Shift+V}}) meletakkan salinan tepat pada koordinat tempat ia disalin. Gunakannya selepas {{ui:Cut}}, atau untuk membawa bahagian dari model lain ke tempat yang sama. Jika yang asal masih ada, salinan berada di atasnya dan bar status memberi amaran: alihkan salinan melalui {{ui:Start}} dan {{ui:End}} dalam {{ui:Properties}}, atau buat asal.

## Pendua

{{ui:Duplicate}} ({{key:Mod+D}}) menyalin pilihan dan menampalnya serta-merta, dialihkan mengikut ofset dalam [tetapan DetailCraft](topic:settings) (6000 mm sepanjang x sebagai permulaan). Ia tidak menukar apa yang ada pada papan keratan. Salinan dipilih selepas itu, jadi menekan {{key:Mod+D}} sekali lagi menghasilkan yang seterusnya daripadanya.

## Potong dan padam

- {{ui:Cut}} ({{key:Mod+X}}) menyalin pilihan, kemudian memadamnya. Tampalkannya di tempat yang sepatutnya.
- {{ui:Delete}} ({{key:Delete}} atau {{key:Backspace}}) memadam pilihan. Memadam anggota turut memadam sambungannya.

## Tanda selepas tampalan

Tanda bahagian dan pemasangan tidak pernah disimpan; DetailCraft menomborkannya semula daripada model selepas setiap perubahan ([Cara tanda diberikan](topic:mark-rules)). Oleh itu:

- Salinan yang merupakan bahagian yang sama dengan asalnya (profil, gred, panjang potongan, lubang dan potongan yang sama) berkongsi tanda asal, dan kiraan dalam {{ui:Part marks}} serta senarai bahan meningkat.
- Salinan yang berbeza mendapat tandanya sendiri. Rasuk yang ditampal tanpa plat hujungnya, sebagai contoh, tidak dipangkas, jadi ia bahagian yang berbeza. Tanda dinomborkan semula merentasi seluruh model, jadi nombor bahagian lain juga boleh berubah.

Setiap anggota, lubang, potongan, sambungan dan asas yang ditampal mendapat id baharu, jadi tiada apa dalam model yang pernah dikongsi antara salinan dan asalnya.

## Jika papan keratan ditolak

Apa yang ada pada papan keratan disemak dengan teliti seperti fail model yang anda buka: apa-apa yang bukan bahagian DetailCraft yang sah digugurkan, dan bar status menyatakan apa. Papan keratan yang diisi oleh DetailCraft yang lebih baharu, atau oleh sesuatu yang lain, ditolak dengan mesej dan tiada apa ditampal. Jika tetingkap persendirian tidak dapat menyimpan salinan dalam storan pelayar, salinan tetap berfungsi dalam tab itu.
