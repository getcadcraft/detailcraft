---
title: Semak eksport IFC dengan IDS pelanggan
summary: Muat fail .ids yang diberikan kepada anda dan lihat setiap bahagian yang dieksport yang tidak memenuhinya dalam Masalah, sebelum anda menghantar IFC.
keywords: ids, information delivery specification, buildingSMART, keperluan, penghantaran, semak, pengesahan, qa, eksport ifc, sifat, bahan, perolehan
from: 50d0f785
---

## Apa yang anda akan lakukan

IDS (Information Delivery Specification, piawaian buildingSMART) ialah senarai apa yang mesti terkandung dalam IFC. DetailCraft menyemak IFC yang akan dieksportnya (fail yang sama dengan yang ditulis oleh {{ui:IFC}}) berbanding IDS yang diberikan kepada anda, dan menyenaraikan setiap bahagian yang tidak memenuhi.

## Langkah

1. Buka atau lukis model anda.
2. Klik {{ui:Semak dengan IDS…}} dalam kumpulan {{ui:Output}} bar alat.
3. Klik {{ui:Muat fail .ids…}} dan pilih fail itu. Tiada apa-apa dimuat naik.
4. Baca hasilnya: setiap spesifikasi dengan {{ui:Lulus}} atau {{ui:Gagal}} dan berapa banyak elemen yang dikenakannya.
5. Buka {{ui:Masalah}} ({{key:Ctrl+Shift+M}}) dan klik satu kegagalan: anggota, sambungan, tangga atau tapak asas asalnya dipilih dan paparan dizum kepadanya.

## Apa yang anda patut lihat

- Satu amaran bagi setiap elemen yang dieksport dan setiap keperluan yang tidak dipenuhinya, dengan nama spesifikasi, apa yang diminta IDS dan apa yang ada dalam eksport.
- Laporan semakan (dalam {{ui:Masalah}}) bermula dengan IDS: tajuk, versi, pengarang dan kiraan setiap spesifikasi.

## Perkara yang perlu diketahui

- IDS disimpan dalam fail model, jadi ia disemak semula apabila anda membuka model. Memuatkan atau melupakannya ialah satu langkah yang boleh anda buat asal.
- Setiap perubahan disemak semula sebentar kemudian; pada model besar, semakan menunggu sedikit lebih lama antara larian.
- GlobalId eksport datang daripada nama model dan nombor bahagian dalam DetailCraft, jadi ia kekal sama dari satu semakan ke semakan seterusnya. Menamakan semula model memberi setiap elemen GlobalId baharu.
- Nombor dibandingkan dalam unit SI (eksport dalam milimeter; panjang ditukar kepada meter dahulu).

- Corak dalam IDS dibaca sebagai keseluruhan nilai. `^` pada permulaan dan `$` pada akhir juga dianggap sebagai "keseluruhan nilai", seperti yang dimaksudkan oleh kebanyakan fail IDS.

## Seterusnya

- [Eksport IFC](topic:ifc-export)
