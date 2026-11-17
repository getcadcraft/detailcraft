---
title: 0.7 versiyasidagi yangiliklar (oldingi)
summary: Poʻlat I-profillarni ASCE 7 yoki EN 1990 yuklama kombinatsiyalari bilan loyihalash tekshiruvlari, elementlarni AISC 360 yoki EN 1993-1-1 boʻyicha tekshirish, poʻlat modelni USD sifatida eksport qilish, USD uchun yordamchi vosita, katta va kichik tugmali Poʻlat lenta, yigʻiladigan panellar va siljiydigan muloqot oynalari.
keywords: yangiliklar 0.7, oldingi reliz, reliz eslatmalari, oʻzgarishlar jurnali, oʻzgarishlar, 0.7, versiya, yangi imkoniyatlar, loyihalash tekshiruvlari, poʻlat loyihalash, foydalanish darajasi, yuklama kombinatsiyalari, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Yevrokod, Milliy ilova, tom vaqtinchalik yuki, egilish chegarasi, usd, usda, usdc, usdz, openusd, yordamchi, mcp, poʻlat lenta, lenta, boʻlinuvchi tugma, birliklar, ixcham, panellar, muloqot oynalari, portugal tili
from: 54a7a8f0
---

Bu DetailCraft 0.7 versiyasida 0.6 versiyasiga nisbatan nimalar oʻzgarganini koʻrsatadi. 0.6 dagi karkas tahlili endi ikkinchi bosqichga ega: poʻlat elementlarni loyihalash normasi boʻyicha tekshirish.

## Yangi

### Qiyshiq birikmalar (0.7.1)

- **Burchak ostida tutashadigan ikkita I-profil**, masalan portal tirsagi yoki tizma: ikkalasini tanlang, **Ulash** guruhining **Yana** menyusidan **Qiyshiq birikma** ni tanlang; ikkala uchi burchakni teng ikkiga boʻluvchi tekislik boʻylab kesiladi. Yangi **Qiyshiq birikma** muloqot oynasida **Uchlik plastinalar** bolt bilan birlashtirilishi va qovurgʻa mustahkamlagichlari belgilash katakchalari sifatida beriladi; raqamlangan maydonlar siz yozayotganda birikmangizning chizmasiga mos keladi. Qiyshiq birikma elementlar siljiganda ularga ergashadi va chizmalarda, NC fayllarda (qiyshiq kesimlar), IFC da va materiallar roʻyxatida aks etadi. Qarang: [Qiyshiq birikmalar](topic:mitres).

### Loyihalash tekshiruvlari

- **Normadan yuklama kombinatsiyalari.** **Tahlil** yorligʻida yangi **Loyihalash tekshiruvlari** bloki bor, unda **Loyihalash normasi**: ASCE 7 + AISC 360 (AQSh, LRFD) yoki EN 1990 + EN 1993-1-1 (Yevrokod). Har bir yuklama holatiga turini bering (doimiy, vaqtinchalik, yangi tomga tushadigan vaqtinchalik yuk, qor, shamol, seysmik), **Kombinatsiyalarni yaratish** tugmasini bosing, va DetailCraft normaning mustahkamlik hamda xizmat koʻrsatish kombinatsiyalarini siz kiritgan holatlar uchun yozadi. Oʻzingiz kiritgan kombinatsiyalar saqlanib qoladi. Qarang: [Kombinatsiyalarni yaratish](topic:design-checks#make-the-combinations).
- **Milliy ilova qiymatlari.** Yevrokod uchun koeffitsientlar tavsiya etilgan qiymatlardan boshlanadi; **Milliy ilova qiymatlari** orqali mamlakatingizning qiymatlarini kiritishingiz mumkin, ular model ichida saqlanadi. Qarang: [Kombinatsiyalarni yaratish](topic:design-checks#make-the-combinations).
- **Elementlarni tekshirish.** **Elementlarni tekshirish** har bir poʻlat I-profilni choʻzilish, buklanish bilan siqilish, yonlama-buralish bilan egilish, kesilish, boʻylama kuch bilan egilish va siz belgilagan **Egilish chegarasi** boʻyicha egilishga tekshiradi. Jadvalda har bir elementning foydalanish darajasi, boshqaruvchi tekshiruv va uning kombinatsiyasi koʻrsatiladi, elementlar modelda rangga boʻyaladi (koʻk, yashil, sariq-jigarrang, qizil, tekshirilmagan uchun kulrang). Qarang: [Elementlarni tekshirish](topic:design-checks#check-the-members).
- **Hisobotda.** **Hisobot (PDF)** va **Hisobot (CSV)** normalar nashrlarini, sozlamalarni, elementlar boʻyicha foydalanish darajasini va ishlatilgan barcha bandlarni qoʻshadi. Qarang: [Hisobot](topic:design-checks#the-report).
- **Muhandis koʻrib chiqquncha yordamchi vosita.** U faqat birinchi tartibli kuchlardan foydalanadi. Trubalar, burchaklar, kanallar, payvandlangan shakllar va ingichka yoki 4-sinf qismlar sababi bilan birga "tekshirilmagan" deb koʻrsatiladi; buralish, birikmalar va beton tekshirilmaydi. Qarang: [Nima tekshirilmaydi](topic:design-checks#what-is-not-checked).

### USD

- **Poʻlat modelni USD sifatida eksport qilish.** **Chiqish** guruhidagi **USD eksporti** modelni **Matn (.usda)**, **Ikkilik (.usdc)** yoki **Paket (.usdz)** koʻrinishida yozadi — render dasturlari va sahna yigʻish uchun: har bir yigʻma oʻz detallarini oʻz ichiga oladi, har bir detal oʻz kesimi boʻylab uzunligi davomida choʻzilgan holda, kesilgan uchlari bilan, va har biri detal belgisi, profili, markasi, uzunligi va ogʻirligiga ega. Bolt teshiklari, boltlar, payvandlar va poydevorlar USD tarmoqlarida yoʻq. Qarang: [Poʻlat modelni USD sifatida eksport qilish](topic:usd).

### AI yordamchilari

- **Yordamchilar uchun USD.** CadCraft Studio orqali ulangan oʻz yordamchingiz modelni USD sifatida eksport qila oladi (`usd_export`), va Studio ichida siz ruxsat bergan jildga yoza oladi. Qarang: [Yordamchi nimani soʻrashi mumkin](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Oʻzgargan

- **Poʻlat lenta** katta va kichik tugmalarga ega: **Modellashtirish** › **Elementlar** boʻlimida katta **Toʻsin** yonida kichik **Ustun**, **Bogʻlama** va **Plastina**; **Detallashtirish** › **Birikmalar** boʻlimida katta **Uchlik plastinalar**, **Ulash** va **Gusset** bitta boʻlinuvchi tugmada; **Tahrirlash** › **Vaqtinchalik xotira** boʻlimida katta **Qoʻyish**, guruhning kichik tugmasi ortida **Joyida qoʻyish** va **Nusxa olish**. **Ishlab chiqarish** › **Almashinuv** boʻlimida IFC yonida **USD eksporti** bor. Boshqa menyu uslublari avvalgidek koʻrinadi. Qarang: [Menyular, tugmalar va sichqoncha](topic:menus-keys-and-mouse#the-three-styles).
- [Karkasni tahlil qilish](topic:frame-analysis) endi loyihalash tekshiruvlariga ishora qiladi va uning kombinatsiyalari norma boʻyicha yaratilishi mumkin.

## Har bir ilovada

- **Birliklar.** **Sozlamalar** › **Umumiy** › **Birliklar** boʻlimida uzunlik, maydon, hajm, burchak va qiyalik uchun alohida roʻyxat bor, birliklarning taʼriflari beradigan aniq oʻlchamlar bilan (AQSh survey foot oʻz alohida birligi). Ishlatmaydigan birliklaringizni oʻchirib qoʻysangiz, ular birlik roʻyxatlaridan chiqib ketadi; birortasini yulduzcha bilan belgilasangiz, yangi ish shu birlikda boshlanadi. Fayl doim oʻz birligini saqlaydi. DetailCraft ning oʻz maydonlari hali roʻyxatlarga ergashmaydi: uning uzunliklari hali ham millimetrda kiritiladi. Qarang: [Birliklar, kiritilgan qiymatlar va birlik roʻyxatlari](common:unit-lists).
- **Zichroq tartib va yigʻiladigan panellar.** **Sozlamalar** › **Umumiy** › **Tartib zichligi** › **Ixcham** ekranga koʻproq sigʻdiradi (sensorli ekranlar va telefonlar katta tugmalarini saqlaydi). Har bir yon panelda ingichka sarlavha paneli bor: uni sudrab panelni biriktiring yoki suzdiring, boshqa panel sarlavhasiga tashlab bir ramkani yorliqlar sifatida ulashing, chetga surilishi uchun mahkamlang, yoki yashirib chetdan qaytaring. Qarang: [Panellarni joylashtirish](common:arrange-panels#make-the-layout-denser).
- **Muloqot oynalari koʻchadi.** Muloqot oynasini sarlavha paneli boʻyicha sudrab, chizmadan chetga suring; u tark etgan joyiga qaytadi. Sarlavha panelini ikki marta bosing — u yana markazga qaytadi. Qarang: [Muloqot oynasini koʻchirish](common:arrange-panels#move-a-dialog).
- **Yordamchilar uchun retseptlar.** Oʻz yordamchingiz uchun oʻnta ishlangan soʻrov (chizmani tartiblash, toʻplamni chop etish, chizmalarni tekshirish, model boʻyicha savol berish, hajmlarni hisoblash, detal variantini sinash…), har biri chaqiradigan vositalar va kerakli ruxsatlar bilan, va har biri bizning testlarimiz tomonidan qayta ijro etiladi. Ilovalarda AI yoʻq. Qarang: [Yordamchilar uchun retseptlar](common:assistants-recipes).
- **Tillar.** **Português (Portugal)** **Sozlamalar** › **Umumiy** › **Til** boʻlimida yangi. U, **Português (Brasil)**, **Español (México)** va **Bahasa Indonesia** endi ilovalarning har bir soʻziga ega, ona tilida tekshirilmagan qoralama sifatida. Yordam mavzulari ingliz tilida.
- **CadCraft Studio** yangilanishni tekshirish muvaffaqiyatsiz boʻlganda sababini aytadi (tizimingiz uchun hali fayl yoʻq, tarmoq yoʻq, notoʻgʻri imzo) va "Tayyor" deb qoʻymaydi; siz yopgan "Yangiliklar" kartasini esa yangiroq reliz chiqmaguncha qayta koʻrsatmaydi.

## Hali bu versiyada emas

- **0.7 kod bilan imzolanmagan.** Imzolash va Microsoft Store paketi 0.8 ga koʻchirildi, chunki sertifikat tekshiruvi hali oʻtmadi. Har bir fayl yonidagi SHA-256 ni getcadcraft.com/download sahifasida tekshiring. Windows da, agar SmartScreen oʻrnatgichni toʻxtatsa, **Batafsil maʼlumot** ni, soʻng **Baribir ishga tushirish** ni tanlang. Mac da birinchi marta CadCraft Studio ustiga oʻng tugmani bosib **Ochish** ni tanlang. CadCraft Studio hali hech bir ilova doʻkonida emas va iPad yoki iPhone versiyasi hali yoʻq.
- **Birliklar** dagi burchak va qiyalik roʻyxatlari saqlanadi, lekin hali hech bir maydon ularni oʻqimaydi.
- **Loyihalash tekshiruvlari hali muhandis tomonidan koʻrib chiqilmagan.** Bizning testlarimiz ularni bosma jadval qiymatlari va qoʻlda hisoblangan formulalar bilan solishtiradi, loyihalash qoʻllanmasining ishlangan misollari bilan hali emas. Koʻrib chiqilmaguncha ular yordamchi vosita: muhim elementlarni qoʻlda tekshiring.
- Loyihalash tekshiruvlari birinchi tartibli kuchlardan foydalanadi (ikkinchi tartibli taʼsirlarsiz) va faqat I-profillarni tekshiradi. Hali qurilmagan: trubalar, burchaklar, kanallar, payvandlangan shakllar, egilishda ingichka (AISC) yoki 4-sinf (Yevrokod) qismlar, buralish, kesilishda buklanish birgalikda egilish bilan, birikmalar, charchash, yongʻin, seysmik detallashtirish va beton. Siqilishdagi ingichka qism siqilish tekshiruvlaridan chiqariladi va element "oʻtdi, qisman tekshirildi" deb koʻrsatiladi.
- Karkas tahlili hali ham birinchi tartibli va chiziqli, va hali haqiqiy ishda muhandis tomonidan sinab koʻrilmagan.
- Bolt teshiklari, boltlar, payvandlar va poydevorlar USD eksportida yoʻq.

Qolgan hammasi: [Hali qurilmagan](topic:not-built-yet).
