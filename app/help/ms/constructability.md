---
title: Semakan kebolehbinaan
summary: Masalah bagi perkara yang diperhatikan pemerinci dengan mata: bolt yang pemutar tidak dapat capai, bolt terlalu rapat untuk soket, kimpalan fillet di luar had saiznya, kimpalan yang obor tidak dapat capai, dan tiub yang menakung air.
keywords: kebolehbinaan, pemutar, soket, akses bolt, pengetatan, saiz kimpalan, kimpalan fillet, kimpalan minimum, kimpalan maksimum, air, lubang udara, lubang saliran, penggalvanian, keratan berongga, masalah
from: 72315151
---

DetailCraft mencari empat jenis masalah yang tiada semakan kekuatan jumpa, dan menyenaraikannya dalam panel {{ui:Masalah}}. Ia ialah amaran dan nota untuk diperhatikan, bukan ralat: model masih dibina.

## Bolt yang pemutar tidak dapat capai

Bagi setiap bolt, DetailCraft meletakkan soket di atas kepala dan atas nat. Soket ialah silinder selebar nat merentasi bucunya ditambah dinding 4 mm, panjang 60 mm. Jika badan rasuk, sayap, plat atau tupang berdiri di dalam silinder itu, masalah menamakan sambungan, berapa bolt, bahagian mana yang menghalang dan sejauh mana ia dari bolt.

Soketnya ialah soket hentaman yang tipikal. Spanar memerlukan ruang yang kurang dan alat yang lebih besar memerlukan lebih. Minta pembantu anda yang bersambung menjalankan `constructability_check` dengan `socketLength` yang lain untuk melihat bagaimana jawapan berubah.

## Bolt terlalu rapat untuk soket

Soket di atas satu bolt tidak boleh menyentuh kepala bolt seterusnya. Bolt dalam sambungan yang lebih dekat daripada lebar soket ditambah kepala jiran disenaraikan dengan jarak yang dijumpai dan jarak yang diperlukan.

## Saiz kimpalan fillet

AISC 360-16 Jadual J2.4 menetapkan kimpalan fillet terkecil mengikut ketebalan bahagian yang lebih nipis (3 mm sehingga ketebalan 6.35 mm, 5 mm hingga 12.7, 6 mm hingga 19.05, 8 mm ke atas), dan J2.2b yang terbesar sepanjang tepi bahan: tidak lebih besar daripada bahan apabila ia lebih nipis daripada 6.35 mm, jika tidak 1.6 mm kurang. Sambungan dengan saiz yang sama pada ketebalan yang sama disenaraikan sebagai satu masalah.

Ketebalan yang digunakan ialah bahagian paling nipis yang dinamakan oleh kimpalan, jadi kimpalan 8 mm di sekeliling rasuk dengan badan 6.35 mm disenaraikan.

## Air dan lubang udara

- **Hujung atas terbuka** bagi keratan berongga yang berdiri tegak atau condong melebihi 10° membenarkan hujan masuk.
- Keratan berongga yang **ditutup di kedua-dua hujung** memerlukan lubang udara dan lubang saliran; penggalvanian celup panas dan tekanan udara yang dipanaskan kedua-duanya memerlukannya.

## Bolehkah tukang kimpal mencapainya

Kimpalan fillet dibuat dengan obor separuh jalan antara dua muka yang disambungnya. Bagi setiap kimpalan fillet sekeliling (plat hujung, plat tapak, plat sudut) semakan mengambil garis luar keratan anggota pada plat dan, setiap 20 mm, menjalankan laluan obor keluar pada sudut 45° dari tempat muncungnya (jejari 10 mm untuk permulaan) mula-mula membersihkan kedua-dua muka, untuk 30 mm lagi. Jika laluan itu bertemu sayap rasuk itu sendiri atau bahagian lain, bahagian kimpalan itu disenaraikan dengan bahagian dan jaraknya. Nombor ini tipikal, bukan piawaian: tanya tukang fabrikasi anda untuk proses dan muncung. Kimpalan sepanjang dua tepi (tab ricih) tidak dikesan dan tidak disemak.
