---
title: DetailCraft ni AI yordamchi bilan ishlatish
summary: Oʻzingizning AI yordamchingiz yoki skriptingiz modelni, uning detallarini, muammolarini va toʻqnashuvlarini oʻqishi, elementlar va ulanishlar qoʻshishi, saqlashi va eksport qilishi (USD ham) mumkin: ruxsatnomalar, CadCraft Studio orqali ulanish va faollik jurnali.
keywords: ai, yordamchi, agent, mcp, model context protocol, skript, avtomatlashtirish, detallar, toʻqnashuvlar, ulanishlar, ruxsatnomalar, uzish, faollik, bekor qilish
from: d624c9a0
---

## Nima oʻrganasiz

AI yordamchi (yoki siz yozgan skript) DetailCraft bilan qanday ishlashi va u nimalarga tegishi mumkinligini qanday hal qilish kerakligi.

DetailCraft da **oʻz AI yoʻq** va hech narsani hech qayerga yubormaydi. Yordamchini siz keltirasiz: Model Context Protocol (MCP) ni tushunadigan istalgan dastur. DetailCraft unga faqat vositalar beradi, ularni esa siz tanlaysiz.

## Yoqish

1. {{ui:Settings}} ni oching (ilova satridagi tishli belgi yoki {{key:Mod+,}}) va {{ui:DetailCraft}} yorligʻiga oʻting.
2. {{ui:Assistants}} ostida **AI yordamchilar va skriptlarga DetailCraft dan foydalanishga ruxsat berish** ni belgilang. Siz buni qilmaguningizcha u oʻchiq boʻladi.
3. Nima qila olishini tanlang: **Oʻqish** dastlab belgilangan; **Tahrirlash**, **Saqlash** yoki **Eksport** ni faqat kerak boʻlganda belgilang.

Siz belgilagan ruxsatlardan tashqari vositalar yordamchiga taklif qilinmaydi; u baribir soʻrasa, DetailCraft rad etadi va buni faollik jurnaliga yozadi. Kalitni oʻchirish barcha ulanishlarni bir vaqtda tugatadi.

## Yordamchingizni ulash

Yordamchilar kompyuteringizdagi **CadCraft Studio** orqali ulanadi: Studio faqat shu kompyuter yeta oladigan kichik server ishga tushiradi, u har safar ishga tushganda yaratiladigan token bilan himoyalangan. Studio da {{ui:Connect an assistant}} ni tanlang va manzil hamda tokenni yordamchingizga nusxalang (Studio qoʻyish uchun aniq sozlamalarni koʻrsatadi). Tokenni hech qachon ulashmang.

:::note
Brauzer yorligʻi yordamchi uchun ulanish ocha olmaydi: brauzer ilovalarida kalit faqat kompyuteringizdagi CadCraft Studio dan foydalanmaguningizcha taʼsir qilmaydi.
:::

## Siz nazoratda qolasiz

- **Har bir oʻzgarish bitta bekor qilish qadami**, yordamchiniki deb belgilangan (masalan "Assistant: add beam" ni "Yordamchi: balka qoʻshish" deb). {{key:Mod+Z}} yordamchining oxirgi oʻzgarishini butunicha qaytaradi. Yordamchining oʻz `undo` buyrugʻi faqat oʻz qadamlarini bekor qiladi, sizniki emas, agar aniq soʻralmasa.
- **U sizni kutadi.** Siz elementni joylashtirayotganingizda, qismlarni koʻchirayotganingizda yoki qoʻyayotganingizda DetailCraft yordamchining oʻzgarishlarini rad etadi va unga qayta urinishni aytadi.
- **Ulanganini bilasiz.** Ilova satridagi tugma ulangan paytda yordamchi nomini koʻrsatadi; uning nima qila olishini koʻrish yoki uni **Uzish** uchun bosing.
- **Faollik.** {{ui:Settings}} › {{ui:DetailCraft}} › {{ui:Assistants}} › {{ui:Activity}} har bir chaqiruvni roʻyxatlaydi: qachon, qaysi vosita, bajarilgan yoki rad etilgan. {{ui:Save the log}} nusxasini saqlaydi.

## Yordamchi nimani soʻrashi mumkin

Barcha uzunliklar millimetrda, nuqtalar `[x, y, z]` koʻrinishida, z yuqoriga qaragan holda, model dagidek.

| Vosita | Ruxsat | Nima qiladi |
|---|---|---|
| `app_info`, `model_describe` | Oʻqish | Ochiq model: setkalar, sathlar, bosqichlar, tur va profil boʻyicha elementlar, ulanishlar, poydevorlar, zinalar, detallar, poʻlat ogʻirligi, muammolar |
| `parts_list` | Oʻqish | Detal belgilari profil, material, kesish uzunligi, soni, ogʻirlik, bosqich va yigʻma belgilari bilan; tur, profil, belgi yoki bosqich boʻyicha |
| `problems_list` | Oʻqish | {{ui:Problems}} yorligʻida nima roʻyxatlanganini, har biri nima haqida ekanini koʻrsatadi |
| `clash_check` | Oʻqish | [Toʻqnashuv tekshiruvi](topic:clash-check), uning ruxsat etilgan chetlanishi va bosqichlari bilan |
| `selection_get` | Oʻqish | Siz nimani tanlaganingiz |
| `selection_set` | Tahrirlash | Elementlar, ulanishlar, poydevorlar yoki zinalarni (id yoki detal belgisi boʻyicha) sizga koʻrsatish uchun tanlaydi; hech narsani oʻzgartirmaydi |
| `member_add` | Tahrirlash | Ikki nuqta orasidagi balka, ustun, tirgak yoki plastina |
| `connection_add` | Tahrirlash | Berilgan elementlar uchrashgan joyda uch plastinalar, tayanch plastinalar, taglik plastinalar, ulashlar yoki tirgaklar, {{ui:Connect}} tugmalari qiladigani kabi |
| `undo` | Tahrirlash | Yordamchining oxirgi qadamlarini bekor qiladi |
| `model_save` | Saqlash | DetailCraft ning oʻz Saqlashi |
| `model_export` | Eksport | IFC, NC fayllar, BOM, {{ui:Bending}} jadvali, KISS fayli yoki kesish roʻyxati, {{ui:Output}} tugmalari yaratgandek |
| `usd_export` | Eksport | Poʻlat modelni USD (.usda, .usdc yoki .usdz) sifatida, {{ui:Output}} › {{ui:USD}} yozgandek (qarang: [Poʻlat modelni USD sifatida eksport qilish](topic:usd)); Studio da u ruxsat bergan jildga faylni yozishi mumkin |

## Agar biror narsa ishlamasa

- **Yordamchi DetailCraft vositalarini koʻrmaydi:** shu oynada kalit yoqilganini va oynaning Studio da ochiq ekanini tekshiring.
- **"tahrirlash ruxsati kerak"** (yoki saqlash, eksport): uni {{ui:Assistants}} ostida belgilang, soʻng qayta soʻrang.
- **"Odam elementni joylashtirmoqda":** hozir qilayotgan ishni tugating (yoki {{key:Esc}} ni bosing), soʻng yordamchi qayta urinsin.
- **"401" yoki "token" xatolari:** token oʻzgargan (Studio qayta ishga tushgan yoki {{ui:New token}}). Yangi tokenni yordamchining sozlamalariga nusxalang.

## Shuningdek qarang

- [Yordamchilar uchun retseptlar](common:assistants-recipes): har biri chaqiradigan vositalari bilan ishlangan misollar.
