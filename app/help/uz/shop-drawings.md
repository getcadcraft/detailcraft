---
title: Ishlab chiqarish chizmalarini yaratish
summary: Har bir detal belgisi uchun bitta varaq, hammasi bir vaqtda yaratiladi: istalganini oldindan koʻring va bitta varaqni yoki butun toʻplamni A4 dan A1 gacha yoki ANSI B dan D gacha PDF qilib yuklab oling, teshiklar, kesiklar, oʻlchamlar va sarlavha blok bilan.
keywords: ishlab chiqarish chizmasi, ishlab chiqarish chizmalari, barcha detallar, toʻplam, butun toʻplam, bitta detal chizmasi, tayyorlash chizmasi, pdf, batafsil chizma, detal chizmasi, chop etish
from: d25fe035
---

DetailCraft modeldagi har bir toʻsin, ustun, tirgak va plastina uchun har bir detal belgisiga bitta varaq yaratadi, hammasi bir vaqtda: ularni bittalab tanlash shart emas. Bir xil detallar bir belgini oladi, shuning uchun bitta varaqni ulashadi. Varaqlar modeldan shu zahoti yaratiladi; ular saqlanmaydi va tahrirlanmaydi.

## Butun toʻplamni yaratish

1. {{ui:Output}} guruhidagi {{ui:Shop drawing}} ni tanlang. Hech narsa tanlanishi shart emas. Detal tanlangan boʻlsa, oyna shu detalning varaqini ochadi. {{ui:Properties}} panelida xuddi shu tugma toʻsin va tirgaklar uchun {{ui:Shop drawing}}, birikmalar uchun esa {{ui:Plate drawing}} deb ataladi.
2. Oldindan koʻrish ochiladi, sarlavhasida detal belgisi bor, masalan "Ishlab chiqarish chizmasi b1". Sarlavha yonidagi birinchi roʻyxatda har bir detal belgisi uning profili, uzunligi va sanasi bilan turadi: uning varagini koʻrish uchun bittasini tanlang. Ikkinchi roʻyxat varaq oʻlchamini oʻzgartiradi; butun toʻplam shu oʻlchamda qayta yaratiladi (qarang: [Umumiy joylashuv va yigʻma chizmalar](topic:drawings#choose-the-sheet-size)).
3. {{ui:Download all}} ni tanlang (tugmada varaqlar soni koʻrsatiladi) — har bir detal belgisi uchun bitta sahifali bitta PDF, `<name> Shop drawings.pdf`. Har bir varaq oʻz sarlavha blokida "Sheet 3 of 42" deydi. Yoki koʻrayotgan varaq uchun {{ui:Download this sheet}} ni tanlang, `<name> <mark>.pdf`.
4. Oldindan koʻrishni × bilan yoki {{key:Esc}} bilan yoping.

Agar {{ui:Shop drawing}} oʻchiq boʻlsa, modelda hali detal yoʻq.

## Varaqda nimalar bor

I-profil uchun:

- **Fasad**, tanachaga qarab: detal kesiklari bilan, tanacha teshiklari doiralar sifatida va flanes teshiklari yashirin (punktir) chiziqlar bilan.
- **Yuqori flanesning plani**, tepadan qaraganda, agar biror flanesda teshik boʻlsa. Pastki flanes teshiklari punktir koʻrinadi.
- **Kesim** profil orqali.
- **Oʻlchamlar:** detal boʻylab zanjirli teshik joylari va umumiy uzunlik, tanacha teshiklarining balandligi, oraliq va kesiklar oʻlchamlari.
- **Teshiklar roʻyxati:** har bir teshik guruhi, masalan "8 x Ø22 yuqori flanesda".
- **Payvand**, agar detalga payvandlangan plastinalar boʻlsa.
- **Sarlavha blok:** detal belgisi, yigʻma belgisi, profil, material, uzunlik, soni, har birining va umumiy ogʻirligi, model nomi va sana.

Shveller, burchak yoki quvur uchun varaq xuddi shunday, tanacha yoki yon tomonga qarab: quvur devorlari yashirin (punktir) chiziqlar bilan, kesim devor qalinligini koʻrsatadi.

Plastina uchun: teshiklari bilan plastina yuzi va uning qirrasi kesim sifatida.

## Masshtablar

Masshtab roʻyxatdan tanlanadi (1:1 dan 1:200 gacha), shunda detal varaqqa sigʻadi. Uzun va past detal bir masshtabda oʻqish uchun juda yupqa boʻlib qoladi, shuning uchun qalinlik qogʻozda 30 mm dan kam chiqsa, qalinlik uzunlikdan kattaroq masshtabda chiziladi. Koʻrinish sarlavhasi buni aytadi, masalan "uzunlik 1:20, qalinlik 1:5 (bir masshtabda emas; oʻlchamlar hukmronlik qiladi)". Oʻlchamlarni har doim oʻlchamlardan oʻqing, varaqni oʻlchab emas.

## Bilib oling

- Miqdor modeldagi shu belgili detallar soni. Oʻzgarishdan keyin belgilar qayta raqamlanishi mumkin; qarang: [Belgilarni tekshirish va materiallar roʻyxati](topic:marks-and-bom).
- Har bir varaq faqat bitta detal, payvand belgilarisiz; yigʻma chizmalar (payvand belgilari bilan) va umumiy joylashuv chizmalari [Chizmalar](topic:drawings) boʻlimida. Varaqni DetailCraftʼda tahrirlab yoki izohlab boʻlmaydi. Belgilash uchun PDFni MarkupCraft kabi PDF belgilash ilovasida oching.
- Sarlavha blokida "DetailCraft lab build — millimeters" yozilgan.
- Matn standart PDF Helvetica shriftidan foydalanadi. Gʻarbiy Yevropa toʻplamidan tashqari belgilar "?" sifatida chop etiladi va holat satri ularni sanaydi.

## Chop etish

Agar koʻrsatilgan masshtablar saqlanishini xohlasangiz, yuklab olingan PDFni PDF koʻruvchida oching va tanlagan qogʻoz oʻlchamida 100% da chop eting ("sahifaga moslash" emas). Kichikroq varaqda masshtabni kamaytiring va oʻlchamlarga tayaning.
