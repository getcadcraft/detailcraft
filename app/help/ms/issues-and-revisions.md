---
title: Isu, semakan dan log perubahan lukisan
summary: Kekalkan satu sejarah isu bersama model arkitek: baca isu masuk, rekod arahan tapak, lukisan bengkel dan model dipautkan terhadap satu isu, dan baca log perubahan lukisan.
keywords: isu, semakan, semakan lukisan, log perubahan, log perubahan lukisan, daftar lukisan, arahan tapak, lukisan bengkel, model dipautkan, tender, pembinaan, sejarah isu, lukisan bengkel, fabrikasi
from: 4b9a1b7b
---

## Apa yang akan anda lakukan

Bekerja daripada sejarah isu yang sama seperti ahli pasukan yang lain. Lihat helaian mana yang dikeluarkan pada semakan yang mana, dan kekalkan apa yang berlaku di tapak terhadap isu yang berkaitan.

## Langkah

1. Buka **Isu dan semakan**.
2. Pilih **Baca sejarah isu** dan pilih fail `.issues.json` yang disimpan daripada BimCraft atau aplikasi lain. Isu dan rekodnya ditambah kepada anda. Tiada apa-apa diganti.
3. Pilih **Tambah rekod** untuk arahan tapak, lukisan bengkel, set penanda, model dipautkan atau nota. Pilih isu yang berkaitan dan statusnya. Fail yang anda pilih direkodkan mengikut namanya, saiz dan SHA-256; fail kekal di tempatnya.
4. **Log perubahan lukisan** menunjukkan satu baris untuk setiap helaian dan satu lajur untuk setiap isu. Semakan dalam kurungan ialah semakan yang dikeluarkan semula tanpa perubahan.
5. **Muat turun log perubahan (CSV)** menyimpan isu, jadual helaian dan rekod. **Simpan sejarah isu** menulis fail yang dibaca oleh aplikasi lain.

## Perkara yang perlu diketahui

- Helaian masih dikeluarkan daripada Lukisan, helaian demi helaian. Isu-isu itu muncul di sini: helaian yang dikeluarkan pada satu tarikh dengan satu nota ialah satu isu.
- Rekod dan isu yang anda baca disimpan dalam fail model. Setiap perubahan ialah satu Buat asal.
- Membaca fail yang sama dua kali tidak menambah apa-apa dua kali. Apabila dua salinan mengandungi rekod yang sama, salinan yang lebih baharu dikekalkan.
