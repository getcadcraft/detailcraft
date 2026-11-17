---
title: Fasa
summary: Bahagikan model kepada fasa (urutan pendirian atau penghantaran), tunjuk atau sembunyikan setiap fasa, letakkan bahagian dalam fasa, dan nomborkan tanda mengikut fasa.
keywords: fasa, fasa, pengurus fasa, urutan pendirian, penghantaran, lot, urutan, sembunyi fasa, tunjuk fasa, penapis, penomboran, awalan tanda, mengikut fasa
from: bae506f5
---

Fasa ialah kumpulan bahagian yang dibuat, dihantar atau didirikan bersama: urutan pendirian, penghantaran, sesuatu lot. Setiap anggota dan asas berada dalam satu fasa. Sambungan berada dalam fasa anggota utamanya: rasuk bagi plat hujung, tiang bagi plat tapak. Model baharu mempunyai satu fasa.

## Panel Fasa

Bahagian {{ui:Fasa}} dalam panel {{ui:Model}} menyenaraikan setiap fasa:

- kotak semak menunjuk atau menyembunyikan fasa dalam paparan;
- nombor, dan nama yang boleh anda taip (kosong = "Fasa 2" dan seterusnya);
- berapa banyak bahagian dalam fasa itu;
- butang {{ui:×}} mengalih keluar fasa. Hanya fasa kosong boleh dibuang: alihkan bahagiannya ke fasa lain dahulu.

{{ui:Tambah fasa}} menambah nombor seterusnya dan menjadikannya fasa tempat bahagian baharu dimasukkan.

## Letakkan bahagian dalam fasa

- **Bahagian baharu:** {{ui:Bahagian baharu masuk ke}} memilih fasa tempat setiap anggota dan asas yang anda letakkan mulai sekarang akan masuk.
- **Satu bahagian:** pilih dan tukar {{ui:Fasa}} dalam panel {{ui:Sifat}}.
- **Banyak bahagian:** pilih mereka (tetingkap, {{key:Shift}}+klik, {{key:Mod+A}}) dan tukar {{ui:Fasa}} di bahagian atas panel {{ui:Sifat}}. Ia memaparkan **Pelbagai** apabila mereka berada dalam fasa yang berbeza. Satu perubahan ialah satu langkah buat asal.

Salinan mengekalkan fasa bahagian yang disalin daripadanya, juga apabila ditampal ke dalam model lain (fasa itu ditambah di sana).

## Tunjuk dan sembunyi fasa

Fasa yang disembunyikan tidak dilukis dalam paparan, tidak boleh diklik atau ditangkap oleh tetingkap pilihan, dan {{key:Mod+A}} tidak memasukkannya. Ia masih ada dalam senarai bahan, laporan, lukisan dan setiap eksport. Menyembunyikan hanya untuk paparan: ia tidak disimpan dan tiada buat asal.

## Tanda mengikut fasa

Dengan **Nombor tanda mengikut fasa** dihidupkan (ia bermula dalam keadaan hidup) dan bahagian berada dalam lebih daripada satu fasa, setiap fasa dinomborkan sendiri dan tandanya bermula dengan nombor fasa: tanda bahagian 1-b1, 2-b1, tanda himpunan 2-B1, asas 2-F1. Dua rasuk serupa dalam fasa berbeza kemudiannya mempunyai tanda yang berbeza, kerana ia dibuat dan dihantar pada masa yang berbeza. Dengan satu fasa sahaja digunakan, tanda tiada awalan. Matikannya untuk menomborkan keseluruhan model sebagai satu, supaya bahagian yang serupa berkongsi tanda walau apa pun fasanya.

Fasa ditulis ke dalam eksport IFC (set sifat DetailCraft, Fasa).

:::note
Model dengan fasa disimpan dalam format fail 2 DetailCraft. Keluaran 0.3 DetailCraft tidak dapat membukanya; versi ini membuka fail lama, dengan setiap bahagian dalam fasa 1.
:::
