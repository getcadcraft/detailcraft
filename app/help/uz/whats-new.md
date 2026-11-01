---
title: 0.7 versiyasida yangi nima bor
summary: ASCE 7 yoki EN 1990 boʻyicha yuk kombinatsiyali poʻlat I-shakllarni loyihalash tekshiruvlari va AISC 360 yoki EN 1993-1-1 boʻyicha element tekshiruvlari, poʻlat model uchun USD eksporti, USD uchun yordamchi vosita, katta va kichik tugmali poʻlat lentasi, yigʻiladigan panellar va siljiydigan dialoglar.
keywords: yangi nima, nima yangi, reliz eslatmalari, oʻzgarishlar jurnali, oʻzgarishlar, 0.7, versiya, yangi imkoniyatlar, loyihalash tekshiruvlari, poʻlat loyihalash, foydalanish koeffitsiyenti, yuk kombinatsiyalari, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Yevrokod, Milliy ilova, tom yuki, egilish chegarasi, usd, usda, usdc, usdz, openusd, yordamchi, mcp, poʻlat lentasi, lenta, boʻlinadigan tugma, birliklar, ixcham, panellar, dialoglar, portugal tili
from: 17d1e0bb
---

Bu DetailCraft 0.6 ga nisbatan 0.7 da nima oʻzgarganini koʻrsatadi. 0.6 ning freym tahlili endi ikkinchi bosqichga ega: poʻlat elementlarni loyihalash normasi boʻyicha tekshirish.

## Yangi

### Qiyshiq birikmalar (0.7.1)

- **Burchak ostida tutashadigan ikki I-shakl**, masalan portal tirsagi yoki tizma: ikkalasini tanlang, {{ui:Connect}} guruhining {{ui:More}} menyusidan {{ui:Mitre}} ni tanlang — ikkala uchi burchakni teng ikkiga boʻluvchi tekislik boʻylab kesiladi. Yangi Mitre dialogida uchlik plastinalarni birga boltlash va devor qovurgʻalarini belgilash katakchalari beriladi; raqamlangan maydonlar siz yozayotganingizda birikmangizning chizmasiga mos keladi. Qiyshiq birikma elementlar siljiganda ularga ergashadi va chizmalar, NC fayllar (qiyshiq kesmalar), IFC va materiallar roʻyxatiga oʻtadi. Qarang: [Qiyshiq birikmalar](topic:mitres).

### Loyihalash tekshiruvlari

- **Normadan yuk kombinatsiyalari.** {{ui:Analysis}} yorligʻidagi yangi {{ui:Design checks}} blokida {{ui:Design code}}: ASCE 7 + AISC 360 (AQSh, LRFD) yoki EN 1990 + EN 1993-1-1 (Yevrokod). Har bir yuk holatiga uning turini bering (doimiy, vaqtinchalik, yangi tom vaqtinchalik yuki, qor, shamol, seysmik), {{ui:Make combinations}} ni bosing — DetailCraft holatlaringizning norma boʻyicha mustahkamlik va xizmat koʻrsatish kombinatsiyalarini yozadi. Oʻzingiz kiritgan kombinatsiyalar saqlanib qoladi. Qarang: [Kombinatsiyalarni yaratish](topic:design-checks#make-the-combinations).
- **Milliy ilova qiymatlari.** Yevrokod uchun koeffitsiyentlar tavsiya etilgan qiymatlardan boshlanadi; {{ui:National Annex values}} sizning mamlakatingiz qiymatlarini kiritishga imkon beradi va ular modelda saqlanadi. Qarang: [Kombinatsiyalarni yaratish](topic:design-checks#make-the-combinations).
- **Elementlarni tekshirish.** {{ui:Check members}} har bir poʻlat I-shaklni choʻzilish, siqilish va buklanish bilan, egilish va yon-buralish bilan, kesilish, boʻylama kuch bilan egilish va siz belgilagan {{ui:Deflection limit}} bilan solishtirilgan egilishga tekshiradi. Jadvalda har bir elementning foydalanish darajasi, hukmron tekshiruv va uning kombinatsiyasi koʻrsatiladi; elementlar modelda rangga boʻyaladi (koʻk, yashil, ocher, qizil, tekshirilmagan — kulrang). Qarang: [Elementlarni tekshirish](topic:design-checks#check-the-members).
- **Hisobotda.** {{ui:Report (PDF)}} va {{ui:Report (CSV)}} norma nashrlarini, sozlamalarni, elementlar boʻyicha foydalanish darajasini va ishlatilgan har bir bandni qoʻshadi. Qarang: [Hisobot](topic:design-checks#the-report).
- **Muhandis koʻrib chiqquncha yordam.** U faqat birinchi tartibli kuchlardan foydalanadi. Trubalar, burchaklar, shvellerlar, payvand shakllar va ingichka yoki 4-sinf qismlar sababi bilan « tekshirilmagan » deb koʻrsatiladi; buralish, birikmalar va beton tekshirilmaydi. Qarang: [Nima tekshirilmaydi](topic:design-checks#what-is-not-checked).

### USD

- **Poʻlat modelni USD sifatida eksport qilish.** {{ui:Output}} guruhidagi {{ui:USD}} modelni {{ui:Text (.usda)}}, {{ui:Binary (.usdc)}} yoki {{ui:Package (.usdz)}} sifatida yozadi — renderlash dasturlari va sahnani yigʻish uchun: har bir yigʻma oʻz detallarini oladi, har bir detal oʻz kesimi boʻylab uzunligi davomida kesmalar bilan yoziladi va har biri oʻzining detal belgisi, profili, poʻlat sinfi, uzunligi va ogʻirligiga ega. USD meshlarda bolt teshiklari, boltlar, payvandlar va poydevorlar yoʻq. Qarang: [Poʻlat modelni USD sifatida eksport qilish](topic:usd).

### AI yordamchilari

- **Yordamchilar uchun USD.** CadCraft Studio orqali ulangan oʻz yordamchingiz modelni USD sifatida eksport qilishi (`usd_export`) mumkin, Studioda esa ruxsat bergan papkaga yozishi mumkin. Qarang: [Yordamchi nimani soʻrashi mumkin](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Oʻzgargan

- **Poʻlat lentasi** katta va kichik tugmalarga ega: {{ui:Modeling}} › {{ui:Members}} da katta {{ui:Beam}} va kichik {{ui:Column}}, {{ui:Brace}} va {{ui:Plate}}; {{ui:Detailing}} › {{ui:Connections}} da katta {{ui:End plates}}, {{ui:Splice}} va {{ui:Gusset}} bitta boʻlinadigan tugmada; {{ui:Edit}} › {{ui:Clipboard}} da katta {{ui:Paste}}, guruh ortidagi kichik tugmada {{ui:Paste in place}} va {{ui:Duplicate}}. {{ui:Fabrication}} › {{ui:Exchange}} da IFC yonida {{ui:Export USD}} bor. Boshqa menyu uslublari avvalgidek koʻrinadi. Qarang: [Menyular, tugmalar va sichqoncha](topic:menus-keys-and-mouse#the-three-styles).
- [Freym tahlili](topic:frame-analysis) endi loyihalash tekshiruvlariga ishora qiladi, uning kombinatsiyalarini norma boʻyicha yaratish mumkin.

## Barcha ilovalarda

- **Birliklar.** {{ui:Settings}} › {{ui:General}} › {{ui:Units}} da uzunlik, maydon, hajm, burchak va qiyalik uchun alohida roʻyxat bor, birliklar taʼrifi bergan aniq oʻlchamlar bilan (AQSh surveyor futi oʻz alohida birligi). Ishlatmaydigan birliklarni oʻchirib qoʻysangiz, ular birlik roʻyxatlaridan chiqadi; birini yulduzcha bilan belgilasangiz, yangi ish shu birlikda boshlanadi. Fayl hamisha oʻz birligini saqlaydi. DetailCraftning oʻz maydonlari hali roʻyxatlarga ergashmaydi: uzunliklar hali ham millimetrda kiritiladi. Qarang: [Birliklar, kiritilgan qiymatlar va birlik roʻyxatlari](common:unit-lists).
- **Zichroq tartib va yigʻiladigan panellar.** {{ui:Settings}} › {{ui:General}} › {{ui:Layout density}} › {{ui:Compact}} ekranga koʻproq narsa sigʻdiradi (sensorli ekranlar va telefonlar katta tugmalarini saqlaydi). Har bir yon panelning ingichka sarlavha paneli bor: uni sudrab biriktiring yoki suzdiring, boshqa panel sarlavhasiga tashlab bitta ramkada yorliqlar qilib birlashtiring, chetga surilishi uchun mahkamlang yoki yashirib, chetdan qaytaring. Qarang: [Panellarni joylashtirish](common:arrange-panels#make-the-layout-denser).
- **Dialoglar siljiydi.** Dialogni sarlavha paneli boʻyicha sudrab chizmadan chetga suring; u qoldirgan joyiga qaytadi. Markazga qaytarish uchun sarlavha panelini ikki marta bosing. Qarang: [Dialogni siljitish](common:arrange-panels#move-a-dialog).
- **AI yordamchilari uchun retseptlar.** Oʻz yordamchingiz uchun oʻnta ishlangan soʻrov (chizmani tartibga keltirish, varaqlarni chizish, chizmalarni tekshirish, model haqida savol berish, hajmlarni hisoblash, detal variantini sinash…), har biri ishlatadigan asboblar va kerakli ruxsatlar bilan; har biri bizning testlarimiz tomonidan qayta ijro etiladi. Ilovalarda AI yoʻq. Qarang: [AI yordamchilari uchun retseptlar](common:assistants-recipes).
- **Tillar.** **Português (Portugal)** {{ui:Settings}} › {{ui:General}} › {{ui:Language}} da yangi. U, **Português (Brasil)**, **Español (México)** va **Bahasa Indonesia** endi ilovalarning har bir soʻziga ega — ona tili sohibi tomonidan hali koʻrib chiqilmagan qoralama sifatida. Yordam mavzulari hozircha inglizcha.
- **CadCraft Studio** yangilanishni tekshirish nega xato berganini koʻrsatadi (tizim uchun hali fayl yoʻq, tarmoq yoʻq, notoʻgʻri imzo) — « Tayyor » deb emas — va yopgan « Yangi nima bor » kartochkasini, yangiroq reliz chiqmaguncha, qayta koʻrsatmaydi.

## Hali bu versiyada yoʻq

- **0.7 kod bilan imzolanmagan.** Imzolash va Microsoft Store paketi 0.8 ga koʻchirildi, chunki sertifikat tekshiruvi hali tugamagan. Har bir fayl yonidagi SHA-256 ni getcadcraft.com/download sahifasida tekshiring. Windowsda, agar SmartScreen oʻrnatuvchini toʻxtatsa, {{ui:More info}} ni, soʻng {{ui:Run anyway}} ni tanlang. Macda birinchi marta CadCraft Studio ustiga oʻng tugmani bosing va {{ui:Open}} ni tanlang. CadCraft Studio hali ilova doʻkonida emas va iPad yoki iPhone versiyasi hali yoʻq.
- {{ui:Units}} dagi burchak va qiyalik roʻyxatlari saqlanadi, lekin hali hech bir maydon ularni oʻqimaydi.
- **Loyihalash tekshiruvlari hali muhandis tomonidan koʻrib chiqilmagan.** Bizning testlarimiz ularni chop etilgan jadval qiymatlari va qoʻlda bajarilgan formulalar bilan solishtiradi, hali loyihalash qoʻllanmasining ishlangan misollari bilan emas. Koʻrib chiqilmaguncha ular yordam sifatida: muhim elementlarni qoʻlda tekshiring.
- Loyihalash tekshiruvlari birinchi tartibli kuchlardan foydalanadi (ikkinchi tartib taʼsirlarisiz) va faqat I-shakllarni tekshiradi. Hali qurilmagan: trubalar, burchaklar, shvellerlar, payvand shakllar, egilishda ingichka (AISC) yoki 4-sinf (Yevrokod) qismlar, buralish, birgalikda egilish bilan kesilish, birikmalar, charchash (fatigue), yongʻin, seysmik detallashtirish va beton. Siqilishdagi ingichka qism siqilish tekshiruvlarini chiqarib tashlaydi va element « oʻtdi, qisman tekshirildi » deb koʻrsatiladi.
- Freym tahlili hali ham birinchi tartibli va chiziqli, va hali haqiqiy ishda muhandis tomonidan sinab koʻrilmagan.
- Boltli teshiklar, boltlar, payvandlar va poydevorlar USD eksportida yoʻq.

Qolgan hamma narsa: [Hali qurilmagan narsalar](topic:not-built-yet).
