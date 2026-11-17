---
title: Toʻrtburchak beton ustunni armirlash
summary: Toʻrtburchak beton ustunni DetailCraft da detallashtirishning ishlangan misoli: uni joylashtirish, boʻylama sterjenlar va bogʻlovchilar berish, tekshiruvlarni, undagi ulanmani va armatura belgilarini oʻqish hamda uning ishlab chiqarish varagini chizish.
keywords: beton ustun, toʻrtburchak ustun, ustun armaturasi, boʻylama sterjenlar, vertikal sterjenlar, bogʻlovchilar, xomutlar, koʻndalang bogʻlovchilar, ulanma, ulanma birikmasi, startyor sterjenlar, ustun poʻlat nisbati, 1 foiz, 8 foiz, bogʻlovchi qadami, ACI 318-19 25.7.2, EN 1992-1-1 9.5, ishlab chiqarish chizmasi, armatura belgilari, 8C1, 3C2
from: aee2a3ca
---

Bu mavzu bitta kvadrat ustunni hech nimadan tekshirilgan, chizilgan va jadvallashtirilgan detalgacha olib boradi. Toʻsinlar, plitalar va devorlar uchun umumiy qoidalar [Armirlangan betonni detallashtirish](topic:reinforced-concrete) da; bu ustun tomoni, siz takrorlashingiz mumkin boʻlgan raqamlar bilan.

:::warning
DetailCraft siz bergan sterjenlarni detallashtiradi. U ularni loyihalamaydi. Quyidagi sterjenlar misol uchun boshlangʻich qiymatlar, tavsiya emas: loyihani tasdiqlovchi muhandis oʻlchamni, sonini va qadamini tanlaydi.
:::

## Bu yerda ustun nima

Toʻrtburchak ustunning kengligi (mahalliy x boʻylab) va koʻndalang chuqurligi (mahalliy y boʻylab), bogʻlovchilargacha toza himoya qatlami, har bir yuzda boʻylama sterjenlar va yopiq bogʻlovchilar bor. Uni aylantirish hammasini buradi; yuzlar "kenglik yuzi" va "chuqurlik yuzi" boʻlib qoladi.

- Boʻylama sterjenlar kenglik yuzidagi soni va chuqurlik yuzidagi soni bilan beriladi. Burchak sterjenlari ikkalasiga ham hisoblanadi, shuning uchun 3 va 3 8 ta sterjen beradi; 4 va 4 12 ta beradi.
- Bogʻlovchilar bir burchakda ikki ilgakli yopiq toʻrtburchaklar, 135° yoki 90°. Birinchi bogʻlovchi qavatdan belgilangan masofada yuqorida (va keyingisidan pastda), uchki zonalarda qadam zich, oʻrtada esa kengroq.
- Sterjenlar yuqorida nima qiladi: yuqoridagi sterjenlar bilan davom etib ulanadi, 90° ilgaklar bilan qavatga burilib kiradi yoki yuqori ostida toʻxtaydi.

## Ishlangan ustun

400 × 400 mm ustun, yuqori va pastki qavat orasida 3600 mm, #8 boʻylama sterjenlar, #3 bogʻlovchilar, 40 mm toza himoya qatlami, f'c 28 MPa, fy 420 MPa, ACI 318-19, ichki.

1. {{ui:Beton}} yorligʻini oching va ustun turgan setka chiziqlari va sathlarini sozlang (chap panel).
2. {{ui:Toʻr boʻyicha qoʻshish}} ichida {{ui:Beton ustun}} ni tanlang, setka kesishmasi va ikki sathni belgilang, {{ui:Kenglik (mm)}} va {{ui:Kesim chuqurligi (mm)}} ni 400 ga qoʻying va {{ui:Qoʻshish}} ni tanlang.
3. {{ui:Xususiyatlar}} panelida sozlang:
   - {{ui:Toza himoya qatlami (mm)}} 40;
   - {{ui:Boʻylama armatura}} #8, {{ui:Kenglik yuzidagi armatura}} 3, {{ui:Chuqurlik yuzidagi armatura}} 3;
   - {{ui:Bogʻlovchilar}} #3, {{ui:Ilgaklar}} 135°, {{ui:Oraliq qadam (mm)}} 300, {{ui:Uchki zona uzunligi (mm)}} 600, {{ui:Uchki zonalardagi qadam (mm)}} 150, {{ui:Yuzdan birinchisigacha (mm)}} 50;
   - {{ui:Yuqoridagi armatura}}: {{ui:Yuqoridagi armatura bilan davom ettirib ulash}}.

Har bir oʻzgarish bitta bekor qilish qadami.

### Natija

| Qism | Natija |
|---|---|
| Boʻylama sterjenlar | 8 ta #8 sterjen (3 × 3 halqa), har biri 4375 mm uzunlikda: 3600 mm ustun va uning ustidagi 775 mm ulanma |
| Ulanma | Siquvchi ulanma uchun 757 mm kerak (ACI 318-19 25.5.5.1, fy 420), 775 mm berilgan: ehtiyoj keyingi 25 mm gacha yaxlitlangan |
| Bogʻlovchilar | 17 ta #3 bogʻlovchi, har birining kesish uzunligi taxminan 1359 mm, ikki 600 mm uchki zonada 150 mm, oraliqda 300 mm qadam bilan |
| Poʻlat nisbati | Toʻliq kesimning 2.5 % (chegaralari 1 % dan 8 % gacha, ACI 318-19 10.6.1.1) |
| Sterjenlarning toza oraligʻi | 112 mm (kamida 40 mm kerak, ACI 318-19 25.2.3) |
| Bogʻlovchi qadami | 300 mm (400 mm ruxsat etilgan: 16 ta sterjen diametri, 48 ta bogʻlovchi diametri va kichik tomonning eng kichigi, ACI 318-19 25.7.2.1) |
| Bogʻlovchi oʻlchami | #3 (9.5 mm gacha ruxsat etilgan, ACI 318-19 25.7.2.2) |

Bularning hammasi elementning {{ui:Tekshiruvlar}} roʻyxatida; ulanma {{ui:Ulanmalar va langarlash}} da ham bor.

## Koʻndalang bogʻlovchilar

Bitta perimetr bogʻlovchisi bilan faqat burchak sterjenlari ushlanadi. ACI 318-19 25.7.2.3 yuzdagi oʻrta sterjenni, agar u burchak sterjenidan 150 mm toza masofada boʻlsa, ushlab turmasdan qoldirishga ruxsat beradi. Yuqoridagidek yuzida 3 ta sterjen boʻlsa, bu bajariladi. Yuzida 4 yoki undan koʻp boʻlsa, bu bajarilmaydi va DetailCraft buni ogohlantirish sifatida aytadi ({{ui:Tekshiruvlar}} va {{ui:Muammolar}}): "koʻndalang bogʻlovchilar" kerak. **Koʻndalang bogʻlovchilar hali chizilmaydi**: ularni chizmaga qoʻl bilan qoʻshing yoki yuzda kamroq sterjen tanlang.

EN 1992-1-1 uchun DetailCraft sterjen oʻlchamini (kamida 8 mm), sterjenlar sonini (kamida 4), poʻlat maydonini (kesimning 0.2 % dan 4 % gacha), toza oraliqni va bogʻlovchi qadamini (9.5.2 va 9.5.3) tekshiradi.

## Ulanma, poydevor va pastdagi ustun

- **Model poydevori ustun ostida turganda**, ustun poydevorning startyor sterjenlari bilan ulanadi va ularning ulanmasi ham tekshiriladi.
- **Modelning boshqa ustuni uning ostida turganda**, u oʻsha ustunning sterjenlari bilan ulanadi.
- Oʻzingizning {{ui:Ulanma uzunligi (mm, 0 = zarurga koʻra)}} ni bering; kerakdan qisqasi muammo hisoblanadi va jadvalda * bilan belgilanadi.
- Standart boʻyicha siquvchi ulanmalar ishlatiladi ({{ui:Siquvchi ulanma}} sozlamalarda); ustun choʻzilishda boʻlishi mumkin boʻlganda {{ui:Choʻzuvchi ulanma}} ni tanlang.

## Belgilar, jadval va ishlab chiqarish varagi

Bir xil sterjenlar bitta belgiga ega: yuqoridagi ustunning boʻylama sterjenlari 8C1, uning bogʻlovchilari 17C2 (avval raqam, keyin tur harfi C — ustun uchun — va tartib raqami). Ular {{ui:Egish jadvali}} yorligʻida, kesish uzunligi va vazni bilan, hamda {{ui:Chiqish}} › {{ui:Yana}} › {{ui:Egish}} dan CSV da chiqadi.

Ustun yonidagi {{ui:Ishlab chiqarish chizmasi}} ni tanlang: ustun fasadda (har bir sterjen, uning belgisi, bogʻlovchi zonalari va ulanma oʻlchamlari bilan) va oʻrtasidagi kesim, undan keyin sterjenlarni egish varagi chiziladi. {{ui:Bu varaqni PDF sifatida}} ni saqlang.

## Bu nimani qilmaydi

- Dumaloq ustunlar va spirallar hamda toʻrtburchak boʻlmagan ustunlar: qurilmagan.
- Kesim ichidagi burchak va koʻndalang bogʻlovchilar hamda seysmik detallashtirish (ACI 318-19 18-bob): qurilmagan.
- Siz tanlagan joylardagi yoki pogʻonali ulanmalar: barcha sterjenlar bitta kesimda ulanadi.
- Sterjenlar yuk uchun yetarlimi: bu muhandisning loyihasi.
