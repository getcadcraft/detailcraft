---
title: Tayanch plastinalari va langar sterjenlarini qoʻshish
summary: Ustun ostiga toʻrtta langar sterjeni bilan payvandlangan tayanch plastinasini qoʻying, oʻlchamlarini belgilang va uni oʻxshash barcha ustunlarga nusxalang.
keywords: tayanch plastinasi, baseplate, langar sterjenlari, langar boltlari, mahkamlovchi boltlar, ustun tagligi, poydevor boltlari, oʻxshash
from: 619ebc64
---

Tayanch plastina birikmasi ustun ostiga plastinani qoʻyadi, ustunni plastina qalinligi qadar qisqartiradi, ikkalasini payvandlaydi va plastinadagi teshiklar orqali toʻrtta langar sterjenini qoʻshadi.

:::warning
Oʻlchamlar boshlangʻich qiymatlar, loyiha emas. DetailCraft tayanch bosimini, sterjen mustahkamligini yoki kiritish chuqurligini tekshirmaydi.
:::

## Tayanch plastina qoʻshish

1. {{ui:Select}} ({{key:V}}) ni tanlang va ustunni bosing. U vertikal boʻlishi kerak.
2. {{ui:Connect}} guruhidagi {{ui:Base plate}} ni yoki {{ui:Properties}} panelidagi {{ui:Add base plate}} ni tanlang.
3. Holat satrida "Tayanch plastina toʻrtta langar sterjeni bilan qoʻshildi." deyiladi. Yangi birikma tanlangan boʻladi.

Bitta ustunda bitta tayanch plastina boʻlishi mumkin. Agar u allaqachon bor boʻlsa, holat satrida "Bu ustunda allaqachon tayanch plastina bor." deyiladi.

## Oʻzgartirish

Tayanch plastinani tanlang (plastinani yoki sterjenni bosing). {{ui:Plate, bolts and weld (mm)}} boʻlimida:

| Parametr | Standart | Vazifasi |
|---|---|---|
| Plastina qalinligi | 25 | Ustun shuncha qisqartiriladi |
| Plastina uzunligi | 450 | Ustun chuqurligi boʻylab |
| Plastina kengligi | 400 | Ustun boʻylab |
| Sterjen diametri | 20 | Langar sterjeni oʻlchami |
| Teshik diametri | 33 | Plastinadagi teshik |
| Bolt sinfi | F1554 Gr 36 | Sterjen sinfi, matn sifatida |
| Sterjenlar qadami (chuqurlik boʻylab) | 350 | Sterjen markazlari orasida, plastina uzunligi boʻylab |
| Sterjenlar qadami (kengligi boʻylab) | 300 | Sterjen markazlari orasida, kengligi boʻylab |
| Sterjen plastina ustidan chiqishi | 100 | Plastina ustidan sterjen uchigacha |
| Sterjen plastina ostida kiritilishi | 450 | Plastina tagidan betonga qadar |
| Burchak payvandi oʻlchami | 8 | Ustun tagligi atrofida hammasi boʻylab |
| Plastina materiali | A36 | Matn |
| Quyma boʻshligʻi | 0 | Beton ustki qismi bilan plastina tagi orasidagi boʻshliq |
| Qovurgʻalar | Yoʻq | Yoʻq, 2 (tanacha bilan bir chiziqda) yoki 4 (unga tik ham) ni tanlang; quyida qarang |
| Qovurgʻa qalinligi, balandligi | 12, 150 | |
| Siljishga qarshi tishcha chuqurligi | 0 | Tishcha plastina ostiga qancha yetishi; 0 = tishcha yoʻq |
| Siljishga qarshi tishcha qalinligi, kengligi | 25, 150 | |
| Plastina shaybalari | Yoʻq | Har bir sterjenda yoki umuman yoʻq |
| Shayba oʻlchami, qalinligi | 0, 0 | 0 = sterjen uchun AISC Design Guide 1 dagi minimal qiymat |

Sterjen uzunligi = kiritish chuqurligi + quyma boʻshligʻi + plastina qalinligi + chiqish. Standart qiymatlarda bu 575 mm.

## Tayanch tafsilotlari: quyma, qovurgʻalar, tishcha, shaybalar

Ularning toʻrttasi ham yangi tayanch plastinada va DetailCraft 0.4 dan oldin yaratilgan modellardagi tayanch plastinalarda oʻchiq turadi.

- **Quyma boʻshligʻi.** Plastina beton ustkisidan shuncha yuqorida turadi va sterjenlar shuncha uzunroq boʻladi. AISC Design Guide 1 (2.10) tayyor pol uchun 1 dyuym, poydevor yoki tirgak uchun 1½ dan 2 dyuymgacha tavsiya qiladi; katta plastinalar va siljishga qarshi tishchali plastinalar uchun undan koʻp.
- **Qovurgʻalar.** Ustunga va plastinaga payvandlangan vertikal plastinalar, ustun yuzidan plastina chetigacha toʻgʻri toʻrtburchak shaklida (hozircha faska yoki qiyalik yoʻq). **2** tanacha bilan bir chiziqda, har bir flanesdan tashqarida turadi; **4** esa flanesler orasida tanachaga tik yana ikkitasini qoʻshadi, plastina yonlariga qadar. Quvur ustunda ular har bir yuzning oʻrtasida turadi. Har biri ustunga va plastinaga ikki tomondan payvandlanadi.
- **Siljishga qarshi tishcha.** Tayanch plastina ostida, ustun chuqurligi boʻylab, markazlashtirilgan holda hamma tomondan payvandlangan plastina. DetailCraft, agar u quyma boʻshligʻidan chuqurroq boʻlmasa, ogohlantiradi. U poydevordagi chuqurchani kesmaydi, shuning uchun [toʻqnashuv tekshiruvi](topic:clash-check) tishchani va poydevorni shu sababli chetlab oʻtadi.
- **Plastina shaybalari.** Har bir sterjenda tayanch plastinaga oʻtirgan kvadrat shayba, ustun yigʻmasida boʻsh sifatida koʻrsatiladi (ustun bilan jGʻilgan, payvandlanmagan: Design Guide 1, 2.6). Oʻlchami va qalinligi 0 boʻlsa, DetailCraft sterjen uchun AISC Design Guide 1, 2-nashr, 2.3-jadvaldan minimal shaybani oladi; metrik sterjen keyingi dyuymli oʻlchamni oladi (M20 sterjen 7/8 dyuymli qatorni oladi: 2½ dyuym × 5/16 dyuym). Xususiyatlar panelida ishlatilgan oʻlcham koʻrsatiladi. Shayba teshigi sterjen diametri + 1/16 dyuym: bu DetailCraftʼning tanlovi, jadvalda bunday qiymat yoʻq. DetailCraft sterjenlar shayba va gayka uchun yetarlicha chiqmasa (chiqish shayba qalinligi + sterjen diametridan kam boʻlsa) ogohlantiradi.

Design Guide 1, 2.3-jadvalda plastinadagi sterjen teshigi uchun ham tavsiya berilgan: ¾ dyuymli sterjen uchun 1-5/16 dyuym, ⅞ uchun 1-9/16 dyuym, 1 dyuym uchun 1-13/16 dyuym. DetailCraft teshik oʻlchamingizni oʻzgartirmaydi.

Sterjen teshiklari plastina chetiga 1,2 × teshik diametridan yaqinroq boʻlsa, sterjenlar ustun konturi ichida boʻlsa yoki plastina ustundan kichik boʻlsa ham ogohlantirishlar chiqadi.

## Oʻxshash ustunlarga nusxalash

1. Tayanch plastinani tanlang.
2. {{ui:Apply to similar (n)}} ni yoki {{ui:Connect}} guruhining {{ui:More}} menyusidagi {{ui:Similar}} ni tanlang.
3. Bir xil profilli, tayanch plastinasi boʻlmagan va boshqa ustunda turmaydigan har bir vertikal ustun nusxa oladi.

## Tayanch plastinalar va poydevorlar

Tayanch plastinaga poydevor shart emas, poydevor ham uning ustidagi tayanch plastina haqida bilmaydi: langar sterjenlari poydevor armaturasiga bogʻlanmaydi. Poydevorlarni {{ui:Footing}} bilan joylashtiring; qarang: [Armatura bilan poydevorlarni joylashtirish](topic:footings-and-rebar).
