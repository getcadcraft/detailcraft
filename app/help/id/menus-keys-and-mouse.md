---
title: Menu, tombol, dan mouse
summary: Pilih gaya menu yang cocok dengan cara kerja Anda, beri perintah apa pun tombol Anda sendiri, pindahkan perintah antar-tab ribbon, dan atur apa yang dilakukan roda serta tombol mouse.
keywords: gaya menu, menu, ribbon, bilah alat, baris perintah, pintasan keyboard, pintasan, tombol, sesuaikan, atur ulang tombol, ikat ulang, mouse, roda, balik, arah zoom, tombol tengah, tombol kanan, geser, orbit, ekspor, impor, berpindah, familiar, drafting klasik, ribbon baja
from: 4132c6e5
---

Perintah DetailCraft sama apa pun cara Anda mencapainya. **Gaya menu** hanya menentukan di mana perintah itu berada di layar, bagaimana namanya di sana, dan tombol mana yang menjalankannya. Pilih satu di {{ui:Pengaturan}} ({{key:Mod+,}}) › {{ui:DetailCraft}} › {{ui:Menu, tombol, dan mouse}}; perubahannya langsung berlaku, dan peramban ini mengingatnya.

## Tiga gaya

| Gaya | Yang Anda dapatkan |
|---|---|
| {{ui:DetailCraft}} | Bilah alat DetailCraft sendiri (File, Letakkan, Sambung, Edit, Keluaran) dan tombol satu huruf: {{key:V}} pilih, {{key:B}} balok, {{key:C}} kolom, {{key:R}} bresing, {{key:P}} pelat, {{key:F}} fondasi, {{key:S}} tangga. Ini gaya awalnya. |
| {{ui:Drafting klasik}} | Untuk orang yang mengetik perintah: ribbon kecil ({{ui:Beranda}}, {{ui:Tampilan}}, {{ui:Keluaran}}) dan baris perintah. Ketik BEAM, COLUMN, BRACE, PLATE, FOOTING, STAIR, ENDPLATE, BASEPLATE, SHEARTAB, SPLICE, GUSSET, U (urungkan), ZOOM, PLAN, 3D, DRAWINGS, NC, atau HELP lalu tekan {{key:Enter}}; {{key:Enter}} pada baris kosong mengulangi perintah terakhir, {{key:Esc}} menghapusnya. Mulai mengetik di mana saja dan huruf-huruf masuk ke baris perintah. Tombol tengah menggeser; di 3D, {{key:Shift}} dan tombol tengah berorbit. |
| {{ui:Ribbon baja}} | Tab seperti cara program detailing baja menatanya: {{ui:Pemodelan}} (anggota, beton, tangga), {{ui:Detailing}} (sambungan), {{ui:Edit}}, {{ui:Gambar}} (gambar dan laporan), {{ui:Fabrikasi}} (file NC, IFC), dan {{ui:Tampilan}}, dengan menu {{ui:File}} dan tombol cepat di kanan. Tombol satu huruf tetap ada. Tombol tengah menggeser; di 3D tombol kiri berorbit. |

Setiap gaya tetap menyediakan {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+Shift+V}}, {{key:Mod+D}}, dan {{key:Mod+A}}. Ribbon juga memuat {{ui:3D}}, {{ui:Denah}}, {{ui:Tampak}}, dan {{ui:Paskan}} dari bilah tampilan.

:::tip
Tombol yang termasuk tata letak bawaan DetailCraft tetapi diberikan perintah lain oleh gaya Anda tidak berfungsi, dan baris status menunjukkan ke mana perintahnya pergi ("Di Ribbon baja saya, Kolom adalah Ctrl+Alt+C"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}}, dan tombol panah selalu mempertahankan maknanya, dan saat anggota setengah diletakkan atau salinan mengikuti penunjuk, huruf-huruf menjadi milik DetailCraft.
:::

## Buat milik Anda sendiri

1. Pilih gaya yang paling dekat dengan keinginan Anda, lalu klik {{ui:Sesuaikan…}}.
2. Di {{ui:Tombol dan menu}}, temukan perintah (kotak pencarian membantu). {{ui:Tambah tombol}} lalu tekan tombolnya, atau dua tombol berurutan untuk tombol dua huruf. Klik tombol untuk melepasnya.
3. Dengan ribbon, {{ui:Letaknya}} memindahkan perintah ke tab dan panel lain, ke menu {{ui:File}}, atau ke {{ui:Hanya tombol}}.
4. Di {{ui:Mouse}}, atur roda, tombol yang menggeser denah dan tampak, dan apa yang dilakukan setiap tombol di tampilan 3D.
5. Beri nama dan klik {{ui:Simpan}}.

Menyimpan gaya bawaan membuat salinan milik Anda sendiri ("Ribbon baja saya"); gaya bawaan tidak pernah berubah. Tombol yang diberikan ke dua perintah ditampilkan dengan warna merah dan harus diperbaiki sebelum Anda dapat menyimpan.

## Mouse

- **Roda mouse**: {{ui:Gulir ke atas memperbesar}} (awal) atau {{ui:Gulir ke atas memperkecil}}, dan seberapa cepat. Cubitan trackpad selalu melakukan zoom sesuai arah gerakan jari Anda.
- **Geser denah dan tampak dengan**: tombol tengah, tombol kanan, atau keduanya. Dengan alat Pilih, tombol kiri selalu menggambar jendela pilihan.
- **Seret di tampilan 3D**: {{ui:Setiap tampilan sendiri}} mempertahankan tombol DetailCraft (kiri berorbit, tengah zoom, kanan geser). Atau atur setiap tombol untuk berorbit, geser, zoom, atau tidak ada; {{key:Shift}} dengan tombol yang berorbit atau menggeser akan menukar keduanya.

## Bawa bersama Anda

{{ui:Ekspor}} menyimpan gaya yang sedang dipakai sebagai file `.ccinput.json` kecil; {{ui:Impor…}} menambahkannya, dari komputer lain atau rekan. File yang diimpor hanya dapat mengarah ke perintah DetailCraft sendiri: apa pun yang lain di dalamnya dibiarkan dan dihitung di baris status. {{ui:Hapus gaya ini}} menghapus gaya milik Anda sendiri.

:::note
Pengaturan ini tetap di peramban ini. {{ui:Gunakan gaya ini di setiap aplikasi}} di bawah kartu gaya membuat setiap aplikasi terbuka dalam gaya yang cocok (bilah alat sendiri, ribbon, atau Drafting klasik), dengan perubahan yang Anda buat di setiap aplikasi. DetailCraft tidak memiliki gaya bilah menu; jika bilah menu aplikasi lain dipilih untuk setiap aplikasi, DetailCraft tetap memakai bilah alatnya sendiri.
:::

Terkait: [Tombol dan mouse](topic:keyboard) · [Pengaturan DetailCraft](topic:settings) · [Beralih dari perangkat lunak detailing lain](topic:coming-from)
