---
title: Profil katalogi
summary: Har bir oʻrnatilgan poʻlat oʻlchami, profil nomlari qanday yozilishi, oʻlchamlar qayerdan olingani va plastinalar hamda maxsus kesimlar qanday nomlanishi.
keywords: profillar, kesimlar, katalog, oʻlchamlar, W shakllar, keng qanotli, S shakllar, kanal, burchak, hss, truba, quvur, ipe, hea, heb, upn, uk, britaniya, ub, uc, pfc, ea, uea, teng boʻlmagan burchak, shs, rhs, chs, sovuq shakllantirilgan, issiq ishlangan, blue book, plastina, aisc, en 10365, nomlash
from: cd9b2bc3
---

DetailCraft da 2,311 ta oʻrnatilgan oʻlcham bor, har biri nashr etilgan jadvaldan nusxalangan va ilovaning testlari tekshirgan: oʻlchamlardan hisoblangan yuza nashr etilgan yuzaga mos kelishi, nashr etilgan vazn esa shu yuzaning poʻlat zichligiga koʻpaytmasiga teng boʻlishi kerak. Plastinalar va maxsus profillar oʻz oʻlchamlaridan tuziladi.

## Nomlash

- **AQSh shakllari** AISC Manual bosib chiqargan tarzda, kichik x bilan yoziladi: W12x50, C10x15.3, L4x4x1/2, HSS6x6x1/4, HSS6.625x0.280. Yozishda katta-kichik harf farq qilmaydi.
- **Quvur** AISC maʼlumotlar bazasidagidek yoziladi: Pipe4STD, Pipe4XS, Pipe4XXS (standart, qoʻshimcha kuchli, ikki karra qoʻshimcha kuchli).
- **Yevropa shakllari** EN 10365 da yozilgandek: IPE200, HEA240, HEB300, UPN200 (boʻshliqsiz).
- **Britaniya shakllari** avval oila, soʻng Blue Book oʻlchami bilan yoziladi: UB305x165x40, UC203x203x46, PFC200x90x30, EA100x100x10.0, UEA150x90x10.0, SHS100x100x5.0, RHS200x100x8.0, CHS88.9x5.0. Sovuq shakllantirilgan boʻsh kesimlar CF bilan boshlanadi: CFSHS100x100x5.0. Chizmalarda odatda yozilganidek kiritish ham ishlaydi: 305x165x40 UB, L100x100x10, SHS100x5.
- **Plastinalar** millimetrda `PL<thickness>x<width>` shaklida yoziladi: PL20x200 — 20 mm qalin va 200 mm keng. {{ui:Plastina}} asbobidan istalgan oʻlcham ishlaydi.
- **Maxsus profillar** siz bergan istalgan nomga ega boʻladi, agar u katalog nomi boʻlmasa va plastina nomiga oʻxshamasa.

{{ui:Profil}} roʻyxatlarida har bir guruh sarlavhasi manbasini koʻrsatadi, masalan "W shakllar — AISC Shapes Database v16.0".

## Manbalar

| Guruh | Manba | Izohlar |
|---|---|---|
| W shakllar, S shakllar, Kanallar (C), Burchaklar (L), HSS, Quvur | AISC Shapes Database v16.0 | Oʻlchamlar dyuymdan millimetrga aniq aylantirilgan; metriga massa nashr etilgan lb/ft dan |
| IPE, HEA, HEB, UPN | EN 10365:2017 | Nashr etilgandek millimetr va kg/m |
| UB, UC, PFC, EA, UEA, SHS, RHS, CHS, CFSHS, CFRHS, CFCHS | Steel for Life Blue Book (UK), jadval v18 (BS EN 10365, BS EN 10056-1, BS EN 10210-2, BS EN 10219-2) | Nashr etilgandek millimetr va kg/m |
| Plastinalar | Parametrik | Massa: yuza × 7850 kg/m³ |
| Maxsus | Sizning oʻlchamlaringiz | Massa: yuza × 7850 kg/m³ |

Shakllar qanday chiziladi:

- **W shakllar:** AISC maʼlumotlar bazasida tutashuv radiusi berilmagan, shuning uchun DetailCraft tutashuvni r = kdes − tf sifatida chizadi.
- **S shakllar va kanallar (C, UPN):** nashr etilgan oʻrtacha qalinlikdagi parallel qanotlar, toʻgʻri burchaklar (haqiqiy qanot qiya).
- **Burchaklar:** toʻgʻri burchaklar.
- **Toʻrtburchak HSS:** loyiha devor qalinligi (0.93 × nominal, AISC 360-22 B4.2 ruxsat berganidek), tashqi burchak radiusi esa uning ikki barobari.
- **Dumaloq HSS va Quvur:** loyiha devor qalinligi (0.93 × nominal).
- **IPE, HEA, HEB, UB, UC:** nashr etilgan ildiz radiusi.
- **PFC, EA, UEA:** toʻgʻri burchaklar (nashr etilgan massa va yuza hali ham radiuslarni oʻz ichiga oladi).
- **SHS, RHS, CHS:** nominal devor. Issiq ishlangan burchaklar: tashqi 1.5 t, ichki t. Sovuq shakllantirilgan: tashqi 2 t, ichki t — 6 mm gacha; 2.5 t va 1.5 t — 10 mm gacha; 3 t va 2 t — undan yuqori.

## Oʻlchamlar

Ushbu guruhlarda jadvallar roʻyxatga olgan har bir oʻlcham, eng kichigidan boshlab:

| Guruh | Oʻlchamlar |
|---|---|
| W shakllar (289) | W4x13 dan W44x408 gacha |
| S shakllar (28) | S3x5.7 dan S24x121 gacha |
| Kanallar (32) | C3x3.5 dan C15x50 gacha |
| Burchaklar, teng qirrali (61) | L2x2x1/8 dan L12x12x1-3/8 gacha |
| HSS, toʻrtburchak va kvadrat (525) | HSS1-1/2x1-1/2x1/8 dan HSS34x10x1 gacha |
| HSS, dumaloq (189) | HSS1.660x0.140 dan HSS28.000x1.000 gacha |
| Quvur (51) | Pipe1/2STD dan Pipe26XS gacha |
| IPE (18) | IPE80 dan IPE600 gacha |
| HEA (24) | HEA100 dan HEA1000 gacha |
| HEB (24) | HEB100 dan HEB1000 gacha |
| UPN (18) | UPN50 dan UPN400 gacha |
| Burchaklar, teng boʻlmagan polkali (76) | L2-1/2x1-1/2x3/16 dan L8x6x1 gacha |
| UB (107) | UB127x76x13 dan UB1016x305x584 gacha |
| UC (46) | UC152x152x23 dan UC356x406x1299 gacha |
| PFC (16) | PFC100x50x10 dan PFC430x100x64 gacha |
| EA (42) | EA20x20x3.0 dan EA200x200x24.0 gacha |
| UEA (39) | UEA30x20x3.0 dan UEA200x150x18.0 gacha |
| SHS, issiq ishlangan (123) | SHS40x40x3.2 dan SHS400x400x17.5 gacha |
| RHS, issiq ishlangan (161) | RHS50x30x3.2 dan RHS500x300x17.5 gacha |
| CHS, issiq ishlangan (103) | CHS42.4x3.2 dan CHS508.0x17.5 gacha |
| CFSHS, sovuq shakllantirilgan (96) | CFSHS25x25x2.0 dan CFSHS400x400x12.5 gacha |
| CFRHS, sovuq shakllantirilgan (137) | CFRHS50x25x2.0 dan CFRHS500x300x12.5 gacha |
| CFCHS, sovuq shakllantirilgan (106) | CFCHS33.7x3.0 dan CFCHS508.0x16.0 gacha |

Aks ettirilgan teng boʻlmagan burchak — bu sexda qarama-qarshi variant yasaladigani kabi uchini almashtirilgan oʻsha qism: uning teshiklari, kesimlari va fasonkasi ham u bilan birga boradi.

Joylashtirish asbobini tanlang va oʻlchamni tanlang: uning chuqurligi, qanot kengligi, tanacha va qanot qalinligi, tutashuv radiusi, yuzasi (cm²), massasi (kg/m) va manbasi {{ui:Xususiyatlar}} panelidagi {{ui:Profil}} qutisida koʻrinadi.

## Shakllar nimani qila oladi

| Shakl | Teshiklar | Kesimlar | Uchki va tayanch plastinalar | NC fayl | Ishchi chizma |
|---|---|---|---|---|---|
| I-shakllar (W, S, IPE, HEA, HEB, UB, UC, maxsus I) | Tanacha, yuqori qanot, pastki qanot | Ha | Uchki plastinalar: toʻsin va ustun. Tayanch plastinalar: ha | Ha | Ha |
| Kanallar (C, UPN, PFC) | Tanacha, yuqori qanot, pastki qanot | Yoʻq | Faqat tayanch plastinalar | Ha | Ha |
| Toʻrtburchak HSS, SHS, RHS | Yon devor (tanacha), yuqori, pastki | Yoʻq | Faqat tayanch plastinalar | Ha | Ha |
| Dumaloq HSS, Quvur, CHS | Hali yoʻq | Yoʻq | Faqat tayanch plastinalar | Ha | Ha |
| Burchaklar (L, EA, UEA) | Hali yoʻq | Yoʻq | Faqat tayanch plastinalar | Ha | Ha |
| Plastinalar va maxsus yassi polosalar | Plastina yuzi | Yoʻq | Yoʻq | Ha | Ha |

Toʻrtburchak truba uchun "tanacha" yuzidagi teshik ikkala yon devor orqali oʻtadi. Har bir NC faylda nima borligi: [NC fayl maydonlari](topic:nc1-fields).

## Yana oʻlcham kerakmi?

Uni [maxsus profil](topic:plates-and-profiles#add-a-custom-profile) sifatida qoʻshing. Oʻrnatilgan roʻyxatni ilovadan hali tahrirlab boʻlmaydi.
