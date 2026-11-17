---
title: Gunakan DetailCraft dengan pembantu AI
summary: Benarkan pembantu AI anda sendiri atau skrip membaca model, bahagiannya, masalah dan pertembungan, menambah anggota dan sambungan, menyimpan dan mengeksport (USD juga): kebenaran, sambung melalui CadCraft Studio, dan log aktiviti.
keywords: ai, pembantu, ejen, mcp, model context protocol, skrip, automasi, bahagian, pertembungan, sambungan, kebenaran, putus sambungan, aktiviti, buat asal
from: d624c9a0
---

## Apa yang anda akan pelajari

Cara membenarkan pembantu AI (atau skrip yang anda tulis) bekerja dengan DetailCraft, dan cara memutuskan perkara yang boleh disentuhnya.

DetailCraft **tiada AI sendiri** dan tidak menghantar apa-apa ke mana-mana. Anda membawa pembantu: mana-mana program yang bercakap Model Context Protocol (MCP). DetailCraft hanya memberinya alat, dan anda yang memilih yang mana.

## Hidupkannya

1. Buka {{ui:Settings}} (ikon gear dalam bar aplikasi, atau {{key:Mod+,}}) dan pergi ke tab {{ui:DetailCraft}}.
2. Di bawah {{ui:Assistants}}, tanda **Benarkan pembantu AI dan skrip menggunakan DetailCraft**. Ia dimatikan sehingga anda berbuat demikian.
3. Pilih apa yang boleh dilakukannya: **Read** sudah ditanda pada mulanya; tanda **Edit**, **Save** atau **Export** hanya apabila anda memerlukannya.

Alat di luar kebenaran yang anda tanda tidak ditawarkan kepada pembantu, dan jika ia memintanya juga, DetailCraft menolak dan mencatatnya dalam log aktiviti. Mematikan suis menamatkan setiap sambungan serta-merta.

## Sambungkan pembantu anda

Pembantu bersambung melalui **CadCraft Studio** pada komputer anda: Studio menjalankan pelayan kecil yang hanya boleh dicapai oleh komputer ini, dilindungi oleh token yang dijana setiap kali ia bermula. Dalam Studio, pilih {{ui:Sambungkan pembantu}} dan salin alamat serta token ke dalam pembantu anda (Studio menunjukkan tetapan tepat untuk ditampal). Jangan sekali-kali kongsi token.

:::note
Tab pelayar tidak boleh membuka sambungan untuk pembantu: dalam aplikasi pelayar, suis itu tidak memberi kesan sehingga anda menggunakan CadCraft Studio pada komputer anda.
:::

## Anda kekal dalam kawalan

- **Setiap perubahan ialah satu langkah buat asal**, dilabelkan sebagai milik pembantu (contohnya "Pembantu: tambah rasuk", "Pembantu: tambah gusset"). {{key:Mod+Z}} membatalkan perubahan terakhir pembantu secara keseluruhan. Arahan `undo` pembantu hanya membatalkan langkahnya sendiri, bukan milik anda, melainkan ia memintanya secara jelas.
- **Ia menunggu anda.** Semasa anda meletakkan anggota, mengalihkan bahagian atau menampal, DetailCraft menolak perubahan pembantu dan memberitahunya untuk mencuba semula.
- **Anda tahu apabila satu disambungkan.** Butang dalam bar aplikasi menamakan pembantu semasa ia bersambung; klik untuk melihat apa yang dibenarkannya, atau untuk **Putus sambungan**.
- **Aktiviti.** {{ui:Settings}} › {{ui:DetailCraft}} › {{ui:Assistants}} › {{ui:Activity}} menyenaraikan setiap panggilan: bila, alat mana, selesai atau ditolak. {{ui:Save the log}} menyimpan salinan.

## Apa yang pembantu boleh minta

Semua panjang dalam milimeter, titik `[x, y, z]` dengan z ke atas, seperti dalam model.

| Alat | Kebenaran | Apa yang dilakukannya |
|---|---|---|
| `app_info`, `model_describe` | Read | Model yang dibuka: grid, aras, fasa, anggota mengikut jenis dan profil, sambungan, asas, tangga, bahagian, berat keluli, masalah |
| `parts_list` | Read | Tanda bahagian dengan profil, bahan, panjang potongan, bilangan, berat, fasa dan tanda himpunan; mengikut jenis, profil, tanda atau fasa |
| `problems_list` | Read | Apa yang disenaraikan dalam tab {{ui:Problems}}, setiap satu dengan perkara yang berkaitan |
| `clash_check` | Read | [Semakan pertembungan](topic:clash-check), dengan toleransi dan fasanya |
| `selection_get` | Read | Apa yang anda pilih |
| `selection_set` | Edit | Memilih anggota, sambungan, asas atau tangga (mengikut id atau tanda bahagian) untuk menunjukkannya kepada anda; tidak mengubah apa-apa |
| `member_add` | Edit | Rasuk, tiang, brace atau plat antara dua titik |
| `connection_add` | Edit | Plat hujung, tab ricih, plat asas, sambatan atau gusset di tempat anggota yang diberikan bertemu, seperti yang dilakukan oleh butang {{ui:Connect}} |
| `undo` | Edit | Membatalkan langkah terakhir pembantu |
| `model_save` | Save | Simpan DetailCraft sendiri |
| `model_export` | Export | IFC, fail NC, BOM, jadual lenturan, fail KISS atau senarai potongan, seperti yang dihasilkan oleh butang {{ui:Output}} |
| `usd_export` | Export | Model keluli sebagai USD (.usda, .usdc atau .usdz), seperti yang ditulis oleh {{ui:Output}} › {{ui:USD}} (lihat [Eksport model keluli sebagai USD](topic:usd)); dalam Studio ia boleh menulis fail ke folder yang anda benarkan |

## Jika sesuatu tidak berfungsi

- **Pembantu tidak nampak alat DetailCraft:** semak suis dihidupkan dalam tetingkap ini, dan tetingkap itu terbuka dalam Studio.
- **"needs the edit permission"** (atau simpan, eksport): tanda di bawah {{ui:Assistants}}, kemudian minta sekali lagi.
- **"The person is placing a member":** selesaikan apa yang anda lakukan (atau tekan {{key:Esc}}), kemudian biarkan pembantu mencuba semula.
- **Ralat "401" atau "token":** token telah berubah (Studio dimulakan semula, atau {{ui:New token}}). Salin yang baharu ke dalam tetapan pembantu.

## Lihat juga

- [Resipi untuk pembantu AI](common:assistants-recipes): contoh kerja, setiap satu dengan alat yang dipanggilnya.
