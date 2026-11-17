---
title: Bosqich boʻyicha material va ogʻirlik hisoboti
summary: Har bir bosqich uchun kesish uzunliklari, sonlar, ogʻirliklar va boʻyash maydonlari, uning boltlari va armaturasi bilan: jadval, CSV yoki PDF shaklida.
keywords: hisobot, ogʻirlik, tonnaj, kg, boʻyash, boʻyash maydoni, sirt maydoni, qoplama, kesish uzunligi, materiallar roʻyxati, bosqich, BOM, csv, pdf
from: 337d6d92
---

{{ui:Output}} guruhida {{ui:More}} ni oching va {{ui:Weight report by phase}} ni tanlang, yoki koʻrinish ostidagi {{ui:By phase}} yorligʻini oching. U quyidagilarni koʻrsatadi:

- **Bosqich boʻyicha xulosa**: har bir bosqich uchun detallar soni, poʻlat ogʻirligi, boʻyash maydoni, boltlar va langar sterjenlar hamda armatura; soʻng jami.
- **Har bir bosqich uchun alohida jadval**: unda har bir detal belgisi, uning turi, profili, materiali, kesish uzunligi, soni, bir donasining ogʻirligi, ogʻirligi va boʻyash maydoni; soʻng uning boltlari va langar sterjenlari.

{{ui:Download CSV}} xuddi shu jadvallarni bitta CSV faylga saqlaydi (`<name> weight report.csv`). {{ui:Download PDF}} [DetailCraft sozlamalaridan](topic:settings#drawings) varaq oʻlchamida hisobot yaratadi: avval xulosa, soʻng har bir bosqich; uzun jadvallar keyingi sahifaga oʻtkaziladi va har bir sahifa raqamlanadi.

## Raqamlar qanday hisoblanadi

- **Ogʻirliklar** yalpi, materiallar roʻyxatidagidek: profilning metr boshiga ogʻirligi kesish uzunligiga koʻpaytiriladi. Teshiklar va kesmalar ayrilmaydi.
- **Boʻyash maydoni** kesish uzunligi boʻylab kesimning tashqi tomoni: I-shakl uchun flanetslar va tanachaning har bir yuzi, plastina uchun ikki yuz va qirralar, quvur uchun faqat tashqi tomon. Uchlar va teshiklar hisobga olinmaydi.
- **Armatura** bosqich poydevorlaridagi sterjenlarning ogʻirligi, [egish jadvalidan](topic:footings-and-rebar).
- Birikmaning plastinalari va boltlari asosiy elementining bosqichida hisoblanadi. Qarang: [Bosqichlar](topic:phases).

[Bosqichlar boʻyicha belgilar](topic:phases#marks-per-phase) yoqilganda har bir bosqichning oʻz belgilari boʻladi (1-b1, 2-b1). U oʻchiq boʻlsa, belgi bir necha bosqichda chiqishi mumkin: har bir bosqich oʻzida boʻlgan qismlarni roʻyxatlaydi.
