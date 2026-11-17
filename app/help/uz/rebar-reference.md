---
title: Armatura maʼlumotnomasi
summary: DetailCraft ishlatadigan armatura oʻlchamlari, ilgak oʻlchamlari, shakl kodlari, kesish uzunliklari va egish jadvali ustunlari.
keywords: armatura, armatura oʻlchamlari, ilgaklar, egish diametri, shakl kodlari, kesish uzunligi, egish jadvali, armatura roʻyxati, astm a615, aci 318
from: 1583535e
---

## Armatura oʻlchamlari

ASTM A615/A615M 1-jadvaliga binoan (dyuym-funt belgilanishlari). Millimetrlar va kg/m qiymatlari nashr etilgan dyuym va lb/ft qiymatlarining aniq konvertatsiyasidir. Roʻyxatlarda har bir oʻlcham, masalan, "#5 (15.9 mm)" koʻrinishida koʻrsatiladi.

| Armatura | Diametri (mm) | Massa (kg/m) | Yuzasi (mm²) | Ichki egish diametri | 90° ilgak oyogʻi, tashqi-tashqi (mm) |
|---|---|---|---|---|---|
| #3 | 9.5 | 0.560 | 71 | 6 db | 152 |
| #4 | 12.7 | 0.994 | 129 | 6 db | 203 |
| #5 | 15.9 | 1.552 | 200 | 6 db | 254 |
| #6 | 19.1 | 2.235 | 284 | 6 db | 305 |
| #7 | 22.2 | 3.042 | 387 | 6 db | 356 |
| #8 | 25.4 | 3.973 | 510 | 6 db | 406 |
| #9 | 28.7 | 5.060 | 645 | 8 db | 487 |
| #10 | 32.3 | 6.404 | 819 | 8 db | 548 |
| #11 | 35.8 | 7.907 | 1006 | 8 db | 609 |

[DetailCraft sozlamalari](topic:settings) ({{ui:Armatura}}) da **ASTM armatura nomlari** bu armaturalarni yumshoq metrik A615M nomlari bilan koʻrsatishi mumkin: #3 = #10, #4 = #13, #5 = #16, #6 = #19, #7 = #22, #8 = #25, #9 = #29, #10 = #32, #11 = #36 (xuddi shu armaturalar; ACI 315-99 1-jadvalda ikkalasi ham keltirilgan).

### Metrik armatura (BS 4449)

| Armatura | Diametri (mm) | kg/m | Minimal egish radiusi r (mm) | Ilgak oyogʻi = uchki chiqish P (mm) |
|---|---|---|---|---|
| H8 | 8 | 0.395 | 16 | 115 |
| H10 | 10 | 0.617 | 20 | 120 |
| H12 | 12 | 0.888 | 24 | 125 |
| H16 | 16 | 1.578 | 32 | 130 |
| H20 | 20 | 2.466 | 70 | 190 |
| H25 | 25 | 3.853 | 87 | 240 |
| H32 | 32 | 6.313 | 112 | 305 |
| H40 | 40 | 9.865 | 140 | 380 |

Massa nominal kesim koʻpaytirilgan 7850 kg/m³ ga teng. Radius va uchki chiqish BS 8666:2020 ning minimal qiymatlaridir (uning minimal oʻlchamlar jadvali; avvalgi diametr 2r edi). BS armaturali poydevorlarda ilgak oyoqlari P ga teng boʻladi, kesish uzunliklari esa quyidagi BS 8666 formulalari boʻyicha hisoblanadi. Sozlamalarda Yevropa poʻlatini tanlash yangi poydevorlarni C30/37 betonda H16 toʻrlar va H20 boshlangʻich armatura bilan boshlaydi.

## Ilgaklar

ASTM armaturalari: ACI 318-19 jadval 25.3.1 boʻyicha standart 90° ilgaklar: ichki egish diametri #3 dan #8 gacha uchun 6 db, #9 dan #11 gacha uchun 8 db, egilishdan keyin 12 db toʻgʻri uzaytirma bilan. Ilgak oyogʻi, tashqi-tashqi oʻlchanganda, egish diametrining yarmi + db + 12 db ga teng.

Agar toʻr armaturasining ilgagi himoya qatlami ichidagi poydevor chuqurligiga sigʻmasa, DetailCraft oyoqni sigʻishi uchun qisqartiradi va ogohlantirish koʻrsatadi.

## Shakllar

DetailCraft uchta shaklni saqlaydi. Egish jadvali ularni DetailCraft kodlari, ACI 315 turlari yoki BS 8666 shakl kodlari bilan chop etadi: [DetailCraft sozlamalari](topic:settings) ({{ui:Armatura}}) boʻlimida **Egish jadvali shakl kodlari** ni tanlang.

| Kod | Shakl | Oʻlchamlar |
|---|---|---|
| S | Toʻgʻri | A = uzunlik |
| L | Bir 90° egilish | A = asosiy oyoq, B = ilgak oyogʻi, ikkalasi ham tashqi-tashqi |
| U | Bir tomonda ikki 90° egilish | A = oʻrta, B va C = ikki oyoq, tashqi-tashqi |

{{ui:Uchki ilgaklar}} yoqilgan toʻr armaturalari U; yoqilmagan boʻlsa, S. {{ui:Pastdagi ilgak}} yoqilgan boshlangʻich armaturalar L; yoqilmagan boʻlsa, S.

| DetailCraft | BS 8666:2020 | ACI 315-99 (Rasm 10) |
|---|---|---|
| S | 00, L = A | tur raqami yoʻq |
| L | 11, L = A + B − 0.5r − d | tur raqami yoʻq: rasmda bir ilgakli armatura yoʻq |
| U | 21, A va C oyoqlar, B oʻrta: L = A + B + C − r − 2d | 2-tur, ilgaklar A va G, toʻgʻri B |

BS 8666 yoki ACI 315 kodlari bilan jadvalning A, B va C ustunlari oʻsha standartning harflanishiga amal qiladi (U ning oʻrtasi B).

## Kesish uzunligi

BS 4449 armaturasi uchun kesish uzunligi armatura shakl kodining BS 8666 formulasi boʻyicha (yuqorida) hisoblanadi. ASTM armaturasi uchun u armatura oʻq chizigʻining aniq uzunligi: toʻgʻri qismlar va egilishlar egish diametrining yarmi va armatura diametrining yarmi qoʻshilgan yoylar sifatida. U egish ayirmalari jadvalidan hisoblanmaydi, shuning uchun uni shunday jadvaldan foydalanadigan jadvaldan bir necha millimetrga farq qilishi mumkin.

## Joylashuv

- Pastki toʻr: L boʻylab armaturalar pastki qatlamni hosil qiladi, B boʻylab armaturalar ular ustida joylashadi. Har bir toʻplam himoya qatlami ichida poydevor boʻylab teng taqsimlanadi, siz bergan oraliqda yoki undan zichroq, kamida ikkita armatura bilan.
- Boshlangʻich armatura: L va B boʻylab siz bergan oraliqlarda armaturalar toʻri, poydevor markazida, toʻr ustida turadi va yuqoridan siz bergan chiqish bilan chiqib turadi. Har bir ilgak tashqariga qaratilgan.

## Tekshiruvlar

| Tekshiruv | Qoida | Natija |
|---|---|---|
| Armatura uchun joy | Ikki tomondagi himoya qatlami armatura uchun joy qoldiradi | Agar yoʻq boʻlsa, rad etiladi |
| Ikki qatlam uchun chuqurlik | Chuqurlik ikki himoya qatlamini ayirgandan keyin ikkala toʻr qatlamini sigʻdiradi | Agar yoʻq boʻlsa, rad etiladi |
| Boshlangʻich armatura sigʻishi | Boshlangʻich toʻr himoya qatlami ichiga sigʻadi | Agar yoʻq boʻlsa, rad etiladi |
| Toza oraliq | Kamida 25.4 mm va db dan kattasi (ACI 318-19 25.2.1; agregat oʻlchami tekshirilmaydi) | Ogohlantirish |
| Ilgak chuqurligi | Ilgak oyogʻi himoya qatlami ichidagi chuqurlikka sigʻadi | Ogohlantirish, oyoq qisqartiriladi |
| Boshlangʻich ilgaklar | Ilgaklar himoya qatlamidan tashqarida qoladi | Ogohlantirish |

## Egish jadvali ustunlari

{{ui:Egish jadvali}} yorligʻi va uning CSV fayli quyidagi ustunlarga ega: Armatura belgisi, Oʻlcham, Shakl, A (mm), B (mm), C (mm), Soni, Kesish uzunligi (mm), Umumiy uzunlik (m), kg/m, Har birining massasi (kg), Umumiy massa (kg), Qayerda ishlatiladi. Oxirgi qatorda soni, uzunlik va massa jami koʻrsatiladi.
