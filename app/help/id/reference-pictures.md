---
title: Tempel area yang disalin sebagai gambar raster referensi
summary: Salin sebagian lembar PDF di MarkupCraft dan tempel ke DetailCraft pada ukuran sebenarnya, rebah di atas level di bawah baja, untuk dimodelkan di atasnya.
keywords: gambar raster, gambar referensi, underlay, latar belakang, salin area, markupcraft, pdf, telusuri, ukuran sebenarnya, skala, opasitas, overlay
from: 0c48445f
---

Alat Salin area di MarkupCraft menyalin sebagian lembar sebagai gambar raster yang mengetahui ukurannya. Tempel ke DetailCraft dan gambar itu terbaring rata di atas level, pada ukuran sebenarnya, di bawah grid dan baja, sehingga Anda dapat menempatkan batang di atas denah dari gambar-gambar.

## Tempelkan

1. Di MarkupCraft, salin area dengan {{ui:Lainnya}} › {{ui:Salin area halaman…}}, lalu {{ui:Salin}} (atau {{ui:Salin sebagai overlay}}, yang membuat kertas tembus pandang).
2. Di DetailCraft (browser yang sama), tekan {{key:Mod+V}} atau pilih {{ui:Tempel}}.

Gambar raster muncul di tengah grid pada level yang ditampilkan di Denah (di 3D atau tampak, pada level terendah) dan langsung dipilih. Bilah status menyebutkan ukurannya.

- **Ukuran sebenarnya:** jika lembar memiliki skala gambar, satu piksel digambar sebagai panjang yang ditunjukkan pada gambar.
- **Ukuran kertas:** jika lembar tidak memiliki skala, gambar seukuran area di kertas, dan bilah status menyatakannya. Ketik **mm per piksel** baru di {{ui:Properti}} untuk mengubah skalanya.

Area yang disalin sebagai overlay mulai dengan opasitas saat disalin.

{{key:Mod+V}} menempelkan apa pun yang terakhir Anda salin: area dari MarkupCraft, atau batang dan fondasi yang disalin di DetailCraft. Jika gambar lain disalin ke papan klip setelah area (dari program lain), tidak ada yang ditempel; salin ulang area tersebut.

## Pindahkan, ubah dan hapus

- Klik gambar raster untuk memilihnya (apa pun di depannya dipilih lebih dulu). Garis biru menunjukkan gambar dipilih.
- Seret untuk memindahkannya melintasi level. Bagian tengah dan sudutnya menempel pada perpotongan grid.
- Di {{ui:Properti}}, ketik di mana bagian tengahnya berada (x, y) dan level tempatnya berada (z), **mm per piksel**-nya, dan **opasitas**-nya.
- {{key:Delete}} atau {{ui:Hapus}} menghapusnya.

Setiap tempel, pindah, ubah dan hapus adalah satu langkah: {{key:Mod+Z}} membatalkannya.

Gambar raster disimpan di file model, sehingga terbuka bersama model. Ini hanya referensi: tidak ada di gambar, ekspor, daftar material atau salinan.
