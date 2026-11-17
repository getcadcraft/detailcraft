---
title: Taʼminotchi zaxirasi va yetkazib berish muddatlari
summary: Kesish roʻyxati sotib oladigan zaxira tayoqchalarini taʼminotchi zaxira roʻyxati bilan tekshiring: yetarlimi va kutish qancha davom etadi?
keywords: taʼminotchi, zaxira, yetkazib berish muddati, poʻlat ombori, prokat zavodi, mavjudlik, buyurtma kutilmoqda, tayoqchalar, xarid, taʼminot
from: 1373f5a3
---

{{ui:Supply}} yorligʻi {{ui:Cut list}} sotib oladigan har bir kesimni taʼminotchining zaxira roʻyxatidan qidiradi. Fayl modelda qoladi; hech narsa hech qayerga yuborilmaydi.

## Taʼminotchi faylini qoʻshish

{{ui:Add a supplier file}} tugmasini bosing va taʼminotchingizdan CSV faylni tanlang (vergul, nuqtali vergul yoki tabulyatsiya bilan ajratilgan). Unga element yoki kesim uchun ustun kerak (Item, Name, Description, Section, SKU) va zaxira uchun (In stock, Quantity, On hand) yoki yetkazib berish muddati uchun ustun. Oʻlchov birligi (each, metres, kilograms, tonnes), narx, taʼminotchi va qayta toʻldirish sanasi, agar ularga ustun boʻlsa, oʻqiladi. Soʻzlar ham tushuniladi: "Out of stock", "In stock", "2-3 weeks", "backorder". Besh tagacha fayl saqlanishi mumkin; bir xil nomli fayl qoʻshilsa, u almashtiriladi.

## Nimani koʻrasiz

Kesish roʻyxati sotib oladigan har bir kesim uchun jadvalda modelga nima kerakligi, zaxirada nima borligi, yetkazib berish muddati, taʼminotchi va natija koʻrsatiladi:

- **Yetarli:** zaxirada yetarli.
- **Yetishmaydi:** zaxira talabdan kam. Agar zaxira talabdan kam va siz eng uzoq kutish muddatini belgilagan boʻlsa, yetkazib berish muddati qolgan qismga qancha vaqt ketishini koʻrsatadi.
- **Kech:** zaxira raqami yoʻq va yetkazib berish muddati siz qabul qiladigan kutishdan uzun.
- **Zaxira raqami yoʻq:** faylda aytilmagan.
- **Boshqa birlik:** taʼminotchi kesimni model bera olmaydigan birlikda koʻrsatadi.

Modelga kerak boʻlgan narsa tayoqchalarda (ichma-ich kesish roʻyxatidan, zaxira uzunliklaringiz bilan), sotib olingan tayoqcha metrlarida va kilogrammda (kesimning metrdagi ogʻirligi) beriladi, faylning oʻz birligi ishlatiladi. Kesim nomi boʻyicha moslashtiriladi ("W16 X 26" va "w16x26" bir xil). Faylda boʻlmagan kesimlar roʻyxatga olinadi.

Yetishmaydigan va kech kelgan kesimlar {{ui:Problems}} panelida boʻladi. Bu yerda hech narsa buyurtma qilinmaydi.

## Cheklovlar

Zaxira raqamlari va yetkazib berish muddatlari fayl yaratilgan kunga koʻra faylniki. Plastinalar ichma-ich joylashtirilmaydi, shuning uchun ular qidirilmaydi. Fayl faqat oʻqiladi: undagi har qanday koʻrsatma shunchaki matn.
