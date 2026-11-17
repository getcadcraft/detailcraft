---
title: Muammolarni bartaraf etish
summary: DetailCraft xabarlari nimani anglatishi va nima qilish kerakligi: yoʻqolgan 3D koʻrinishdan tortib qurilmaydigan ulanishlargacha.
keywords: muammo, xato, ishlamayapti, yordam, tuzatish, xabar, rad etilgan, webgl, boʻsh, ogohlantirish, boʻlmayapti, masala
from: f8c3b2b1
---

Koʻpgina rad etishlar ekranning pastki qismidagi holat satrida yoki {{ui:Problems}} yorligʻida tushuntiriladi. Avval ularni oʻqing. Quyidagi xabarlar DetailCraft koʻrsatganidek keltirilgan.

## 3D koʻrinish yoʻq

**"Bu brauzer 3D grafikani (WebGL) ishga tushira olmadi. Model, hisobotlar va eksport hanuz ishlaydi."**

Brauzer WebGL ni ishga tushira olmadi — DetailCraft 3D grafikani shu orqali chizadi.

1. Brauzerni eng soʻnggi versiyasiga yangilang.
2. Apparat tezlashtirishni yoqing va brauzerni qayta ishga tushiring (quyida).
3. Grafik drayveringizni yangilang yoki boshqa brauzerni sinab koʻring. Masofaviy ish stollari va virtual mashinalarda koʻpincha WebGL boʻlmaydi.
4. Shu orada ishlashingiz mumkin: elementlarni {{ui:Add by grid}} shakli bilan joylashtiring, hisobotlarni oʻqing va eksport qiling. Faqat koʻrinishda bosish WebGL ni talab qiladi.

:::chromium
Apparat tezlashtirishni yoqish uchun **Sozlamalar, Tizim** ni oching va **Mavjud boʻlganda grafik tezlashtirishdan foydalanish** ni yoqing, soʻng qayta ishga tushiring.
:::

:::firefox
Apparat tezlashtirishni yoqish uchun **Sozlamalar, Umumiy, Unumdorlik** ni oching, **Tavsiya etilgan unumdorlik sozlamalaridan foydalanish** ni belgisini olib tashlang va **Mavjud boʻlganda apparat tezlashtirishdan foydalanish** ni belgilang. Firefoxni qayta ishga tushiring.
:::

:::safari
Safari brauzerida WebGL odatiy holda yoqilgan. Koʻrinish hali ham ishga tushmasa, macOS ni yangilang va hech bir kengaytma uni bloklamayotganini tekshiring.
:::

Batafsil: [Brauzerlar va kompyuterlar](common:browsers).

## Koʻrinishni bosganda hech narsa boʻlmaydi

- **Bosish yaqinida kesishma yoʻq.** Joylashtirish vositalari faqat setka kesishmalariga tortiladi. Har bir nuqtadan uzoqda bosilsa, hech narsa boʻlmaydi. Nuqta yorugʻlanguncha yaqinroq boring.
- **Vosita {{ui:Select}} va siz boʻsh joyni bosdingiz.** Bu tanlovni tozalaydi.
- **Siz sudrab yubordingiz.** Bosish va qoʻyib yuborish bir necha pikseldan koʻproq uzoqlikda boʻlsa, bu sudrash hisoblanadi: u koʻrinishni aylantiradi yoki suradi.
- **Element kesib tashlangan.** {{ui:Plan}} va {{ui:Elevation}} da kesmadan tashqaridagi poʻlat yashirilgan va bosib boʻlmaydi. {{ui:3D}} ga oʻting.
- **Kesishma notoʻgʻri sathda.** {{ui:3D}} da bir nechta sathdagi kesishmalar ekranda ustma-ust tushishi mumkin; bosish eng yaqinini tanlaydi. {{ui:Plan}} yoki {{ui:Elevation}} dan foydalaning.

## Joylashtirish xabarlari

| Xabar | Nima qilish kerak |
|---|---|
| Ustun yetib borishi uchun 2-sathdan yuqorida sath yoʻq. Avval sath qoʻshing. | {{ui:Levels}} ga sath qoʻshing yoki pastroq sathni bosing |
| Boshqa uchi uchun boshqa kesishma tanlang. | Siz bir nuqtani ikki marta bosdingiz |
| Ikki uchi bir nuqta. | {{ui:Add by grid}} da "Boshlanish" va "Tugash" tanlovlari bir xil |
| Elementlarni joylashtirish uchun chapda setka chiziqlari qoʻshing. | Modelda bir yoʻnalishda setka chiziqlari yoʻq |
| Nomaʼlum profil "…" | Profil katalogda yoki modelning maxsus profillarida yoʻq. Roʻyxatdan birini tanlang |
| Raqam kiriting. | Raqam maydoni boʻsh qoldirilgan yoki unda matn bor |

## Ulanishlar qurilmaydi

### "Bu balka ustun chizigʻida tugamaydi."

Uch plastinalar balkaning uchi aniq vertikal ustun chizigʻida, pastki va yuqori orasida boʻlishini talab qiladi (1 mm ichida). Balkaning {{ui:Ends (x, y, z mm)}} va ustun joylashuvini tekshiring.

### "Bu balka ustun tanachasiga yoki burchak ostida uchraydi"

Yoki {{ui:Problems}} da: "Ustun tanachasiga kiradigan balkalar hali qurilmagan: ustunni 90° ga buring yoki boshqa ulanishdan foydalaning."

Balka ustun tanachasiga kiradi. Ustunni tanlang va {{ui:Rotation (°)}} ni 90 ga oʻrnating, soʻng qayta urinib koʻring. Qiyshiq birikmalar qurilmaydi.

### "Uch plastinalari faqat sath balkalar uchun qurilgan (bu balka qiya)."

Balkaning ikkala uchi bir xil balandlikda boʻlishi kerak.

### "Uch plastinalari balka tik turishini talab qiladi (aylanish 0)."

Balkaning {{ui:Rotation (°)}} ni yana 0 ga qaytaring.

### "Uch plastinalari I-shakl balkani talab qiladi." / "Uch plastinalari I-shakl ustunni talab qiladi."

Faqat I-shakllar (W, IPE, HEA, HEB yoki maxsus I) uch plastinalarini qabul qiladi.

### "Balka uchi endi ustun chizigʻida emas."

Ulanishni qoʻshgandan keyin balkani yoki ustunni siljitgansiz. Uni qaytaring yoki ulanishni oʻchiring.

### "Ulanishlar bu elementni hech narsaga qisqartirdi."

Ikki uchdagi ulanishlar elementni uning uzunligidan koʻproq qisqartiradi, masalan ikki chuqur ustun orasidagi juda qisqa balka. Elementning uchlarini va plastina qalinligini tekshiring.

### "Bunga oʻxshash … boshqa birikmalar ulanishsiz emas."

{{ui:Similar}} faqat bir xil balka profili, ustun profili va ulanish turi (flanetsga kiradigan balka) boʻlgan, hali ulanishi boʻlmagan birikmalarga nusxalaydi.

### "Ikkala uchda ham ulanishlar bor." / "Bu ustunda allaqachon taglik plastinasi bor."

Mavjud ulanishni tanlab oʻzgartiring yoki avval uni oʻchiring.

## Muammolar yorligʻidagi ogohlantirishlar

Ogohlantirishlar ulanish yoki poydevorning qurilishini toʻxtatmaydi; ular sizdan tekshirishni soʻraydi. Chekka va qadam ogohlantirishlari EN 1993-1-8 Table 3.3 minimumlaridan foydalanadi (chekka 1.2 × teshik, qadam 2.2 × teshik, oraliq 2.4 × teshik). Loyihangiz boshqa qoidalardan foydalansa, ogohlantirish tegishli boʻlmasligi mumkin; DetailCraft ulanishlarni loyihalamaydi.

"a hole is off the end of the part" (teshik detal uchidan tashqarida) degani teshikning x qiymati 0 dan kichik yoki kesish uzunligidan katta. Esda tuting, x ulanishlar elementni qisqartirgandan keyin kesish boshidan hisoblanadi.

## Poydevor oʻzgarishlari rad etiladi

| Xabar | Nima qilish kerak |
|---|---|
| Himoya qatlami bu poydevorda armatura uchun joy qoldirmaydi. | Poydevorni kattaroq yoki himoya qatlamini kichikroq qiling |
| Poydevor himoya qatlami ichida ikki qator armatura uchun juda sayoz. | Uni chuqurroq qiling yoki himoya qatlamini kamaytiring |
| Starter armaturalar 75 mm himoya qatlami bilan poydevor ichiga sigʻmaydi. | Starterlar kamroq, oraliq zichroq yoki poydevor kattaroq boʻlsin |
| Armatura oraligʻi 50–1000 mm boʻlishi kerak. | Shu oraliqdagi qiymatni kiriting |
| Uzunlik 300–50000 mm boʻlishi kerak. | Poydevor oʻlchamlari chegaralangan: uzunlik va kenglik 300 dan 50000 gacha, chuqurlik 150 dan 10000 gacha |

## Setkalar va sathlar rad etiladi

| Xabar | Nima qilish kerak |
|---|---|
| Raqamli setkalar: har bir juft chiziq orasiga bitta oraliq bering (4). | Oraliqlarni sanang: besh chiziqqa toʻrtta oraliq kerak |
| Harfli setkalar: oraliqlar musbat millimetrlarda boʻlishi kerak. | Nol, manfiy son yoki matn yoʻq |
| Raqamli setkalar: setka belgilari har xil boʻlishi kerak. | Ikki chiziq bir xil belgiga ega |
| Har bir yoʻnalishda eng koʻpi bilan 60 ta setka chizigʻi. | Modelni boʻling |
| Kamida bitta sath saqlansin. | Siz sathlar qatorining hammasini oʻchirdingiz |
| Har bir sathning nomi boʻlishi kerak. / Ikki sath "…" deb atalgan. | Har bir sathga boshqa nom bering |

## Faylni ochish muvaffaqiyatsiz tugaydi

| Xabar | Sababi |
|---|---|
| DetailCraft faqat oʻzining modellarini (.detailcraft.json) ochadi. IFC import hali qilinmagan. | Fayl `.json` fayl emas |
| Bu DetailCraft modeli emas (JSON emas). | Fayl buzilgan yoki boshqa JSON |
| Bu DetailCraft modeli emas. | Boshqa dasturning JSON fayli |
| Bu modelni yangiroq DetailCraft (format 2) saqlagan. | Uni saqlagan yangiroq DetailCraft da oching |
| Bu fayl DetailCraft modeli uchun juda katta. | 50 MB dan katta |

Fayl "2 ta element yaroqsiz deb topilib chetlatildi." kabi ogohlantirishlar bilan ochilganda, modelning qolgan qismi yaxshi. Chetlatilganlarni tekshirmaguningizcha asl faylning ustiga saqlamang.

## Eksport

| Xabar | Sababi |
|---|---|
| Hali eksport qilinadigan narsa yoʻq. | Boʻsh model bilan {{ui:IFC}} |
| NC fayllar yozish uchun I-shakl yoki plastina detallari yoʻq. | Modelda faqat shveller, burchak yoki quvurlar bor |
| Yozilmadi (hozircha faqat I-shakl va plastinalar): … | Bu belgilar I-shakl yoki plastina emas; qolganlari yozildi |
| Poydevor yoʻq, shuning uchun rejalashtiriladigan armatura yoʻq. | {{ui:Bending}} poydevorsiz |
| PDF shriftidan tashqaridagi … belgi "?" sifatida chop etildi. | Model nomi yoki sinfida PDF shriftida yoʻq belgilar bor |

{{ui:Ishlab chiqarish chizmasi}} kulrang tusda oʻchirilgan: modelda hali detallar yoʻq.

## Yuklab olishlar paydo boʻlmaydi

Har bir saqlash va eksport brauzer yuklab olishidir. Brauzeringizning yuklab olishlar roʻyxatini tekshiring. Agar brauzer bir necha faylni yuklashdan oldin soʻrasa yoki bu saytdan yuklab olishni bloklasa, ruxsat bering. Safari brauzerida asboblar panelidagi yuklab olish tugmasini tekshiring.

## Klavishlar ishlamaydi

- Kursor matn yoki raqam maydonida: u yerda vosita tugmalari va {{key:Delete}} eʼtiborga olinmaydi, shunda yozishingiz mumkin. {{key:Tab}} ni bosing yoki koʻrinishni bosing.
- Dialog oynasi ochiq: avval uni yoping.
- Klaviatura brauzerda (masalan, manzil satri): DetailCraft ichini bosing.
- {{key:Ctrl+Shift+F}} Mac da ham Control dan foydalanadi.

## Oflayn muammolari

{{ui:Save for offline}} tugmasi ilova satrida oflayn nusxa qanday holatda ekanini koʻrsatadi. Saqlash qanday ishlashi: [Oflaynda ishlash](common:offline).

| Tugma quyidagini koʻrsatadi | Bu nimani anglatadi | Nima qilish kerak |
|---|---|---|
| {{ui:Save for offline}} | Bu brauzerda hali oflayn nusxa yoʻq | Onlaynda boʻlganda tanlang |
| Saving 5 of 20 | Saqlash davom etmoqda | {{ui:Offline ready}} koʻrsatilishini kuting; yorliqni ochiq saqlang |
| {{ui:Offline ready}} | DetailCraft, uning 3D koʻrinishi, har bir eksport va bu yordam ulanishsiz ishlaydi | Hech narsa. Uni bossangiz {{ui:Save again (get the newest version)}} yoki {{ui:Remove the offline copy}} chiqadi |
| {{ui:Could not save}} | Ayrim fayllar yuklanmadi | Ulanishni tekshiring va qayta urinish uchun bosing |
| {{ui:Offline not available}} | Bu oyna oflayn nusxa saqlay olmaydi: shaxsiy oynalar va ayrim boshqariladigan kompyuterlar bunga ruxsat bermaydi | Oddiy oynadan foydalaning yoki onlayn ishlang |

Oflaynda boʻlsangiz va tugmada {{ui:Offline ready}} yozilmagan boʻlsa, sahifani qayta yuklamang va yorliqni yopmang: yuklangan narsa ishlashda davom etadi. Modelingizni {{key:Mod+S}} bilan saqlang va yana onlayn boʻlguncha kuting.

## Saqlanmagan ishlar

Brauzer sahifadan chiqishni soʻrasa, DetailCraft da saqlanmagan oʻzgarishlar bor. Qolishni tanlang, soʻng {{key:Mod+S}} ni bosing. Yorliq yopilgandan keyin DetailCraft modelni tiklay olmaydi.

## Hali ham hal boʻlmadi

Nima qilganingizni va aniq xabarni yozib qoʻying hamda [qoʻllab-quvvatlash sahifasi](https://getcadcraft.com/support) orqali bizga xabar bering.
