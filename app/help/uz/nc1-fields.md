---
title: NC fayl maydonlari
summary: DetailCraft har bir DSTV NC faylida nimalarni yozadi, maydonma-maydon, va yuzlar hamda koordinatalar qanday oʻlchanadi.
keywords: nc1, dstv, nc fayl, ST blok, ak, bo, sarlavha, yuzlar, koordinatalar, cnc, format
from: 1b676fc1
---

Har bir `.nc1` fayl bitta qism belgisini tavsiflaydi. Satrlar CR LF bilan tugaydi. Matn maydonlarida oddiy ASCII belgilar boʻladi; boshqa belgilar "?" ga aylanadi. Ikkinchi satr izoh boʻlib, `** DetailCraft <mark>.nc1` koʻrinishida boʻladi.

## Sarlavha (ST)

| Maydon | I-shakl, kanal | Burchak | Toʻrtburchak HSS | Dumaloq HSS | Plastina |
|---|---|---|---|---|---|
| Buyurtma | Model nomi | ← | ← | ← | ← |
| Chizma, qism | Qism belgisi | ← | ← | ← | ← |
| Bosqich | Qismning bosqichi yoki 1 | ← | ← | ← | ← |
| Poʻlat sifati | Poʻlat markasi | ← | ← | ← | ← |
| Miqdor | Shu belgili qismlar soni | ← | ← | ← | ← |
| Profil | Profil nomi, masalan W16x26 | ← | ← | ← | `PL<t>*<width>` |
| Profil kodi | I yoki U (kanal) | L | M | RO | B |
| Uzunlik | Kesish uzunligi | ← | ← | ← | Uzunlik |
| Balandlik | Chuqurlik d | Polka | Balandlik | Diametr | Plastina kengligi |
| Qanot kengligi | bf | Polka | Kenglik | Diametr | 0 |
| Qanot qalinligi | tf | t | Devor t | Devor t | 0 |
| Tanacha qalinligi | tw | t | Devor t | Devor t | Plastina qalinligi |
| Radius | Tutashuv radiusi (AISC kanallari uchun 0) | 0 | Tashqi burchak radiusi | 0 | 0 |
| Metriga massa | kg/m | kg/m | kg/m | kg/m | kg/m² |
| Metriga boʻyalgan yuza | Tashqi perimetr, m²/m | ← | ← | ← | 2 (ikki yuz, m²/m²) |
| Arra burchaklari (4 maydon) | 0 (toʻgʻri) | ← | ← | ← | ← |
| Matn maydonlari (4) | `-` | ← | ← | ← | ← |

Plastinalar standartning "varaqlar uchun" ustuni boʻyicha yoziladi. Standartda dumaloq trubalar uchun ustun yoʻq: DetailCraft diametrni balandlik va qanot kengligi sifatida, devorni esa ikkala qalinlik sifatida yozadi.

## Tashqi konturlar (AK)

- **I-shakllar va kanallar:** tanacha (v), kesim uchun toʻrtburchak oʻyiq bilan; har bir qanot (o va u) kesim qanot chuqurligiga teng yoki undan chuqurroq boʻlgan uchida qisqartirilgan.
- **Toʻrtburchak HSS:** ikkala yon devor (v va h), kesimlar uchun oʻyilgan, hamda yuqori va pastki devorlar (o va u).
- **Burchaklar:** har bir polka uchun bitta toʻrtburchak (v va u). Burchaklardagi kesimlar yozilmaydi: bunday qism yozilmagan deb roʻyxatga olinadi. Boltlangan burchakli bogʻlama [fasonkaga](topic:brace-gussets) ulangan boʻlsa, uning teshiklari boltlangan polkada boʻladi: qismning u boʻylab joylashgan polka uchun v, qismning v boʻylab joylashgan polka uchun u.
- **Dumaloq HSS:** v da bitta toʻrtburchak — truba old tomondan qaralgan holda (uzunlik × diametr).
- **Plastinalar:** v yuzida bitta toʻrtburchak.

Har bir kontur yopiq (birinchi nuqta oxirida takrorlanadi) va soat mili yoʻnalishiga teskari boradi.

## Teshiklar (BO)

Har bir teshik uchun bitta satr: yuz, x, y, diametr, chuqurlik 0 (teshib oʻtuvchi). Barcha teshiklar kiritiladi — siz kiritganlar va ulanishlar yaratganlar. Toʻrtburchak HSS yon devorlari orqali oʻtgan teshik ikki marta yoziladi: bir marta v da, bir marta h da.

## Yuzlar va koordinatalar

Har bir profil standart profil oʻrinlari rasmida koʻrsatilganidek joylashtiriladi (DSTV 1998, 7-bet): x qism boʻylab, Y koʻndalang, Z orqa yuzdan yuqoriga, nol nuqta tashqi burchakda. DetailCraft rasmga moslash uchun qismni hech qachon aks ettirmaydi.

| Yuz | I-shakl | Kanal | Burchak | Toʻrtburchak HSS | Plastina |
|---|---|---|---|---|---|
| v | Tanacha, old tomoni | Tanacha, qanot uchlari tomonidan | Polka qismning u boʻylab | Yon devor −u da | Plastina yuzi |
| h | | | | Yon devor +u da | |
| o | Yuqori qanot | **Pastki** qanot | | Yuqori devor | |
| u | Pastki qanot | **Yuqori** qanot | Polka qismning v boʻylab | Pastki devor | |

- **x** qism boʻylab kesim boshlanishidan hisoblanadi.
- **I-shakllar va toʻrtburchak HSS:** tanachadagi yoki yon devorlardagi y profilning pastki tomonidan; qanotdagi yoki yuqori va pastki devorlardagi y esa orqa tomondagi qirradan (qismning +u tomonidan) oʻlchanadi.
- **Kanallar** orqasi bilan, uchlari yuqoriga qaratilgan holda yotadi, standart rasmdagidek. Shunday qilib tanachadagi y yuqori qanotning tashqi tomonidan pastga qarab boradi, yuqori qanot — u yuzi, pastki qanot — o yuzi, qanotdagi y esa tanachaning orqasidan uchi tomon boradi.
- **Burchaklar:** har bir polkadagi y tirsakdan hisoblanadi.
- **Plastinalar:** y plastinaning −u qirrasidan.

Kesishdan oldin mashina dasturingiz kanal yuzlarini qanday oʻqishini tekshiring: ba'zi dasturlar kanallarni teskari aylantiradi.

## Yozilmaydi

Qiyaliklar, ichki konturlar, belgilar (SI), toʻgʻri boʻlmagan arra burchaklari, uzun teshiklar, dumaloq trubalardagi teshiklar (DetailCraft ularga ega emas) hamda burchaklar va dumaloq trubalardagi kesimlar.
