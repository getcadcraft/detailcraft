---
title: Belgilarni tekshirish va materiallar roʻyxati
summary: Har bir detalga berilgan detal va yigʻma belgilarini oʻqing, materiallar roʻyxatini tekshiring va uni CSV sifatida yuklab oling.
keywords: belgilar, raqamlash, detal belgisi, yigʻma belgisi, qism belgisi, bom, materiallar roʻyxati, material roʻyxati, ogʻirliklar, boltlar roʻyxati, csv, raqamlash
from: caa2ee80
---

DetailCraft modelni oʻzi belgilaydi. Raqamlash buyrugʻi yoʻq va ishga tushiradigan hech narsa yoʻq: har bir oʻzgarishdan keyin qaysi detallar bir xil poʻlat boʻlagi ekanini aniqlaydi va ularga bitta belgi beradi.

## Belgilar qayerda koʻrinadi

- {{ui:Model}} panelidagi {{ui:Part marks}} roʻyxati: har bir belgi uning profili, uzunligi va soni bilan. Biriga bossangiz, shu belgili birinchi detal tanlanadi.
- Tanlangan element ({{ui:Properties}}) paneli (va chap paneldagi **Part marks** roʻyxati): {{ui:Part mark}} va {{ui:Assembly}}. Panel sarlavhasida ham belgi koʻrsatiladi, masalan "Toʻsin b1".
- {{ui:Bill of materials}} yorligʻi, CSV, NC fayl nomlari, ishlab chiqarish chizmalari va IFC eksport (har bir elementning tegi sifatida).

## Detallar qanday belgilanadi

- **Detal belgilari:** ustunlar uchun c, toʻsinlar uchun b, tirgaklar uchun br, zinalarning kosourlari uchun st, plastinalar uchun p (uchlik va tayanch plastinalar ham). Soʻng raqam: c1, c2, b1, p1 … Detallar bir nechta bosqichda boʻlsa, bosqich raqami oldin keladi, masalan 2-b1.
- **Yigʻma belgilari:** C, B, BR yoki P. Yigʻma asosiy element va unga payvandlangan plastinalardir, masalan ikki uchlik plastinali toʻsin yoki tayanch plastinali ustun.
- Ikki detal bir belgini oladi, agar ularning profili, materiali va kesish uzunligi, shuningdek teshiklari va kesiklari bir xil boʻlsa (1 mm ichida), hatto biri ikkinchisiga nisbatan teskari yoki ostin-ustin burilgan boʻlsa ham.
- Raqamlash avval ustunlar, soʻng toʻsinlar, tirgaklar va plastinalar tartibida; har birida profil nomi boʻyicha, eng uzuni birinchi.

Toʻliq qoidalar, shu jumladan shveller va burchaklar uchun qaysi burilishlar hisobga olinishi: [Belgilash qoidalari](topic:mark-rules).

:::warning
Belgilar har bir oʻzgarishdan keyin qaytadan hisoblanadi, shuning uchun ular qayta raqamlanishi mumkin. Detal qoʻshish, profilni oʻzgartirish yoki teshik qoʻshish b3 ni b4 ga oʻtkazishi mumkin. Belgilarni model tugagandagina yakuniy deb hisoblang va materiallar roʻyxati, NC fayllar va ishlab chiqarish chizmalarini bir xil saqlangan modeldan tayyorlang.
:::

## Materiallar roʻyxatini oʻqish

Pastdagi {{ui:Bill of materials}} yorligʻini oching. Unda uchta jadval bor.

**Detallar**, sarlavhada umumiy poʻlat ogʻirligi bilan:

| Ustun | Maʼnosi |
|---|---|
| Part mark | Shu belgili birinchi detalni tanlash uchun bosing |
| Type | toʻsin, ustun, tirgak, kosour yoki plastina |
| Profile | Masalan W16x26 yoki PL20x180 |
| Material | Siz belgilagan sinf |
| Length (mm) | Birikmalardan keyingi kesish uzunligi |
| Count | Nechta |
| Unit weight (kg) | Profilning metr boʻyicha massasi × uzunlik |
| Total weight (kg) | Birlik ogʻirligi × soni |

Oxirgi qatorda umumiy soni va ogʻirligi koʻrsatiladi.

**Yigʻmalar:** har bir yigʻma belgisi, uning asosiy detali, barcha detallari (masalan "b1 + p1 + p1"), soni, birlik ogʻirligi va umumiy ogʻirlik.

**Boltlar va langar sterjenlari:** turi, diametri, uzunligi va sinfi boʻyicha guruhlangan, soni bilan.

:::note
Ogʻirliklar yalpi: teshiklar va kesiklar chegirilmagan. Boltlar, gaykalar, shaybalar va payvandlar poʻlat ogʻirligiga kirmaydi.
:::

## Yuklab olish

Yorliqdagi {{ui:Download CSV}} ni yoki {{ui:Output}} guruhidagi {{ui:BOM}} ni tanlang. `<name> BOM.csv` fayli uchta jadvalni ketma-ket saqlaydi, har biri oʻz sarlavhasi bilan, ular orasida boʻsh qator bilan. Uni istalgan elektron jadval dasturi ochadi.

## Yuborishdan oldin tekshiring

1. {{ui:Problems}} yorligʻini oching va har bir qatorni tozalang. Qurilmagan birikma plastina, teshik yoki bolt qoʻshmaydi, shuning uchun materiallar roʻyxati kam chiqadi.
2. Kutilmagan belgilarga qarang. Bir xil deb oʻylagan, lekin turli belgili ikki toʻsin odatda teshik, kesik yoki kesish uzunligi bilan farq qiladi; ularning har birini tanlab solishtiring.
3. Modelni saqlang, soʻng barcha eksportni shu saqlangan holatdan qiling.
