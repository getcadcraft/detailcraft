---
title: Gunakan DetailCraft dengan asisten AI
summary: Biarkan asisten AI Anda sendiri atau skrip membaca model, bagian, masalah, dan benturannya, menambahkan batang dan sambungan, menyimpan dan mengekspor (termasuk USD): izin, koneksi melalui CadCraft Studio, dan log aktivitas.
keywords: ai, asisten, agen, mcp, model context protocol, skrip, otomatisasi, bagian, benturan, sambungan, izin, putuskan, aktivitas, urungkan
from: d624c9a0
---

## Yang akan Anda pelajari

Cara membiarkan asisten AI (atau skrip yang Anda tulis) bekerja dengan DetailCraft, dan cara memutuskan apa yang boleh disentuhnya.

DetailCraft **tidak memiliki AI sendiri** dan tidak mengirim apa pun ke mana pun. Anda membawa asistennya: program apa pun yang menggunakan Model Context Protocol (MCP). DetailCraft hanya memberinya alat, dan Anda yang memilih alat mana.

## Aktifkan

1. Buka {{ui:Pengaturan}} (ikon roda gigi di bilah aplikasi, atau {{key:Mod+,}}) dan buka tab {{ui:DetailCraft}}.
2. Di bawah {{ui:Asisten}}, centang **Izinkan asisten AI dan skrip menggunakan DetailCraft**. Fitur ini mati sampai Anda mengaktifkannya.
3. Pilih apa yang boleh dilakukannya: **Baca** sudah dicentang sejak awal; centang **Sunting**, **Simpan**, atau **Ekspor** hanya jika Anda membutuhkannya.

Alat di luar izin yang Anda centang tidak ditawarkan kepada asisten, dan jika ia tetap memintanya, DetailCraft menolak dan mencatatnya di log aktivitas. Mematikan sakelar mengakhiri semua koneksi sekaligus.

## Sambungkan asisten Anda

Asisten terhubung melalui **CadCraft Studio** di komputer Anda: Studio menjalankan server kecil yang hanya dapat dijangkau komputer ini, dilindungi oleh token yang dibuatnya setiap kali dimulai. Di Studio, pilih {{ui:Sambungkan asisten}} dan salin alamat serta tokennya ke asisten Anda (Studio menampilkan pengaturan persis yang harus ditempel). Jangan pernah membagikan token.

:::note
Tab peramban tidak dapat membuka koneksi untuk asisten: di aplikasi peramban, sakelar tidak berpengaruh sampai Anda menggunakan CadCraft Studio di komputer Anda.
:::

## Anda tetap memegang kendali

- **Setiap perubahan adalah satu langkah urungkan**, diberi label sebagai milik asisten (misalnya "Asisten: tambah balok", "Asisten: tambah pelat buhul"). {{key:Mod+Z}} mengambil kembali perubahan terakhir asisten secara utuh. `undo` milik asisten hanya mengambil kembali langkahnya sendiri, tidak pernah langkah Anda, kecuali jika ia memintanya secara eksplisit.
- **Ia menunggu Anda.** Saat Anda menempatkan batang, memindahkan bagian, atau menempel, DetailCraft menolak perubahan asisten dan memberitahunya untuk mencoba lagi.
- **Anda tahu saat ada asisten yang terhubung.** Sebuah tombol di bilah aplikasi menyebut nama asisten selama terhubung; klik untuk melihat apa yang boleh dilakukannya, atau untuk **Putuskan** koneksinya.
- **Aktivitas.** {{ui:Pengaturan}} › {{ui:DetailCraft}} › {{ui:Asisten}} › {{ui:Aktivitas}} mencantumkan setiap panggilan: kapan, alat apa, selesai atau ditolak. {{ui:Simpan log}} menyimpan salinannya.

## Apa yang bisa diminta asisten

Semua panjang dalam milimeter, titik `[x, y, z]` dengan z ke atas, seperti pada model.

| Alat | Izin | Yang dilakukannya |
|---|---|---|
| `app_info`, `model_describe` | Baca | Model yang terbuka: grid, level, fase, batang menurut jenis dan profil, sambungan, pondasi, tangga, bagian, berat baja, masalah |
| `parts_list` | Baca | Tanda part dengan profil, material, panjang potong, jumlah, berat, fase, dan tanda rakitan; menurut jenis, profil, tanda, atau fase |
| `problems_list` | Baca | Yang tercantum di tab {{ui:Masalah}}, masing-masing dengan keterangannya |
| `clash_check` | Baca | [Pemeriksaan benturan](topic:clash-check), dengan toleransi dan fasenya |
| `selection_get` | Baca | Apa yang sedang Anda pilih |
| `selection_set` | Sunting | Memilih batang, sambungan, pondasi, atau tangga (menurut id atau tanda part) untuk menampilkannya kepada Anda; tidak mengubah apa pun |
| `member_add` | Sunting | Balok, kolom, bresing, atau pelat di antara dua titik |
| `connection_add` | Sunting | Pelat ujung, tab geser, pelat dasar, sambungan lewatan, atau pelat buhul di tempat batang yang diberikan bertemu, seperti yang dilakukan tombol {{ui:Sambung}} |
| `undo` | Sunting | Mengambil kembali langkah terakhir asisten |
| `model_save` | Simpan | Simpan milik DetailCraft sendiri |
| `model_export` | Ekspor | IFC, file NC, BOM, jadwal pembengkokan, file KISS, atau daftar potong, seperti yang dibuat tombol {{ui:Keluaran}} |
| `usd_export` | Ekspor | Model baja sebagai USD (.usda, .usdc, atau .usdz), seperti yang ditulis {{ui:Keluaran}} › {{ui:USD}} (lihat [Ekspor model baja sebagai USD](topic:usd)); di Studio ia dapat menulis file ke folder yang Anda izinkan |

## Jika ada yang tidak berfungsi

- **Asisten tidak melihat alat DetailCraft:** periksa bahwa sakelar aktif di jendela ini, dan bahwa jendela ini terbuka di Studio.
- **"membutuhkan izin sunting"** (atau simpan, ekspor): centang di bawah {{ui:Asisten}}, lalu minta lagi.
- **"Orang tersebut sedang menempatkan batang":** selesaikan yang sedang Anda kerjakan (atau tekan {{key:Esc}}), lalu biarkan asisten mencoba lagi.
- **Kesalahan "401" atau "token":** token telah berubah (Studio dimulai ulang, atau {{ui:Token baru}}). Salin token yang baru ke pengaturan asisten.

## Lihat juga

- [Resep untuk asisten AI](common:assistants-recipes): contoh lengkap, masing-masing dengan alat yang dipanggilnya.
